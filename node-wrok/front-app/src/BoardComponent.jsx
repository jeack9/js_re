//  BoardComponent
import BoardList from "./BoardList";
import BoardUpdate from "./BoardUpdate";
import BoardInsert from "./BoardInsert";
import { NavLink, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BoardComponent() {
  return (
    <div>
      <h1>게시판</h1>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/board"}>게시판</NavLink>
        </li>
        <li>
          <NavLink to={"/insert"}>등록</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={"Home 입니다."}></Route>
        <Route path="/insert" element={<BoardInsert />}></Route>
        <Route path="/board/*" element={<BoardList />}></Route>
        <Route path="/update/:boardNo" element={<BoardUpdate />}></Route>
        <Route path="/*" element={"404 NOT FOUND"}></Route>
      </Routes>
    </div>
  );
}
