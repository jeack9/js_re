import BookList from "../BookList";
import BookInsert from "../BookInsert";
import BoardInsert from "../BoardInsert";
import BoardList from "../BoardList";
import BoardInfo from "../BoardInfo";
import BoardUpdate from "../BoardUpdate";
let route = [
  { path: "/", element: <div>커뮤니티 게시판 입니다.</div> },
  { path: "bookList", element: <BookList /> },
  { path: "bookInsert", element: <BookInsert /> },
  { path: "boardList", element: <BoardList /> },
  { path: "boardInsert", element: <BoardInsert /> },
  { path: "boardUpdate/:no", element: <BoardUpdate /> },
  { path: "boardInfo/:no", element: <BoardInfo /> },
];

export default route;
