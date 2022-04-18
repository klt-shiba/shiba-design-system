import React from "react";
import {
  MdDangerous,
  MdCheckCircle,
  MdWarning,
  MdInfo,
  IconContext,
} from "react-icons/md";
import { ALERT_FONT_COLOURS } from "./DesignTokens";

const returnStyledIcon = (SEVERITY: string): JSX.Element => {
  return (
    <IconContext.Provider
      value={{
        color: `${ALERT_FONT_COLOURS[SEVERITY]}`,
        size: "2.4rem",
      }}
    >
      <div>{returnIcon(SEVERITY)}</div>
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
