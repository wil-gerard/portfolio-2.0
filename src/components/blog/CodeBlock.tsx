import React, { useRef, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Wrapper = styled.div`
  ${tw`relative my-6`}
`;

const Pre = styled.pre`
  ${tw`bg-gray-200 rounded-lg px-5 py-4 overflow-x-auto`}
  code {
    ${tw`bg-transparent text-secondary-500 px-0 text-sm`}
  }
`;

const CopyButton = styled.button<{ copied: boolean }>`
  ${tw`absolute flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition duration-200`}
  top: 0.5rem;
  right: 0.5rem;
  background: ${({ copied }) => (copied ? "#c6f6d5" : "#e2e8f0")};
  color: ${({ copied }) => (copied ? "#276749" : "#506582")};
  &:hover {
    background: ${({ copied }) => (copied ? "#c6f6d5" : "#cbd5e0")};
  }
`;

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
    <Wrapper>
      <Pre ref={preRef} {...rest}>
        {children}
      </Pre>
      <CopyButton copied={copied} onClick={handleCopy} aria-label="Copy code">
        {copied ? <CheckIcon /> : <CopyIcon />}
        {copied ? "Copied" : "Copy"}
      </CopyButton>
    </Wrapper>
  );
};

export default CodeBlock;
