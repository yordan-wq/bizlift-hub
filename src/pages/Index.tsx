import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import StatsSection from "@/components/StatsSection";
import WhyUsSection from "@/components/WhyUsSection";
import SectorsSection from "@/components/SectorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";

const Index = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustBar />
      <StatsSection />
      <WhyUsSection />
      <SectorsSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
      <StickyCtaBar />
    </main>
  );
};

export default Index;
