import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function HeroShopify({ data }) {
  if (!data) return null;

  const {
    tagline,
    title,
    description,
    ctaButtons,
    stats,
    heroImage,
  } = data;

  return (
    <HeroContainer>
      <TextContent>
        <Tagline>{tagline}</Tagline>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <ButtonGroup>
          {ctaButtons.map((btn, i) => (
            <HeroBtn key={i} primary={btn.primary}>
              {btn.text}
            </HeroBtn>
          ))}
        </ButtonGroup>
      </TextContent>

      <HeroVisual>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroImage src={heroImage} alt="Hero visual" />
        </motion.div>

        <FloatingTag
          as={motion.div}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {stats}
        </FloatingTag>
      </HeroVisual>
    </HeroContainer>
  );
}

// 🎨 Styled Components
const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 10%;
  background: #fdfdfd;
`;

const TextContent = styled.div`
  max-width: 700px;
  margin-bottom: 60px;
`;

const Tagline = styled.p`
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #666;
  background: #f6f6f6;
  padding: 6px 12px;
  display: inline-block;
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #111;
  line-height: 1.2;
  margin: 25px 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const HeroBtn = styled.button`
  background: ${({ primary }) => (primary ? "#000" : "transparent")};
  color: ${({ primary }) => (primary ? "#fff" : "#000")};
  border: ${({ primary }) => (primary ? "none" : "1.5px solid #ccc")};
  padding: 12px 22px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const HeroVisual = styled.div`
  position: relative;
  width: 100%;
  max-width: 820px;
`;

const HeroImage = styled.img`
  width: 100%;
  border-radius: 16px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.1);
`;

const FloatingTag = styled.div`
  position: absolute;
  top: 20%;
  left: -40px;
  background: #fff799;
  color: #111;
  padding: 12px 18px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

