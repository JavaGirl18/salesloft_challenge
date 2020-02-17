import React from "react";
import styled from "styled-components";

import { ConnectPeople } from "../containers/ConnectPeople";

const Box = styled.div`
  width: 1000px;
  margin-left: 100px;
`;

export const LandingPage = () => (
  <Box>
    <ConnectPeople />
  </Box>
);
