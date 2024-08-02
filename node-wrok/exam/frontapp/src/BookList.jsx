import { useState, useEffect } from "react";
import axios from "axios";

export default function BookList() {
  const [bookList, setBookList] = useState([1]);
  const callAPI = async () => {
    const result = await axios.get("/api/book");
    setBookList(result.data);
  };
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <div>
      <h1>북리스트</h1>
      {bookList.map((book, idx) => {
        return (
          <p key={idx}>
            {book.no}
            {book.name}
          </p>
        );
      })}
    </div>
  );
}
