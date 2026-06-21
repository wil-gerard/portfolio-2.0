import BlogSection from "components/blog/BlogSection";
import TabCardGrid from "components/cards/TabCardGrid";
import TwoColWithButton from "components/features/TwoColWithButton";
import SimpleContactUs from "components/forms/SimpleContactUs";
import BackgroundAsImage from "components/hero/BackgroundAsImage";
import PageShell from "components/layout/PageShell";

const HomePage = () => (
  <PageShell revealSections={false}>
    <BackgroundAsImage />
    <TwoColWithButton />
    <TabCardGrid />
    <BlogSection />
    <SimpleContactUs />
  </PageShell>
);

export default HomePage;
