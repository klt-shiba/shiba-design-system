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
  /*
   * Where should the first column start?
   */
  push?: Record<string, any>;
  /**
   * Is Grid 100% width
   */
  fluid?: boolean;
}

export const Grid = ({
  columns = 12,
  size = { xs: 1 },
  push = { xs: 1 },
  fluid,
  ...props
}: GridProps) => {
  console.log(columns);

  return (
    <Container fluid={fluid}>
      <Row>
        {[...Array(parseInt(columns))].map((column) => {
          return (
            <Col push={push} size={size}>
              Hi mate
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
