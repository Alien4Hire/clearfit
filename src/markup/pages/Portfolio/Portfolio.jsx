import React from "react";
import PortfolioBanner from "../../components/portfolio/PortfolioBanner";
import TopNavBar from "../../components/common/TopNavbar";
import PortfolioContent from "../../components/portfolio/PortfolioContent";
import OurClientSection from "../../components/about-us/OurClientSection";
import SocialMedeaPanel from "../../components/common/SocialMediaPanel";
import Footer from "../../components/common/Footer";
import CopyRight from "../../components/common/CopyRight";
import Header from "../../components/common/Header";

const Portfolio = () => {
  return (
    <>
      <TopNavBar />
      <Header />
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
