import { Pagination } from "react-bootstrap";
import './CardsPagination.css';

const CardsPagination = ({ pagiData, next, prev, first, last, count }) => {
  console.log("count: ", count);
  console.log("pagiData: ", pagiData);
  return (
    <Pagination>
      <Pagination.First onClick={first} />
      <Pagination.Prev onClick={prev} />
      <Pagination.Item disabled={count < 4}>
        {count < 4 ? '-' : pagiData && pagiData.info.pages - (pagiData.info.pages - 1)}
      </Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item disabled={count <= 2}>
        {count >= 3 ? count - 2 : '-'}
      </Pagination.Item>

      <Pagination.Item disabled={count <= 1}>
        {count >= 2 ? count - 1 : '-'}
      </Pagination.Item>
      <Pagination.Item active={count}>{count}</Pagination.Item>


      <Pagination.Item
        disabled={count === (pagiData && pagiData.info.pages)}
      > {count === (pagiData && pagiData.info.pages) ?
        '-' :
        count + 1}
      </Pagination.Item>

      <Pagination.Item disabled={count === (pagiData && pagiData.info.pages )||
        count === (pagiData && pagiData.info.pages ) - 1} > {
          count === (pagiData && pagiData.info.pages ) ||
            count === (pagiData && pagiData.info.pages ) - 1 ?
            '-' :
            count + 2}
      </Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item
        disabled={count > (pagiData && pagiData.info.pages - 3)}>
        {
       count <= (pagiData && pagiData.info.pages -3) ?
          pagiData.info.pages :
          '-'}
        
        </Pagination.Item>

      <Pagination.Next onClick={next} />
      <Pagination.Last onClick={last} />
    </Pagination>
  );
}

export default CardsPagination 
