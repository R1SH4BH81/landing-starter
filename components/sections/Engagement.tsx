import React from "react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { engagementModels } from "./site-data";

export const Engagement: React.FC = () => {
  return (
    <Section id="engagement">
      <SectionHeading label="Engagement" title="Ways to work together." />
      <div className="grid gap-px bg-white/10 border border-white/10 sm:grid-cols-3">
        {engagementModels.map((model) => (
          <div key={model.name} className="bg-[#0d0f12] p-8 sm:p-10">
            <div className="flex items-baseline justify-between gap-4 mb-5">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                {model.name}
              </h3>
              <span className="shrink-0 text-sm text-white/50 tabular-nums">
                {model.price}
              </span>
            </div>
            <p className="text-white/60 leading-relaxed mb-8">
              {model.description}
            </p>
            <ul className="space-y-3">
              {model.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-white/80">
                  <span
                    className="w-1.5 h-1.5 shrink-0 bg-[#ff2a51]"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
