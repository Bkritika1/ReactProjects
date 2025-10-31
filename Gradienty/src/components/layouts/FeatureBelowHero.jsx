import styled from "styled-components";
import { motion } from "framer-motion";
import {
  GiDogBowl,
  GiDogHouse,
  GiCat,
  GiHealthPotion,
  GiBoneGnawer,
  GiSittingDog,
} from "react-icons/gi";

const iconMap = {
  dogBowl: <GiDogBowl />,
  house: <GiDogHouse />,
  cat: <GiCat />,
  potion: <GiHealthPotion />,
  bone: <GiBoneGnawer />,
  dog: <GiSittingDog />,
};

const Section = styled.section`
  padding: 80px 8%;
  background: #fffaf4;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2b2b2b;
  margin-bottom: 40px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  margin-bottom: 60px;
`;

const Card = styled(motion.div)`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  height: 320px;
  color: white;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 20px;
  font-weight: 600;
  font-size: 1.2rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scale(1.03);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }

  span {
    position: relative;
    z-index: 2;
  }
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 8rem;
  flex-wrap: wrap;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  img {
    width: 50px;
    height: 50px;
  }

  span {
    font-size: 0.95rem;
    font-weight: 500;
    color: #333;
  }
`;

export default function FeatureBelowHero({ data, theme}) {
  if (!data) return null;

  const { title, features, categories } = data;

  return (
    <Section>
      <Heading>{title}</Heading>

      <FeaturesGrid>
        {features.map((item, i) => (
          <Card
            key={i}
            bg={item.image}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <span>{item.title}</span>
          </Card>
        ))}
      </FeaturesGrid>

      <h3 style={{ marginBottom: "25px", color: "#2b2b2b" }}>
        Product Categories
      </h3>

   <Categories>
  {data?.categories?.map((cat, i) => (
    <Category key={i}>
      <motion.div
        style={{ fontSize: "2.2rem", color: "var(--color-primary)" || "#ff7a00" }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {iconMap[cat.icon]}
      </motion.div>
      <span>{cat.name}</span>
    </Category>
  ))}
</Categories>



    </Section>
  );
}
