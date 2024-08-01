import { Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import BoardInfo from "./BoardInfo";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function BoardList() {
  // 사용자목록 데이터 state
  const [list, setList] = useState([]);
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const p_page = search.get("page");
  const page = p_page === null ? 1 : Number(p_page);

  const [pageDTO, setPageDTO] = useState({ endPage: 3 });

  // 보드전체조회 paging => 조회정보 state에 저장
  async function callAPI(_page) {
    const result = await axios.get(`http://localhost/board?page=${_page}`);
    setList(result.data.list);
    setPageDTO(result.data.dto);
    console.log(result.data.dto);
  }
  // 렌더링 이후 데이터베이스 1회만 요청
  useEffect(() => {
    callAPI(page);
  }, [page]);
  return (
    <div>
      <NavLink to={"board"}>
        <h1>리스트</h1>
      </NavLink>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>content</th>
            <th>writer</th>
            <th>wdt</th>
          </tr>
        </thead>
        <tbody>
          {list.map((board) => {
            return (
              <tr key={board.board_no}>
                <td>{board.board_no}</td>
                <td>
                  <NavLink to={`${board.board_no}`}>{board.title}</NavLink>
                </td>
                <td>{board.content}</td>
                <td>{board.writer}</td>
                <td>{board.wdt}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* <div>
        {pageDTO.prev ? <Link to={`/boardcomp/board?page=${pageDTO.startPage - 1}`}>{"<<"}</Link> : null}
        {Array.from({ length: pageDTO.endPage - pageDTO.startPage + 1 }, (v, i) => i + pageDTO.startPage).map(
          (page) => {
            return (
              <Link key={page} to={`/boardcomp/board?page=${page}`} className={pageDTO.page == page ? "active" : null}>
                {page}
              </Link>
            );
          }
        )}
        {pageDTO.next ? <Link to={`/boardcomp/board?page=${pageDTO.endPage + 1}`}>{">>"}</Link> : null}
      </div> */}
      <div>
        <Pagination>
          <PaginationItem>
            {pageDTO.prev ? (
              <PaginationLink tag={Link} previous to={`/boardcomp/board?page=${pageDTO.startPage - 1}`} />
            ) : null}
          </PaginationItem>
          {Array.from({ length: pageDTO.endPage - pageDTO.startPage + 1 }, (v, i) => i + pageDTO.startPage).map(
            (page) => {
              return (
                <PaginationItem key={page} active={pageDTO.page == page ? true : false}>
                  <PaginationLink tag={Link} to={`/boardcomp/board?page=${page}`}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            }
          )}
          <PaginationItem>
            {pageDTO.next ? (
              <PaginationLink tag={Link} next to={`/boardcomp/board?page=${pageDTO.endPage + 1}`} />
            ) : null}
          </PaginationItem>
        </Pagination>
      </div>
      <Routes>
        <Route path=":boardNo" element={<BoardInfo />}></Route>
      </Routes>
    </div>
  );
}
