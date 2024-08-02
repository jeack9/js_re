import logo from "./logo.svg";
import BookList from "./BookList";
import { useRoutes } from "react-router-dom";
import { Link } from "react-router-dom";
import route from "./route/index";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const routes = useRoutes(route);
  return (
    <div>
      <div>
        <Link to={"/"}>Home</Link>
        <div>
          <Link to={"bookList"}>북리스트</Link>
          <Link to={"bookInsert"} className="ms-3">
            등록
          </Link>
        </div>
        <div>
          <Link to={"boardList"}>보드리스트</Link>
          <Link to={"boardInsert"} className="ms-3">
            글등록
          </Link>
        </div>
      </div>
      {routes}
    </div>
  );
}

export default App;
