'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed-header">
      <div className="brand-text">Bev-Rage | Specialty Drink Bars</div>
      <Link href="/" className="logo">
        <span className="logo-text">br</span>
      </Link>
      <button className="btn-menu">MENU</button>
    </header>
  );
}
