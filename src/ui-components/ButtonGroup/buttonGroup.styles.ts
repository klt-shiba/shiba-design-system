import styled, { css } from "styled-components";
import {
  BREAKPOINTS,
  COLUMN_SIZES,
  ALIGN_ELEMENT,
} from "../../variables/DesignTokens";

export const Wrapper = styled.div<{ alignButtons: string }>`
  display: flex;
  ${(props) => {
    return ALIGN_ELEMENT[props.alignButtons];
  }}
`;
