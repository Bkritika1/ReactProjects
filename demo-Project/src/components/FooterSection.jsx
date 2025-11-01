// import React from "react";
// import styled from "styled-components";
// import { Row, Col } from "antd";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// const FooterContainer = styled.footer`
//   background: #001529;
//   color: #fff;
//   padding: 60px 120px;
// `;

// const Logo = styled.h3`
//   color: #fff;
//   font-size: 1.8rem;
//   margin-bottom: 12px;
// `;

// const Desc = styled.p`
//   color: #bbb;
//   font-size: 0.95rem;
//   line-height: 1.6;
// `;

// const Footer = ({ data }) => (
//   <FooterContainer>
//     <Row gutter={[24, 24]}>
//       <Col xs={24} md={8}>
//         <Logo>{data.logo}</Logo>
//         <Desc>{data.description}</Desc>
//       </Col>
//       <Col xs={24} md={8}>
//         <h4>Quick Links</h4>
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {data.links.map((link, i) => (
//             <li key={i} style={{ color: "#bbb", margin: "6px 0" }}>
//               {link}
//             </li>
//           ))}
//         </ul>
//       </Col>
//       <Col xs={24} md={8}>
//         <h4>Follow Us</h4>
//         <div style={{ fontSize: "1.5rem", display: "flex", gap: "12px" }}>
//           <a href={data.social.facebook} style={{ color: "white" }}>
//             <FaFacebook />
//           </a>
//           <a href={data.social.instagram} style={{ color: "white" }}>
//             <FaInstagram />
//           </a>
//           <a href={data.social.twitter} style={{ color: "white" }}>
//             <FaTwitter />
//           </a>
//         </div>
//       </Col>
//     </Row>
//   </FooterContainer>
// );

// export default Footer;


// src/components/FooterSection.jsx
import React from "react";
import { Row, Col, Divider } from "antd";

const FooterSection = ({ data = {} }) => {
  return (
    <div style={{ background: "#fafafa", padding: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={8}>
            <h3>{data.logoText}</h3>
            <div style={{ color: "#666" }}>{data.copyright}</div>
          </Col>

          <Col xs={24} sm={8}>
            <h4>{data.company?.title}</h4>
            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
              {data.company?.links?.map((l, i) => <li key={i} style={{ margin: "6px 0" }}>{l}</li>)}
            </ul>
          </Col>

          <Col xs={24} sm={8}>
            <h4>{data.resources?.title}</h4>
            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
              {data.resources?.links?.map((l, i) => <li key={i} style={{ margin: "6px 0" }}>{l}</li>)}
            </ul>
          </Col>
        </Row>

        <Divider style={{ marginTop: 24 }} />
        <div style={{ display: "flex", justifyContent: "space-between", color: "#888", marginTop: 12 }}>
          <div>{data.policies?.join(" | ")}</div>
          <div>Follow: {data.social?.map((s) => s.name).join(", ")}</div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
