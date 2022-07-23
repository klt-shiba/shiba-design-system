import React, { useState } from "react";
import { Button } from "../Button/Button";
import { TextInput } from "../TextInput/TextInput";

interface PasswordInputProps {
  hasButton: boolean;
}

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <TextInput
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
      {hasTextButton && (
        <Button
          label={textButtonLabel}
          id={textButtonID}
          type="button"
          isDisabled={false}
          importance="tertiary"
          size="small"
        />
      )}
    </>
  );
};
