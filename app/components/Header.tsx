"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HeaderLinks } from "../data";
import { socialIcons } from "../constants";
import logo from "../assets/logo.png";
import Image from "next/image";
import { Button } from "./UI";
import { FaArrowRight } from "react-icons/fa6";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.screen.height * 0.1);
    };

    const handleResize = () => {
      // Close mobile menu when screen reaches desktop size (768px = md breakpoint)
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="pb-12 fixed top-0 w-full z-100">
      <header
        className={`px-8 py-6 border-b transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-black/40 backdrop-blur-[37px] border-white/10"
            : "bg-transparent border-transparent"
        }`}
        style={{
          transitionProperty: "background-color, border-color, backdrop-filter",
        }}
      >
        <nav className="flex items-center justify-between relative">
          {/* Mobile hamburger button - left */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>

          {/* Logo - left on desktop, center on mobile */}
          <Link
            href="/"
            className="text-xl font-bold tracking-wider md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0"
          >
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Studio Logo"
                className=" object-cover w-24.5"
              />
            </div>
          </Link>

          {/* Desktop centered links */}
          <div className="hidden md:flex text-white font-semibold text-sm uppercase absolute left-1/2 -translate-x-1/2 items-center">
            {HeaderLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:bg-white/20 rounded-full transition-all duration-300 px-4 py-2"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop search bar */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm placeholder-white focus:outline-none focus:border-white/40 transition-all w-40 focus:w-60"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-200 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ top: "0" }}
      >
        <div className="h-full overflow-y-auto">
          {/* Header with close button */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src={logo}
                alt="Studio Logo"
                className="object-cover w-24.5"
              />
            </Link>
            <button
              className="flex flex-col gap-1.5 w-6 h-6 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="block h-0.5 w-full bg-white rotate-45 translate-y-2"></span>
              <span className="block h-0.5 w-full bg-white opacity-0"></span>
              <span className="block h-0.5 w-full bg-white -rotate-45 -translate-y-2"></span>
            </button>
          </div>

          {/* Search bar in mobile menu */}
          <div className="px-8 py-6 border-b border-white/10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-3 text-base placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors w-full"
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="px-8 py-8">
            <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-6">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {HeaderLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-2xl font-bold text-white hover:text-white/70 transition-colors py-3 flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <svg
                    className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="px-8 py-8 border-t border-white/10">
            <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/about"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/press"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Press Kit
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="px-8 py-8 border-t border-white/10">
            <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-6">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 flex items-center rounded-full justify-center bg-white/15 hover:bg-white/30 border border-white/20 hover:border-white/30 transition-all duration-300"
                aria-label="Twitter"
              >
                {socialIcons.Twitter}
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 flex items-center rounded-full justify-center bg-white/15 hover:bg-white/30 border border-white/20 hover:border-white/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                {socialIcons.LinkedIn}
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 flex items-center rounded-full justify-center bg-white/15 hover:bg-white/30 border border-white/20 hover:border-white/30 transition-all duration-300"
                aria-label="GitHub"
              >
                {socialIcons.GitHub}
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="px-8 py-8 border-t border-white/10">
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                icon={{
                  icon: <FaArrowRight />,
                  position: "right",
                  animate: true,
                }}
                className="w-full"
                color={{ background: "#FFFFFF50" }}
              >
                Join Our Newsletter
              </Button>
            </Link>
          </div>

          {/* Footer info */}
          <div className="px-8 py-8 border-t border-white/10 text-center">
            <p className="text-xs text-white/40">
              © 2026 Studio B. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
