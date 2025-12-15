import Image from "next/image";

export default function GallerySection() {
  // Placeholder images with varying dimensions for a dynamic grid
  const galleryImages = [
    { src: "/images/foto1.JPG", alt: "Event Image 1", span: "col-span-2 row-span-2" },
    { src: "/images/foto2.JPG", alt: "Event Image 2", span: "col-span-1 row-span-2" },
    { src: "/images/foto3.JPG", alt: "Event Image 3", span: "col-span-1 row-span-1" },
    { src: "/images/foto4.JPG", alt: "Event Image 4", span: "col-span-2 row-span-1" },
    { src: "/images/foto5.JPG", alt: "Event Image 5", span: "col-span-1 row-span-1" },
    { src: "/images/foto6.JPG", alt: "Event Image 6", span: "col-span-1 row-span-2" },
    { src: "/images/foto7.JPG", alt: "Event Image 7", span: "col-span-1 row-span-1" },
    { src: "/images/foto8.JPG", alt: "Event Image 8", span: "col-span-2 row-span-1" },
    { src: "/images/foto9.JPG", alt: "Event Image 8", span: "col-span-2 row-span-1" },
  ];

  return (
    <section id="gallery" className="py-20 relative overflow-hidden bg-[#C83C94]" style={{ backgroundImage: "url('/images/transisitanah1.png')" }}>
      {/* Background decorative elements (abstract shapes in lighter pink/gold/white) with pulse animation */}
      <div className="absolute top-0 left-0 w-64 h-full bg-white opacity-10 rounded-br-[50%] -translate-x-1/2 -rotate-12 animate-pulse delay-100"></div>
      <div className="absolute top-1/4 left-0 w-48 h-96 bg-[#F0C75A] opacity-10 rounded-br-[50%] -translate-x-1/3 rotate-6 animate-pulse delay-300"></div>
      <div className="absolute bottom-0 right-0 w-64 h-full bg-white opacity-10 rounded-tl-[50%] translate-x-1/2 rotate-12 animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-96 bg-[#F0C75A] opacity-10 rounded-tl-[50%] translate-x-1/3 -rotate-6 animate-pulse delay-700"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 bg-white opacity-5 rounded-b-full animate-pulse delay-900"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-[#F0C75A] opacity-5 rounded-t-full animate-pulse delay-1100"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="flex flex-col items-center mb-16">
          <h2
            className="font-alice text-7xl md:text-8xl lg:text-9xl text-[#F0C75A] relative z-10 animate-fade-in-up" // Added fade-in-up animation
            style={{
              textShadow: "6px 6px 0px rgba(255,255,255,0.3), 12px 12px 0px rgba(0,0,0,0.2), 1px 1px 0px #F0C75A",
              WebkitTextStroke: "2px white",
            }}
          >
            GET TO KNOW US
          </h2>
        </div>

        {/* Image Gallery Grid with varying sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[150px] gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative w-full h-full rounded-2xl overflow-hidden border-4 border-[#F0C75A] shadow-xl transform hover:scale-105 transition-transform duration-300 group animate-fade-in-up`} // Added fade-in-up animation
              style={{ animationDelay: `${0.1 * index}s` }} // Staggered animation delay
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" />
              {/* Optional overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-poppins opacity-0 group-hover:opacity-100 transition-opacity delay-100"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
