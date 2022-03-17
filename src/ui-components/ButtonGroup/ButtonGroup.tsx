import React from "react";
import { Button } from "../Button/Button";
import { Wrapper } from "./buttonGroup.styles";

interface ButtonGroupProps {
  alignButtons?: "LEFT" | "CENTER" | "RIGHT";
  stackButtons?: boolean;
}

const ButtonGroup = ({
  alignButtons = "LEFT",
  stackButtons = false,
  ...props
}: ButtonGroupProps) => {
  const { children } = props;
  return (
    <Wrapper alignButtons={alignButtons} stackButtons={stackButtons}>
      {children}
    </Wrapper>
  );
};

export default ButtonGroup;
