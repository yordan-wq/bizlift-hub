import { motion } from "framer-motion";
import { Plane, Building2, Briefcase } from "lucide-react";
import airlineImg from "@/assets/airline-uniform.jpg";
import hotelImg from "@/assets/hotel-uniform.jpg";
import corporateImg from "@/assets/corporate-uniform.jpg";

const sectors = [
  {
    icon: Plane,
    title: "Авиокомпании",
    clients: "Bulgaria Air, GullivAir, BH Air, GP Aviation, Bul Air",
    image: airlineImg,
    alt: "Стюардеса в елегантна авиационна униформа",
  },
  {
    icon: Building2,
    title: "Хотели и Курорти",
    clients: "International Hotel Varna, Voya Beach Resort и др.",
    image: hotelImg,
    alt: "Рецепционистка в хотелска униформа",
  },
  {
    icon: Briefcase,
    title: "Корпорации и Институции",
    clients: "Софийска вода, Vision Clinic и др.",
    image: corporateImg,
    alt: "Служителка в корпоративна униформа",
  },
];

const SectorsSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Работим с компании от{" "}
            <span className="text-gradient-brand">различни сектори</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            От авиация до хотелиерство — създаваме облекло, което представя бранда ви с професионализъм.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              onClick={scrollToForm}
              className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <sector.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">{sector.title}</h3>
                </div>
                <p className="text-sm font-body text-muted-foreground">{sector.clients}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
