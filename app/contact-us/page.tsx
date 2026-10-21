import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { ReviewMarquee } from '@/components/Reviews';
import { site } from '@/lib/site';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact Us | Accounts Payable Staffing Consultation',
  description: 'Talk with Accounts Payable Manager about controlled support for invoice intake, matching, vendor records, approvals, payment preparation, and reporting.',
  alternates: { canonical: '/contact-us' }
};

const steps = [
  ['Workflow discovery', 'Map the queue, source records, current owner, review points, and exception paths.'],
  ['Role design', 'Define repeatable responsibilities, access boundaries, expected outputs, and escalation rules.'],
  ['Candidate matching', 'Review remote professionals whose strengths fit your systems and documentation standards.'],
  ['Controlled launch', 'Begin with an approved queue, least-privilege access, sampled quality checks, and accountable finance review.']
];

const faqs = [
  ['What accounts payable work can a remote specialist support?', 'A specialist can organize invoice intake, prepare matching evidence, maintain approved vendor fields, route approvals, compile payment-run records, and prepare operational reports.'],
  ['Can a specialist release payments or change bank details?', 'No. Payment release, bank access, sensitive vendor changes, accounting judgments, tax treatment, write-offs, and financial approvals stay with authorized personnel.'],
  ['Can support work in our existing systems?', 'Role design can account for approved AP, accounting, procurement, ticketing, and document systems. Your organization controls accounts, permissions, security, retention, and final records.'],
  ['How should we prepare for the consultation?', 'Bring a sample workflow without sensitive vendor or banking data, approximate queue volumes, ownership, approval levels, exception types, systems, and service standards.']
];

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${site.name}`,
    url: `https://${site.domain}/contact-us`,
    description: 'Accounts payable staffing consultation.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${site.domain}` },
        { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `https://${site.domain}/contact-us` }
      ]
    }
  };

  return (
    <main id="main-content" tabIndex={-1} className="contact-page">
      <section className="contact-conversion">
        <div className="contact-container contact-first-fold">
          <div className="contact-intro">
            <p className="eyebrow">Accounts payable staffing consultation</p>
            <h1>Build capacity without giving up control.</h1>
            <p className="contact-dek">Define remote support for recurring payable queues while authorized finance leaders retain every approval, accounting judgment, vendor-sensitive change, and payment release.</p>
            <ul className="scope-labels" aria-label="Consultation scope">
              <li>Workflow mapping</li>
              <li>Role boundaries</li>
              <li>Candidate matching</li>
            </ul>
            <ReviewMarquee />
          </div>
          <div className="contact-form-card">
            <p className="eyebrow">Start with your workflow</p>
            <h2>Book a free consultation</h2>
            <p>Share enough to prepare a useful conversation. Do not include bank details, credentials, tax records, or invoice data.</p>
            <LeadForm source="contact-page-consultation" />
          </div>
        </div>
      </section>

      <section className="contact-section credibility" aria-labelledby="stealth-team-title">
        <div className="contact-container credibility-grid">
          <figure className="team-photo">
            <Image src="/brand/team-bacolod.jpg" alt="StealthAgents team members collaborating in the Bacolod office" fill sizes="(max-width: 900px) 90vw, 52vw" priority />
            <figcaption className="official-team-plate">
              <Image src="/brand/stealth-agents-logo-black.webp" alt="StealthAgents" width={119} height={40} />
              <span>Official team, Bacolod</span>
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow">Powered by StealthAgents</p>
            <h2 id="stealth-team-title">Managed support behind a specialist AP role.</h2>
            <p>StealthAgents recruits and supports dedicated remote professionals through structured matching, account oversight, and an operating model built around documented work. Accounts Payable Manager adds the payable-specific role design, boundaries, and workflow context.</p>
            <p>Your finance team still owns system access, accounting policy, vendor-sensitive changes, approvals, payment movement, fraud controls, and final records.</p>
            <a className="text-link" href="https://stealthagents.com/our-team" target="_blank" rel="noopener noreferrer">Meet the StealthAgents team</a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <p className="eyebrow">A controlled path forward</p>
          <h2>What happens after you reach out</h2>
          <div className="step-grid">{steps.map(([title, copy]) => <article key={title} className="step-card"><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="contact-section boundaries">
        <div className="contact-container narrow">
          <p className="eyebrow">Accountability stays clear</p>
          <h2>Preparation can be delegated. Financial authority cannot.</h2>
          <p>Remote specialists can prepare records, maintain approved nonsensitive fields, organize evidence, route approvals, record status, and flag exceptions. They do not change bank details without controlled authorization, release payments, control bank accounts, make accounting or tax judgments, approve invoices, select vendors, sign contracts, or override financial, procurement, security, and compliance controls.</p>
          <p>Your authorized finance, procurement, legal, compliance, security, and executive personnel retain responsibility for vendor onboarding, sensitive changes, ledger policy, approvals, payment movement, fraud controls, tax treatment, contracts, privacy, security, regulated work, and final financial records.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <p className="eyebrow">Explore focused support</p>
          <h2>Common starting points</h2>
          <div className="path-grid">
            <Link href="/services/invoice-intake"><h3>Invoice intake support</h3><p>Organize incoming invoices and source records into a reviewable queue.</p></Link>
            <Link href="/services/three-way-match-support"><h3>Three way match support</h3><p>Prepare matching evidence and exceptions for accountable review.</p></Link>
            <Link href="/services/vendor-record-upkeep"><h3>Vendor record upkeep</h3><p>Maintain approved vendor details with controlled change records.</p></Link>
            <Link href="/services/approval-routing"><h3>Approval routing</h3><p>Keep invoice ownership, status, and exceptions visible.</p></Link>
          </div>
          <Link className="text-link all-services" href="/services">View all services</Link>
        </div>
      </section>

      <section className="contact-section faq">
        <div className="contact-container narrow">
          <p className="eyebrow">Payables staffing questions</p>
          <h2>Frequently asked questions</h2>
          {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
