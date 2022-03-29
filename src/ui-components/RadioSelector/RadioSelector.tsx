import React, { useState } from "react";
import { Label } from "../Label/Label";
import {
  InvisibleInput,
  Wrapper,
  CheckFacade,
  ContentWrapper,
} from "./radioSelector.styles";

interface RadioSelectorProps {
  id: string;
  value: string;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const RadioSelector = ({
  id = "storybook-radioSelector",
  value = "I prefer dogs",
  label = "I love dogs",
  onClick,
  onChange,
  ...props
}: RadioSelectorProps): JSX.Element => {
  const [check, setChecked] = useState("");

  return (
    <>
      <InvisibleInput
        id={id}
        type="radio"
        aria-checked={check === value}
        value={value}
        checked={check === value}
      />
      <Wrapper
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log((e.target as HTMLInputElement).previousSibling);
          setChecked((e.target as HTMLInputElement).value);
        }}
        value={value}
        isChecked={check === value}
        htmlFor={id}
        {...props}
      >
        <CheckFacade isChecked={check === value} role="radio" />
        <ContentWrapper>{label}</ContentWrapper>
      </Wrapper>
    </>
  );
};
