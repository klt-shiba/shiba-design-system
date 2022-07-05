import styled from "styled-components";
import {
  FUNCTIONAL_COLOURS,
  BUTTON_SIZE,
  TEXT_STYLES,
} from "../../variables/DesignTokens";

export const MessageSpan = styled.span<{
  alertType: "INLINE" | "BOX" | "GLOBAL";
}>`
  ${(props) => {
    let type = props.alertType;
    if (type === "GLOBAL") {
      return `justify-content: center`;
    }
  }};
  display: flex;
  & > svg {
    margin-right: 0.8rem;
  }
`;

export const Wrapper = styled.div<{
  alertType: "INLINE" | "BOX" | "GLOBAL";
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
  } else if (type === "GLOBAL") {
    return `background-color: ${FUNCTIONAL_COLOURS[severity].LIGHT};
    padding: 1.2rem;`;
  }
  return "none;";
}};


  & ${MessageSpan} span {
    ${TEXT_STYLES.COPY_MEDIUM};
    ${(props) => {
      let severity = props.severity;
      let type = props.alertType;
      return `color: ${FUNCTIONAL_COLOURS[severity].DARK};`;
    }}};
  }
`;
