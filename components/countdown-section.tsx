"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock } from "lucide-react"

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to January 2026 (you can adjust the specific date)
    const targetDate = new Date("2026-01-15T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const CountdownCard = ({ value, label }: { value: number; label: string }) => (
    <div className="relative group">
      <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-[#C83C94]/20 hover:border-[#C83C94]/40 transition-all duration-300 transform hover:scale-105">
        <div className="text-center">
          <div
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-poppins"
            style={{
              background: "linear-gradient(45deg, #C83C94, #F0C75A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {value.toString().padStart(2, "0")}
          </div>
          <div className="text-[#C83C94] font-semibold text-sm md:text-base uppercase tracking-wider font-poppins">
            {label}
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#F0C75A] rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#C83C94] rounded-full opacity-60 group-hover:opacity-80 transition-opacity"></div>
    </div>
  )

  return (
    <section
      className="py-20 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/pink-flowers-bg.png')`,
      }}
    >
      {/* Overlay for better readability - Opacity reduced */}
      <div className="absolute inset-0 bg-[#C83C94] opacity-60"></div> {/* Reduced from 80% */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C83C94]/50 via-[#E85BB8]/50 to-[#C83C94]/50"></div>{" "}
      {/* Reduced from 70% */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Main Title */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Clock className="w-8 h-8 md:w-10 md:h-10 text-[#F0C75A] animate-pulse" />
            <h2
              className="font-alice text-4xl md:text-5xl lg:text-6xl text-white"
              style={{
                textShadow: "3px 3px 0px rgba(240, 199, 90, 0.3), 6px 6px 0px rgba(0,0,0,0.1)",
              }}
            >
              MENUJU MAIN EVENT
            </h2>
            <Clock className="w-8 h-8 md:w-10 md:h-10 text-[#F0C75A] animate-pulse" />
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-12">
            <CountdownCard value={timeLeft.days} label="Hari" />
            <CountdownCard value={timeLeft.hours} label="Jam" />
            <CountdownCard value={timeLeft.minutes} label="Menit" />
            <CountdownCard value={timeLeft.seconds} label="Detik" />
          </div>

          {/* Event Location and Date */}
          <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 max-w-md mx-auto">
            <Calendar className="w-6 h-6 text-[#F0C75A]" />
            <span className="text-white text-lg md:text-xl font-semibold font-poppins">Jambi, Januari 2026</span>
          </div>

          {/* Additional Info */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <div className="w-2 h-2 bg-[#F0C75A] rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base font-medium font-poppins">Event Spektakuler</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <div className="w-2 h-2 bg-[#F0C75A] rounded-full animate-pulse delay-300"></div>
              <span className="text-sm md:text-base font-medium font-poppins">Pengalaman Tak Terlupakan</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <div className="w-2 h-2 bg-[#F0C75A] rounded-full animate-pulse delay-600"></div>
              <span className="text-sm md:text-base font-medium font-poppins">Jangan Sampai Terlewat</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>
    </section>
  )
}
