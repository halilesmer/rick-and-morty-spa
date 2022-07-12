import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Card.css";
import { Container, } from "react-bootstrap";
import { CharacterApi } from "./CharacterApi";
import SearchBanner from "./SearchBanner";





function App() {
  const [searchedValue, setSearchQuery] = useState('');

const onChange=(e)=> {
  setSearchQuery(e.currentTarget.value)
}

  return (
    <Container>
    <SearchBanner searchedValue={searchedValue} onChange={onChange}/>
      <CharacterApi searchedValue={searchedValue} />
    </Container>
  );
}

export default App;
