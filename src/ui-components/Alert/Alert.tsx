import React, { useEffect, useState } from "react";
import { Wrapper, MessageSpan } from "./alert.styles";
import { ALERT_ICON } from "../../variables/Icons";

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
  const [quote, setQuote] = useState("");
  const kanyeMessage = async () => {
    const response = await fetch(`https://api.kanye.rest`);
    if (!response.ok) {
      console.log("not working");
      return "Kanye API is not working";
    }
    const data = await response.json();
    setQuote(data.quote.toString());
  };

  useEffect(() => {
    kanyeMessage();
  }, []);

  return (
    <Wrapper
      id={id}
      aria-live={ariaLive}
      alertType={alertType}
      severity={severity}
    >
      <MessageSpan>
        {ALERT_ICON[severity]}
        {message || quote}
      </MessageSpan>
    </Wrapper>
  );
};
