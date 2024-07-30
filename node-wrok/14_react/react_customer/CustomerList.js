import { useState, useEffect } from "react";
export default function CustomerList(props) {
  let [customers, setCustomers] = useState([]);
  function callAPI() {
    fetch("http://localhost/customer")
      .then((result) => result.json())
      .then((json) => setCustomers(json));
  }
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <>
      {customers.map((customer) => (
        <div>
          <span>{customer.id}</span>
          <span>
            <a
              id={customer.id}
              href="/"
              onClick={(event) => {
                event.preventDefault();
                props.onClick(event.target.id);
              }}
            >
              {customer.name}
            </a>
          </span>
          <span>{customer.email}</span>
          <span>{customer.phone}</span>
        </div>
      ))}
    </>
  );
}
