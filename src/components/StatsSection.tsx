import { motion } from "framer-motion";
import { Shield, Award, Factory, Users } from "lucide-react";

const stats = [
  { icon: Award, number: "30+", label: "години опит", desc: "в бизнес облеклото" },
  { icon: Users, number: "50+", label: "корпоративни клиента", desc: "в България и чужбина" },
  { icon: Factory, number: "100%", label: "собствено производство", desc: "в София" },
  { icon: Shield, number: "∞", label: "гъвкави условия", desc: "от 10 до 10 000 бройки" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-4 group-hover:bg-gold/20 transition-colors">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-body font-semibold text-foreground uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-xs font-body text-muted-foreground mt-1">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
