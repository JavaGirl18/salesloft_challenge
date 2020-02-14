import React, { Component } from 'react'
import styled from 'styled-components'

class People extends Component {


  render () {
    const people = this.props.people.allPeople.map((person, index) => {

      return (
      <div key={index}>
        <ul>
          <li>
        Name:{person.display_name}
        <br></br>
        Email:{person.email_address}
        <br></br>
        Title:{person.title}
        </li>
        </ul>
      </div>
    )
  })
  return (
    <div>
      {/* <h1>All People</h1> */}
      {people}
    </div>
  )
}
}

 

export default People;