import { useState, useEffect, useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";

const StickyCtaBar = () => {
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 600;
      setVisible(shouldShow);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (barRef.current) {
      if (visible) {
        barRef.current.classList.add("is-visible");
      } else {
        barRef.current.classList.remove("is-visible");
      }
    }
  }, [visible]);

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={barRef}
      className="sticky-cta-enter fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border py-3 px-6 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="font-body text-sm text-foreground font-medium">
            Безплатна консултация и оферта до 24 часа
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href="tel:+359876253203"
            className="flex items-center justify-center gap-2 border border-border px-4 py-2.5 rounded-lg font-body text-sm text-foreground hover:bg-secondary transition-all"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Обадете се</span>
          </a>
          <button
            onClick={scrollToForm}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-brand-gradient px-6 py-2.5 rounded-lg font-body text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all"
          >
            Изпратете запитване
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCtaBar;
