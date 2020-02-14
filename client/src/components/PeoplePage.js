import React from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap'

const Box = styled.div`
  display: grid;
  grid-template 46px 1fr / 1fr;
  height: 100%;
  width: 100%;
`;


const Click = () => (
  <Box>
  <h1>Click Me!</h1>
  </Box>
)

export const PeoplePage = () => {
  <Box>
  <Click />
  </Box>
}