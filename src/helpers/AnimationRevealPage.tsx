import React from "react";
import tw from "twin.macro";

/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import { motion } from "framer-motion";
import useInView from "@owaiswiz/use-in-view";

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;

type AnimationRevealProps = {
  disabled?: boolean;
  children?: React.ReactNode;
};

type AnimatedSlideInProps = {
  direction?: "left" | "right";
  offset?: number;
  children?: React.ReactNode;
};

function AnimationReveal({ disabled, children }: AnimationRevealProps) {
  if (disabled) {
    return <>{children}</>;
  }

  const directions = ["left", "right"];
  const childrenWithAnimation = React.Children.toArray(children).map((child, i) => {
    return (
      <AnimatedSlideInComponent key={i} direction={directions[i % directions.length] as "left" | "right"}>
        {child}
      </AnimatedSlideInComponent>
    );
  });
  return <>{childrenWithAnimation}</>;
}

function AnimatedSlideInComponent({ direction = "left", offset = 30, children }: AnimatedSlideInProps) {
  const [ref, inView] = useInView(30);

  const x: { target: string; initial?: string } = { target: "0%" };

  if (direction === "left") x.initial = "-150%";
  else x.initial = "150%";

  return (
    <motion.section
      initial={{ x: x.initial }}
      animate={{ 
        x: inView ? x.target : x.initial,
        transitionEnd:{
          x: inView ? 0 : x.initial
        }
      }}
      transition={{ type: "spring", damping: 19 }}
      ref={ref}
    >
      {children}
    </motion.section>
  );
}

const AnimationRevealPage = (props: AnimationRevealProps) => (
  <StyledDiv className="App">
    <AnimationReveal {...props} />
  </StyledDiv>
);

export default AnimationRevealPage;
