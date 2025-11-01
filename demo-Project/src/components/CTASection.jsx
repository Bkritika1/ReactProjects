// import React from "react";
// import styled from "styled-components";
// import { Button } from "antd";

// const Section = styled.section`
//   padding: 80px 120px;
//   background: linear-gradient(120deg, #1677ff, #69c0ff);
//   text-align: center;
//   color: white;
//   border-radius: 20px;
//   margin: 80px auto;
//   width: 80%;
// `;

// const CTA = ({ data }) => (
//   <Section>
//     <h2 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>{data.title}</h2>
//     <Button type="primary" size="large" style={{ background: "#fff", color: "#1677ff" }}>
//       {data.buttonText}
//     </Button>
//   </Section>
// );

// export default CTA;


// src/components/CTASection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Row, Col, Button, Card } from "antd";
const AnimatedSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card title="Ant Design + Animation">
        <p>Yeh section smooth fade-in effect ke sath aata hai!</p>
        <Button type="primary">Click Me</Button>
      </Card>
    </motion.div>
  );
};

const CTASection = ({ data = {} }) => {
  return (
    <div style={{ padding: 36, display: "flex", justifyContent: "center", background: "#fff" }}>
      <Card style={{ width: "100%", maxWidth: 900, textAlign: "center", borderRadius: 12 }}>
        <h2 style={{ marginBottom: 8 }}>{data.title}</h2>
        <div style={{ marginTop: 12 }}>
          <Button type="primary" size="large">{data.buttonText}</Button>
        </div>
      </Card>
    </div>
  );
};

export default CTASection;
