"use client";

import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Apa itu Sriwijaya Besanjo?",
    answer: "Sriwijaya Besanjo adalah agenda tahunan HIMAJA UNSRI untuk memberikan informasi, motivasi, dan aspirasi terkait pendidikan tinggi, khususnya bagi calon mahasiswa yang ingin melanjutkan pendidikan di Universitas Sriwijaya.",
  },
  {
    question: "Siapa saja yang bisa mengikuti acara ini?",
    answer: "Acara ini terbuka untuk seluruh civitas akademik di Provinsi Jambi, khususnya calon mahasiswa yang ingin melanjutkan pendidikan di Universitas Sriwijaya. Kami menyambut semua yang tertarik untuk belajar dan berinteraksi.",
  },
  {
    question: "Kapan dan di mana acara ini akan dilaksanakan?",
    answer: "Acara utama akan dilaksanakan pada Januari 2026 di Jambi. Detail lokasi dan tanggal pasti akan diumumkan lebih lanjut melalui media sosial dan website resmi kami. Pastikan untuk terus memantau!",
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer: "Pendaftaran dapat dilakukan melalui tombol 'GET TICKET' yang tersedia di bagian Ticketing pada halaman ini. Pilih jenis tiket yang sesuai dengan kebutuhan Anda dan ikuti langkah-langkah pendaftaran yang mudah.",
  },
  {
    question: "Apakah ada bintang tamu spesial?",
    answer: "Ya, kami sangat antusias untuk mengumumkan bahwa kami akan menghadirkan bintang tamu spesial Jerhemy Owen, seorang content creator dan environment enthusiast yang inspiratif.",
  },
  {
    question: "Apa manfaat mengikuti Sriwijaya Besanjo?",
    answer:
      "Dengan mengikuti Sriwijaya Besanjo, Anda akan mendapatkan informasi lengkap tentang kehidupan perkuliahan di UNSRI, motivasi berharga dari para alumni sukses, serta kesempatan emas untuk berinteraksi dan membangun jaringan dengan mahasiswa Jambi lainnya.",
  },
  {
    question: "Apakah ada sesi tanya jawab dengan alumni?",
    answer: "Tentu saja! Kami akan menyediakan sesi khusus di mana Anda bisa langsung bertanya dan berdiskusi dengan para alumni HIMAJA UNSRI yang telah sukses di berbagai bidang.",
  },
  {
    question: "Bagaimana jika saya memiliki pertanyaan lain?",
    answer: "Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami melalui kontak yang tersedia di bagian bawah halaman ini atau melalui media sosial resmi HIMAJA UNSRI. Kami siap membantu!",
  },
];

export default function FAQSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalMarqueeWidth = faqs.length * 2 * 350;

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-[#F0C75A] rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-[#C83C94] rounded-full opacity-5 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-[#C83C94] rounded-full opacity-8 blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-[#F0C75A] rounded-full opacity-8 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-[#C83C94] animate-bounce" />
            <h2
              className="font-alice text-5xl md:text-6xl lg:text-7xl text-[#C83C94]"
              style={{
                color: "#F0C75A",
                textShadow: "4px 4px 0px #C83C94, 8px 8px 0px rgba(139, 69, 19, 0.3)",
                WebkitTextStroke: "2px #C83C94",
              }}
            >
              FAQ
            </h2>
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-[#C83C94] animate-bounce delay-200" />
          </div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-poppins">Temukan jawaban atas pertanyaan yang sering diajukan tentang Sriwijaya Besanjo.</p>
        </div>

        {/* Marquee Container for Desktop, Vertical Stack for Mobile */}
        <div className="relative w-full py-8 overflow-hidden">
          <div className="flex flex-col md:flex-row md:animate-marquee" style={{ width: isDesktop ? `${totalMarqueeWidth}px` : "100%" }}>
            {[...faqs, ...(isDesktop ? faqs : [])].map((faq, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-[280px] lg:w-[400px] mx-0 md:mx-4 mb-4 md:mb-0">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`} className="bg-white rounded-2xl shadow-lg border-4 border-[#F0C75A]/50 p-4 md:p-6 transition-all duration-300 hover:scale-[1.02]">
                    <AccordionTrigger className="font-poppins text-left text-lg md:text-xl font-semibold text-[#C83C94] hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="font-poppins text-gray-700 text-base md:text-lg pt-2">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
