import { useState, useRef } from "react";
// state, ref, event => form field
export default function App() {
  const [message, setMessage] = useState({ username: "", email: "" });
  const nameInput = useRef();
  function handleChange(e) {
    const copyMessage = { ...message, [e.target.name]: e.target.value };
    setMessage(copyMessage);
  }
  function handleReset() {
    setMessage({ username: "", email: "" });
  }
  return (
    <>
      <form>
        <input name="username" value={message.username} onChange={(e) => handleChange(e)} ref={nameInput} />
        <input name="email" value={message.email} onChange={(e) => handleChange(e)} />
        <button
          type="button"
          onClick={() => {
            handleReset();
            nameInput.current.focus();
          }}
        >
          확인
        </button>
      </form>
    </>
  );
}
