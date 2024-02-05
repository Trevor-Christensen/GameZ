import React, { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;

const Chatpage = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    socketInitilizer();
  }, []);

  async function socketInitilizer() {
    await fetch("/src/socket");
    socket = io();
  }

  return (
    <div>
      <h1> Chat App</h1>
      <p> Enter Username</p>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />

      <div>
        <form>
          <input name="message" onChange={(e) => setMessage(e.target.value)} />
        </form>
      </div>
    </div>
  );
};
export default Chatpage;
