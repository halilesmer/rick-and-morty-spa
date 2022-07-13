import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FlipCard } from "./FlipCard";

export const Cards = ({ data, searchQuery }) => {
  console.log("searchQuery: ", searchQuery);

  // useEffect(() => {
  //   if (searchQuery==='') {
  //     setSearchedData(data)
  //   }else{
  //     const filter = data.filter(character => character.name.toLowerCase().includes(searchQuery.toLowerCase()))
  //     console.log("filter: ", filter);
  //   }
  // }, [searchQuery])
  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <Row xs={1} md={2} className="g-4 card-container">
      {filteredData &&
        filteredData.map((item) => {
          return (
            item.name
              .toLowerCase()
              .includes(searchQuery.trim().toLowerCase()) && (
              <Col key={item.id} style={{ width: "auto" }}>
                <Card>
                  <FlipCard item={item} />
                </Card>
              </Col>
            )
          );
        })}
      {filteredData.length <1 && (
        <div className="searchResultAlert">
          "No results found. Please try another search"
        </div>
      )}
    </Row>
  );
};
