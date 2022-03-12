import styled, { css } from "styled-components";
import UnstyledButton from "./unstyledButton.styles";

// Importance Styles
const PrimaryStyles = css`
  background-color: blue;

  &:hover {
    background-color: light-blue;
  }
`;

const SecondaryStyles = css`
  background-color: red;

  &:hover {
    background-color: light-red;
  }
`;

const StyledButton = styled(UnstyledButton)<{
  importance: string;
  size: string;
}>`
  // Handles whether the CTA is Primary, Secondary or Tertiary styling
  border-radius: 8px;
  ${(props) => {
    switch (props.importance) {
      case "primary":
        return `${PrimaryStyles}`;
        break;
      case "secondary":
        return `${SecondaryStyles}`;
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
        return `padding: 12px 16px`;
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
