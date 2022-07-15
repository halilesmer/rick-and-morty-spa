import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Cards from "../components/Cards";
import CardsPagination from "../components/CardsPagination";
import alertImage from "../assets/alert.webp";

export const CharacterApi = ({ searchQuery }) => {
  const [spinner, setSpinner] = useState(true);
  const [data, setData] = useState([]);
  const [pagiData, setPagiData] = useState("");
  const searchQueryTrimmed = searchQuery
    .trim()
    .replace(/  +/g, " ")
    .toLowerCase();
  // const [filteredCharacter, setFilteredCharacter] = useState([])
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/");
  const [count, setCount] = useState(1);

  const getData = async () => {
    setSpinner(true);
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
  item.name.toLowerCase().includes(searchQueryTrimmed)
  );
  
  const next = () =>
  count < pagiData.info.pages && setCount((prev) => prev + 1);

  const prev = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  const last = () => setCount(pagiData.info.pages);
  const first = () => setCount(pagiData.info.pages - (pagiData.info.pages - 1));
  
  const handlePageOnclick = (e) => {
    console.log("e", e);
    setCount(e);
  };
  
  // const testFilter = filteredCharacter.map((item) => {
    //   return item.name
    //     .trim()
    //     .toLowerCase()
    //     .includes(searchQueryTrimmed);
    //   })
    //   console.log("testFilter: ", testFilter);
    
    //   console.log("pagiData: ", pagiData);
    
    // console.log("searchQueryTrimmed: ", searchQueryTrimmed);
    console.log("filteredCharacter: ", filteredCharacter);

  return (
    <>
      <CardsPagination
        handlePageOnclick={handlePageOnclick}
        pagiData={pagiData}
        next={next}
        prev={prev}
        last={last}
        first={first}
        count={count}
      />

      {spinner ? (
        <div
          style={{
            display: "flex",
            height: "80vh",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Spinner
            style={{
              alignSelf: "center",
              fontSize: "30px",
              width: "100px",
              height: "100px",
            }}
            animation="border"
            variant="danger"
          />
        </div>
      ) : (
        <>
          {data && (
            <Row xs={1} md={2} className="g-4 card-container">
              {data
                .filter((item) =>
                  item.name.toLowerCase().includes(searchQueryTrimmed)
                )
                .map((item) => (
                  <Cards
                    key={item.id}
                    data={item}
                    searchQuery={searchQuery}
                    spinner={spinner}
                  />
                ))}
              {filteredCharacter.length < 1 && (
                <div className="searchResultAlert">
                  "I'm sorry. I was not able to find a match."
                  <img src={alertImage} alt="Jerry's Mytholog" width={300} />
                </div>
              )}
            </Row>
          )}
        </>
      )}
    </>
  );
};

/* {
  filteredCharacter.length < 1 && (
    <div className="searchResultAlert">
      "No results found. Please try another search"
      <img src={alertImage} alt="Jerry's Mytholog" width={300} />
    </div>
  );
}  */
