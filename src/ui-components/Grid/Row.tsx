import React from "react";
import styled, { css } from "styled-components";
// import { Column } from "./Column";

interface RowProps {}

export const Row = ({ ...props }) => {
  console.log(props.children);
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;

  > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: 0.8rem;
    padding-left: 0.8rem;
    box-sizing: border-box;
  }
`;
