import React from 'react'
import styled from 'styled-components'
import PeopleTable from './PeopleTable'




export const ClickMe = (props) => {

    const results = props.people.people.map(person =>{
      return (
    person.email_address
      )
    })

    return(
      <div>
      <PeopleTable results={results}/>
      </div>
    )
  
    }
    