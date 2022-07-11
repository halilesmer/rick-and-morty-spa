import React, { useEffect, useState } from "react";
import "./App.css";
import "./Card.css";
import { Container, Row, Col, Card, Button, CardGroup } from "react-bootstrap";
import { ApiData } from "./ApiData";

function App() {
 
  return (
    <Container>
      <ApiData />
      
    </Container>
  );
}

export default App;
