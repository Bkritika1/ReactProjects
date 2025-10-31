// src/components/layouts/FooterShop.jsx
import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaTwitter: <FaTwitter />,
  FaInstagram: <FaInstagram />,
  FaLinkedinIn: <FaLinkedinIn />
};

const Footer = styled.footer` background:#f5f6f3; padding:60px 8%; color:#222; `;
const Top = styled.div` display:flex; gap:36px; flex-wrap:wrap; justify-content:space-between; `;
const Brand = styled.div` flex:1 1 260px; `;
const Cols = styled.div` display:flex; gap:40px; flex:2; flex-wrap:wrap; `;
const Col = styled.div` min-width:140px; `;
const ColTitle = styled.h4` margin:0 0 10px; font-weight:800; `;
const Link = styled.li` list-style:none; margin-bottom:8px; color:#444; cursor:pointer; `;

const Bottom = styled.div` margin-top:40px; border-top:1px solid #e6e6e6; padding-top:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; `;
const Socials = styled.div` display:flex; gap:12px; a{ display:inline-flex; align-items:center; justify-content:center; width:40px; height:40px; border-radius:8px; background:#fff; color:#222; border:1px solid #eee; } `;

export default function FooterShop({ data }) {
  if (!data) return null;
  return (
    <Footer>
      <Top>
        <Brand>
          {data.logo && <img src={data.logo} alt="logo" style={{width:140}} />}
          <p style={{maxWidth:360, color:"#444", marginTop:12}}>{data.description}</p>
        </Brand>

        <Cols>
          {data.columns?.map((c, idx)=>(
            <Col key={idx}>
              <ColTitle>{c.title}</ColTitle>
              <ul style={{padding:0, margin:0}}>
                {c.links.map((l,i)=>(<Link key={i}>{l}</Link>))}
              </ul>
            </Col>
          ))}
        </Cols>
      </Top>

      <Bottom>
        <Socials>
          {data.socials?.map((s,i)=>(
            <a key={i} href={s.link || "#"} target="_blank" rel="noreferrer">
              {iconMap[s] || s}
            </a>
          ))}
        </Socials>

        <div>© {new Date().getFullYear()} Wagory. All rights reserved.</div>
      </Bottom>
    </Footer>
  );
}
