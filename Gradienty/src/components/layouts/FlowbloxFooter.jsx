import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #fdf8f5;
  text-align: center;
  padding: 3rem 1rem;
  border-top: 1px solid #eee;

  p {
    color: #555;
    margin-top: 1rem;
  }

  a {
    color: #111;
    margin: 0 1rem;
    text-decoration: none;
  }
`;

export const FlowbloxFooter = ({ data }) => {
  const { logoText, navLinks, copyright } = data;
  return (
    <FooterWrapper>
      <h3>{logoText}</h3>
      <div>
        {navLinks.map((link, idx) => (
          <a key={idx} href={link.url}>
            {link.label}
          </a>
        ))}
      </div>
      <p>{copyright}</p>
    </FooterWrapper>
  );
};
