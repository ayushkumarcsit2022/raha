"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("home");
  const [loading, setLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");

  const [content, setContent] = useState<any>({
    footer: {
      delhiAddress: "",
      delhiEmail: "",
      delhiPhone: "",
      delhiWeb: "",
      missionText: "",
      visionText: "",
      copyrightText: ""
    },
    home: {
      heroTitle: "",
      heroSubtitle: "",
      aboutTitle: "",
      aboutText: ""
    },
    infra: {
      heroTitle: "",
      heroTagline: "",
      heroDesc: ""
    },
    energy: {
      heroTitle: "",
      heroTagline: "",
      heroDesc: ""
    },
    learnixa: {
      heroTitle: "",
      heroTagline: "",
      heroDesc: ""
    },
    bigthink: {
      heroTitle: "",
      heroTagline: "",
      heroDesc: ""
    }
  });

  // Fetch current site content
  const fetchContent = async () => {
    try {
      const res = await fetch("/api/content");
      if (res.ok) {
        const data = await res.json();
        setContent(data);
      }
    } catch (err) {
      console.error("Error loading content:", err);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "Raah@admin.com" && password === "RaahAdmin@123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid administrative credentials.");
    }
  };

  const handleInputChange = (section: string, field: string, value: string) => {
    setContent((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSaveStatus("");

    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content)
      });

      if (res.ok) {
        setSaveStatus("Changes successfully saved and updated on the site!");
        fetchContent();
      } else {
        setSaveStatus("Error: Failed to save changes.");
      }
    } catch (err) {
      setSaveStatus("Error: Connection failure.");
    } finally {
      setLoading(false);
    }
  };

  // Login Screen Render
  if (!isAuthenticated) {
    return (
      <div className="theme-default min-h-screen bg-[#faf9f6] flex items-center justify-center px-6">
        <div className="bg-white p-8 md:p-10 rounded-2xl border border-black/5 shadow-xl max-w-md w-full space-y-6">
          <div className="text-center space-y-2">
            <img src="/images/Raha_Group_Logo.svg" alt="Raha Group Logo" className="h-16 mx-auto object-contain mb-4" />
            <h1 className="font-plus-jakarta text-2xl font-extrabold text-primary">System Administrator</h1>
            <p className="font-inter text-xs text-on-surface-variant">Access content manager dashboard for Raha Group properties.</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-xs font-semibold p-3 rounded-lg text-center border border-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-inter text-xs text-primary font-bold mb-2">Username / Email</label>
              <input 
                type="text" 
                placeholder="Enter Raah@admin.com" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#efeeeb]/30 border border-primary/10 rounded-lg px-4 py-3 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                required
              />
            </div>
            <div>
              <label className="block font-inter text-xs text-primary font-bold mb-2">Password</label>
              <input 
                type="password" 
                placeholder="Enter Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#efeeeb]/30 border border-primary/10 rounded-lg px-4 py-3 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-inter text-xs font-bold uppercase tracking-widest py-4 rounded-lg transition-colors cursor-pointer"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard Editor Render
  return (
    <div className="theme-default min-h-screen bg-[#faf9f6] text-primary flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 md:pt-36 pb-20 px-6 md:px-20 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tabs Navigation Sidebar */}
          <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-primary/5 space-y-2">
            <h4 className="font-plus-jakarta text-xs font-bold text-secondary uppercase tracking-widest mb-4 px-3">Tabs</h4>
            {[
              { id: "home", label: "Homepage", icon: "home" },
              { id: "footer", label: "Footer Context", icon: "splitscreen" },
              { id: "infra", label: "Raha Infra", icon: "corporate_fare" },
              { id: "energy", label: "Raha Energy", icon: "electric_car" },
              { id: "learnixa", label: "Learnixa", icon: "school" },
              { id: "bigthink", label: "Big Think Tech", icon: "code" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-inter text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id 
                    ? "bg-secondary text-white shadow-md" 
                    : "text-on-surface-variant hover:bg-primary/5"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
            <div className="h-px bg-primary/5 my-4" />
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-inter text-xs font-semibold text-red-600 hover:bg-red-50 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">logout</span>
              Log Out
            </button>
          </div>

          {/* Form Content Area */}
          <div className="lg:col-span-9 bg-white p-8 md:p-10 rounded-2xl border border-primary/5 shadow-sm space-y-6">
            <div className="border-b border-primary/5 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="font-plus-jakarta text-2xl font-extrabold text-primary capitalize">{activeTab} Content Settings</h2>
                <p className="font-inter text-xs text-on-surface-variant">Update section headers, main taglines, and texts.</p>
              </div>
              <button
                onClick={handleSave}
                disabled={loading}
                className="bg-secondary text-white font-inter text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-lg hover:scale-105 transition-all shadow-md cursor-pointer disabled:opacity-55"
              >
                {loading ? "Saving Changes..." : "Save Changes"}
              </button>
            </div>

            {saveStatus && (
              <div className={`p-4 rounded-lg text-xs font-semibold border ${
                saveStatus.startsWith("Error") 
                  ? "bg-red-50 text-red-600 border-red-200" 
                  : "bg-green-50 text-green-700 border-green-200"
              }`}>
                {saveStatus}
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-6">
              
              {/* HOMEPAGE EDITOR FIELDS */}
              {activeTab === "home" && (
                <div className="space-y-6">
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">Homepage Hero Title</label>
                    <input 
                      type="text" 
                      value={content.home.heroTitle}
                      onChange={(e) => handleInputChange("home", "heroTitle", e.target.value)}
                      className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">Homepage Hero Subtitle</label>
                    <textarea 
                      rows={3}
                      value={content.home.heroSubtitle}
                      onChange={(e) => handleInputChange("home", "heroSubtitle", e.target.value)}
                      className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">About Section Title</label>
                    <input 
                      type="text" 
                      value={content.home.aboutTitle}
                      onChange={(e) => handleInputChange("home", "aboutTitle", e.target.value)}
                      className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">About Section Text</label>
                    <textarea 
                      rows={4}
                      value={content.home.aboutText}
                      onChange={(e) => handleInputChange("home", "aboutText", e.target.value)}
                      className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                </div>
              )}

              {/* FOOTER EDITOR FIELDS */}
              {activeTab === "footer" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-xs text-primary font-bold mb-2">Head Office Address</label>
                      <input 
                        type="text" 
                        value={content.footer.delhiAddress}
                        onChange={(e) => handleInputChange("footer", "delhiAddress", e.target.value)}
                        className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-xs text-primary font-bold mb-2">Administrative Email</label>
                      <input 
                        type="email" 
                        value={content.footer.delhiEmail}
                        onChange={(e) => handleInputChange("footer", "delhiEmail", e.target.value)}
                        className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-xs text-primary font-bold mb-2">Contact Phone Number</label>
                      <input 
                        type="text" 
                        value={content.footer.delhiPhone}
                        onChange={(e) => handleInputChange("footer", "delhiPhone", e.target.value)}
                        className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-xs text-primary font-bold mb-2">Corporate Website Domain</label>
                      <input 
                        type="text" 
                        value={content.footer.delhiWeb}
                        onChange={(e) => handleInputChange("footer", "delhiWeb", e.target.value)}
                        className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">Footer Mission Statement</label>
                    <textarea 
                      rows={3}
                      value={content.footer.missionText}
                      onChange={(e) => handleInputChange("footer", "missionText", e.target.value)}
                      className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">Footer Vision Statement</label>
                    <textarea 
                      rows={3}
                      value={content.footer.visionText}
                      onChange={(e) => handleInputChange("footer", "visionText", e.target.value)}
                      className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">Copyright Disclaimer</label>
                    <input 
                      type="text" 
                      value={content.footer.copyrightText}
                      onChange={(e) => handleInputChange("footer", "copyrightText", e.target.value)}
                      className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                </div>
              )}

              {/* DYNAMIC VERTICALS EDITORS */}
              {["infra", "energy", "learnixa", "bigthink"].includes(activeTab) && (
                <div className="space-y-6">
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">Hero Tagline</label>
                    <input 
                      type="text" 
                      value={content[activeTab].heroTagline}
                      onChange={(e) => handleInputChange(activeTab, "heroTagline", e.target.value)}
                      className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">Hero Heading Title</label>
                    <input 
                      type="text" 
                      value={content[activeTab].heroTitle}
                      onChange={(e) => handleInputChange(activeTab, "heroTitle", e.target.value)}
                      className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-primary font-bold mb-2">Hero Description Paragraph</label>
                    <textarea 
                      rows={4}
                      value={content[activeTab].heroDesc}
                      onChange={(e) => handleInputChange(activeTab, "heroDesc", e.target.value)}
                      className="w-full bg-[#efeeeb]/20 border border-primary/10 rounded-lg px-4 py-3.5 font-inter text-xs text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                </div>
              )}

            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
