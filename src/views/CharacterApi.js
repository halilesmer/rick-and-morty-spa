import React, { useEffect, useState } from "react";
import {  Row } from "react-bootstrap";

import { Cards } from "../Cards";
import ChardsPagination from "../components/ChardsPagination";


export const CharacterApi = ({ searchQuery }) => {
  const [spinner, setSpinner] = useState(true);
  const [data, setData] = useState([])
// const [filteredCharacter, setFilteredCharacter] = useState([])


const getData = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`);
  const data = await response.json();
  // setFilteredCharacter(data.results);
  setData(data.results);

  setSpinner(false);
  

};

useEffect(() => {
  getData();
}, []);

const filteredCharacter = data.filter((item) =>
  item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
);

  
  // console.log("data: ", data);
  return (
    <>
      <ChardsPagination />
      {filteredCharacter && (
        <Row xs={1} md={2} className="g-4 card-container">
          {filteredCharacter.map((item) => {
            return (
              item.name
                .toLowerCase()
                .includes(searchQuery.trim().toLowerCase()) && (
                <Cards
                  key={item.id}
                  data={item}
                  searchQuery={searchQuery}
                  spinner={spinner}
                />
              )
            );
          })}
        </Row>
      )}
      {filteredCharacter.length < 1 && (
        <div className="searchResultAlert">
          "No results found. Please try another search"
        </div>
      )}
    </>
  );
};
