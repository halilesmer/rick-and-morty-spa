import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FlipCard } from "./FlipCard";

export const Cards = ({ data, searchedValue }) => {
  console.log("searchedValue: ", searchedValue);

  const [searchedData, setSearchedData] = useState();

  // useEffect(() => {
  //   if (searchedValue==='') {
  //     setSearchedData(data)
  //   }else{
  //     const filter = data.filter(character => character.name.toLowerCase().includes(searchedValue.toLowerCase()))
  //     console.log("filter: ", filter);
  //   }
  // }, [searchedValue])
  // const filter = data.filter(character => character.name.toLowerCase().includes(searchedValue.toLowerCase()))


  // setSearchedData(data.filter(character => character.name.toLowerCase().includes(searchedValue.toLowerCase())))


  console.log("searchedData: ",);
  return (
    <Row xs={1} md={2} className="g-4 card-container">
      {data && data.map((item) => {
        return (item.name.toLowerCase().includes(searchedValue.trim().toLowerCase()) &&
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


/*   console.log("searchedData: ", searchedData);
  return (
    <Row xs={1} md={2} className="g-4 card-container">
      {data && data.map((item) => {
        return (
          <Col key={item.id} style={{ width: 'auto' }}>
            <Card>
              <FlipCard item={item} />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}; */