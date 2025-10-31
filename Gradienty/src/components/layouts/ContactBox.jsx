import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function ContactBox({ data }) {
  if (!data) return null;
  const { title, description, placeholder, buttonText, bgColor } = data;

  return (
    <Section style={{ backgroundColor: bgColor }}>
      <Content as={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <Icon>
          <FaEnvelopeOpenText size={28} />
        </Icon>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Form>
          <Input type="email" placeholder={placeholder} />
          <Button>{buttonText}</Button>
        </Form>
      </Content>
    </Section>
  );
}

const Section = styled.section`
  padding: 60px 10%;
  border-radius: 16px;
  margin: 60px auto;
  text-align: center;
  color: #222;
`;

const Content = styled.div`
  background: var(--color-primary);
  color:var(--color-text);
  padding: 40px;
  border-radius: 14px;
  max-width: 800px;
  margin: 0 auto;
`;

const Icon = styled.div`
  color: #000;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1d1d1d;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 25px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  outline: none;
  width: 260px;
  font-size: 1rem;
`;

const Button = styled.button`
  background: #d94b4b;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 22px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #c43d3d;
  }
`;
