"use client";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import { Users, MapPin, Sparkles, UtensilsCrossed, Wine, Mountain, Church, Waves, Palette, Phone, Mail, MapPinIcon, Send, } from "lucide-react";
import img from "../../../public/image_1.jpg"


function AboutSection() {
    const { t } = useTranslation();

    const features = [
        { icon: Users, title: t.about.familyTitle, desc: t.about.familyDesc },
        { icon: MapPin, title: t.about.locationTitle, desc: t.about.locationDesc },
        { icon: Sparkles, title: t.about.experienceTitle, desc: t.about.experienceDesc },
    ];

    return (
        <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C49A6C]/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C49A6C]/20">
                            <img
                                src="https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/a2fbac8a-a009-4ba5-a3cc-3c5e76b77254.png"
                                alt="Hostel exterior"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#C49A6C]/30 rounded-2xl -z-10" />
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-px bg-[#C49A6C]" />
                            <span className="text-[#C49A6C] text-sm tracking-[0.2em] uppercase font-medium">
                                ✦
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2C1810] mb-6">
                            {t.about.title}
                        </h2>
                        <p className="text-[#5D4037] leading-relaxed mb-4">{t.about.p1}</p>
                        <p className="text-[#5D4037] leading-relaxed mb-4">{t.about.p2}</p>
                        <p className="text-[#5D4037] leading-relaxed font-medium italic">
                            {t.about.p3}
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-16">
                    {features.map((feat, i) => (
                        <div
                            key={i}
                            className="group p-6 bg-[#EFEBE9] rounded-xl border border-[#A1887F]/20 hover:border-[#C49A6C]/50 hover:shadow-xl transition-all duration-500 text-center"
                        >
                            <div className="w-14 h-14 mx-auto mb-4 bg-[#3E2723] rounded-full flex items-center justify-center group-hover:bg-[#C49A6C] transition-colors duration-300">
                                <feat.icon className="w-6 h-6 text-[#C49A6C] group-hover:text-[#1B1210] transition-colors" />
                            </div>
                            <h3 className="text-lg font-serif font-bold text-[#2C1810] mb-2">
                                {feat.title}
                            </h3>
                            <p className="text-sm text-[#5D4037] leading-relaxed">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function RoomsSection() {
    const { t } = useTranslation();

    const rooms = [
        {
            title: t.rooms.room1Title,
            desc: t.rooms.room1Desc,
            img: "https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/b7f82663-c174-41dc-8187-51aa08218a1c.png",
        },
        {
            title: t.rooms.room2Title,
            desc: t.rooms.room2Desc,
            img: "https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/a45b467a-7f0f-4f5e-ac76-193f06405a4a.png",
        },
        {
            title: t.rooms.room3Title,
            desc: t.rooms.room3Desc,
            img: "https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/a2fbac8a-a009-4ba5-a3cc-3c5e76b77254.png",
        },
        {
            title: t.rooms.room4Title,
            desc: t.rooms.room4Desc,
            img: "https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/5b9bef3c-4a3d-4f43-a2cd-0f9add4c38c8.png",
        },
    ];

    return (
        <section id="rooms" className="py-20 md:py-28 bg-[#EFEBE9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-px bg-[#C49A6C]" />
                        <span className="text-[#C49A6C] text-sm tracking-[0.2em] uppercase">
                            ✦
                        </span>
                        <div className="w-12 h-px bg-[#C49A6C]" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2C1810] mb-4">
                        {t.rooms.title}
                    </h2>
                    <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
                        {t.rooms.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {rooms.map((room, i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[#A1887F]/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="relative overflow-hidden aspect-[16/9]">
                                <img
                                    src={room.img}
                                    alt={room.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1210]/50 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-xl font-serif font-bold text-[#F5F0EB] drop-shadow-lg">
                                        {room.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-[#5D4037] text-sm leading-relaxed">
                                    {room.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Services Section ─── */
function ServicesSection() {
    const { t } = useTranslation();

    const services = [
        { icon: UtensilsCrossed, title: t.services.cuisine, desc: t.services.cuisineDesc },
        { icon: Wine, title: t.services.wine, desc: t.services.wineDesc },
        { icon: Mountain, title: t.services.hiking, desc: t.services.hikingDesc },
        { icon: Church, title: t.services.culture, desc: t.services.cultureDesc },
        { icon: Waves, title: t.services.beach, desc: t.services.beachDesc },
        { icon: Palette, title: t.services.crafts, desc: t.services.craftsDesc },
    ];

    return (
        <section id="services" className="py-20 md:py-28 bg-white relative">
            {/* Background image overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("https://mgx-backend-cdn.metadl.com/generate/images/992121/2026-02-26/db8b034c-f9d8-494c-a8ce-bfb286680452.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

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
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2C1810] mb-4">
                        {t.services.title}
                    </h2>
                    <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
                        {t.services.subtitle}
                    </p>
                </div>

                {/* Service Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            className="group p-6 bg-[#EFEBE9]/80 backdrop-blur-sm rounded-xl border border-[#A1887F]/20 hover:border-[#C49A6C]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                        >
                            <div className="w-12 h-12 mb-4 bg-[#3E2723] rounded-lg flex items-center justify-center group-hover:bg-[#C49A6C] transition-colors duration-300">
                                <svc.icon className="w-6 h-6 text-[#C49A6C] group-hover:text-[#1B1210] transition-colors" />
                            </div>
                            <h3 className="text-lg font-serif font-bold text-[#2C1810] mb-2">
                                {svc.title}
                            </h3>
                            <p className="text-sm text-[#5D4037] leading-relaxed">{svc.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContactSection() {
    const { t } = useTranslation();
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section id="contact" className="py-20 md:py-28 bg-[#EFEBE9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-px bg-[#C49A6C]" />
                        <span className="text-[#C49A6C] text-sm tracking-[0.2em] uppercase">
                            ✦
                        </span>
                        <div className="w-12 h-px bg-[#C49A6C]" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2C1810] mb-4">
                        {t.contact.title}
                    </h2>
                    <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
                        {t.contact.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#A1887F]/20">
                        {sent && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                                ✓ {t.contact.sent}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-[#2C1810] mb-1.5">
                                    {t.contact.name}
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-[#A1887F]/30 bg-[#EFEBE9]/50 text-[#2C1810] focus:outline-none focus:border-[#C49A6C] focus:ring-1 focus:ring-[#C49A6C] transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#2C1810] mb-1.5">
                                    {t.contact.email}
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-[#A1887F]/30 bg-[#EFEBE9]/50 text-[#2C1810] focus:outline-none focus:border-[#C49A6C] focus:ring-1 focus:ring-[#C49A6C] transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#2C1810] mb-1.5">
                                    {t.contact.message}
                                </label>
                                <textarea
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-[#A1887F]/30 bg-[#EFEBE9]/50 text-[#2C1810] focus:outline-none focus:border-[#C49A6C] focus:ring-1 focus:ring-[#C49A6C] transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3.5 bg-[#C49A6C] text-[#1B1210] font-semibold rounded-lg hover:bg-[#d4aa7c] transition-all duration-300 flex items-center justify-center gap-2 tracking-wide shadow-md hover:shadow-lg"
                            >
                                <Send className="w-4 h-4" />
                                {t.contact.send}
                            </button>
                        </form>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#A1887F]/20 aspect-[4/3]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21368.906352277594!2d42.05442973842111!3d41.92807088710275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405d0d6f030778bd%3A0xfeecde4a743c1958!2zR3Vlc3QgaG91c2UgIkd1cnVsZWJpIiAv4YOh4YOQ4YOd4YOv4YOQ4YOu4YOdIOGDoeGDkOGDoeGDouGDo-GDm-GDoOGDnSAi4YOS4YOj4YOg4YOj4YOa4YOU4YOR4YOYIg!5e1!3m2!1sen!2sge!4v1772619356122!5m2!1sen!2sge"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location"
                            />
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#A1887F]/20">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#3E2723] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-4 h-4 text-[#C49A6C]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#A1887F] uppercase tracking-wide">
                                            {t.contact.phone}
                                        </p>
                                        <p className="text-[#2C1810] font-medium">+995 575 752 021</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#3E2723] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-4 h-4 text-[#C49A6C]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#A1887F] uppercase tracking-wide">
                                            {t.contact.email}
                                        </p>
                                        <p className="text-[#2C1810] font-medium">gurulebi4@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#3E2723] rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPinIcon className="w-4 h-4 text-[#C49A6C]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#A1887F] uppercase tracking-wide">
                                            {t.contact.address}
                                        </p>
                                        <p className="text-[#2C1810] font-medium">
                                            {t.contact.addressValue}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Main Page ─── */
export default function Index() {
    return (
        <div className="min-h-screen bg-[#EFEBE9]">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <RoomsSection />
            <PhotoGallery />
            <VideoSection />
            <ServicesSection />
            <ContactSection />
            <Footer />
        </div>
    );
}