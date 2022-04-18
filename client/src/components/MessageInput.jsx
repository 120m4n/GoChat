import React, { useState } from "react";
import "./MessageInput.css";

const NewMessage = ({ socket }) => {
  const [value, setValue] = useState("");
  const submitForm = (e) => {
    console.log("submitForm");
    e.preventDefault();
    socket.emit("/chat", { name: "my name", message: value });
    setValue("");
  };

  return (
    <form onSubmit={submitForm}>
      <input
        autoFocus
        value={value}
        placeholder="Type your message"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </form>
  );
};

export default NewMessage;
