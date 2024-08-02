import { Row, Col, Button, ListGroup, Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function BoardInfo() {
  const { no } = useParams();
  const [board, setBoard] = useState({ no: "", wdt: "" });
  const [commentList, setCommentList] = useState([]);
  async function callAPI() {
    const result = await axios.get(`/api/board/${no}`);
    setBoard(result.data[0]);
    const commentList = await axios.get(`/api/bComment/${no}`);
    setCommentList(commentList.data);
  }
  useEffect(() => {
    callAPI();
  }, [no]);
  return (
    <>
      <Row>
        <Col xs={5} md={4}>
          번호: {board.no}
        </Col>
        <Col xs={8} md={4}>
          작성일: {board.update_date}
        </Col>
        <Col xs={5} md={4}>
          이름: {board.writer}
        </Col>
      </Row>
      <Row>
        <Col>제목: {board.title}</Col>
      </Row>
      <Row>
        <Col>
          <p>{board.content}</p>
        </Col>
      </Row>
      <Link to={"/boardUpdate/" + board.no}>
        <Button>수정</Button>
      </Link>
      <hr />
      <Row>
        <Col>
          <ListGroup>
            {commentList.map((comment) => {
              return (
                <>
                  <ListGroup.Item key={comment.no} as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{comment.content}</div>
                      {comment.writer} {comment.update_date}
                    </div>
                  </ListGroup.Item>
                </>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}
