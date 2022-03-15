import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../../variables/DesignTokens";

interface ContainerProps {
  /**
   * How important is the call to action?
   */
  fluid?: boolean;
  as?: string;
}

const Wrapper = styled.div<{ fullwidth: boolean }>`
  margin: 0 auto;
  display: flex;
  max-width: ${(props) => (props.fullwidth ? `100%` : `100%`)};
  background-color: blue;
  padding-left: calc(1.6rem);
  padding-right: calc(1.6rem);
  box-sizing: border-box;

  @media ${BREAKPOINTS.MD} {
    background-color: red;
    max-width: ${(props) => (props.fullwidth ? `100%` : `86.4rem`)};
    padding-left: calc(2.4rem);
    padding-right: calc(2.4rem);
  }
  @media ${BREAKPOINTS.LG} {
    background-color: yellow;
    max-width: ${(props) => (props.fullwidth ? `100%` : `116.6rem`)};
    padding-left: calc(3.2rem);
    padding-right: calc(3.2rem);
  }
  @media ${BREAKPOINTS.XL} {
    background-color: purple;
    max-width: ${(props) => (props.fullwidth ? `100%` : `131.2rem`)};
  }
`;

export const Container = ({ fluid = false, ...children }: ContainerProps) => {
  useEffect(() => {
    console.log(window.innerWidth);
  }, [window.innerWidth]);
  return <Wrapper fullwidth={fluid}>Hello</Wrapper>;
};
