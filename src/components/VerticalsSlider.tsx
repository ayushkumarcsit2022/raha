"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Slide {
  id: string;
  tagline: string;
  title: string;
  desc: string;
  logoSrc: string;
  bgImage: string;
  link: string;
  themeClass: string;
}

const slides: Slide[] = [
  {
    id: "infra",
    tagline: "Real Estate & Infrastructure",
    title: "Raha Infra",
    desc: "Complete real estate solutions for residential and commercial properties, investment advisory, property consulting, and seamless buying & selling assistance.",
    logoSrc: "/images/Raha_infra.svg",
    bgImage: "/images/infra.png",
    link: "/infra",
    themeClass: "theme-infra",
  },
  {
    id: "learnixa",
    tagline: "Global EdTech & Education",
    title: "Learnixa Education",
    desc: "Expert guidance for MBBS in India & Abroad, career counselling, university admissions, documentation, and visa support.",
    logoSrc: "/images/Learnixa.svg",
    bgImage: "/images/education_new.png",
    link: "/learnixa",
    themeClass: "theme-learnixa",
  },
  {
    id: "energy",
    tagline: "EV Charging Infrastructure",
    title: "Raha Energy",
    desc: "Powering India’s EV Future with Smart Charging Solutions, in association with EcoPlug Energy India Limited.",
    logoSrc: "/images/Raha_Energy_Logo.svg",
    bgImage: "/images/energy_hero.png",
    link: "/energy",
    themeClass: "theme-energy",
  },
  {
    id: "bigthink",
    tagline: "Technology & Software Development",
    title: "Big Think Technology",
    desc: "Innovative digital marketing solutions including social media marketing, branding, custom website & mobile app development, and business automation platforms.",
    logoSrc: "/images/Big_think.svg",
    bgImage: "/images/tech.png",
    link: "/bigthink",
    themeClass: "theme-bigthink",
  },
];

export default function VerticalsSlider() {
  const [sliderSlides, setSliderSlides] = useState<Slide[]>(slides);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    setProgress(0);

    const duration = 6000; // 6 seconds
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressIntervalRef.current!);
          setCurrentIdx((currentIdx + 1) % sliderSlides.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);
  };

  const stopTimer = () => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
  };

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setSliderSlides([
            {
              ...slides[0],
              tagline: data.infra?.heroTagline || slides[0].tagline,
              title: data.infra?.heroTitle || slides[0].title,
              desc: data.infra?.heroDesc || slides[0].desc,
            },
            {
              ...slides[1],
              tagline: data.learnixa?.heroTagline || slides[1].tagline,
              title: data.learnixa?.heroTitle || slides[1].title,
              desc: data.learnixa?.heroDesc || slides[1].desc,
            },
            {
              ...slides[2],
              tagline: data.energy?.heroTagline || slides[2].tagline,
              title: data.energy?.heroTitle || slides[2].title,
              desc: data.energy?.heroDesc || slides[2].desc,
            },
            {
              ...slides[3],
              tagline: data.bigthink?.heroTagline || slides[3].tagline,
              title: data.bigthink?.heroTitle || slides[3].title,
              desc: data.bigthink?.heroDesc || slides[3].desc,
            },
          ]);
        }
      })
      .catch((err) => console.error("Error loading slider content:", err));
  }, []);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [currentIdx, sliderSlides]);

  const selectSlide = (idx: number) => {
    setCurrentIdx(idx);
  };

  const activeSlide = sliderSlides[currentIdx];

  return (
    <section id="verticals-desktop" className="relative w-full overflow-hidden bg-black text-white min-h-[650px] md:h-[700px] flex items-center border-t border-b border-white/5">
      
      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0">
        {sliderSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out brightness-[0.35] ${
              idx === currentIdx ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `url('${slide.bgImage}')`,
            }}
          />
        ))}
        {/* Soft bottom/top gradient overlay for smooth visual boundaries */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-1" />
      </div>

      <div className="relative z-10 px-6 md:px-20 w-full max-w-[1280px] mx-auto py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Content Card */}
        <div className="lg:col-span-6 space-y-6 md:space-y-8">
          <div className="space-y-4">
            
            {/* Business Logo Indicator with Fade-In Animation */}
            <div className="h-16 w-auto flex items-center mb-6">
              {sliderSlides.map((slide, idx) => (
                <img
                  key={slide.id}
                  src={slide.logoSrc}
                  alt={slide.title}
                  className={`h-16 w-auto object-contain transition-all duration-500 absolute ${
                    idx === currentIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                />
              ))}
            </div>

            {/* Slide Details with staggered transitions */}
            <div className="relative pt-6">
              {sliderSlides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`transition-all duration-700 ease-out space-y-4 ${
                    idx === currentIdx 
                      ? "opacity-100 translate-y-0 relative" 
                      : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <span className="font-inter text-xs font-bold text-[#fedb9c] uppercase tracking-widest block">
                    {slide.tagline}
                  </span>
                  <h2 className="font-plus-jakarta text-4xl md:text-5xl font-extrabold text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="font-inter text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
                    {slide.desc}
                  </p>
                  
                  <div className="pt-4">
                    <Link 
                      href={slide.link} 
                      className={`inline-flex items-center gap-2 bg-white text-black font-inter text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-lg hover:scale-105 transition-all shadow-lg`}
                    >
                      Explore Sector
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Right Side Glassmorphism Tabs / Navigation */}
        <div className="lg:col-span-5 lg:col-start-8 space-y-4">
          <div className="hidden lg:block space-y-4">
            {sliderSlides.map((slide, idx) => {
              const isActive = idx === currentIdx;
              return (
                <button
                  key={slide.id}
                  onClick={() => selectSlide(idx)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-500 flex flex-col justify-between relative overflow-hidden backdrop-blur-md cursor-pointer ${
                    isActive 
                      ? "bg-white/10 border-white/20 shadow-lg translate-x-2" 
                      : "bg-black/20 border-white/5 hover:bg-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Slider Progress Bar */}
                  {isActive && (
                    <div 
                      className="absolute bottom-0 left-0 h-[3px] bg-[#fedb9c] transition-all ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <span className="font-inter text-[10px] font-bold opacity-40 uppercase tracking-widest block mb-1">
                        0{idx + 1}
                      </span>
                      <h4 className="font-plus-jakarta text-lg font-bold text-white">
                        {slide.title}
                      </h4>
                    </div>
                    <span className={`material-symbols-outlined text-xl transition-transform duration-300 ${
                      isActive ? "text-[#fedb9c] translate-x-1" : "text-white/40"
                    }`}>
                      arrow_right_alt
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Simple dot navigation for mobile viewports */}
          <div className="flex justify-center gap-3 lg:hidden pt-4">
            {sliderSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => selectSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIdx ? "bg-[#fedb9c] w-8" : "bg-white/30 w-2.5"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
