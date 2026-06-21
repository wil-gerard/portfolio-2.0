import React, { useRef, useState } from "react";

const copyButtonClass = (copied: boolean) =>
  "absolute top-2 right-2 flex items-center gap-1 rounded-sm px-2 py-1 text-xs font-medium transition duration-200 " +
  (copied ? "bg-[#c6f6d5] text-[#276749]" : "bg-gray-300 text-secondary-300 hover:bg-gray-400");

const CopyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

type Props = React.HTMLAttributes<HTMLPreElement>;

const CodeBlock = ({ children, ...rest }: Props) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = preRef.current?.textContent ?? "";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative my-6">
      <pre
        ref={preRef}
        className="bg-gray-200 rounded-lg px-5 py-4 overflow-x-auto [&_code]:bg-transparent [&_code]:text-secondary-500 [&_code]:px-0 [&_code]:text-sm"
        {...rest}
      >
        {children}
      </pre>
      <button className={copyButtonClass(copied)} onClick={handleCopy} aria-label="Copy code">
        {copied ? <CheckIcon /> : <CopyIcon />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

export default CodeBlock;
