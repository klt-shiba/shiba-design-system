import React from "react";
import styled, { css } from "styled-components";
import { Column } from "./Column";

export const Row = ({ children }) => {
  return (
    <Wrapper>
      {React.Children.toArray(children).map((item) => {
        return item && <Column>{item.props.children}</Column>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 -8px 0 -8px;
  }
`;
