import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
export default function CustomerForm({ id }) {
  // 사용자 1명 데이터 저장소
  let [customer, setCustomer] = useState([]);
  // 사용자 단건조회
  async function getCustomer(_id) {
    if (_id == null) return;
    const result = await fetch(`http://localhost/customer/${_id}`);
    const data = await result.json();
    setCustomer(data[0]); // state Update => rerendering
  }
  useEffect(() => {
    getCustomer(id);
  }, [id]);
  return (
    <>
      <form>
        <Button className="btn-secondary">초기화</Button>
        <Button className="btn-danger">삭제</Button>
        <Button>등록</Button>
        <br />
        <label htmlFor="id">번호</label>
        <input id="id" name="id" value={customer.id} />
        <br />
        <label htmlFor="name">이름</label>
        <input id="name" name="name" value={customer.name} />
        <br />
        <label htmlFor="email">이메일</label>
        <input id="email" name="email" value={customer.email} readOnly />
        <br />
      </form>
    </>
  );
}
