import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="theme-default min-h-screen bg-background text-primary">
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* Header Hero Section */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-16 animate-fade-up text-center">
          <span className="font-inter text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Get In Touch</span>
          <h1 className="font-plus-jakarta text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            Connect With Raha Group
          </h1>
          <p className="font-inter text-base text-on-surface-variant max-w-2xl mx-auto mt-6 leading-relaxed">
            Reach out to our global offices, request specialized consultations, or partner with our strategic divisions across physical and digital sectors.
          </p>
        </section>

        {/* Office Details & Contact Form */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-28 reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Office Details */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Head Office Delhi */}
              <div className="bg-surface/50 p-8 rounded-xl border border-primary/5 space-y-4">
                <span className="font-inter text-[10px] text-secondary font-bold uppercase tracking-widest block">Delhi Head Office</span>
                <h3 className="font-plus-jakarta text-xl font-bold text-primary">Raha Group Headquarters</h3>
                
                <div className="space-y-3 pt-2">
                  <p className="flex items-start gap-3 font-inter text-xs text-on-surface-variant leading-relaxed">
                    <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">location_on</span>
                    <span>A-42, Street No. 2, Near Bikaner Sweet Corner, Nirman Vihar, Delhi</span>
                  </p>
                  <p className="flex items-center gap-3 font-inter text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-[18px]">mail</span>
                    <a href="mailto:Rahagroupadmin@gmail.com" className="hover:text-secondary transition-colors">Rahagroupadmin@gmail.com</a>
                  </p>
                  <p className="flex items-center gap-3 font-inter text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-[18px]">phone</span>
                    <a href="tel:+918651201033" className="hover:text-secondary transition-colors">+91 8651201033</a>
                  </p>
                  <p className="flex items-center gap-3 font-inter text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-[18px]">public</span>
                    <a href="https://www.rahagroup.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">www.rahagroup.co.in</a>
                  </p>
                </div>
              </div>

              {/* Energy Division Office */}
              <div className="bg-surface/50 p-8 rounded-xl border border-primary/5 space-y-4">
                <span className="font-inter text-[10px] text-secondary font-bold uppercase tracking-widest block">Noida Energy Branch</span>
                <h3 className="font-plus-jakarta text-xl font-bold text-primary">Raha Energy / Vixon Energy</h3>
                
                <div className="space-y-3 pt-2">
                  <p className="flex items-start gap-3 font-inter text-xs text-on-surface-variant leading-relaxed">
                    <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">location_on</span>
                    <span>I-Thum Tower B, Sector 62, Noida, Uttar Pradesh – 201301, India</span>
                  </p>
                  <p className="flex items-center gap-3 font-inter text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-[18px]">mail</span>
                    <a href="mailto:info@vixonenergy.com" className="hover:text-secondary transition-colors">info@vixonenergy.com</a>
                  </p>
                  <p className="flex items-center gap-3 font-inter text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-[18px]">phone</span>
                    <a href="tel:7291002205" className="hover:text-secondary transition-colors">7291002205</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-surface/50 p-8 md:p-10 rounded-2xl border border-primary/5">
              <h3 className="font-plus-jakarta text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">First Name *</label>
                    <input 
                      type="text" 
                      placeholder="Enter your first name" 
                      className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      placeholder="Enter your last name" 
                      className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
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
                      className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="Example: user@website.com" 
                      className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-inter text-xs text-primary font-bold mb-2">Division of Interest *</label>
                  <select 
                    className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    required
                  >
                    <option value="general">Raha Group Corporate</option>
                    <option value="infra">Raha Infra (Real Estate)</option>
                    <option value="energy">Raha Energy (EV Solutions)</option>
                    <option value="learnixa">Learnixa EdTech (Education)</option>
                    <option value="bigthink">Big Think Technology (Digital Solutions)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-inter text-xs text-primary font-bold mb-2">Message *</label>
                  <textarea 
                    rows={4} 
                    placeholder="Describe your requirements or questions in detail..." 
                    className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-inter text-xs font-bold uppercase tracking-widest py-4 rounded-lg transition-colors cursor-pointer"
                >
                  Submit Inquiry
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
