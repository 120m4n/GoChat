import { useState, useEffect } from "react";

import ChatNavbar from "./components/ChatNavbar.jsx";
import ChatChatbox from "./components/ChatChatbox.jsx";
import Messages from "./components/Messages";
import MessageInput from "./components/MessageInput.jsx";

import "./App.css";

import io from "socket.io-client";

const serverUrl = "ws://localhost:8000";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(serverUrl, {
      transports: ["websocket"],
    });

    setSocket(newSocket);

    // CLEAN UP THE EFFECT
    return () => newSocket.close();
    //
  }, [setSocket]);

  return (
    <div id="App">
      <ChatNavbar></ChatNavbar>
      <br></br>
      {socket ? (
        <div className="chat-container">
          {/* <Messages socket={socket} />
          <MessageInput socket={socket} /> */}
          <ChatChatbox socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default App;
