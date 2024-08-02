import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function BoardUpdate() {
  const { no } = useParams();
  const [form, setForm] = useState({ title: "", content: "", writer: "", update_date: "", no: "" });
  const navigate = useNavigate();

  async function callAPI() {
    const result = await axios.get(`/api/board/${no}`, form);
    setForm(result.data[0]);
  }

  async function handleSubmit() {
    // 등록
    const { title, content, writer } = form;
    const result = await axios.put(`/api/board/${no}`, { title, content, writer });
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

  useEffect(() => {
    callAPI();
  }, [no]);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="no">
          <Form.Label>NO.</Form.Label>
          <Form.Control type="text" name="no" value={form.no} readOnly />
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
          <Form.Control type="text" value={form.update_date} readOnly />
        </Form.Group>
        <Button onClick={handleSubmit}>등록</Button>
      </Form>
    </div>
  );
}
