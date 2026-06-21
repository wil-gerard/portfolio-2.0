import { ComponentPropsWithoutRef } from "react";

const baseClassName = "max-w-7xl mx-auto py-20 lg:py-24 px-4 sm:px-8";

const SectionContainer = ({ className, ...props }: ComponentPropsWithoutRef<"div">) => (
  <div {...props} className={[baseClassName, className].filter(Boolean).join(" ")} />
);

export default SectionContainer;
