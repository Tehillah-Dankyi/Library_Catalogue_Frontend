import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import BookCatalogue from './pages/BookCatalogue';
import MyBooks from './pages/MyBooks';
import AdminPanel from './pages/AdminPanel';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/catalogue"
                element={
                  <PrivateRoute>
                    <BookCatalogue />
                  </PrivateRoute>
                }
              />
              <Route
                path="/my-books"
                element={
                  <PrivateRoute>
                    <MyBooks />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <PrivateRoute requireAdmin>
                    <AdminPanel />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Navigate to="/catalogue" replace />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

