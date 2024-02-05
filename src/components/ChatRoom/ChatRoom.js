import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const ChatRoom = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const newSocket = io("http://localhost:8080"); // Replace with your server URL
    setSocket(newSocket);

    // Clean up the socket connection on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket) {
      socket.emit("chat message", newMessage);
      setNewMessage("");
    }
  };

  useEffect(() => {
    if (socket) {
      // Listen for incoming messages
      socket.on("chat message", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
  }, [socket]);

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
