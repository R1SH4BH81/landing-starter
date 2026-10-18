import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  children,
}) => {
  return (
    <section
      id={id}
      className={`w-full bg-[#0d0f12] text-white selection:bg-[#ff2a51] selection:text-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-20 py-24 sm:py-32">
        {children}
      </div>
    </section>
  );
};
