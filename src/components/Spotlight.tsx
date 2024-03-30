import React from "react";
import { Spotlight } from "../components/ui/Spotlight";
import CounterUppage from '../components/CounterUppage'

export function SpotlightPreview() {
  return (
    <div id="spotlight-section" className="h-[40rem] w-full flex md:items-center md:justify-center bg-black bg-grid-white/[0.02]">
      <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 mt-24 font-poppins">
        <h1 className="text-4xl text-neutral-300 max-w-lg text-center mx-auto mb-10 mt-16 font-bold">
          ABOUT ME
        </h1>
        <p className="text-base text-neutral-300 max-w-lg text-center mx-auto mb-10 mt-16 font-semibold leading-loose tracking-normal font-sans">
        Salut ! Je suis Youness Manyani, un développeur full-stack avec trois années d’expérience. Combinaison de connaissances académiques approfondies et d'expérience pratique
        </p>

        <div className="mb-8 mt-16">
          <CounterUppage/>
        </div>
      </div>
    </div>
  );
}
