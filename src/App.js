import React, { useEffect, useState } from "react";
import "./App.css";
import "./Card.css";
import { Container, Row, Col, Card, Button, CardGroup } from "react-bootstrap";
import { ApiData } from "./ApiData";
import { Cards } from "./Cards";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    setData(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data: ", data);

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
          <Cards data={data} />
      </Row>
    </Container>
  );
}

export default App;
