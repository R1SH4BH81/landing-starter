"use client";

import React from "react";

interface HeroHeaderProps {
  className?: string;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ className = "" }) => {
  return (
    <div className={`w-full relative z-20 pt-10 sm:pt-14 px-8 sm:px-14 lg:px-20 max-w-7xl mx-auto flex items-center ${className}`}>
      {/* unfold brand logo */}
      <a href="/" className="inline-flex items-center gap-3.5 select-none group">
        {/* Red / Coral Half-Moon / Crescent Icon */}
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
          <div className="w-8 h-4 sm:w-9 sm:h-4.5 bg-[#ff2a51] rounded-b-full shadow-[0_0_24px_rgba(255,42,81,0.5)] transition-transform duration-300 group-hover:scale-105" />
        </div>
        
        {/* 'unfold' wordmark */}
        <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans lowercase">
          unfold
        </span>
      </a>
    </div>
  );
};
