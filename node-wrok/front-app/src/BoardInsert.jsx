import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function BoardInsert() {
  const navigater = useNavigate();
  // 등록할 글의 정보
  const [form, setForm] = useState({ title: "", writer: "", content: "" });
  const { title, writer, content } = form;
  // 폼 입력정보 변경감지
  let handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleReset = () => {
    setForm({ title: "", writer: "", content: "" });
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
    if (window.confirm("등록하시겠습니까?")) {
      const result = await axios.post(`http://localhost/board`, form);
      console.log("result", result);
      navigater("/board");
    }
  };
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
