export default function HeroChat({ hero, theme }) {
  return (
    <section style={{ display: "flex", padding: "5rem 10%", color: theme.text }}>
      <div style={{ flex: 1, paddingRight: "2rem" }}>
        <h1 style={{ color: theme.primary }}>{hero.title}</h1>
        <p>{hero.subtitle}</p>
        <div style={{ marginTop: "1rem" }}>
          {hero.buttons.map((b, i) => (
            <button
              key={i}
              style={{
                marginRight: "1rem",
                padding: "0.8rem 1.5rem",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                background: b.type === "primary" ? theme.primary : "#eee",
                color: b.type === "primary" ? "#fff" : theme.text,
              }}
            >
              {b.text}
            </button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <div className="chat-card">
          {hero.chatMessages.map((m, i) => (
            <div key={i} className={`chat-message ${m.from}`}>
              <p>{m.text}</p>
            </div>
          ))}

          <div className="contact-card">
            <div className="contact-info">
              <img src={hero.contactCard.avatar} alt={hero.contactCard.name} />
              <div>
                <h3>{hero.contactCard.name}</h3>
                <span>{hero.contactCard.location}</span>
              </div>
            </div>
            <div>
              <span>📞 {hero.contactCard.phone}</span>
              <span>✉️ {hero.contactCard.email}</span>
            </div>
          </div>
        </div>
        <div>{hero.tagLine}</div>
      </div>
    </section>
  );
}
