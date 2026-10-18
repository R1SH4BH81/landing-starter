import React from "react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { faqs } from "./site-data";

export const Faq: React.FC = () => {
  return (
    <Section id="faq">
      <SectionHeading label="FAQ" title="Questions, answered." />
      <div className="border-t border-white/10">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group border-b border-white/10"
          >
            <summary className="flex items-center justify-between gap-6 py-6 sm:py-7 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="text-lg sm:text-xl font-bold tracking-tight">
                {faq.question}
              </span>
              <svg
                className="w-5 h-5 shrink-0 text-[#ff2a51] transition-transform duration-200 group-open:rotate-45"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M10 4v12M4 10h12" strokeLinecap="round" />
              </svg>
            </summary>
            <p className="text-white/60 leading-relaxed pb-7 sm:pb-8 max-w-3xl">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
};
