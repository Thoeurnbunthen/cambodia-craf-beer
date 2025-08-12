import { useState } from "react";
import { MainNav } from "@/components/navigation/MainNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { JudgeSection } from "@/components/sections/JudgeSection";
import { BreweriesSection } from "@/components/sections/BreweriesSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { AwardsSection } from "@/components/sections/AwardsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection onJudgeClick={() => setActiveSection("judge")} />;
      case "judge":
        return <JudgeSection />;
      case "breweries":
        return <BreweriesSection />;
      case "timeline":
        return <TimelineSection />;
      case "awards":
        return <AwardsSection />;
      default:
        return <HeroSection onJudgeClick={() => setActiveSection("judge")} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNav activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="pb-8">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
