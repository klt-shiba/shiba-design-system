import styled, { css } from "styled-components";
export const UnstyledInput = styled.input`
  -webkit-appearance: none;
  background-color: transparent;
  border: 0px solid;

  &:focus {
    outline: none;
  }
`;
