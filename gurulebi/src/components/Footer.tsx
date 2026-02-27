"use client";
import { useTranslation } from "@/lib/i18n";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1B1210] border-t-2 border-[#C49A6C]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#C49A6C] mb-4">
              ✦ GURIA
            </h3>
            <p className="text-[#A1887F] leading-relaxed text-sm">
              {t.about.p1.slice(0, 120)}...
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold text-[#F5F0EB] mb-4">
              {t.contact.title}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#A1887F]">
                <Phone className="w-4 h-4 text-[#C49A6C]" />
                <span className="text-sm">+995 599 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-[#A1887F]">
                <Mail className="w-4 h-4 text-[#C49A6C]" />
                <span className="text-sm">info@guriahostel.ge</span>
              </div>
              <div className="flex items-center gap-3 text-[#A1887F]">
                <MapPin className="w-4 h-4 text-[#C49A6C]" />
                <span className="text-sm">{t.contact.addressValue}</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-serif font-bold text-[#F5F0EB] mb-4">
              {t.contact.followUs}
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3E2723] flex items-center justify-center text-[#C49A6C] hover:bg-[#C49A6C] hover:text-[#1B1210] transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#3E2723] flex items-center justify-center text-[#C49A6C] hover:bg-[#C49A6C] hover:text-[#1B1210] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#3E2723] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#5D4037] text-sm">
            © {new Date().getFullYear()} Gurulebi Family Hostel. {t.footer.rights}.
          </p>
          <p className="text-[#5D4037] text-sm">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}