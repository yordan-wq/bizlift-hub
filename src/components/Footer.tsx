const Footer = () => {
  return (
    <footer className="bg-navy-gradient py-12 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-xl font-bold text-gold-light tracking-wider mb-2">
              ALETA PARIZI
            </div>
            <p className="text-sm font-body text-gold-light/50">
              Корпоративно облекло с традиция от 1993 г.
            </p>
          </div>
          <div className="text-sm font-body text-gold-light/40 text-center md:text-right">
            <p>гр. София, ул. Евлия Челеби 59</p>
            <p>© {new Date().getFullYear()} Алета Паризи. Всички права запазени.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
