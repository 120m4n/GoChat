import React from "react";
import { Navbar } from "react-bootstrap";

export default function ChatNavbar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">
        <span className="ml-2">Chat Application</span>
      </Navbar.Brand>
    </Navbar>
  );
}
