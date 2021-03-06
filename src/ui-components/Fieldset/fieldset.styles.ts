import styled, { css } from "styled-components";
import {
  BUTTON_COLOURS,
  FONT_COLOURS,
  TRANSITION_STYLES,
  BUTTON_SIZE,
} from "../../variables/DesignTokens";

export const StyledFieldSet = styled.fieldset`
  margin: 0;
  border: none;
  padding: 0;
  display: block;

  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;
