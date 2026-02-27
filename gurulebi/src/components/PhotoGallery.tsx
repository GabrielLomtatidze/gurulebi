"use client";
import { useState, useCallback } from "react";
import { useTranslation } from "@/lib/i18n";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  {
    src: "https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/a2fbac8a-a009-4ba5-a3cc-3c5e76b77254.png",
    category: "rooms",
    alt: "Hostel exterior",
  },
  {
    src: "https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/b7f82663-c174-41dc-8187-51aa08218a1c.png",
    category: "rooms",
    alt: "Room interior",
  },
  {
    src: "https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/a45b467a-7f0f-4f5e-ac76-193f06405a4a.png",
    category: "rooms",
    alt: "Garden terrace",
  },
  {
    src: "https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/5b9bef3c-4a3d-4f43-a2cd-0f9add4c38c8.png",
    category: "nature",
    alt: "Guria landscape",
  },
  {
    src: "https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/0419c93f-3b74-44d8-9383-d6271f42d51b.png",
    category: "activities",
    alt: "Hiking in nature",
  },
  {
    src: "https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/db8b034c-f9d8-494c-a8ce-bfb286680452.png",
    category: "food",
    alt: "Georgian cuisine",
  },
];

type Category = "all" | "rooms" | "nature" | "food" | "activities";

export default function PhotoGallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: t.gallery.all },
    { key: "rooms", label: t.gallery.rooms },
    { key: "nature", label: t.gallery.nature },
    { key: "food", label: t.gallery.food },
    { key: "activities", label: t.gallery.activities },
  ];

  const filteredImages =
    activeCategory === "all"
      ? IMAGES
      : IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
      );
    }
  }, [lightboxIndex, filteredImages.length]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#EFEBE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#C49A6C]" />
            <span className="text-[#C49A6C] text-sm tracking-[0.2em] uppercase">
              ✦
            </span>
            <div className="w-12 h-px bg-[#C49A6C]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2C1810] mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat.key
                  ? "bg-[#3E2723] text-[#F5F0EB] border-[#3E2723] shadow-lg"
                  : "bg-white/60 text-[#5D4037] border-[#A1887F]/30 hover:bg-[#3E2723]/10 hover:border-[#3E2723]/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredImages.map((img, index) => (
            <button
              key={`${img.src}-${index}`}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-[#A1887F]/20 hover:border-[#C49A6C]/50"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1210]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#F5F0EB] text-sm font-medium">{img.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[#1B1210]/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 text-[#F5F0EB] hover:text-[#C49A6C] transition-colors z-10 bg-[#1B1210]/50 rounded-full p-2"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 md:left-8 text-[#F5F0EB] hover:text-[#C49A6C] transition-colors z-10 bg-[#1B1210]/50 rounded-full p-2"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 md:right-8 text-[#F5F0EB] hover:text-[#C49A6C] transition-colors z-10 bg-[#1B1210]/50 rounded-full p-2"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-xl overflow-hidden border-4 border-[#C49A6C]/30 shadow-2xl">
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain bg-[#1B1210]"
              />
            </div>
            <p className="text-center text-[#D7CCC8] mt-4 text-sm">
              {lightboxIndex + 1} / {filteredImages.length} —{" "}
              {filteredImages[lightboxIndex].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}