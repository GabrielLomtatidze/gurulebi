"use client";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
}

function VideoCard({ title, description, thumbnail, videoId }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-white/80 rounded-2xl overflow-hidden shadow-lg border border-[#A1887F]/20 hover:shadow-2xl transition-all duration-500">
      <div className="relative aspect-video">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="w-full h-full relative group"
          >
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#1B1210]/30 group-hover:bg-[#1B1210]/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#C49A6C] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Play className="w-7 h-7 md:w-9 md:h-9 text-[#1B1210] ml-1" fill="#1B1210" />
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-[#2C1810] mb-2">
          {title}
        </h3>
        <p className="text-[#5D4037] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function VideoSection() {
  const { t } = useTranslation();

  return (
    <section id="video" className="py-20 md:py-28 bg-[#1B1210] relative overflow-hidden">
      {/* Decorative wood grain pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(196,154,108,0.3) 40px, rgba(196,154,108,0.3) 41px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#C49A6C]" />
            <span className="text-[#C49A6C] text-sm tracking-[0.2em] uppercase">
              ✦
            </span>
            <div className="w-12 h-px bg-[#C49A6C]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#F5F0EB] mb-4">
            {t.video.title}
          </h2>
          <p className="text-lg text-[#A1887F] max-w-2xl mx-auto">
            {t.video.subtitle}
          </p>
        </div>

        {/* Video Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <VideoCard
            title={t.video.tourTitle}
            description={t.video.tourDesc}
            thumbnail="https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/a45b467a-7f0f-4f5e-ac76-193f06405a4a.png"
            videoId="dQw4w9WgXcQ"
          />
          <VideoCard
            title={t.video.regionTitle}
            description={t.video.regionDesc}
            thumbnail="https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/5b9bef3c-4a3d-4f43-a2cd-0f9add4c38c8.png"
            videoId="dQw4w9WgXcQ"
          />
        </div>

        <p className="text-center text-[#5D4037] text-sm mt-8 italic">
          * Replace YouTube video IDs with your actual hostel tour videos
        </p>
      </div>
    </section>
  );
}