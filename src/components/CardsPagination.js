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
  currentPage,
}) => {
  const totalPages = pagiData && pagiData.info.pages;

  const [pageArray, setPageArray] = useState([]);
  const initialWinSize = window.innerWidth;
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

  useEffect(() => {
    let totPages = parseInt(totalPages);
    let currentPage2 = parseInt(currentPage);
    let pageArr = [];
    if (totPages > 1) {
      if (totPages <= 9) {
        let i = 1;
        while (i <= totPages) {
          pageArr.push(i);
          i++;
        }
      } else {
        if (currentPage2 <= 5) pageArr = [1, 2, 3, 4, 5, 6, 7, 8, "", totPages];
        else if (totPages - currentPage2 <= 4)
          pageArr = [
            1,
            "",
            totPages - 7,
            totPages - 6,
            totPages - 5,
            totPages - 4,
            totPages - 3,
            totPages - 2,
            totPages - 1,
            totPages,
          ];
        else
          pageArr = [
            1,
            "",
            currentPage2 - 3,
            currentPage2 - 2,
            currentPage2 - 1,
            currentPage2,
            currentPage2 + 1,
            currentPage2 + 2,
            currentPage2 + 3,
            "",
            totPages,
          ];
      }
    }

    setPageArray(pageArr);
  }, [next, prev, first, last]);

  // console.log("pagiData: ", pagiData);
  // console.log("currentPage: ", currentPage);
  // console.log("testConsole: ", testConsole);

  return (
    <>
      <Pagination size={(resize < 500 ? "sm" : "") || (resize > 1000 && "lg")}>
        {pageArray &&
          pageArray.map((ele, ind) => {
            const toReturn = [];

            if (ind === 0) {
              toReturn.push(
                <Pagination.First
                  key={"firstpage"}
                  disabled={currentPage === 1}
                  onClick={first}
                />
              );

              toReturn.push(
                <Pagination.Prev
                  disabled={currentPage === 1}
                  key={"prevpage"}
                  onClick={prev}
                />
              );
            }

            if (ele === "") toReturn.push(<Pagination.Ellipsis key={ind} />);
            else
              toReturn.push(
                <Pagination.Item
                  key={ind}
                  active={currentPage === ele ? true : false}
                  onClick={
                    currentPage === ele
                      ? () => {}
                      : () => {
                          handlePageOnclick(ele);
                        }
                  }
                >
                  {ele}
                </Pagination.Item>
              );

            if (ind === pageArray.length - 1) {
              toReturn.push(
                <Pagination.Next
                  key={"nextpage"}
                  disabled={currentPage === totalPages}
                  onClick={next}
                />
              );

              toReturn.push(
                <Pagination.Last
                  key={"lastpage"}
                  disabled={currentPage === totalPages}
                  onClick={last}
                />
              );
            }

            return toReturn;
          })}
      </Pagination>
    </>
  );
};

export default CardsPagination;

/* 
// useEffect(() => {
//     let totPages = parseInt(totalPages);
//     let currentPage = parseInt(currentPage);
//     let pageArr = [];
//     if (totPages > 1) {
//       if (totPages <= 9) {
//         let i = 1;
//         while (i <= totPages) {
//           pageArr.push(i);
//           i++;
//         }
//       } else {
//         if (currentPage <= 5) pageArr = [1, 2, 3, 4, 5, 6, 7, 8, "", totPages];
//         else if (totPages - currentPage <= 4)
//           pageArr = [
//             1,
//             "",
//             totPages - 7,
//             totPages - 6,
//             totPages - 5,
//             totPages - 4,
//             totPages - 3,
//             totPages - 2,
//             totPages - 1,
//             totPages,
//           ];
//         else
//           pageArr = [
//             1,
//             "",
//             currentPage - 3,
//             currentPage - 2,
//             currentPage - 1,
//             currentPage,
//             currentPage + 1,
//             currentPage + 2,
//             currentPage + 3,
//             "",
//             totPages,
//           ];
//       }
//     }
//     setPageArray(pageArr);
//   }, [currentPage]);
   */
