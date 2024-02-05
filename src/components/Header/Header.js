import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import ChatPage from "../../pages/ChatPage/ChatPage";

const Header = ({ token, onLogout }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Your Logo</div>

        <ul className="nav-links">
          <li>
            <Link to="/action-shooter">
              <i className="fas fa-gamepad"></i> Action Shooter
            </Link>
          </li>
          <li>
            <Link to="/sports">
              <i className="fas fa-futbol"></i> Sports
            </Link>
          </li>
          <li>
            <Link to="/adventure">
              <i className="fas fa-hiking"></i> Adventure
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <i className="fas fa-user"></i> Profile
            </Link>
          </li>
        </ul>

        <div className="user-actions">
          {token ? (
            <>
              <span>Welcome, User!</span>
              <button onClick={onLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
              <Link to="/RegisterForm">
                <i className="fas fa-user-plus"></i> Register
              </Link>
            </>
          )}
        </div>

        {token && (
          <div className="chat-room">
            <ChatPage />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
