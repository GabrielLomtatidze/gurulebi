"use client";
import { useTranslation } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      {/* <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/a2fbac8a-a009-4ba5-a3cc-3c5e76b77254.png"
        >
            <source
              src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1210]/60 via-[#1B1210]/40 to-[#1B1210]/80" />
      </div> */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/image_1.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1210]/60 via-[#1B1210]/40 to-[#1B1210]/80" />
      </div>

      {/* Wood texture border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#3E2723] via-[#C49A6C] to-[#3E2723]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Decorative element */}
        <div className="flex items-center gap-4 mb-6 animate-fade-in">
          <div className="w-16 h-px bg-[#C49A6C]" />
          <span className="text-[#C49A6C] text-sm tracking-[0.3em] uppercase font-medium">
            {t.hero.welcome}
          </span>
          <div className="w-16 h-px bg-[#C49A6C]" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#F5F0EB] mb-6 tracking-wide leading-tight animate-fade-in-up">
          {t.hero.title}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#D7CCC8] max-w-2xl mb-10 font-light leading-relaxed animate-fade-in-up-delay">
          {t.hero.subtitle}
        </p>

        <button
          onClick={scrollToAbout}
          className="group px-8 py-4 bg-[#C49A6C] text-[#1B1210] font-semibold rounded-lg hover:bg-[#d4aa7c] transition-all duration-300 text-lg tracking-wide shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in-up-delay-2"
        >
          {t.hero.cta}
        </button>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 animate-bounce text-[#C49A6C] hover:text-[#d4aa7c] transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}