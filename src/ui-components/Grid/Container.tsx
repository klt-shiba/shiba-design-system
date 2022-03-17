import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { BREAKPOINTS, COLOURS } from "../../variables/DesignTokens";
import { Row } from "./Row";

interface ContainerProps {
  /**
   * How important is the call to action?
   */
  fluid?: boolean;
}

const Wrapper = styled.div<{ fullwidth: boolean }>`
  margin: 0 auto;
  display: flex;
  max-width: ${(props) => (props.fullwidth ? `100%` : `100%`)};
  background-color: ${COLOURS.neutral_100};
  padding-left: calc(1.6rem);
  padding-right: calc(1.6rem);
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
}

  @media ${BREAKPOINTS.MD} {
    background-color: ${COLOURS.neutral_100};
    max-width: ${(props) => (props.fullwidth ? `100%` : `86.4rem`)};
    padding-left: calc(2.4rem);
    padding-right: calc(2.4rem);
  }
  @media ${BREAKPOINTS.LG} {
    background-color: ${COLOURS.neutral_100};
    max-width: ${(props) => (props.fullwidth ? `100%` : `116.6rem`)};
    padding-left: calc(3.2rem);
    padding-right: calc(3.2rem);
  }
  @media ${BREAKPOINTS.XL} {
    background-color: ${COLOURS.neutral_100};
    max-width: ${(props) => (props.fullwidth ? `100%` : `131.2rem`)};
  }
`;

export const Container = ({ fluid = false, ...props }: ContainerProps) => {
  const { children } = props;
  return <Wrapper fullwidth={fluid}>{children}</Wrapper>;
};
