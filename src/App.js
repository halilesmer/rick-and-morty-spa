import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Card.css";
import { Container, } from "react-bootstrap";
import { CharacterApi } from "./views/CharacterApi";
import SearchBanner from "./views/SearchBanner";
import "./views/SearchBanner.css";





function App() {
  const [searchQuery, setSearchQuery] = useState('');

const onChange=(e)=> {
  setSearchQuery(e.currentTarget.value)
}

  return (
    <Container>
    <SearchBanner searchQuery={searchQuery} onChange={onChange}/>
      <CharacterApi searchQuery={searchQuery} />
    </Container>
  );
}

export default App;
