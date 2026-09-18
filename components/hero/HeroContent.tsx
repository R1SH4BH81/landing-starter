"use client";

import React from "react";

interface HeroContentProps {
  titleLine1?: string;
  titleLine2?: string;
  className?: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  titleLine1 = "A Design Partner",
  titleLine2 = "You Can Trust.",
  className = "",
}) => {
  return (
    <div className={`relative z-20 flex flex-col items-start select-none ${className}`}>
      {/* Main Display Headline matching reference */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-[-0.04em] text-white leading-[0.98] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] font-sans">
        <span className="block">{titleLine1}</span>
        <span className="block">{titleLine2}</span>
      </h1>
    </div>
  );
};
