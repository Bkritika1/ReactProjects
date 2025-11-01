// src/components/StatsSection.jsx
import React from "react";
import { Row, Col, Card, Typography } from "antd";
const { Title, Paragraph } = Typography;

const StatCard = ({ s }) => (
  <Card style={{ borderRadius: 12, background: s.bg || "#fff" }}>
    <div>
      <div style={{ fontSize: 20, fontWeight: 700 }}>{s.value}</div>
      <div style={{ color: "#333" }}>{s.label}</div>
    </div>
  </Card>
);

const StatsSection = ({ data = {} }) => {
  return (
    <div style={{ padding: 32, background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 12, color: "#888" }}>{data.badgeText}</div>
            <Title level={3} style={{ margin: "8px 0" }}>{data.title}</Title>
            <Paragraph>{data.subtitle}</Paragraph>
          </div>
        </div>

        <Row gutter={[16, 16]} style={{ marginTop: 12 }}>
          {data.stats?.map((s, i) => (
            <Col xs={24} sm={12} md={6} key={i}>
              <StatCard s={s} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default StatsSection;
