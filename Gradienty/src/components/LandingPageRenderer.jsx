import { useParams } from "react-router-dom";
import { landingPagesData } from "../landingData.js/landingPagesData";
import HeroLeft from "./layouts/HeroLeft";
import HeroCenter from "./layouts/HeroCenter";
import HeroChat from './layouts/HeroChat';
// import FeatureGrid from "./layouts/FeatureGrid";
import Header from "./Header";
import Footer from "./Footer";

export default function LandingPageRenderer() {
  const { id } = useParams();
  const page = landingPagesData.find(p => p.id === id);

  if (!page) return <h2>Page Not Found</h2>;

  const { theme, hero, layout, features, logo, nav } = page;

  const renderHero = () => {
     switch (layout) {
    case "hero-left": return <HeroLeft hero={hero} theme={theme} />;
    case "hero-center": return <HeroCenter hero={hero} theme={theme} />;
    case "hero-chat": return <HeroChat hero={hero} theme={theme} />;
    default: return <HeroLeft hero={hero} theme={theme} />;
  }
  };

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: "100vh" }}>
      <Header theme={theme} logo={logo} nav={nav} />
      {renderHero()}
      {/* <FeatureGrid features={features} theme={theme} /> */}
      {/* <FeatureGrid features={features} theme={theme} /> */}

      <Footer theme={theme} />
    </div>
  );
}
