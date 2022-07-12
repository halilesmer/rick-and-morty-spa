import React, {useState} from 'react'
import {  Card,  } from "react-bootstrap";
import { LearnMoreModal } from "./LearnMoreModal";

export const FlipCard = ({ item }) => {
  const [modal, setModal] = useState(false)
  
  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);
  
  
  
  console.log("modal: ", modal);
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Card.Img className="card-image" variant="top" src={item.image} />
          </div>
          <div className="flip-card-back">
            <h1>{item.name}</h1>
            <button onClick={handleShow}>Learn More</button>
          </div>
        </div>
      </div>
      <LearnMoreModal modal={modal} />
    </>
  );
}
