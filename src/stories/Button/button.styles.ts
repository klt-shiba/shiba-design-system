import styled, { css } from "styled-components";
import UnstyledButton from "./unstyledButton.styles";

// Importance Styles
const ImportancePrimaryStyles = css`
  background-color: blue;

  &:hover {
    background-color: lightblue;
  }
`;
const ImportanceSecondaryStyles = css`
  background-color: red;

  &:hover {
    background-color: light-red;
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
  // Handles whether the CTA is Primary, Secondary or Tertiary styling
  border-radius: 8px;
  ${(props) => {
    switch (props.importance) {
      case "primary":
        return `${ImportancePrimaryStyles}`;
        break;
      case "secondary":
        return `${ImportanceSecondaryStyles}`;
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
