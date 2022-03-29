import styled from "styled-components";
import { UnstyledInput } from "../UnstyledInput/UnstyledInput";
import { FUNCTIONAL_COLOURS } from "../../variables/DesignTokens";

export const CheckFacade = styled.div<{ isChecked: boolean }>`
  border: 0.2rem solid ${FUNCTIONAL_COLOURS.INFO.DARK};
  border-radius: 2.4rem;
  width: 2.4rem;
  height: 2.4rem;
  box-sizing: border-box;
  /* margin: 1.6rem auto auto 1.6rem; */

  &::after {
    width: 1.4rem;
    display: block;
    position: absolute;
    height: 1.4rem;
    background-color: ${FUNCTIONAL_COLOURS.INFO.DARK};
    border-radius: 1.6rem;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
    ${(props) => {
      let checked = props.isChecked;
      return checked ? `content: '';` : null;
    }};
  }
`;
export const Wrapper = styled.label<{
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isChecked: boolean;
  value: string;
}>`
  box-sizing: border-box;
  display: flex;
  padding: 1.6rem 1.6rem 1.6rem 2rem;
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
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin-left: 12px;
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

export const GroupWrapper = styled.div``;
