import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const base = css`
  ${tw`inline-block text-xs font-medium px-3 py-1 rounded-full transition duration-200`}
  background: #edf2f7;
  color: #506582;
`;

const activeStyle = css`
  background: #243E63;
  color: #fff;
`;

const Tag = styled.span`
  ${base}
`;

const TagButton = styled.button<{ active?: boolean }>`
  ${base}
  cursor: pointer;
  ${({ active }) => active && activeStyle}
  &:hover {
    ${({ active }) => !active && `background: #e2e8f0;`}
  }
`;

type BlogTagProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const BlogTag = ({ label, active, onClick }: BlogTagProps) =>
  onClick !== undefined ? (
    <TagButton active={active} onClick={onClick}>
      {label}
    </TagButton>
  ) : (
    <Tag>{label}</Tag>
  );

export default BlogTag;
