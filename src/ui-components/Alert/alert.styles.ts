import styled from "styled-components";
import {
  FUNCTIONAL_COLOURS,
  ALERT_FONT_COLOURS,
} from "../../variables/DesignTokens";

export const MessageSpan = styled.span``;

export const Wrapper = styled.div<{
  alertType: "INLINE" | "BOX";
  severity: "SUCCESS" | "INFO" | "WARNING" | "DANGER";
}>`

${(props) => {
  let type = props.alertType;
  let severity = props.severity;
  if (type === "BOX") {
    return `border: 0.2rem solid ${FUNCTIONAL_COLOURS[severity].DARK}; 
    background-color: ${FUNCTIONAL_COLOURS[severity].LIGHT}; 
    border-left: 0.4rem solid ${FUNCTIONAL_COLOURS[severity].DARK}; 
    padding: 1.2rem;`;
  }
  return "none;";
}};


  & ${MessageSpan} {
    font-weight: 500;
    ${(props) => {
      let severity = props.severity;
      return `color: ${ALERT_FONT_COLOURS[severity]};`;
    }}};
  }
`;
