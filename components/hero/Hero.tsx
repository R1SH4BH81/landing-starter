"use client";

import React from "react";
import { HeroProps } from "./types";
import { DEFAULT_BG_IMAGE } from "./hero-data";
import { HeroHeader } from "./HeroHeader";
import { HeroContent } from "./HeroContent";

export const Hero: React.FC<HeroProps> = ({
  backgroundImageUrl = DEFAULT_BG_IMAGE,
  titleLine1 = "A Design Partner",
  titleLine2 = "You Can Trust.",
  className = "",
}) => {
  return (
    <section
      className={`relative w-full min-h-screen bg-[#0d0f12] text-white overflow-hidden flex flex-col justify-between selection:bg-[#ff2a51] selection:text-white ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] bg-no-repeat"
          style={{
            backgroundImage: `url("${backgroundImageUrl}")`,
          }}
        />
        {/* Subtle vignette along bottom and edges for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/80 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Logo Only (No Navbar) */}
      <HeroHeader />

      {/* Hero Headline */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-14 lg:px-20 py-12 sm:py-20 flex-1 flex flex-col justify-start pt-12 sm:pt-20">
        <HeroContent titleLine1={titleLine1} titleLine2={titleLine2} />
      </div>

      {/* Spacing footer */}
      <div className="relative z-10 h-12 pointer-events-none" />
    </section>
  );
};
