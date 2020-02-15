import React from 'react'
import styled from 'styled-components'
import PeopleTable from './PeopleTable'
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  margin-top: 30px;
`

const Box = styled.div`
  display: grid;
  box-shadow: 0 0 6px 0 rgba(58,58,58,0.24);
  width: 400px;
  height: 300px;
  border-top: 6px solid #4a90e2;
  grid-template: 30% 1fr / 1fr;
`

const ButtonBox = styled.div`
  margin-left: 30px;
  margin-right: 30px;

  p {
    font-size: 20px;
  }
`
 const Button = styled.div`
border-radius: 20px;
 `
// const Logo = () => (
//   <FlexBox>

//   <Button>All People</Button>
//   </FlexBox>
// )
// const CountTable = (props) => (
// character={props.} 
// )

export const ClickMe = (props) => {
 const characters= [];
    const results = props.people.people.map(person =>{
      return (
    person.email_address
      )
    })
const Click = () => (
  <ButtonBox>
        <button onClick={()=>count()}>Count!</button>
          </ButtonBox>
     
     )
    return(
      <Box>
      <PeopleTable results={results}/>

      <Click />
      </Box>
    )
  
    }
    
    // App.propTypes = {
    //   count: PropTypes.func.isRequired
    // };
    // ;
