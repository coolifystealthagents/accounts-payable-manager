import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy policy', description: `How ${site.name} handles website, inquiry, analytics, and booking information.`, alternates: { canonical: '/privacy' } };

export default function PrivacyPage() {
  return (
    <main id="main-content" tabIndex={-1} className="utility-page legal-page">
      <header className="utility-hero compact"><div><p className="eyebrow">Privacy</p><h1>Privacy policy</h1><p>Last updated October 8, 2026</p></div><img className="utility-visual" src="/visual/privacy-record-controls" alt="Protected records and controlled access workflow" /></header>
      <section className="content-wrap"><div className="prose"><h2>Information we collect</h2><p>We collect the contact, company, staffing, referral, and message information you submit through our consultation form. Please do not send bank details, credentials, tax records, or invoice data. We also collect basic site usage, attribution, and performance events.</p><h2>How we use information</h2><p>We use submitted information to respond to your request, prepare and coordinate a consultation, improve the site, attribute inquiry sources, and protect the service from abuse.</p><h2>Service providers</h2><p>Authorized lead-delivery, analytics, hosting, and booking providers may process the limited information needed to operate these functions. The post-submission scheduler is provided by OnceHub.</p><h2>Contact</h2><p>Questions can be sent to hello@{site.domain}.</p></div></section>
    </main>
  );
}
