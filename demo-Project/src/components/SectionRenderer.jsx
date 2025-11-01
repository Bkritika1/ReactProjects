// import React from "react";
// import { Card, Button, Row, Col, Typography } from "antd";

// const { Title, Paragraph } = Typography;

// const SectionRenderer = ({ section }) => {
//   switch (section.type) {
//     case "hero":
//       return (
//         <Card
//           style={{
//             textAlign: "center",
//             marginBottom: "40px",
//             backgroundImage: `url(${section.image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             color: "white",
//             border: "none",
//           }}
//         >
//           <Title level={2}>{section.title}</Title>
//           <Paragraph>{section.description}</Paragraph>
//           <Button type="primary" size="large">
//             {section.buttonText}
//           </Button>
//         </Card>
//       );

//     case "features":
//     case "projects":
//       return (
//         <Row gutter={[16, 16]} justify="center" style={{ marginBottom: "40px" }}>
//           {section.features.map((f, index) => (
//             <Col xs={24} sm={12} md={8} key={index}>
//               <Card title={f.title} bordered={false} hoverable>
//                 <Paragraph>{f.desc}</Paragraph>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       );

//     default:
//       return null;
//   }
// };

// export default SectionRenderer;



// src/components/SectionRenderer.jsx
import React from "react";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import StatsSection from "./StatsSection";
import CTASection from "./CTASection";
import FooterSection from "./FooterSection";

const SectionRenderer = ({ section }) => {
  if (!section || !section.type) return null;
  const { type, data, layout } = section;

  switch (type) {
    case "header":
      return <HeaderSection data={data} layout={layout} />;
    case "hero":
      return <HeroSection data={data} layout={layout} />;
    case "features":
      return <FeaturesSection data={data} layout={layout} />;
    case "achievementStats":
      return <StatsSection data={data} layout={layout} />;
    case "cta":
      return <CTASection data={data} layout={layout} />;
    case "footer":
      return <FooterSection data={data} layout={layout} />;
    default:
      return null;
  }
};

export default SectionRenderer;
