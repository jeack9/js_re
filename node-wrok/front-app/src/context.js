import { createContext } from "react";

let login = { userid: "홍길동", isLogin: true };
export const LoginContext = createContext(login);
