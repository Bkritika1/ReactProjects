import AboutSection from "./AboutSection";
import FAQSection from "./FAQSection";
import FeaturesSection from "./FeaturesSection";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import PricingSection from "./PricingSection";

export default function LandingPage(){
    return(
       <>
        <Header/>
        <Hero/>
        <AboutSection/>
        <FeaturesSection/>
        <PricingSection/>
        <FAQSection/>
        <Footer/>
       </>
    )
}