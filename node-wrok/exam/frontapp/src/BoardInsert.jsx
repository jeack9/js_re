import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function BoardInsert() {
  const [form, setForm] = useState({ title: "", content: "", writer: "" });
  const navigate = useNavigate();
  async function handleSubmit() {
    // 등록
    const result = await axios.post(`/api/board`, form);
    console.log(result.data.insertId);
    alert(result.data.insertId + "등록했어요.");
    navigate(`/boardList`);
  }

  function handleChange(e) {
    // 인풋핸들러
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  // 현재 날짜와 시간을 가져오기
  const currentDate = new Date();

  // 날짜와 시간을 문자열로 포맷팅
  const formattedDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() < 9 ? "0" + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1
  }-${currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate()}`;
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="no">
          <Form.Label>NO.</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>제목.</Form.Label>
          <Form.Control type="text" name="title" onChange={handleChange} value={form.title} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="writer">
          <Form.Label>작성자.</Form.Label>
          <Form.Control type="text" name="writer" onChange={handleChange} value={form.writer} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="content">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" name="content" rows={3} onChange={handleChange} value={form.content} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="createDate">
          <Form.Label>작성일자.</Form.Label>
          <Form.Control type="text" value={formattedDate} readOnly />
        </Form.Group>
        <Button onClick={handleSubmit}>등록</Button>
      </Form>
    </div>
  );
}
