import React from "react";
import { Button } from "../Button/Button";
import { Wrapper } from "./buttonGroup.styles";

interface ButtonGroupProps {
  alignButtons?: "LEFT" | "CENTER" | "RIGHT";
}

const ButtonGroup = ({ alignButtons = "LEFT", ...props }: ButtonGroupProps) => {
  const { children } = props;
  return <Wrapper alignButtons={alignButtons}>{children}</Wrapper>;
};

export default ButtonGroup;
