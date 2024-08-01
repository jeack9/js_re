import { createContext, useContext } from "react";

const themeDefault = { border: "10px solid green" };
const ThemeContext = createContext(themeDefault);

function Sub1() {
  return (
    <ThemeContext.Provider>
      <div>
        <h1>sub1</h1>
        <Sub2></Sub2>
      </div>
    </ThemeContext.Provider>
  );
}
function Sub2() {
  return (
    <div>
      <h1>sub2</h1>
      <Sub3></Sub3>
    </div>
  );
}
function Sub3() {
  return (
    <div>
      <h1>sub3</h1>
    </div>
  );
}

export default function App() {
  // const theme = useContext(ThemeContext);
  return (
    <div className="root">
      <h1>hello</h1>
      <Sub1></Sub1>
    </div>
  );
}
