import React, { useState, useEffect } from 'react';
import api from '../services/api';

const AdminPanel = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    category: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/books');
      setBooks(response.data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setFormData({ title: '', author: '', isbn: '', category: '' });
    setShowAddModal(true);
  };

  const handleEdit = (book) => {
    setSelectedBook(book);
    setFormData({
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      category: book.category || ''
    });
    setShowEditModal(true);
  };

  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    try {
      await api.post('/books', formData);
      setMessage('Book added successfully!');
      setShowAddModal(false);
      fetchBooks();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Failed to add book');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      const updateData = {
        ...formData,
        availability_status: selectedBook?.availability_status
      };
      await api.put(`/books/${selectedBook.id}`, updateData);
      setMessage('Book updated successfully!');
      setShowEditModal(false);
      fetchBooks();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Failed to update book');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleDelete = async (bookId) => {
    if (!window.confirm('Are you sure you want to delete this book?')) {
      return;
    }
    try {
      await api.delete(`/books/${bookId}`);
      setMessage('Book deleted successfully!');
      fetchBooks();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Failed to delete book');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  if (loading) {
    return <div className="loading">Loading books...</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Admin Panel - Book Management</h1>
        <button className="btn" onClick={handleAdd}>
          Add New Book
        </button>
      </div>
      {message && (
        <div className={message.includes('success') ? 'success-message' : 'error-message'}>
          {message}
        </div>
      )}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.category || 'N/A'}</td>
                <td>
                  <span className={`status-badge status-${book.availability_status}`}>
                    {book.availability_status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleEdit(book)}
                    style={{ marginRight: '10px', padding: '6px 12px', fontSize: '14px' }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(book.id)}
                    style={{ padding: '6px 12px', fontSize: '14px' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmitAdd}>
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Author *</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>ISBN *</label>
                <input
                  type="text"
                  value={formData.isbn}
                  onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn">
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmitEdit}>
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Author *</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>ISBN *</label>
                <input
                  type="text"
                  value={formData.isbn}
                  onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  value={selectedBook?.availability_status}
                  onChange={(e) => setSelectedBook({ ...selectedBook, availability_status: e.target.value })}
                >
                  <option value="available">Available</option>
                  <option value="borrowed">Borrowed</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn">
                  Update Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;

