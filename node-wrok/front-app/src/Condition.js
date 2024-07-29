import Replys from "./Replys";

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && "✔"}
    </li>
  );
}
function Items({ todos }) {
  // return todos.map((todo) => {
  //   return <Item {...todo} />;
  // });
  const item = todos.map((todo, idx) => <Item {...todo} key={idx} />);
  return <>{item}</>;
}

const replyList = [
  { id: 1, title: "첫번째", writer: "홍길동" },
  { id: 2, title: "두번째", writer: "김유신" },
  { id: 3, title: "세번째", writer: "이기자" },
];
export default function PackingList() {
  let todos = [
    { name: "Space suit", isPacked: true },
    { name: "Helmet with a golden leaf", isPacked: true },
    { name: "Photo of Tam", isPacked: false },
  ];
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Items todos={todos} />
      </ul>
      <h2>댓글리스트</h2>
      <Replys datas={replyList} />
    </section>
  );
}
