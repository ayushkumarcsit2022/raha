"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const [footerContent, setFooterContent] = useState({
    delhiAddress: "A-42, Street No. 2, Near Bikaner Sweet Corner, Nirman Vihar, Delhi",
    delhiEmail: "rahagroup.admin@gmail.com",
    delhiPhone: "+91 8651201033",
    delhiWeb: "www.rahagroup.co.in",
    missionText: "To consistently deliver high-quality solutions through professionalism, transparency, and deep market understanding, enabling our clients to achieve their long-term goals.",
    visionText: "To become one of India's most trusted multi-business organizations by delivering innovative solutions, empowering businesses, and creating opportunities across diverse industries.",
    copyrightText: "© 2026 Raha Group. All rights reserved. Architectural Prestige in Motion."
  });

  useEffect(() => {
    fetch("/api/content")
      .then(res => res.json())
      .then(data => {
        if (data && data.footer) {
          setFooterContent(data.footer);
        }
      })
      .catch(err => console.error("Error loading footer content:", err));
  }, []);

  // Dynamic logo selection based on active route path
  const getLogoDetails = () => {
    switch (pathname) {
      case "/infra":
        return {
          src: "/images/Raha_infra.svg",
          alt: "Raha Infra Logo",
          invertible: false,
        };
      case "/energy":
        return {
          src: "/images/Raha_Energy_Logo.svg",
          alt: "Raha Energy Logo",
          invertible: true,
        };
      case "/learnixa":
        return {
          src: "/images/Learnixa.svg",
          alt: "Learnixa Logo",
          invertible: false,
        };
      case "/bigthink":
        return {
          src: "/images/Big_think.svg",
          alt: "Big Think Logo",
          invertible: false,
        };
      default:
        return {
          src: "/images/Raha_Group_Logo.svg",
          alt: "Raha Group Logo",
          invertible: true,
        };
    }
  };

  const currentLogo = getLogoDetails();

  return (
    <footer className="bg-dark-bg text-white/90 py-12 border-t border-white/10">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 px-6 md:px-20 w-full max-w-[1280px] mx-auto">
        <div className="sm:col-span-12 lg:col-span-4 flex flex-col space-y-6">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={currentLogo.src} 
                alt={currentLogo.alt} 
                className="h-16 w-auto object-contain" 
              />
            </div>
            <p className="font-inter text-xs text-white/60 max-w-xs leading-relaxed mb-4">
              A global conglomerate dedicated to industrial prestige and architectural excellence across the physical and digital world.
            </p>
          </div>
          <div className="space-y-2.5 font-inter text-xs text-white/50">
            <p className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[16px] mt-0.5 text-[#fedb9c]">location_on</span>
              <span>{footerContent.delhiAddress}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#fedb9c]">mail</span>
              <a href={`mailto:${footerContent.delhiEmail}`} className="hover:text-white transition-colors">{footerContent.delhiEmail}</a>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#fedb9c]">phone</span>
              <a href={`tel:${footerContent.delhiPhone}`} className="hover:text-white transition-colors">{footerContent.delhiPhone}</a>
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#fedb9c]">public</span>
              <a href={`https://${footerContent.delhiWeb}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{footerContent.delhiWeb}</a>
            </p>
          </div>
        </div>

        <div className="sm:col-span-12 lg:col-span-4">
          <h5 className="font-inter text-xs font-bold text-white mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Our Mission &amp; Vision</h5>
          <div className="space-y-4">
            <div>
              <h6 className="font-plus-jakarta text-xs font-bold text-[#fedb9c] uppercase mb-1">Mission</h6>
              <p className="font-inter text-[11px] text-white/60 leading-relaxed">
                {footerContent.missionText}
              </p>
            </div>
            <div>
              <h6 className="font-plus-jakarta text-xs font-bold text-[#fedb9c] uppercase mb-1">Vision</h6>
              <p className="font-inter text-[11px] text-white/60 leading-relaxed">
                {footerContent.visionText}
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <h5 className="font-inter text-xs font-bold text-white mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Links</h5>
          <ul className="space-y-3 font-inter text-xs text-white/50">
            <li><Link href="/#pillars" className="hover:text-white transition-colors">Strategic Pillars</Link></li>
            <li><Link href="/#investor" className="hover:text-white transition-colors">Investor Relations</Link></li>
            <li><Link href="/#presence" className="hover:text-white transition-colors">Global Presence</Link></li>
            <li><Link href="/#governance" className="hover:text-white transition-colors">Governance</Link></li>
          </ul>
        </div>

        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <h5 className="font-inter text-xs font-bold text-white mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Connect</h5>
          <div className="flex gap-3">
            <a href={`https://${footerContent.delhiWeb}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all" title="Website">
              <span className="material-symbols-outlined text-sm">link</span>
            </a>
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Raha Group',
                    text: 'Architectural Prestige in Motion',
                    url: window.location.href,
                  }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }} 
              className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer" 
              title="Share Page"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </button>
          </div>
        </div>

        <div className="col-span-12 mt-8 border-t border-white/10 pt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-[11px] text-white/40">
            {footerContent.copyrightText}
          </p>
          <div className="flex gap-6 font-inter text-[11px] text-white/40">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
