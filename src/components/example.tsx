"use client";

import { keyframes, styled } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Example = styled.div`
  animation: ${rotate} 1s linear infinite;
  width: 500px;
  height: 500px;
  background-color: red;
`;