import React from "react";
import TopNavBar from "../../components/common/TopNavbar";
import HeroSection from "../../components/portfolio-v2/HeroSection";
import HeroSectionBG from "../../components/portfolio-v2/HeroSectionBG";
import HeroBanner from "../../components/portfolio-v2/HeroBanner";
import CompanyOverViewSection from "../../components/portfolio-v2/CompanyOverviewSection";

const PortfolioVersion2 = () => {
  return (
    <>
      <TopNavBar />
      <HeroSection />
      <HeroSectionBG />
      <HeroBanner />
      <CompanyOverViewSection />
    </>
  );
};
export default PortfolioVersion2;
