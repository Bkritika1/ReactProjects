import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AwesomeFeatures = ({ type, layout, data }) => {
  const {
    backgroundColor,
    heading,
    tags,
    imageSection,
    contentSection,
  } = data;

  return (
    <Section
      as={motion.section}
      style={{ backgroundColor }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Heading>{heading}</Heading>

      <Tags
        as={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <Content>
        <Left
          as={motion.div}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BgBox opacity={imageSection.bgBoxOpacity} />
          <MainImage src={imageSection.mainImage} alt="feature" />
        </Left>

        <Right
          as={motion.div}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>{contentSection.title}</Title>
          <Subtitle>{contentSection.subtitle}</Subtitle>

          <Buttons>
            {contentSection.buttons.map((btn, i) =>
              btn.type === "dark" ? (
                <DarkButton key={i}>{btn.text}</DarkButton>
              ) : (
                <LightButton key={i}>{btn.text}</LightButton>
              )
            )}
          </Buttons>
        </Right>
      </Content>
    </Section>
  );
};

export default AwesomeFeatures;

// Styled Components
const Section = styled.section`
  width: 100%;
  padding: 100px 8%;
  text-align: center;
  border-radius: 40px;
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 30px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wnrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 60px;
`;

const Tag = styled.div`
  background: #fff;
  border: 1px solid #222;
  padding: 8px 16px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #111;
    color: #fff;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  flex-wrap: wrap;
`;

const Left = styled.div`
  position: relative;
  flex: 1;
  min-width: 320px;
`;

const BgBox = styled.div`
  background: rgba(0, 0, 0, ${({ opacity }) => opacity || 0.05});
  border-radius: 20px;
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
`;

const MainImage = styled.img`
  position: relative;
  width: 250px;
  border-radius: 16px;
  z-index: 2;
`;

const Right = styled.div`
  flex: 1;
  text-align: left;
  min-width: 320px;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  color: #333;
  font-size: 1.05rem;
  margin-bottom: 20px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const DarkButton = styled.button`
  background: #111;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;

const LightButton = styled(DarkButton)`
  background: #fff;
  color: #111;
  border: 1px solid #111;
`;

