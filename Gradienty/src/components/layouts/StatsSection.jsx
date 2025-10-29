import React from "react";
import "../LandingPages.css";


// export default function StatsSection({ data }) {
//   return (
//     <section className="stats-section">
//       <div className="stats-grid">
//         {data.items.map((item, i) => (
//           <div key={i} className="stat">
//             <h3>{item.value}</h3>
//             <p>{item.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import styled from "styled-components";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa"; // ✅ Import all Font Awesome icons dynamically

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11rem;
  flex-wrap: wrap;
`;

const Card = styled(motion.div)`
  background: #fff;
  padding: 40px 50px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  text-align: center;
  width: 250px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme?.primary || "#6c63ff"};
  margin-bottom: 1rem;
  display: flex;
`;

const Value = styled.h2`
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 0.3rem;
`;

const Label = styled.p`
  color: #666;
  font-size: 1rem;
`;

export default function StatsSection({ data, theme }) {
  const items =
    data?.items || [
      { label: "Companies", value: "30k+", icon: "FaBuilding" },
      { label: "Active Users", value: "120k+", icon: "FaUsers" },
      { label: "Uptime", value: "99.99%", icon: "FaClock" },
    ];

  return (
    <Section>
      {items.map((stat, i) => {
        const IconComponent = FaIcons[stat.icon] || FaIcons.FaChartBar; // fallback icon
        return (
          <Card
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            theme={theme}
          >
            <IconWrapper theme={theme}>
              <IconComponent 
              
              />
              <Value>{stat.value}</Value>

            </IconWrapper>
            
            <Label>{stat.label}</Label>
          </Card>
        );
      })}
    </Section>
  );
}
