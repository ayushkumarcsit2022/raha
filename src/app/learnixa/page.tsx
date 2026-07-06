import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Learnixa() {
  return (
    <>
      <Navbar />
      
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-20 md:mb-28 overflow-hidden animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <p className="font-inter text-xs font-bold text-secondary uppercase mb-4 tracking-[0.2em]">Learnixa Education</p>
              <h1 className="font-plus-jakarta text-4xl md:text-6xl font-extrabold leading-none mb-8 text-black">
                Study Abroad &amp; Career Guidance
              </h1>
              <p className="font-inter text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                At Learnixa Education, we are committed to helping students achieve their academic and career goals by providing trusted guidance for higher education in India and abroad.
              </p>
            </div>
            
            <div className="md:col-span-5 h-[300px] md:h-[500px] rounded-xl overflow-hidden relative shadow-xl">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/education.png')",
                }}
              />
            </div>
          </div>
        </section>

        {/* Pedagogical Framework */}
        <section className="py-20 bg-[#efeeeb]/50 px-6 md:px-20 mb-20 md:mb-28">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-16 text-center">
              <span className="font-inter text-xs text-secondary font-bold uppercase tracking-widest block mb-4">OUR PRINCIPLE</span>
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black">Pedagogical Framework</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-black/5">
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Adaptive Curriculum</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Curriculum paths adjusted in real-time based on diagnostic performance and user feedback loop.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-black/5">
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Immersive Delivery</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Engaging student workloads featuring high-fidelity labs and 3D simulation training assets.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-black/5">
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Measurable Outcomes</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Transparent dashboard metrics tracing test performance improvements accurately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* EdTech Ecosystem */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-20 md:mb-28">
          <div className="mb-16">
            <span className="font-inter text-xs text-secondary font-bold uppercase tracking-widest block mb-4">DIGITAL PLATFORM</span>
            <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black">EdTech Ecosystem</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#efeeeb] p-8 rounded-xl">
              <h3 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Digital Platform</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Cloud infrastructure configured for millions of concurrent student streams and micro-learning modules.
              </p>
            </div>
            <div className="bg-[#efeeeb] p-8 rounded-xl">
              <h3 className="font-plus-jakarta text-xl font-bold mb-4 text-black">LMS Integration</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Seamless API hookups for legacy campus management software systems.
              </p>
            </div>
            <div className="bg-[#efeeeb] p-8 rounded-xl">
              <h3 className="font-plus-jakarta text-xl font-bold mb-4 text-black">AI Personalization</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Machine learning algorithms mapping content recommendations directly to student profiles.
              </p>
            </div>
          </div>
        </section>

        {/* Faculty & Advisory */}
        <section className="bg-black text-white py-28 mb-20 md:mb-28">
          <div className="px-6 md:px-20 max-w-[1280px] mx-auto">
            <div className="mb-16 text-center">
              <span className="font-inter text-xs text-[#fedb9c] font-bold uppercase tracking-widest block mb-4">BOARD OF TRUSTEES</span>
              <h2 className="font-plus-jakarta text-3xl md:text-5xl font-extrabold text-white">Faculty &amp; Advisory</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                <div className="font-plus-jakarta text-lg font-bold text-white mb-2">Dr. Helena Vane</div>
                <div className="font-inter text-xs text-[#fedb9c] uppercase tracking-widest">Medical Academic Dean</div>
              </div>
              <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                <div className="font-plus-jakarta text-lg font-bold text-white mb-2">Marcus Thorne</div>
                <div className="font-inter text-xs text-[#fedb9c] uppercase tracking-widest">Curriculum Director</div>
              </div>
              <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                <div className="font-plus-jakarta text-lg font-bold text-white mb-2">Sarah Lin</div>
                <div className="font-inter text-xs text-[#fedb9c] uppercase tracking-widest">Global Placements Head</div>
              </div>
              <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                <div className="font-plus-jakarta text-lg font-bold text-white mb-2">Julian Reed</div>
                <div className="font-inter text-xs text-[#fedb9c] uppercase tracking-widest">Regulatory Affairs Advisor</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Models */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-28">
          <div className="mb-16">
            <span className="font-inter text-xs text-secondary font-bold uppercase tracking-widest block mb-4">COLLABORATE WITH US</span>
            <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black">Partnership Models</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-black/5 bg-[#efeeeb] rounded-xl">
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Institutional White-Labeling</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Customize and brand Learnixa&apos;s adaptive learning engine for your local school network.</p>
            </div>
            <div className="p-8 border border-black/5 bg-[#efeeeb] rounded-xl">
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Corporate Skill-Mapping</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Bridge corporate performance gaps by creating customized skill-mapping courses.</p>
            </div>
            <div className="p-8 border border-black/5 bg-[#efeeeb] rounded-xl">
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Consortium Memberships</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Join our institutional group network to share student placement databases and resources.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="mailto:info@rahagroup.co.in" className="inline-block bg-black text-white font-inter text-xs font-bold uppercase tracking-widest px-12 py-5 rounded-lg hover:bg-[#735b28] transition-all">
              Partner Inquiry
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
