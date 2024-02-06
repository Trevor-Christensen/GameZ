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
import ActionShooter from "./pages/ActionShooterPage/ActionShooterPage";
import Adventure from "./pages/AdventurePage/Adventure";
import Sports from "./pages/SportsPage/Sports";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Footer from "./components/Footer/Footer";

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

  return (
    <BrowserRouter>
      <Header token={token} onLogout={handleLogout} />
      <Routes>
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

        <Route
          path="/action-shooter"
          element={<ActionShooter onRegister={handleLogin} />}
        />

        <Route path="/sports" element={<Sports onRegister={handleLogin} />} />

        <Route
          path="/adventure"
          element={<Adventure onRegister={handleLogin} />}
        />

        <Route
          path="/profile"
          element={<ProfilePage onRegister={handleLogin} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
