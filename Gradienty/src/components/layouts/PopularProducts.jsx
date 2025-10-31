// src/components/layouts/PopularProducts.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Section = styled.section` background:#f9faf8; padding:60px 8%; text-align:center; `;
const Header = styled.div` margin-bottom:34px; `;
const Tag = styled.span` display:inline-block; font-size:13px; padding:6px 14px; border-radius:30px; background:#fff3f3; color:#e95d5d; font-weight:700; `;
const Title = styled.h2` margin:12px 0 0; font-size:2rem; color:#111; `;

const Grid = styled.div`
  display:grid; grid-template-columns:repeat(auto-fit, minmax(220px,1fr)); gap:26px; margin-top:18px;
`;

const Card = styled(motion.div)`
  background:#fff; border:1.5px solid #e6e6e6; border-radius:14px; padding:18px; display:flex; flex-direction:column; justify-content:space-between;
`;

const ImgWrap = styled.div` height:170px; display:flex; align-items:center; justify-content:center; img{ height:100%; object-fit:contain; } `;

const Name = styled.h4` font-size:1rem; margin:10px 0 6px; font-weight:700; color:#222; `;
const Rating = styled.div` display:flex; align-items:center; gap:6px; color:#444; svg{ color:#f5b400; } `;
const Price = styled.div` margin-top:8px; font-weight:700; font-size:1rem; `;
const Old = styled.span` margin-left:8px; text-decoration:line-through; color:#999; font-weight:500; font-size:0.92rem; `;

const CTA = styled.button`
  margin-top:14px; padding:10px 14px; border-radius:10px; font-weight:700; width:100%;
  ${({primary})=> primary? `background:#e95d5d; color:white; border:none;` : `background:transparent; border:1.2px solid #ddd; color:#222;`}
`;

export default function PopularProducts({ data, theme }) {
  if (!data) return null;
  return (
    <Section>
      <Header>
        <Tag>{data.tagline}</Tag>
        <Title>{data.title}</Title>
      </Header>

      <Grid>
        {data.products.map((p, i)=>(
          <Card key={i} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }}>
            <ImgWrap><img src={p.image} alt={p.name} /></ImgWrap>
            <div>
              <Name>{p.name}</Name>
              <Rating><FaStar /> {p.rating}</Rating>
              <Price>${p.price} <Old>${p.oldPrice}</Old></Price>
            </div>
            <CTA primary={i===0}>{i===0 ? "Add to cart" : "Add to cart"}</CTA>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
