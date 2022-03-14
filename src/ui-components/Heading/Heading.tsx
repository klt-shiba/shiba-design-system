import React from "react";
import "./heading.css";
import { FONT_COLOURS } from "../../variables/DesignTokens";

interface HeadingProps {
  /**
   * What is the semantic heading?
   */
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * What size is the heading?
   */
  size: "xxLarge" | "xLarge" | "large" | "medium" | "small" | "xSmall";
  /**
   * What text alignment is the heading
   */
  textAlign?: "left" | "center" | "right";
  /**
   * What does the heading say?
   */
  content?: string;
  /**
   * What colour is the heading? Pass in colours from FONT_COLOURS object
   */
  colour?: string;
}

export const Heading = ({
  //   colour = "primary",
  as = "h3",
  size = "large",
  content,
  textAlign = "left",
  colour = `${FONT_COLOURS.BASE}`,
  ...props
}: HeadingProps) => {
  const StyledHeading = as;
  const colourStyles = {
    color: `${colour}`,
  };

  return (
    <StyledHeading
      className={`heading-size--${size} heading-textAlign--${textAlign}`}
      style={colourStyles}
      {...props}
    >
      {content}
    </StyledHeading>
  );
};
