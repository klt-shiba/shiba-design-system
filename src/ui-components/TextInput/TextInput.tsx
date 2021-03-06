import React, { useState } from "react";
import { StyledTextInput } from "./TextInput.styles";
import { Button } from "../Button/Button";

interface TextInputProps {
  /**
   *  Required id for label
   */
  id: string;
  /**
   *  Required aria label
   */
  ariaLabelledBy: string;
  /**
   *  Required name of inputfield
   */
  name: string;
  /**
   *  Sets whether the textfield is valid or invalid
   */
  ariaInvalid: boolean;
  /**
   *  Sets whether the field is required or not
   */
  required: boolean;
  /**
   *  Sets description of text field
   */
  ariaDescribedBy: string | undefined;
  /**
   *  Sets the type of text field
   */
  type: "text" | "email" | "password" | "number";
  /**
   *  Sets what the field should expect and tries to autocomplete
   */
  hasError: boolean;
  /**
   *  Sets what the field should expect and tries to autocomplete
   */
  autoComplete?: string;
  hasTextButton?: boolean;
  textButtonLabel?: string;
  textButtonID?: string;
}

export const TextInput = ({
  id,
  name,
  ariaLabelledBy,
  ariaInvalid = false,
  required = false,
  ariaDescribedBy,
  autoComplete,
  hasError,
  hasTextButton = true,
  textButtonLabel = "Show",
  textButtonID,
  type = "text",
  ...props
}: TextInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const hasButton = hasTextButton;

  return (
    <>
      <StyledTextInput
        id={id}
        name={name}
        aria-labelledby={ariaLabelledBy}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedBy}
        required={required}
        value={inputValue}
        type={type}
        hasError={hasError}
        autoComplete={autoComplete}
        onChange={(e) => {
          e.preventDefault();
          setInputValue(e.target.value);
        }}
        {...props}
      />
    </>
  );
};
