import React, { useState } from "react";
import { RadioSelector } from "./RadioSelector";
import { GroupWrapper } from "./radioSelector.styles";

interface IRadioSelectorGroup {
  onChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: JSX.Element[];
  setChecked?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const RadioSelectorGroup = ({1
  onChange,
  children,
  setChecked,
  ...props
}: IRadioSelectorGroup) => {
  const [isChecked, setIsChecked] = useState("");
  return (
    <GroupWrapper onChange={onChange} {...props}>
      <RadioSelector
        id="radio-1"
        value="radio-1"
        label="I love dogs"
        isChecked={isChecked === "radio-1"}
      />
      <RadioSelector
        id="radio-2"
        value="radio-2"
        label="I love cats"
        isChecked={isChecked === "radio-2"}
      />
      <RadioSelector
        id="radio-3"
        value="radio-3"
        label="I love rabbits"
        isChecked={isChecked === "radio-3"}
      />
      <RadioSelector
        id="radio-4"
        value="radio-4"
        label="I love sleeping"
        isChecked={isChecked === "radio-4"}
      />
    </GroupWrapper>
  );
};
