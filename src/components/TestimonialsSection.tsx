import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Работим с Алета Паризи от над 10 години. Качеството на униформите е безупречно, а екипът ни винаги получава комплименти за визията си.",
    author: "Мария Иванова",
    role: "HR Мениджър",
    stars: 5,
  },
  {
    text: "Професионален подход от първата среща до доставката. Успяха да предложат дизайн, който перфектно отразява бранда ни.",
    author: "Елена Петрова",
    role: "Управител, International Hotel Varna",
    stars: 5,
  },
  {
    text: "Гъвкавите условия за малки серии бяха решаващи за нас. Получихме отлично качество на конкурентна цена.",
    author: "Десислава Георгиева",
    role: "Директор, Vision Clinic",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-navy-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-light mb-4">
            Какво казват нашите <span className="text-gradient-gold">клиенти</span>
          </h2>
          <p className="text-gold-light/60 font-body max-w-2xl mx-auto">
            Доверието се гради с години — ето защо клиентите ни остават с нас.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-navy-light/50 backdrop-blur-sm border border-gold/10 rounded-2xl p-8 hover:border-gold/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-gold-light/80 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <div className="font-body font-semibold text-gold-light">{t.author}</div>
                <div className="text-sm font-body text-gold-light/50">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
