import React from "react";
import { Wrapper, MessageSpan } from "./alert.styles";

interface AlertProps {
  id: string;
  message: string;
  ariaLive: "off" | "assertive" | "polite";
  alertType: "INLINE" | "BOX";
  severity: "SUCCESS" | "INFO" | "WARNING" | "DANGER";
}

export const Alert = ({
  message,
  ariaLive,
  alertType = "INLINE",
  severity = "INFO",
  id,
}: AlertProps): JSX.Element => {
  return (
    <Wrapper
      id={id}
      aria-live={ariaLive}
      alertType={alertType}
      severity={severity}
    >
      <MessageSpan>{message}</MessageSpan>
    </Wrapper>
  );
};
