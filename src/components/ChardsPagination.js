import Pagination from "react-bootstrap/Pagination";

const ChardsPagination =({next, prev,first,last})=> {
  return (
    <Pagination>
      <Pagination.First onClick={first} />
      <Pagination.Prev onClick={prev} />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next onClick={next} />
      <Pagination.Last onClick={last} />
    </Pagination>
  );
}

export default ChardsPagination 
