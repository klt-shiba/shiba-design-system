import styled, { css } from "styled-components";
import { UnstyledInput } from "../UnstyledInput/UnstyledInput";
import {
  BUTTON_COLOURS,
  FONT_COLOURS,
  TRANSITION_STYLES,
  BUTTON_SIZE,
} from "../../variables/DesignTokens";

export const StyledTextInput = styled(UnstyledInput)`
  border: 0.2rem solid black;
  width: 100%;
  display: flex;
  padding: 0.8rem;
  font-size: 1.7rem;
  box-sizing: border-box;

  &:focus {
    outline: 0.2rem solid blue;
    outline-offset: 0.2rem;
  }
`;
