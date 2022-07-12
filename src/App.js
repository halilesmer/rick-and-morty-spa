import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Card.css";
import { Container, Row, Col, Card, Button, CardGroup } from "react-bootstrap";
import { ApiData } from "./ApiData";
import { LearnMoreModal } from "./LearnMoreModal";





function App() {
 
  return (
    <Container>
      <ApiData />
    </Container>
  );
}

export default App;
