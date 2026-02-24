import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      quantity: formData.get("quantity") as string,
      message: formData.get("message") as string,
    };

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: payload,
      });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Запитването е изпратено!",
        description: "Ще се свържем с вас до 24 часа.",
      });
    } catch (err) {
      console.error("Error sending email:", err);
      toast({
        title: "Грешка при изпращане",
        description: "Моля, опитайте отново или се свържете по телефона.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-card scroll-mt-8">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div ref={leftRef} className="reveal reveal-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Изпратете <span className="text-gradient-brand">запитване</span>
            </h2>
            <p className="text-muted-foreground font-body mb-10 leading-relaxed">
              Свържете се с нас за безплатна консултация и оферта. Ще отговорим до 24 часа.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-body font-semibold text-foreground">Адрес</div>
                  <div className="text-sm text-muted-foreground">гр. София, ул. Евлия Челеби 59</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-body font-semibold text-foreground">Телефон</div>
                  <a href="tel:+359876253203" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +359 876 253 203
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-body font-semibold text-foreground">Email</div>
                  <a href="mailto:office@aleta-parizi.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    office@aleta-parizi.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-body font-semibold text-foreground">Работно време</div>
                  <div className="text-sm text-muted-foreground">Пон – Пет: 10:00 – 17:00</div>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary border border-border">
              <Shield className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-body text-muted-foreground">
                Вашите данни са защитени и се използват само за обработка на запитването.
              </span>
            </div>
          </div>

          {/* Right - Form */}
          <div ref={rightRef} className="reveal reveal-right">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center bg-secondary rounded-2xl p-12">
                <CheckCircle2 className="w-16 h-16 text-primary mb-6" />
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
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Вашето име"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">Компания *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Име на компанията"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">Телефон</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="+359 ..."
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-body font-medium text-foreground mb-2">Брой униформи (приблизително)</label>
                  <select name="quantity" className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
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
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-card font-body text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    placeholder="Опишете вашите нужди..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-gradient px-8 py-4 rounded-lg font-body font-semibold text-primary-foreground shadow-brand hover:brightness-110 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
