import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../../variables/DesignTokens";
import { Container } from "./Container";
import { Row } from "./Row";
import { Col } from "./Column";

export const Grid = ({ ...props }) => {
  const { fluid } = props;
  console.log(props);
  return (
    <Container fluid={fluid}>
      <Row>
        <Col size={{ xs: 12, md: 8 }}>Hello</Col>
        <Col size={{ xs: 12, md: 4 }}>Hello</Col>
      </Row>
    </Container>
  );
};
