// 📁 src/components/landing/InfoSection.jsx
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
//   padding: 80px 10%;
  gap: 13rem;
  background: ${({ theme }) => theme?.bg || "#fafbff"};
  flex-wrap: wrap;
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  text-align: center;

  img {
    width: 100%;
    max-width: 420px;
    border-radius: 20px;
  }
`;

const Content = styled(motion.div)`
  flex: 1;
  min-width: 320px;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: ${({ theme }) => theme?.text || "#1a1a1a"};
  margin-bottom: 10px;
  span {
    color: ${({ theme }) => theme?.primary || "#ff5a5f"};
  }
`;

const Subtitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme?.secondary || "#7b61ff"};
  margin-bottom: 12px;
`;

const Paragraph = styled.p`
  color: #444;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const Button = styled(motion.button)`
  padding: 12px 28px;
   border-radius: 8px;
  border: 2px solid ${({ theme }) => theme?.primary || "#7b61ff"};
  background: ${({ theme }) => theme?.primary || "#7b61ff"};
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: ${({ theme }) => theme?.primary || "#7b61ff"};
    transform: translateY(-3px);
  }
`;

export default function InfoSection({ data, theme }) {
  const {
    subtitle = "Learn More About",
    highlight = "Lootably",
    paragraph = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    buttonText = "Learn More",
    image,
  } = data || {};

  return (
    <Section theme={theme}>
      <ImageWrapper
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={image} alt={highlight || "illustration"} />
      </ImageWrapper>

      <Content
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        theme={theme}
      >
        <Subtitle theme={theme}>{subtitle}</Subtitle>
        <Title theme={theme}>
          {subtitle} <span>{highlight}</span>
        </Title>
        <Paragraph>{paragraph}</Paragraph>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          theme={theme}
        >
          {buttonText}
        </Button>
      </Content>
    </Section>
  );
}
