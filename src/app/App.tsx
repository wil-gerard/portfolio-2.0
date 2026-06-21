import { Route, Routes } from "react-router-dom";
import "index.css";
import SiteHeader from "components/layout/SiteHeader";
import BlogIndexPage from "pages/BlogIndexPage";
import BlogPostPage from "pages/BlogPostPage";
import HomePage from "pages/HomePage";
import ScrollToTop from "./ScrollToTop";

const App = () => (
  <>
    <ScrollToTop />
    <SiteHeader />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogIndexPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
    </Routes>
  </>
);

export default App;
