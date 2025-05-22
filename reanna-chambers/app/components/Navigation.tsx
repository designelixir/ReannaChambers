'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../globals.css';
import Logo from './Logo';

export default function Navigation() {
  const pathname = usePathname(); 

  return (
    <nav className="flex-center-spaceevenly" style={{zIndex: '99'}}>
      {/* Left Side Links */}
      <div className="flex-center-spacebetween links-left">
        <Link href="/about" className={`italic nav-link hover black-text-glow flex-center-center ${pathname === '/about' ? 'active-link' : ''}`}>
          <i>about</i>
        </Link>
        <Link
          href="/photo"
          className={`nav-link black-text-glow hover flex-center-center ${
            pathname === '/photo' ? 'active-link' : ''
          }`}
        >
          <i>photo</i>
        </Link>
      </div>

      {/* Center Logo */}
      <Logo></Logo>

      {/* Right Side Links */}
      <div className="flex-center-spacebetween links-right">
        <Link
          href="/production"
          className={`nav-link black-text-glow hover flex-center-center ${
            pathname === '/production' ? 'active-link' : ''
          }`}
        >
          <i>production</i>
        </Link>
        <Link
          href="/video"
          className={`nav-link black-text-glow hover flex-center-center ${
            pathname === '/video' ? 'active-link' : ''
          }`}
        >
          <i>video</i>
        </Link>
      </div>
    </nav>
  );
}
