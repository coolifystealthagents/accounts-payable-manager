import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'What happens next', robots: { index: false, follow: false } };

export default function NextPage() {
  return (
    <main id="main-content" tabIndex={-1} className="utility-page">
      <section className="utility-hero compact">
        <div><p className="eyebrow">You are booked</p><h1>Here is what happens next.</h1><p>Bring one recurring workflow that needs a clearer owner, output, or review point. We will use it to make the conversation practical.</p><Link className="button primary" href="/blog">Read practical guides</Link></div>
        <img className="utility-visual" src="/visual/consultation-next-steps" alt="A prepared accounts payable workflow moving into a structured consultation" />
      </section>
    </main>
  );
}
