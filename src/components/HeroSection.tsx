import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-navy-gradient overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Елегантна дамска бизнес униформа"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-body text-gold-light tracking-wide">Над 30 години опит • 50+ корпоративни клиенти</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
          >
            Корпоративно облекло, което{" "}
            <span className="text-gradient-gold">вдъхва доверие</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gold-light/80 font-body font-light max-w-xl mb-10 leading-relaxed"
          >
            Изработваме елегантни дамски униформи за водещи компании в България и чужбина. Собствено производство с гъвкави условия — от малки до големи серии.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center justify-center gap-3 bg-gold-gradient px-8 py-4 rounded-lg font-body font-semibold text-accent-foreground shadow-gold hover:brightness-110 transition-all duration-300"
            >
              Изпратете запитване
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+359876253203"
              className="inline-flex items-center justify-center gap-3 border border-gold/30 px-8 py-4 rounded-lg font-body font-medium text-gold-light hover:bg-gold/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              +359 876 253 203
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
