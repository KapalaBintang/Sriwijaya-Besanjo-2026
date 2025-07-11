import { Button } from "@/components/ui/button"
import DecorativeBalloon from "./decorative-balloon"
import DecorativeConfetti from "./decorative-confetti"
import DecorativeRibbon from "./decorative-ribbon"
import DecorativeCard from "./decorative-card" // Re-import DecorativeCard
import DecorativeFlower from "./decorative-flower" // Re-import DecorativeFlower

// Helper component for individual ticket cards
const TicketCard = ({
  title,
  type,
  price,
  cardBgGradient, // Use gradient for card background
  textColor,
  prakasaGradientColors, // Use gradient for Prakasa Parama text
  borderColor,
  buttonBg,
  buttonText,
}: {
  title: string
  type: string
  price: string
  cardBgGradient: string // e.g., "linear-gradient(to bottom right, #FFFFFF, #FDF2F8)"
  textColor: string
  prakasaGradientColors: string // e.g., "linear-gradient(45deg, #F0C75A, #C83C94)"
  borderColor: string
  buttonBg: string
  buttonText: string
}) => (
  <div
    className="relative rounded-3xl p-6 md:p-8 shadow-xl border-4 transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center h-full"
    style={{ background: cardBgGradient, borderColor: borderColor }}
  >
    <h3
      className="font-alice text-3xl md:text-4xl mb-4"
      style={{ color: textColor, textShadow: `2px 2px 0px ${borderColor}` }}
    >
      {title}
    </h3>
    <div className="mb-6">
      {/* PRAKASA PARAMA text with gradient/stroke effect */}
      <h4
        className="font-alice text-xl md:text-2xl font-bold" // Made responsive
        style={{
          background: prakasaGradientColors,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          WebkitTextStroke: `0.5px ${borderColor}`, // Use border color for stroke
        }}
      >
        PRAKASA PARAMA
      </h4>
    </div>
    <p className="font-poppins text-base md:text-lg mb-4 flex-grow" style={{ color: textColor }}>
      {type}
    </p>
    <div className="w-full border-t-2 border-dashed mb-6" style={{ borderColor: textColor + "40" }}></div>
    <p className="font-poppins text-3xl md:text-4xl font-bold mb-8" style={{ color: textColor }}>
      {price}
    </p>
    <Button
      className="w-full py-3 rounded-full font-poppins text-base md:text-lg font-semibold hover:scale-105 transition-transform" // Made responsive
      style={{ backgroundColor: buttonBg, color: buttonText, border: `2px solid ${buttonBg}` }}
    >
      GET TICKET
    </Button>
  </div>
)

export default function TicketingSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-pink-50 to-white">
      {/* Background decorative elements (Balloons, Confetti, Ribbons, Cards, Flowers) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Balloons - Increased quantity and variety */}
        <DecorativeBalloon
          className="top-10 left-1/4"
          size="w-24 h-32"
          color="bg-[#C83C94]"
          rotation="rotate-6"
          opacity="opacity-20"
          animation="animate-float"
        />
        <DecorativeBalloon
          className="bottom-20 right-1/3"
          size="w-28 h-36"
          color="bg-[#F0C75A]"
          rotation="-rotate-12"
          opacity="opacity-20"
          animation="animate-float delay-500"
        />
        <DecorativeBalloon
          className="top-1/2 left-10"
          size="w-20 h-28"
          color="bg-white"
          rotation="rotate-20"
          opacity="opacity-20"
          animation="animate-float delay-1000"
        />
        <DecorativeBalloon
          className="bottom-10 left-1/4"
          size="w-20 h-28"
          color="bg-[#E85BB8]"
          rotation="-rotate-8"
          opacity="opacity-20"
          animation="animate-float delay-1500"
        />
        <DecorativeBalloon
          className="top-5 right-5"
          size="w-24 h-32"
          color="bg-[#C83C94]"
          rotation="rotate-15"
          opacity="opacity-20"
          animation="animate-float delay-2000"
        />
        <DecorativeBalloon
          className="top-1/3 right-1/4"
          size="w-22 h-30"
          color="bg-[#F0C75A]"
          rotation="rotate-8"
          opacity="opacity-20"
          animation="animate-float delay-2500"
        />
        <DecorativeBalloon
          className="bottom-1/3 left-1/2"
          size="w-26 h-34"
          color="bg-white"
          rotation="-rotate-5"
          opacity="opacity-20"
          animation="animate-float delay-3000"
        />

        {/* Confetti - Increased density */}
        <DecorativeConfetti
          className="top-0 left-0 w-full h-full"
          count={100} // Increased count
          opacity="opacity-40"
          animation="animate-pulse"
        />
        <DecorativeConfetti
          className="bottom-0 right-0 w-full h-full"
          count={100} // Increased count
          opacity="opacity-40"
          animation="animate-pulse delay-1000"
        />
        <DecorativeConfetti
          className="top-1/4 left-1/4 w-1/2 h-1/2"
          count={50}
          opacity="opacity-30"
          animation="animate-pulse delay-500"
        />

        {/* Ribbons - Increased quantity and variety */}
        <DecorativeRibbon
          className="top-0 left-1/3"
          width="w-48"
          height="h-6"
          color="bg-[#F0C75A]"
          rotation="rotate-15"
          opacity="opacity-30"
          animation="animate-float delay-200"
        />
        <DecorativeRibbon
          className="top-20 right-1/4"
          width="w-40"
          height="h-5"
          color="bg-[#C83C94]"
          rotation="-rotate-25"
          opacity="opacity-30"
          animation="animate-float delay-700"
        />
        <DecorativeRibbon
          className="bottom-0 left-1/2"
          width="w-56"
          height="h-7"
          color="bg-white"
          rotation="rotate-10"
          opacity="opacity-30"
          animation="animate-float delay-1200"
        />
        <DecorativeRibbon
          className="top-1/4 left-1/12"
          width="w-36"
          height="h-4"
          color="bg-[#C83C94]"
          rotation="rotate-30"
          opacity="opacity-30"
          animation="animate-float delay-1700"
        />
        <DecorativeRibbon
          className="bottom-1/4 right-1/12"
          width="w-44"
          height="h-5"
          color="bg-[#F0C75A]"
          rotation="-rotate-18"
          opacity="opacity-30"
          animation="animate-float delay-2200"
        />

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
          accentColor="border-[#C83C94]"
          opacity="opacity-5" // Very low opacity
          animation="animate-pulse delay-2700"
          type="playing-card"
        />
        <DecorativeCard
          className="top-[25%] right-[10%]"
          size="w-40 h-28"
          rotation="rotate-30"
          baseColor="bg-white"
          accentColor="border-[#F0C75A]"
          opacity="opacity-5" // Very low opacity
          animation="animate-pulse delay-3000"
          type="ticket"
        />
        <DecorativeCard
          className="bottom-[5%] right-[25%]"
          size="w-32 h-22"
          rotation="-rotate-5"
          baseColor="bg-white"
          accentColor="border-[#C83C94]"
          opacity="opacity-5" // Very low opacity
          animation="animate-pulse delay-3300"
          type="playing-card"
        />

        {/* Decorative Flowers (subtle background elements) */}
        <DecorativeFlower
          className="top-[15%] right-[5%]"
          size="w-20 h-20"
          petalColor="bg-[#F0C75A]"
          centerColor="bg-[#C83C94]"
          opacity="opacity-5" // Very low opacity
          animation="animate-spin-slow delay-2800"
        />
        <DecorativeFlower
          className="bottom-[5%] left-[40%]"
          size="w-24 h-24"
          petalColor="bg-[#C83C94]"
          centerColor="bg-white"
          opacity="opacity-5" // Very low opacity
          animation="animate-spin-slow delay-3100"
        />
        <DecorativeFlower
          className="top-[40%] left-[20%]"
          size="w-16 h-16"
          petalColor="bg-[#E85BB8]"
          centerColor="bg-[#F0C75A]"
          opacity="opacity-5" // Very low opacity
          animation="animate-spin-slow delay-3400"
        />
        <DecorativeFlower
          className="bottom-[30%] right-[20%]"
          size="w-22 h-22"
          petalColor="bg-white"
          centerColor="bg-[#C83C94]"
          opacity="opacity-5" // Very low opacity
          animation="animate-spin-slow delay-3700"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Ticket Title and Mascot */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative mb-4">
            {/* Placeholder for Bear Mascot - themed with pink/gold */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#C83C94] rounded-full flex items-center justify-center border-4 border-[#F0C75A] shadow-lg z-20">
              <div className="w-16 h-16 bg-[#F0C75A] rounded-full flex items-center justify-center">
                <span className="text-[#C83C94] text-xs font-bold">🐻</span>
              </div>
              {/* Hat - themed with pink/gold */}
              <div className="absolute top-0 w-16 h-8 bg-[#F0C75A] rounded-t-full -rotate-12 -right-4 border-b-2 border-[#C83C94]"></div>
            </div>
            <h2
              className="font-alice text-7xl md:text-8xl lg:text-9xl text-[#F0C75A] relative z-10"
              style={{
                textShadow: "6px 6px 0px #C83C94, 12px 12px 0px rgba(0,0,0,0.2), 1px 1px 0px #F0C75A",
                WebkitTextStroke: "2px #C83C94",
              }}
            >
              TICKET
            </h2>
          </div>
        </div>

        {/* Ticket Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* EKA Card */}
          <TicketCard
            title="EKA"
            type="Solo Ticket"
            price="Rp 50.000,-"
            cardBgGradient="linear-gradient(to bottom right, #FFFFFF, #FDF2F8)" // White to very light pink
            textColor="#C83C94"
            prakasaGradientColors="linear-gradient(45deg, #F0C75A, #C83C94)" // Gold to Pink
            borderColor="#F0C75A"
            buttonBg="#C83C94"
            buttonText="white"
          />
          {/* TRI Card (Highlighted) */}
          <TicketCard
            title="TRI"
            type="Bundle 3 Ticket"
            price="Rp 135.000,-"
            cardBgGradient="linear-gradient(to bottom right, #F0C75A, #FFD700)" // Gold to slightly darker gold
            textColor="#C83C94"
            prakasaGradientColors="linear-gradient(45deg, #C83C94, #6B2C5A)" // Pink to a darker pink/purple for better contrast
            borderColor="#C83C94"
            buttonBg="#C83C94"
            buttonText="white"
          />
          {/* PANCA Card */}
          <TicketCard
            title="PANCA"
            type="Bundle 5 Ticket"
            price="Rp 215.000,-"
            cardBgGradient="linear-gradient(to bottom right, #C83C94, #E85BB8)" // Pink to lighter pink
            textColor="white"
            prakasaGradientColors="linear-gradient(45deg, #F0C75A, #FFFFFF)" // Gold to White
            borderColor="#F0C75A"
            buttonBg="#F0C75A"
            buttonText="#C83C94"
          />
        </div>
      </div>
    </section>
  )
}
