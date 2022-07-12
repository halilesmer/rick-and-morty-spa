import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Card.css";
import { Container, } from "react-bootstrap";
import { CharacterApi } from "./CharacterApi";
import SearchBanner from "./SearchBanner";





function App() {
 
  return (
    <Container>
    <SearchBanner/>
      <CharacterApi />
    </Container>
  );
}

export default App;
