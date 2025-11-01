// import React from "react";
// import styled from "styled-components";
// import { Button } from "antd";
// import { FaShoppingCart, FaUser, FaHome } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const HeaderContainer = styled.header`
//   width: 100%;
//   background: linear-gradient(90deg, #ff8a00, #e52e71);
//   color: white;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 18px 60px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// `;

// const Logo = styled.h1`
//   font-size: 1.8rem;
//   font-weight: bold;
//   margin: 0;
//   cursor: pointer;
// `;

// const NavLinks = styled.nav`
//   display: flex;
//   align-items: center;
//   gap: 24px;

//   a {
//     color: white;
//     text-decoration: none;
//     font-size: 1rem;
//     transition: 0.3s;

//     &:hover {
//       color: #ffe;
//     }
//   }
// `;

// const IconGroup = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;

//   svg {
//     cursor: pointer;
//     transition: 0.3s;
//     &:hover {
//       transform: scale(1.1);
//     }
//   }
// `;

// const Header = () => {
//   return (
//     <HeaderContainer>
//       <Logo>ShopSmart 🛍️</Logo>

//       <NavLinks>
//         <Link to="/">Home</Link>
//         <Link to="/landing/ecommerce">Shop</Link>
//         <Link to="/landing/portfolio">Portfolio</Link>
//         <Link to="/landing/startup">Startup</Link>
//       </NavLinks>

//       <IconGroup>
//         <FaHome size={22} />
//         <FaShoppingCart size={22} />
//         <FaUser size={22} />
//         <Button type="primary" style={{ background: "#fff", color: "#e52e71" }}>
//           Login
//         </Button>
//       </IconGroup>
//     </HeaderContainer>
//   );
// };

// export default Header;


// src/components/HeaderSection.jsx
import React from "react";
import { Row, Col, Button, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const HeaderSection = ({ data = {} }) => {
  const { logo, navLinks = [], buttons = [] } = data;

  const menu = (
    <Menu>
      <Menu.Item key="1">Sub 1</Menu.Item>
      <Menu.Item key="2">Sub 2</Menu.Item>
    </Menu>
  );

  return (
    <div style={{ background: "#fff", padding: 12, borderBottom: "1px solid #eee" }}>
      <Row align="middle" justify="space-between">
        <Col>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src={logo} alt="logo" style={{ height: 32 }} onError={(e)=>{e.target.style.display='none'}} />
            <h3 style={{ margin: 0 }}> {data.logoText || ""} </h3>
          </div>
        </Col>

        <Col flex="auto">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Space size="large">
              {navLinks.map((n, idx) =>
                n.dropdown ? (
                  <Dropdown overlay={menu} key={idx}>
                    <a onClick={(e) => e.preventDefault()}>
                      {n.label} <DownOutlined />
                    </a>
                  </Dropdown>
                ) : (
                  <a key={idx} style={{ color: "#333" }}>{n.label}</a>
                )
              )}
            </Space>
          </div>
        </Col>

        <Col>
          <Space>
            {buttons.map((b, i) => (
              <Button key={i} type={b.primary ? "primary" : "default"}>
                {b.text}
              </Button>
            ))}
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderSection;
