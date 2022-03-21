import styled, { css } from "styled-components";
import {
  BUTTON_COLOURS,
  FONT_COLOURS,
  TRANSITION_STYLES,
  BUTTON_SIZE,
} from "../../variables/DesignTokens";

export const UnstyledInput = styled.input`
  -webkit-appearance: none;
  background-color: transparent;
  border: 0px solid;

  &:focus {
    outline: none;
  }
`;
