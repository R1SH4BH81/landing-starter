import React from "react";
import { Section } from "./Section";
import { contactEmail } from "./site-data";

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="border-t border-white/10">
      <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#ff2a51] mb-5 sm:mb-6">
        Contact
      </p>
      <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.98] mb-10 sm:mb-14 max-w-5xl">
        Have something to build?
      </h2>
      <a
        href={`mailto:${contactEmail}`}
        className="inline-block text-xl sm:text-3xl font-bold tracking-tight underline decoration-[#ff2a51] decoration-2 underline-offset-8 hover:text-[#ff2a51] transition-colors duration-200"
      >
        {contactEmail}
      </a>
      <p className="text-white/50 mt-6 max-w-xl leading-relaxed">
        Tell us what you&apos;re making and where it needs to go. We reply to
        every serious inquiry within two business days.
      </p>
    </Section>
  );
};
