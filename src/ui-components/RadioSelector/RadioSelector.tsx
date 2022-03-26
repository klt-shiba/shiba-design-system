import React, { useState } from "react";
import { Label } from "../Label/Label";
import { InvisibleInput, Wrapper, CheckFacade } from "./radioSelector.styles";

interface RadioSelectorProps {
  id: string;
  value: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const RadioSelector = ({
  id = "storybook-radioSelector",
  value = "I prefer dogs",
  onClick,
  ...props
}: RadioSelectorProps): JSX.Element => {
  const [check, setChecked] = useState(false);

  return (
    <Wrapper
      aria-role="radio"
      onClick={(e) => {
        e.preventDefault();
        setChecked(!check);
      }}
      isChecked={check}
      {...props}
    >
      <CheckFacade isChecked={check} />
      <InvisibleInput
        id={id}
        type="radio"
        aria-checked={check}
        value={value}
        checked={check}
      />
      <Label id={`${id}-label`} htmlFor={id} label={value} />
    </Wrapper>
  );
};
