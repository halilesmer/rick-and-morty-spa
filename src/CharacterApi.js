import React, { useEffect, useState } from "react";

import { Cards, Spinner } from "./Cards";

export const CharacterApi = ({ searchQuery }) => {
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(false)

  const getData = async () => {
    setSpinner(true)
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    setData(data.results);
    setSpinner(false);

  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Cards data={data} searchQuery={searchQuery} spinner={spinner} />
    </>
  );
};
