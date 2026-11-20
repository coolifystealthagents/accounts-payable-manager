'use client';

import { useEffect } from 'react';

export function MotionLayer() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') return;

    const frames = [...document.querySelectorAll<HTMLElement>('[data-reveal-media]')];
    if (!frames.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -14% 0px' });

    document.documentElement.classList.add('motion-reveals-enabled');
    frames.forEach((frame) => observer.observe(frame));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-reveals-enabled');
      frames.forEach((frame) => frame.classList.remove('is-revealed'));
    };
  }, []);

  return null;
}
