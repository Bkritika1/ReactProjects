// src/components/layouts/SubscribeBox.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section` padding:60px 8%; display:flex; justify-content:center; background:transparent; `;
const Box = styled(motion.div)` background: ${({bg})=>bg||"#a8d1ff"}; padding:44px; border-radius:16px; width:100%; max-width:920px; box-shadow:0 30px 80px rgba(12,15,20,0.08); display:flex; align-items:center; gap:28px; flex-wrap:wrap; `;
const Left = styled.div` flex:1; min-width:260px; `;
const Right = styled.div` min-width:280px; display:flex; align-items:center; gap:12px; `;
const Title = styled.h3` margin:0 0 8px; font-size:1.6rem; color:#07263b; `;
const Desc = styled.p` margin:0; color:#06304a; `;
const Input = styled.input` padding:12px 14px; border-radius:10px; border:none; width:100%; max-width:420px; `;
const Btn = styled.button` padding:12px 18px; border-radius:10px; background:#e95d5d; color:#fff; border:none; font-weight:800; cursor:pointer; `;

export default function SubscribeBox({ data, theme }) {
  if (!data) return null;
  return (
    <Section>
      <Box
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        bg={data.bgColor}
      >
        <Left>
          <Title>{data.title}</Title>
          <Desc>{data.description}</Desc>
        </Left>

        <Right>
          <Input placeholder={data.placeholder || "Enter your email"} />
          <Btn>{data.buttonText || "Subscribe"}</Btn>
        </Right>
      </Box>
    </Section>
  );
}
