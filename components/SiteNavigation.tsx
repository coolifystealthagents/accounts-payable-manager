'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const primaryNav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' }
];

export function PrimaryHeaderNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  const isCurrent = (href: string) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <nav className={scrolled ? 'primary-nav is-scrolled' : 'primary-nav'} aria-label="Primary navigation" data-scroll-state={scrolled ? 'scrolled' : 'top'}>
      {primaryNav.map((item) => <Link className={isCurrent(item.href) ? 'is-active' : ''} aria-current={isCurrent(item.href) ? 'page' : undefined} key={item.href} href={item.href}>{item.label}</Link>)}
    </nav>
  );
}

export function FooterNav() {
  return (
    <nav className="footer-links" aria-label="Footer navigation">
      {primaryNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/research">Research</Link>
      <Link href="/privacy">Privacy</Link>
      <Link href="/terms">Terms</Link>
    </nav>
  );
}
