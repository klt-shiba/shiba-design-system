import React from "react";
import { StyledFieldSet } from "./fieldset.styles";

interface FieldSetProps {
  /**
   *  Required id for label
   */
  id: string;
  /**
   *  Required to match label with input field
   */
  children?: JSX.Element[];
}

/**
 * Input field label
 */
export const Fieldset = ({
  id = "storybook-example-fieldset",
  children,
  ...props
}: FieldSetProps) => {
  return (
    <StyledFieldSet id={id} {...props}>
      {children}
    </StyledFieldSet>
  );
};
