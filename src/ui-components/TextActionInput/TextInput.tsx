import React, { useState } from "react";
import { Button } from "../Button/Button";
import { TextInput as VanillaTextInput } from "../TextInput/TextInput";
import { InputWrapper } from "./TextInput.styles";

interface TextActionInputProps {
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
  hasButton: boolean;
}

export const TextInput = ({
  id,
  name,
  ariaLabelledBy,
  ariaInvalid = false,
  required = false,
  ariaDescribedBy,
  hasError,
  type,
  hasButton = true,
  ...props
}: TextActionInputProps) => {
  return (
    <InputWrapper>
      <VanillaTextInput
        id={id}
        name={name}
        aria-labelledby={ariaLabelledBy}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedBy}
        required={required}
        type={type}
        hasError={hasError}
        {...props}
      />
      {hasButton && (
        <Button
          label={"James"}
          id={"Jimbo"}
          type="button"
          isDisabled={false}
          importance="tertiary"
          size="small"
        />
      )}
    </InputWrapper>
  );
};
