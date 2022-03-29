import React from "react";
import { RadioSelector } from "./RadioSelector";
import { GroupWrapper } from "./radioSelector.styles";

interface IRadioSelectorGroup {
  onChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: JSX.Element[];
}
export const RadioSelectorGroup = ({
  onChange,
  children,
  ...props
}: IRadioSelectorGroup) => {
  return (
    <GroupWrapper onChange={(e) => console.log(e)}>
      <RadioSelector id="radio-1" value="radio-1" label="I love dogs" />
      <RadioSelector id="radio-2" value="radio-2" label="I love cats" />
      <RadioSelector id="radio-3" value="radio-3" label="I love rabbits" />
      <RadioSelector id="radio-4" value="radio-4" label="I love sleeping" />
    </GroupWrapper>
  );
};
