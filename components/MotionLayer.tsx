'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MotionLayer() {
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.utils.toArray<HTMLElement>('[data-reveal-media]').forEach((frame) => {
      const image = frame.querySelector('img');
      gsap.fromTo(frame, { clipPath: 'inset(0 0 18% 0)' }, {
        clipPath: 'inset(0 0 0% 0)',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: frame, start: 'top 86%', once: true }
      });
      if (image) {
        gsap.fromTo(image, { scale: 1.08 }, {
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: { trigger: frame, start: 'top 86%', once: true }
        });
      }
    });
  });

  return null;
}
