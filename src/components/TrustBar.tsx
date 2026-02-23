import { motion } from "framer-motion";

const clients = [
  "Bulgaria Air",
  "GullivAir",
  "BH Air",
  "GP Aviation",
  "Bul Air",
  "International Hotel Varna",
  "Voya Beach Resort",
  "Софийска вода",
  "Vision Clinic",
];

const TrustBar = () => {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-body text-muted-foreground uppercase tracking-[0.2em] mb-8"
        >
          Доверието на водещи компании
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((client, i) => (
            <motion.span
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-sm md:text-base font-display font-semibold text-navy-muted/70 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
