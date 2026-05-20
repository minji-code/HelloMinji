import HomeSection from "./components/Home";
import ExperienceSection from "./components/Experience";
import EducationSection from "./components/Education";
import SkillsSection from "./components/Skills";
import FooterSection from "./components/Footer";

const App = () => (
  <div className="min-h-screen bg-background text-foreground">
    <HomeSection />
    <ExperienceSection />
    <SkillsSection />
    <EducationSection />
    <FooterSection />
  </div>
);

export default App;