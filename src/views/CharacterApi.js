import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import { Cards } from "../Cards";
import ChardsPagination from "../components/ChardsPagination";

export const CharacterApi = ({ searchQuery }) => {
  const [spinner, setSpinner] = useState(true);
  const [data, setData] = useState([]);
  const [pagiData, setPagiData] = useState("");

  // const [filteredCharacter, setFilteredCharacter] = useState([])
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/");
  const [count, setCount] = useState(1);

  const getData = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${count}`
    );
    // const response = await fetch(`https://rickandmortyapi.com/api/character/`);
    const data = await response.json();
    // setFilteredCharacter(data.results);
    setData(data.results);
    setPagiData(data);

    setSpinner(false);
  };

  useEffect(() => {
    getData();
  }, [count]);

  const filteredCharacter = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  const next = () => setCount((prev) => prev + 1);
  const prev = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  const last = () => setCount(pagiData.info.pages);
  const first = () => setCount(pagiData.info.pages - (pagiData.info.pages-1));

  /*  */

  console.log("count: ", count);
  console.log("pagiData: ", pagiData);

  console.log("data: ", data);
  return (
    <>
      <ChardsPagination next={next} prev={prev} last={last} first={first} />
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
