import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinkBase = "text-sm font-semibold no-underline transition duration-200";

const SiteHeader = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const alwaysShow = location.pathname !== "/";
  const show = visible || alwaysShow;
  const navClass =
    "fixed top-0 left-0 right-0 z-50 bg-white shadow-xs transition duration-300 ease-in-out " +
    (show
      ? "lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto"
      : "lg:-translate-y-full lg:opacity-0 lg:pointer-events-none");
  const navLinkClass = (active: boolean) =>
    active
      ? `${navLinkBase} text-primary-500`
      : `${navLinkBase} text-secondary-300 hover:text-primary-500`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-black text-lg text-primary-500 tracking-wide no-underline">
          Wil Gerard
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className={navLinkClass(location.pathname === "/")}>
            Home
          </Link>
          <Link to="/blog" className={navLinkClass(location.pathname.startsWith("/blog"))}>
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SiteHeader;
