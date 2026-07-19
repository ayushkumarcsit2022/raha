import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getSiteContent } from "@/lib/getContent";

export default function Energy() {
  const content = getSiteContent();
  return (
    <div className="theme-energy min-h-screen bg-background text-primary">
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center brightness-[0.3]" 
              style={{
                backgroundImage: "url('/images/energy_hero.png')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-85" />
          </div>
          <div className="relative z-10 text-center px-6 md:px-20 max-w-5xl animate-fade-up">
            <span className="font-inter text-xs font-bold text-secondary-container uppercase mb-6 block tracking-[0.25em]">
              {content.energy.heroTagline}
            </span>
            <h1 className="font-plus-jakarta text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              {content.energy.heroTitle}
            </h1>
            <p className="font-inter text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              {content.energy.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-secondary text-white font-inter text-sm font-bold uppercase tracking-widest px-10 py-4.5 rounded-lg hover:scale-105 transition-all text-center">
                Find A Charger
              </Link>
              <Link href="#offers" className="border border-white text-white font-inter text-sm font-bold uppercase tracking-widest px-10 py-4.5 rounded-lg hover:bg-white/10 transition-all text-center">
                Discover More
              </Link>
            </div>
          </div>
        </section>

        {/* Get to Know Us Section */}
        <section className="py-24 px-6 md:px-20 max-w-[1280px] mx-auto reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-2xl">charging_station</span>
                <span className="font-inter text-xs font-bold text-secondary uppercase tracking-widest">Get to Know Us</span>
              </div>
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-primary leading-tight">
                Powering the EV Revolution with Innovation and Trust
              </h2>
              <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                Empowering businesses and communities with next-generation EV infrastructure. Our solutions are built on innovation, efficiency, and trust to accelerate a greener tomorrow.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="bg-surface/50 p-6 rounded-xl border border-primary/5 flex items-center gap-4">
                  <div className="bg-secondary/10 p-4 rounded-lg text-secondary">
                    <span className="material-symbols-outlined text-3xl">bolt</span>
                  </div>
                  <div>
                    <div className="font-plus-jakarta text-3xl font-extrabold text-primary">1,600+</div>
                    <div className="font-inter text-xs text-on-surface-variant font-semibold">Active Charging Stations</div>
                  </div>
                </div>
                
                <ul className="space-y-3 font-inter text-sm text-on-surface-variant">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    Fast & Reliable Charging
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    Strategic Key Locations
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    End-to-End Installation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    24/7 Support & Monitoring
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                    Scalable EV Technology
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-primary/5 relative group">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{
                    backgroundImage: "url('https://vixonenergy.com/wp-content/uploads/2026/04/GettyImages-1387159408-Electric-vehicle-charging-HEADER-2400x1600-1.jpg')",
                  }}
                />
              </div>
              <blockquote className="bg-surface/50 p-6 rounded-xl border-l-4 border-secondary font-inter text-sm italic text-on-surface-variant leading-relaxed">
                “We are not just building charging stations, we are building the backbone of India’s electric future. Our mission is to make EV charging accessible, fast, and dependable for everyone.”
              </blockquote>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section id="offers" className="py-24 bg-dark-bg text-white reveal-on-scroll">
          <div className="px-6 md:px-20 max-w-[1280px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-inter text-xs font-bold text-secondary-container uppercase tracking-[0.2em] mb-4 block">What We Offer</span>
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold mb-6 text-white">
                Powering Your EV Journey with Smart Solutions
              </h2>
              <p className="font-inter text-sm text-white/70">
                At Vixon Energy, we provide intelligent EV infrastructure to help businesses and individuals grow faster. Our solutions are built for performance, scalability, and long-term success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "EV Charging Station Setup", desc: "Setting up high-performance, robust charging terminals to support high-density public demand.", icon: "ev_charger" },
                { title: "Site Selection & Approval", desc: "Strategic validation, feasibility studies, and official permissions for premium charging points.", icon: "map" },
                { title: "Operations & Maintenance", desc: "Constant physical updates and preventive measures keeping uptime at maximum levels.", icon: "build" },
                { title: "Smart Monitoring System", desc: "Dynamic software tracking system with instant diagnostics and intelligent power loads.", icon: "monitoring" },
                { title: "Installation & Commissioning", desc: "Safety certified and professional engineers executing hardware setups and grid checks.", icon: "engineering" },
                { title: "Investor Support", desc: "End-to-end transparent revenue shares, reporting frameworks, and commercial viability guidance.", icon: "handshake" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all group flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-4xl text-secondary-container mb-6 block group-hover:scale-110 transition-transform">{item.icon}</span>
                    <h4 className="font-plus-jakarta text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="font-inter text-xs text-white/60 leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-secondary-container font-bold font-inter text-xs uppercase tracking-widest hover:text-white transition-colors">
                    Discover More
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Highlight Stats */}
        <section className="py-20 px-6 md:px-20 max-w-[1280px] mx-auto reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-plus-jakarta text-2xl md:text-3xl font-extrabold text-primary leading-tight">
                Reliable Charging, Anywhere
              </h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Access a wide network of EV charging stations across highways, cities, and commercial hubs—ensuring seamless charging wherever you go.
              </p>
              <div className="h-px bg-primary/10" />
              <h3 className="font-plus-jakarta text-2xl md:text-3xl font-extrabold text-primary leading-tight">
                Commitment to Sustainability
              </h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                We are dedicated to reducing carbon emissions by promoting clean energy solutions and supporting India’s transition to electric mobility.
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-surface/40 p-8 md:p-10 rounded-2xl border border-primary/5 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { count: "1,600+", label: "EV Stations Installed", sub: "Nationwide coverage" },
                { count: "1,100+", label: "White-label Installations", sub: "Partner operations" },
                { count: "500+", label: "Company-owned Stations", sub: "Raha operated" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left space-y-2">
                  <div className="font-plus-jakarta text-4xl font-extrabold text-secondary">{stat.count}</div>
                  <div className="font-inter text-xs font-bold text-primary">{stat.label}</div>
                  <div className="font-inter text-[11px] text-on-surface-variant">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Strengths */}
        <section className="py-24 bg-dark-bg text-white reveal-on-scroll">
          <div className="px-6 md:px-20 max-w-[1280px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-inter text-xs font-bold text-secondary-container uppercase tracking-[0.25em] mb-4 block">Strengths of Ecoplug Energy</span>
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Leading the Charge in Smarter EV Solutions
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Smart App Access", desc: "Our innovative smart app is available on both the Apple Store and Google Play Store.", icon: "phone_iphone" },
                { title: "Instant Charging Control", desc: "Start charging immediately via OCPI and OCPP protocols for convenience.", icon: "touch_app" },
                { title: "Unbeatable Pricing", desc: "Enjoy the cheapest charging rates from cut to charge in the market.", icon: "payments" },
                { title: "Regular Updates", desc: "Our dedicated software team provides frequent updates for optimal performance.", icon: "update" },
                { title: "In-House Manufacturing", desc: "We manufacture and monitor, ensuring quality and reliable charging solutions.", icon: "precision_manufacturing" },
                { title: "Ideal for Any Location", desc: "Ecoplug chargers suit societies, hotels, restaurants, and commercial spaces.", icon: "location_city" }
              ].map((strength, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all flex items-start gap-4">
                  <span className="material-symbols-outlined text-3xl text-secondary-container mt-1">{strength.icon}</span>
                  <div>
                    <h4 className="font-plus-jakarta text-lg font-bold text-white mb-2">{strength.title}</h4>
                    <p className="font-inter text-xs text-white/60 leading-relaxed">{strength.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 md:px-20 max-w-[1280px] mx-auto reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <span className="font-inter text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Testimonials</span>
                <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-primary mb-6">
                  Feedback That Drives Us Forward
                </h2>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed mb-6">
                  Hear directly from our drivers, partners, and business owners operating on the EcoPlug network.
                </p>
              </div>
              <div className="bg-surface/50 p-6 rounded-xl border border-primary/5">
                <div className="font-plus-jakarta text-5xl font-extrabold text-secondary mb-2">4.75</div>
                <div className="font-inter text-xs text-on-surface-variant">Rated based on 21,391 customer reviews in 2025.</div>
              </div>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: "Rakesh Dhaiya", role: "Customer", quote: "Charging stations are easy to locate and the experience is always smooth. It has made my daily EV usage completely stress-free and convenient." },
                { name: "Sonu Goswami", role: "Customer", quote: "I’ve used multiple stations across cities and highways, and the reliability is consistent everywhere. It’s a dependable network for EV users." },
                { name: "Riya Srivastav", role: "Customer", quote: "The charging speed is impressive and I rarely face any issues. It saves a lot of time and makes long drives much more comfortable." },
                { name: "Mohit Ahlawat", role: "Customer", quote: "The entire charging process is simple and user-friendly. It’s a great solution for anyone looking to switch to electric vehicles with confidence." }
              ].map((t, idx) => (
                <div key={idx} className="bg-surface/50 p-6 rounded-xl border border-primary/5 flex flex-col justify-between">
                  <p className="font-inter text-xs text-on-surface-variant italic leading-relaxed mb-6">“{t.quote}”</p>
                  <div>
                    <h5 className="font-plus-jakarta text-sm font-bold text-primary">{t.name}</h5>
                    <span className="font-inter text-[10px] text-secondary uppercase tracking-widest">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive FAQs Accordion */}
        <section className="py-24 bg-surface/30 border-t border-primary/5 reveal-on-scroll">
          <div className="px-6 md:px-20 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-inter text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">FAQs</span>
              <h2 className="font-plus-jakarta text-3xl font-extrabold text-primary">Everything You Want to Know About Charging</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { q: "How long does it take to charge an EV?", a: "Charging time depends on the charger type and vehicle battery. Fast chargers can charge up to 80% in 30–60 minutes, while slower chargers may take a few hours." },
                { q: "Where can I find your charging stations?", a: "Our stations are located across national highways, major city hubs, commercial parking spots, and shopping malls. You can locate them instantly via the EcoPlug smart app." },
                { q: "What is the cost of EV charging?", a: "EcoPlug offers some of the most competitive charging rates in the industry. The exact cost depends on your location and whether you are using an AC or DC fast charger." },
                { q: "Do you provide installation services?", a: "Yes, we handle the entire lifecycle including site feasibility studies, permissions, equipment supply, certified installation, and final commission checks." },
                { q: "How can I monitor my charging usage?", a: "All users can track active power sessions, billing details, receipts, and historical charging statistics live via our mobile app." }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white p-6 rounded-xl border border-primary/5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                    <h4 className="font-plus-jakarta text-sm font-bold text-primary">{faq.q}</h4>
                    <span className="material-symbols-outlined text-secondary transition group-open:rotate-180">expand_more</span>
                  </summary>
                  <p className="mt-4 font-inter text-xs text-on-surface-variant leading-relaxed border-t border-primary/5 pt-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Noida Office Contact Form Section */}
        <section id="contact" className="py-24 px-6 md:px-20 max-w-[1280px] mx-auto reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-inter text-xs font-bold text-secondary uppercase tracking-[0.2em] block">Get in Touch</span>
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-primary leading-tight">
                Take the Next Step Towards Smart Mobility
              </h2>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Connect with our experts and discover how our EV charging solutions can power your growth and sustainability goals.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">call</span>
                  <div>
                    <h5 className="font-plus-jakarta text-xs font-bold text-primary">Direct Hotline</h5>
                    <a href="tel:7291002205" className="font-inter text-sm text-on-surface-variant hover:text-secondary">7291002205</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">mail</span>
                  <div>
                    <h5 className="font-plus-jakarta text-xs font-bold text-primary">Inquiries</h5>
                    <a href="mailto:info@vixonenergy.com" className="font-inter text-sm text-on-surface-variant hover:text-secondary">info@vixonenergy.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">location_on</span>
                  <div>
                    <h5 className="font-plus-jakarta text-xs font-bold text-primary">Office Address</h5>
                    <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                      I-Thum Tower B, Sector 62, Noida, Uttar Pradesh – 201301, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 bg-surface/50 p-8 md:p-10 rounded-2xl border border-primary/5">
              <h4 className="font-plus-jakarta text-xl font-bold text-primary mb-6">Send Us a Message!</h4>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">First Name *</label>
                    <input 
                      type="text" 
                      placeholder="Enter your first name" 
                      className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      placeholder="Enter your last name" 
                      className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">Mobile Number *</label>
                    <input 
                      type="tel" 
                      placeholder="Example: +91 9999999999" 
                      className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="Example: user@website.com" 
                      className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-inter text-xs text-primary font-bold mb-2">Message *</label>
                  <textarea 
                    rows={4} 
                    placeholder="Describe your inquiry..." 
                    className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-inter text-xs font-bold uppercase tracking-widest py-4 rounded-lg transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
