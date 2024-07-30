import { useState, useEffect } from "react";
export default function CustomerUpdate(props) {
  let [customer, setCustomer] = useState([]);
  function callAPI() {
    if (!props.id) {
      return;
    }
    fetch("http://localhost/customer/" + props.id)
      .then((result) => result.json())
      .then((json) => setCustomer(json[0]));
  }
  useEffect(() => {
    callAPI();
  }, [props.id]);
  return (
    <>
      <form>
        <button type="reset">초기화</button>
        <button type="button">삭제</button>
        <button type="submit">저장</button>
        <input value={customer.id}></input>
        <input value={customer.name}></input>
        <input value={customer.email}></input>
        <input value={customer.phone}></input>
      </form>
    </>
  );
}
