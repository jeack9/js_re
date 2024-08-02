import { Row, Col, Container } from "react-bootstrap";
import { useRoutes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import route from "./route/index";
import "bootstrap/dist/css/bootstrap.min.css";
export default function BoardLayout() {
  const routes = useRoutes(route);
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={8}>
          <h3>게시판</h3>
        </Col>
        <Col sm={4}>
          <NavLink to={"/"}>
            <button>Home</button>
          </NavLink>
          <NavLink to={"boardList"}>
            <button>전체조회</button>
          </NavLink>
          <NavLink to={"boardInsert"}>
            <button>글 등록</button>
          </NavLink>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>{routes}</Col>
      </Row>
      <hr />
    </Container>
  );
}
