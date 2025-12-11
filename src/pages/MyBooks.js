import React, { useState, useEffect } from 'react';
import api from '../services/api';

const MyBooks = () => {
  const [borrows, setBorrows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchMyBooks();
  }, []);

  const fetchMyBooks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/borrow/my-books');
      setBorrows(response.data.borrows);
    } catch (error) {
      console.error('Error fetching my books:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReturn = async (bookId) => {
    try {
      await api.post(`/borrow/${bookId}/return`);
      setMessage('Book returned successfully!');
      fetchMyBooks();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Failed to return book');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  };

  const isOverdue = (dueDate) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date();
  };

  if (loading) {
    return <div className="loading">Loading your books...</div>;
  }

  const activeBorrows = borrows.filter(b => b.borrow_status === 'active');
  const returnedBorrows = borrows.filter(b => b.borrow_status === 'returned');

  return (
    <div>
      <h1>My Books</h1>
      {message && (
        <div className={message.includes('success') ? 'success-message' : 'error-message'}>
          {message}
        </div>
      )}
      
      <h2>Currently Borrowed</h2>
      {activeBorrows.length === 0 ? (
        <div className="empty-state">
          <p>You don't have any active borrows</p>
        </div>
      ) : (
        <div className="book-grid">
          {activeBorrows.map((borrow) => (
            <div key={borrow.id} className="book-card">
              <h3>{borrow.title}</h3>
              <p><strong>Author:</strong> {borrow.author}</p>
              <p><strong>ISBN:</strong> {borrow.isbn}</p>
              <p><strong>Borrowed:</strong> {formatDate(borrow.borrow_date)}</p>
              <p><strong>Due Date:</strong> {formatDate(borrow.due_date)}</p>
              {isOverdue(borrow.due_date) && (
                <p style={{ color: '#f44336', fontWeight: 'bold' }}>OVERDUE</p>
              )}
              <div className="actions">
                <button
                  className="btn btn-secondary"
                  onClick={() => handleReturn(borrow.book_id)}
                >
                  Return Book
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {returnedBorrows.length > 0 && (
        <>
          <h2 style={{ marginTop: '40px' }}>Returned Books</h2>
          <div className="book-grid">
            {returnedBorrows.map((borrow) => (
              <div key={borrow.id} className="book-card">
                <h3>{borrow.title}</h3>
                <p><strong>Author:</strong> {borrow.author}</p>
                <p><strong>ISBN:</strong> {borrow.isbn}</p>
                <p><strong>Borrowed:</strong> {formatDate(borrow.borrow_date)}</p>
                <p><strong>Returned:</strong> {formatDate(borrow.return_date)}</p>
                <span className="status-badge status-returned">Returned</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyBooks;

