import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Energy() {
  return (
    <>
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center brightness-[0.4]" 
              style={{
                backgroundImage: "url('/images/energy_hero.png')",
              }}
            />
          </div>
          <div className="relative z-10 text-center px-6 md:px-20 max-w-5xl animate-fade-up">
            <span className="font-inter text-xs font-bold text-[#fedb9c] uppercase mb-6 block tracking-[0.2em]">Raha Energy Division</span>
            <h1 className="font-plus-jakarta text-4xl md:text-6xl font-extrabold text-white mb-8">
              Powering the Future with <br className="hidden md:block"/>Clean Integrity
            </h1>
            <p className="font-inter text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-12">
              Leading the global transition through architectural precision in renewable infrastructure and grid intelligence.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/#contact" className="bg-[#735b28] text-white font-inter text-sm font-bold uppercase tracking-widest px-12 py-5 rounded-lg hover:scale-105 transition-all text-center">
                Explore Our Portfolio
              </Link>
              <Link href="/about" className="border border-white text-white font-inter text-sm font-bold uppercase tracking-widest px-12 py-5 rounded-lg hover:bg-white/10 transition-all text-center">
                Download Vision Paper
              </Link>
            </div>
          </div>
        </section>

        {/* Core Verticals */}
        <section className="py-28 px-6 md:px-20 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Solar Energy */}
            <div className="flex flex-col group">
              <div className="overflow-hidden mb-8 rounded-xl h-[450px]">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{
                    backgroundImage: "url('/images/solar_cell.png')",
                  }}
                />
              </div>
              <span className="font-inter text-xs text-secondary font-bold uppercase tracking-widest mb-4">Vertical 01</span>
              <h2 className="font-plus-jakarta text-3xl font-extrabold text-black mb-6">Solar Energy</h2>
              <p className="font-inter text-base text-on-surface-variant mb-8 max-w-lg leading-relaxed">
                We deploy utility-scale solar installations that redefine energy landscapes. From massive desert arrays to integrated residential ecosystems, our solar division merges structural beauty with maximum yield.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 text-on-surface font-inter text-sm">
                  <span className="w-1.5 h-1.5 bg-[#735b28] rounded-full"></span> Utility-Scale Plants
                </li>
                <li className="flex items-center gap-4 text-on-surface font-inter text-sm">
                  <span className="w-1.5 h-1.5 bg-[#735b28] rounded-full"></span> Residential Smart Solutions
                </li>
                <li className="flex items-center gap-4 text-on-surface font-inter text-sm">
                  <span className="w-1.5 h-1.5 bg-[#735b28] rounded-full"></span> Photovoltaic Innovation Hub
                </li>
              </ul>
            </div>

            {/* Conventional Energy */}
            <div className="flex flex-col group md:mt-24">
              <div className="overflow-hidden mb-8 rounded-xl h-[450px]">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{
                    backgroundImage: "url('/images/control_room.png')",
                  }}
                />
              </div>
              <span className="font-inter text-xs text-secondary font-bold uppercase tracking-widest mb-4">Vertical 02</span>
              <h2 className="font-plus-jakarta text-3xl font-extrabold text-black mb-6">Conventional Energy</h2>
              <p className="font-inter text-base text-on-surface-variant mb-8 max-w-lg leading-relaxed">
                Stability meets sustainability. We optimize existing grid infrastructures and transitional power systems to ensure the world remains powered as we bridge the gap to a fully carbon-neutral future.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 text-on-surface font-inter text-sm">
                  <span className="w-1.5 h-1.5 bg-[#735b28] rounded-full"></span> Grid Optimization Systems
                </li>
                <li className="flex items-center gap-4 text-on-surface font-inter text-sm">
                  <span className="w-1.5 h-1.5 bg-[#735b28] rounded-full"></span> Transitional Hybrid Power
                </li>
                <li className="flex items-center gap-4 text-on-surface font-inter text-sm">
                  <span className="w-1.5 h-1.5 bg-[#735b28] rounded-full"></span> Distribution Efficiency
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Strategic Impact */}
        <section className="bg-black text-white py-28 overflow-hidden">
          <div className="px-6 md:px-20 max-w-[1280px] mx-auto">
            <div className="text-center mb-20">
              <span className="font-inter text-xs font-bold text-[#fedb9c] uppercase tracking-[0.25em] mb-4 block">Proven Performance</span>
              <h2 className="font-plus-jakarta text-4xl font-extrabold text-white">Our Strategic Impact</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center py-8 border-b md:border-b-0 md:border-r border-white/10 last:border-0">
                <div className="font-plus-jakarta text-5xl font-extrabold text-[#fedb9c] mb-4">12.8 GW</div>
                <div className="font-inter text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Total Managed Capacity</div>
                <p className="font-inter text-xs text-white/50 max-w-xs mx-auto">Utility-scale deployments operating at peak efficiencies across multiple international energy corridors.</p>
              </div>
              <div className="text-center py-8 border-b md:border-b-0 md:border-r border-white/10 last:border-0">
                <div className="font-plus-jakarta text-5xl font-extrabold text-[#fedb9c] mb-4">99.98%</div>
                <div className="font-inter text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Grid Uptime &amp; Reliability</div>
                <p className="font-inter text-xs text-white/50 max-w-xs mx-auto">Constant delivery through advanced automated optimization and smart substations.</p>
              </div>
              <div className="text-center py-8 last:border-0">
                <div className="font-plus-jakarta text-5xl font-extrabold text-[#fedb9c] mb-4">-35%</div>
                <div className="font-inter text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Carbon Footprint Reduction</div>
                <p className="font-inter text-xs text-white/50 max-w-xs mx-auto">Driving absolute emission offsets for our commercial and sovereign partners.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-28 px-6 md:px-20 max-w-[1280px] mx-auto">
          <div className="text-center mb-24">
            <span className="font-inter text-xs font-bold text-secondary uppercase block mb-4 tracking-[0.2em]">Engineering Detail</span>
            <h2 className="font-plus-jakarta text-4xl font-extrabold text-black">Technical Excellence</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#efeeeb]/50 p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">battery_charging_full</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Storage Solutions</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Integrated lithium-ion and flow battery facilities providing grid resilience during low peak solar hours.</p>
            </div>
            <div className="bg-[#efeeeb]/50 p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">grid_on</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Smart Grids</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Automated grid stabilization using predictive AI workloads to map load requirements instantly.</p>
            </div>
            <div className="bg-[#efeeeb]/50 p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">source</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Sourcing</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Highly ethical supply chain integration procurement mapping back to verified suppliers.</p>
            </div>
            <div className="bg-[#efeeeb]/50 p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">account_tree</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Distribution</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">High-voltage transmission engineering designed for minimal loss and maximum reach.</p>
            </div>
          </div>
        </section>

        {/* Global Footprint Map */}
        <section className="py-28 bg-[#efeeeb]/40 overflow-hidden">
          <div className="px-6 md:px-20 max-w-[1280px] mx-auto text-center mb-12">
            <span className="font-inter text-xs text-secondary font-bold uppercase tracking-widest mb-4 block">Global Footprint</span>
            <h2 className="font-plus-jakarta text-4xl font-extrabold text-black">Strategic Energy Hubs</h2>
          </div>
          <div className="relative w-full max-w-5xl mx-auto h-[500px] bg-black/5 rounded-2xl overflow-hidden shadow-2xl border border-black/5">
            <div 
              className="w-full h-full bg-cover bg-center opacity-85 grayscale contrast-125" 
              style={{
                backgroundImage: "url('/images/hero_bg.png')", // using hero background skyscraper graphic as clean visual base
              }}
            />
            {/* Map Markers */}
            <div className="absolute top-1/4 left-[30%] group cursor-pointer">
              <div className="w-4 h-4 bg-[#735b28] rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#735b28] rounded-full relative border-2 border-white"></div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 bg-black text-white px-5 py-3 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl">
                <span className="font-bold block text-[#fedb9c] mb-1">Northern Solar Hub</span>
                4.2 GW Peak Output
              </div>
            </div>
            <div className="absolute top-[45%] right-[35%] group cursor-pointer">
              <div className="w-4 h-4 bg-[#735b28] rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#735b28] rounded-full relative border-2 border-white"></div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 bg-black text-white px-5 py-3 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl">
                <span className="font-bold block text-[#fedb9c] mb-1">MENA Energy Corridor</span>
                Strategic Transition Zone
              </div>
            </div>
            <div className="absolute bottom-[30%] left-[55%] group cursor-pointer">
              <div className="w-4 h-4 bg-[#735b28] rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#735b28] rounded-full relative border-2 border-white"></div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 bg-black text-white px-5 py-3 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl">
                <span className="font-bold block text-[#fedb9c] mb-1">APAC Transition Hub</span>
                Smart Grid Integration
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 px-6 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-plus-jakarta text-4xl md:text-5xl font-extrabold text-black mb-8 leading-tight">
              Partner for a Sustainable Future
            </h2>
            <p className="font-inter text-lg text-on-surface-variant mb-12 max-w-3xl mx-auto">
              Join Raha Energy in architecting the next generation of global power. Our teams are ready to discuss utility-scale integration, grid optimization, and strategic investment opportunities.
            </p>
            <a href="mailto:info@rahagroup.co.in" className="inline-block bg-black text-white font-inter text-sm font-bold uppercase tracking-widest px-20 py-7 rounded-xl hover:bg-[#735b28] transition-all duration-500 shadow-lg">
              Begin Collaboration
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
