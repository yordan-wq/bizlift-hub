import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Запитването е изпратено!",
        description: "Ще се свържем с вас до 24 часа.",
      });
    }, 1500);
  };

  return (
    <section id="contact-form" className="py-24 bg-card scroll-mt-8">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Изпратете <span className="text-gradient-gold">запитване</span>
            </h2>
            <p className="text-muted-foreground font-body mb-10 leading-relaxed">
              Свържете се с нас за безплатна консултация и оферта. Ще отговорим до 24 часа.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-body font-semibold text-foreground">Адрес</div>
                  <div className="text-sm text-muted-foreground">гр. София, ул. Евлия Челеби 59</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-body font-semibold text-foreground">Телефон</div>
                  <a href="tel:+359876253203" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    +359 876 253 203
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-body font-semibold text-foreground">Email</div>
                  <a href="mailto:office@aleta-parizi.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    office@aleta-parizi.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-body font-semibold text-foreground">Работно време</div>
                  <div className="text-sm text-muted-foreground">Пон – Пет: 10:00 – 17:00</div>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
              <Shield className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm font-body text-muted-foreground">
                Вашите данни са защитени и се използват само за обработка на запитването.
              </span>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center bg-secondary/30 rounded-2xl p-12">
                <CheckCircle2 className="w-16 h-16 text-accent mb-6" />
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">Благодарим ви!</h3>
                <p className="text-muted-foreground font-body">
                  Ще се свържем с вас до 24 часа с персонализирана оферта.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-background rounded-2xl border border-border p-8 shadow-elegant">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">Име *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                      placeholder="Вашето име"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">Компания *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                      placeholder="Име на компанията"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">Телефон</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                      placeholder="+359 ..."
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-body font-medium text-foreground mb-2">Брой униформи (приблизително)</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all">
                    <option value="">Изберете</option>
                    <option>10 – 50 бройки</option>
                    <option>50 – 200 бройки</option>
                    <option>200 – 500 бройки</option>
                    <option>500+ бройки</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-body font-medium text-foreground mb-2">Съобщение</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                    placeholder="Опишете вашите нужди..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-gradient px-8 py-4 rounded-lg font-body font-semibold text-accent-foreground shadow-gold hover:brightness-110 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>Изпращане...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Изпратете запитване
                    </>
                  )}
                </button>
                <p className="text-xs text-muted-foreground font-body text-center mt-4">
                  Ще отговорим до 24 часа • Безплатна консултация
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
