import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";
import BoardInfo from "./BoardInfo";
import { Routes, Route } from "react-router-dom";

export default function BoardList() {
  const [list, setList] = useState([]);
  const callAPI = async () => {
    // 전체조회 클라이언트 요청
    const result = await axios.get("/api/board");
    setList(result.data);
  };
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <div>
      <h1>글목록</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>writer</th>
            <th>content</th>
            <th>create_date</th>
            <th>update_date</th>
          </tr>
        </thead>
        <tbody>
          {list.map((board) => {
            return (
              <tr key={board.no}>
                <td>{board.no}</td>
                <td>
                  <NavLink to={`/boardInfo/${board.no}`}>{board.title}</NavLink>
                </td>
                <td>{board.writer}</td>
                <td>{board.content}</td>
                <td>{board.create_date}</td>
                <td>{board.update_date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
