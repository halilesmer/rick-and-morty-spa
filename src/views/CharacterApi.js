import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
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
  const [currentPage, setCurrentPage] = useState(1);
  

  const getData = async () => {
    setSpinner(true);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${currentPage}`
    );
    const data = await response.json();
    setData(data.results);
    setPagiData(data);

    setSpinner(false);
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

 


  const filteredCharacter = data.filter((item) =>
  item.name.toLowerCase().includes(searchQueryTrimmed)
  );
  
  const next = () =>
  currentPage < pagiData.info.pages && setCurrentPage((prev) => prev + 1);

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const last = () => setCurrentPage(pagiData.info.pages);
  const first = () => setCurrentPage(pagiData.info.pages - (pagiData.info.pages - 1));
  
  const handlePageOnclick = (e) => {
    console.log("e", e);
    setCurrentPage(e);
  };


  return (
    <>
      <CardsPagination
        handlePageOnclick={handlePageOnclick}
        pagiData={pagiData}
        next={next}
        prev={prev}
        last={last}
        first={first}
        currentPage={Number.parseInt(currentPage, 10)}
      />

      {spinner ? (
        <Container
          style={{
            display: "flex",
            height: "80vh",
            justifyContent: "center",
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
        </Container>
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
