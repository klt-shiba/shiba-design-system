import styled, { css } from "styled-components";
import { BREAKPOINTS, COLUMN_SIZES } from "../../variables/DesignTokens";

export const Wrapper = styled.div<{ size: Record<string, any> }>`
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  border: 1px solid black;
  ${(props) => {
    let columns: number = props.size.xs;
    return COLUMN_SIZES[columns];
  }}}
  background-color: yellow;

  @media ${BREAKPOINTS.SM} {
    ${(props) => {
      let columns: number = props.size.sm;
      return COLUMN_SIZES[columns];
    }}
  }
  @media ${BREAKPOINTS.MD} {
    ${(props) => {
      let columns: number = props.size.md;
      return COLUMN_SIZES[columns];
    }}
  }
  @media ${BREAKPOINTS.LG} {
    ${(props) => {
      let columns: number = props.size.lg;
      return COLUMN_SIZES[columns];
    }}
  }
  @media ${BREAKPOINTS.XL} {
    ${(props) => {
      let columns: number = props.size.xl;
      return COLUMN_SIZES[columns];
    }}
  }
`;
