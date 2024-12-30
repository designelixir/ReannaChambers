'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook to get the current route
import '../globals.css';

export default function Navigation() {
  const pathname = usePathname(); // Get the current route

  return (
    <nav className="flex-center-spaceevenly">
      {/* Left Side Links */}
      <div className="flex-center-spacebetween links-left">
        <Link
          href="/about"
          className={`nav-link flex-center-center ${
            pathname === '/about' ? 'active-link' : ''
          }`}
        >
          <i>
            A<span className="aalt">b</span>out
          </i>
        </Link>
        <Link
          href="/photo"
          className={`nav-link flex-center-center ${
            pathname === '/photo' ? 'active-link' : ''
          }`}
        >
          <i>
            Pho<span className="aalt">t</span>o
          </i>
        </Link>
      </div>

      {/* Center Logo */}
      <div className="flex-center-center logo-container">
        <Link href="/">
          <div className="logo"></div>
        </Link>
      </div>

      {/* Right Side Links */}
      <div className="flex-center-spacebetween links-right">
        <Link
          href="/production"
          className={`nav-link flex-center-center ${
            pathname === '/production' ? 'active-link' : ''
          }`}
        >
          <i>
            P<span className="aalt">r</span>oduction
          </i>
        </Link>
        <Link
          href="/video"
          className={`nav-link flex-center-center ${
            pathname === '/video' ? 'active-link' : ''
          }`}
        >
          <i>
            Vi<span className="aalt">d</span>eo
          </i>
        </Link>
      </div>
    </nav>
  );
}
