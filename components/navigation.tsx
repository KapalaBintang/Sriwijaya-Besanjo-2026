"use client"

import { useState, useEffect } from "react" // Import useEffect
import { Shield, Flame, Bird, Mountain, Menu, X } from "lucide-react"
import Image from "next/image";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false) // New state for scroll detection

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Effect to handle scroll for glass morphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust 50px as needed for when the effect should start
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`px-6 py-4 shadow-lg relative z-50 sticky top-0 transition-all duration-300 ${
        scrolled ? "bg-[#C83C94]/80 backdrop-blur-md" : "bg-[#C83C94]"
      }`} // Apply glass morphism classes conditionally
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src="/images/HIMAJA-OK.png" alt="himaja-logo" width={56} height={56}
              className="object-contain"/>
          </div>

          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src="/images/RANGKAYO-OK.png" alt="rangkayo-logo" width={56} height={56}
              className="object-contain"/>
          </div>

          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src="/images/SB-OK.png"alt="sb-logo" width={56} height={56}
              className="object-contain"/>
          </div>

          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src="/images/WONDERA-OK.png" alt="wondera-logo" width={56} height={56}
              className="object-contain" />
           </div>
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#beranda" className="text-white hover:text-[#F0C75A] transition-colors font-poppins font-medium">
            Beranda
          </a>
          <a href="#about" className="text-white hover:text-[#F0C75A] transition-colors font-poppins font-medium">
            About
          </a>
          <a href="#guest-star" className="text-white hover:text-[#F0C75A] transition-colors font-poppins font-medium">
            Guest Star
          </a>
          <a href="#gallery" className="text-white hover:text-[#F0C75A] transition-colors font-poppins font-medium">
            Gallery
          </a>
          <a href="#faq" className="text-white hover:text-[#F0C75A] transition-colors font-poppins font-medium">
            FAQ
          </a>
          <a
            href="#media-partner"
            className="text-white hover:text-[#F0C75A] transition-colors font-poppins font-medium"
          >
            Media Partner
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white hover:text-[#F0C75A]">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#C83C94] shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            <a
              href="#beranda"
              className="text-white hover:text-[#F0C75A] transition-colors font-poppins font-medium text-lg"
              onClick={toggleMobileMenu}
            >
              Beranda
            </a>
            <a
              href="#about"
              className="text-white hover:text-[#F0C75A] transition-colors font-poppins font-medium text-lg"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a
              href="#guest-star"
              className="text-white hover:text-[#F0C75A] transition-colors font-poppins font-medium text-lg"
              onClick={toggleMobileMenu}
            >
              Guest Star
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-[#F0C75A] transition-colors font-poppins font-medium text-lg"
              onClick={toggleMobileMenu}
            >
              Gallery
            </a>
            <a
              href="#faq"
              className="text-white hover:text-[#F0C75A] transition-colors font-poppins font-medium text-lg"
              onClick={toggleMobileMenu}
            >
              FAQ
            </a>
            <a
              href="#media-partner"
              className="text-white hover:text-[#F0C75A] transition-colors font-poppins font-medium text-lg"
              onClick={toggleMobileMenu}
            >
              Media Partner
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
