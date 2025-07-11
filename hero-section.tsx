"use client"

import { useState, useEffect } from "react"
import DecorativeBalloon from "@/components/decorative-balloon" // Import new decorative components
import DecorativeConfetti from "@/components/decorative-confetti"
import DecorativeRibbon from "@/components/decorative-ribbon"
import DecorativeCard from "@/components/decorative-card"
import DecorativeFlower from "@/components/decorative-flower"

const rotatingTexts = ["PRAMUKA PARAMA", "Sriwijaya Besanjo 2026", "Wondera Potra"]

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
        setIsVisible(true)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements (existing and new) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Existing circular elements - adjusted opacity for more subtle effect */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-[#C83C94] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-[#C83C94] rounded-full opacity-10 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#F0C75A] rounded-full opacity-15 animate-pulse delay-1000"></div>

        {/* Decorative Balloons */}
        <DecorativeBalloon
          className="top-[5%] left-[10%]"
          size="w-20 h-28"
          color="bg-[#C83C94]"
          rotation="rotate-6"
          opacity="opacity-20"
          animation="animate-float"
        />
        <DecorativeBalloon
          className="top-[15%] right-[5%]"
          size="w-24 h-32"
          color="bg-[#F0C75A]"
          rotation="-rotate-12"
          opacity="opacity-20"
          animation="animate-float delay-300"
        />
        <DecorativeBalloon
          className="bottom-[10%] left-[20%]"
          size="w-16 h-24"
          color="bg-white"
          rotation="rotate-10"
          opacity="opacity-20"
          animation="animate-float delay-600"
        />
        <DecorativeBalloon
          className="bottom-[20%] right-[15%]"
          size="w-22 h-30"
          color="bg-[#E85BB8]"
          rotation="-rotate-8"
          opacity="opacity-20"
          animation="animate-float delay-900"
        />
        <DecorativeBalloon
          className="top-[30%] left-[5%]"
          size="w-18 h-26"
          color="bg-[#C83C94]"
          rotation="rotate-15"
          opacity="opacity-15"
          animation="animate-float delay-1200"
        />

        {/* Decorative Confetti */}
        <DecorativeConfetti
          className="top-0 left-0 w-full h-full"
          count={80}
          colors={["bg-[#C83C94]", "bg-[#F0C75A]", "bg-white"]}
          opacity="opacity-30"
          animation="animate-pulse"
        />
        <DecorativeConfetti
          className="bottom-0 right-0 w-full h-full"
          count={80}
          colors={["bg-[#C83C94]", "bg-[#F0C75A]", "bg-white"]}
          opacity="opacity-30"
          animation="animate-pulse delay-500"
        />

        {/* Decorative Ribbons */}
        <DecorativeRibbon
          className="top-[10%] left-[30%]"
          width="w-40"
          height="h-5"
          color="bg-[#F0C75A]"
          rotation="rotate-20"
          opacity="opacity-30"
          animation="animate-float delay-200"
        />
        <DecorativeRibbon
          className="top-[25%] right-[20%]"
          width="w-32"
          height="h-4"
          color="bg-[#C83C94]"
          rotation="-rotate-15"
          opacity="opacity-30"
          animation="animate-float delay-700"
        />
        <DecorativeRibbon
          className="bottom-[5%] left-[40%]"
          width="w-48"
          height="h-6"
          color="bg-white"
          rotation="rotate-10"
          opacity="opacity-30"
          animation="animate-float delay-1200"
        />
        <DecorativeRibbon
          className="bottom-[25%] right-[5%]"
          width="w-36"
          height="h-4"
          color="bg-[#E85BB8]"
          rotation="-rotate-25"
          opacity="opacity-25"
          animation="animate-float delay-1700"
        />

        {/* Decorative Cards */}
        <DecorativeCard
          className="top-[20%] left-[20%]"
          size="w-28 h-20"
          rotation="rotate-12"
          baseColor="bg-white"
          accentColor="border-[#F0C75A]"
          opacity="opacity-10"
          animation="animate-pulse"
          type="ticket"
        />
        <DecorativeCard
          className="bottom-[20%] left-[30%]"
          size="w-36 h-24"
          rotation="-rotate-8"
          baseColor="bg-white"
          accentColor="border-[#C83C94]"
          opacity="opacity-10"
          animation="animate-pulse delay-400"
          type="playing-card"
        />
        <DecorativeCard
          className="top-[40%] right-[15%]"
          size="w-32 h-22"
          rotation="rotate-25"
          baseColor="bg-white"
          accentColor="border-[#F0C75A]"
          opacity="opacity-10"
          animation="animate-pulse delay-800"
          type="ticket"
        />

        {/* Decorative Flowers */}
        <DecorativeFlower
          className="top-[10%] right-[10%]"
          size="w-20 h-20"
          petalColor="bg-[#E85BB8]"
          centerColor="bg-[#F0C75A]"
          opacity="opacity-20"
          animation="animate-spin-slow"
        />
        <DecorativeFlower
          className="bottom-[15%] left-[10%]"
          size="w-24 h-24"
          petalColor="bg-[#C83C94]"
          centerColor="bg-white"
          opacity="opacity-20"
          animation="animate-spin-slow delay-600"
        />
        <DecorativeFlower
          className="top-[50%] left-[40%]"
          size="w-16 h-16"
          petalColor="bg-[#F0C75A]"
          centerColor="bg-[#C83C94]"
          opacity="opacity-15"
          animation="animate-spin-slow delay-1200"
        />
      </div>

      <div className="container mx-auto px-6 min-h-screen flex items-center relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main heading */}
            <div className="space-y-4">
              <h1
                className="font-alice text-6xl md:text-7xl lg:text-8xl leading-tight"
                style={{
                  color: "#F0C75A",
                  textShadow: "4px 4px 0px #C83C94, 8px 8px 0px rgba(139, 69, 19, 0.3)",
                  WebkitTextStroke: "2px #C83C94",
                }}
              >
                Come
              </h1>
              <h1
                className="font-alice text-6xl md:text-7xl lg:text-8xl leading-tight"
                style={{
                  color: "#F0C75A",
                  textShadow: "4px 4px 0px #C83C94, 8px 8px 0px rgba(139, 69, 19, 0.3)",
                  WebkitTextStroke: "2px #C83C94",
                }}
              >
                Join Us In
              </h1>
            </div>

            {/* Rotating text */}
            <div className="flex items-center justify-center lg:justify-start">
              <h2
                className={`font-alice text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-300 transform ${
                  isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
                }`}
                style={{
                  color: "#F0C75A",
                  textShadow: "3px 3px 0px #C83C94, 6px 6px 0px rgba(139, 69, 19, 0.3)",
                  WebkitTextStroke: "2px #C83C94",
                }}
              >
                {rotatingTexts[currentTextIndex]}
              </h2>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start">
              <button className="bg-[#C83C94] hover:bg-[#B8358A] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-poppins">
                Daftar Sekarang
              </button>
              <button className="bg-transparent hover:bg-[#4a5d3a]/10 text-[#C83C94] font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 border-2 border-[#C83C94] hover:border-[#B8358A] font-poppins">
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* Event info */}
            <div className="flex flex-wrap gap-6 text-[#C83C94] pt-6 font-poppins justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#F0C75A] rounded-full"></div>
                <span className="text-sm md:text-base font-medium">Kegiatan Pramuka</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#F0C75A] rounded-full"></div>
                <span className="text-sm md:text-base font-medium">Petualangan Seru</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#F0C75A] rounded-full"></div>
                <span className="text-sm md:text-base font-medium">Pengalaman Berkesan</span>
              </div>
            </div>
          </div>

          {/* Right Content - Mascot */}
          <div className="flex justify-center lg:justify-end pt-12 lg:pt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 border-4 border-[#C83C94] shadow-2xl">
                <img src="/images/mascot-scout.png" alt="Mascot Pramuka" className="w-full h-auto object-contain" />
              </div>

              {/* Decorative elements around mascot */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#F0C75A] rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#C83C94] rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-1/4 -left-6 w-4 h-4 bg-[#C83C94] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom left decorative element */}
      <div className="absolute bottom-8 left-8">
        <div className="w-12 h-12 bg-[#C83C94] rounded-full flex items-center justify-center shadow-lg">
          <div className="w-6 h-6 bg-[#F0C75A] rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
