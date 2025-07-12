import { Phone, Mail, ChevronRight } from "lucide-react";
import Image from "next/image"; // Import Image component

export default function FooterSection() {
  return (
    <footer className="bg-[#FAF3E0] py-16 text-gray-800 relative overflow-hidden">
      {" "}
      {/* Changed background to #FAF3E0 */}
      {/* Background decorative elements (subtle) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#C83C94] rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-[#F0C75A] rounded-full blur-xl animate-pulse delay-500"></div> {/* Changed to Gold */}
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Section - New */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Wrapper div for perfect circle logo */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#C83C94] shadow-lg flex-shrink-0">
              <Image
                src="/images/mascot-scout.png" // Using your existing mascot as the logo
                alt="Company Logo"
                layout="fill" // Fill the parent container
                objectFit="cover" // Cover the area, cropping if necessary
                className="transition-transform duration-300 hover:scale-105" // Added hover effect
              />
            </div>
            <h3
              className="font-alice text-5xl md:text-6xl  text-[#C83C94]" // Updated className
              style={{
                color: "#F0C75A",
                textShadow: "4px 4px 0px #C83C94, 8px 8px 0px rgba(139, 69, 19, 0.3)",
                WebkitTextStroke: "2px #C83C94",
              }}
            >
              SRIWIJAYA BESANJO
            </h3>
            <p className="text-sm text-center md:text-left font-poppins">Meningkatkan mutu pendidikan dan mempererat persaudaraan.</p>
          </div>
          {/* Alamat Section */}
          <div className="space-y-6">
            <h3
              className="font-alice text-5xl md:text-6xl lg:text-7xl text-[#C83C94]" // Updated className
              style={{
                color: "#F0C75A",
                textShadow: "4px 4px 0px #C83C94, 8px 8px 0px rgba(139, 69, 19, 0.3)",
                WebkitTextStroke: "2px #C83C94",
              }}
            >
              Alamat
            </h3>
            <div className="space-y-4 font-poppins">
              <div>
                <h4 className="font-semibold text-lg text-[#C83C94] mb-1">Kampus Utama</h4> {/* Changed text color to Cerise Pink */}
                <p className="text-sm leading-relaxed">Jl. Raya Palembang-Prabumulih KM. 32, Indralaya Indah, Kec. Indralaya, Kabupaten Ogan Ilir, Sumatera Selatan (30862)</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#C83C94] mb-1">Sekretariat</h4> {/* Changed text color to Cerise Pink */}
                <p className="text-sm leading-relaxed">Jalan Tamyiz, Kec. Indralaya Utara, Kabupaten Ogan Ilir (30862)</p>
              </div>
            </div>
          </div>
          {/* Kontak Section */}
          <div className="space-y-6">
            <h3
              className="font-alice text-5xl md:text-6xl lg:text-7xl text-[#C83C94]" // Updated className
              style={{
                color: "#F0C75A",
                textShadow: "4px 4px 0px #C83C94, 8px 8px 0px rgba(139, 69, 19, 0.3)",
                WebkitTextStroke: "2px #C83C94",
              }}
            >
              Kontak
            </h3>
            <div className="space-y-4 font-poppins">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C83C94]" /> {/* Changed icon color to Cerise Pink */}
                <div>
                  <p className="text-sm font-semibold">Whatsapp</p>
                  <a
                    href="https://wa.me/6289529733304"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]" // Changed link color to Cerise Pink, hover to Gold
                  >
                    +62 895-2973-3304 (Qayla Gina)
                  </a>
                  <br />
                  <a
                    href="https://wa.me/6287793855926"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]" // Changed link color to Cerise Pink, hover to Gold
                  >
                    +62 877-9385-5926 (Florenzi Natasya)
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C83C94]" /> {/* Changed icon color to Cerise Pink */}
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <a
                    href="mailto:sriwijayabesanjo@gmail.com"
                    className="text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]" // Changed link color to Cerise Pink, hover to Gold
                  >
                    sriwijayabesanjo@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Navigasi Section */}
          <div className="space-y-6">
            <h3
              className="font-alice text-5xl md:text-6xl lg:text-7xl text-[#C83C94]" // Updated className
              style={{
                color: "#F0C75A",
                textShadow: "4px 4px 0px #C83C94, 8px 8px 0px rgba(139, 69, 19, 0.3)",
                WebkitTextStroke: "2px #C83C94",
              }}
            >
              Navigasi
            </h3>
            <div className="grid grid-cols-2 gap-4 font-poppins">
              <a href="#beranda" className="flex items-center gap-2 text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]">
                <ChevronRight className="w-4 h-4 text-[#C83C94]" /> Beranda
              </a>
              <a href="#about" className="flex items-center gap-2 text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]">
                <ChevronRight className="w-4 h-4 text-[#C83C94]" /> About
              </a>
              <a href="#guest-star" className="flex items-center gap-2 text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]">
                <ChevronRight className="w-4 h-4 text-[#C83C94]" /> Guest Star
              </a>
              <a href="#ticketing" className="flex items-center gap-2 text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]">
                <ChevronRight className="w-4 h-4 text-[#C83C94]" /> Get Ticket
              </a>
              <a href="#gallery" className="flex items-center gap-2 text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]">
                <ChevronRight className="w-4 h-4 text-[#C83C94]" /> Gallery
              </a>
              <a href="#pra-event" className="flex items-center gap-2 text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]">
                <ChevronRight className="w-4 h-4 text-[#C83C94]" /> Pra-Event
              </a>
              <a href="#konser-amal" className="flex items-center gap-2 text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]">
                <ChevronRight className="w-4 h-4 text-[#C83C94]" /> Konser Amal
              </a>
              <a href="#tournament-ml" className="flex items-center gap-2 text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]">
                <ChevronRight className="w-4 h-4 text-[#C83C94]" /> Tournament Mobile Legends
              </a>
              <a href="#vocal-solo" className="flex items-center gap-2 text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]">
                <ChevronRight className="w-4 h-4 text-[#C83C94]" /> Vocal Solo Online
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#C83C94]/20 text-center text-sm text-gray-700 font-poppins">
          {" "}
          {/* Changed border and text color */}
          &copy; {new Date().getFullYear()} Sriwijaya Besanjo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
