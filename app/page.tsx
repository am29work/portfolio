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
import { useState } from "react"


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* The main wrapper handles the background switch for the whole page */}
      <main className="bg-amber-50 px-10 dark:bg-gray-900 md:px-20 lg:px-40 transition-colors duration-300 min-h-screen">
        <section>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-buttons text-black dark:text-white">Anmol's Portfolio</h1>
            <ul className="flex items-center">
              <li>
                {/* Added onClick here so the toggle actually works! */}
                <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className="cursor-pointer text-2xl text-black dark:text-white" 
                />
              </li>
              <li>
                <a href="Anmol_Mishra_Resume_DevOps_Cloud.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => {
                    //1. Create a temporary, invisible HTML link
                    const downloadLink = document.createElement("a");
                    downloadLink.href = "Anmol_Mishra_Resume_DevOps_Cloud.pdf";

                    //2. The download attribute forces the browser to save the file
                    downloadLink.download = "Anmol_Mishra_Resume_DevOps_Cloud.pdf";

                    //3. Append to the page, trigger a click, and immidiately clean it up
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);            
                  }}
                  className="bg-linear-to-r from-yellow-500 to-yellow-700 text-white px-4 py-2 rounded-xl ml-5">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center mt-1 mb-2">
            <h2 className="text-5xl py-2 text-yellow-600 font-semibold">Anmol Mishra</h2>
            <h3 className="text-2xl py-2 text-black dark:text-white">Developer & Cloud Architect</h3>
            <p className="text-md py-5 leading-8 text-purple-900 dark:text-purple-300 md:text-xl max-w-lg mx-auto">
              I build responsive web apps, architect the cloud systems they run on, and provide the technical training and project management to keep your product fast and scalable.
            </p>
          </div>

          {/* Avatar Section */}
          <div className="group relative mx-auto -mt-16 h-[420px] w-80 flex items-end justify-center cursor-pointer">
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

        {/* Services Section */}
        <section>
          <div>
            <h3 className="text-3xl py-1 mt-6 text-center text-black dark:text-white">Services I Offer</h3>
            <p className="text-md py-5 text-center leading-8 text-purple-900 dark:text-purple-300">
              Building seamless web experiences backed by robust cloud architecture and expert project guidance.
            </p>
          </div>
          <div className="lg:flex gap-10">
            {/* Service Card 1 */}
            <div className="text-center shadow-lg shadow-amber-800/30 p-10 rounded-xl my-10 dark:bg-purple-400/10">
              <Image src={design} width={100} height={100} className="mx-auto" alt="design icon" />
              <h3 className="text-black dark:text-white text-2xl py-1 mt-1">Web Designs</h3>
              <p className="text-md py-2 leading-8 text-purple-900 dark:text-purple-300">Creating brands that captivate your audience.</p>
              <h4 className="text-yellow-600 py-4">Design tools I use</h4>
              <p className="text-purple-900 dark:text-purple-200 py-1">Figma, Photoshop, Illustrator</p>
            </div>

            <div className="text-center shadow-lg shadow-amber-800/20 p-10 rounded-xl my-10 dark:bg-purple-400/10">
              <Image src={code} width={100} height={100} className="mx-auto" alt="design icon" />
              <h3 className="text-black dark:text-white text-2xl py-1 mt-1">Web Designs</h3>
              <p className="text-md py-2 leading-8 text-purple-900 dark:text-purple-300">Creating brands that captivate your audience.</p>
              <h4 className="text-yellow-600 py-4">Design tools I use</h4>
              <p className="text-purple-900 dark:text-purple-200 py-1">Figma, Photoshop, Illustrator</p>
            </div>


            <div className="text-center shadow-lg shadow-amber-800/20 p-10 rounded-xl my-10 dark:bg-purple-400/10">
              <Image src={consulting} width={100} height={100} className="mx-auto" alt="design icon" />
              <h3 className="text-black dark:text-white text-2xl py-1 mt-1">Web Designs</h3>
              <p className="text-md py-2 leading-8 text-purple-900 dark:text-purple-300">Creating brands that captivate your audience.</p>
              <h4 className="text-yellow-600 py-4">Design tools I use</h4>
              <p className="text-purple-900 dark:text-purple-200 py-1">Figma, Photoshop, Illustrator</p>
            </div>
            {/* Add more cards here following the same pattern */}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-10">
          <h3 className="text-3xl py-1 text-center text-black dark:text-white">Portfolio</h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row flex-wrap">
            {[web1, web2, web3, web4, web5, web6].map((img, index) => (
              <div key={index} className="basis-1/3 flex-1">
                <Image src={img} alt={`work-${index}`} className="rounded-lg object-cover" width={100} height={100} layout="responsive" />
              </div>
            ))}
          </div>
        </section>

        {/* Footer Icons */}
        <div className="text-5xl flex justify-center gap-16 py-10 text-yellow-600">
          <a 
            href="https://www.linkedin.com/in/anmolxmishra"
            target="_blank"
            rel = "noopener noreferreer"
            className="hover:text-yellow-700 transition-colors cursor-pointer"
          >
            <AiFillLinkedin />
          </a>
          <a
             href="https://www.github.com/am29work"
            target="_blank"
            rel = "noopener noreferreer"
            className="hover:text-yellow-700 transition-colors cursor-pointer"
            >
            <AiFillGithub />
          </a>
          <a 
            href="mailto:anmolmishra2906@gmail.com"
            target="_blank"
            rel = "noopener noreferreer"
            className="hover:text-yellow-700 transition-colors cursor-pointer"
          >
            <AiFillMail />
          </a>
        </div>
      </main>
    </div>
  );
}