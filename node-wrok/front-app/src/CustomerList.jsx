import { useEffect, useState } from "react";
export default function CustomerList({ onClick }) {
  // 사용자목록 데이터 저장소
  let [list, setList] = useState([]);

  // 사용자목록 전체조회
  async function customerList() {
    const result = await fetch(`http://localhost/customer`);
    const data = await result.json();
    setList(data); // state Update => rerendering
  }
  // 렌더링 이후 데이터베이스 접근실행
  useEffect(() => {
    customerList();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>이메일</th>
            <th>전화번호</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>
          {list.map((customer) => {
            return (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      onClick(customer.id);
                    }}
                  >
                    {customer.name}
                  </a>
                </td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
