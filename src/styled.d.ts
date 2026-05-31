import "react";

declare module "react" {
  interface Attributes {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    css?: any;
    tw?: string;
  }
}
