// src/components/layouts/HeroFeatureCards.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding:36px 8%; background:${({theme})=>theme?.bg||"#fffaf4"}; text-align:center;
`;

const Grid = styled.div`
  display:grid; grid-template-columns:repeat(4,1fr); gap:20px;
  @media(max-width:1100px){ grid-template-columns:repeat(2,1fr); }
  @media(max-width:600px){ grid-template-columns:1fr; }
`;

const Card = styled(motion.div)`
  background-image:url(${p=>p.bg}); background-size:cover; background-position:center;
  height:300px; border-radius:14px; display:flex; align-items:flex-end; padding:22px;
  color:#fff; font-weight:700; position:relative; overflow:hidden;
  &:after{ content:""; position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 100%); border-radius:14px; }
  span{ position:relative; z-index:2; font-size:1.08rem; }
`;

export default function HeroFeatureCards({ data, theme }) {
  return (
    <Section theme={theme}>
      <h3 style={{marginBottom:18, fontSize:20, color:"#222"}}>{data.title}</h3>
      <Grid>
        {data.cards.map((c,i)=>(
          <Card
            key={i}
            bg={c.image}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <span>{c.title}</span>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
