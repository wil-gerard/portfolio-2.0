import { Children, ReactNode } from "react";
import { motion } from "framer-motion";
import useInView from "@owaiswiz/use-in-view";

type PageShellProps = {
  revealSections?: boolean;
  children: ReactNode;
};

type RevealOnScrollProps = {
  direction?: "left" | "right";
  offset?: number;
  children: ReactNode;
};

const RevealOnScroll = ({ direction = "left", offset = 30, children }: RevealOnScrollProps) => {
  const [ref, inView] = useInView(offset);
  const initialX = direction === "left" ? "-150%" : "150%";

  return (
    <motion.section
      initial={{ x: initialX }}
      animate={{
        x: inView ? "0%" : initialX,
        transitionEnd: { x: inView ? 0 : initialX },
      }}
      transition={{ type: "spring", damping: 19 }}
      ref={ref}
    >
      {children}
    </motion.section>
  );
};

const PageShell = ({ revealSections = true, children }: PageShellProps) => {
  const content = revealSections
    ? Children.toArray(children).map((child, index) => (
        <RevealOnScroll key={index} direction={index % 2 === 0 ? "left" : "right"}>
          {child}
        </RevealOnScroll>
      ))
    : children;

  return <div className="App font-display min-h-screen text-secondary-500 p-8 overflow-hidden">{content}</div>;
};

export default PageShell;
