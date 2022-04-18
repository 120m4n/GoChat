import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ChatMessageBox from "./ChatMessageBox.jsx";
import "./ChatChatbox.css";

let chatHistory = ["Bienvenido Chat React"];
export default function ChatChatbox({ socket }) {
  const [messages, setMessages] = useState(chatHistory);
  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        newMessages.push(message);
        return newMessages;
      });
    };

    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        newMessages.splice(messageID, 1);
        return newMessages;
      });
    };

    socket.on("/message", messageListener);
    socket.on("deleteMessage", deleteMessageListener);
    socket.emit("getMessages");

    return () => {
      socket.off("/message", messageListener);
      socket.off("deleteMessage", deleteMessageListener);
    };
  }, [socket]);

  return (
    <Container>
      <Card>
        <div className="chatbox">
          {messages.map((message, index) => (
            <Row key={index}>
              <Col className="message" lg={8}>
                {/* <div className="message-text">{message}</div> */}
                <div>
                  <p className="received-chat">{message}</p>
                </div>
              </Col>
            </Row>
          ))}
        </div>
        <ChatMessageBox socket={socket} />
      </Card>
    </Container>
  );
}
