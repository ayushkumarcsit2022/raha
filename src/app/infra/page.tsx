import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getSiteContent } from "@/lib/getContent";

export default function Infra() {
  const content = getSiteContent();
  return (
    <div className="theme-infra">
      <Navbar />
      
      <main className="pt-24 md:pt-32">
        {/* Header Hero Section */}
        <header className="relative min-h-[80vh] flex items-center justify-center overflow-hidden animate-fade-up">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center brightness-[0.8]" 
              style={{
                backgroundImage: "url('/images/infra.png')",
              }}
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>
          
          <div className="relative z-10 text-center px-6 md:px-20 max-w-4xl">
            <span className="font-inter text-xs font-bold text-[#fedb9c] uppercase mb-4 block tracking-[0.2em]">{content.infra.heroTagline}</span>
            <h1 className="font-plus-jakarta text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              {content.infra.heroTitle}
            </h1>
            <p className="font-inter text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              {content.infra.heroDesc}
            </p>
          </div>
        </header>

        {/* Signature Landmark Projects */}
        <section className="py-20 md:py-28 bg-[#efeeeb]/50">
          <div className="max-w-[1280px] mx-auto px-6 md:px-20">
            <div className="mb-16 text-center">
              <span className="font-inter text-xs font-bold text-[#735b28] uppercase block mb-4 tracking-[0.2em]">Portfolios</span>
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black">
                Signature Landmark Projects
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Aurelius Hub */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 flex flex-col">
                <div className="h-64 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/infra.png')" }} />
                <div className="p-8 flex-grow">
                  <h3 className="font-plus-jakarta font-bold text-black text-xl mb-3">The Aurelius Hub</h3>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed mb-6">
                    A premier mixed-use commercial space utilizing glass layouts and steel framing. Built for modern enterprise demands.
                  </p>
                </div>
              </div>
              {/* Veridian Heights */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 flex flex-col">
                <div className="h-64 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/boardroom.png')" }} />
                <div className="p-8 flex-grow">
                  <h3 className="font-plus-jakarta font-bold text-black text-xl mb-3">Veridian Heights</h3>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed mb-6">
                    A luxury residential complex designed to merge natural park elements with high-end steel structures and private terraces.
                  </p>
                </div>
              </div>
              {/* The Onyx Gateway */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 flex flex-col">
                <div className="h-64 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/hero_bg.png')" }} />
                <div className="p-8 flex-grow">
                  <h3 className="font-plus-jakarta font-bold text-black text-xl mb-3">The Onyx Gateway</h3>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed mb-6">
                    Our latest architectural landmark. A dual-tower corporate headquarters optimized for digital scale and smart grid controls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Control / Zero Tolerance */}
        <section className="py-20 md:py-28 px-6 md:px-20 max-w-[1280px] mx-auto">
          <div className="mb-16">
            <span className="font-inter text-xs text-secondary font-bold uppercase tracking-widest block mb-4">ENGINEERING PROTOCOL</span>
            <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black">
              Zero Tolerance for Compromise: Precision Engineering Reimagined
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#efeeeb] p-8 rounded-xl">
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Quality Control Protocol</h4>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                Multi-stage inspections mapping materials back to verified supply sources.
              </p>
            </div>
            <div className="bg-[#efeeeb] p-8 rounded-xl">
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Unrivaled Site Safety</h4>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                Class-leading safety procedures resulting in zero accident incidents across operations.
              </p>
            </div>
            <div className="bg-[#efeeeb] p-8 rounded-xl">
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Structural Innovation</h4>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                Utilizing advanced seismic dampening and wind-resistant framing structures.
              </p>
            </div>
            <div className="bg-[#efeeeb] p-8 rounded-xl">
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">LEED Platinum Target</h4>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                Aiming for premium environmental certificates on all new high-rise builds.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="bg-black text-white py-28 text-center">
          <div className="px-6 max-w-4xl mx-auto">
            <span className="font-inter text-xs font-bold text-[#fedb9c] uppercase tracking-widest block mb-6">ENVIRONMENTAL ETHOS</span>
            <h2 className="font-plus-jakarta text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Sustainability Embedded in Every Grain
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              <div className="p-8 border border-white/10 rounded-xl">
                <h4 className="font-plus-jakarta text-lg font-bold text-[#fedb9c] mb-3">Regenerative Material Sourcing</h4>
                <p className="font-inter text-sm text-white/70">Using local supply chains, recycled aggregates, and low-carbon cement options.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-xl">
                <h4 className="font-plus-jakarta text-lg font-bold text-[#fedb9c] mb-3">Passive Energy Systems</h4>
                <p className="font-inter text-sm text-white/70">Integrating thermal mass storage and natural ventilation layouts to minimize operational loads.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Highlight (Rahul Kumar) */}
        <section className="py-20 md:py-28 px-6 md:px-20 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ 
                    backgroundImage: "url('/images/chairman.png')", // using chairman image as placeholders for secondary leaders
                  }}
                />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-8">
              <span className="material-symbols-outlined text-6xl text-[#735b28] mb-6">format_quote</span>
              <blockquote className="font-plus-jakarta text-2xl font-bold leading-tight mb-8 text-black">
                &quot;True luxury in civil architecture resides in the absolute safety of structural integrity. We construct environments that will stand as legacy landmarks.&quot;
              </blockquote>
              <div className="h-px w-20 bg-black mb-4"></div>
              <p className="font-plus-jakarta text-xl font-bold text-black">Rahul Kumar</p>
              <p className="font-inter text-xs text-on-surface-variant uppercase tracking-widest mt-1">Raha Infra</p>
            </div>
          </div>
        </section>

        {/* Project Contact Inquiry */}
        <section className="bg-[#efeeeb] py-20 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-plus-jakarta text-3xl font-extrabold text-black mb-6">Ready to Build The Future?</h2>
            <p className="font-inter text-sm text-on-surface-variant mb-8 leading-relaxed">
              Connect with our structural engineering team to inquire about commercial leases, residential investments, or customized build-to-suit requests.
            </p>
            <Link href="/contact" className="inline-block bg-black text-white font-inter text-xs font-bold uppercase tracking-widest px-12 py-5 rounded-lg hover:bg-[#735b28] transition-all">
              Inquire Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
