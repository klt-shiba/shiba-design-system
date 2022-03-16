import React from "react";
import { Wrapper } from "./column.styles";

interface ColumnProps {
  /*
   * How many columns should the component take up
   */
  size?: object;
}

const breakpointObj = {
  xs: 6,
  md: 12,
};

export const Col = ({ size = breakpointObj, ...props }: ColumnProps) => {
  console.log(props.children);
  return <Wrapper size={size}>{props.children}</Wrapper>;
};
