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
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8"
      >
        {/* LOGO & AVATAR */}
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2 sm:gap-3 shrink-0"
        >
          <span className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 overflow-hidden rounded-full border-2 border-gold shadow-[0_0_14px_rgba(212,175,55,0.45)] transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/1790975172382.jpg"
              alt="Jean le Coyote"
              fill
              sizes="40px"
              priority
              className="origin-[30%_45%] scale-[1.6] object-cover object-[30%_45%]"
            />
          </span>
          <span className="font-serif text-base sm:text-2xl font-semibold tracking-[0.16em] sm:tracking-[0.28em] text-gold transition-colors group-hover:text-gold-soft">
            JEAN LE COYOTE
          </span>
        </a>

        {/* DESKTOP NAV LINKS & SOCIALS */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
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

          {/* Desktop Circular Social Buttons */}
          <div className="flex items-center gap-2.5 pl-4 border-l border-gold/30">
            {/* X Button */}
            <a
              href="https://x.com/Jean_le_Coyote"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Official X (Twitter)"
              className="relative flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/90 border border-zinc-700/80 text-white hover:text-gold hover:border-gold hover:shadow-[0_0_14px_rgba(212,175,55,0.5)] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Telegram Button */}
            <a
              href="https://t.me/jeanDeCoyote"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Official Telegram"
              className="relative flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/90 border border-zinc-700/80 text-white hover:text-gold hover:border-gold hover:shadow-[0_0_14px_rgba(212,175,55,0.5)] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <svg className="w-3.5 h-3.5 fill-current -translate-x-[1px] translate-y-[0.5px]" viewBox="0 0 24 24">
                <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
              </svg>
            </a>
          </div>
        </div>

        {/* MOBILE CONTROLS: CIRCULAR SOCIAL BUTTONS + HAMBURGER */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile X Button */}
          <a
            href="https://x.com/Jean_le_Coyote"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Official X (Twitter)"
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/95 border border-zinc-700/90 text-white hover:text-gold hover:border-gold shadow-[0_0_12px_rgba(0,0,0,0.6)] active:scale-95 transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Mobile Telegram Button */}
          <a
            href="https://t.me/jeanDeCoyote"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Official Telegram"
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/95 border border-zinc-700/90 text-white hover:text-gold hover:border-gold shadow-[0_0_12px_rgba(0,0,0,0.6)] active:scale-95 transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5 fill-current -translate-x-[1px] translate-y-[0.5px]" viewBox="0 0 24 24">
              <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
            </svg>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-9 w-9 items-center justify-center rounded-md border border-gold/50 text-gold transition-colors hover:bg-gold/10"
          >
            <span
              className={`absolute h-0.5 w-4 bg-current transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-4 bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-4 bg-current transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden px-5 sm:px-8 pb-4">
          <ul>
            {links.map(({ href, label }) => (
              <li key={href} className="border-t border-gold/20 first:mt-1">
                <a
                  href={href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className={`block py-3.5 font-serif text-2xl tracking-[0.15em] transition-colors ${
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

          {/* Social Links Row inside Mobile Menu Drawer */}
          <div className="mt-4 pt-4 border-t border-gold/30 flex items-center justify-around gap-4">
            <a
              href="https://x.com/Jean_le_Coyote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-gold/40 text-xs font-mono font-bold text-gold hover:bg-gold/10 transition-colors uppercase"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Follow on X</span>
            </a>

            <a
              href="https://t.me/jeanDeCoyote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gold text-royal text-xs font-mono font-bold hover:bg-gold-soft transition-colors uppercase shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              <svg className="w-3.5 h-3.5 fill-current -translate-x-[1px] translate-y-[0.5px]" viewBox="0 0 24 24">
                <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.693c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
              </svg>
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
