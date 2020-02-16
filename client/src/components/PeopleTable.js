import React, { Component } from 'react'
import styled from 'styled-components'


export const Container = styled.div`
display: grid;

border-top: 1px solid;
border-right: 1px solid;
border-left: 1px solid;
grid-template-columns: 
repeat(2, 1fr);
`
export const Header = styled.h4`
margin-left: 50%;
`
export const Span = styled.div`
border-left: 1px solid;
border-bottom: 1px solid;
`


export const PeopleTable = (props) => {


 
  

  let test = props.results.join()
  let result = test.replace(/[^\w\s]/gi, '').split('')
  
  let count = (e,arr)=>{
    e.preventDefault()
    let counter = {}

    for(let i=0; i < arr.length; i++) {
      if(count[arr[i]]){
        count[arr[i]] += 1
      } else {
       count[arr[i]] = 1
      }
  }

  let finalCount = Object.entries(count).forEach((l) => {
    let [key, value] = l;
    console.log(`${key}: ${value}`);
  })

    console.log(finalCount)

    
   return result

  }
  
//   let character =  result.map((letter )=>{
   

//   return(
//   <Container>

//   <Span>{letter}</Span>
// <Span>0</Span>
//      </Container>
//   )
// })

  return(
    <div>
     <h1>Let's Count!</h1>
     {/* {console.log(count(result))} */}

    <button onClick={((event)=>{count(event,result)})}>Count!</button>
          
    <Container>
   
 
<Header>Character</Header>
<Header>Count</Header>



    </Container>
 {test}
    </div>
  )
}
export default PeopleTable