import React from "react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { services } from "./site-data";

export const Services: React.FC = () => {
  return (
    <Section id="services">
      <SectionHeading label="Services" title="What we do." />
      <ul className="border-t border-white/10">
        {services.map((service) => (
          <li
            key={service.title}
            className="border-b border-white/10 py-10 sm:py-14 grid gap-3 sm:grid-cols-[72px_1fr] sm:gap-8"
          >
            <span className="text-sm font-bold text-white/40 tabular-nums">
              {service.index}
            </span>
            <div>
              <h3 className="text-3xl sm:text-5xl font-black tracking-[-0.04em] leading-[1.05] mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};
