import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaTwitter: <FaTwitter />,
  FaInstagram: <FaInstagram />,
  FaLinkedinIn: <FaLinkedinIn />,
};


export default function Footer({ data }) {
  if (!data) return null;
  const { logo, description, columns, socials } = data;

  return (
    <FooterSection>
      <TopRow>
        <Brand>
          <Logo src={logo} alt="Logo" title="Wagory" />
          <p>{description}</p>
        </Brand>

        <Columns>
          {columns.map((col, i) => (
            <Column key={i}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link, j) => (
                  <li key={j}>{link}</li>
                ))}
              </ul>
            </Column>
          ))}
        </Columns>
      </TopRow>

      <BottomRow>
       <Socials>
  {socials.map((item, i) => (
    <a key={i} href={item.link} target="_blank" rel="noreferrer">
      {iconMap[item.icon]}
    </a>
  ))}
</Socials>
        <p>© {new Date().getFullYear()} Wagory. All rights reserved.</p>
      </BottomRow>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  background: #f5f5ea;
  padding: 60px 8%;
  color: #222;
`;

const TopRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
`;

const Brand = styled.div`
  flex: 1 1 250px;
  p {
    margin-top: 10px;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #444;
  }
`;

const Logo = styled.img`
  width: 120px;
`;

const Columns = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

const Column = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 6px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: #000;
    }
  }
`;

const BottomRow = styled.div`
  margin-top: 40px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 0.9rem;
`;

const Socials = styled.div`
  display: flex;
  gap: 14px;
  a {
    color: #222;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 50%;
    padding: 8px;
    transition: 0.3s;
    &:hover {
      background: #e95d5d;
      color: #fff;
    }
  }
`;
