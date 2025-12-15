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
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo Section - New */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Wrapper div for perfect circle logo */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#C83C94] shadow-lg flex-shrink-0">
              <Image
                src="/images/wondera.png" // Using your existing mascot as the logo
                alt="Company Logo"
                layout="fill" // Fill the parent container
                objectFit="cover" // Cover the area, cropping if necessary
                className="transition-transform duration-300 hover:scale-105" // Added hover effect
              />
            </div>
            <h3
              className="font-alice text-3xl md:text-5xl lg:text-6x1  text-[#C83C94]" // Updated className
              style={{
                color: "#F0C75A",
                textShadow: "4px 4px 0px #C83C94, 8px 8px 0px rgba(139, 69, 19, 0.3)",
                WebkitTextStroke: "2px #C83C94",
              }}
            >
              SRIWIJAYA BESANJO
            </h3>
            <p className="text-sm text-center md:text-left font-poppins text-justify">Meningkatkan mutu pendidikan dan mempererat persaudaraan.</p>
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
            <div className="space-y-4 font-poppins text-justify">
              <div>
                <h4 className="font-semibold text-lg text-[#C83C94] mb-1">Kampus Utama</h4> {/* Changed text color to Cerise Pink */}
                <p className="text-sm leading-relaxed">Jl. Raya Palembang-Prabumulih KM. 32, Indralaya Indah, Kec. Indralaya, Kabupaten Ogan Ilir, Sumatera Selatan (30862)</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#C83C94] mb-1">Sekretariat</h4> {/* Changed text color to Cerise Pink */}
                <p className="text-sm leading-relaxed">Perumahan Golden Premier,Kec.Indralaya Utara, Kab. Ogan Ilir, Sumatera Selata (30662)</p>
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
                  <h4 className="font-semibold text-lg text-[#C83C94] mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/6285709880781"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]" // Changed link color to Cerise Pink, hover to Gold
                  >
                    +62 857-0988-0781 (Juliana Imama)
                  </a>
                  <br />
                  <a href="https://wa.me/6289652017370" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#F0C75A] transition-colors text-[#C83C94]">
                    +62 896-5201-7370 (Rachma Aulya Furqany)
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C83C94]" /> {/* Changed icon color to Cerise Pink */}
                <div>
                  <h4 className="font-semibold text-lg text-[#C83C94] mb-1">Email</h4>
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
              className="font-alice text-4xl md:text-5xl lg:text-6xl"
              style={{
                color: "#F0C75A",
                textShadow: "4px 4px 0px #C83C94, 8px 8px 0px rgba(139, 69, 19, 0.3)",
                WebkitTextStroke: "2px #C83C94",
              }}
            >
              Navigasi
            </h3>

            <div className="space-y-3 font-poppins">
              <a href="#beranda" className="flex items-center gap-2 text-sm text-[#C83C94] hover:text-[#F0C75A]">
                <ChevronRight className="w-4 h-4" /> Beranda
              </a>
              <a href="#about" className="flex items-center gap-2 text-sm text-[#C83C94] hover:text-[#F0C75A]">
                <ChevronRight className="w-4 h-4" /> About
              </a>
              <a href="#guest-star" className="flex items-center gap-2 text-sm text-[#C83C94] hover:text-[#F0C75A]">
                <ChevronRight className="w-4 h-4" /> Guest Star
              </a>
              <a href="#ticketing" className="flex items-center gap-2 text-sm text-[#C83C94] hover:text-[#F0C75A]">
                <ChevronRight className="w-4 h-4" /> Get Ticket
              </a>
              <a href="#gallery" className="flex items-center gap-2 text-sm text-[#C83C94] hover:text-[#F0C75A]">
                <ChevronRight className="w-4 h-4" /> Gallery
              </a>
            </div>
          </div>
          {/* Pra-Event Section */}
          <div className="space-y-6">
            <h3
              className="font-alice text-4xl md:text-5xl lg:text-6xl"
              style={{
                color: "#F0C75A",
                textShadow: "4px 4px 0px #C83C94, 8px 8px 0px rgba(139, 69, 19, 0.3)",
                WebkitTextStroke: "2px #C83C94",
              }}
            >
              Pra-Event
            </h3>
            <div className="space-y-3 font-poppins text-lg text-[#C83C94] mb-1">
              <p className="text-sm text-center md:text-left font-poppins text-justify">Konser Amal</p>
              <p className="text-sm text-center md:text-left font-poppins text-justify">Essay Competition</p>
              <p className="text-sm text-center md:text-left font-poppins text-justify">Videografi Competition</p>
              <p className="text-sm text-center md:text-left font-poppins text-justify">Himaja Goes to School</p>
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
