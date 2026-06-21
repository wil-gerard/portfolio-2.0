import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "index.css";
import SiteHeader from "components/layout/SiteHeader";
import HomePage from "pages/HomePage";
import ScrollToTop from "./ScrollToTop";

const BlogIndexPage = lazy(() => import("pages/BlogIndexPage"));
const BlogPostPage = lazy(() => import("pages/BlogPostPage"));

const App = () => (
  <>
    <ScrollToTop />
    <SiteHeader />
    <Suspense
      fallback={(
        <div className="flex min-h-screen items-center justify-center" role="status">
          Loading page…
        </div>
      )}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </Suspense>
  </>
);

export default App;
