import React from "react";
import PortfolioBanner from "../../components/portfolio/PortfolioBanner";
import TopNavBar from "../../components/common/TopNavbar";
import PortfolioContent from "../../components/portfolio/PortfolioContent";
import OurClientSection from "../../components/about-us/OurClientSection";
import SocialMedeaPanel from "../../components/common/SocialMediaPanel";
import Footer from "../../components/common/Footer";
import CopyRight from "../../components/common/CopyRight";

const Portfolio = () => {
  return (
    <>
      <TopNavBar />
      <PortfolioBanner />
      <PortfolioContent />
      <OurClientSection />
      <SocialMedeaPanel />
      <Footer />
      <CopyRight />
    </>
  );
};

export default Portfolio;
