import React from "react";
import { Wrapper } from "./column.styles";

interface ColumnProps {
  /*
   * How many columns should the component take up
   */

  size: Record<string, any>;
}
export const Col = ({ size, ...props }: ColumnProps) => {
  const { children } = props;
  return <Wrapper size={size}>{children}</Wrapper>;
};
