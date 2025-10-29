// export default function FeatureGrid({ features, theme }) {
//   return (
//     <section className="features-grid">
//       {features.map((f, i) => (
//         <div key={i} className="feature-card fade-in" style={{ color: theme.text }}>
//           <h3 style={{ color: theme.primary }}>{f.title}</h3>
//           <p>{f.desc}</p>
//         </div>
//       ))}
//     </section>
//   );
// }

// import "../LandingPages.css";


// export default function FeatureGrid({ data }) {
//   return (
//     <section className="features grid-3">
//       {data.map((item, i) => (
//         <div key={i} className="feature-item">
//           <h3>{item.title}</h3>
//           <p>{item.desc}</p>
//         </div>
//       ))}
//     </section>
//   );
// }

// 📁 src/components/layouts/FeaturesGrid3.jsx
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlug,
  faChartLine,
  faGift,
  faShieldHalved,
  faWallet,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  padding: 80px 10%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;

  span {
    color: #7b61ff;
  }
`;

const Subtitle = styled.p`
  color: #555;
  margin-bottom: 3rem;
  font-size: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #7b61ff;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const CardText = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const Button = styled(motion.button)`
  margin-top: 3rem;
  padding: 12px 28px;
  border-radius: 50px;
  background: #7b61ff;
  color: #fff;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #7b61ff;
    border: 2px solid #7b61ff;
  }
`;

export default function FeaturesGrid({ data }) {
  const iconMap = {
    "fa-solid fa-plug": faPlug,
    "fa-solid fa-chart-line": faChartLine,
    "fa-solid fa-gift": faGift,
    "fa-solid fa-shield-halved": faShieldHalved,
    "fa-solid fa-wallet": faWallet,
    "fa-solid fa-user-tie": faUserTie,
  };

  return (
    <Section>
      <Title>
        {data.title.split("Us?")[0]}
        <span>Us?</span>
      </Title>
      <Subtitle>{data.subtitle}</Subtitle>

      <Grid>
        {data.items.map((item, index) => (
          <Card
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Icon>
              <FontAwesomeIcon icon={iconMap[item.icon]} />
            </Icon>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.desc}</CardText>
          </Card>
        ))}
      </Grid>

      <Button whileHover={{ scale: 1.05 }}>{data.buttonText}</Button>
    </Section>
  );
}
