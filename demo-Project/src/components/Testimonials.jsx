import React from "react";
import styled from "styled-components";
import { Card, Row, Col, Avatar } from "antd";

const Section = styled.section`
  padding: 80px 120px;
  background: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #222;
  margin-bottom: 40px;
`;

const Testimonials = ({ data }) => (
  <Section>
    <Title>{data.title}</Title>
    <Row gutter={[24, 24]} justify="center">
      {data.reviews.map((review, i) => (
        <Col key={i} xs={24} sm={12} md={8}>
          <Card style={{ borderRadius: "16px", padding: "20px" }}>
            <Avatar src={review.image} size={64} />
            <h3 style={{ marginTop: "12px" }}>{review.name}</h3>
            <p style={{ color: "#666", marginTop: "8px" }}>{review.comment}</p>
          </Card>
        </Col>
      ))}
    </Row>
  </Section>
);

export default Testimonials;
