import { legacy_createStore as createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

// 1. reducer 선언
function reducer(oldVal, { type }) {
  if (oldVal === undefined) return { number: 1 };
  const newState = { ...oldVal }; // 스테이트 불변법칙
  if (type == "UP") newState.number++;
  else newState.number--;
  return newState;
}

// 2. 스토어 저장
const store = createStore(reducer, { number: 1 });

function Left() {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>left1</h1>
      <h1>Store.number: {number}</h1>
      <Left2 />
    </div>
  );
}
function Left2() {
  return (
    <div>
      Left2
      <Left3 />
    </div>
  );
}
function Left3() {
  return <div>left3</div>;
}

function Right() {
  return (
    <div>
      right1
      <Right2 />
    </div>
  );
}
function Right2() {
  const dispatch = useDispatch();
  return (
    <div>
      right1
      <button onClick={() => dispatch({ type: "DOWN" })}>-</button>
      <Right3 />
    </div>
  );
}
function Right3() {
  const dispatch = useDispatch();
  return (
    <div>
      right1
      <button onClick={() => dispatch({ type: "UP" })}>+</button>
    </div>
  );
}

export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left />
          <Right />
        </Provider>
      </div>
    </div>
  );
}
