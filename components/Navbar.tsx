"use client";

import { useState } from "react";
import { nav } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-surface/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" onClick={close} className="font-serif text-xl text-ink md:text-2xl">
          Dr. Maya Reynolds<span className="text-primary">, PsyD</span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <a href={item.href} className="nav-link inline-flex items-center gap-1">
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </a>
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="rounded-xl border border-primary/10 bg-white p-2 shadow-lg">
                    {item.children.map((c) => (
                      <li key={c.id}>
                        <a
                          href={`#${c.id}`}
                          className="block rounded-lg px-4 py-2.5 text-sm text-ink hover:bg-mist"
                        >
                          {c.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ),
          )}
          <a href="#contact" className="btn btn-primary !px-5 !py-2.5 !text-sm">
            Book a consultation
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-primary/10 bg-surface md:hidden">
          <ul className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={close} className="block py-3 text-lg text-ink">
                  {item.label}
                </a>
                {item.children && (
                  <ul className="mb-2 ml-4 border-l border-primary/20 pl-4">
                    {item.children.map((c) => (
                      <li key={c.id}>
                        <a href={`#${c.id}`} onClick={close} className="block py-2 text-base text-muted">
                          {c.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pb-3 pt-2">
              <a href="#contact" onClick={close} className="btn btn-primary w-full">
                Book a consultation
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
