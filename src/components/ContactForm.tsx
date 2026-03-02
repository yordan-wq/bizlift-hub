import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactForm = () => {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

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

          {/* Right - Google Form */}
          <div ref={rightRef} className="reveal reveal-right">
            <div className="bg-background rounded-2xl border border-border shadow-elegant overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfnxiTI4loQ3-CKiv2-rrqBjyL58oKvYqSc9fknKkH085nsKw/viewform?embedded=true"
                width="100%"
                height="1100"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Форма за запитване"
                className="w-full"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
              >
                Зареждане…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
