import React from "react";
import { Card, Icon } from "reactstrap";
export default function LocationCard({ name, type, dimension, residents }) {
  // return <span>todo: location</span>;
  const typeDimension = `${type} (${dimension})`;
  return (
    <span>
      <Card >
        <Card.Content header={name} />
        <Card.Content description={typeDimension} />
        <Card.Content extra>
          <p name="user" />
          {residents.length} Residents
        </Card.Content>
      </Card>
    </span>
  );
  }