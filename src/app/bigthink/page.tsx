import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getSiteContent } from "@/lib/getContent";

export default function BigThink() {
  const content = getSiteContent();
  return (
    <div className="theme-bigthink min-h-screen bg-background text-primary">
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center brightness-[0.35] scale-105" 
              style={{
                backgroundImage: "url('/images/tech.png')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-85" />
          </div>
          <div className="relative z-10 text-center px-6 md:px-20 max-w-5xl animate-fade-up">
            <span className="font-inter text-xs font-bold text-secondary-container uppercase mb-6 block tracking-[0.25em]">
              {content.bigthink.heroTagline}
            </span>
            <h1 className="font-plus-jakarta text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              {content.bigthink.heroTitle}
            </h1>
            <p className="font-inter text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              {content.bigthink.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-secondary text-white font-inter text-sm font-bold uppercase tracking-widest px-10 py-4.5 rounded-lg hover:scale-105 transition-all text-center">
                Explore Solutions
              </Link>
              <Link href="#capabilities" className="border border-white text-white font-inter text-sm font-bold uppercase tracking-widest px-10 py-4.5 rounded-lg hover:bg-white/10 transition-all text-center">
                Our Capabilities
              </Link>
            </div>
          </div>
        </section>

        {/* Business Vision Section */}
        <section className="py-24 px-6 md:px-20 max-w-[1280px] mx-auto reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-2xl">developer_mode</span>
                <span className="font-inter text-xs font-bold text-secondary uppercase tracking-widest">Our Vision</span>
              </div>
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-primary leading-tight">
                Empowering Enterprises through High-Scale Technology
              </h2>
              <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                Big Think Technology specializes in developing reliable, scalable, and customized technology solutions tailored to meet the unique needs of startups, SMEs, and enterprises. Our team combines technical expertise with creative problem-solving to provide high-quality software, web, mobile, cloud, and digital solutions that drive measurable business growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 font-inter text-sm text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">verified</span>
                  <div>
                    <h5 className="font-bold text-primary mb-1">Bespoke Software Architectures</h5>
                    <p className="text-xs">Tailored digital systems built exactly to match your business logic.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">cloud_done</span>
                  <div>
                    <h5 className="font-bold text-primary mb-1">Cloud Integration & Consulting</h5>
                    <p className="text-xs">Secure database migrations, cloud hosting, and server stability systems.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-primary/5 relative group img-zoom-container">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{
                    backgroundImage: "url('/images/staircase.png')",
                  }}
                />
              </div>
              <blockquote className="bg-surface/50 p-6 rounded-xl border-l-4 border-secondary font-inter text-sm italic text-on-surface-variant leading-relaxed">
                “Technology isn’t just about writing code; it’s about architecting digital tools that solve real-world problems and allow companies to scale globally without friction.”
              </blockquote>
            </div>
          </div>
        </section>

        {/* Capability areas */}
        <section id="capabilities" className="py-24 bg-dark-bg text-white reveal-on-scroll">
          <div className="px-6 md:px-20 max-w-[1280px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-inter text-xs font-bold text-secondary-container uppercase tracking-[0.2em] mb-4 block">Key Capabilities</span>
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-white mb-6">
                End-to-End Technology Services
              </h2>
              <p className="font-inter text-sm text-white/70">
                From initial analysis to final deployment, we provide the engineering talent and strategic foresight required to build outstanding digital products.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Custom Software", desc: "Bespoke codebases, ERP integrations, and workflow automation tailored to specific business goals.", icon: "terminal" },
                { title: "Web & Mobile Apps", desc: "High-performance digital products built with modern stacks (React, Next.js, Flutter, iOS/Android).", icon: "devices" },
                { title: "Cloud Integration", desc: "Secure cloud hosting migrations, DevOps, server monitoring, and absolute data protection.", icon: "cloud" },
                { title: "UI/UX Innovation", desc: "Engaging user interfaces, low-fidelity wireframes, and interactive mockups designed for users.", icon: "palette" },
                { title: "AI & Automation", desc: "Integrating cognitive frameworks, automated routines, and data intelligence algorithms.", icon: "psychology" },
                { title: "Cybersecurity", desc: "Rigorous network audits, threat mitigation, credential security, and live firewall setups.", icon: "security" },
                { title: "Process Automation", desc: "Operational workflows engineered to eliminate human error and optimize throughput speeds.", icon: "settings_suggest" },
                { title: "Lifecycle Management", desc: "Full-scale product maintenance, routine patches, framework updates, and technical consulting.", icon: "dns" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group">
                  <div>
                    <span className="material-symbols-outlined text-3xl text-secondary-container mb-4 block group-hover:scale-110 transition-transform">{item.icon}</span>
                    <h4 className="font-plus-jakarta font-bold text-white text-lg mb-2">{item.title}</h4>
                    <p className="font-inter text-xs text-white/60 leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-secondary-container font-bold font-inter text-xs uppercase tracking-widest hover:text-white transition-colors">
                    Inquire Now
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-24 px-6 md:px-20 max-w-[1280px] mx-auto text-center reveal-on-scroll">
          <div className="bg-surface/50 p-12 md:p-16 rounded-2xl border border-primary/5 max-w-4xl mx-auto space-y-6">
            <h2 className="font-plus-jakarta text-3xl font-extrabold text-primary">Ready to Accelerate Your Digital Growth?</h2>
            <p className="font-inter text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              Connect with our technology engineering division to plan your custom software system, web platform, or mobile app architecture.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="inline-block bg-primary text-white font-inter text-xs font-bold uppercase tracking-widest px-12 py-5 rounded-lg hover:scale-105 transition-all text-center">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
