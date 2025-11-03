import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  background: #fdf8f5;
  text-align: center;
  padding: 5rem 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    color: #666;
    max-width: 600px;
    margin: 0.8rem auto 3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    justify-content: center;
  }

  .feature-card {
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.05);
    text-align: left;

    img {
      width: 100%;
      height: 240px;
      object-fit: cover;
    }

    .content {
      padding: 1.5rem;
    }

    h3 {
      font-size: 1.1rem;
      color: #111;
    }

    p {
      color: #555;
      font-size: 0.9rem;
      margin-top: 0.4rem;
    }
  }
`;

export const FlowbloxFeatures = ({ data }) => {
  const { heading, subtext, cards } = data;
  return (
    <Section>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {heading}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {subtext}
      </motion.p>

      <div className="grid">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <img src={card.image} alt={card.label} />
            <div className="content">
              <h3>{card.label}</h3>
              <p>{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
