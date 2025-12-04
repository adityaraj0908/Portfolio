import React, { useState } from 'react';
import { words } from '../constants/index.js';
import Button from '../components/Button.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx';

const Hero = () => {
  const [spread, setSpread] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut',
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT TEXT SIDE */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Turning
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Impactful</h1>
              <h1>and Scalable Products</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Aditya, a developer based in Bengaluru, with a passion for code.
            </p>

            {/* OPTIONAL BUTTON */}
            {/*
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
            */}
          </div>
        </header>

         {/* <figure>
                <div className='hero-3d-layout'>
                    <HeroExperience/>
                </div>               
            </figure>  */}

        {/* ✅ RIGHT IMAGE STACK (REPLACES 3D MODEL) */}
       <figure className="relative flex items-center justify-center w-full overflow-visible">
  <div
    onClick={() => setSpread(!spread)}
    className="relative w-[240px] h-[340px] cursor-pointer select-none"
  >
    {/* CARD 1 - LEFT */}
    <img
      src="/images/card1.jpeg"
      alt="card1"
      className={`absolute top-0 left-0 w-full h-full object-cover rounded-3xl transition-all duration-500 ease-out
        ${spread ? "-translate-x-44 rotate-[-14deg]" : "rotate-[-6deg]"}
      `}
      style={{ zIndex: 1, imageRendering: "auto" }}
      draggable={false}
    />

    {/* CARD 2 - CENTER */}
    <img
      src="/images/card2.jpeg"
      alt="card2"
      className={`absolute top-0 left-0 w-full h-full object-cover rounded-3xl transition-all duration-500 ease-out
        ${spread ? "translate-y-[-20px] scale-110" : "rotate-[0deg]"}
      `}
      style={{ zIndex: 3, imageRendering: "auto" }}
      draggable={false}
    />

    {/* CARD 3 - RIGHT */}
    <img
      src="/images/card3.jpeg"
      alt="card3"
      className={`absolute top-0 left-0 w-full h-full object-cover rounded-3xl transition-all duration-500 ease-out
        ${spread ? "translate-x-44 rotate-[14deg]" : "rotate-[6deg]"}
      `}
      style={{ zIndex: 2, imageRendering: "auto" }}
      draggable={false}
    />
  </div>
</figure>

      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
