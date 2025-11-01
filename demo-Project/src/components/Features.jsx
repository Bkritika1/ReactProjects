// import React from "react";
// import styled from "styled-components";
// import { Card, Row, Col } from "antd";

// const Section = styled.section`
//   padding: 80px 120px;
//   background-color: #fafafa;
//   text-align: center;
// `;

// const Title = styled.h2`
//   font-size: 2.2rem;
//   color: #222;
//   margin-bottom: 40px;
// `;

// const StyledCard = styled(Card)`
//   border-radius: 16px;
//   transition: all 0.3s ease;
//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
//   }
// `;

// const Features = ({ data }) => (
//   <Section>
//     <Title>{data.title}</Title>
//     <Row gutter={[24, 24]} justify="center">
//       {data.cards.map((card, i) => (
//         <Col key={i} xs={24} sm={12} md={8}>
//           <StyledCard>
//             <div style={{ fontSize: "2rem" }}>{card.icon}</div>
//             <h3 style={{ marginTop: "16px" }}>{card.title}</h3>
//             <p style={{ color: "#666" }}>{card.description}</p>
//           </StyledCard>
//         </Col>
//       ))}
//     </Row>
//   </Section>
// );

// export default Features;
