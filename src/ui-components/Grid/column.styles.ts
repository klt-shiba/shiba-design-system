import styled, { css } from "styled-components";
import {
  BREAKPOINTS,
  COLUMN_SIZES,
  PUSH_COLUMN_SIZES,
} from "../../variables/DesignTokens";

export const Wrapper = styled.div<{
  size: Record<string, any>;
  push: Record<string, any>;
}>`
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  border: 1px solid black;
  background-image: linear-gradient(to bottom, rgba(240, 255, 40, 1) 0%, rgba(240, 255, 40, 1) 100%), linear-gradient(to bottom, rgba(240, 40, 40, 1) 0%, rgba(240, 40, 40, 1) 100%);
  background-clip: content-box, padding-box;
  ${(props) => {
    let columns: number = props.size.xs;
    return COLUMN_SIZES[columns];
  }}}
    ${(props) => {
      let push: number = props.push.xs;
      return PUSH_COLUMN_SIZES[push];
    }}}
  background-color: yellow;

  @media ${BREAKPOINTS.SM} {
    ${(props) => {
      let columns: number = props.size.sm;
      return COLUMN_SIZES[columns];
    }}
    ${(props) => {
      let push: number = props.push.sm;
      return PUSH_COLUMN_SIZES[push];
    }}}
  }
  @media ${BREAKPOINTS.MD} {
    ${(props) => {
      let columns: number = props.size.md;
      return COLUMN_SIZES[columns];
    }}
    ${(props) => {
      let push: number = props.push.md;
      return PUSH_COLUMN_SIZES[push];
    }}}
  }
  @media ${BREAKPOINTS.LG} {
    ${(props) => {
      let columns: number = props.size.lg;
      return COLUMN_SIZES[columns];
    }}
    ${(props) => {
      let push: number = props.push.lg;
      return PUSH_COLUMN_SIZES[push];
    }}}
  }
  @media ${BREAKPOINTS.XL} {
    ${(props) => {
      let columns: number = props.size.xl;
      return COLUMN_SIZES[columns];
    }}
    ${(props) => {
      let push: number = props.push.xl;
      return PUSH_COLUMN_SIZES[push];
    }}}
  }
`;
