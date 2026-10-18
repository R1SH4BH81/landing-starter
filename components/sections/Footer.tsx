import React from "react";

const socials = [
  { name: "X", href: "https://x.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0d0f12] text-white selection:bg-[#ff2a51] selection:text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-20 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <a href="/" className="inline-flex items-center gap-3 select-none">
          <span
            className="block w-6 h-3 bg-[#ff2a51] rounded-b-full"
            aria-hidden="true"
          />
          <span className="text-xl font-extrabold tracking-tight lowercase">
            unfold
          </span>
        </a>
        <nav className="flex items-center gap-6 sm:gap-8">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              {social.name}
            </a>
          ))}
        </nav>
        <p className="text-sm text-white/40 tabular-nums">
          &copy; 2026 Unfold Studio
        </p>
      </div>
    </footer>
  );
};
