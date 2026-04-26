"use client";

import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs"
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { useState, useEffect, useRef } from "react"
import Link from "next/link"; 
  
// Assets
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"


// Component
import Terminal from "../components/terminal";

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

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-amber-50 px-10 dark:bg-gray-900 md:px-20 lg:px-40 pt-10 md:pt-16 transition-all min-h-screen">
        
        {/* Navbar */}
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
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer dark:text-white w-5 h-5 sm:w-6 sm:h-6" /></li>
            <li>
              <a href="/Anmol_Mishra_Resume_DevOps_Cloud.pdf" target="_blank" className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 md:px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform text-sm md:text-base">Resume</a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-center py-5">
          
          {/* Main Container: Stacked on mobile, Side-by-Side on Desktop */}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-10 lg:gap-20">
            
            {/* Left/Top Side: Avatar & Titles */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Avatar Pop-out */}
              <div ref={avatarRef} className="group relative h-[420px] w-80 flex items-end justify-center cursor-pointer mb-6">
                <div className="absolute bottom-0 h-80 w-80 rounded-full bg-gradient-to-r from-yellow-600 from-[15%] to-purple-700 to-65% transition-all duration-500 group-hover:scale-110" />
                <div className="absolute bottom-0 h-80 w-80 overflow-hidden rounded-full z-10">
                  <img src="/Anmol_Avatar.png" alt="Avatar Base" className="absolute bottom-0 h-[450px] w-full object-contain transition-all duration-500 origin-bottom scale-[0.7] group-hover:scale-[0.9] group-hover:opacity-0" />
                  <img src="/Anmol_Avatar2.png" alt="Avatar 2 Body" className="absolute bottom-0 h-[450px] w-full object-contain transition-all duration-500 opacity-0 origin-bottom scale-[0.7] group-hover:opacity-100 group-hover:scale-[0.9]" />
                </div>
                <div className="absolute bottom-0 h-[500px] w-80 overflow-visible pointer-events-none z-20">
                  <img src="/Anmol_Avatar2.png" alt="Avatar 2 Head" className="absolute bottom-0 h-[450px] w-full object-contain transition-all duration-500 opacity-0 origin-bottom scale-[0.7] group-hover:opacity-100 group-hover:scale-[0.9]" style={{ clipPath: 'inset(0% 0% 40% 0%)' }} />
                </div>
              </div>

              <div className="w-full">
                <h2 className="text-5xl lg:text-6xl py-2 text-yellow-600 font-semibold">Anmol Mishra</h2>
                <h3 className="text-2xl lg:text-3xl py-2 text-black dark:text-white">Developer & Cloud Architect</h3>
              </div>
            </div>

            {/* Right Side: Terminal */}
            <div className="w-full max-w-xl lg:max-w-2xl px-4 lg:px-0">
              <Terminal />
            </div>

          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <h3 className="text-3xl py-1 mt-6 text-center text-black dark:text-white font-medium">Services I Offer</h3>
          <div className="lg:flex gap-10">
            {/* Web Designs Card */}
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-purple-400/10 flex-1 transition-all duration-300 hover:-translate-y-2 border-t-4 border-yellow-500">
              <Image src={design} width={100} height={100} className="mx-auto" alt="design" />
              <h3 className="text-black dark:text-white text-2xl font-medium pt-8 pb-2">Web Designs</h3>
              <p className="text-gray-800 dark:text-gray-200 py-2">
                Creating elegant, responsive interfaces with React and Tailwind.
              </p>
            </div>

            {/* Cloud Architecture Card */}
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-purple-400/10 flex-1 transition-all duration-300 hover:-translate-y-2 border-t-4 border-yellow-500">
              <Image src={code} width={100} height={100} className="mx-auto" alt="code" />
              <h3 className="text-black dark:text-white text-2xl font-medium pt-8 pb-2">Cloud Architecture</h3>
              <p className="text-gray-800 dark:text-gray-200 py-2">
                Designing scalable, secure AWS infrastructure and CI/CD pipelines.
              </p>
            </div>

            {/* Technical Training Card */}
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-purple-400/10 flex-1 transition-all duration-300 hover:-translate-y-2 border-t-4 border-yellow-500">
              <Image src={consulting} width={100} height={100} className="mx-auto" alt="consulting" />
              <h3 className="text-black dark:text-white text-2xl font-medium pt-8 pb-2">Technical Training</h3>
              <p className="text-gray-800 dark:text-gray-200 py-2">
                Empowering teams through DevOps workshops and management.
              </p>
            </div>
          </div>
        </section>

        {/* Work Sample Slider */}
        <section id="work-sample" className="py-20 w-full relative group">
          <h3 className="text-3xl py-1 text-center text-black dark:text-white mb-8">Work Sample</h3>
          <div className="relative w-full overflow-visible">
            <button 
              onClick={() => document.getElementById('slider-container')?.scrollBy({ left: -500, behavior: 'smooth' })}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 dark:bg-purple-900/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-500/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-purple-950 dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div id="slider-container" className="flex gap-8 py-10 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden px-6 md:px-20">
              {projects.map((project) => (
  <Link 
    href={`/projects/${project.id}`} 
    key={project.id} 
    className="min-w-[85%] md:min-w-[45%] snap-center shrink-0 group/card relative cursor-pointer"
  >
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-2xl border border-purple-500/10">
      
      {/* The Architecture Diagram */}
      <Image 
        src={project.image} 
        alt={project.title} 
        fill 
        className="object-cover transition-all duration-700 group-hover/card:scale-110"
      />

      {/* NEXT LEVEL: The Dark Overlay Reveal */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
        
        <h4 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
          {project.title}
        </h4>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-500 font-bold shadow-[0_0_10px_rgba(234,179,8,0.3)]">
              {t}
            </span>
          ))}
        </div>

        <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover/card:opacity-100 delay-100 transition-opacity">
          Click to view full architecture documentation & CI/CD logs.
        </p>
      </div>
    </div>
  </Link>
))}
            </div>

            <button 
              onClick={() => document.getElementById('slider-container')?.scrollBy({ left: 500, behavior: 'smooth' })}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 dark:bg-purple-900/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-500/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-purple-950 dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </section>

        {/* Floating Bottom Dock */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <nav className="flex items-center gap-6 bg-purple-950/38 dark:bg-purple-600/15 backdrop-blur-md shadow-2xl rounded-full px-8 py-3 border border-purple-400/30">
            {[{ id: "hero", label: "Home" }, { id: "services", label: "Services" }, { id: "work-sample", label: "Work Sample" }].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm md:text-base font-medium transition-all duration-300 relative group ${activeSection === section.id ? "text-yellow-500" : "text-white"}`}
              >
                {section.label}
                {activeSection === section.id && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-500 rounded-full" />}
              </a>
            ))}
          </nav>
        </div>
      </main>
    </div>
  );
}