import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Uses', path: '/uses' },
];

export default function NavMenu({ flexDirection = 'flex-row', gap = 'gap-3' }) {
  const router = useRouter();

  return (
    <nav className={`flex justify-evenly ${flexDirection} ${gap}`}>
      {links.map((link, index) => (
        <Link
          className={`${router.pathname === link.path ? 'underline' : ''} font-semibold hover:text-violet-400`}
          key={index}
          href={link.path}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
