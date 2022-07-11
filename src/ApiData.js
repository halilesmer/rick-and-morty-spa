import React, { useEffect, useState } from "react";

import { Cards } from "./Cards";

export const ApiData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    setData(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data: ", data);

  return <Cards data={data} />;
};
