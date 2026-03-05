"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Technology", href: "/technology" },
  { label: "Missions", href: "/missions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}


function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="relative text-sm font-medium text-white/60 hover:text-white transition-colors duration-250 group"
    >
      {label}
      {/* <span className="absolute -bottom-0.5 left-0 h-px w-0 rounded-full  transition-all duration-300 group-hover:w-full" /> */}
    </Link>
  );
}

// ─────────────────────────────────────────────
// Glow CTA Button
// ─────────────────────────────────────────────

function GlowButton({ children, className = "" }) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold rounded-full",
        "text-neutral bg-white",
        "transition-all duration-300",
        "hover:scale-[1.04] hover:shadow-[0_0_24px_4px_rgba(99,102,241,0.5)]",
        "active:scale-95",
        className
      )}
    >
      {children}
    </button>
  );
}

// ─────────────────────────────────────────────
// Mobile Fullscreen Panel
// ─────────────────────────────────────────────

function MobileMenu({ open, onClose }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Dim backdrop */}
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Slide-in panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[201] w-full max-w-sm flex flex-col",
          "bg-[#050510]",
          "transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          open ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 55% at 50% 0%, rgba(99,102,241,0.13) 0%, transparent 70%),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px)
          `,
        }}
      >
        {/* Top row: logo + close */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
          <img src="/NovaSpaceLogo.png" alt="NovaSpace Logo" className="h-9 w-auto" />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col flex-1 justify-center px-8 gap-0">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="group flex items-center gap-3 py-5 text-3xl font-light text-white/50 hover:text-white transition-colors duration-200 border-b border-white/[0.05]"
              style={{ transitionDelay: open ? `${i * 55 + 80}ms` : "0ms" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-10 pt-4">
          <GlowButton className="w-full py-4 text-base !rounded-2xl">
            Start Collaboration
          </GlowButton>
        </div>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// Main Navbar  — floating pill
// ─────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/*
        ┌─────────────────────────────────────────────────┐
        │  Fixed full-width wrapper — no visual style     │
        │  Just positions the pill in the viewport        │
        └─────────────────────────────────────────────────┘
      */}
      <div className="fixed inset-x-0 top-4 z-[100] flex justify-center px-4 sm:px-6">
        {/*
          ┌────────────────────────────────────────────────┐
          │  The actual floating pill / glass container    │
          └────────────────────────────────────────────────┘
        */}
        <nav
          className={cn(
            // shape & layout
            "w-full max-w-5xl min-h-14 p-3 ps-4",
            "flex items-center justify-between",
            "rounded-full",
            // glass look
            "border border-white/10",
            // scroll-aware background
            "transition-all duration-500 ease-out",
            scrolled
              ? "bg-black/50 backdrop-blur-xl shadow-[0_8px_32px_-4px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)]"
              : "bg-black/40 backdrop-blur-xl shadow-lg shadow-black/40"
          )}
        >
          {/* ── Logo ─────────────────────── */}
          <Link href="/" className="flex-shrink-0 select-none">
            <img src="/NovaSpaceLogo.png" alt="NovaSpace Logo" className="h-8 w-auto" />
          </Link>

          {/* ── Desktop Links ─────────────── */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} href={link.href} label={link.label} />
            ))}
          </div>

          {/* ── Desktop CTA ──────────────── */}
          <div className="hidden md:block flex-shrink-0">
            <GlowButton>Start Collaboration</GlowButton>
          </div>

          {/* ── Mobile Hamburger ─────────── */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/25 transition-all duration-200"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={19} />
          </button>
        </nav>
      </div>

      {/* Mobile panel */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}