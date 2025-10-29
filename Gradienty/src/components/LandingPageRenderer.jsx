// import { useParams } from "react-router-dom";
// import { landingPagesData } from "../landingData.js/landingPagesData";
// import HeroLeft from "./layouts/HeroLeft";
// import HeroCenter from "./layouts/HeroCenter";
// import HeroChat from './layouts/HeroChat';
// // import FeatureGrid from "./layouts/FeatureGrid";
// import Header from "./Header";
// import Footer from "./Footer";

// export default function LandingPageRenderer() {
//   const { id } = useParams();
//   const page = landingPagesData.find(p => p.id === id);

//   if (!page) return <h2>Page Not Found</h2>;

//   const { theme, hero, layout, features, logo, nav } = page;

//   const renderHero = () => {
//      switch (layout) {
//     case "hero-left": return <HeroLeft hero={hero} theme={theme} />;
//     case "hero-center": return <HeroCenter hero={hero} theme={theme} />;
//     case "hero-chat": return <HeroChat hero={hero} theme={theme} />;
//     default: return <HeroLeft hero={hero} theme={theme} />;
//   }
//   };

//   return (
//     <div style={{ backgroundColor: "var(--color-bg)" }}>
//       <Header theme={theme} logo={logo} nav={nav} />
//       {renderHero()}
//       {/* <FeatureGrid features={features} theme={theme} /> */}
 


//       <Footer theme={theme} />
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { landingPagesData } from "../landingData.js/landingPagesData";
import Header from "./Header";
import Footer from "./Footer";
import HeroLeft from "./layouts/HeroLeft";
import HeroCenter from "./layouts/HeroCenter";
import HeroChat from './layouts/HeroChat';
import HeroModern from "./layouts/HeroModern";
import FeatureGrid from "./layouts/FeatureGrid";
import PricingTable from "./layouts/PricingTable";
import FeatureCards from "./layouts/FeatureCards";
import CTASection from "./layouts/CTASection";
import LogosScroll from "./layouts/LogosScroll";
import Testimonials from "./layouts/Testimonials";
import HeroBlobGradient from "./layouts/HeroBlobGradient";
import FeatureGradientCards from "./layouts/FeatureGradientCards";
import StatsSection from './layouts/StatsSection';
import  InfoSection from './layouts/InfoSection';
import FeatureShowcase from './layouts/FeatureShowcase'
const sectionRegistry = {
  // header:{
  //   "header-1": HeaderRound,
  //   "header-2": HeaderGlassy,

  // },
  hero: {
    "hero-left": HeroLeft,
    "hero-center": HeroCenter,
    "hero-chat": HeroChat,
      "hero-modern": HeroModern,
      "blobGradient": HeroBlobGradient 
  },
  features: {
    "grid-3": FeatureGrid,
    "cards": FeatureCards,
    "showcase": FeatureShowcase,
    "gradientCards": FeatureGradientCards
  },
  pricing: {
    table: PricingTable,
  },

  testimonials:{
   default:Testimonials
  },
  cta: {
    center: CTASection,
    gradient: CTASection
  },
  stats:{
    default: StatsSection
  },
  info:{
    default: InfoSection
  },
  logos: {
    scroll: LogosScroll
  },
  footer: {
    default: Footer
  }
};

export default function LandingPageRenderer() {
  const { id } = useParams();
  const page = landingPagesData.find((p) => p.id === id);
  if (!page) return <h2>Page Not Found</h2>;

  const { theme, logo, nav, sections } = page;

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text }}>
      <Header theme={theme} logo={logo} nav={nav} />
      {sections.map((section, index) => {
        const Component = sectionRegistry[section.type]?.[section.layout];
        return Component ? (
          <Component key={index} data={section.data} theme={theme} />
        ) : null;
      })}
    </div>
  );
}
