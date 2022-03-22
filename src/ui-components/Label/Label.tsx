import React from "react";
import { StyledLabel } from "./label.styles";

interface LabelProps {
  /**
   *  Label
   */
  label?: string;
  /**
   *  Required id for label
   */
  id: string;
  /**
   *  Required to match label with input field
   */
  htmlFor: string;
}

/**
 * Input field label
 */
export const Label = ({
  id = "storybook-example-label",
  label,
  htmlFor,
  ...props
}: LabelProps) => {
  return (
    <StyledLabel id={id} {...props} htmlFor={htmlFor}>
      {label}
    </StyledLabel>
  );
};
