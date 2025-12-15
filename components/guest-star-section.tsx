import Image from "next/image"
import { Sparkles } from "lucide-react"
import DecorativeCard from "./decorative-card"
import DecorativeFlower from "./decorative-flower"

// Data for the single guest star
const guestStar = {
  id: 1,
  name: "Amadeo Yesa",
  profession: "H3rd Winner Clash of Champions Season 2 by Ruangguru (2025) ,Highest UTBK-SNBT Score in Indonesia (2023) ",
  summary:
    "Amadeo Yesa merupakan seorang mahasiswa S1 Teknik Informatika di Institut Teknologi Sepuluh Nopember (ITS) Surabaya, lahir pada 25 Juni 2005, yang memiliki rekam jejak prestasi akademik yang sangat impresif, termasuk meraih Skor UTBK-SNBT Tertinggi di Indonesia pada tahun 2023, menjadi Juara 3 Clash of Champions Season 2 oleh Ruangguru (2025), serta memenangkan Medali Perak dalam National Science Olympiad in Chemistry (OSN) tahun 2022, di mana ia juga meraih Juara 1 NITRON UM dan Juara 5 National Logic Competition ITS.",
  image: "/images/DeoFiks.jpg", // Using the provided image
}

export default function GuestStarSection() {
  return (
    <section id="guest-star" className="py-20 relative overflow-hidden" style={{ backgroundColor: "#C83C94" }}>
      {/* Background Decorative Elements (Cards and Flowers) - now behind main content */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Decorative Cards */}
        <DecorativeCard
          className="top-10 left-1/4"
          size="w-48 h-32"
          rotation="rotate-12"
          baseColor="bg-white"
          accentColor="border-[#F0C75A]"
          opacity="opacity-15"
          animation="animate-pulse"
          type="ticket"
        />
        <DecorativeCard
          className="bottom-20 right-1/3"
          size="w-64 h-40"
          rotation="-rotate-6"
          baseColor="bg-white"
          accentColor="border-[#C83C94]"
          opacity="opacity-15"
          animation="animate-pulse delay-300"
          type="playing-card"
        />
        <DecorativeCard
          className="top-1/2 left-10"
          size="w-32 h-24"
          rotation="rotate-45"
          baseColor="bg-white"
          accentColor="border-[#F0C75A]"
          opacity="opacity-15"
          animation="animate-pulse delay-600"
          type="ticket"
        />
        <DecorativeCard
          className="bottom-10 right-10"
          size="w-40 h-28"
          rotation="-rotate-12"
          baseColor="bg-white"
          accentColor="border-[#C83C94]"
          opacity="opacity-15"
          animation="animate-pulse delay-900"
          type="playing-card"
        />
        {/* More Decorative Cards */}
        <DecorativeCard
          className="top-5 right-5"
          size="w-36 h-24"
          rotation="rotate-3"
          baseColor="bg-white"
          accentColor="border-[#C83C94]"
          opacity="opacity-10"
          animation="animate-pulse delay-1200"
          type="ticket"
        />
        <DecorativeCard
          className="bottom-5 left-5"
          size="w-52 h-36"
          rotation="-rotate-9"
          baseColor="bg-white"
          accentColor="border-[#F0C75A]"
          opacity="opacity-10"
          animation="animate-pulse delay-1500"
          type="playing-card"
        />
        <DecorativeCard
          className="top-1/4 left-1/2 -translate-x-1/2"
          size="w-44 h-30"
          rotation="rotate-20"
          baseColor="bg-white"
          accentColor="border-[#C83C94]"
          opacity="opacity-12"
          animation="animate-pulse delay-1800"
          type="ticket"
        />
        <DecorativeCard
          className="bottom-1/4 right-1/2 translate-x-1/2"
          size="w-30 h-20"
          rotation="-rotate-25"
          baseColor="bg-white"
          accentColor="border-[#F0C75A]"
          opacity="opacity-12"
          animation="animate-pulse delay-2100"
          type="playing-card"
        />
        {/* Even More Decorative Cards */}
        <DecorativeCard
          className="top-[5%] left-[5%]"
          size="w-28 h-20"
          rotation="rotate-8"
          baseColor="bg-white"
          accentColor="border-[#F0C75A]"
          opacity="opacity-10"
          animation="animate-pulse delay-2400"
          type="ticket"
        />
        <DecorativeCard
          className="bottom-[15%] left-[15%]"
          size="w-36 h-24"
          rotation="-rotate-18"
          baseColor="bg-white"
          accentColor="border-[#C83C94]"
          opacity="opacity-10"
          animation="animate-pulse delay-2700"
          type="playing-card"
        />
        <DecorativeCard
          className="top-[25%] right-[10%]"
          size="w-40 h-28"
          rotation="rotate-30"
          baseColor="bg-white"
          accentColor="border-[#F0C75A]"
          opacity="opacity-12"
          animation="animate-pulse delay-3000"
          type="ticket"
        />
        <DecorativeCard
          className="bottom-[5%] right-[25%]"
          size="w-32 h-22"
          rotation="-rotate-5"
          baseColor="bg-white"
          accentColor="border-[#C83C94]"
          opacity="opacity-12"
          animation="animate-pulse delay-3300"
          type="playing-card"
        />

        {/* Decorative Flowers */}
        <DecorativeFlower
          className="top-20 right-1/4"
          size="w-24 h-24"
          petalColor="bg-[#E85BB8]"
          centerColor="bg-[#F0C75A]"
          opacity="opacity-30"
          animation="animate-spin-slow"
        />
        <DecorativeFlower
          className="bottom-10 left-1/3"
          size="w-32 h-32"
          petalColor="bg-[#C83C94]"
          centerColor="bg-white"
          opacity="opacity-30"
          animation="animate-spin-slow delay-500"
        />
        <DecorativeFlower
          className="top-1/3 left-10"
          size="w-16 h-16"
          petalColor="bg-[#F0C75A]"
          centerColor="bg-[#C83C94]"
          opacity="opacity-30"
          animation="animate-spin-slow delay-1000"
        />
        {/* More Decorative Flowers */}
        <DecorativeFlower
          className="top-1/2 right-10"
          size="w-20 h-20"
          petalColor="bg-[#C83C94]"
          centerColor="bg-[#F0C75A]"
          opacity="opacity-30"
          animation="animate-spin-slow delay-1500"
        />
        <DecorativeFlower
          className="bottom-1/4 left-1/4"
          size="w-28 h-28"
          petalColor="bg-[#F0C75A]"
          centerColor="bg-[#C83C94]"
          opacity="opacity-30"
          animation="animate-spin-slow delay-2000"
        />
        <DecorativeFlower
          className="top-5 left-5"
          size="w-18 h-18"
          petalColor="bg-[#E85BB8]"
          centerColor="bg-white"
          opacity="opacity-30"
          animation="animate-spin-slow delay-2500"
        />
        {/* Even More Decorative Flowers */}
        <DecorativeFlower
          className="top-[15%] right-[5%]"
          size="w-20 h-20"
          petalColor="bg-[#F0C75A]"
          centerColor="bg-[#C83C94]"
          opacity="opacity-25"
          animation="animate-spin-slow delay-2800"
        />
        <DecorativeFlower
          className="bottom-[5%] left-[40%]"
          size="w-24 h-24"
          petalColor="bg-[#C83C94]"
          centerColor="bg-white"
          opacity="opacity-25"
          animation="animate-spin-slow delay-3100"
        />
        <DecorativeFlower
          className="top-[40%] left-[20%]"
          size="w-16 h-16"
          petalColor="bg-[#E85BB8]"
          centerColor="bg-[#F0C75A]"
          opacity="opacity-25"
          animation="animate-spin-slow delay-3400"
        />
        <DecorativeFlower
          className="bottom-[30%] right-[20%]"
          size="w-22 h-22"
          petalColor="bg-white"
          centerColor="bg-[#C83C94]"
          opacity="opacity-25"
          animation="animate-spin-slow delay-3700"
        />
      </div>

      {/* Main content (Guest Star Card) - now with a higher z-index */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <h2
            className="font-alice text-5xl md:text-6xl lg:text-7xl mb-4 text-white"
            style={{
              textShadow: "4px 4px 0px #F0C75A, 8px 8px 0px rgba(0,0,0,0.2)",
              WebkitTextStroke: "1px #F0C75A",
            }}
          >
            OUR GUEST STAR
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-poppins">
            Bersiaplah untuk penampilan yang paling dinanti!
          </p>
        </div>

        {/* Guest Star Card - Main Content */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#F0C75A]/50 flex flex-col lg:flex-row items-center lg:items-start gap-10 relative overflow-hidden">
          {/* Image Section - Left side */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-[#C83C94] shadow-xl transform hover:scale-105 transition-transform duration-500 group">
            <Image
              src={guestStar.image || "/placeholder.svg"}
              alt={guestStar.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110"
            />
            {/* Optional: Gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Sparkles className="absolute top-4 right-4 w-8 h-8 text-[#F0C75A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
          </div>

          {/* Text Content Section - Right side */}
          <div className="flex-grow text-center lg:text-left space-y-6">
            {/* Name and Profession Card */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-md border-2 border-[#C83C94]/30">
              <h3
                className="font-alice text-3xl md:text-4xl leading-tight mb-2"
                style={{
                  color: "#C83C94",
                  textShadow: "2px 2px 0px #F0C75A, 4px 4px 0px rgba(139, 69, 19, 0.1)",
                  WebkitTextStroke: "0.5px #F0C75A",
                }}
              >
                {guestStar.name}
              </h3>
              <div className="flex flex-col items-center lg:items-start gap-1 text-gray-700 font-poppins" style={{ textAlign: "justify" }}>
                <span className="text-lg font-semibold">{guestStar.profession}</span>
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-md border-2 border-[#F0C75A]/30">
              <h4
                className="font-alice text-2xl md:text-3xl mb-4 text-[#C83C94]"
                style={{
                  textShadow: "1px 1px 0px #F0C75A",
                  WebkitTextStroke: "0.2px #F0C75A",
                }}
              >
                SUMMARY
              </h4>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed font-poppins" style={{ textAlign: "justify" }} >{guestStar.summary}</p>
            </div>

            {/* Optional: Call to action button */}
            <div className="pt-4">
              <button className="bg-[#C83C94] hover:bg-[#B8358A] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-poppins">
                Lihat Profil Lengkap
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
