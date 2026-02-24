import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
    role: "Управител",
    stars: 5,
  },
  {
    text: "Гъвкавите условия за малки серии бяха решаващи за нас. Получихме отлично качество на конкурентна цена.",
    author: "Десислава Георгиева",
    role: "Директор",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="py-24 bg-dark-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className="reveal reveal-up text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-background mb-4">
            Какво казват нашите <span className="text-gradient-brand">клиенти</span>
          </h2>
          <p className="text-background/60 font-body max-w-2xl mx-auto">
            Доверието се гради с години — ето защо клиентите ни остават с нас.
          </p>
        </div>

        <div ref={gridRef} className="reveal reveal-up grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-8 hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-background/80 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <div className="font-body font-semibold text-background">{t.author}</div>
                <div className="text-sm font-body text-background/50">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
