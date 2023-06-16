import React from "react";
import TopNavBar from "../../components/common/TopNavbar";
import HeroSection from "../../components/about-us/HeroSection";
import ProfileScetion from "../../components/about-us/ProfileSection";
import ContentSection from "../../components/about-us/ContentSection";
import CardsSection from "../../components/about-us/CardsSection";
import SkillPodsSkillSection from "../../components/about-us/SkillPodsSkillSection";
import ResultSection from "../../components/about-us/ResultSection";
import OurClientSection from "../../components/about-us/OurClientSection";
import SocialMedeaPanel from "../../components/common/SocialMediaPanel";
import Footer from "../../components/common/Footer";
import CopyRight from "../../components/common/CopyRight";
import Header from "../../components/common/Header";

const AboutUS = () => {
  return (
    <>
      <TopNavBar />
      <Header />
      <HeroSection />
      <ProfileScetion />
      <ContentSection />
      <CardsSection />
      <SkillPodsSkillSection />
      <ResultSection />
      <OurClientSection />
      <SocialMedeaPanel />
      <Footer />
      <CopyRight />
    </>
  );
};

export default AboutUS;
