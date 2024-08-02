import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BookInsert() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", writer: "", publisher: "", info: "" });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const handleSubmit = async () => {
    if (window.confirm("등록하시겠습니까?")) {
      await axios.post("/api/book", form);
      navigate("/");
    }
  };
  return (
    <div>
      <form>
        책이름: <input type="text" name="name" value={form.name} onChange={handleChange} /> <br />
        저자: <input type="text" name="writer" value={form.writer} onChange={handleChange} /> <br />
        출판사: <input type="text" name="publisher" value={form.publisher} onChange={handleChange} /> <br />
        정보: <input type="text" name="info" value={form.info} onChange={handleChange} /> <br />
        <button type="button" onClick={handleSubmit}>
          등록
        </button>
      </form>
    </div>
  );
}
