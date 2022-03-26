import styled from "styled-components";
import { UnstyledInput } from "../UnstyledInput/UnstyledInput";
import { FUNCTIONAL_COLOURS } from "../../variables/DesignTokens";

export const Wrapper = styled.div<{
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isChecked: boolean;
}>`
  box-sizing: border-box;
  & label {
    padding: 1.6rem;
    ${(props) => {
      let checked = props.isChecked;
      return `border-left: ${
        checked
          ? `3px solid ${FUNCTIONAL_COLOURS.INFO.DARK};`
          : "3px solid transparent;"
      }`;
    }}
    ${(props) => {
      let checked = props.isChecked;
      return `background-color: ${
        checked ? `${FUNCTIONAL_COLOURS.INFO.LIGHT};` : "inherit;"
      }`;
    }}
    &:hover {
      background-color: ${FUNCTIONAL_COLOURS.INFO.LIGHT};
      cursor: pointer;
    }
  }
`;

export const InvisibleInput = styled(UnstyledInput)`
  position: absolute;
  clip: rect(0.1rem, 0.1rem, 0.1rem, 0.1rem);
  width: 0.1rem;
  height: 0.1rem;
  padding: 0px;

  &:focus + label {
    outline: 0.2rem solid blue;
    outline-offset: 0.2rem;
  }
`;
