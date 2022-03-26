import React from "react";
import { Wrapper, MessageSpan } from "./alert.styles";

interface AlertProps {
  message: string;
  ariaLive: "off" | "assertive" | "polite";
  alertType: "INLINE" | "BOX";
  severity: "SUCCESS" | "INFO" | "WARNING" | "ERROR";
}

export const Alert = ({
  message,
  ariaLive,
  alertType = "INLINE",
  severity = "INFO",
}: AlertProps): JSX.Element => {
  return (
    <Wrapper aria-live={ariaLive} alertType={alertType} severity={severity}>
      <MessageSpan>{message}</MessageSpan>
    </Wrapper>
  );
};
