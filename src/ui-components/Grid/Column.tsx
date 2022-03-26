import React from "react";
import { Wrapper } from "./column.styles";

interface ColumnProps {
  /*
   * How many columns should the component take up
   */
  size: Record<string, any>;
  /*
   * Where should the first column start?
   */
  push?: Record<string, any>;
  children?: JSX.Element[] | JSX.Element | string;
}
export const Col = ({ size, push, children, ...props }: ColumnProps) => {
  return (
    <Wrapper push={push} size={size}>
      {children}
    </Wrapper>
  );
};
