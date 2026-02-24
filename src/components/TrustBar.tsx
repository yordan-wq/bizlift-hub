import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const ref = useScrollReveal();

  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div ref={ref} className="reveal reveal-up">
          <p className="text-center text-sm font-body text-muted-foreground uppercase tracking-[0.2em] mb-8">
            Доверието на водещи компании
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clients.map((client) => (
              <span
                key={client}
                className="text-sm md:text-base font-display font-semibold text-muted-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
