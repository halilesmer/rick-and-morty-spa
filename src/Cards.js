import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FlipCard } from "./FlipCard";

export const Cards = ({ data }) => {
  return (
      <Row xs={1} md={2} className="g-4">
        {data.map((item) => {
          return (
            <Col key={item.id} style={{width:'auto'}}>
              <Card>
               <FlipCard item={item}/>
              </Card>
            </Col>
          );
        })}
      </Row>
  );
};


/* export const Cards = ({ data }) => {
  return (
      <Row xs={1} md={2} className="g-4">
        {data.map((item) => {
          return (
            <Col key={item.id}>
              <Card>
                <Card.Img
                  className="card-image"
                  variant="top"
                  src={item.image}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
  );
};
 */