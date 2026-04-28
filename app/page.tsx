"use client";

import Image from "next/image";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import Link from "next/link"; 
import { motion, AnimatePresence } from "framer-motion"; 
  
// Assets
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"

// Component
import Terminal from "../components/terminal";

// Declared here to fix the "used before declaration" TS error while staying in scope
const projects = [
  {
    id: 1,
    title: "GCP Serverless Storefront",
    image: "/Shopping_website_GCP.png",
    tech: ["Cloud Run", "Pub/Sub", "Cloud Build", "Terraform"],
    github: "https://github.com/am29work"
  },
  {
    id: 2,
    title: "Azure Real-Time Analytics",
    image: "/Azure_cloud_architecture_CI_CD_infographic.png",
    tech: ["Azure Functions", "Service Bus", "Cosmos DB", "DevOps"],
    github: "https://github.com/am29work"
  },
  {
    id: 3,
    title: "AWS DevSecOps Netflix Clone",
    image: "/netflix_ci_cd.png",
    tech: ["EKS", "Terraform", "Docker", "Jenkins"],
    github: "https://github.com/am29work"
  }
];

const navItems = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "work-sample", label: "Work Sample" }
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // --- ORIGINAL LOGIC: SCROLL LISTENER ---
  useEffect(() => {
    const handleScroll = () => {
      if (avatarRef.current) {
        const rect = avatarRef.current.getBoundingClientRect();
        setScrolled(rect.top <= -50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- ORIGINAL LOGIC: INTERSECTION OBSERVER ---
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // --- ORIGINAL LOGIC: THEME PERSISTENCE ---
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // --- ORIGINAL LOGIC: DARK MODE TOGGLE ---
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // --- FIXED LOGIC: PRECISE SLIDER NAVIGATION ---
  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      // Calculate 85% of container width to match the mobile card sizing
      const scrollAmount = sliderRef.current.offsetWidth * 0.85;
      sliderRef.current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-amber-50 px-10 dark:bg-gray-900 md:px-20 lg:px-40 pt-10 md:pt-16 transition-all min-h-screen">
        
        {/* --- NAVBAR --- */}
        <nav 
          className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
            scrolled 
              ? "top-4 mx-auto w-fit max-w-[90%] md:w-max bg-purple-950/38 dark:bg-purple-600/15 backdrop-blur-md shadow-2xl rounded-full px-6 md:px-10 py-3 border border-purple-400/30 justify-center"
              : "top-0 dark:bg-gray-900/90 backdrop-blur-md py-4 px-4 md:px-20 lg:px-40 w-full justify-between flex-wrap gap-4"
          } flex items-center`}
        >
          {!scrolled && <h1 className="text-lg md:text-xl font-bold dark:text-white">Anmol's Portfolio</h1>}
          <ul className="flex items-center gap-4">
            <li className="flex items-center gap-3 text-yellow-500">
              <a href="https://www.linkedin.com/in/anmolxmishra" target="_blank" rel="noreferrer"><AiFillLinkedin className="w-5 h-5 sm:w-6 sm:h-6" /></a>
              <a href="https://www.github.com/am29work" target="_blank" rel="noreferrer"><AiFillGithub className="w-5 h-5 sm:w-6 sm:h-6" /></a>
              <a href="mailto:anmolmishra2906@gmail.com"><AiFillMail className="w-5 h-5 sm:w-6 sm:h-6" /></a>
            </li> 
            <li>
              {darkMode ? (
                <BsSunFill onClick={toggleDarkMode} className="cursor-pointer text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <BsFillMoonStarsFill onClick={toggleDarkMode} className="cursor-pointer dark:text-white w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </li>
            <li>
              <a href="/Anmol_Mishra_Resume_DevOps_Cloud.pdf" target="_blank" className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 md:px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform text-sm md:text-base">Resume</a>
            </li>
          </ul>
        </nav>

        {/* --- HERO SECTION --- */}
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-center py-5">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-10 lg:gap-20">
            
            {/* Avatar & Dynamic Titles */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div ref={avatarRef} className="group relative h-[420px] w-80 flex items-end justify-center cursor-pointer mb-6">
                <div className="absolute bottom-0 h-80 w-80 rounded-full bg-gradient-to-r from-yellow-600 from-[15%] to-purple-700 to-65% transition-all duration-500 group-hover:scale-110" />
                <div className="absolute bottom-0 h-80 w-80 overflow-hidden rounded-full z-10">
                  <img src="/Anmol_Avatar.png" alt="Avatar Base" className="absolute bottom-0 h-[450px] w-full object-contain transition-all duration-500 origin-bottom scale-[0.7] group-hover:scale-[0.9] group-hover:opacity-0" />
                  <img src="/Anmol_Avatar2.png" alt="Avatar 2 Body" className="absolute bottom-0 h-[450px] w-full object-contain transition-all duration-500 opacity-0 origin-bottom scale-[0.7] group-hover:opacity-100 group-hover:scale-[0.9]" />
                </div>
                {/* --- ORIGINAL CLIP-PATH HEAD POP --- */}
                <div className="absolute bottom-0 h-[500px] w-80 overflow-visible pointer-events-none z-20">
                  <img 
                    src="/Anmol_Avatar2.png" 
                    alt="Avatar 2 Head" 
                    className="absolute bottom-0 h-[450px] w-full object-contain transition-all duration-500 opacity-0 origin-bottom scale-[0.7] group-hover:opacity-100 group-hover:scale-[0.9]" 
                    style={{ clipPath: 'inset(0% 0% 40% 0%)' }} 
                  />
                </div>
              </div>

              <div className="w-full">
                <h2 className="text-5xl lg:text-6xl py-2 text-yellow-600 font-semibold">Anmol Mishra</h2>
                <h3 className="text-2xl lg:text-3xl py-2 text-black dark:text-white">Developer & Cloud Architect</h3>
              </div>
            </div>

            {/* Terminal Component */}
            <div className="w-full max-w-xl lg:max-w-2xl px-4 lg:px-0">
              <Terminal />
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="py-20">
          <h3 className="text-3xl py-1 mt-6 text-center text-black dark:text-white font-medium">Services I Offer</h3>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-purple-400/10 flex-1 transition-all duration-300 hover:-translate-y-2 border-t-4 border-yellow-500">
              <Image src={design} width={100} height={100} className="mx-auto" alt="design" />
              <h3 className="text-black dark:text-white text-2xl font-medium pt-8 pb-2">Web Designs</h3>
              <p className="text-gray-800 dark:text-gray-200 py-2">Creating elegant, responsive interfaces with React and Tailwind.</p>
            </div>

            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-purple-400/10 flex-1 transition-all duration-300 hover:-translate-y-2 border-t-4 border-yellow-500">
              <Image src={code} width={100} height={100} className="mx-auto" alt="code" />
              <h3 className="text-black dark:text-white text-2xl font-medium pt-8 pb-2">Cloud Architecture</h3>
              <p className="text-gray-800 dark:text-gray-200 py-2">Designing scalable, secure AWS infrastructure and CI/CD pipelines.</p>
            </div>

            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-purple-400/10 flex-1 transition-all duration-300 hover:-translate-y-2 border-t-4 border-yellow-500">
              <Image src={consulting} width={100} height={100} className="mx-auto" alt="consulting" />
              <h3 className="text-black dark:text-white text-2xl font-medium pt-8 pb-2">Technical Training</h3>
              <p className="text-gray-800 dark:text-gray-200 py-2">Empowering teams through DevOps workshops and management.</p>
            </div>
          </div>
        </section>

        {/* --- WORK SAMPLE SECTION (BALANCED FOR ALL SCREENS) --- */}
        <section id="work-sample" className="py-20 w-full relative group">
          <h3 className="text-3xl py-1 text-center text-black dark:text-white mb-8">Work Sample</h3>
          <div className="relative w-full overflow-visible">
            
            {/* Left Control */}
            <button 
              onClick={() => scrollSlider("left")}
              className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 z-40 bg-white/20 dark:bg-purple-900/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-500/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-purple-950 dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* --- SLIDER CONTAINER --- */}
            {/* ADJUSTED: md:px-[10%] and scroll-padding matching the 80% card width */}
            <div 
              ref={sliderRef} 
              id="slider-container" 
              className="flex gap-6 md:gap-12 py-10 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden px-6 md:px-[10%] scroll-padding-x-6 md:scroll-padding-x-[10%]"
            >
              {projects.map((project) => (
                <Link 
                  href={`/projects/${project.id}`} 
                  key={project.id} 
                  /* FIX: Increased width to 80% to reduce the peek of surrounding cards */
                  className="min-w-[85%] md:min-w-[80%] snap-center shrink-0 group/card relative cursor-pointer"
                >
                  <div className="relative aspect-[16/9] md:aspect-[16/8] w-full overflow-hidden rounded-2xl shadow-2xl border border-purple-500/10">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-all duration-700 group-hover/card:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10">
                      <h4 className="text-xl md:text-3xl font-bold text-white mb-2 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">{project.title}</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[10px] md:text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-500 font-bold shadow-[0_0_10px_rgba(234,179,8,0.3)]">{t}</span>
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm md:text-base mb-4 opacity-0 group-hover/card:opacity-100 delay-100 transition-opacity">Click to view full architecture documentation.</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right Control */}
            <button 
              onClick={() => scrollSlider("right")}
              className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 z-40 bg-white/20 dark:bg-purple-900/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-500/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-purple-950 dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </section>

        {/* --- FLOATING BOTTOM DOCK --- */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <nav className="flex items-center gap-6 bg-purple-950/38 dark:bg-purple-600/15 backdrop-blur-md shadow-2xl rounded-full px-6 py-2 border border-purple-400/30">
            {navItems.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
                className={`text-sm md:text-base font-medium transition-all duration-300 relative px-4 py-2 group ${activeSection === section.id ? "text-yellow-500" : "text-white"}`}
              >
                {/* Liquid Glass Effect Pill */}
                <AnimatePresence>
                  {(activeSection === section.id || hoveredSection === section.id) && (
                    <motion.div
                      layoutId="liquid-glass-pill"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                      className="absolute inset-0 z-0 bg-white/10 dark:bg-white/5 border border-white/20 rounded-full backdrop-blur-sm"
                    />
                  )}
                </AnimatePresence>

                <span className="relative z-10">{section.label}</span>
                
                {/* Active Indicator Dot */}
                {activeSection === section.id && (
                  <motion.span 
                    layoutId="dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-500 rounded-full" 
                  />
                )}
              </a>
            ))}
          </nav>
        </div>
      </main>
    </div>
  );
}