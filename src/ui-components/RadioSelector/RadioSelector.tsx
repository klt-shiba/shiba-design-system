import React, { useState } from "react";
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
  isChecked: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const RadioSelector = ({
  id = "storybook-radioSelector",
  value = "I prefer dogs",
  label = "I love dogs",
  isChecked,
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
        aria-checked={isChecked}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <Wrapper isChecked={isChecked} value={value} htmlFor={id} {...props}>
        <CheckFacade isChecked={isChecked} role="radio" />
        <ContentWrapper>{label}</ContentWrapper>
      </Wrapper>
    </>
  );
};
