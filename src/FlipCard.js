import React from 'react'
import {  Card,  } from "react-bootstrap";


export const FlipCard = ({item}) => {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <Card.Img className="card-image" variant="top" src={item.image} />
        </div>
        <div class="flip-card-back">
          <h1>{item.name}</h1>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
