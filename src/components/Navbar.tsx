"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Hero" },
  { href: "#story", label: "Story" },
  { href: "#chart", label: "Chart" },
  { href: "#bounty", label: "Bounty" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape, and when the viewport grows to desktop
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled || open
          ? "border-gold/40 bg-royal/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-gold shadow-[0_0_14px_rgba(212,175,55,0.45)] transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/1790975172382.jpg"
              alt="Jean le Coyote"
              fill
              sizes="40px"
              priority
              className="origin-[30%_45%] scale-[1.6] object-cover object-[30%_45%]"
            />
          </span>
          <span className="font-serif text-lg font-semibold tracking-[0.2em] text-gold transition-colors group-hover:text-gold-soft sm:text-2xl sm:tracking-[0.28em]">
            JEAN LE COYOTE
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`group relative text-sm font-medium uppercase tracking-[0.2em] transition-colors ${
                  active === href
                    ? "text-gold"
                    : "text-offwhite/80 hover:text-gold"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    active === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center rounded-md border border-gold/50 text-gold transition-colors hover:bg-gold/10 md:hidden"
        >
          <span
            className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="min-h-0 overflow-hidden px-5 sm:px-8">
          {links.map(({ href, label }) => (
            <li key={href} className="border-t border-gold/20 first:mt-1">
              <a
                href={href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={`block py-4 font-serif text-2xl tracking-[0.15em] transition-colors ${
                  active === href
                    ? "text-gold"
                    : "text-offwhite/85 hover:text-gold"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
