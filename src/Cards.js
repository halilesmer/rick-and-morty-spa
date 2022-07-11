import React from "react";
import {  Row, Col, Card, CardGroup } from "react-bootstrap";

export const Cards = ({data}) => {
    console.log("data: ", data);
  return (
   <> {
      data.map((item) => { return (
                <Col key={item.id}>
                
                        <Card>
                          <Card.Img className="card-image" variant="top" src={item.image} />
                        </Card>
              
        </Col>
      );})}
      </>
    
  );
};
