"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import { MenuIcon, XIcon } from "./Icons";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-navy"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="font-serif text-2xl font-bold text-white tracking-wider">
              ATLAS
            </span>
            <span className="w-full h-0.5 bg-gold transform origin-left transition-transform duration-500 group-hover:scale-x-110" />
            <span className="text-[10px] tracking-[0.3em] text-steel-light uppercase mt-0.5">
              Hukuk Bürosu
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-3 py-2 text-sm font-medium transition-colors duration-300 relative",
                  pathname === link.href
                    ? "text-gold"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold"
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/iletisim"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-gold text-navy text-sm font-semibold rounded hover:bg-gold-light transition-colors duration-300"
          >
            Randevu Al
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Menu"
          >
            {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden bg-navy-dark overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "block px-4 py-3 text-base font-medium rounded transition-colors duration-300 min-h-[44px]",
                    pathname === link.href
                      ? "text-gold bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/iletisim"
                  className="block w-full text-center px-5 py-3 bg-gold text-navy text-sm font-semibold rounded hover:bg-gold-light transition-colors duration-300 min-h-[44px]"
                >
                  Randevu Al
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
