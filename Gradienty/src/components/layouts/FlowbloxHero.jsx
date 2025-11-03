import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroWrapper = styled.section`
  text-align: center;
  padding: 5rem 2rem 6rem;
  background: #fdf8f5;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: #111;
    line-height: 1.2;
  }

  p {
    color: #555;
    margin: 1rem auto 2rem;
    max-width: 600px;
  }

  button {
    background: #111;
    color: #fff;
    padding: 0.9rem 1.8rem;
    border: none;
    border-radius: 40px;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 3rem;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.85;
    }
  }

  .cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
    flex-wrap: wrap;
  }

  .card {
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.4s ease;
    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      height: 220px;
      object-fit: cover;
    }

    .content {
      padding: 1.5rem;
    }

    h3 {
      font-size: 1.2rem;
      color: #111;
    }

    p {
      font-size: 0.9rem;
      color: #666;
      margin-top: 0.4rem;
    }
  }
`;

export const FlowbloxHero = ({ data }) => {
  const { titleLine1, titleLine2, description, ctaButton, cards } = data;

  return (
    <HeroWrapper>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {titleLine1} <br /> {titleLine2}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {description}
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {ctaButton.text}
      </motion.button>

      <div className="cards">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img src={card.image} alt={card.title} />
            <div className="content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </HeroWrapper>
  );
};
