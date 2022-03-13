import styled, { css } from "styled-components";
import React from "react";
import {
  BUTTON_COLOURS,
  FONT_COLOURS,
  TRANSITION_STYLES,
} from "../../variables/DesignTokens";

// const baseStyles = css`
//   color: ${(props) => props.colour || FONT_COLOURS.BLACK};
//   line-height: 1.2;
// `;

// const StyledH1 = styled.h1``;
export const xxLarge = css`
  font-size: 2.4rem;
`;
const H2 = styled.h2``;
const H3 = styled.h3``;
const H4 = styled.h4``;
const H5 = styled.h5``;
const H6 = styled.h6``;

export const StyledHeading: React.FC = ({ is }) => {
  const ReturnCorrectHeading = (): string => {
    switch (is) {
      case "h1":
        return "h1";
        break;
      case "h2":
        return "h2";
        break;
      case "h3":
        return "h3";
        break;
      case "h4":
        return "h4";
        break;
      case "h5":
        return "h5";
        break;
      case "h6":
        return "h6";
        break;
      default:
        return "h3";
    }
  };
  const Heading = ReturnCorrectHeading;
  return <Heading></Heading>;
};
