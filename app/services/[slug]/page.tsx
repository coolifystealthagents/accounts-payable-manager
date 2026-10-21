import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';

const detail: Record<string, {
  audience: string;
  problem: string;
  inputs: string[];
  outputs: string[];
  workflow: [string, string][];
  controls: string[];
  boundaries: string[];
  scenarios: [string, string][];
  faqs: [string, string][];
}> = {
  'invoice-intake': {
    audience: 'Finance teams receiving invoices through several inboxes, portals, locations, or operating units that need one visible intake discipline.',
    problem: 'Invoices can enter without the purchase record, owner, required fields, or usable source file. Intake support turns those arrivals into an organized queue without deciding whether an invoice should be approved or paid.',
    inputs: ['Approved invoice inboxes and portals', 'Your required-field and duplicate-check rules', 'Vendor and purchase-order reference access', 'Named queue owners and escalation paths'],
    outputs: ['A classified intake queue', 'Completeness and possible-duplicate flags', 'Source links or custody notes', 'Incomplete-item and exception routing'],
    workflow: [['Receive and preserve', 'Capture the approved source file and record where and when it arrived.'], ['Check the intake standard', 'Review required fields, source quality, vendor reference, and potential duplicate indicators.'], ['Classify and route', 'Place complete items in the agreed queue and return incomplete items through the documented path.'], ['Report exceptions', 'Summarize missing information, stalled items, and recurring intake problems for the accountable owner.']],
    controls: ['Use only approved source channels', 'Retain source evidence with the queue record', 'Separate duplicate indicators from duplicate decisions', 'Sample completed records against the intake checklist'],
    boundaries: ['The specialist does not approve invoices', 'The specialist does not create missing evidence', 'Vendor bank or tax changes require controlled authorization', 'Accounting treatment and payment priority stay with finance leadership'],
    scenarios: [['A shared inbox is difficult to monitor', 'Create a consistent receipt and classification queue with visible ownership.'], ['Invoices arrive without purchase references', 'Flag the missing reference and route it to the named resolver.'], ['Possible duplicates consume reviewer time', 'Prepare side-by-side identifiers for an authorized reviewer to decide.']],
    faqs: [['Can the role monitor more than one inbox?', 'Yes, when every approved channel has a documented capture method, custody rule, and queue destination.'], ['Does a duplicate flag mean an invoice is rejected?', 'No. It is an indicator for accountable review, not a final accounting or vendor decision.']]
  },
  'three-way-match-support': {
    audience: 'Accounts payable and procurement teams that need purchase order, receipt, and invoice evidence prepared consistently before review.',
    problem: 'Matching slows down when records use different identifiers, units, dates, or tolerances. Support can assemble the evidence and document differences while authorized staff retain approval and exception decisions.',
    inputs: ['Approved purchase orders and amendments', 'Receipt or service-entry evidence', 'Invoice source files', 'Your field, quantity, price, and tolerance rules'],
    outputs: ['A review-ready evidence packet', 'Matched-field notes', 'A documented exception list', 'Routing to the correct resolver'],
    workflow: [['Gather the approved records', 'Locate the current purchase, receipt, and invoice versions from authorized systems.'], ['Normalize references', 'Align approved identifiers and units without changing the source records.'], ['Prepare the comparison', 'Document agreement and differences against your written matching rules.'], ['Route the decision', 'Send clean packets and exceptions to the owners assigned by policy.']],
    controls: ['Record source version and retrieval time', 'Never infer a receipt or approval', 'Use the client’s declared tolerance policy', 'Sample packets for evidence completeness'],
    boundaries: ['The specialist does not waive tolerances', 'The specialist does not approve an exception', 'The specialist does not modify purchase or receipt records', 'Payment and accounting decisions remain with authorized staff'],
    scenarios: [['Identifiers differ across systems', 'Prepare a traceable cross-reference for reviewer confirmation.'], ['Partial receipts create confusion', 'Separate received and outstanding quantities using approved records.'], ['Price differences recur', 'Document the pattern and route it to procurement or finance.']],
    faqs: [['Can support clear exceptions?', 'Support can prepare and route exception evidence. Only the authorized owner can resolve or approve the exception.'], ['What if one source record is missing?', 'The item should be marked incomplete and routed according to the documented escalation path.']]
  },
  'vendor-record-upkeep': {
    audience: 'Teams that need approved vendor contact and operational fields maintained with visible requests, evidence, and change history.',
    problem: 'Vendor records become unreliable when updates arrive through informal messages or sensitive and nonsensitive fields share one process. Support can prepare low-risk updates and change evidence while sensitive changes stay inside stronger controls.',
    inputs: ['Approved change request channels', 'Field-level authorization rules', 'Current vendor records', 'Independent verification and escalation procedures'],
    outputs: ['A prepared change request', 'Supporting-record checklist', 'Updated approved nonsensitive fields', 'A visible sensitive-change escalation'],
    workflow: [['Classify the request', 'Identify the field, request source, vendor record, and required evidence.'], ['Apply the control path', 'Separate routine contact updates from bank, tax, ownership, or identity-sensitive changes.'], ['Prepare or update', 'Complete only actions allowed by the written role and preserve the supporting record.'], ['Confirm and report', 'Record completion or escalation for the accountable vendor owner.']],
    controls: ['Field-level permissions', 'Independent paths for sensitive changes', 'Source and approver retention', 'Periodic change-log review'],
    boundaries: ['No bank-detail changes outside controlled authorization', 'No tax or identity judgment', 'No vendor creation without the approved workflow', 'No deletion or overwrite of required history'],
    scenarios: [['Routine contacts are outdated', 'Prepare approved phone, email, or operational contact updates.'], ['A bank change arrives by email', 'Stop and route it through the independent sensitive-change procedure.'], ['Duplicate vendor records appear possible', 'Prepare identifiers for the vendor owner to review.']],
    faqs: [['Can this role change vendor banking details?', 'Not as a routine upkeep task. Sensitive banking changes must use your controlled authorization and independent verification process.'], ['Can the specialist contact vendors?', 'Yes, for approved routine requests and scripts when the communication boundary is documented.']]
  },
  'approval-routing': {
    audience: 'Finance teams that need invoice ownership, pending approvals, reminders, and exceptions visible without transferring approval authority.',
    problem: 'Approval queues stall when ownership is unclear or status lives in email. Support can maintain routing and follow-up records while every approval remains with the designated authority.',
    inputs: ['Approval matrix and delegation rules', 'Invoice queue and status definitions', 'Approved reminder language', 'Escalation timing and backup-owner rules'],
    outputs: ['Assigned and visible approval queues', 'Documented reminder history', 'Stalled-item and exception views', 'Escalations to accountable owners'],
    workflow: [['Confirm the route', 'Apply the approved owner matrix to complete invoice records.'], ['Track status', 'Maintain timestamps, current owner, and required next action.'], ['Follow up', 'Send approved reminders at the declared interval.'], ['Escalate visibly', 'Route overdue, rejected, unclear, or unavailable-owner cases without making the decision.']],
    controls: ['Approved owner matrix only', 'No self-approval or substituted authority', 'Timestamped status history', 'Periodic stalled-item review'],
    boundaries: ['The specialist does not approve or reject invoices', 'The specialist does not alter approval limits', 'The specialist does not conceal overdue items', 'Delegation changes require authorized confirmation'],
    scenarios: [['Approvals remain in inboxes', 'Create a shared status record and approved reminder rhythm.'], ['An approver is unavailable', 'Use the documented backup or escalation path.'], ['Ownership is disputed', 'Pause routing and surface the item to the process owner.']],
    faqs: [['Can reminders be automated?', 'Automation may help when the source status, recipient, cadence, and exception path are approved and monitored.'], ['Who owns a disputed approval route?', 'The accountable process owner decides. Support should preserve the evidence and route the question.']]
  },
  'payment-run-preparation': {
    audience: 'Finance teams that need approved invoice records compiled for review while payment creation, authorization, and release remain segregated.',
    problem: 'Payment-run review is harder when approved items, holds, exclusions, source evidence, and exceptions are scattered. Support can prepare a consistent review view without gaining authority to move money.',
    inputs: ['Approved invoice population', 'Payment-cycle and cut-off rules', 'Hold and exclusion statuses', 'Required review and release evidence'],
    outputs: ['A review-ready proposed population', 'Hold and exclusion register', 'Missing-evidence and status flags', 'Reconciliation notes for authorized reviewers'],
    workflow: [['Define the population', 'Use the approved date, entity, status, and payment-cycle criteria.'], ['Check readiness', 'Confirm required approval and source evidence are present.'], ['Prepare exceptions', 'Separate holds, missing records, and unclear statuses.'], ['Hand off for authorization', 'Deliver the proposed population and evidence to the staff who review and release payment.']],
    controls: ['No payment credentials in the support role', 'Segregated preparation and release', 'Visible exclusions and population criteria', 'Post-run reconciliation by authorized finance staff'],
    boundaries: ['No bank or payment-platform control', 'No release, approval, or signature authority', 'No change to vendor banking data', 'No decision to override a hold or missing approval'],
    scenarios: [['Reviewers rebuild the population manually', 'Prepare one traceable view from approved status records.'], ['Holds are difficult to distinguish', 'Maintain a visible exclusion register with reason and owner.'], ['Evidence is incomplete at cut-off', 'Flag and exclude the item according to policy.']],
    faqs: [['Can the specialist upload a payment file?', 'That depends on your security model, but this service is designed around preparation rather than bank access or payment release.'], ['Who decides which exceptions proceed?', 'Only authorized finance personnel acting under your approval and payment controls.']]
  },
  'ap-reporting-support': {
    audience: 'Controllers and AP leaders who need consistent operational views of queue health, aging, exceptions, and handoffs from approved source data.',
    problem: 'Operational reporting becomes unreliable when definitions change or teams manually combine mismatched exports. Support can prepare repeatable views with declared sources and visible missingness.',
    inputs: ['Approved system exports or reports', 'Metric and status definitions', 'Reporting period and population rules', 'Named owners for data-quality exceptions'],
    outputs: ['Consistent operational summaries', 'Aging and queue-status views', 'Exception and missingness notes', 'Source and refresh documentation'],
    workflow: [['Confirm the definition', 'Record the period, population, status, source, and owner for each view.'], ['Prepare the data', 'Combine only approved records and preserve source references.'], ['Check completeness', 'Surface missing, stale, duplicated, or conflicting records.'], ['Publish for review', 'Deliver the operational view to finance leadership with limitations clearly stated.']],
    controls: ['Declared source and refresh time', 'Stable metric definitions', 'Visible missingness and reconciliation', 'Reviewer sign-off before external use'],
    boundaries: ['The specialist does not certify financial statements', 'The specialist does not invent missing values', 'Forecasts and accounting judgments remain with qualified staff', 'Operational views do not replace the general ledger'],
    scenarios: [['Queue status changes between meetings', 'Prepare a repeatable snapshot with source and refresh time.'], ['Aging totals do not reconcile', 'Document the population and differences for finance review.'], ['Recurring exceptions are hard to see', 'Group approved exception categories without claiming causation.']],
    faqs: [['Is this financial reporting?', 'No. It is operational AP support. Final financial statements, accounting policy, and assurance remain with qualified owners.'], ['Can definitions change over time?', 'Yes, but the change should be approved, dated, and documented so periods remain interpretable.']]
  }
};

export function generateStaticParams() { return site.services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return service ? { title: service.name, description: service.short, alternates: { canonical: `/services/${service.slug}` } } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const d = detail[slug];
  const related = site.services.filter((item) => item.slug !== slug).slice(0, 3);
  return (
    <main id="main-content" tabIndex={-1} className="service-detail">
      <header className="page-hero service-hero">
        <div>
          <p className="eyebrow">Accounts payable specialist role</p>
          <h1>{service.name}</h1>
          <p>{service.short}</p>
          <Link id={`cta-services-${service.slug}-bookcall`} className="button primary" href="/contact-us">Discuss this role in a free call</Link>
        </div>
        <img className="route-hero-image" src={`/visual/${service.slug}`} alt={`Visual workflow for ${service.name}`} />
      </header>
      <section className="content-wrap service-prose">
        <section><p className="eyebrow">Who this is for</p><h2>A focused role for a visible queue.</h2><p>{d.audience}</p><p>{d.problem}</p></section>
        <section className="service-columns"><div><h2>Inputs the role needs</h2><ul>{d.inputs.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h2>Outputs your team can review</h2><ul>{d.outputs.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
        <section><p className="eyebrow">Working model</p><h2>How the workflow operates</h2><div className="workflow-list">{d.workflow.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
        <section className="service-columns"><div><h2>Quality controls</h2><ul>{d.controls.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h2>Decisions that stay with your team</h2><ul>{d.boundaries.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
        <section><p className="eyebrow">Common starting scenarios</p><h2>Begin where the handoff is already visible.</h2><div className="scenario-grid">{d.scenarios.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
        <section><p className="eyebrow">Questions about the role</p><h2>Frequently asked questions</h2>{d.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
        <section><p className="eyebrow">Related support</p><h2>Build the surrounding workflow.</h2><div className="related-links">{related.map((item) => <Link key={item.slug} href={`/services/${item.slug}`}><strong>{item.name}</strong><span>{item.short}</span></Link>)}</div></section>
        <section className="inline-cta"><h2>Turn this workflow into a clear role brief.</h2><p>Bring your current queue, owner map, systems, and approval boundaries. We will help identify a controlled place to begin.</p><Link id={`cta-services-${service.slug}-consultation`} className="button primary" href="/contact-us">Plan a free consultation</Link></section>
      </section>
    </main>
  );
}
