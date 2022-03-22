import styled, { css } from "styled-components";
import { UnstyledInput } from "../UnstyledInput/UnstyledInput";
import {
  BUTTON_COLOURS,
  FONT_COLOURS,
  TRANSITION_STYLES,
  BUTTON_SIZE,
} from "../../variables/DesignTokens";

export const StyledTextInput = styled(UnstyledInput)`
  border: 2px solid black;
  width: 100%;
  display: flex;
  padding: 8px;
  font-size: 1.7rem;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid black;
    outline-offset: 4px;
  }
`;
