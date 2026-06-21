import PageShell from "components/layout/PageShell";
import AboutSection from "components/sections/AboutSection";
import ContactSection from "components/sections/ContactSection";
import HeroSection from "components/sections/HeroSection";
import PortfolioSection from "components/sections/portfolio/PortfolioSection";
import RecentPostsSection from "components/sections/RecentPostsSection";

const HomePage = () => (
  <PageShell revealSections={false}>
    <HeroSection />
    <AboutSection />
    <PortfolioSection />
    <RecentPostsSection />
    <ContactSection />
  </PageShell>
);

export default HomePage;
