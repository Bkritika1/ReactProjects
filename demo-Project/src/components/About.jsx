// src/components/portfolio/About.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 80px 120px;
  display: flex;
  gap: 40px;
  align-items: center;
  background: white;
  @media (max-width: 768px) { padding: 40px 20px; flex-direction: column; }
`;

const Left = styled.div` flex: 1; `;
const Right = styled.div` flex: 1; `;

const Title = styled.h2` font-size: 2.2rem; margin-bottom: 16px; `;
const Desc = styled.p` color: #555; line-height: 1.6; `;

const Stats = styled.div`
  display:flex;
  gap:16px;
  margin-top:20px;
  flex-wrap:wrap;
`;
const StatCard = styled.div`
  background: #f6f7fb;
  padding: 14px 18px;
  border-radius: 10px;
  min-width: 140px;
  text-align:center;
`;

const About = ({ data }) => {
  if (!data) return null;
  return (
    <Section>
      <Left>
        <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }}>
          <Title>{data.title}</Title>
          <Desc>{data.description}</Desc>

          <Stats>
            {data.highlights?.map((h, i) => (
              <StatCard key={i}>
                <strong>{h}</strong>
              </StatCard>
            ))}
          </Stats>
        </motion.div>
      </Left>

      <Right>
        <motion.img
          src={data.image || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800"}
          alt="about"
          style={{ width: "100%", borderRadius: 14, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
      </Right>
    </Section>
  );
};

export default About;
