import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

export default function BoardInfo() {
  const { boardNo } = useParams(); //==> {boardNo: 3, pw:"dsaf"}
  const [boardInfo, setBoardInfo] = useState([]);
  const navigater = useNavigate();
  // 게시판 단건조회
  async function callAPI(_boardNo) {
    const result = await axios.get(`http://localhost/board/${_boardNo}`);
    setBoardInfo(result.data[0]);
  }
  const handleDelete = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      const result = await axios.delete(`http://localhost/board/${boardNo}`);
      console.log(result, "삭제");
      navigater("/");
    }
  };
  // boardNo가 변경되면 데이터 재요청
  useEffect(() => {
    // console.log("단건조회");
    callAPI(boardNo);
  }, [boardNo]);

  return (
    <div>
      <h1>보드 단건정보</h1>
      <Card style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Text>글번호: {boardInfo.board_no}</Card.Text>
          <Card.Title>제목: {boardInfo.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">작성일: {boardInfo.wdt}</Card.Subtitle>
          <Card.Text>내용: {boardInfo.content}</Card.Text>
          <Card.Text>작성자: {boardInfo.writer}</Card.Text>
          <Button onClick={handleDelete}>삭제</Button>
          <Link className="ms-1" to={`/update/${boardNo}`}>
            <Button>수정</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
