import React from "react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { projects } from "./site-data";

export const Work: React.FC = () => {
  return (
    <Section id="work">
      <SectionHeading label="Selected Work" title="Recent projects." />
      <ul className="border-t border-white/10">
        {projects.map((project) => (
          <li key={project.title} className="border-b border-white/10">
            <a
              href="#contact"
              className="group flex items-baseline justify-between gap-6 py-7 sm:py-9"
            >
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight transition-colors duration-200 group-hover:text-[#ff2a51]">
                {project.title}
              </h3>
              <p className="shrink-0 text-sm sm:text-base text-white/50 tabular-nums">
                {project.category} <span className="text-white/25 mx-1">/</span>{" "}
                {project.year}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};
