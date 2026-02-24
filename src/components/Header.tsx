import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-bold text-foreground tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          ALETA PARIZI
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:+359876253203"
            className="hidden sm:flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            +359 876 253 203
          </a>
          <button
            onClick={scrollToForm}
            className="bg-brand-gradient px-5 py-2.5 rounded-lg font-body text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all"
          >
            Запитване
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
