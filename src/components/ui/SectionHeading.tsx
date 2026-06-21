import { ComponentPropsWithoutRef } from "react";

const baseClassName = "text-4xl sm:text-5xl font-black tracking-wide text-center";

const SectionHeading = ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
  <h2 {...props} className={[baseClassName, className].filter(Boolean).join(" ")} />
);

export default SectionHeading;
