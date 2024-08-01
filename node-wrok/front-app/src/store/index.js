import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { username: "aa", email: "bb" },
  reducers: {
    set: (state, action) => {
      state = action.payload;
    },
    setEmail: (state, action) => {
      // payload방식 더 편함
      state.email = action.payload;
    },
    setName: (state, action) => {
      state.username = action.username;
    },
  },
});

const couterSlice = createSlice({
  name: "counterSlice",
  initialState: { count: 0 },
  reducers: {
    up: (state, action) => {
      // state.count += action.inc;
      state.count += action.payload;
    },
    down: (state, action) => {
      state.count -= action.inc;
    },
  },
});

let store = configureStore({ reducer: { counter: couterSlice.reducer, login: loginSlice.reducer } });

export { couterSlice, loginSlice, store };
