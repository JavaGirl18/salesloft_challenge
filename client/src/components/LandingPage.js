import React from 'react'
import styled from 'styled-components'

import { ConnectPeople } from '../containers/ConnectPeople'


const Page = styled.div`
  display: grid;
  grid-template 46px 1fr / 1fr;
  height: 100%;
  width: 100%;
`;

const Box = styled.div`
  width: 1000px;
  margin-left: 100px;
`;

export const LandingPage = () => (


    <Box>
      <ConnectPeople />
    </Box>

);
