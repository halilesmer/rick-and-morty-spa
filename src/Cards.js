import React from "react";
import { Row, Col, Card, Spinner } from "react-bootstrap";
import { FlipCard } from "./FlipCard";

export const Cards = ({ data, searchQuery, spinner }) => {
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
      {spinner === true && <Spinner animation="border" variant="danger" />}

      {filteredData.length > 0
        && filteredData.map((item) => {

       return  ( filteredData ?
            item.name
              .toLowerCase()
              .includes(searchQuery.trim().toLowerCase()) && (
              <Col key={item.id} style={{ width: "auto" }}>
                <Card>
                  <FlipCard item={item} />
                </Card>
              </Col>
            )
            :
            <div className="searchResultAlert">
              "No results found. Please try another search"
            </div>)

        })
      }
    </Row>
  );
};
