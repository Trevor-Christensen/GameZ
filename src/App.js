import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import "./App.css";

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
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

  return (
    <Router>
      <Header token={token} onLogout={handleLogout} />

      <Switch>
        <Route path="/" exact component={Home} />

        {/* Public routes */}
        <Route path="/login">
          {token ? <Redirect to="/" /> : <LoginForm onLogin={handleLogin} />}
        </Route>
        <Route path="/register">
          {token ? (
            <Redirect to="/" />
          ) : (
            <RegisterForm onRegister={handleLogin} />
          )}
        </Route>

        {/* Protected routes */}
        <ProtectedRoute path="/profile" component={Profile} />

        {/* Additional routes */}
      </Switch>
    </Router>
  );
};

export default App;
