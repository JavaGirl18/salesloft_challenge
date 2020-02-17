import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  border-top: 1px solid;
  border-right: 1px solid;
  border-left: 1px solid;
  grid-template-columns: repeat(2, 1fr);
`;
export const Span = styled.div`
  border-left: 1px solid;
  border-bottom: 1px solid;
`;

export const Characters = props => {
  let letter = props.letters;

  let each_letter = Object.entries(letter).map(([key, value]) => {
    return (
      <Container key={key}>
        <Span>{key}</Span>
        <Span>{value}</Span>
      </Container>
    );
  });

  return <div>{each_letter}</div>;
};
export default Characters;
