import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import "./CardsPagination.css";

const CardsPagination = ({
  handlePageOnclick,
  pagiData,
  next,
  prev,
  first,
  last,
  count,
}) => {
  const totalPages = pagiData && pagiData.info.pages;

  const initialWinSize = window.innerWidth;
  console.log("siz2: ", initialWinSize);
  const [resize, setResize] = useState(initialWinSize);

/* set send to state the window size if changed */
  window.addEventListener(
    "resize",
    () => {
      const changedWindowSize = window.innerWidth;
      setResize(changedWindowSize);
    },
    false
  );

  return (
    <Pagination size={(resize < 500 ? "sm" : "") || (resize > 1000 && "lg")}>
      <Pagination.First disabled={count === 1} onClick={first} />
      <Pagination.Prev disabled={count === 1} onClick={prev} />
      <Pagination.Item
        disabled={count < 4}
        onClick={() =>
          handlePageOnclick(
            count < 4 ? "-" : totalPages - (pagiData.info.pages - 1)
          )
        }
      >
        {count < 4 ? "-" : totalPages - (pagiData.info.pages - 1)}
      </Pagination.Item>
      <Pagination.Ellipsis disabled />

      <Pagination.Item
        disabled={count <= 2}
        onClick={() => handlePageOnclick(count >= 3 ? count - 2 : "-")}
      >
        {count >= 3 ? count - 2 : "-"}
      </Pagination.Item>

      <Pagination.Item
        onClick={() => handlePageOnclick(count >= 2 ? count - 1 : "-")}
        disabled={count <= 1}
      >
        {count >= 2 ? count - 1 : "-"}
      </Pagination.Item>

      <Pagination.Item active={count}>{count}</Pagination.Item>

      <Pagination.Item
        disabled={count === totalPages}
        onClick={() =>
          handlePageOnclick(count === totalPages ? "-" : count + 1)
        }
      >
        {" "}
        {count === totalPages ? "-" : count + 1}
      </Pagination.Item>

      <Pagination.Item
        disabled={count === totalPages || count === totalPages - 1}
        onClick={() =>
          handlePageOnclick(
            count === totalPages || count === totalPages - 1 ? "-" : count + 2
          )
        }
      >
        {" "}
        {count === totalPages || count === totalPages - 1 ? "-" : count + 2}
      </Pagination.Item>

      <Pagination.Ellipsis disabled />

      <Pagination.Item
        disabled={count > totalPages - 3}
        onClick={() =>
          handlePageOnclick(count <= totalPages - 3 ? pagiData.info.pages : "-")
        }
      >
        {count <= totalPages - 3 ? pagiData.info.pages : "-"}
      </Pagination.Item>

      <Pagination.Next disabled={count === totalPages} onClick={next} />
      <Pagination.Last disabled={count === totalPages} onClick={last} />
    </Pagination>
  );
};

export default CardsPagination;
