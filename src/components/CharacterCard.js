import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.charInfo.image} wrapped ui={false} />
      <div>
        <p>{props.charInfo.name}</p>
        <p>
          {props.charInfo.species} {props.charInfo.status}
        </p>
        <p>
          Location: {props.charInfo.location.name}
          <br></br>
          Origin: {props.charInfo.origin.name}
        </p>
      </div>
     
    </div>
  );
}
