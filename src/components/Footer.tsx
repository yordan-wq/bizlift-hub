const Footer = () => {
  return (
    <footer className="bg-dark-gradient py-12 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xl font-bold text-background tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              ALETA PARIZI
            </div>
            <p className="text-sm font-body text-background/50">
              Корпоративно облекло с традиция от 1993 г.
            </p>
          </div>
          <div className="text-sm font-body text-background/40 text-center md:text-right">
            <p>гр. София, ул. Евлия Челеби 59</p>
            <p>© {new Date().getFullYear()} Алета Паризи. Всички права запазени.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
