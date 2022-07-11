import React from "react";
import { Row, Col, Card, CardGroup } from "react-bootstrap";

export const Cards = ({ data }) => {
  return (
      <Row xs={1} md={2} className="g-4">
        {data.map((item) => {
          return (
            <Col key={item.id}>
              <Card>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <Card.Img
                        className="card-image"
                        variant="top"
                        src={item.image}
                      />
                    </div>
                    <div class="flip-card-back">
                      <h1>{item.name}</h1>
                      <button>Learn More</button>
                    </div>
                  </div>
                </div>
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