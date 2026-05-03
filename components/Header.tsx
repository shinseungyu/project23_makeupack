"use client";

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/funding', label: '국비지원' },
  { href: '/employment', label: '해외취업' },
  { href: '/qna', label: 'FAQ' },
  { href: '/board', label: '정보게시판' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      background: 'var(--glass)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderBottom: '1px solid rgba(229,225,216,0.5)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '0 1.5rem',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        height: '4rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a href="/" style={{ fontWeight: 900, fontSize: 15, color: 'var(--primary)', textDecoration: 'none', letterSpacing: '-0.02em' }}>
          메이크업학원 <span style={{ color: 'var(--accent)' }}>수강료비교</span>
        </a>

        {/* 데스크탑 메뉴 */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)', textDecoration: 'none' }}>
              {label}
            </a>
          ))}
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="hamburger-btn"
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            flexDirection: 'column',
            gap: 5,
          }}
          aria-label="메뉴 열기"
        >
          <span style={{
            display: 'block', width: 22, height: 2,
            background: open ? 'transparent' : 'var(--text-primary)',
            transition: 'all 0.2s',
            transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span style={{
            display: 'block', width: 22, height: 2,
            background: 'var(--text-primary)',
            opacity: open ? 0 : 1,
            transition: 'opacity 0.2s',
          }} />
          <span style={{
            display: 'block', width: 22, height: 2,
            background: 'var(--text-primary)',
            transition: 'all 0.2s',
            transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </div>

      {/* 모바일 드로어 */}
      {open && (
        <div className="mobile-menu" style={{
          position: 'fixed',
          top: '4rem',
          left: 0,
          right: 0,
          background: 'white',
          borderBottom: '1px solid var(--border-color)',
          padding: '1rem 1.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        }}>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
