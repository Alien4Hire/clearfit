import React from "react";
import TopNavBar from "../../components/common/TopNavbar";
import HomeHeroSection from "../../components/homepage/HomeHeroSection";
import HomeContentSection from "../../components/homepage/HomeContentSection";
import HomeCardsSection from "../../components/homepage/HomeCardsSction";
import UpperBanner from "../../components/homepage/UpperBanner";
import CrossFitContent from "../../components/homepage/CrossFitContent";
import LowerBanner from "../../components/homepage/LowerBanner";
import Footer from "../../components/common/Footer";
import SkillPodsSection from "../../components/homepage/SkillPodsSection";
import HomeProfileSection from "../../components/homepage/HomeProfileSection";
import HomeCaroselSection from "../../components/homepage/HomeCaroselSection";
import HomeOverdueSection from "../../components/homepage/HomeOverdueSection";
import FormSection from "../../components/homepage/FormSection";
import SocialMedeaPanel from "../../components/common/SocialMediaPanel";
import ContactUsSection from "../../components/homepage/ContactUsSection";
import CopyRight from "../../components/common/CopyRight";

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
      <SkillPodsSection />
      <HomeProfileSection />
      <UpperBanner />
      <HomeCaroselSection />
      <HomeOverdueSection />
      <FormSection />
      <ContactUsSection />
      <SocialMedeaPanel />
      <Footer />
      <CopyRight />
    </>
  );
};

export default Home;
