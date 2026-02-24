import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import showcaseImage from "@/assets/products-showcase.jpg";

const benefits = [
"Индивидуален дизайн, съобразен с бранда на вашата компания",
"Висококачествени материали от водещи европейски доставчици",
"Собствено производство в София — бързи срокове и контрол на качеството",
"Гъвкави серии — от 10 до 10 000 бройки",
"Безплатна консултация и предложение за дизайн",
"Доставка в цяла България и чужбина"];


const WhyUsSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative">

            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img

                alt="Три модела корпоративни дамски униформи"
                className="w-full h-auto"
                loading="lazy" src="/lovable-uploads/1257f622-c4f3-470a-93af-4d6d763fa1fb.webp" />

            </div>
            {/* Floating trust badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-gradient rounded-xl p-5 shadow-brand">
              <div className="text-2xl font-display font-bold text-primary-foreground">30+</div>
              <div className="text-xs font-body text-primary-foreground/80">години опит</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Защо да изберете{" "}
              <span className="text-gradient-brand">ALETA PARIZI?</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Специализираме в дизайн и производство на корпоративни униформи, костюми, сака, ризи и аксесоари за водещи компании.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, i) =>
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3">

                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground">{benefit}</span>
                </motion.li>
              )}
            </ul>

            <button
              onClick={scrollToForm}
              className="bg-brand-gradient px-8 py-4 rounded-lg font-body font-semibold text-primary-foreground shadow-brand hover:brightness-110 transition-all">

              Получете безплатна оферта
            </button>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default WhyUsSection;