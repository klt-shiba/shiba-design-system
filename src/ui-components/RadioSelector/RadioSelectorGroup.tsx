import React, { useState } from "react";
import { GroupWrapper } from "./radioSelector.styles";

interface IRadioSelectorGroup {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  children?: JSX.Element[];
  setChecked?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const RadioSelectorGroup = ({
  onChange,
  children,
  setChecked,
  ...props
}: IRadioSelectorGroup) => {
  const [isChecked, setIsChecked] = useState("");
  return (
    <GroupWrapper onChange={onChange} {...props}>
      {children}
    </GroupWrapper>
  );
};
