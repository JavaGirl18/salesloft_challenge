import React, { Component } from 'react'
import styled from 'styled-components'


const Grid = styled.div`
margin-top: 20px;
border: solid; 
`
const Row = styled.div`
display: flex
`
const Col = styled.div`
flex: ${(props) => props.size};
border: solid;
padding: 20px;
`
const Table = styled.div`
display: none;
`
export const PeopleTable = (props) => (
  <div>
  <Grid>
    <h1>Let's Count!</h1>
    <Row>
      <Col size={2}>
Character
</Col>

   <Col size={2}>
Count
</Col>
 </Row>

     </Grid>
     </div>
)
export default PeopleTable