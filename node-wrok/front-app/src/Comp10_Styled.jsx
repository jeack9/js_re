import styled from "styled-components";
const ReactButton = (props) => {
  return <button className={props.className}>{props.children}</button>;
};

const ReactLargeButton = styled(ReactButton)`
  font-size: 20px;
  color: yellowgreen;
`;

const PrimaryButton = styled(ReactButton)`
  color: ${function ({ stock }) {
    return stock <= 20 ? "red" : "blue";
  }};
`;

export default function App() {
  return (
    <>
      <ReactLargeButton>버튼</ReactLargeButton>
      <PrimaryButton stock="10">함수버튼</PrimaryButton>
      <PrimaryButton stock="50">함수버튼</PrimaryButton>
    </>
  );
}
