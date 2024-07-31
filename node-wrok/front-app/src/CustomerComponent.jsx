import { useState } from "react";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";
import { Container, Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CustomerComponent() {
  // 셀렉트할 아이디
  let [id, setID] = useState(null);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CustomerList
              onClick={(_id) => {
                setID(_id);
              }}
            ></CustomerList>
          </Card>
        </Col>
        <Col className="">
          <CustomerForm id={id}></CustomerForm>
        </Col>
      </Row>
    </Container>
  );
}
