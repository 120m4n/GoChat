import Reactk, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup ";
import Button from "react-bootstrap/Button";

export default function ChatMessageBox(props) {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    // console.log("sendMessage", message);
    if (message) {
      props.socket.emit("/chat", { name: "Nikita", message: message });
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    // console.log("submit");
    e.preventDefault();
    sendMessage();
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setMessage(e.target.value);
  };

  return (
    <>
      <InputGroup className="w-90 mb-2 ms-2 me-2 mt-2" >
        <Form.Control lg={8} placeholder="type here." onChange={handleChange} />

        <Button
          variant="outline-secondary"
          type="submit"
          onClick={handleSubmit}
          disabled={!message}
        >
          Send
        </Button>
      </InputGroup>
    </>
  );
}
