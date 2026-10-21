#!/usr/bin/env python3
"""Focused V3 release contracts for protected conversion and shared site systems."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]

def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")

lead = read("components/LeadForm.tsx")
lead_api = read("app/api/submit-lead/route.ts")
contact = read("app/contact-us/page.tsx")
chrome = read("components/SiteChrome.tsx")
navigation = read("components/SiteNavigation.tsx")
reviews = read("lib/reviews.ts")
review_component = read("components/Reviews.tsx")
layout = read("app/layout.tsx")
service_page = read("app/services/[slug]/page.tsx")
blog_page = read("app/blog/[slug]/page.tsx")
research_page = read("app/research/[slug]/page.tsx")
canonical_proxy = read("proxy.ts")

contracts = {
    "lead posts to protected endpoint": "fetch('/api/submit-lead'" in lead,
    "lead success invokes ACR tracking": "window.acrTracker?.trackLead" in lead,
    "lead success routes to thank-you": "router.push('/thank-you')" in lead,
    "honeypot remains enforced": "form.get('website_url')" in lead_api,
    "full contact source contract remains prefix based": "source.startsWith('contact-page')" in lead_api,
    "business email rejection remains client and server side": "personalDomains.has" in lead and "personalDomains.has" in lead_api,
    "upstream lead forwarding remains available": "process.env.ACR_LEAD_ENDPOINT" in lead_api,
    "Mattermost fallback remains active": "sendLeadFallbackToMattermost" in lead_api,
    "contact uses the protected source prefix": "contact-page-consultation" in contact,
    "scheduler does not precede the full form": "go.oncehub.com" not in contact,
    "scheduler remains on the post-submit route": "go.oncehub.com" in read("app/thank-you/page.tsx"),
    "timed modal is removed globally": "TimedLeadModal" not in layout,
    "parent attribution is globally visible": "Powered by StealthAgents" in chrome,
    "primary navigation has exactly three configured options": navigation.count("label: '") == 3,
    "primary navigation exposes route active and scrolled states": "aria-current" in navigation and "data-scroll-state" in navigation,
    "approved review collection has at least ten records": len(re.findall(r"\bid: '[^']+'", reviews)) >= 10,
    "contact uses approved review collection": "ReviewMarquee" in contact,
    "review rail renders each approved record once": review_component.count("stealthAgentsReviews.map") == 1 and "clone" not in review_component,
    "contact uses official Bacolod team asset": "/brand/team-bacolod.jpg" in contact,
    "service template contains workflow, controls, boundaries, examples and FAQs": all(token in service_page for token in ("workflow", "controls", "boundaries", "scenarios", "faqs")),
    "blog template uses generated TOC sidebar": "ArticleSidebar" in blog_page and "tocItems" in blog_page,
    "research template uses generated TOC sidebar": "ArticleSidebar" in research_page and "tocItems" in research_page,
    "canonical proxy uses fixed production allowlist and preserves path and query": all(token in canonical_proxy for token in (
        'const CANONICAL_ORIGIN = "https://accountspayablemanager.com"',
        '"www.accountspayablemanager.com"',
        'request.nextUrl.pathname',
        'request.nextUrl.search',
        '"cf-visitor"',
        '"x-forwarded-proto"',
        'NextResponse.redirect',
        '308',
    )),
    "design registry exists": (ROOT / "design-registry.json").is_file(),
    "every route renderer exposes the shared skip target": all('id="main-content"' in read(path) for path in (
        "components/Marketing.tsx", "app/about/page.tsx", "app/blog/page.tsx", "app/blog/[slug]/page.tsx",
        "app/contact-us/page.tsx", "app/services/page.tsx", "app/services/[slug]/page.tsx",
        "app/research/page.tsx", "app/research/[slug]/page.tsx", "app/privacy/page.tsx",
        "app/terms/page.tsx", "app/thank-you/page.tsx", "app/thanks-whats-next/page.tsx", "app/not-found.tsx"
    )),
}

failed = [name for name, passed in contracts.items() if not passed]
for name, passed in contracts.items():
    print(f"{'PASS' if passed else 'FAIL'}: {name}")
if failed:
    raise SystemExit(f"V3 contracts failed: {', '.join(failed)}")
print(f"PASS: {len(contracts)} focused V3 contracts")
