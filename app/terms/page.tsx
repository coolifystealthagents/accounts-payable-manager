import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms of use', description: 'Terms governing use of the Accounts Payable Manager informational website.', alternates: { canonical: '/terms' } };

export default function TermsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="utility-page legal-page">
      <header className="utility-hero compact"><div><p className="eyebrow">Terms</p><h1>Terms of use</h1><p>Last updated October 8, 2026</p></div><img className="utility-visual" src="/visual/terms-workflow-boundaries" alt="Documented accounts payable workflow boundaries" /></header>
      <section className="content-wrap"><div className="prose"><h2>Website information</h2><p>This website provides general information about remote staffing and workflow design. It does not provide legal, financial, accounting, tax, or other licensed professional advice.</p><h2>Acceptable use</h2><p>Do not misuse the site, interfere with its operation, attempt unauthorized access, or submit unlawful or sensitive financial material.</p><h2>Decision responsibility</h2><p>Your authorized personnel remain responsible for accounting treatment, vendor-sensitive changes, approvals, payment movement, security, compliance, and final financial records.</p><h2>Governing law</h2><p>These terms are governed by the laws of the State of Delaware, USA.</p></div></section>
    </main>
  );
}
