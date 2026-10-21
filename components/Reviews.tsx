'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { stealthAgentsReviews } from '@/lib/reviews';

function ReviewCard({ review }: { review: (typeof stealthAgentsReviews)[number] }) {
  return (
    <article className="review-card" data-review-id={review.id}>
      <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
      <p>{review.body}</p>
      <footer>
        <strong>{review.reviewer}</strong>
        <Link href={review.source} target="_blank" rel="noopener noreferrer">
          Verified Google review
        </Link>
      </footer>
    </article>
  );
}

export function ReviewMarquee() {
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = windowRef.current;
    if (!rail || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    let previous = performance.now();
    let paused = false;
    let offset = 0;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; previous = performance.now(); };
    const tick = (now: number) => {
      if (!paused) {
        offset += Math.min(now - previous, 50) * 0.025;
        const first = rail.firstElementChild as HTMLElement | null;
        if (first) {
          const gap = parseFloat(getComputedStyle(rail).columnGap || '0');
          const step = first.getBoundingClientRect().width + gap;
          if (offset >= step) {
            rail.appendChild(first);
            offset -= step;
          }
          rail.style.transform = `translate3d(${-offset}px,0,0)`;
        }
      }
      previous = now;
      frame = requestAnimationFrame(tick);
    };
    rail.addEventListener('pointerenter', pause);
    rail.addEventListener('pointerleave', resume);
    rail.addEventListener('focusin', pause);
    rail.addEventListener('focusout', resume);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      rail.removeEventListener('pointerenter', pause);
      rail.removeEventListener('pointerleave', resume);
      rail.removeEventListener('focusin', pause);
      rail.removeEventListener('focusout', resume);
      rail.style.transform = '';
    };
  }, []);

  return (
    <section className="review-collection" aria-labelledby="review-heading">
      <div className="review-heading-row">
        <div>
          <p className="eyebrow">StealthAgents reviews</p>
          <h2 id="review-heading">Support clients rely on.</h2>
        </div>
        <p>Ten distinct client reviews from StealthAgents’ verified first-party review collection.</p>
      </div>
      <div className="review-window">
        <div className="review-track" ref={windowRef}>
          {stealthAgentsReviews.map((review) => <ReviewCard key={review.id} review={review} />)}
        </div>
      </div>
    </section>
  );
}
