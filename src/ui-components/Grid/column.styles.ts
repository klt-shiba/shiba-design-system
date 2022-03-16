import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../../variables/DesignTokens";

export const Wrapper = styled.div<{ size: object }>`
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  ${(props) => {
    switch (props.size.xs) {
      case 1:
        return `flex: 0 0 8.333333%; max-width: 8.333333%;`;
        break;
      case 2:
        return "flex: 0 0 16.666667%; max-width: 16.666667%;";
        break;
      case 3:
        return "flex: 0 0 25%; max-width: 25%;";
        break;
      case 4:
        return "flex: 0 0 33.333333%; max-width: 33.333333%;";
        break;
      case 5:
        return "flex: 0 0 41.666667%; max-width: 41.666667%;";
        break;
      case 6:
        return "flex: 0 0 50%; max-width: 50%;";
        break;
      case 7:
        return "flex: 0 0 58.333333%; max-width: 58.333333%;";
        break;
      case 8:
        return "flex: 0 0 66.666667%; max-width: 66.666667%;";
        break;
      case 9:
        return "flex: 0 0 75%; max-width: 75%;";
        break;
      case 10:
        return "flex: 0 0 83.333333%; max-width: 83.333333%;";
        break;
      case 11:
        return "flex: 0 0 91.666667%; max-width: 91.666667%;";
        break;
      case 12:
        return "flex: 0 0 100%; max-width: 100%;";
        break;
      default:
        return "";
    }
  }}
  background-color: yellow;

  @media ${BREAKPOINTS.SM} {
    ${(props) => {
      switch (props.size.sm) {
        case 1:
          return `flex: 0 0 8.333333%; max-width: 8.333333%;`;
          break;
        case 2:
          return "flex: 0 0 16.666667%; max-width: 16.666667%;";
          break;
        case 3:
          return "flex: 0 0 25%; max-width: 25%;";
          break;
        case 4:
          return "flex: 0 0 33.333333%; max-width: 33.333333%;";
          break;
        case 5:
          return "flex: 0 0 41.666667%; max-width: 41.666667%;";
          break;
        case 6:
          return "flex: 0 0 50%; max-width: 50%;";
          break;
        case 7:
          return "flex: 0 0 58.333333%; max-width: 58.333333%;";
          break;
        case 8:
          return "flex: 0 0 66.666667%; max-width: 66.666667%;";
          break;
        case 9:
          return "flex: 0 0 75%; max-width: 75%;";
          break;
        case 10:
          return "flex: 0 0 83.333333%; max-width: 83.333333%;";
          break;
        case 11:
          return "flex: 0 0 91.666667%; max-width: 91.666667%;";
          break;
        case 12:
          return "flex: 0 0 100%; max-width: 100%;";
          break;
        default:
          return "";
      }
    }}
  }
  @media ${BREAKPOINTS.MD} {
    ${(props) => {
      switch (props.size.md) {
        case 1:
          return `flex: 0 0 8.333333%; max-width: 8.333333%;`;
          break;
        case 2:
          return "flex: 0 0 16.666667%; max-width: 16.666667%;";
          break;
        case 3:
          return "flex: 0 0 25%; max-width: 25%;";
          break;
        case 4:
          return "flex: 0 0 33.333333%; max-width: 33.333333%;";
          break;
        case 5:
          return "flex: 0 0 41.666667%; max-width: 41.666667%;";
          break;
        case 6:
          return "flex: 0 0 50%; max-width: 50%;";
          break;
        case 7:
          return "flex: 0 0 58.333333%; max-width: 58.333333%;";
          break;
        case 8:
          return "flex: 0 0 66.666667%; max-width: 66.666667%;";
          break;
        case 9:
          return "flex: 0 0 75%; max-width: 75%;";
          break;
        case 10:
          return "flex: 0 0 83.333333%; max-width: 83.333333%;";
          break;
        case 11:
          return "flex: 0 0 91.666667%; max-width: 91.666667%;";
          break;
        case 12:
          return "flex: 0 0 100%; max-width: 100%;";
          break;
        default:
          return "";
      }
    }}
  }
  @media ${BREAKPOINTS.LG} {
    ${(props) => {
      switch (props.size.lg) {
        case 1:
          return `flex: 0 0 8.333333%; max-width: 8.333333%;`;
          break;
        case 2:
          return "flex: 0 0 16.666667%; max-width: 16.666667%;";
          break;
        case 3:
          return "flex: 0 0 25%; max-width: 25%;";
          break;
        case 4:
          return "flex: 0 0 33.333333%; max-width: 33.333333%;";
          break;
        case 5:
          return "flex: 0 0 41.666667%; max-width: 41.666667%;";
          break;
        case 6:
          return "flex: 0 0 50%; max-width: 50%;";
          break;
        case 7:
          return "flex: 0 0 58.333333%; max-width: 58.333333%;";
          break;
        case 8:
          return "flex: 0 0 66.666667%; max-width: 66.666667%;";
          break;
        case 9:
          return "flex: 0 0 75%; max-width: 75%;";
          break;
        case 10:
          return "flex: 0 0 83.333333%; max-width: 83.333333%;";
          break;
        case 11:
          return "flex: 0 0 91.666667%; max-width: 91.666667%;";
          break;
        case 12:
          return "flex: 0 0 100%; max-width: 100%;";
          break;
        default:
          return "";
      }
    }}
  }
  @media ${BREAKPOINTS.XL} {
    ${(props) => {
      switch (props.size.xl) {
        case 1:
          return `flex: 0 0 8.333333%; max-width: 8.333333%;`;
          break;
        case 2:
          return "flex: 0 0 16.666667%; max-width: 16.666667%;";
          break;
        case 3:
          return "flex: 0 0 25%; max-width: 25%;";
          break;
        case 4:
          return "flex: 0 0 33.333333%; max-width: 33.333333%;";
          break;
        case 5:
          return "flex: 0 0 41.666667%; max-width: 41.666667%;";
          break;
        case 6:
          return "flex: 0 0 50%; max-width: 50%;";
          break;
        case 7:
          return "flex: 0 0 58.333333%; max-width: 58.333333%;";
          break;
        case 8:
          return "flex: 0 0 66.666667%; max-width: 66.666667%;";
          break;
        case 9:
          return "flex: 0 0 75%; max-width: 75%;";
          break;
        case 10:
          return "flex: 0 0 83.333333%; max-width: 83.333333%;";
          break;
        case 11:
          return "flex: 0 0 91.666667%; max-width: 91.666667%;";
          break;
        case 12:
          return "flex: 0 0 100%; max-width: 100%;";
          break;
        default:
          return "";
      }
    }}
  }
`;
