import React from "react";
// import { StyledHeading } from "./heading.styles";
import "./heading.css";
// import { Heading } from "./heading.styles";

interface HeadingProps {
  /**
   * How important is the call to action?
   */
  //   colour?: "primary" | "secondary" | "tertiary";
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: "xxLarge" | "xLarge" | "large" | "medium" | "small" | "xSmall";
  textAlign?: "left" | "center" | "right";
  content?: string;
}

export const Heading = ({
  //   colour = "primary",
  as = "h3",
  size = "large",
  content,
  textAlign = "left",
  ...props
}: HeadingProps) => {
  const StyledHeading = as;

  return (
    <StyledHeading
      className={`heading-size--${size} heading-textAlign--${textAlign}`}
      {...props}
    >
      {content}
    </StyledHeading>
  );
};
