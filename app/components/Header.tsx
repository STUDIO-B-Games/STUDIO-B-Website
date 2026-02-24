"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HeaderLinks } from "../data";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.screen.height * 0.1);
    };

    const handleResize = () => {
      // Close mobile menu when screen reaches desktop size (768px = md breakpoint)
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsMobileSearchOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Disable scrolling when mobile menu or search is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, isMobileSearchOpen]);

  return (
    <header className="pb-12 fixed top-0 w-full z-100">
      <header
        className={`px-8 py-6 border-b transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen || isMobileSearchOpen
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
            className="md:hidden flex flex-col gap-1.5 w-6 h-6"
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

            {/* Mobile search button - right */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              aria-label="Toggle search"
            >
              <svg
                className="w-6 h-6 text-white"
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
            </button>
          </div>
        </nav>

        {/* Mobile search bar */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileSearchOpen ? "max-h-20 mt-4" : "max-h-0"}`}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm placeholder-white focus:outline-none focus:border-white/40 transition-colors w-full"
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

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "h-screen mt-6" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-4">
            {HeaderLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </header>
  );
}
