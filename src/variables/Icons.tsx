import React from "react";
import { MdDangerous, MdCheckCircle, MdWarning, MdInfo } from "react-icons/md";
import { ALERT_FONT_COLOURS } from "./DesignTokens";
import { IconContext } from "react-icons";

export const StyledIcon = (SEVERITY: any): JSX.Element => {
  return (
    <IconContext.Provider
      value={{
        color: `${ALERT_FONT_COLOURS[SEVERITY]}`,
        size: "2.4rem",
      }}
    >
      {returnIcon(SEVERITY)}
    </IconContext.Provider>
  );
};

const returnIcon = (SEVERITY: string): JSX.Element => {
  switch (SEVERITY) {
    case "SUCCESS":
      return <MdCheckCircle />;
      break;
    case "INFO":
      return <MdInfo />;
      break;
    case "WARNING":
      return <MdWarning />;
      break;
    case "DANGER":
      return <MdDangerous />;
      break;
    default:
      return <MdInfo />;
  }
};
