import React from "react";
import "../LandingPages.css";

export default function HeroModern({ data }) {
  return (
    <section className="hero-modern">
      <div className="hero-left">
        <p className="tagline">{data.tagLine}</p>
        <h1>{data.title}</h1>
        <p className="subtitle">{data.subtitle}</p>
        <div className="hero-buttons">
          {data.buttons.map((btn, i) => (
            <button key={i} className={`btn-${btn.type}`}>
              {btn.text}
            </button>
          ))}
        </div>
      </div>

      <div className="hero-right">
        <div className="chat-box">
          {data.chatMessages.map((msg, i) => (
            <div
              key={i}
              className={`chat-msg ${msg.from === "user" ? "user" : "bot"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="contact-card">
          <img src={data.contactCard.avatar} alt={data.contactCard.name} />
          <div>
            <h4>{data.contactCard.name}</h4>
            <p>{data.contactCard.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
