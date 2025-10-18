export default function HeroLeft({ hero, theme }) {
  return (
    <section className="hero hero-left" style={{ color: theme.text }}>
      <div className="hero-content">
        <h1 style={{ color: theme.primary }} className="fade-in">{hero.title}</h1>
        <p className="fade-in">{hero.subtitle}</p>
        <button style={{ background: `linear-gradient(45deg, ${theme.primary}, #fff)`, color: "#fff" }} className="hero-btn fade-in">{hero.buttonText}</button>
      </div>
      <img src={hero.image} alt="hero" className="hero-img parallax" />
    </section>
  );
}
