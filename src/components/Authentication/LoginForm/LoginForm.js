import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        User_username: username,
        User_email: email,
        User_password: password,
      });
      const { token } = response.data;
      onRegister(token);
      localStorage.setItem("token", token);
      alert("Sucessful Login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleRegister}>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
