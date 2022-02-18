import "./styles.css";
import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
export default function App() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => setOpen(false), [setText]);
  const onChangeText = (e) => setText(e.target.value);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input onChange={onChangeText} value={text} />
      <br />
      <bt />
      <button onClick={onClickOpen}>開く</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
