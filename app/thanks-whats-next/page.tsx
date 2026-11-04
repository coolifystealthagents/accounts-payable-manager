import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { media } from '@/lib/media';

export const metadata: Metadata = { title: 'What happens next', robots: { index: false, follow: false } };

export default function NextPage() {
  return (
    <main id="main-content" tabIndex={-1} className="utility-page">
      <section className="utility-hero compact">
        <div><p className="eyebrow">You are booked</p><h1>Here is what happens next.</h1><p>Bring one recurring workflow that needs a clearer owner, output, or review point. We will use it to make the conversation practical.</p><Link className="button primary" href="/blog">Read practical guides</Link></div>
        <figure className="utility-visual" data-reveal-media><Image src={media.thanksNext.src} alt={media.thanksNext.alt} fill priority sizes="(max-width: 1050px) 88vw, 44vw" style={{ objectPosition: media.thanksNext.position }} /></figure>
      </section>
    </main>
  );
}
