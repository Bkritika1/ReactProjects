// import React from "react";
// import { useParams } from "react-router-dom";
// import { landingPagesData } from "../data/landingPagesData";
// import DynamicLandingRenderer from "../components/DynamicLandingRenderer";

// const LandingPage = () => {
//   const { id } = useParams();
//   const pageData = landingPagesData.find((p) => p.id === id);

//   return <DynamicLandingRenderer pageData={pageData} />;
// };

// export default LandingPage;



// src/pages/LandingPage.jsx
import React from "react";
import SectionRenderer from "../components/SectionRenderer";
import landingData from "../data/landingPagesData";

const LandingPage = () => {
  return (
    <div style={{ background: landingData.theme?.bg }}>
      {landingData.sections.map((section, i) => (
        <SectionRenderer key={i} section={section} />
      ))}
    </div>
  );
};

export default LandingPage;
