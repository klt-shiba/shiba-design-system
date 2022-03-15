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
