import styled, { css } from "styled-components";
import UnstyledButton from "./unstyledButton.styles";
import {
  BUTTON_COLOURS,
  FONT_COLOURS,
  TRANSITION_STYLES,
} from "../../variables/DesignTokens";

// Importance Styles
const ImportancePrimaryStyles = css`
  background-color: ${BUTTON_COLOURS.PRIMARY.BASE};
  color: ${FONT_COLOURS.WHITE};
  transform: scale(1);
  &:hover {
    background-color: ${BUTTON_COLOURS.PRIMARY.HOVER};
    color: ${FONT_COLOURS.BLACK};
  }
  &:active {
    background-color: ${BUTTON_COLOURS.PRIMARY.ACTIVE};
    color: ${FONT_COLOURS.WHITE};
    transform: scale(0.9);
  }
`;
const ImportanceSecondaryStyles = css`
  background-color: ${BUTTON_COLOURS.TRANSPARENT};
  border: 0.2rem ${BUTTON_COLOURS.SECONDARY.BASE} solid;
  &:hover {
    border: 0.2rem ${BUTTON_COLOURS.SECONDARY.HOVER} solid;
  }
`;

// Size styles
const SizeMediumStyles = css`
  padding: 12px 16px;
  font-size: 1.7rem;
`;
const StyledButton = styled(UnstyledButton)<{
  importance: string;
  size: string;
}>`
  font-size: 1.7rem;
  border-radius: 8px;
  ${TRANSITION_STYLES.SMOOTH_300};
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
        return `background-color: yellow`;
        break;
      default:
        return `background-color: blue`;
      // code block
    }
  }};

  // Handles whether the CTA is Primary, Secondary or Tertiary styling
  ${(props) => {
    switch (props.size) {
      case "medium":
        return `${SizeMediumStyles}`;
        break;
      case "large":
        return `padding: 20px 24px`;
        break;
      case "small":
        return `padding: 8px 12px`;
        break;
      default:
        return `padding: 12px 16px`;
    }
  }};
`;

export default StyledButton;
