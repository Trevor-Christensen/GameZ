import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import LoginForm from "./components/Authentication/LoginForm/LoginForm";
import RegisterForm from "./components/Authentication/RegisterForm/RegisterForm";
import "./App.css";
import Chatpage from "./pages/ChatPage/ChatPage";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // Check if the user is already logged in
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Protected route component
  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );

  return (
    <BrowserRouter>
      <Header token={token} onLogout={handleLogout} />
      <Routes>
        <Route path="/" exact component={Chatpage} />

        {/* Public routes */}
        <Route
          path="/login"
          element={
            token ? <Navigate to="/" /> : <LoginForm onLogin={handleLogin} />
          }
        />

        <Route
          path="/RegisterForm"
          element={
            token ? (
              <Navigate to="/" />
            ) : (
              <RegisterForm onRegister={handleLogin} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
