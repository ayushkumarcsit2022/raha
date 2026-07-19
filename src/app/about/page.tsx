import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <div className="theme-default">
      <Navbar />
      
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-20 md:mb-28 animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="font-inter text-xs font-bold text-secondary uppercase block mb-4 tracking-[0.2em]">Our Legacy &amp; Future</span>
              <h1 className="font-plus-jakarta text-4xl md:text-6xl font-extrabold leading-tight mb-8 text-black">
                Architecting Tomorrow through Institutional Wisdom.
              </h1>
            </div>
            <div className="md:col-span-4 pb-4">
              <p className="font-inter text-base md:text-lg text-on-surface-variant italic leading-relaxed">
                &quot;Precision is not just a standard; it&apos;s our heritage. We build environments where vision takes structural form.&quot;
              </p>
            </div>
          </div>
          <div className="mt-12 w-full h-[350px] md:h-[600px] rounded-xl shadow-xl reveal-on-scroll img-zoom-container">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{
                backgroundImage: "url('/images/boardroom.png')",
              }}
            />
          </div>
        </section>

        {/* Our Story Editorial */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-20 md:mb-28 py-16 md:py-24 bg-[#efeeeb]/50 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-start-3 md:col-span-8 reveal-on-scroll">
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold mb-8 text-black">Our Institutional Journey</h2>
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-on-surface-variant">
                <p>
                  Raha Group is a diversified business group committed to delivering innovative, reliable, and growth-oriented solutions across multiple industries. With a strong focus on technology, education, and real estate, Raha Group has established itself as a trusted partner for businesses and individuals seeking excellence.
                </p>
                <p>
                  Our philosophy is built on innovation, integrity, customer satisfaction, and long-term value creation. Every company under the Raha Group umbrella operates with a common vision—to provide high-quality services while building lasting relationships with clients and partners.
                </p>
                
                {/* Timeline */}
                <div className="my-16">
                  <h3 className="font-plus-jakarta text-2xl font-bold text-black mb-8">The Raha Timeline</h3>
                  <div className="space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-secondary/20">
                    <div className="relative pl-12">
                      <div className="absolute left-[11px] top-1.5 w-3.5 h-3.5 rounded-full bg-secondary border-4 border-white" />
                      <h4 className="font-plus-jakarta text-xl font-bold text-black mt-2">The Inception</h4>
                      <p className="font-inter text-sm text-on-surface-variant mt-2 leading-relaxed">
                        Raha Group is founded, establishing its core values through civil infrastructure projects in northern India.
                      </p>
                    </div>
                    <div className="relative pl-12">
                      <div className="absolute left-[11px] top-1.5 w-3.5 h-3.5 rounded-full bg-secondary border-4 border-white" />
                      <h4 className="font-plus-jakarta text-xl font-bold text-black mt-2">Continental Expansion</h4>
                      <p className="font-inter text-sm text-on-surface-variant mt-2 leading-relaxed">
                        Diversification into multi-sector ventures including real estate investment portfolios and energy distribution systems.
                      </p>
                    </div>
                    <div className="relative pl-12">
                      <div className="absolute left-[11px] top-1.5 w-3.5 h-3.5 rounded-full bg-secondary border-4 border-white" />
                      <h4 className="font-plus-jakarta text-xl font-bold text-black mt-2">Intellectual Pivot</h4>
                      <p className="font-inter text-sm text-on-surface-variant mt-2 leading-relaxed">
                        Acquiring technology assets and launching EdTech verticals to build a future-ready, diversified corporate ecosystem.
                      </p>
                    </div>
                    <div className="relative pl-12">
                      <div className="absolute left-[11px] top-1.5 w-3.5 h-3.5 rounded-full bg-secondary border-4 border-white" />
                      <h4 className="font-plus-jakarta text-xl font-bold text-black mt-2">Institutional Presence</h4>
                      <p className="font-inter text-sm text-on-surface-variant mt-2 leading-relaxed">
                        A recognized market leader delivering excellence through specialized divisions across real estate, clean energy, and IT.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  As we continue to expand our portfolio, Raha Group remains dedicated to identifying emerging opportunities and creating sustainable businesses that contribute to economic and social development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Raha Ethical Charter */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-20 md:mb-28 py-16 border-t border-black/5">
          <div className="mb-16">
            <span className="font-inter text-xs text-secondary font-bold uppercase tracking-widest block mb-4">GOVERNANCE &amp; ETHICS</span>
            <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black">The Raha Ethical Charter</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-plus-jakarta text-xl font-bold text-black mb-4">Fiduciary Integrity</h4>
              <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                We hold ourselves to the highest standards of financial discipline, ensuring that every asset managed is protected by strict corporate auditing policies.
              </p>
            </div>
            <div>
              <h4 className="font-plus-jakarta text-xl font-bold text-black mb-4">Multidisciplinary Oversight</h4>
              <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                Our board regularly convenes to review risk metrics and quality controls across all physical and digital operations, ensuring complete alignment.
              </p>
            </div>
          </div>
        </section>

        {/* Structural Silence Section */}
        <section className="bg-black text-white py-28 mb-20 md:mb-28">
          <div className="px-6 md:px-20 max-w-[1280px] mx-auto text-center">
            <span className="font-inter text-xs font-bold text-[#fedb9c] uppercase tracking-widest block mb-6">OUR PHILOSOPHY</span>
            <h2 className="font-plus-jakarta text-3xl md:text-5xl font-extrabold text-white mb-8 max-w-4xl mx-auto leading-tight">
              The Core of &quot;Structural Silence&quot;
            </h2>
            <p className="font-inter text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              We believe true value doesn&apos;t shout; it endures. By focusing on engineering stability, financial prudence, and silent growth, we build assets that shape the horizon for the next century.
            </p>
          </div>
        </section>

        {/* Live Operations */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-28">
          <div className="mb-16">
            <span className="font-inter text-xs text-secondary font-bold uppercase tracking-widest block mb-4">MARKET METRICS</span>
            <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black">Live Operations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-black/5 bg-[#efeeeb] rounded-xl text-center">
              <div className="font-plus-jakarta text-4xl font-extrabold text-black mb-2">15,000+</div>
              <div className="font-inter text-xs font-bold uppercase tracking-wider text-on-surface-variant">Active Portfolios</div>
            </div>
            <div className="p-8 border border-black/5 bg-[#efeeeb] rounded-xl text-center">
              <div className="font-plus-jakarta text-4xl font-extrabold text-black mb-2">10+ Cities</div>
              <div className="font-inter text-xs font-bold uppercase tracking-wider text-on-surface-variant">Urban Footprint</div>
            </div>
            <div className="p-8 border border-black/5 bg-[#efeeeb] rounded-xl text-center">
              <div className="font-plus-jakarta text-4xl font-extrabold text-black mb-2">100%</div>
              <div className="font-inter text-xs font-bold uppercase tracking-wider text-on-surface-variant">Ethical Auditing Pass</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
