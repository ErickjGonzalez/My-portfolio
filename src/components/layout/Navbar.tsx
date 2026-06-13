"use client";

import { NAV_ITEMS, SITE_CONFIG } from "@/src/lib/constants";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6",
        scrolled || menuOpen
          ? "bg-deep-black/80 backdrop-blur-md border-b border-purple-900/30"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white/90 hover:text-purple-300 transition"
          onClick={() => setMenuOpen(false)}
        >
          {SITE_CONFIG.name.split(" ")[0]}.
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-purple-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:block text-sm px-4 py-1.5 rounded-full border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 transition"
        >
          Contact
        </a>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-white transition-all duration-300",
              menuOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-white transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-white transition-all duration-300",
              menuOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          menuOpen ? "max-h-screen opacity-100 pt-4 pb-6" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-gray-300 hover:text-purple-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-sm px-6 py-2 rounded-full border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
