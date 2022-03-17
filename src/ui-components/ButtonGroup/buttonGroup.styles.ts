import styled, { css } from "styled-components";
import {
  BREAKPOINTS,
  COLUMN_SIZES,
  ALIGN_ELEMENT,
} from "../../variables/DesignTokens";

export const Wrapper = styled.div<{
  alignButtons: string;
  stackButtons: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => {
    return props.stackButtons ? `column` : "row";
  }};

  ${(props) => {
    return ALIGN_ELEMENT[props.alignButtons];
  }};

  > Button + Button {
    margin: ${(props) => {
      return props.stackButtons ? `1.6rem 0 0 0 ` : "0 0 0 1.6rem";
    }}
`;
