// src/components/FeaturesSection.jsx
import React from "react";
import { Row, Col, Card, Tag, Button, Typography } from "antd";
const { Title, Paragraph } = Typography;

const FeatureCard = ({ item }) => (
  <Card style={{ borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
    <div style={{ display: "flex", gap: 16 }}>
      <div style={{
        width: 90, height: 90, borderRadius: 10, background: item.bgColor || "#fff", display: "flex",
        alignItems: "center", justifyContent: "center"
      }}>
        {item.image ? <img src={item.image} alt="" style={{ maxWidth: "80%", maxHeight: "80%" }} /> : null}
      </div>
      <div>
        <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>{item.step}</div>
        <Title level={5} style={{ margin: 0 }}>{item.title}</Title>
        <Paragraph style={{ marginTop: 6 }}>{item.description}</Paragraph>
      </div>
    </div>
  </Card>
);

const FeaturesSection = ({ data, layout }) => {
  // data might be array or object depending on layout
  if (Array.isArray(data)) {
    return (
      <div style={{ padding: 24, background: "#fff" }}>
        <Row gutter={[16, 16]}>
          {data.map((d, i) => (
            <Col xs={24} md={12} key={i}>
              <FeatureCard item={d} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  // for 'pink' layout (big two-column)
  const obj = data || {};
  return (
    <div style={{ padding: 36, background: obj.backgroundColor || "#fff" }}>
      <Row gutter={[24, 24]} align="middle">
        <Col xs={24} md={12}>
          <div style={{ padding: 16 }}>
            <Title level={3}>{obj.heading}</Title>
            <div style={{ margin: "12px 0" }}>
              {obj.tags && obj.tags.map((t, i) => <Tag key={i} style={{ marginBottom: 8 }}>{t}</Tag>)}
            </div>
            <Title level={4}>{obj.contentSection?.title}</Title>
            <Paragraph>{obj.contentSection?.subtitle}</Paragraph>
            <div>
              {obj.contentSection?.buttons?.map((b, i) => (
                <Button key={i} style={{ marginRight: 10 }} type={b.type === "dark" ? "primary" : "default"}>
                  {b.text}
                </Button>
              ))}
            </div>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: 380, height: 300, borderRadius: 16, background: "rgba(255,255,255,0.6)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <img src={obj.imageSection?.mainImage} alt="feature" style={{ maxWidth: "95%", maxHeight: "95%", borderRadius: 12 }} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturesSection;
