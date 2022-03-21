import React from "react";
import { Button } from "../Button/Button";
import { Wrapper } from "./buttonGroup.styles";

interface ButtonGroupProps {
  alignButtons?: "LEFT" | "CENTER" | "RIGHT";
  stackButtons?: boolean;
  children?: JSX.Element[];
}

const ButtonGroup = ({
  alignButtons = "LEFT",
  stackButtons = false,
  children,
  ...props
}: ButtonGroupProps) => {
  return (
    <Wrapper alignButtons={alignButtons} stackButtons={stackButtons}>
      {children}
    </Wrapper>
  );
};

export default ButtonGroup;
