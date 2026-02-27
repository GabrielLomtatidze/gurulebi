"use client";
import { useState, useEffect } from "react";
import { useTranslation, languageFlags, languageLabels, type Language } from "@/lib/i18n";
import { Menu, X, ChevronDown } from "lucide-react";

const navSections = ["home", "about", "rooms", "gallery", "video", "services", "contact"] as const;

export default function Navbar() {
  const { t, language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1B1210]/95 backdrop-blur-md shadow-2xl"
          : "bg-gradient-to-b from-[#1B1210]/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 group"
          >
            <span className="text-[#C49A6C] text-2xl md:text-3xl font-serif font-bold tracking-wide group-hover:text-[#d4aa7c] transition-colors">
              ✦
            </span>
            <span className="text-[#F5F0EB] text-lg md:text-xl font-serif font-bold tracking-wider group-hover:text-[#C49A6C] transition-colors">
              GURULEBI
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navSections.map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className="px-3 py-2 text-sm text-[#D7CCC8] hover:text-[#C49A6C] transition-colors font-medium tracking-wide uppercase"
              >
                {t.nav[section]}
              </button>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#3E2723]/60 border border-[#5D4037]/50 text-[#F5F0EB] hover:bg-[#3E2723] transition-all text-sm"
              >
                <span>{languageFlags[language]}</span>
                <span className="hidden sm:inline">{languageLabels[language]}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-[#2C1810] border border-[#5D4037] rounded-lg shadow-2xl overflow-hidden">
                  {(["en", "ka", "ru"] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-[#3E2723] transition-colors ${
                        language === lang ? "text-[#C49A6C] bg-[#3E2723]/50" : "text-[#D7CCC8]"
                      }`}
                    >
                      <span className="text-lg">{languageFlags[lang]}</span>
                      <span>{languageLabels[lang]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#F5F0EB] p-2 hover:text-[#C49A6C] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1B1210]/98 backdrop-blur-md border-t border-[#5D4037]/30 px-4 py-4 space-y-1">
          {navSections.map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="block w-full text-left px-4 py-3 text-[#D7CCC8] hover:text-[#C49A6C] hover:bg-[#3E2723]/40 rounded-lg transition-all text-sm uppercase tracking-wide"
            >
              {t.nav[section]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}