import React from "react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { steps } from "./site-data";

export const Process: React.FC = () => {
  return (
    <Section id="process">
      <SectionHeading label="Process" title="How we work." />
      <ol className="grid gap-12 sm:gap-8 sm:grid-cols-3">
        {steps.map((step) => (
          <li key={step.title} className="border-t border-white/10 pt-8">
            <span className="block text-sm font-bold text-[#ff2a51] tabular-nums mb-4">
              {step.index}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-[-0.04em] mb-3">
              {step.title}
            </h3>
            <p className="text-white/60 leading-relaxed">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
};
