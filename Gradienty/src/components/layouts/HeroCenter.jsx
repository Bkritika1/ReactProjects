// export default function HeroCenter({ hero, theme }) {
//   return (
//     <section className="hero hero-center" style={{ textAlign: "center", color: theme.text }}>
//       <h1 style={{ color: theme.primary }} className="fade-in">{hero?.data?.title}</h1>
//       <p className="fade-in">{hero?.data?.subtitle}</p>
//       <button style={{ background: `linear-gradient(45deg, ${theme.primary}, #fff)`, color: "#fff" }} className="hero-btn fade-in">{hero?.data?.buttonText}</button>
//       <img src={hero?.data?.image} alt="hero" className="hero-img-center parallax" />
//     </section>
//   );
// }


export default function HeroCenter({ data, theme }) {
  return (
    <section
      className="hero hero-center"
      style={{
        color: theme?.text,
        background: theme?.bg
      }}
    >
      <div className="hero-content">
        <h1 style={{ color: theme?.primary }}>{data?.title}</h1>
        <p>{data?.subtitle}</p>
        <button
          style={{
            background: `linear-gradient(45deg, ${theme?.primary}, #fff)`,
            color: theme?.text,
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer"
          }}
        >
          {data?.buttonText || "Learn More"}
        </button>
      </div>
    </section>
  );
}
