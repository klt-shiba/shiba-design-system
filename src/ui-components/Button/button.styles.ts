import styled, { css } from "styled-components";
import UnstyledButton from "./unstyledButton.styles";
import {
  BUTTON_COLOURS,
  FONT_COLOURS,
  TRANSITION_STYLES,
  BUTTON_SIZE,
} from "../../variables/DesignTokens";

// Importance Styles
const ImportancePrimaryStyles = css`
  background-color: ${BUTTON_COLOURS.PRIMARY.BASE};
  border: 0.2rem ${BUTTON_COLOURS.PRIMARY.BASE} solid;
  color: ${FONT_COLOURS.WHITE};
  &:hover {
    background-color: ${BUTTON_COLOURS.PRIMARY.HOVER};
    border-color: ${BUTTON_COLOURS.PRIMARY.HOVER};
    color: ${FONT_COLOURS.BLACK};
  }
  &:active {
    background-color: ${BUTTON_COLOURS.PRIMARY.ACTIVE};
    border-color: ${BUTTON_COLOURS.PRIMARY.ACTIVE};
    color: ${FONT_COLOURS.BLACK};
    transform: scale(0.9);
  }
`;
const ImportanceSecondaryStyles = css`
  background-color: ${BUTTON_COLOURS.TRANSPARENT};
  border: 0.2rem ${BUTTON_COLOURS.SECONDARY.BASE} solid;
  &:hover {
    background-color: ${BUTTON_COLOURS.SECONDARY.HOVER};
  }
  &:active {
    background-color: ${BUTTON_COLOURS.SECONDARY.HOVER};
    transform: scale(0.9);
  }
`;

const ImportanceTertiaryStyles = css`
  background-color: ${BUTTON_COLOURS.TRANSPARENT};

  &::after {
    content: "";
    border-bottom: 0.3rem ${BUTTON_COLOURS.SECONDARY.BASE} solid;
    display: flex;
  }
  &:hover {
    background-color: ${BUTTON_COLOURS.SECONDARY.HOVER};
  }
  &:active {
    background-color: ${BUTTON_COLOURS.SECONDARY.HOVER};
    transform: scale(0.9);
  }
`;

// Size styles
const SizeMediumStyles = css`
  padding: 1.2rem 1.6rem;
  font-size: ${BUTTON_SIZE.MEDIUM.BASE};
`;

const SizeSmallStyles = css`
  padding: 0.8rem 1.2rem;
  font-size: ${BUTTON_SIZE.SMALL.BASE};
`;

const SizeLargeStyles = css`
  padding: 2rem 2.4rem;
  font-size: ${BUTTON_SIZE.LARGE.BASE}; ;
`;

const StyledButton = styled(UnstyledButton)<{
  importance: string;
  size: string;
  isFullWidth: boolean;
}>`
  width: ${(props) => (props.isFullWidth ? "100%" : "auto")};
  font-size: 1.7rem;
  border-radius: 8px;
  transform: scale(1);
  ${TRANSITION_STYLES.SMOOTH_100};
  font-weight: bold;

  // Handles whether the CTA is Primary, Secondary or Tertiary styling
  ${(props) => {
    switch (props.importance) {
      case "primary":
        return ImportancePrimaryStyles;
        break;
      case "secondary":
        return ImportanceSecondaryStyles;
        break;
      case "tertiary":
        return ImportanceTertiaryStyles;
        break;
      default:
        return ImportancePrimaryStyles;
      // code block
    }
  }};

  // Handles whether the CTA is Primary, Secondary or Tertiary styling
  ${(props) => {
    switch (props.size) {
      case "medium":
        return SizeMediumStyles;
        break;
      case "large":
        return SizeLargeStyles;
        break;
      case "small":
        return SizeSmallStyles;
        break;
      default:
        return SizeMediumStyles;
    }
  }};
`;

export default StyledButton;
