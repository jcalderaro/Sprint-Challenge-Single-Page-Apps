import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
margin: auto;
height: 250px;
width: 420px;
margin-right: 7%;
background: lightblue;
color: black;
display: center;
`;

export default function CharacterCard(props) {
  return (

    <CardContainer>

      <h1>{props.name}</h1>
      <h2>{props.gender}</h2>
      <h2>{props.species}</h2>
      <h2>{props.status}</h2>
      <h3>{props.image}</h3>

    </CardContainer>
  )
}