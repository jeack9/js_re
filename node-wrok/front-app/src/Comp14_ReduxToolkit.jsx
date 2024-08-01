import { legacy_createStore as createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, couterSlice, loginSlice } from "./store";
import { useState, useRef } from "react";

// const initalState = { count: 0 };
// // store 저장
// const store = createStore(reducer, initalState);

// // store 컨트롤 함수
// function reducer(oldState, action) {
//   if (action.cmd === "inc") {
//     return { ...oldState, count: oldState.count + action.step };
//   }
//   return oldState;
// }

function Counter() {
  // store 컨트롤함수 불러오기
  // const dispatch = useDispatch();
  // store의 값 가져오기
  // const value = useSelector((state) => state.count);

  // toolkit
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "counterSlice/down", inc: 2 })}>-</button>
      <button onClick={() => dispatch(couterSlice.actions.up(2))}>+</button>
    </div>
  );
}

function MyPage() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [form, setForm] = useState(""); // 인풋이름값 버튼클릭 이름 변경 state방식
  return (
    <div>
      변경할 이름 state방식
      <input type="text" name="username" value={form} onChange={(e) => setForm(e.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: "login/setName", username: form });
        }}
      >
        수정
      </button>
      <br />
      이메일
      <input
        type="text"
        name="email"
        value={login.email}
        onChange={(e) => {
          dispatch(loginSlice.actions.setEmail(e.target.value));
        }}
      />
      <h1>이름: {login.username}</h1>
      <h1>이메일: {login.email}</h1>
    </div>
  );
}

export default function App() {
  return (
    // store 제공
    <Provider store={store}>
      <Counter />
      <MyPage />
    </Provider>
  );
}
