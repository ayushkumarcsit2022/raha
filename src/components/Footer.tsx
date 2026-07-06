"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

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

  return (
    <footer className="bg-[#2f312f] text-white py-20 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-20 w-full max-w-[1280px] mx-auto">
        <div className="md:col-span-4 mb-8 md:mb-0">
          <div className="flex items-center mb-6">
            <div className={`transition-all duration-300 ${!currentLogo.invertible ? "bg-white p-2 rounded-lg shadow-md" : ""}`}>
              <img 
                src={currentLogo.src} 
                alt={currentLogo.alt} 
                className="h-12 w-auto object-contain" 
              />
            </div>
          </div>
          <p className="font-inter text-sm text-white/60 max-w-xs leading-relaxed mb-4">
            A global conglomerate dedicated to industrial prestige and architectural excellence across the physical and digital world.
          </p>
          <div className="space-y-2 font-inter text-sm text-white/50">
            <p>Email: <a href="mailto:info@rahagroup.co.in" className="hover:text-white transition-colors">info@rahagroup.co.in</a></p>
            <p>Phone: <a href="tel:+918651201033" className="hover:text-white transition-colors">+91 8651201033</a></p>
            <p>Web: <a href="https://www.rahagroup.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.rahagroup.co.in</a></p>
          </div>
        </div>
        
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-inter text-xs font-bold text-white mb-6 uppercase tracking-widest">Company</h5>
          <ul className="space-y-4 font-inter text-sm text-white/50">
            <li><Link href="/#pillars" className="hover:text-white transition-colors">Strategic Pillars</Link></li>
            <li><Link href="/#innovation" className="hover:text-white transition-colors">Innovation Lab</Link></li>
            <li><Link href="/#investor" className="hover:text-white transition-colors">Investor Relations</Link></li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-2">
          <h5 className="font-inter text-xs font-bold text-white mb-6 uppercase tracking-widest">Connect</h5>
          <ul className="space-y-4 font-inter text-sm text-white/50">
            <li><Link href="/#presence" className="hover:text-white transition-colors">Global Presence</Link></li>
            <li><Link href="/#governance" className="hover:text-white transition-colors">Ethics &amp; Governance</Link></li>
            <li><Link href="/#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 mt-8 md:mt-0">
          <h5 className="font-inter text-xs font-bold text-white mb-6 uppercase tracking-widest">Global HQ</h5>
          <p className="font-inter text-sm text-white/50 leading-relaxed">
            101 Financial District, Tower A<br />Metropolis City, 4500-11
          </p>
          <div className="mt-8 flex gap-4">
            <a href="https://www.rahagroup.co.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined text-sm">link</span>
            </a>
            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>

        <div className="col-span-12 mt-16 border-t border-white/10 pt-8 text-center md:text-left">
          <p className="font-inter text-xs text-white/55">
            © {new Date().getFullYear()} Raha Group. All rights reserved. Architectural Prestige in Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
