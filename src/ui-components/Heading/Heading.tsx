import React from "react";
import { xxLarge } from "./heading.styles";

interface HeadingProps {
  /**
   * How important is the call to action?
   */
  //   colour?: "primary" | "secondary" | "tertiary";
  is: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  style: "xxLarge" | "xLarge" | "large" | "medium" | "small" | "xSmall";
  content?: string;
}

export const Heading = ({
  //   colour = "primary",
  is = "h3",
  style = "large",
  content,
  ...props
}: HeadingProps) => {
  const HeadingIs = is;
  return (
    <HeadingIs style={xxLarge} {...props}>
      {content}
    </HeadingIs>
  );
};
