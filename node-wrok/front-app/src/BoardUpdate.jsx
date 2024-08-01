import { Form, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
export default function BoardUpdate() {
  const navigater = useNavigate();
  const { boardNo } = useParams(); //==> {boardNo: 3}
  const [form, setForm] = useState({ title: "", writer: "", content: "", wdt: "" });
  const { title, writer, content, wdt } = form;

  const callAPI = async (_boardNo) => {
    const result = await axios.get(`http://localhost/board/${_boardNo}`);
    setForm(result.data[0]);
  };

  const handleReset = () => {
    setForm({ title: "", writer: "", content: "" });
  };
  // 폼 입력정보 변경감지
  let handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    if (!title) {
      console.log("제목을 입력하세요!");
      return;
    }
    if (!writer) {
      console.log("작성자를 입력하세요!");
      return;
    }
    if (!content) {
      console.log("내용을 입력하세요!");
      return;
    }
    if (window.confirm("수정하시겠습니까?")) {
      const { title, writer, content } = form;
      let today = new Date();
      let year = today.getFullYear();
      let month = ("0" + (today.getMonth() + 1)).slice(-2);
      let day = ("0" + today.getDate()).slice(-2);
      let wdt = year + "-" + month + "-" + day;
      // setForm({ title, writer, content, wdt });
      const result = await axios.put(`http://localhost/board/${boardNo}`, { title, writer, content });
      // console.log("result", result);
      navigater("/board");
    }
  };
  useEffect(() => {
    // console.log("단건조회");
    callAPI(boardNo);
  }, [boardNo]);
  return (
    <Form className="m-5">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGroupTitle">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" name="title" value={title} onChange={handleChange} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGroupWriter">
          <Form.Label>작성자</Form.Label>
          <Form.Control type="text" name="writer" value={writer} onChange={handleChange} />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGroupContent">
        <Form.Label>내용</Form.Label>
        <Form.Control as="textarea" rows={5} name="content" value={content} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupWdt">
        <Form.Label>작성일</Form.Label>
        <Form.Control type="text" name="wdt" value={wdt} readOnly />
      </Form.Group>
      <Row>
        <Button as={Col} variant="primary" type="button" onClick={handleSubmit}>
          등록
        </Button>
        <Button as={Col} variant="secondary" type="button" onClick={handleReset}>
          리셋
        </Button>
      </Row>
    </Form>
  );
}
