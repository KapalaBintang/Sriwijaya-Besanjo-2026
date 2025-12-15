import Navigation from "../components/navigation";
import HeroSection from "../hero-section";
import CountdownSection from "../components/countdown-section";
import AboutSection from "../components/about-section";
import GuestStarSection from "../components/guest-star-section";
import TicketingSection from "../components/ticketing-section";
import GallerySection from "../components/gallery-section";
import FAQSection from "../components/faq-section";
import MediaPartnerSection from "../components/media-partner-section";
import FooterSection from "../components/footer-section"; // Import the new component

export default function Page() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <GuestStarSection />
      <TicketingSection />
      <GallerySection />
      <FAQSection />
      <MediaPartnerSection />
      <FooterSection />
    </main>
  );
}
