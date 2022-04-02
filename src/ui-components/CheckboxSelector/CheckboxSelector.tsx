import React, { useState } from "react";
import { Label } from "../Label/Label";
import {
  InvisibleInput,
  Wrapper,
  CheckFacade,
  ContentWrapper,
} from "./checkbox.styles";

interface ICheckboxSelector {
  id: string;
  value: string;
  label: string;
  isChecked: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const CheckboxSelector = ({
  id = "storybook-radioSelector",
  value = "I prefer dogs",
  label = "I love dogs",
  isChecked,
  onClick,
  onChange,
  ...props
}: ICheckboxSelector): JSX.Element => {
  const [check, setChecked] = useState("");

  return (
    <>
      <InvisibleInput
        id={id}
        type="checkbox"
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
