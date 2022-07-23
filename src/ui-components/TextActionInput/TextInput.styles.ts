import styled, { css } from "styled-components";
import {
  BUTTON_COLOURS,
  FONT_COLOURS,
  TRANSITION_STYLES,
  BUTTON_SIZE,
  FUNCTIONAL_COLOURS,
} from "../../variables/DesignTokens";

export const InputWrapper = styled.div`
  position: relative;

  & button {
    padding: 1rem;
    margin-left: 0.8rem;
    line-height: 0;
    position: absolute;
    top: 50%;
    right: 0.2rem;
    transform: translate3d(0px, -50%, 0px);
    cursor: pointer;
  }
`;
