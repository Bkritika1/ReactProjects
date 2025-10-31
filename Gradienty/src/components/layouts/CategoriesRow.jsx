// src/components/layouts/CategoriesRow.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GiDogBowl, GiBoneGnawer, GiDogHouse, GiHealthPotion, GiSittingDog, GiCat } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

const iconMap = {
  dogBowl: <GiDogBowl />,
  bone: <GiBoneGnawer />,
  house: <GiDogHouse />,
  potion: <GiHealthPotion />,
  dog: <GiSittingDog />,
  cat: <GiCat />
};

const Wrapper = styled.div`
  display:flex; justify-content:center; gap:16px; flex-wrap:wrap; padding:20px 8%;
`;

const Item = styled(motion.div)`
  display:flex; align-items:center; gap:12px; padding:12px 18px; border-radius:12px;
  background:#fff; box-shadow:0 8px 24px rgba(12,15,20,0.06); cursor:pointer; transition:.2s;
  &:hover{ transform: translateY(-4px); }
`;

const Label = styled.div` font-weight:700; color:#222; `;

const ArrowWrap = styled.div` color:#777; margin-left:6px; display:flex; align-items:center; `;

export default function CategoriesRow({ data, theme }) {
  return (
    <Wrapper>
      {data.map((c,i)=>(
        <Item key={i} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 260 }}>
          <div style={{fontSize:22, color: theme?.primary || "#ff7a00"}}>{iconMap[c.icon]}</div>
          <Label>{c.name}</Label>
          <ArrowWrap><FaArrowRight /></ArrowWrap>
        </Item>
      ))}
    </Wrapper>
  );
}
