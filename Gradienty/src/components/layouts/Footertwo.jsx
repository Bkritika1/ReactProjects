import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const iconMap = {
  linkedin: <FaLinkedin />,
  instagram: <FaInstagram />,
  facebook: <FaFacebook />,
  youtube: <FaYoutube />,
  twitter: <FaTwitter />,
};

export default function Footertwo({ data }) {
  if (!data) return null; // agar data pass na ho to crash na ho

  const { company, resources, product, social, copyright, policies, logoText } = data;

  return (
    <FooterContainer>
      <FooterTop>
        <FooterColumn>
          <h4>{company.title}</h4>
          <ul>
            {company.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h4>{resources.title}</h4>
          <ul>
            {resources.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h4>{product.title}</h4>
          <ul>
            {product.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </FooterColumn>
      </FooterTop>

      <FooterBottom>
        <LogoRow>
          <Logo>{logoText}</Logo>
          <SocialIcons>
            {social.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noreferrer">
                {iconMap[item.name]}
              </a>
            ))}
          </SocialIcons>
        </LogoRow>

        <SmallText>{copyright}</SmallText>

        <PolicyRow>
          {policies.map((p, i) => (
            <a key={i} href="#">
              {p}
            </a>
          ))}
        </PolicyRow>
      </FooterBottom>
    </FooterContainer>
  );
}

// ---------------- STYLED COMPONENTS ----------------

const FooterContainer = styled.footer`
  background: #fff;
  color: #000;
  padding: 60px 100px;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;

  h4 {
    font-weight: 600;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 8px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        color: #555;
      }
    }
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.h3`
  font-weight: 700;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1.3rem;
  a {
    color: #000;
    transition: 0.3s;
    &:hover {
      color: #666;
    }
  }
`;

const SmallText = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const PolicyRow = styled.div`
  display: flex;
  gap: 20px;
  a {
    color: #000;
    font-size: 0.9rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
