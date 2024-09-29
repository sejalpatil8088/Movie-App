import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, onLogout }) => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          Movie Watchlist
        </Link>
        {currentUser ? (
          <div className="user-info">
            <span>Welcome, {currentUser.email}</span>
            <Link to="/watchlist" className="watchlist-link">
              Watchlist
            </Link>
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login" className="login-link">
              Login
            </Link>
            <Link to="/register" className="register-link">
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;