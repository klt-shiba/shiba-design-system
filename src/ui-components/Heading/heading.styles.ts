import styled, { css } from "styled-components";
import React from "react";
import { Heading } from "./Heading";

// export const Heading = styled(AnotherHeading)<{ textAlign: string }>`
//   text-align: ${(props) => {
//     switch (props.textAlign) {
//       case "left":
//         return "left";
//         break;
//       case "center":
//         return "center";
//         break;
//       case "right":
//         return "right";
//         break;
//       default:
//         return "left";
//     }
//   }};
// `;

export const AnotherHeading = styled(Heading)<{ size: string; as: string }>`
  color: red;
`;
