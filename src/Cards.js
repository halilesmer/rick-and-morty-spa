import React from "react";
import { Row, Col, Card, CardGroup } from "react-bootstrap";

export const Cards = ({ data }) => {
  console.log("data: ", data);
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
