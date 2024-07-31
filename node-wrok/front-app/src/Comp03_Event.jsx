function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
function PlayButton({ children }) {
  return <Button onClick={() => alert(children)}>{children}</Button>;
}
function UploadButton({ children }) {
  return <Button onClick={() => alert(children)}>{children}</Button>;
}
export default function Toolbar() {
  return (
    <>
      <PlayButton>play</PlayButton>
      <UploadButton>upload</UploadButton>
    </>
  );
}
