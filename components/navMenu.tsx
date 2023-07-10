import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Uses', path: '/uses' },
];

type NavMenuProps = {
  flexDirection?: string;
  gap?: string;
  markActiveLink?: boolean;
};

export default function NavMenu({ flexDirection = 'flex-row', gap = 'gap-3', markActiveLink = true }: NavMenuProps) {
  const router = useRouter();

  return (
    <nav className={`flex justify-evenly ${flexDirection} ${gap}`}>
      {links.map((link, index) => (
        <Link
          className={`${markActiveLink && router.pathname === link.path ? 'underline' : ''} font-semibold hover:text-violet-400`}
          key={index}
          href={link.path}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
