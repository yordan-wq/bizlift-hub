import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-dark-gradient overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Елегантна дамска бизнес униформа"
          className="w-full h-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="reveal-hero reveal-hero-delay-1 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-body text-background/80 tracking-wide">Над 30 години опит • 50+ корпоративни клиенти</span>
          </div>

          <h1 className="reveal-hero reveal-hero-delay-2 text-4xl md:text-6xl lg:text-7xl font-display font-bold text-background leading-tight mb-6">
            Корпоративно облекло, което{" "}
            <span className="text-gradient-brand">вдъхва доверие</span>
          </h1>

          <p className="reveal-hero reveal-hero-delay-3 text-lg md:text-xl text-background/70 font-body font-light max-w-xl mb-10 leading-relaxed">
            Изработваме елегантни дамски униформи за водещи компании в България и чужбина. Собствено производство с гъвкави условия — от малки до големи серии.
          </p>

          <div className="reveal-hero reveal-hero-delay-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center justify-center gap-3 bg-brand-gradient px-8 py-4 rounded-lg font-body font-semibold text-primary-foreground shadow-brand hover:brightness-110 transition-all duration-300"
            >
              Изпратете запитване
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+359876253203"
              className="inline-flex items-center justify-center gap-3 border border-background/30 px-8 py-4 rounded-lg font-body font-medium text-background hover:bg-background/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              +359 876 253 203
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
