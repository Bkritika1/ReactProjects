import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function FeatureProduct({ data }) {
     if (!data) return null;
  const { tagline, title, products } = data;

  return (
    <Section>
      <Header>
        <Tagline>{tagline}</Tagline>
        <Title>{title}</Title>
      </Header>

      <ProductsGrid>
      {products.map((product, index) => (
  <ProductCard
    key={index}
    as={motion.div}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 200 }}
  >
    <ImageContainer>
      <img src={product.image} alt={product.name} />
    </ImageContainer>
    <ProductInfo>
      <ProductName>{product.name}</ProductName>
      <Rating>
        <FaStar /> {product.rating}
      </Rating>
      <Price>
        ${product.price} <OldPrice>${product.oldPrice}</OldPrice>
      </Price>
    </ProductInfo>
    <ButtonContainer>
      <AddToCartBtn primary={index === 0}>Add to cart</AddToCartBtn>
    </ButtonContainer>
  </ProductCard>
))}

      </ProductsGrid>
    </Section>
  );
};



// 🩶 Styled Components
const Section = styled.section`
  background: #f9faf8;
  padding: 60px 8%;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const Tagline = styled.span`
  display: inline-block;
  font-size: 14px;
  color: #e95d5d;
  font-weight: 600;
  background: #fff3f3;
  padding: 6px 14px;
  border-radius: 30px;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #222;
  margin-top: 10px;
  font-weight: 700;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 30px;
  justify-content: center;
`;

const ProductCard = styled.div`
  background: #fff;
  border: 1.5px solid #e2e2e2;
  border-radius: 20px;
  padding: 20px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
    object-fit: contain;
  }
`;

const ProductInfo = styled.div`
  text-align: left;
  margin-top: 10px;
`;

const ProductName = styled.h4`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
  font-weight: 600;
`;

const Rating = styled.p`
  font-size: 0.9rem;
  color: #444;
  display: flex;
  align-items: center;
  gap: 4px;
  svg {
    color: #f5b400;
  }
`;

const Price = styled.p`
  font-size: 1rem;
  color: #111;
  font-weight: 600;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 0.9rem;
  margin-left: 8px;
`;

const ButtonContainer = styled.div`
  margin-top: 15px;
`;

const AddToCartBtn = styled.button`
  background: ${(props) => (props.primary ? "#e95d5d" : "transparent")};
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  border: ${(props) => (props.primary ? "none" : "1.5px solid #ccc")};
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s ease;
  width: 100%;

  &:hover {
    background: ${(props) => (props.primary ? "#d94b4b" : "#f6f6f6")};
  }
`;
