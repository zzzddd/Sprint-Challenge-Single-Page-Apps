import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 30%;
`;

export default function CharacterCard(props) {
  return (
    <CardDiv>
      <Card>
        <CardImg
          top
          width="100%"
          src={props.character.image}
          alt={props.character.name}
        />
        <CardBody>
          <CardTitle>{props.character.name}</CardTitle>
          <CardSubtitle>
            {props.character.gender} {props.character.species}{" "}
            {props.character.status}
          </CardSubtitle>
          <CardText>Location: {props.character.location.name}</CardText>
          <CardText>Origin: {props.character.origin.name}</CardText>
          <CardText> {props.character.episode.length} episodes</CardText>
        </CardBody>
      </Card>
    </CardDiv>
  );
}
