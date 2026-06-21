import { css } from "styled-components";

export const hoverLift = css`
  transition: box-shadow 300ms, transform 300ms;
  &:hover {
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`;
