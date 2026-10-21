import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Choose a time', robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return (
    <main id="main-content" tabIndex={-1} className="utility-page booking-page">
      <header className="utility-hero">
        <div><p className="eyebrow">Request received</p><h1>Thanks. Pick a time that works for you.</h1><p>Your free consultation can help turn the workflow into a clear support brief.</p></div>
        <img className="utility-visual" src="/visual/consultation-calendar" alt="Consultation calendar connected to an accounts payable workflow" />
      </header>
      <section className="content-wrap booking-panel" aria-labelledby="booking-title">
        <div><p className="eyebrow">Next step</p><h2 id="booking-title">Choose your consultation time</h2><p>The scheduler is provided by OnceHub. Selecting a time continues in the embedded booking service.</p></div>
        <iframe className="booking-frame" title="Book your consultation" src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1" loading="lazy" />
      </section>
    </main>
  );
}
