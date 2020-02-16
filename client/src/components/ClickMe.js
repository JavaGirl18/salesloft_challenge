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
  height: 300px;
  width 300px;
  margin-left: 900px;
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
// const Click = () => (
//   <ButtonBox>
//         <button onClick={()=>count()}>Count!</button>
//           </ButtonBox>
     
//      )
    return(
      <div>

      <PeopleTable results={results}/>
      {/* <Click /> */}
      </div>
    )
  
    }
    
    // App.propTypes = {
    //   count: PropTypes.func.isRequired
    // };
    // ;
