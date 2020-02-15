import React, { Component } from 'react'
import styled from 'styled-components'
import { ClickMe } from './ClickMe'


export const Grid = styled.div`
margin-top: 20px;
`
export const Row = styled.div`
display: flex
`
export const Col = styled.div`
flex: ${(props) => props.size};
border: solid;
padding: 20px;
`
export const Title = styled.h1`
font-size: 30px;
margin-left: 300px;
`


export const People =  (props) => {

const people = props.people.people.map(person => {


  return (
 <Row>
          <Col size={4}>
        Name:{person.display_name}
        </Col >
        <Col size={5}>
        Email:{person.email_address}
        </Col>
        <Col size={3}>
        Title:{person.title}
       </Col>
     </Row>
  )
})

return (
  <div>

  <ClickMe 
            people={props.people}/>
    <Grid>
    <Row>
      <Col size={6}>
    <Title>All People</Title>
    </Col>
    </Row>
  
 {people}
  </Grid>
  </div>
)

}

export default People;