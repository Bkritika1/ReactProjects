import React from "react";
import styled from "styled-components";

export default function HeaderShopify({ data }) {
  if (!data) return null;
  const { logo, navLinks, buttons } = data;

  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>

      <Nav>
        {navLinks.map((link, i) => (
          <NavItem key={i}>
            {link.label}
            {link.dropdown && <span>▼</span>}
          </NavItem>
        ))}
      </Nav>

      <Actions>
        {buttons.map((btn, i) => (
          <ActionBtn key={i} primary={btn.primary}>
            {btn.text}
          </ActionBtn>
        ))}
      </Actions>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 7%;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  img {
    width: 110px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const NavItem = styled.div`
  font-size: 0.95rem;
  color: #111;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-size: 0.7rem;
  }

  &:hover {
    color: #000;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ActionBtn = styled.button`
  background: ${({ primary }) => (primary ? "#000" : "transparent")};
  color: ${({ primary }) => (primary ? "#fff" : "#000")};
  border: ${({ primary }) => (primary ? "none" : "1.5px solid #ccc")};
  padding: 9px 18px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
