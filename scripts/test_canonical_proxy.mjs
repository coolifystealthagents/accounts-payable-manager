import { spawn } from "node:child_process";
import http from "node:http";
import process from "node:process";

const port = 52705;
const child = spawn(process.execPath, [".next/standalone/server.js"], {
  cwd: process.cwd(),
  env: { ...process.env, HOSTNAME: "127.0.0.1", PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"],
});

let diagnostics = "";
child.stdout.on("data", (chunk) => { diagnostics += chunk.toString(); });
child.stderr.on("data", (chunk) => { diagnostics += chunk.toString(); });

function request(path, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: "127.0.0.1",
      port,
      path,
      method: "GET",
      headers,
    }, (res) => {
      res.resume();
      res.on("end", () => resolve({ status: res.statusCode, location: res.headers.location || null }));
    });
    req.on("error", reject);
    req.setTimeout(10_000, () => req.destroy(new Error("request timeout")));
    req.end();
  });
}

async function waitUntilReady() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      await request("/", { Host: `127.0.0.1:${port}` });
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
  throw new Error(`standalone server did not become ready: ${diagnostics.slice(-500)}`);
}

const canonical = "https://accountspayablemanager.com";
const cases = [
  {
    name: "apex HTTP canonicalizes",
    path: "/services/invoice-intake?one=1&two=2",
    headers: { Host: "accountspayablemanager.com", "cf-visitor": '{"scheme":"http"}' },
    status: 308,
    location: `${canonical}/services/invoice-intake?one=1&two=2`,
  },
  {
    name: "HTTPS www canonicalizes",
    path: "/services/invoice-intake?one=1&two=2",
    headers: { Host: "www.accountspayablemanager.com", "cf-visitor": '{"scheme":"https"}' },
    status: 308,
    location: `${canonical}/services/invoice-intake?one=1&two=2`,
  },
  {
    name: "HTTPS apex avoids redirect loop and trusts cf-visitor over fallback",
    path: "/services/invoice-intake?one=1&two=2",
    headers: { Host: "accountspayablemanager.com", "cf-visitor": '{"scheme":"https"}', "x-forwarded-proto": "http" },
    status: 200,
    location: null,
  },
  {
    name: "malformed cf-visitor falls back to x-forwarded-proto",
    path: "/services/invoice-intake?one=1&two=2",
    headers: { Host: "accountspayablemanager.com", "cf-visitor": "not-json", "x-forwarded-proto": "http" },
    status: 308,
    location: `${canonical}/services/invoice-intake?one=1&two=2`,
  },
  {
    name: "network-path input cannot escape canonical origin",
    path: "//attacker.example/collect?token=not-a-secret",
    headers: { Host: "www.accountspayablemanager.com", "cf-visitor": '{"scheme":"https"}' },
    status: 308,
    location: "/attacker.example/collect?token=not-a-secret",
    finalLocation: `${canonical}/attacker.example/collect?token=not-a-secret`,
  },
  {
    name: "unrecognized preview host passes through",
    path: "/services/invoice-intake",
    headers: { Host: "preview.example.test", "x-forwarded-proto": "http" },
    status: 200,
    location: null,
  },
  {
    name: "localhost passes through",
    path: "/services/invoice-intake",
    headers: { Host: `127.0.0.1:${port}`, "x-forwarded-proto": "http" },
    status: 200,
    location: null,
  },
];

try {
  await waitUntilReady();
  for (const test of cases) {
    const actual = await request(test.path, test.headers);
    if (actual.status !== test.status || actual.location !== test.location) {
      throw new Error(`${test.name}: expected ${test.status} ${test.location}, received ${actual.status} ${actual.location}`);
    }
    if (test.finalLocation) {
      const second = await request(actual.location, test.headers);
      if (second.status !== 308 || second.location !== test.finalLocation) {
        throw new Error(`${test.name}: second hop expected 308 ${test.finalLocation}, received ${second.status} ${second.location}`);
      }
    }
    console.log(`PASS: ${test.name}`);
  }

  const excluded = await request("/_next/static/not-found.js", {
    Host: "www.accountspayablemanager.com",
    "cf-visitor": '{"scheme":"https"}',
  });
  if (excluded.status === 308) throw new Error("static matcher exclusion redirected unexpectedly");
  console.log("PASS: static matcher exclusion bypasses canonical proxy");
} finally {
  child.kill("SIGTERM");
  await new Promise((resolve) => {
    child.once("exit", resolve);
    setTimeout(resolve, 2_000);
  });
}
