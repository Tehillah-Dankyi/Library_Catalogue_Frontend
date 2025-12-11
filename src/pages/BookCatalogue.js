import React, { useState, useEffect } from 'react';
import api from '../services/api';

const BookCatalogue = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, [search, authorFilter, categoryFilter]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const params = {};
      if (search) params.search = search;
      if (authorFilter) params.author = authorFilter;
      if (categoryFilter) params.category = categoryFilter;

      const response = await api.get('/books', { params });
      setBooks(response.data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get('/books/categories/list');
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleBorrow = async (bookId) => {
    try {
      await api.post(`/borrow/${bookId}`);
      setMessage('Book borrowed successfully!');
      fetchBooks();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Failed to borrow book');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  if (loading) {
    return <div className="loading">Loading books...</div>;
  }

  return (
    <div>
      <h1>Book Catalogue</h1>
      {message && (
        <div className={message.includes('success') ? 'success-message' : 'error-message'}>
          {message}
        </div>
      )}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by author..."
          value={authorFilter}
          onChange={(e) => setAuthorFilter(e.target.value)}
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      {books.length === 0 ? (
        <div className="empty-state">
          <h3>No books found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>ISBN:</strong> {book.isbn}</p>
              {book.category && (
                <p><strong>Category:</strong> {book.category}</p>
              )}
              <span className={`status-badge status-${book.availability_status}`}>
                {book.availability_status}
              </span>
              <div className="actions">
                {book.availability_status === 'available' && (
                  <button
                    className="btn"
                    onClick={() => handleBorrow(book.id)}
                  >
                    Borrow
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookCatalogue;

