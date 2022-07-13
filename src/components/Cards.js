import React from "react";
import { Col, Card, Spinner } from "react-bootstrap";
import FlipCard  from "./FlipCard";

 const Cards = ({ data, searchQuery, spinner }) => {


  // useEffect(() => {
  //   if (searchQuery==='') {
  //     setSearchedData(data)
  //   }else{
  //     const filter = data.filter(character => character.name.toLowerCase().includes(searchQuery.toLowerCase()))
  //     console.log("filter: ", filter);
  //   }
  // }, [searchQuery])
  // const filteredData = data.filter((character) =>
  //   character.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <>
      {spinner === true && <Spinner animation="border" variant="danger" />}

      {data && (
        <Col style={{ width: "auto" }}>
          <Card>
            <FlipCard item={data} />
          </Card>
        </Col>
      )}
    </>
  );
};
export default Cards;