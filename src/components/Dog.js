import React from "react";
import { useParams, Link } from 'react-router-dom';

function Dog(props) {
  const params = useParams();
  const isCurrentDog = params.name === props.name;
  return (
    <div>
      <Link to={`/dogs/${props.name}`}>
        <h1>{props.name}</h1>
      </Link>
      <img src={props.image} alt="dog" />
      {isCurrentDog &&
        <div>
          <h1>{`Name: ${props.name}`}</h1>
          <h2>{`Age: ${props.age}`}</h2>
          <ul>{props.facts.map((fact, i) => <li key={i}>{fact}</li>)}</ul>
        </div>
      }
    </div>
  );
}

export default Dog;