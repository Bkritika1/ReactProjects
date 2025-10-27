// export default function HeroLeft({ data, theme }) {
//   return (
//     <section className="hero hero-left" style={{ color: theme.text }}>
//       <div className="hero-content">
//         <h1 style={{ color: theme.primary }} className="fade-in">{data.title}</h1>
//         <p className="fade-in">{data.subtitle}</p>
//         <button style={{ background: `linear-gradient(45deg, ${theme.primary}, #fff)`, color: "#fff" }} className="hero-btn fade-in">{data.buttonText}</button>
//       </div>
//       <img src={data.image} alt="hero" className="hero-img parallax" />
//     </section>
//   );
// }


import { motion } from "framer-motion";
// import "../../styles/hero/hero-left.css";

export default function HeroLeft({ data, theme }) {
  return (
    <motion.section
      className="hero-left"
      style={{ color: theme.text }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="hero-content">
        <h1 style={{ color: theme.primary }}>{data.title}</h1>
        <p>{data.subtitle}</p>
        <button
          className="hero-btn"
          style={{
            background: `linear-gradient(45deg, ${theme.primary}, #fff)`,
            color: "#fff",
          }}
        >
          {data.buttonText}
        </button>
      </div>
      <img src={data.image} alt="hero" className="hero-img" />
    </motion.section>
  );
}
