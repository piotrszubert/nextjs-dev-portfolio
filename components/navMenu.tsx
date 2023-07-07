import React from 'react';
import Link from 'next/link';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function NavMenu() {
  return (
    <nav className='flex justify-evenly'>
      {links.map((link, index) => (
        <Link key={index} href={link.path}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
