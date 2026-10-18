import { Hero } from "@/components/hero";
import {
  Services,
  Work,
  Process,
  Testimonial,
  Engagement,
  Faq,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0f12]">
      {/* Modular Hero Section */}
      <Hero />

      {/* Page Sections */}
      <Services />
      <Work />
      <Process />
      <Testimonial />
      <Engagement />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
