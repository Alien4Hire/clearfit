import React from "react";
import TopNavBar from "../../components/common/TopNavbar";
import HeroSection from "../../components/portfolio-v2/HeroSection";
import HeroSectionBG from "../../components/portfolio-v2/HeroSectionBG";
import HeroBanner from "../../components/portfolio-v2/HeroBanner";
import CompanyOverViewSection from "../../components/portfolio-v2/CompanyOverviewSection";
import CaseStudy from "../../components/portfolio-v2/CaseStudy";
import PortfolioCardSlider from "../../components/portfolio-v2/PotfolioCardSlider";
import UpperBanner from "../../components/homepage/UpperBanner";
import OurClientSection from "../../components/about-us/OurClientSection";
import SocialMedeaPanel from "../../components/common/SocialMediaPanel";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";

const PortfolioVersion2 = () => {
  return (
    <>
      <TopNavBar />
      <Header />
      <HeroSection />
      <HeroSectionBG />
      <HeroBanner />
      <CompanyOverViewSection />
      <CaseStudy />
      <PortfolioCardSlider />
      <UpperBanner />
      <OurClientSection />
      <SocialMedeaPanel />
      <Footer />
    </>
  );
};
export default PortfolioVersion2;
