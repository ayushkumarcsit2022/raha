import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import VerticalsSlider from "@/components/VerticalsSlider";
import { getSiteContent } from "@/lib/getContent";

export default function Home() {
  const content = getSiteContent();
  return (
    <div className="theme-default">
      <Navbar />

      {/* ========================================================================= */}
      {/* 1. DESKTOP ONLY LAYOUT (hidden md:block)                                  */}
      {/* ========================================================================= */}
      <div className="hidden md:block">
        {/* Desktop Hero Section */}
        <section className="relative h-screen w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ 
                backgroundImage: "url('/images/hero_bg.png')",
              }}
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>
          
          <div className="relative z-10 px-20 w-full max-w-[1280px] mx-auto animate-fade-up">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 transition-all hover:bg-white/15">
                <img src="/images/Raha_Group_Logo.svg" alt="Raha Group Logo" className="h-16 w-auto object-contain" />
                <span className="font-inter text-xs font-bold text-white uppercase tracking-widest pr-1">Raha Group</span>
              </div>
              <p className="font-inter text-xs font-bold text-white uppercase mb-4 tracking-widest">
                Architectural Prestige
              </p>
              <h1 className="font-plus-jakarta text-7xl font-extrabold text-white mb-8 leading-tight">
                {content.home.heroTitle}
              </h1>
              <div className="flex gap-4">
                <Link 
                  href="/#verticals-desktop" 
                  className="bg-white text-black px-8 py-4 rounded-lg font-inter text-sm font-bold hover:scale-105 transition-all text-center"
                >
                  Explore Our Verticals
                </Link>
                <Link 
                  href="/#investor" 
                  className="border border-white text-white px-8 py-4 rounded-lg font-inter text-sm font-bold hover:bg-white/10 transition-all text-center"
                >
                  Investor Relations
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop About Section */}
        <section className="py-28 px-20 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-6 reveal-on-scroll">
              <p className="font-inter text-xs font-bold text-secondary mb-4 uppercase tracking-[0.2em]">About Our Company</p>
              <h2 className="font-plus-jakarta text-4xl font-extrabold mb-6 leading-tight text-black">
                Raha Group
              </h2>
              <p className="font-inter text-lg text-on-surface-variant leading-relaxed mb-8">
                {content.home.aboutText}
              </p>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-plus-jakarta font-bold text-secondary text-base mb-2">Our Mission</h4>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                    To consistently deliver high-quality solutions through professionalism, transparency, and deep market understanding, enabling our clients to achieve their long-term goals.
                  </p>
                </div>
                <div>
                  <h4 className="font-plus-jakarta font-bold text-secondary text-base mb-2">Our Vision</h4>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                    To become one of India&apos;s most trusted multi-business organizations by delivering innovative solutions, empowering businesses, and creating opportunities across diverse industries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-6 col-start-7">
              <div className="relative h-[450px] rounded-xl overflow-hidden shadow-2xl reveal-on-scroll img-zoom-container">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ 
                    backgroundImage: "url('/images/boardroom.png')",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Desktop Stats */}
          <div className="mt-20 border-t border-black/5 pt-16">
            <div className="grid grid-cols-3 gap-12 text-left">
              <div>
                <div className="font-plus-jakarta text-5xl font-extrabold text-black mb-2">15,000+</div>
                <div className="font-inter text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Customers &amp; People Reached</div>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  Through our businesses in EV charging, education, and real estate, we have successfully connected with thousands of clients.
                </p>
              </div>
              <div>
                <div className="font-plus-jakarta text-5xl font-extrabold text-black mb-2">3+</div>
                <div className="font-inter text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Growing Business Verticals</div>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  Raha Group operates across multiple industries, including Big Think Technology, Learnixa Education, and Raha Infra.
                </p>
              </div>
              <div>
                <div className="font-plus-jakarta text-5xl font-extrabold text-black mb-2">100%</div>
                <div className="font-inter text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Commitment to Quality &amp; Trust</div>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  Customer satisfaction, transparency, and ethical business practices are at the core of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        
        {/* Core Principles (New Section) */}
        <section className="py-28 px-20 max-w-[1280px] mx-auto border-t border-black/5" id="pillars">
          <div className="text-center mb-20 reveal-on-scroll">
            <span className="font-inter text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">GUIDING ETHOS</span>
            <h2 className="font-plus-jakarta text-4xl font-extrabold text-black">Core Principles</h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="p-8 border border-black/5 rounded-xl group reveal-on-scroll hover-card-premium">
              <span className="material-symbols-outlined text-[#735b28] text-4xl mb-6">update</span>
              <h4 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Long-Term Thinking</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                We prioritize legacy over quick wins, investing in assets that provide value for decades to come.
              </p>
            </div>
            <div className="p-8 border border-black/5 rounded-xl group reveal-on-scroll hover-card-premium">
              <span className="material-symbols-outlined text-[#735b28] text-4xl mb-6">visibility</span>
              <h4 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Absolute Transparency</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Radical honesty in governance and reporting ensures trust with stakeholders and partners.
              </p>
            </div>
            <div className="p-8 border border-black/5 rounded-xl group reveal-on-scroll hover-card-premium">
              <span className="material-symbols-outlined text-[#735b28] text-4xl mb-6">precision_manufacturing</span>
              <h4 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Structural Integrity</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Quality is non-negotiable. From steel beams to digital code, we build with uncompromising precision.
              </p>
            </div>
          </div>
        </section>

        {/* Desktop Verticals Slider Section */}
        <VerticalsSlider />

        {/* Desktop Process Section */}
        <section className="py-28 px-20 max-w-[1280px] mx-auto overflow-hidden">
          <div className="text-center mb-24">
            <p className="font-inter text-xs font-bold text-secondary mb-4 uppercase tracking-[0.2em]">Our Methodology</p>
            <h2 className="font-plus-jakarta text-4xl font-extrabold text-black">The Process</h2>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/10 -translate-y-1/2" />
            <div className="grid grid-cols-3 gap-12 relative z-10">
              <div className="bg-[#faf9f6] pr-10">
                <div className="flex flex-col">
                  <span className="font-plus-jakarta text-[#735b28]/15 text-[100px] leading-none mb-4 font-extrabold">01</span>
                  <h4 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Understand</h4>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                    We begin by understanding your business needs, objectives, and expectations. Our team evaluates requirements carefully to design tailored solutions aligned with your long-term goals.
                  </p>
                </div>
              </div>
              <div className="bg-[#faf9f6] px-10">
                <div className="flex flex-col">
                  <span className="font-plus-jakarta text-[#735b28]/15 text-[100px] leading-none mb-4 font-extrabold">02</span>
                  <h4 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Strategize</h4>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                    Based on your requirements, we develop and implement well-defined strategies using industry insights, data-driven approaches, and best practices to ensure optimal outcomes.
                  </p>
                </div>
              </div>
              <div className="bg-[#faf9f6] pl-10">
                <div className="flex flex-col">
                  <span className="font-plus-jakarta text-[#735b28]/15 text-[100px] leading-none mb-4 font-extrabold">03</span>
                  <h4 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Execute</h4>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                    We ensure smooth execution with complete transparency, continuous monitoring, and dedicated support, ensuring successful outcomes and long-term value creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Strategic Market Opportunities (New Section) */}
        <section className="py-28 bg-[#1a1c1a] text-white" id="presence">
          <div className="px-20 max-w-[1280px] mx-auto grid grid-cols-12 gap-12">
            <div className="col-span-4">
              <h2 className="font-plus-jakarta text-4xl font-extrabold mb-8 leading-tight text-white">Strategic Market Opportunities</h2>
              <p className="font-inter text-base text-white/70 mb-10 leading-relaxed">
                Identifying high-growth sectors where Raha&apos;s structural excellence creates outsized value.
              </p>
              <Link href="/contact" className="text-[#fedb9c] font-inter text-sm font-bold border-b border-[#fedb9c] pb-1 hover:text-white transition-colors">
                Request Insight Report
              </Link>
            </div>
            <div className="col-span-7 col-start-6 space-y-6">
              <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-plus-jakarta text-xl font-bold text-white">Emerging Markets Infrastructure</h4>
                  <span className="text-[#fedb9c] text-xs font-inter font-bold uppercase tracking-widest">High Priority</span>
                </div>
                <p className="font-inter text-sm text-white/60">Bridging the logistics gap in rapid-growth urban corridors across Southeast Asia and MENA.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-plus-jakarta text-xl font-bold text-white">Renewable Grid Resilience</h4>
                  <span className="text-[#fedb9c] text-xs font-inter font-bold uppercase tracking-widest">Growth Sector</span>
                </div>
                <p className="font-inter text-sm text-white/60">Structural storage solutions for decentralized energy systems.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-plus-jakarta text-xl font-bold text-white">AI-Native Governance</h4>
                  <span className="text-[#fedb9c] text-xs font-inter font-bold uppercase tracking-widest">Strategic Asset</span>
                </div>
                <p className="font-inter text-sm text-white/60">Developing proprietary digital frameworks for institutional asset management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Goals Section */}
        <section className="bg-black text-white py-28" id="governance">
          <div className="px-20 max-w-[1280px] mx-auto grid grid-cols-12 gap-12">
            <div className="col-span-5 text-white">
              <p className="font-inter text-xs font-bold text-[#fedb9c] mb-4 uppercase tracking-[0.2em]">Our Goals</p>
              <h2 className="font-plus-jakarta text-4xl font-extrabold mb-8 leading-tight">
                Sustainable Conglomerate Goals
              </h2>
              <p className="font-inter text-lg opacity-80 mb-12 leading-relaxed">
                To establish Raha Group as a diversified business conglomerate delivering excellence in Education, Energy, Manpower, Infrastructure, and emerging business sectors while contributing to India&apos;s sustainable growth. 🚀
              </p>
            </div>
            <div className="col-span-6 col-start-7 space-y-6">
              <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                <h4 className="font-plus-jakarta text-xl font-bold text-[#fedb9c]">01. Clean Energy Transition</h4>
                <p className="mt-2 text-white/60 font-inter text-sm leading-relaxed">
                  Deploy advanced EV charging infrastructure and sustainable solar solutions across India to accelerate green mobility.
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                <h4 className="font-plus-jakarta text-xl font-bold text-[#fedb9c]">02. Empower Future Leaders</h4>
                <p className="mt-2 text-white/60 font-inter text-sm leading-relaxed">
                  Provide structured career counseling and university placement support to help medical students access global EdTech channels.
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                <h4 className="font-plus-jakarta text-xl font-bold text-[#fedb9c]">03. Drive Digital Transformation</h4>
                <p className="mt-2 text-white/60 font-inter text-sm leading-relaxed">
                  Deliver result-oriented marketing and technology solutions to help SMEs and enterprises scale their digital footprint.
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                <h4 className="font-plus-jakarta text-xl font-bold text-[#fedb9c]">04. Build Premium Infrastructure</h4>
                <p className="mt-2 text-white/60 font-inter text-sm leading-relaxed">
                  Offer end-to-end real estate advisory and quality property consulting that ensures transparent and high-yielding investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Market Analysis */}
        <section className="py-28 px-20 max-w-[1280px] mx-auto">
          <div className="text-center mb-24">
            <span className="font-inter text-xs font-bold text-secondary mb-4 uppercase tracking-[0.2em]">Market Research</span>
            <h2 className="font-plus-jakarta text-4xl font-extrabold text-black">Market Analysis</h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="p-10 border border-black/5 bg-[#efeeeb] rounded-xl">
              <h4 className="font-plus-jakarta text-xl font-bold text-black mb-4">01. Growing Multi-Sector Opportunities</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                India&apos;s rapidly expanding economy is creating strong opportunities across Electric Mobility, Education, and Real Estate. Government initiatives, urban development, and digital transformation continue to drive demand.
              </p>
            </div>
            <div className="p-10 border border-black/5 bg-[#efeeeb] rounded-xl">
              <h4 className="font-plus-jakarta text-xl font-bold text-black mb-4">02. Rising Customer Demand</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Consumers today seek trusted companies that deliver quality, innovation, and long-term value. The increasing need for EV charging infrastructure, career-focused education, and premium real estate solutions reflects consistent demand.
              </p>
            </div>
            <div className="p-10 border border-black/5 bg-[#efeeeb] rounded-xl">
              <h4 className="font-plus-jakarta text-xl font-bold text-black mb-4">03. Strong Future Investment Potential</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                With rising infrastructure investments, expanding urbanization, and the shift towards sustainable technologies, the market offers exceptional long-term growth potential.
              </p>
            </div>
          </div>
        </section>



        {/* Desktop Leadership Section */}
        <section className="py-28 px-20 max-w-[1280px] mx-auto" id="investor">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ 
                    backgroundImage: "url('/images/chairman.png')",
                  }}
                />
              </div>
            </div>
            <div className="col-span-6 col-start-8">
              <span className="material-symbols-outlined text-6xl text-[#735b28] mb-6">format_quote</span>
              <blockquote className="font-plus-jakarta text-3xl font-bold leading-tight mb-8 text-black">
                &quot;Real excellence isn&apos;t just about the structure we build; it&apos;s about the standard we set for the entire industry. We build for the next century.&quot;
              </blockquote>
              <div className="h-px w-20 bg-black mb-4"></div>
              <p className="font-plus-jakarta text-xl font-bold text-black">Rahul Kumar</p>
              <p className="font-inter text-xs text-on-surface-variant uppercase tracking-widest mt-1">Raha Group</p>
            </div>

            <div className="hidden lg:block lg:col-span-4 lg:col-start-9">
              <div className="bg-[#efeeeb] p-8 rounded-xl border border-black/5">
                <h5 className="font-plus-jakarta text-sm font-bold text-black mb-4 uppercase tracking-wider">Letter to Investors</h5>
                <p className="font-inter text-sm text-on-surface-variant italic mb-6">
                  &quot;In a world obsessed with the immediate, our value lies in the durable...&quot;
                </p>
                <Link href="/about" className="text-secondary font-inter text-xs font-bold flex items-center hover:underline">
                  Read Full Statement <span className="material-symbols-outlined ml-2 text-xs">open_in_new</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Desktop CTA Banner */}
        <section className="bg-black text-white py-28 text-center">
          <div className="px-20 max-w-3xl mx-auto">
            <h2 className="font-plus-jakarta text-5xl font-extrabold text-white mb-8 leading-tight">
              Let&apos;s Build the Future Together
            </h2>
            <p className="font-inter text-lg text-white/70 mb-10 leading-relaxed">
              Whether you&apos;re looking to invest, partner, or join our global team, the journey starts here.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href={`mailto:${content.footer.delhiEmail}`} 
                className="bg-[#fedb9c] text-black px-10 py-4 rounded-lg font-inter text-sm font-bold hover:scale-105 transition-all text-center"
              >
                Start a Conversation
              </a>
              <Link 
                href="/#presentation" 
                className="border border-white/30 text-white px-10 py-4 rounded-lg font-inter text-sm font-bold hover:bg-white/10 transition-all text-center"
              >
                Corporate Presentation
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE ONLY LAYOUT (block md:hidden)                                   */}
      {/* ========================================================================= */}
      <div className="block md:hidden">
        {/* Mobile Hero Section */}
        <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full opacity-60 bg-cover bg-center" 
              style={{
                backgroundImage: "url('/images/hero_bg.png')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          </div>
          <div className="container mx-auto px-6 z-10 animate-fade-up">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full mb-6">
                <img src="/images/Raha_Group_Logo.svg" alt="Raha Group Logo" className="h-12 w-auto object-contain" />
                <span className="font-inter text-[10px] font-bold text-white uppercase tracking-widest pr-0.5">Raha Group</span>
              </div>
              <span className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-[#fedb9c] mb-6 block">
                Architectural Prestige
              </span>
              <h1 className="font-plus-jakarta text-4xl font-extrabold text-white mb-12 leading-tight">
                {content.home.heroTitle}
              </h1>
              <div className="flex flex-col gap-4">
                <Link 
                  href="/#verticals-desktop" 
                  className="bg-white text-black px-8 py-4 rounded-lg font-inter text-sm font-bold hover:scale-105 transition-all text-center"
                >
                  Explore Our Verticals
                </Link>
                <Link 
                  href="/#investor" 
                  className="border border-white text-white px-8 py-4 rounded-lg font-inter text-sm font-bold hover:bg-white/10 transition-all text-center"
                >
                  Investor Relations
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile About Section (Asymmetric) */}
        <section className="py-12 bg-white" id="about-mobile">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-8">
              <div className="relative">
                <div 
                  className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage: "url('/images/boardroom.png')",
                  }}
                />
              </div>
              <div>
                <span className="font-inter text-xs text-[#735b28] font-bold uppercase tracking-widest mb-4 block gold-underline">
                  About Our Company
                </span>
                <h2 className="font-plus-jakarta text-2xl font-extrabold text-black mb-6 leading-tight">
                  Raha Group
                </h2>
                <p className="font-inter text-sm text-on-surface-variant mb-8 leading-relaxed">
                  Raha Group is a diversified business group committed to delivering innovative, reliable, and growth-oriented solutions across multiple industries. With a strong focus on technology, education, and real estate, Raha Group has established itself as a trusted partner for businesses and individuals seeking excellence. Our philosophy is built on innovation, integrity, customer satisfaction, and long-term value creation.
                </p>
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="text-[#735b28] font-bold text-2xl mb-1">15,000+</div>
                    <div className="font-inter text-xs uppercase tracking-wider text-on-surface-variant">Customers &amp; People Reached</div>
                    <p className="font-inter text-xs text-on-surface-variant leading-relaxed mt-1">
                      Through our businesses in EV charging, education, and real estate, we connect thousands of users.
                    </p>
                  </div>
                  <div>
                    <div className="text-[#735b28] font-bold text-2xl mb-1">3+</div>
                    <div className="font-inter text-xs uppercase tracking-wider text-on-surface-variant">Business Verticals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Core Principles Mobile (New Section) */}
        <section className="py-12 bg-white border-t border-black/5">
          <div className="container mx-auto px-6 text-center mb-10">
            <span className="font-inter text-xs text-[#735b28] font-bold uppercase tracking-widest mb-3 block">GUIDING ETHOS</span>
            <h2 className="font-plus-jakarta text-2xl font-extrabold text-black">Core Principles</h2>
          </div>
          <div className="container mx-auto px-6 flex flex-col gap-6">
            <div className="p-6 border border-black/5 rounded-xl">
              <span className="material-symbols-outlined text-[#735b28] text-3xl mb-4">update</span>
              <h4 className="font-plus-jakarta text-lg font-bold mb-2 text-black">Long-Term Thinking</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                We prioritize legacy over quick wins, investing in assets that provide value for decades to come.
              </p>
            </div>
            <div className="p-6 border border-black/5 rounded-xl">
              <span className="material-symbols-outlined text-[#735b28] text-3xl mb-4">visibility</span>
              <h4 className="font-plus-jakarta text-lg font-bold mb-2 text-black">Absolute Transparency</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Radical honesty in governance and reporting ensures trust with stakeholders and partners.
              </p>
            </div>
            <div className="p-6 border border-black/5 rounded-xl">
              <span className="material-symbols-outlined text-[#735b28] text-3xl mb-4">precision_manufacturing</span>
              <h4 className="font-plus-jakarta text-lg font-bold mb-2 text-black">Structural Integrity</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Quality is non-negotiable. From steel beams to digital code, we build with uncompromising precision.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile Business Verticals */}
        <section id="verticals-mobile" className="py-12 bg-[#efeeeb]">
          <div className="container mx-auto px-6 text-center mb-10">
            <span className="font-inter text-xs text-[#735b28] font-bold uppercase tracking-[0.2em] mb-3 block">Our Portfolio</span>
            <h2 className="font-plus-jakarta text-2xl font-extrabold text-black">Strategic Business Verticals</h2>
          </div>
          <div className="container mx-auto px-6 flex flex-col gap-8">
            {/* Raha Infra */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="h-64 w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/infra.png')",
                }}
              />
              <div className="p-8">
                <div className="font-inter text-xs text-[#735b28] font-bold uppercase mb-2">Real Estate</div>
                <h3 className="font-plus-jakarta text-xl font-bold text-black mb-3">Raha Infra</h3>
                <p className="font-inter text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Complete real estate solutions for residential and commercial properties, investment advisory, property consulting, and seamless buying &amp; selling assistance.
                </p>
                <Link href="/infra" className="inline-flex items-center gap-2 text-[#735b28] font-bold font-inter uppercase text-xs tracking-widest">
                  View Sector <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Learnixa */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="h-64 w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/education_new.png')",
                }}
              />
              <div className="p-8">
                <div className="font-inter text-xs text-[#735b28] font-bold uppercase mb-2">Education</div>
                <h3 className="font-plus-jakarta text-xl font-bold text-black mb-3">Learnixa Education</h3>
                <p className="font-inter text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Expert guidance for MBBS in India &amp; Abroad, career counselling, university admissions, documentation, and visa support.
                </p>
                <Link href="/learnixa" className="inline-flex items-center gap-2 text-[#735b28] font-bold font-inter uppercase text-xs tracking-widest">
                  View Sector <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Big Think */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="h-64 w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/tech.png')",
                }}
              />
              <div className="p-8">
                <div className="font-inter text-xs text-[#735b28] font-bold uppercase mb-2">Technology</div>
                <h3 className="font-plus-jakarta text-xl font-bold text-black mb-3">Big Think Technology</h3>
                <p className="font-inter text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Innovative digital marketing solutions including social media marketing, performance ads, branding, website development, and lead generation.
                </p>
                <Link href="/bigthink" className="inline-flex items-center gap-2 text-[#735b28] font-bold font-inter uppercase text-xs tracking-widest">
                  View Sector <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Raha Energy */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="h-64 w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/energy_hero.png')",
                }}
              />
              <div className="p-8">
                <div className="font-inter text-xs text-[#735b28] font-bold uppercase mb-2">Energy</div>
                <h3 className="font-plus-jakarta text-xl font-bold text-black mb-3">Raha Energy</h3>
                <p className="font-inter text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Deploying utility-scale solar installations and advanced EV charging infrastructure across India to power the future with clean integrity and accelerate green mobility.
                </p>
                <Link href="/energy" className="inline-flex items-center gap-2 text-[#735b28] font-bold font-inter uppercase text-xs tracking-widest">
                  View Sector <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Why Raha Group (Values) */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 flex flex-col gap-10">
            <div className="text-center mb-4">
              <span className="font-inter text-xs text-[#735b28] font-bold uppercase tracking-widest mb-3 block">Our Goals</span>
              <h2 className="font-plus-jakarta text-2xl font-extrabold text-black">Sustainable Conglomerate Goals</h2>
            </div>
            <div>
              <span className="material-symbols-outlined text-[#735b28] text-4xl mb-4">bolt</span>
              <h3 className="font-plus-jakarta text-lg font-bold mb-3 text-black">1. Clean Energy Transition</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Deploy advanced EV charging infrastructure and sustainable solar solutions across India to accelerate green mobility.
              </p>
            </div>
            <div>
              <span className="material-symbols-outlined text-[#735b28] text-4xl mb-4">school</span>
              <h3 className="font-plus-jakarta text-lg font-bold mb-3 text-black">2. Empower Future Leaders</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Provide structured career counseling and university placement support to help medical students access global EdTech channels.
              </p>
            </div>
            <div>
              <span className="material-symbols-outlined text-[#735b28] text-4xl mb-4">laptop_mac</span>
              <h3 className="font-plus-jakarta text-lg font-bold mb-3 text-black">3. Drive Digital Transformation</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Deliver result-oriented marketing and technology solutions to help SMEs and enterprises scale their digital footprint.
              </p>
            </div>
            <div>
              <span className="material-symbols-outlined text-[#735b28] text-4xl mb-4">apartment</span>
              <h3 className="font-plus-jakarta text-lg font-bold mb-3 text-black">4. Build Premium Infrastructure</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Offer end-to-end real estate advisory and quality property consulting that ensures transparent and high-yielding investments.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile Methodology/Process */}
        <section className="py-12 bg-[#efeeeb]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-10">
              <div>
                <span className="font-inter text-xs text-[#735b28] font-bold uppercase tracking-[0.2em] mb-3 block">Our Methodology</span>
                <h2 className="font-plus-jakarta text-2xl font-extrabold text-black mb-4">The Process</h2>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed mb-6">
                  At Raha Group, we follow a simple, transparent, and client-focused approach to ensure a smooth and secure investment journey.
                </p>
                <div 
                  className="w-full aspect-square rounded-xl bg-cover bg-center shadow-md"
                  style={{
                    backgroundImage: "url('/images/staircase.png')",
                  }}
                />
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <div className="font-plus-jakarta text-[#735b28] opacity-35 text-4xl font-extrabold leading-none">01</div>
                  <div>
                    <h4 className="font-plus-jakarta text-lg font-bold mb-2 text-black">Understand</h4>
                    <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                      We begin by understanding your business needs, objectives, and expectations. Our team evaluates requirements carefully to design tailored solutions aligned with your long-term goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="font-plus-jakarta text-[#735b28] opacity-35 text-4xl font-extrabold leading-none">02</div>
                  <div>
                    <h4 className="font-plus-jakarta text-lg font-bold mb-2 text-black">Strategize</h4>
                    <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                      Based on your requirements, we develop and implement well-defined strategies using industry insights, data-driven approaches, and best practices to ensure optimal outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="font-plus-jakarta text-[#735b28] opacity-35 text-4xl font-extrabold leading-none">03</div>
                  <div>
                    <h4 className="font-plus-jakarta text-lg font-bold mb-2 text-black">Execute</h4>
                    <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                      We ensure smooth execution with complete transparency, continuous monitoring, and dedicated support, ensuring successful outcomes and long-term value creation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Strategic Market Opportunities Mobile (New Section) */}
        <section className="py-12 bg-[#1a1c1a] text-white">
          <div className="container mx-auto px-6 mb-10">
            <span className="font-inter text-xs text-[#fedb9c] font-bold uppercase tracking-widest mb-3 block">Market Insight</span>
            <h2 className="font-plus-jakarta text-2xl font-extrabold text-white leading-tight">Strategic Market Opportunities</h2>
            <p className="font-inter text-sm text-white/70 leading-relaxed mt-4">
              Identifying high-growth sectors where Raha&apos;s structural excellence creates outsized value.
            </p>
          </div>
          <div className="container mx-auto px-6 flex flex-col gap-6">
            <div className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h4 className="font-plus-jakarta text-lg font-bold mb-2 text-white">Emerging Markets Infrastructure</h4>
              <p className="font-inter text-sm text-white/60">Bridging the logistics gap in rapid-growth urban corridors across Southeast Asia and MENA.</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h4 className="font-plus-jakarta text-lg font-bold mb-2 text-white">Renewable Grid Resilience</h4>
              <p className="font-inter text-sm text-white/60">Structural storage solutions for decentralized energy systems.</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h4 className="font-plus-jakarta text-lg font-bold mb-2 text-white">AI-Native Governance</h4>
              <p className="font-inter text-sm text-white/60">Developing proprietary digital frameworks for institutional asset management.</p>
            </div>
          </div>
        </section>

        {/* Mobile The Raha Alpha (Market Insights) */}
        <section className="py-12 bg-black text-white" id="investment-mobile">
          <div className="container mx-auto px-6">
            <div className="mb-10">
              <span className="font-inter text-xs text-[#fedb9c] font-bold uppercase tracking-widest mb-3 block">Market Research</span>
              <h2 className="font-plus-jakarta text-3xl font-extrabold text-white leading-tight">Market Analysis</h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-8 border border-white/10 rounded-xl hover:bg-[#735b28]/10 transition-colors">
                <h4 className="font-plus-jakarta text-lg font-bold mb-4 text-white">01. Growing Multi-Sector Opportunities</h4>
                <p className="font-inter text-sm text-white/60 mb-6">India&apos;s rapidly expanding economy is creating strong opportunities across Electric Mobility, Education, and Real Estate. Government initiatives, urban development, and digital transformation continue to drive demand.</p>
                <div className="h-1 bg-[#735b28] w-12" />
              </div>
              <div className="p-8 border border-white/10 rounded-xl hover:bg-[#735b28]/10 transition-colors">
                <h4 className="font-plus-jakarta text-lg font-bold mb-4 text-white">02. Rising Customer Demand</h4>
                <p className="font-inter text-sm text-white/60 mb-6">Consumers today seek trusted companies that deliver quality, innovation, and long-term value. The increasing need for EV charging infrastructure, career-focused education, and premium real estate solutions reflects consistent demand.</p>
                <div className="h-1 bg-[#735b28] w-12" />
              </div>
              <div className="p-8 border border-white/10 rounded-xl hover:bg-[#735b28]/10 transition-colors">
                <h4 className="font-plus-jakarta text-lg font-bold mb-4 text-white">03. Strong Future Investment Potential</h4>
                <p className="font-inter text-sm text-white/60 mb-6">With rising infrastructure investments, expanding urbanization, and the shift towards sustainable technologies, the market offers exceptional long-term growth potential.</p>
                <div className="h-1 bg-[#735b28] w-12" />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Future Frontiers (Roadmaps) */}


        {/* Mobile Leadership Section */}
        <section className="py-12 bg-[#efeeeb]" id="leadership-mobile">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-8">
              <div className="relative">
                <div 
                  className="w-full aspect-[4/5] bg-cover bg-center rounded-xl grayscale hover:grayscale-0 transition-all duration-700 shadow-lg"
                  style={{
                    backgroundImage: "url('/images/chairman.png')",
                  }}
                />
              </div>
              <div>
                <span className="material-symbols-outlined text-[#735b28] text-5xl mb-4 opacity-25">format_quote</span>
                <blockquote className="font-plus-jakarta text-xl font-extrabold text-black mb-6 italic leading-tight">
                  &quot;Real excellence isn&apos;t just about the structure we build; it&apos;s about the standard we set for the entire industry. We build for the next century.&quot;
                </blockquote>
                <div className="h-px w-20 bg-[#735b28] mb-4" />
                <h4 className="font-plus-jakarta text-lg font-bold text-black">Rahul Kumar</h4>
                <p className="text-[#735b28] font-inter text-xs uppercase tracking-widest mt-1">Raha Group</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile CTA Banner */}
        <section className="py-12 bg-black text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="font-plus-jakarta text-2xl font-extrabold mb-6 leading-tight">Let&apos;s Build the Future Together</h2>
            <p className="font-inter text-sm text-white/70 mb-8 leading-relaxed">
              Whether you&apos;re looking to invest, partner, or join our global team, the journey starts here.
            </p>
            <div className="flex flex-col gap-4">
              <a 
                href={`mailto:${content.footer.delhiEmail}`} 
                className="bg-[#fedb9c] text-black px-8 py-4 rounded-lg font-bold font-inter uppercase text-xs tracking-widest text-center"
              >
                Start a Conversation
              </a>
              <Link 
                href="/#presentation" 
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-bold font-inter uppercase text-xs tracking-widest text-center"
              >
                Corporate Presentation
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-6 md:px-20 max-w-[1280px] mx-auto scroll-mt-20 reveal-on-scroll">
        <div className="text-center mb-16">
          <span className="font-inter text-xs text-secondary font-bold uppercase tracking-widest block mb-4">CONNECT WITH US</span>
          <h2 className="font-plus-jakarta text-3xl md:text-5xl font-extrabold text-black mb-4">Start a Conversation</h2>
          <p className="font-inter text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Reach out to our executive teams for partnership inquiries, strategic investments, or general business questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Card */}
          <div className="lg:col-span-5 bg-[#efeeeb]/50 p-8 md:p-12 rounded-2xl border border-black/5 flex flex-col justify-between">
            <div>
              <h3 className="font-plus-jakarta text-2xl font-bold text-black mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-[#735b28] text-2xl">mail</span>
                  <div>
                    <h4 className="font-plus-jakarta text-sm font-bold text-black uppercase tracking-wider mb-1">Inquiries &amp; Support</h4>
                    <a href={`mailto:${content.footer.delhiEmail}`} className="font-inter text-sm text-[#735b28] hover:underline font-medium">
                      {content.footer.delhiEmail}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-[#735b28] text-2xl">phone</span>
                  <div>
                    <h4 className="font-plus-jakarta text-sm font-bold text-black uppercase tracking-wider mb-1">Direct Line</h4>
                    <a href={`tel:${content.footer.delhiPhone}`} className="font-inter text-sm text-[#735b28] hover:underline font-medium">
                      {content.footer.delhiPhone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-[#735b28] text-2xl">location_on</span>
                  <div>
                    <h4 className="font-plus-jakarta text-sm font-bold text-black uppercase tracking-wider mb-1">Office Address</h4>
                    <p className="font-inter text-sm text-[#735b28] font-medium leading-relaxed">
                      {content.footer.delhiAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-black/5">
              <h4 className="font-plus-jakarta text-xs font-bold text-black uppercase tracking-widest mb-4">Our Divisions</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-black/5 text-black px-3 py-1.5 rounded-full font-inter text-[10px] font-bold uppercase tracking-wider">Raha Infra</span>
                <span className="bg-black/5 text-black px-3 py-1.5 rounded-full font-inter text-[10px] font-bold uppercase tracking-wider">Learnixa</span>
                <span className="bg-black/5 text-black px-3 py-1.5 rounded-full font-inter text-[10px] font-bold uppercase tracking-wider">Big Think</span>
                <span className="bg-black/5 text-black px-3 py-1.5 rounded-full font-inter text-[10px] font-bold uppercase tracking-wider">Raha Energy</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl border border-black/5 shadow-sm">
            <form className="space-y-6" suppressHydrationWarning>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-plus-jakarta text-xs font-bold text-black uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="Enter your name" 
                    className="w-full bg-[#efeeeb]/30 border border-black/10 rounded-lg px-4 py-3 font-inter text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-[#735b28] focus:ring-1 focus:ring-[#735b28] transition-all"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-plus-jakarta text-xs font-bold text-black uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="Enter your email" 
                    className="w-full bg-[#efeeeb]/30 border border-black/10 rounded-lg px-4 py-3 font-inter text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-[#735b28] focus:ring-1 focus:ring-[#735b28] transition-all"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-plus-jakarta text-xs font-bold text-black uppercase tracking-wider mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Enter phone number" 
                    className="w-full bg-[#efeeeb]/30 border border-black/10 rounded-lg px-4 py-3 font-inter text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-[#735b28] focus:ring-1 focus:ring-[#735b28] transition-all"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="division" className="block font-plus-jakarta text-xs font-bold text-black uppercase tracking-wider mb-2">Business Division</label>
                  <select 
                    id="division" 
                    className="w-full bg-[#efeeeb]/30 border border-black/10 rounded-lg px-4 py-3 font-inter text-sm text-black focus:outline-none focus:border-[#735b28] focus:ring-1 focus:ring-[#735b28] transition-all"
                    suppressHydrationWarning
                  >
                    <option value="group">Raha Group (General)</option>
                    <option value="infra">Raha Infra (Real Estate)</option>
                    <option value="learnixa">Learnixa Education</option>
                    <option value="bigthink">Big Think Technology</option>
                    <option value="energy">Raha Energy</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-plus-jakarta text-xs font-bold text-black uppercase tracking-wider mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  required 
                  placeholder="How can we help you?" 
                  className="w-full bg-[#efeeeb]/30 border border-black/10 rounded-lg px-4 py-3 font-inter text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-[#735b28] focus:ring-1 focus:ring-[#735b28] transition-all resize-none"
                  suppressHydrationWarning
                />
              </div>

              <button 
                type="button" 
                className="w-full bg-black hover:bg-[#735b28] text-white font-inter text-xs font-bold uppercase tracking-widest py-4 rounded-lg transition-colors cursor-pointer"
                suppressHydrationWarning
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
