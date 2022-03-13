import React from "react";
import "./button.css";
import StyledButton from "./button.styles";

interface ButtonProps {
  /**
   * How important is the call to action?
   */
  importance?: "primary" | "secondary" | "tertiary";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional ID
   */
  id?: string;
  /**
   * Defines width of button
   */
  isFullWidth: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  importance = "primary",
  id,
  size = "medium",
  label,
  isFullWidth = false,
  ...props
}: ButtonProps) => {
  const mode = "primary"
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <StyledButton
      importance={importance}
      size={size}
      id={id}
      isFullWidth={isFullWidth}
    >
      {label}
    </StyledButton>
  );
};
