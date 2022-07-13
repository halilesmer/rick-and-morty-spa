import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import { Cards } from "./Cards";

export const CharacterApi = ({ searchQuery }) => {
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [filteredData, setFilteredData] = useState();

  const getData = async () => {
    // setSpinner(true)
    const response = await fetch(`https://rickandmortyapi.com/api/character/`);
    const data = await response.json();
    setData(data.results);
    setSpinner(false);

    // const filter = data && data.filter(item => item.name.toLowerCase().includes(searchQuery.trim().toLowerCase()))

    // console.log("filter: ", filter);
  };

  useEffect(() => {
    getData();
  }, []);

  const filter =data && data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );

  console.log("filter: ", filter);
  // console.log("data: ", data);
  console.log("data: ", data);
  return (
    <>
      {filter.length >0 && (
        <Row xs={1} md={2} className="g-4 card-container">
          {filter.map((item) => {
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
      ) 
    }
       { filter.length <1 && ( <div className="searchResultAlert">
          "No results found. Please try another search"
        </div>)}
    </>
  );
};
