import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ token, onLogout }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo"></div>

        <ul className="nav-links">
          <li>
            <Link className="nav__link-item" to="/action-shooter">
              <i className="fas fa-gamepad"></i> Action Shooter
            </Link>
          </li>
          <li>
            <Link className="nav__link-item" to="/sports">
              <i className="fas fa-futbol"></i> Sports
            </Link>
          </li>
          <li>
            <Link className="nav__link-item" to="/adventure">
              <i className="fas fa-hiking"></i> Adventure
            </Link>
          </li>
          <li>
            <Link className="nav__link-item" to="/profile">
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
              <Link className="auth-link" to="/login">
                <i className="nav-auth"></i> Login
              </Link>
              <Link className="auth-link" to="/RegisterForm">
                <i className="nav-auth"></i>/ Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
