import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/catalogue" className="navbar-brand">
          Library Catalogue
        </Link>
        <div className="navbar-menu">
          {user ? (
            <>
              <Link to="/catalogue" className="navbar-link">
                Catalogue
              </Link>
              {user.role === 'student' && (
                <Link to="/my-books" className="navbar-link">
                  My Books
                </Link>
              )}
              {user.role === 'admin' && (
                <Link to="/admin" className="navbar-link">
                  Admin Panel
                </Link>
              )}
              <span className="navbar-user">Welcome, {user.name}</span>
              <button onClick={handleLogout} className="navbar-logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-link">
                Login
              </Link>
              <Link to="/register" className="navbar-link">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

