import React, { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "components/nav/Navbar"
import "index.css"
import AnimationRevealPage from "helpers/AnimationRevealPage";
import BackgroundAsImage from "components/hero/BackgroundAsImage";
import TwoColWithButton from "components/features/TwoColWithButton";
import TabCardGrid from "components/cards/TabCardGrid";
import BlogSection from "components/blog/BlogSection";
import SimpleContactUs from "components/forms/SimpleContactUs";
import BlogIndex from "pages/BlogIndex";
import BlogPost from "pages/BlogPost";

const Home = () => (
  <AnimationRevealPage disabled>
    <BackgroundAsImage />
    <TwoColWithButton />
    <TabCardGrid />
    <BlogSection />
    <SimpleContactUs />
  </AnimationRevealPage>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
    </>
  );
}

export default App;
