import React, { Component } from 'react'
import styled from 'styled-components'
import { ClickMe } from './ClickMe'


export const Title = styled.h1`
font-size: 30px;
margin-left: 300px;

`
export const Container = styled.div`
display: grid;
justify-content:center;
border-top: 1px solid;
border-right: 1px solid;
border-left: 1px solid;
grid-template-columns: 
repeat(3, 1fr);
`

export const Span = styled.div`
border-left: 1px solid;
border-bottom: 1px solid;

padding: 10px 10px 10px 10px;
`
export const Header = styled.h4`
margin-left: 50%;
`
export const Flex = styled.div`
display: flex;
`

export const People =  (props) => {

const people = props.people.people.map((person, index) => {

  return (
 <Container key={index}>
   
        <Span>
        {person.display_name}
        </Span>
  <Span>
       {person.email_address}
      </Span>
      <Span>
        {person.title}

     </Span>
     </Container>

  )
})

return (
  <div>
    <Title>All People</Title>
<Container>
   <Header>Name</Header>
   <Header>Email</Header>
   <Header>Title</Header>
   </Container>
  {people}

  <ClickMe 
            people={props.people} />
  </div>
)

}

export default People;