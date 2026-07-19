import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/content.json");

const defaultContent = {
  footer: {
    delhiAddress: "A-42, Street No. 2, Near Bikaner Sweet Corner, Nirman Vihar, Delhi",
    delhiEmail: "Rahagroup.admin@gmail.com",
    delhiPhone: "+91 8651201033",
    delhiWeb: "www.rahagroup.co.in",
    missionText: "To consistently deliver high-quality solutions through professionalism, transparency, and deep market understanding, enabling our clients to achieve their long-term goals.",
    visionText: "To become one of India's most trusted multi-business organizations by delivering innovative solutions, empowering businesses, and creating opportunities across diverse industries.",
    copyrightText: "© 2026 Raha Group. All rights reserved. Architectural Prestige in Motion."
  },
  home: {
    heroTitle: "Building Businesses That Shape Tomorrow",
    heroSubtitle: "A global conglomerate dedicated to industrial prestige and architectural excellence across the physical and digital world.",
    aboutTitle: "Architectural Prestige",
    aboutText: "We believe in long-term value creation. Our companies operate across physical infrastructure, clean energy grids, career education, and bespoke software automation, establishing standards of stability and compliance."
  },
  infra: {
    heroTitle: "Raha Infra",
    heroTagline: "Real Estate & Infrastructure",
    heroDesc: "Complete real estate solutions for residential and commercial properties, investment advisory, property consulting, and seamless buying & selling assistance."
  },
  energy: {
    heroTitle: "Powering India’s EV Future with Smart Charging Solutions",
    heroTagline: "In Association with EcoPlug Energy India Limited",
    heroDesc: "We deliver fast, reliable, and intelligent EV charging infrastructure designed for the next generation of mobility. From highways to cities, we are building a seamless charging network that keeps India moving forward."
  },
  learnixa: {
    heroTitle: "Learnixa Education",
    heroTagline: "Education",
    heroDesc: "Expert guidance for MBBS in India & Abroad, career counselling, university admissions, documentation, and visa support."
  },
  bigthink: {
    heroTitle: "Innovating Today, Empowering Tomorrow",
    heroTagline: "Big Think Technology",
    heroDesc: "We deliver innovative IT and digital solutions that help startups, SMEs, and global enterprises accelerate digital transformation, optimize processes, and scale with confidence."
  },
  energyContact: {
    hotline: "+91 8651201033",
    email: "Rahagroup.admin@gmail.com",
    address: "A-42, Street No. 2, Near Bikaner Sweet Corner, Nirman Vihar, Delhi"
  }
};

export function getSiteContent() {
  try {
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      return { ...defaultContent, ...JSON.parse(fileData) };
    }
  } catch (error) {
    console.error("Error reading site content:", error);
  }
  return defaultContent;
}
