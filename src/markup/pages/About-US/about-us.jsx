import React from "react";
import TopNavBar from "../../components/common/TopNavbar";
import HeroSection from "../../components/about-us/HeroSection";
import ProfileScetion from "../../components/about-us/ProfileSection";
import ContentSection from "../../components/about-us/ContentSection";
import CardsSection from "../../components/about-us/CardsSection";

const AboutUS = () => {
  return (
    <>
      <TopNavBar />
      <HeroSection />
      <ProfileScetion />
      <ContentSection />
      <CardsSection />
    </>
  );
};

export default AboutUS;
