"use client";
import React from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Let's",
      className: "text-white "
    },
    {
      text: "Work",
      className: "text-white dark:text-blue-500 "
    },
    {
      text: "Together.",
      className: "text-[#EEC33F] dark:text-blue-500 ",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] bg-black " id="contact">
  <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
    Le chemin vers un travail exceptionnel commence ici.
  </p>
  <TypewriterEffectSmooth words={words}/>
  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
    <a href="mailto:younessmanyani10@gmail.com" className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm flex items-center justify-center">
      Email me
    </a>
  </div>
</div>

  );
}
