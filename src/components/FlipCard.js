import React, { useState } from 'react'
import { Card, } from "react-bootstrap";
import LearnMoreModal  from "./LearnMoreModal";

 const FlipCard = ({ item }) => {
  const [modal, setModal] = useState(false)

  const handleClose = (e) => {
    // console.log("e: ", e.target.className);
    setModal(false)
  };
  const handleShow = () => setModal(true);



  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Card.Img className="card-image" variant="top" src={item.image} />
          </div>
          <div className="flip-card-back">
            <h4>{item.name}</h4>
            <button onClick={handleShow}>Learn More</button>
          </div>
        </div>
      </div>
      <LearnMoreModal item={item} handleClose={handleClose} modal={modal} />
    </>
  );
}
export default FlipCard;