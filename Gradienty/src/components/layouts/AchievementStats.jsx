import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 100px 8%;
  background: #fff;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.3rem;
  font-weight: 700;
  color: #1b1b1b;
  margin-bottom: 10px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 25px;
`;

const Badge = styled.div`
  display: inline-block;
  background: #000;
  color: white;
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.85rem;
  margin-bottom: 35px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
  margin-top: 40px;
`;

const StatCard = styled(motion.div)`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 35px 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const Value = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #111;
`;

const Label = styled.p`
  font-size: 0.95rem;
  color: #666;
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 1.2rem;
  background: ${(p) => p.bg || "#eee"};
`;

export default function AchievementStats({ data }) {
  const { title, subtitle, badgeText, stats } = data;

  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge>{badgeText}</Badge>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </motion.div>

      <StatsGrid>
        {stats.map((stat, i) => (
          <StatCard
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            <Icon bg={stat.bg}>{stat.icon}</Icon>
            <Value>{stat.value}</Value>
            <Label>{stat.label}</Label>
          </StatCard>
        ))}
      </StatsGrid>
    </Section>
  );
}
