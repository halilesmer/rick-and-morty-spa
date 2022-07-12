import React, { useEffect, useState } from "react";
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
  // const filter = data.filter(character => character.name.toLowerCase().includes(searchQuery.toLowerCase()))


  // setSearchedData(data.filter(character => character.name.toLowerCase().includes(searchQuery.toLowerCase())))


  console.log("searchedData: ",);
  return (
    <Row xs={1} md={2} className="g-4 card-container">
      {data && data.map((item) => {
        return (item.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) &&
          <Col key={item.id} style={{ width: 'auto' }}>
            <Card>
              <FlipCard item={item} />
            </Card>
          </Col>

        )
      })}
    </Row>
  );
};


