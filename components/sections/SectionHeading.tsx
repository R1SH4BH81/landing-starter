import React from "react";

interface SectionHeadingProps {
  label: string;
  title: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
}) => {
  return (
    <div className="mb-12 sm:mb-16">
      <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#ff2a51] mb-5 sm:mb-6">
        {label}
      </p>
      <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.04em] leading-[1.02]">
        {title}
      </h2>
    </div>
  );
};
