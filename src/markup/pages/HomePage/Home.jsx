import React from "react";
import TopNavBar from "../../components/common/TopNavbar";
import HomeHeroSection from "../../components/homepage/HomeHeroSection";
import HomeContentSection from "../../components/homepage/HomeContentSection";
import HomeCardsSection from "../../components/homepage/HomeCardsSction";
import UpperBanner from "../../components/homepage/UpperBanner";
import CrossFitContent from "../../components/homepage/CrossFitContent";
import LowerBanner from "../../components/homepage/LowerBanner";
import Footer from "../../components/common/Footer";

const Home = () => {
  return (
    <>
      <TopNavBar />
      <HomeHeroSection />
      <HomeContentSection />
      <HomeCardsSection />
      <UpperBanner />
      <CrossFitContent />
      <LowerBanner />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
