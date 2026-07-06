"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Vision", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Learnixa EdTech", href: "/learnixa" },
    { name: "Raha Infra", href: "/infra" },
    { name: "Raha Energy", href: "/energy" },
    { name: "Big Think Tech", href: "/bigthink" },
  ];

  // Dynamic logo selection based on active route path
  const getLogoDetails = () => {
    switch (pathname) {
      case "/infra":
        return {
          src: "/images/Raha infra.jpeg",
          alt: "Raha Infra Logo",
          invertible: false,
        };
      case "/energy":
        return {
          src: "/images/Raha Energy Logo .png",
          alt: "Raha Energy Logo",
          invertible: true,
        };
      case "/learnixa":
        return {
          src: "/images/Learnixa.jpeg",
          alt: "Learnixa Logo",
          invertible: false,
        };
      case "/bigthink":
        return {
          src: "/images/Big think.jpeg",
          alt: "Big Think Logo",
          invertible: false,
        };
      default:
        return {
          src: "/images/Raha Group Logo .png",
          alt: "Raha Group Logo",
          invertible: true,
        };
    }
  };

  const currentLogo = getLogoDetails();

  // ONLY the homepage has a transparent background that transitions to white on scroll.
  // All other pages show a solid white header with dark text for absolute visibility.
  const isHomepage = pathname === "/";
  const shouldShowScrolled = scrolled || !isHomepage;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        shouldShowScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-black/5"
          : "bg-transparent py-6 border-white/10"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-20 w-full max-w-[1280px] mx-auto">
        <Link href="/" className="flex items-center">
          <div className={`transition-all duration-300 ${!currentLogo.invertible && !shouldShowScrolled ? "bg-white p-1.5 rounded-lg shadow-md" : ""}`}>
            <img 
              src={currentLogo.src} 
              alt={currentLogo.alt} 
              className={`h-10 w-auto object-contain transition-all duration-300 ${
                !currentLogo.invertible && shouldShowScrolled ? "mix-blend-multiply" : ""
              }`} 
            />
          </div>
        </Link>
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-sm font-semibold pb-1 border-b-2 transition-all duration-300 ${
                  isActive
                    ? shouldShowScrolled ? "border-black text-black" : "border-white text-white"
                    : "border-transparent hover:text-secondary " + (shouldShowScrolled ? "text-[#444748]" : "text-white/80")
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className={`hidden sm:inline-block px-6 py-2.5 rounded-lg font-inter text-sm font-semibold transition-all ${
              shouldShowScrolled
                ? "bg-black text-white hover:bg-black/90"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            Contact Us
          </Link>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg"
          >
            <span className={`material-symbols-outlined text-[28px] ${shouldShowScrolled ? "text-black" : "text-white"}`}>
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black/5 flex flex-col p-6 gap-4 shadow-lg animate-fade-up">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-inter text-base font-semibold py-2 transition-colors ${
                pathname === link.href ? "text-[#735b28]" : "text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
