import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FeatureShopify = ({ data }) => {
  return (
    <Section>
      {data.map((item, index) => (
        <Card
          key={index}
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          style={{
            backgroundColor: item.bgColor,
            color: item.textColor,
          }}
        >
          <TextContent>
            <Step>{item.step}</Step>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </TextContent>

          <ImageWrapper>
            <img src={item.image} alt={item.title} />
          </ImageWrapper>
        </Card>
      ))}
    </Section>
  );
};

export default FeatureShopify;

// 🪄 Styled Components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 100px 10%;
  background: #fff;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 32px;
  padding: 80px 100px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 40px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 480px;
`;

const Step = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  img {
    width: 420px;
    border-radius: 16px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;
