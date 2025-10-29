// export default function HeroChat({ data, theme }) {
//   return (
//     <section style={{ display: "flex", padding: "5rem 10%", color: theme.text }}>
//       <div style={{ flex: 1, paddingRight: "2rem" }}>
//         <h1 style={{ color: theme.primary }}>{data?.title}</h1>
//         <p>{data?.subtitle}</p>
//         <div style={{ marginTop: "1rem" }}>
//           {data.buttons.map((b, i) => (
//             <button
//               key={i}
//               style={{
//                 marginRight: "1rem",
//                 padding: "0.8rem 1.5rem",
//                 borderRadius: "12px",
//                 border: "none",
//                 cursor: "pointer",
//                 background: b.type === "primary" ? theme.primary : "#eee",
//                 color: b.type === "primary" ? "#fff" : theme.text,
//               }}
//             >
//               {b.text}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div style={{ flex: 1 }}>
//         <div className="chat-card">
//           {data.chatMessages.map((m, i) => (
//             <div key={i} className={`chat-message ${m.from}`}>
//               <p>{m.text}</p>
//             </div>
//           ))}

//           <div className="contact-card">
//             <div className="contact-info">
//               <img src={data.contactCard.avatar} alt={data.contactCard.name} />
//               <div>
//                 <h3>{data.contactCard.name}</h3>
//                 <span>{data.contactCard.location}</span>
//               </div>
//             </div>
//             <div>
//               <span>📞 {data.contactCard.phone}</span>
//               <span>✉️ {data.contactCard.email}</span>
//             </div>
//           </div>
//         </div>
//         <div>{data.tagLine}</div>
//       </div>
//     </section>
//   );
// }

// import "../LandingPages.css";

// export default function HeroChat({ data, theme }) {
//   return (
//     <section className="hero hero-chat" style={{ background: theme?.bg }}>
//       <div className="hero-content">
//         <h1>{data?.title}</h1>
//         <p>{data?.subtitle}</p>
//         <div className="chat-bubble left">Hi there 👋</div>
//         <div className="chat-bubble right">Hello! How can I help?</div>
//         <button>{data?.buttonText || "Chat Now"}</button>
//       </div>
//       <div className="hero-image">
//         <img src={data?.image} alt="chat illustration" />
//       </div>
//     </section>
//   );
// }

import styled from "styled-components";
import { motion } from "framer-motion";

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 80px 10%;
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }

  /* Background blobs */
  &::before, &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    z-index: 0;
  }

  &::before {
    width: 300px;
    height: 300px;
    top: 20%;
    left: -100px;
    // background: ${({ theme }) => theme?.secondary || "#f178b6"};
    opacity: 0.3;
  }

  &::after {
    width: 350px;
    height: 350px;
    bottom: -100px;
    right: -120px;
    // background: ${({ theme }) => theme?.primary || "#5f2eea"};
    opacity: 0.25;
  }
`;

const HeroText = styled.div`
  flex: 1;
  z-index: 2;
  max-width: 540px;

  h1 {
    font-size: 3rem;
    line-height: 1.2;
    background: ${({ theme }) => 
      `linear-gradient(90deg, ${theme?.primary}, ${theme?.secondary})`};
    -webkit-background-clip: text;
    font-weight: 800;
    margin-bottom: 1rem;
    text-align: start;
  }

  p {
    font-size: 1.15rem;
    opacity: 0.8;
    margin-bottom: 2rem;
    text-align: start;

    color: ${({ theme }) => theme?.text || "#333"};
  }

  .buttons {
    display: flex;
    gap: 1rem;
    text-align: start;
      border-radius: 8px;


    @media (max-width: 900px) {
      justify-content: center;
      flex-wrap: wrap;
    }

    button {
      border: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      padding: 12px 30px;
       border-radius: 8px;
      transition: all 0.3s ease;
    text-align: start;

    }

    .primary {
      background: ${({ theme }) => theme?.primary};
      color: #fff;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

      &:hover {
        transform: translateY(-4px);
      }
    }

    .secondary {
      background: #fff;
      color: ${({ theme }) => theme?.primary};
      border: 2px solid ${({ theme }) => theme?.primary};

      &:hover {
        background: ${({ theme }) => theme?.primary};
        color: #fff;
      }
    }
  }
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  text-align: right;
  z-index: 1;

  img {
    width: 100%;
    max-width: 420px;
    filter: drop-shadow(0 15px 40px rgba(0, 0, 0, 0.15));
    animation: float 4s ease-in-out infinite;
    background: transparent;
  }

  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
  }
`;

export default function HeroChat({ data, theme }) {
  return (
    <HeroWrapper theme={theme}>
      <HeroText theme={theme}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {data?.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {data?.subtitle}
        </motion.p>

        <motion.div
          className="buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button className="primary">{data?.button1}</button>
          <button className="secondary">{data?.button2}</button>
        </motion.div>
      </HeroText>

      <HeroImage
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={data?.image} alt="app mockup" />
      </HeroImage>
    </HeroWrapper>
  );
}
