import React from "react";

import styled from "styled-components";

const CardContainer = styled.div`
height: 400px;
width: 400px;
background: teal;
`;

export default function CharacterCard(props) {
  return (
    
  <CardContainer>
  
  <h1>{props.name}</h1>
  <p>{props.gender}</p>
  <p>{props.species}</p>
  <p>{props.status}</p>
  <div>{props.image}</div>

  </CardContainer>
  )
}