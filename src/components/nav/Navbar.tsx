import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link, useLocation } from "react-router-dom";

const Nav = styled.nav<{ $visible: boolean }>`
  ${tw`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm`}
  transition: transform 0.3s ease, opacity 0.3s ease;

  @media (min-width: 1024px) {
    transform: ${({ $visible }) => ($visible ? "translateY(0)" : "translateY(-100%)")};
    opacity: ${({ $visible }) => ($visible ? "1" : "0")};
    pointer-events: ${({ $visible }) => ($visible ? "all" : "none")};
  }

  @media (max-width: 1023px) {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
`;

const Inner = tw.div`max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between`;
const Brand = tw(Link)`font-black text-lg text-primary-500 tracking-wide no-underline`;
const Links = tw.div`flex items-center gap-6`;
const NavLink = styled(Link)`
  ${tw`text-sm font-semibold text-secondary-300 no-underline transition duration-200`}
  &:hover { ${tw`text-primary-500`} }
  &.active { ${tw`text-primary-500`} }
`;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On non-home pages the hero isn't present — always show
  const alwaysShow = location.pathname !== "/";

  return (
    <Nav $visible={visible || alwaysShow}>
      <Inner>
        <Brand to="/">Wil Gerard</Brand>
        <Links>
          <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </NavLink>
          <NavLink to="/blog" className={location.pathname.startsWith("/blog") ? "active" : ""}>
            Blog
          </NavLink>
        </Links>
      </Inner>
    </Nav>
  );
};

export default Navbar;
