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
// import FeatureGrid from "./layouts/FeatureGrid";
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
import HeroSection from "./layouts/HeroSection";
import FeatureBelowHero from "./layouts/FeatureBelowHero";
import FeatureProduct from "./layouts/FeatureProduct";
import Footerone from "./layouts/Footerone"
import ContactBox from "./layouts/ContactBox";
import HeaderShopify from "./layouts/HeaderShopify";
import HeroShop from "./layouts/HeroShopify";
import HeroFeatureCards from "./layouts/HeroFeatureCards";
import SubscribeBox from "./layouts/SubscribeBox";
import FooterShop from "./layouts/FooterShop";
import PopularProducts from "./layouts/PopularProducts";
import CategoriesRow from "./layouts/CategoriesRow";
import HeroShopify from "./layouts/HeroShopify";
import FeatureShopify from "./layouts/FeatureShopify";
import AchievementStats from "./layouts/AchievementStats";
import AwesomeFeatures from "./layouts/AwesomeFeatures";
import Footertwo from "./layouts/Footertwo";
import { FlowbloxHeader } from "./layouts/FlowbloxHeader";
import { FlowbloxHero } from "./layouts/FlowbloxHero";
import { FlowbloxFeatures } from "./layouts/FlowbloxFeatures";
import { FlowbloxFooter } from "./layouts/FlowbloxFooter";
const sectionRegistry = {
  // header:{
  //   "header-1": HeaderRound,
  //   "header-2": HeaderGlassy,

  // },
header: {
  default: Header,
  'shopify-style': HeaderShopify,
  'flowblox-style': FlowbloxHeader,
},
  hero: {
    "hero-left": HeroLeft,
    "shopify-style": HeroShopify,
    "hero-center": HeroCenter,
    "hero-chat": HeroChat,
    "hero-section": HeroSection,
      "hero-modern": HeroModern,
      "blobGradient": HeroBlobGradient ,
      'flowblox-hero': FlowbloxHero
  },
  features: {
    // "grid-3": FeatureGrid,
    "cards": FeatureCards,
    "showcase": FeatureShowcase,
    "gradientCards": FeatureGradientCards,
     "below-hero": FeatureBelowHero, 
     "hero-below": FeatureProduct,
     "hero-cards": HeroFeatureCards,
     "popular": PopularProducts,
     "shopify-style":FeatureShopify,
     "pink": AwesomeFeatures,
     'flowblox-features': FlowbloxFeatures
  },
  pricing: {
    table: PricingTable,
  },
  categories: { default: CategoriesRow },
  achievementStats:{
    default:  AchievementStats
  },

  testimonials:{
   default:Testimonials
  },
  cta: {
    center: CTASection,
    gradient: CTASection,
    Subscribe:SubscribeBox
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
  contact:{
    "contact-box":ContactBox
  },
  footer: {
    default: Footer,
    "pet-footer": Footerone,
    shopify: FooterShop,
    footertwo: Footertwo,
    "flowblox-footer": FlowbloxFooter
  }
};

export default function LandingPageRenderer() {
  const { id } = useParams();
  const page = landingPagesData.find((p) => p.id === id);
  if (!page) return <h2>Page Not Found</h2>;

  const { theme, logo, nav, sections } = page;

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text }}>
     {/* <Header data={{ logo, nav, buttons: page.buttons }} theme={theme} /> */}
      {sections.map((section, index) => {
        const Component = sectionRegistry[section.type]?.[section.layout];
        return Component ? (
          <Component key={index} data={section.data} theme={theme} />
        ) : null;
      })}
    </div>
  );
}
