// import React from "react";
// import styled from "styled-components";
// import { Button } from "antd";

// const HeroContainer = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 80px 120px;
//   background: linear-gradient(120deg, #f9f9f9, #ffffff);
// `;

// const Left = styled.div`
//   flex: 1;
// `;

// const Right = styled.div`
//   flex: 1;
//   text-align: right;
// `;

// const Title = styled.h1`
//   font-size: 3rem;
//   color: #333;
// `;

// const Description = styled.p`
//   color: #555;
//   margin: 20px 0;
// `;

// const Hero = ({ data }) => (
//   <HeroContainer>
//     <Left>
//       <p>{data.tagline}</p>
//       <Title>{data.title}</Title>
//       <Description>{data.description}</Description>
//       <Button type="primary" size="large">
//         {data.buttonText}
//       </Button>
//     </Left>
//     <Right>
//       <img
//         src={data.image}
//         alt="Hero"
//         style={{ width: "80%", borderRadius: "20px" }}
//       />
//     </Right>
//   </HeroContainer>
// );

// export default Hero;

// src/components/HeroSection.jsx
import React from "react";
import { Row, Col, Button, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

const HeroSection = ({ data = {} }) => {
  const {
    tagline,
    title,
    description,
    ctaButtons = [],
    stats,
    heroImage,
  } = data;

  return (
    <div style={{ padding: "48px 24px", background: "#fff" }}>
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={12}>
          <div style={{ maxWidth: 620 }}>
            <Text type="secondary" strong style={{ display: "block" }}>{tagline}</Text>
            <Title style={{ margin: "12px 0" }}>{title}</Title>
            <Paragraph style={{ color: "#444", fontSize: 16 }}>{description}</Paragraph>

            <div style={{ marginTop: 20 }}>
              {ctaButtons.map((c, idx) => (
                <Button key={idx} type={c.primary ? "primary" : "default"} style={{ marginRight: 12 }}>
                  {c.text}
                </Button>
              ))}
            </div>

            {stats && <div style={{ marginTop: 18, color: "#1f7aef" }}>{stats}</div>}
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <div style={{
              width: 420,
              height: 300,
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 8px 30px rgba(20,20,80,0.08)",
              background: "#f6f7fb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img src={heroImage} alt="hero" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
