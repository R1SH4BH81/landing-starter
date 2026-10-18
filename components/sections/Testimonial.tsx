import React from "react";
import { Section } from "./Section";
import { testimonial } from "./site-data";

export const Testimonial: React.FC = () => {
  return (
    <Section>
      <figure className="max-w-4xl">
        <svg
          className="w-10 h-10 mb-8 text-[#ff2a51]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 8c-3 1-5 3.5-5 7v1h5v-6H7.5C7.8 9 8.8 8.4 10 8.2V8zm9 0c-3 1-5 3.5-5 7v1h5v-6h-2.5c.3-1 1.3-1.6 2.5-1.8V8z" />
        </svg>
        <blockquote className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-[1.25] mb-8">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="text-white/50 text-base sm:text-lg">
          <span className="text-white font-semibold">{testimonial.name}</span>
          {" — "}
          {testimonial.role}
        </figcaption>
      </figure>
    </Section>
  );
};
