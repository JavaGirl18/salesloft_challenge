import React, { Component, useState } from "react";
import styled from "styled-components";
import { Characters } from "./Characters";

export const Container = styled.div`
  display: grid;
  border-top: 1px solid;
  border-right: 1px solid;
  border-left: 1px solid;
  grid-template-columns: repeat(2, 1fr);
`;
export const Header = styled.h4`
  margin-left: 50%;
`;
export const Span = styled.div`
  border-left: 1px solid;
  border-bottom: 1px solid;
`;

export const Button = styled.button`
height: 50px;
border-radius: 10px;
background-color: light-blue;
`
class PeopleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: []
    };
  }
  render() {
    let handleClick = (event, result) => {
      let resultsOfCount = count(event, result);
      this.setState({ letters: resultsOfCount });
    };

    let test = this.props.results.join();
    let result = test.replace(/[^\w\s]/gi, "").split("");

    let count = (e, arr) => {
      e.preventDefault();
      let counter = {};

      for (let i = 0; i < arr.length; i++) {
        if (counter[arr[i]]) {
          counter[arr[i]] += 1;
        } else {
          counter[arr[i]] = 1;
        }
      }
      return counter;
    };

    return (
      <div>
        <h1>Let's Count!</h1>

        <Button
          onClick={event => {
            handleClick(event, result);
          }}
        >
          Count!
        </Button>

        <Container>
          <Header>Character</Header>
          <Header>Count</Header>
        </Container>
        <Characters letters={this.state.letters} />
      </div>
    );
  }
}
export default PeopleTable;
