import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositionsByKey = new Map<string, number>();
const scrollPositionsByPath = new Map<string, number>();

const shouldRestoreScroll = (state: unknown) =>
  typeof state === "object" &&
  state !== null &&
  "restoreScrollPosition" in state &&
  state.restoreScrollPosition === true;

const ScrollToTop = () => {
  const { key, pathname, state } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const savedPosition = navigationType === "POP"
      ? scrollPositionsByKey.get(key)
      : shouldRestoreScroll(state)
        ? scrollPositionsByPath.get(pathname)
        : undefined;

    const scrollY = savedPosition ?? 0;
    window.scrollTo(0, scrollY);
    const animationFrame = window.requestAnimationFrame(() => window.scrollTo(0, scrollY));

    return () => {
      window.cancelAnimationFrame(animationFrame);
      scrollPositionsByKey.set(key, window.scrollY);
      scrollPositionsByPath.set(pathname, window.scrollY);
    };
  }, [key, navigationType, pathname, state]);

  return null;
};

export default ScrollToTop;
