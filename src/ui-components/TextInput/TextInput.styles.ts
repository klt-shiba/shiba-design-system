import styled, { css } from "styled-components";
import { UnstyledInput } from "../UnstyledInput/UnstyledInput";
import {
  BUTTON_COLOURS,
  FONT_COLOURS,
  TRANSITION_STYLES,
  BUTTON_SIZE,
  FUNCTIONAL_COLOURS,
} from "../../variables/DesignTokens";

export const StyledTextInput = styled(UnstyledInput)<{
  hasError: boolean;
}>`
  ${(props) => {
    let hasError = props.hasError;
    return `border: 0.1rem solid ${
      hasError
        ? FUNCTIONAL_COLOURS.DANGER.DARK
        : FUNCTIONAL_COLOURS.NEUTRAL[500]
    };   background-color: ${
      hasError
        ? FUNCTIONAL_COLOURS.DANGER.LIGHT
        : FUNCTIONAL_COLOURS.NEUTRAL[100]
    }; 
    
    &:hover {
      background-color: ${
        hasError
          ? FUNCTIONAL_COLOURS.NEUTRAL[100]
          : FUNCTIONAL_COLOURS.NEUTRAL[200]
      };
      border: 0.1rem solid ${
        hasError
          ? FUNCTIONAL_COLOURS.DANGER.DARK
          : FUNCTIONAL_COLOURS.NEUTRAL[600]
      };
    }`;
  }};
  width: 100%;
  display: flex;
  padding: 1.2rem;
  font-size: 1.7rem;
  line-height: 2.4rem;
  box-sizing: border-box;
  ${TRANSITION_STYLES.SMOOTH_100};

  &:active {
    background-color: ${FUNCTIONAL_COLOURS.NEUTRAL[100]};
    border: 0.1rem solid ${FUNCTIONAL_COLOURS.NEUTRAL[600]};
  }

  &:focus {
    outline: 0.2rem solid black;
    outline-offset: 0.2rem;
    background-color: ${FUNCTIONAL_COLOURS.NEUTRAL[100]};
  }

  &:invalid {
    border: 0.1em solid ${FUNCTIONAL_COLOURS.DANGER.DARK};
    background-color: ${FUNCTIONAL_COLOURS.DANGER.LIGHT};
  }
`;
