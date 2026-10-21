const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] || character);

function hash(value: string) {
  return [...value].reduce((total, character) => ((total * 31) + character.charCodeAt(0)) >>> 0, 2166136261);
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const safeSlug = slug.replace(/[^a-z0-9-]/gi, '').slice(0, 100) || 'accounts-payable';
  const seed = hash(safeSlug);
  const title = escapeXml(safeSlug.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' '));
  const rows = Array.from({ length: 7 }, (_, index) => {
    const y = 230 + index * 72;
    const width = 390 + ((seed >> (index % 16)) % 290);
    const status = index % 3 === seed % 3;
    return `<g><rect x="205" y="${y}" width="${width}" height="44" rx="10" fill="#fff" opacity="${0.7 + index * 0.035}"/><rect x="230" y="${y + 15}" width="${Math.max(110, width - 150)}" height="13" rx="6" fill="#8a7dcc" opacity=".55"/><circle cx="${205 + width - 28}" cy="${y + 22}" r="10" fill="${status ? '#d89352' : '#4939a6'}"/></g>`;
  }).join('');
  const nodes = Array.from({ length: 6 }, (_, index) => {
    const angle = (index / 6) * Math.PI * 2 + (seed % 23) / 10;
    const x = Math.round(1190 + Math.cos(angle) * 230);
    const y = Math.round(465 + Math.sin(angle) * 260);
    return `<line x1="1190" y1="465" x2="${x}" y2="${y}" stroke="#8a7dcc" stroke-width="5" opacity=".55"/><circle cx="${x}" cy="${y}" r="48" fill="#fff" stroke="#4939a6" stroke-width="5"/><path d="M${x-17} ${y}h34M${x} ${y-17}v34" stroke="#d89352" stroke-width="7" stroke-linecap="round"/>`;
  }).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc"><title id="title">${title} accounts payable workflow</title><desc id="desc">A structured ledger and approval routing illustration for ${title}.</desc><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ece8fa"/><stop offset="1" stop-color="#fff7ec"/></linearGradient><pattern id="grid" width="52" height="52" patternUnits="userSpaceOnUse"><path d="M52 0H0V52" fill="none" stroke="#4939a6" stroke-width="1" opacity=".12"/></pattern></defs><rect width="1600" height="900" fill="url(#bg)"/><rect width="1600" height="900" fill="url(#grid)"/><rect x="130" y="115" width="760" height="670" rx="32" fill="#1d1834" opacity=".96"/><text x="205" y="185" fill="#fff" font-family="Arial,sans-serif" font-size="34" font-weight="700">${title}</text>${rows}<circle cx="1190" cy="465" r="122" fill="#4939a6"/><circle cx="1190" cy="465" r="82" fill="#1d1834" stroke="#d89352" stroke-width="8"/><path d="M1144 466l31 31 64-76" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>${nodes}</svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8', 'Cache-Control': 'public, max-age=31536000, immutable', 'X-Content-Type-Options': 'nosniff' } });
}
