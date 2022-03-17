import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../../variables/DesignTokens";
import { Container } from "./Container";
import { Row } from "./Row";
import { Col } from "./Column";

interface GridProps {
  /**
   * How many columns do you want?
   */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /**
   * How large is each column?
   */
  size?: Record<string, any>;
}

export const Grid = ({
  columns = 12,
  size = { xs: 1 },
  ...props
}: GridProps) => {
  const { fluid } = props;
  console.log(columns);

  return (
    <Container fluid={fluid}>
      <Row>
        {[...Array(parseInt(columns))].map((column) => {
          console.log("Ran");
          return <Col size={size}>Hi mate</Col>;
        })}
      </Row>
    </Container>
  );
};
