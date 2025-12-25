"use client"; // This component needs to be a client component to use useState/useEffect

import Image from "next/image";
import { Star } from "lucide-react";
import DecorativeBalloon from "./decorative-balloon"; // Import decorative components
import DecorativeConfetti from "./decorative-confetti";
import DecorativeRibbon from "./decorative-ribbon";
import DecorativeCard from "./decorative-card";
import DecorativeFlower from "./decorative-flower";
import { useState, useEffect } from "react"; // Import useState and useEffect

const mediaPartners = [
  { src: "/images/md1.jpeg", alt: "Media Partner 1" },
  { src: "/images/md2.jpeg", alt: "Media Partner 2" },
  { src: "/images/md3.jpeg", alt: "Media Partner 3" },
  { src: "/images/md4.jpeg", alt: "Media Partner 4" },
  { src: "/images/md5.jpeg", alt: "Media Partner 5" },
  { src: "/images/md6.jpeg", alt: "Media Partner 6" },
  { src: "/images/md7.jpeg", alt: "Media Partner 7" },
  { src: "/images/md8.jpeg", alt: "Media Partner 8" },
  { src: "/images/md9.jpeg", alt: "Media Partner 9" },
  { src: "/images/md10.jpeg", alt: "Media Partner 10" },
  { src: "/images/md11.jpeg", alt: "Media Partner 11" },
  { src: "/images/md12.jpeg", alt: "Media Partner 12" },
  { src: "/images/md13.jpeg", alt: "Media Partner 13" },
  { src: "/images/md14.jpeg", alt: "Media Partner 14" },
  { src: "/images/md15.jpeg", alt: "Media Partner 15" },
  { src: "/images/md16.jpeg", alt: "Media Partner 16" },
  { src: "/images/sponsor1.jpg", alt: "Sponsor 1" },
  { src: "/images/sponsor2.jpg", alt: "Sponsor 2" },
  { src: "/images/sponsor3.jpg", alt: "Sponsor 3" },
];

export default function MediaPartnerSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total width needed for marquee to ensure seamless loop
  // Assuming each logo is approx 200px wide including margin (w-[160px] + mx-4*2 = 160+32 = 192px, let's use 200px as a safe average)
  const totalMarqueeWidth = mediaPartners.length * 2 * 200; // Duplicate content, so multiply by 2

  return (
    <section id="media-partner" className="py-20 bg-cover bg-center bg-no-reapeat" style={{ backgroundImage: "url('/images/transisitanah2.png')" }}>
      {/* Background decorative elements (Balloons, Confetti, Ribbons, Cards, Flowers) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Balloons */}
        <DecorativeBalloon className="top-10 left-1/4" size="w-24 h-32" color="bg-[#F0C75A]" rotation="rotate-6" opacity="opacity-20" animation="animate-float" />
        <DecorativeBalloon className="bottom-20 right-1/3" size="w-28 h-36" color="bg-white" rotation="-rotate-12" opacity="opacity-20" animation="animate-float delay-500" />
        <DecorativeBalloon className="top-1/2 left-10" size="w-20 h-28" color="bg-[#F0C75A]" rotation="rotate-20" opacity="opacity-20" animation="animate-float delay-1000" />
        <DecorativeBalloon className="bottom-10 left-1/4" size="w-20 h-28" color="bg-white" rotation="-rotate-8" opacity="opacity-20" animation="animate-float delay-1500" />
        <DecorativeBalloon className="top-5 right-5" size="w-24 h-32" color="bg-[#F0C75A]" rotation="rotate-15" opacity="opacity-20" animation="animate-float delay-2000" />

        {/* Confetti */}
        <DecorativeConfetti
          className="top-0 left-0 w-full h-full"
          count={100}
          colors={["bg-[#F0C75A]", "bg-white"]} // Gold and White confetti
          opacity="opacity-40"
          animation="animate-pulse"
        />
        <DecorativeConfetti className="bottom-0 right-0 w-full h-full" count={100} colors={["bg-[#F0C75A]", "bg-white"]} opacity="opacity-40" animation="animate-pulse delay-1000" />

        {/* Ribbons */}
        <DecorativeRibbon className="top-0 left-1/3" width="w-48" height="h-6" color="bg-[#F0C75A]" rotation="rotate-15" opacity="opacity-30" animation="animate-float delay-200" />
        <DecorativeRibbon className="top-20 right-1/4" width="w-40" height="h-5" color="bg-white" rotation="-rotate-25" opacity="opacity-30" animation="animate-float delay-700" />
        <DecorativeRibbon className="bottom-0 left-1/2" width="w-56" height="h-7" color="bg-[#F0C75A]" rotation="rotate-10" opacity="opacity-30" animation="animate-float delay-1200" />

        {/* Decorative Cards (subtle background elements) */}
        <DecorativeCard
          className="top-[5%] left-[5%]"
          size="w-28 h-20"
          rotation="rotate-8"
          baseColor="bg-white"
          accentColor="border-[#F0C75A]"
          opacity="opacity-5" // Very low opacity
          animation="animate-pulse delay-2400"
          type="ticket"
        />
        <DecorativeCard
          className="bottom-[15%] left-[15%]"
          size="w-36 h-24"
          rotation="-rotate-18"
          baseColor="bg-white"
          accentColor="border-[#F0C75A]"
          opacity="opacity-5" // Very low opacity
          animation="animate-pulse delay-2700"
          type="playing-card"
        />

        {/* Decorative Flowers (subtle background elements) */}
        <DecorativeFlower
          className="top-[15%] right-[5%]"
          size="w-20 h-20"
          petalColor="bg-white"
          centerColor="bg-[#F0C75A]"
          opacity="opacity-5" // Very low opacity
          animation="animate-spin-slow delay-2800"
        />
        <DecorativeFlower
          className="bottom-[5%] left-[40%]"
          size="w-24 h-24"
          petalColor="bg-[#F0C75A]"
          centerColor="bg-white"
          opacity="opacity-5" // Very low opacity
          animation="animate-spin-slow delay-3100"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Star className="w-8 h-8 md:w-10 md:h-10 text-[#F0C75A] animate-spin" />
            <h2
              className="font-alice text-5xl md:text-6xl lg:text-7xl text-[#F0C75A]"
              style={{
                textShadow: "4px 4px 0px white, 8px 8px 0px rgba(0,0,0,0.2)",
                WebkitTextStroke: "1px white",
              }}
            >
              MEDIA PARTNER
            </h2>
            <Star className="w-8 h-8 md:w-10 md:h-10 text-[#F0C75A] animate-spin delay-200" />
          </div>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-poppins">Terima kasih kepada semua media partner yang telah mendukung acara kami!</p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-8 bg-white/20 rounded-2xl border-4 border-[#F0C75A]/50 shadow-xl">
          <div className={`flex flex-row ${isDesktop ? "flex-nowrap animate-marquee-ltr" : "flex-wrap justify-center"}`} style={isDesktop ? { width: `${totalMarqueeWidth}px` } : {}}>
            {[...mediaPartners, ...(isDesktop ? mediaPartners : [])].map((partner, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[160px] h-[80px] md:w-[200px] md:h-[100px] mx-4 flex items-center justify-center p-2 ${!isDesktop ? "mb-4" : ""}`} // Add margin-bottom for mobile
              >
                <Image
                  src={partner.src || "/placeholder.svg"}
                  alt={partner.alt}
                  width={partner.src.includes("width=") ? Number.parseInt(partner.src.split("width=")[1].split("&")[0]) : 200}
                  height={partner.src.includes("height=") ? Number.parseInt(partner.src.split("height=")[1].split("&")[0]) : 80}
                  objectFit="contain"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
