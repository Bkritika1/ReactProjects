export default function HeroCenter({ hero, theme }) {
  return (
    <section className="hero hero-center" style={{ textAlign: "center", color: theme.text }}>
      <h1 style={{ color: theme.primary }} className="fade-in">{hero.title}</h1>
      <p className="fade-in">{hero.subtitle}</p>
      <button style={{ background: `linear-gradient(45deg, ${theme.primary}, #fff)`, color: "#fff" }} className="hero-btn fade-in">{hero.buttonText}</button>
      <img src={hero.image} alt="hero" className="hero-img-center parallax" />
    </section>
  );
}
