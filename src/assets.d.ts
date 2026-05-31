declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module "@owaiswiz/use-in-view" {
  import type { RefCallback } from "react";

  export default function useInView(offset?: number): [RefCallback<Element>, boolean];
}
