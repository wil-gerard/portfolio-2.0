import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

const PageShell = ({ children }: PageShellProps) => (
  <div className="App font-display min-h-screen text-secondary-500 p-8 overflow-hidden">{children}</div>
);

export default PageShell;
