"use client";

import Image from "next/image"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import { useState, useEffect, useRef } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const avatarRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-amber-50 px-10 dark:bg-gray-900 md:px-20 lg:px-40 pt-28 md:pt-32 transition-all min-h-screen">
        
        {/* Navbar */}
        <nav 
          className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
            scrolled 
              ? "top-4 mx-auto w-fit max-w-[90%] md:w-max bg-purple-950/38 dark:bg-purple-600/15 backdrop-blur-md shadow-2xl rounded-full px-6 md:px-10 py-3 border border-purple-400/30 justify-center"
              : "top-0 dark:bg-gray-900/90 backdrop-blur-md py-4 px-4 md:px-20 lg:px-40 w-full justify-between flex-wrap gap-4"
          } flex items-center`}
        >
          {!scrolled && <h1 className="text-lg md:text-xl font-buttons dark:text-white">Anmol's Portfolio</h1>}
          <ul className="flex items-center gap-4">
            <li className="flex items-center gap-3 text-yellow-500">
              <a href="https://www.linkedin.com/in/anmolxmishra" target="_blank" rel="noreferrer"><AiFillLinkedin className="w-5 h-5 sm:w-6 sm:h-6" /></a>
              <a href="https://www.github.com/am29work" target="_blank" rel="noreferrer"><AiFillGithub className="w-5 h-5 sm:w-6 sm:h-6" /></a>
              <a href="mailto:anmolmishra2906@gmail.com"><AiFillMail className="w-5 h-5 sm:w-6 sm:h-6" /></a>
            </li> 
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer dark:text-white w-5 h-5 sm:w-6 sm:h-6" /></li>
            <li>
              <a href="/Anmol_Mishra_Resume_DevOps_Cloud.pdf" target="_blank" className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 md:px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform text-sm md:text-base">Resume</a>
            </li>
          </ul>
        </nav>

        {/* Hero & Avatar Pop-out Fixed */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center">
          <div className="text-center mt-1 mb-2">
            <h2 className="text-5xl py-2 text-yellow-600 font-semibold">Anmol Mishra</h2>
            <h3 className="text-2xl py-2 text-black dark:text-white">Developer & Cloud Architect</h3>
            <p className="text-md py-5 leading-8 text-purple-900 dark:text-purple-300 md:text-xl max-w-lg mx-auto">
              I build responsive web apps, architect the cloud systems they run on, and provide the technical training and project management.
            </p>
          </div>


            {/* Avatar Container: Removed overflow-hidden so the head can pop out */}
             <div ref={avatarRef} className="group relative mx-auto -mt-16 h-[420px] w-80 flex items-end justify-center cursor-pointer">
            <div className="absolute bottom-0 h-80 w-80 rounded-full bg-gradient-to-r from-yellow-600 from-[15%] to-purple-700 to-65% transition-all duration-500 group-hover:scale-110" />
            <div className="absolute bottom-0 h-80 w-80 overflow-hidden rounded-full z-10">
              <img src="/Anmol_Avatar.png" alt="Avatar Base" className="absolute bottom-0 h-[450px] w-full object-contain transition-all duration-500 origin-bottom scale-[0.7] group-hover:scale-[0.9] group-hover:opacity-0" />
              <img src="/Anmol_Avatar2.png" alt="Avatar 2 Body" className="absolute bottom-0 h-[450px] w-full object-contain transition-all duration-500 opacity-0 origin-bottom scale-[0.7] group-hover:opacity-100 group-hover:scale-[0.9]" />
            </div>
            <div className="absolute bottom-0 h-[500px] w-80 overflow-visible pointer-events-none z-20">
              <img src="/Anmol_Avatar2.png" alt="Avatar 2 Head" className="absolute bottom-0 h-[450px] w-full object-contain transition-all duration-500 opacity-0 origin-bottom scale-[0.7] group-hover:opacity-100 group-hover:scale-[0.9]" style={{ clipPath: 'inset(0% 0% 40% 0%)' }} />
            </div>
          </div>
        </section>

        {/* Services - All 3 Cards Restored */}
        <section id="services" className="py-20">
          <h3 className="text-3xl py-1 mt-6 text-center text-black dark:text-white">Services I Offer</h3>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-purple-400/10 flex-1">
              <Image src={design} width={100} height={100} className="mx-auto" alt="design" />
              <h3 className="text-black dark:text-white text-2xl py-1">Web Designs</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-purple-400/10 flex-1">
              <Image src={code} width={100} height={100} className="mx-auto" alt="code" />
              <h3 className="text-black dark:text-white text-2xl py-1">Cloud Architecture</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-purple-400/10 flex-1">
              <Image src={consulting} width={100} height={100} className="mx-auto" alt="consulting" />
              <h3 className="text-black dark:text-white text-2xl py-1">Technical Training</h3>
            </div>
          </div>
        </section>

          {/* Work Sample Section */}
        <section id="work-sample" className="py-20 w-full relative group">
          <h3 className="text-3xl py-1 text-center text-black dark:text-white mb-8">Work Sample</h3>
          
          {/* 1. Relative Wrapper for Absolute Buttons */}
          <div className="relative w-full overflow-visible">
            
            {/* Left Glassy Button */}
            <button 
              onClick={() => {
                const container = document.getElementById('slider-container');
                container?.scrollBy({ left: -500, behavior: 'smooth' });
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 dark:bg-purple-900/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-500/50"
              aria-label="Scroll Left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-purple-950 dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* The Slider Container */}
            <div 
              id="slider-container"
              className="flex gap-8 py-10 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden px-6 md:px-20"
            >
              {[web1, web2, web3, web4, web5, web6].map((img, index) => (
                <div 
                  key={index} 
                  /* ADJUSTED WIDTHS FOR "PEEKING" EFFECT:
                     Mobile: 85% width (15% of next card shows)
                     Desktop: 45% width (5% of next card shows)
                  */
                  className="min-w-[85%] md:min-w-[45%] snap-center shrink-0 group/card relative"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-2xl border border-purple-500/10">
                    <Image 
                      src={img} 
                      alt={`work-${index}`} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover/card:scale-110" 
                      sizes="(max-width: 768px) 85vw, 45vw"
                    />
                    
                    {/* Isolated "View Project" overlay */}
                    <div className="absolute inset-0 bg-purple-950/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                       <span className="text-white font-bold bg-black/60 px-8 py-3 rounded-full border border-white/20 shadow-2xl transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                         View Project
                       </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Glassy Button */}
            <button 
              onClick={() => {
                const container = document.getElementById('slider-container');
                container?.scrollBy({ left: 500, behavior: 'smooth' });
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 dark:bg-purple-900/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-500/50"
              aria-label="Scroll Right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-purple-950 dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

          </div>
        </section>

        <div className="h-[50vh]" />

        {/* Floating Bottom Dock */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 opacity-100 transition-all duration-500">
          <nav className="flex items-center gap-6 bg-purple-950/38 dark:bg-purple-600/15 backdrop-blur-md shadow-2xl rounded-full px-8 py-3 border border-purple-400/30">
            {[
              { id: "hero", label: "Home" },
              { id: "services", label: "Services" },
              { id: "work-sample", label: "Work Sample" },
            ].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm md:text-base font-medium transition-all duration-300 relative group ${
                  activeSection === section.id
                    ? "text-yellow-500"
                    : "text-white dark:text-white"
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-500 rounded-full" />
                )}
              </a>
            ))}
          </nav>
        </div>
      </main>
    </div>
  );
}