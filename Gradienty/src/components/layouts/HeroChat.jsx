export default function HeroChat({ data, theme }) {
  return (
    <section style={{ display: "flex", padding: "5rem 10%", color: theme.text }}>
      <div style={{ flex: 1, paddingRight: "2rem" }}>
        <h1 style={{ color: theme.primary }}>{data?.title}</h1>
        <p>{data?.subtitle}</p>
        <div style={{ marginTop: "1rem" }}>
          {data.buttons.map((b, i) => (
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
          {data.chatMessages.map((m, i) => (
            <div key={i} className={`chat-message ${m.from}`}>
              <p>{m.text}</p>
            </div>
          ))}

          <div className="contact-card">
            <div className="contact-info">
              <img src={data.contactCard.avatar} alt={data.contactCard.name} />
              <div>
                <h3>{data.contactCard.name}</h3>
                <span>{data.contactCard.location}</span>
              </div>
            </div>
            <div>
              <span>📞 {data.contactCard.phone}</span>
              <span>✉️ {data.contactCard.email}</span>
            </div>
          </div>
        </div>
        <div>{data.tagLine}</div>
      </div>
    </section>
  );
}
