import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import { techStackIcons } from "../constants";
import { techStackImgs } from "../constants";

const TechStack = () => {

  // GSAP Scroll Animation
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
          {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card relative overflow-hidden group 
                         xl:rounded-full rounded-2xl h-[280px]
                         flex items-center justify-center
                         transition-all duration-500
                         hover:-translate-y-2 
                         hover:shadow-[0_0_30px_rgba(0,200,255,0.25)]"
            >
              {/* Animated BG */}
              <div
                className="tech-card-animated-bg absolute inset-0 z-0 
                           opacity-70 group-hover:opacity-100 
                           transition-opacity duration-500"
              />

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                
                {/* ICON */}
                <img
                  src={techStackIcon.imgPath}
                  alt={techStackIcon.name}
                  className="w-28 h-28 object-contain mb-4 
                             transition-transform duration-500
                             group-hover:scale-110"
                />

                {/* TEXT */}
                <p
                  className="text-white text-sm font-semibold tracking-wide leading-tight 
                             transition-all duration-500
                             group-hover:text-cyan-300"
                >
                  {techStackIcon.name}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
