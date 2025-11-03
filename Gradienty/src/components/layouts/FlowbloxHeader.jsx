import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
  font-family: "Inter", sans-serif;

  nav {
    display: flex;
    gap: 2rem;
  }

  .right-section {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  button {
    background: #000;
    color: #fff;
    border: none;
    padding: 0.6rem 1.4rem;
    border-radius: 50px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FlowbloxHeader = ({ data }) => {
  const { logo, navLinks, rightLinks, button } = data;
  return (
    <HeaderWrapper>
      <div className="left">
        <strong>{logo}</strong>
      </div>

      <nav>
        {navLinks.map((link, idx) => (
          <a key={idx} href={link.url}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="right-section">
        {rightLinks.map((link, idx) => (
          <a key={idx} href={link.url}>
            {link.label}
          </a>
        ))}
        <button>{button.text}</button>
      </div>
    </HeaderWrapper>
  );
};
