// 📁 src/components/layouts/MonetizationSection.jsx
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  background: #fafbff;
  padding: 100px 8%;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #1a1a1a;
  margin-bottom: 10px;
  span {
    color: #ff5a5f;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 60px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  text-align: left;
  background: transparent;
  position: relative;
  padding: 20px;

  h3 {
    color: #6a4cff;
    margin-bottom: 10px;
  }
  p {
    color: #444;
    font-size: 0.95rem;
    margin-bottom: 15px;
  }
  a {
    color: #6a4cff;
    font-weight: 600;
    text-decoration: none;
  }
`;

const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    max-width: 420px;
    border-radius: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

const Blob = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
//   filter: blur(100px);
//   background: ${(props) => props.color};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 0;
`;

export default function FeatureShowcase({ data }) {
  return (
    <Section>
      {/* Floating gradient blobs */}
      <Blob color="#ffb3ba" top="10%" left="80%" />
      <Blob color="#baffc9" top="60%" left="-5%" />
      <Blob color="#bae1ff" top="80%" left="70%" />

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <Title>
          Meet our Rewarding Monetization <span>Solutions</span>
        </Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor.
        </Subtitle>
      </motion.div>

      <Grid>
        {data.map((item, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href="#">{item.link}</a>
          </Card>
        ))}

        <ImageWrapper
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={data[0]?.image} alt="MacBook Mockup" />
        </ImageWrapper>
      </Grid>
    </Section>
  );
}
