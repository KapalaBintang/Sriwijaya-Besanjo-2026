import { Users, Award, Lightbulb, HeartHandshake, Calendar, Clock } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-[#F0C75A] rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-[#C83C94] rounded-full opacity-5 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-[#C83C94] rounded-full opacity-8 blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-[#F0C75A] rounded-full opacity-8 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="font-alice text-5xl md:text-6xl lg:text-7xl mb-4"
            style={{
              color: "#C83C94",
              textShadow: "4px 4px 0px #F0C75A, 8px 8px 0px rgba(139, 69, 19, 0.2)",
              WebkitTextStroke: "1px #F0C75A",
            }}
          >
            Tentang Kami
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-poppins">
            Pelajari lebih lanjut tentang organisasi kami dan event tahunan yang kami selenggarakan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* HIMAJA UNSRI Section */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-[#C83C94]/30 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-[#C83C94] rounded-full flex items-center justify-center shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3
              className="font-alice text-4xl md:text-5xl text-center mb-6"
              style={{
                color: "#F0C75A",
                textShadow: "3px 3px 0px #C83C94, 6px 6px 0px rgba(139, 69, 19, 0.2)",
                WebkitTextStroke: "1px #C83C94",
              }}
            >
              HIMAJA UNSRI
            </h3>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6 font-poppins">
              HIMAJA UNSRI adalah sebagai wadah yang menaungi mahasiswa dari Provinsi Jambi yang melanjutkan
              pendidikannya di Universitas Sriwijaya. HIMAJA UNSRI pernah mengadakan kegiatan seperti, Sriwijaya
              Besanjo, Himaja Cup, Himaja Fest, Donor Darah, Galang Dana, dan masih banyak kegiatan lainnya sebagai
              bentuk kontribusi untuk Jambi.
            </p>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-poppins">
              Kegiatan ini juga menjadi ajang untuk membentuk persaudaraan yang kuat antar anggota HIMAJA UNSRI, serta
              menjadi tempat untuk mengembangkan minat dan bakat para anggotanya.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#F0C75A]/20 text-[#C83C94] font-poppins">
                <Award className="w-4 h-4 mr-2" /> Kontribusi Jambi
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#F0C75A]/20 text-[#C83C94] font-poppins">
                <HeartHandshake className="w-4 h-4 mr-2" /> Persaudaraan Kuat
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#F0C75A]/20 text-[#C83C94] font-poppins">
                <Lightbulb className="w-4 h-4 mr-2" /> Kembangkan Bakat
              </span>
            </div>
          </div>

          {/* SRIWIJAYA BESANJO Section */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-[#F0C75A]/30 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-[#F0C75A] rounded-full flex items-center justify-center shadow-lg">
                <Calendar className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3
              className="font-alice text-4xl md:text-5xl text-center mb-6"
              style={{
                color: "#C83C94",
                textShadow: "3px 3px 0px #F0C75A, 6px 6px 0px rgba(139, 69, 19, 0.2)",
                WebkitTextStroke: "1px #F0C75A",
              }}
            >
              SRIWIJAYA BESANJO
            </h3>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6 font-poppins">
              Sriwijaya Besanjo adalah agenda tahunan yang selalu diadakan oleh Himpunan Mahasiswa Jambi di Universitas
              Sriwijaya. Sriwijaya Besanjo adalah salah satu kegiatan dari HIMAJA untuk memberi informasi, motivasi,
              serta aspirasi dalam rangka meningkatkan mutu pendidikan khususnya dalam tingkat pendidikan perguruan
              tinggi.
            </p>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-poppins">
              Sriwijaya Besanjo juga dipersiapkan untuk menyambut para civitas akademik di Provinsi Jambi agar lebih
              semangat dalam melanjutkan pendidikan di perguruan tinggi.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#C83C94]/20 text-[#F0C75A] font-poppins">
                <Clock className="w-4 h-4 mr-2" /> Agenda Tahunan
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#C83C94]/20 text-[#F0C75A] font-poppins">
                <Lightbulb className="w-4 h-4 mr-2" /> Tingkatkan Mutu Pendidikan
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#C83C94]/20 text-[#F0C75A] font-poppins">
                <Users className="w-4 h-4 mr-2" /> Sambut Civitas Akademik
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
