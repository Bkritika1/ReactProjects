// import React from "react";
// import SectionRenderer from "./SectionRenderer";
// import { Typography } from "antd";

// const { Title } = Typography;

// const DynamicLandingRenderer = ({ pageData }) => {
//   if (!pageData) return <h2>Landing page not found</h2>;

//   return (
//     <div style={{ padding: "40px" }}>
//       <Title level={1} style={{ textAlign: "center", marginBottom: "60px" }}>
//         {pageData.title}
//       </Title>

//       {pageData.sections.map((section, i) => (
//         <SectionRenderer key={i} section={section} />
//       ))}
//     </div>
//   );
// };

// export default DynamicLandingRenderer;


import React from "react";
import Header from "./HeaderSection";
import Hero from "./HeroSection";
// import Features from "./Features";
import Testimonials from "./Testimonials";
import CTA from "./CTASection";
import Footer from "./FooterSection";
import About from "./About";

const DynamicLandingRenderer = ({ pageData }) => {
  if (!pageData) return <h2>Landing page not found 😢</h2>;

  const { header, hero,about, features, testimonials, cta, footer } = pageData;

  return (
    <>
      <Header data={header} />
      <Hero data={hero} />
      <About data={about}/>
      {/* <Features data={features} /> */}
      <Testimonials data={testimonials} />
      <CTA data={cta} />
      <Footer data={footer} />
    </>
  );
};

export default DynamicLandingRenderer;
