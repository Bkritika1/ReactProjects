import React from "react";
import styled from "styled-components";

const HeroSection = ({ data }) => {
  if (!data) return null;

  const { tagline, title, description, buttonText, stats, products, petsImage } =
    data;

  return (
    <HeroContainer>
      <HeroContent>
        <LeftSection>
          <Tagline>{tagline}</Tagline>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Button>{buttonText}</Button>

          <ProductsRow>
            {products?.map((item) => (
              <ProductCard key={item.id}>
                <img src={item.img} alt={item.name} />
                <ProductInfo>
                  <Price>{item.price}</Price>
                  <AddToCart>+ Add to cart</AddToCart>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductsRow>
        </LeftSection>

        <RightSection>
          <CircleBg />
          <PetsImage src={petsImage} alt="Dog and Cat" />
          <FoodBadge>
            <strong>{stats.count}</strong>
            <span>{stats.label}</span>
          </FoodBadge>
          <OffersBadge>Offers! Get Tips & Treats →</OffersBadge>
        </RightSection>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

/* 🌈 Styled Components */
const HeroContainer = styled.section`
  background: var(--color-secondary);
  border-radius:20px;
//   padding: 80px 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

const LeftSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Tagline = styled.p`
  font-weight: 600;
  color: #fff;
  opacity: 0.9;
  margin-bottom: 12px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 15px;
  text-align : start;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #fff;
  opacity: 0.9;
  margin-bottom: 24px;
  max-width: 400px;
`;

const Button = styled.button`
  background: #b83227;
  border: none;
  color: #fff;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #a1281d;
  }
`;

const ProductsRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 10px;
  width: 120px;
  text-align: start;
  color: #333;
  position: relative;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`;

const ProductInfo = styled.div`
  margin-top: 8px;
`;

const Price = styled.span`
  display: block;
  font-weight: 700;
  color: #222;
`;

const AddToCart = styled.button`
  background: #222;
  color: #fff;
  font-size: 0.8rem;
  padding: 5px 8px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 4px;

  &:hover {
    background: #444;
  }
`;

const RightSection = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
`;

const CircleBg = styled.div`
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, #ff922b 0%, #ff6b00 90%);
  border-radius: 50%;
  position: absolute;
  z-index: 0;
`;

const PetsImage = styled.img`
  width: 320px;
  height: auto;
  z-index: 1;
  position: relative;
`;

const FoodBadge = styled.div`
  position: absolute;
  top: 15%;
  right: 10%;
  background: #fff;
  color: #333;
  border-radius: 40px;
  padding: 8px 14px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;

  strong {
    color: #ff6b00;
    font-weight: 700;
  }
`;

const OffersBadge = styled.div`
  position: absolute;
  bottom: 15%;
  left: 10%;
  background: #fff;
  color: #333;
  font-weight: 600;
  padding: 12px 20px;
  border-radius: 40px;
  transform: rotate(-15deg);
  z-index: 2;
`;
