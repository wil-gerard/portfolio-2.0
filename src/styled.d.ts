import "react";
import "styled-components";

declare module "react" {
  interface Attributes {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    css?: any;
    tw?: string;
  }
}

declare module "styled-components" {
  // styled-components v5 types predate React 18's broader FunctionComponent return type (ReactNode).
  // ForwardRefExoticComponent (Link, motion.div, etc.) fails the ComponentType check as a result.
  // This overload restores compatibility without a runtime change.
  interface ThemedBaseStyledInterface<T extends object> {
     
    <P extends object>(component: React.ForwardRefExoticComponent<P>): ThemedStyledFunction<React.ComponentType<P>, T>;
  }
}
