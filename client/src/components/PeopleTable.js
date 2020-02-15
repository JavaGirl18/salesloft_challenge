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
// const Table = styled.div`
// margin-left: 40%;
// `
export const PeopleTable = (props) => {
  const character =  props.results.map(letter =>{
const l = letter.split('')
 
  return(
  <div>

  <p>{l.join().length}</p>
  <br></br>
     </div>
  )
})
  return(
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
<Row>
  <Col size={1}>
 {character}
 </Col>
</Row>
     </Grid>
    </div>
  )
}
export default PeopleTable