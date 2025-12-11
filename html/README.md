# HTML Version - Library Catalogue System

This is the HTML version of the Library Catalogue System with separate HTML files for each page.

## File Structure

```
html/
├── index.html          # Redirects to catalogue
├── login.html          # Login page
├── register.html       # Registration page
├── catalogue.html      # Book catalogue (main page)
├── my-books.html       # My borrowed books (students)
├── admin.html          # Admin panel (admin only)
├── css/
│   └── styles.css      # All styles
└── js/
    ├── api.js          # API helper functions
    ├── auth.js         # Authentication utilities
    └── navbar.js       # Navbar component
```

## How to Use

1. **Open any HTML file directly in your browser**
   - Double-click `login.html` or any other file
   - Or use a local server (recommended)

2. **Using a local server (recommended):**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or Node.js http-server
   npx http-server -p 8000
   ```
   Then visit: `http://localhost:8000/login.html`

3. **Update API URL:**
   - Edit `js/api.js` and change `API_URL` to your backend URL
   - Default: `http://localhost:5000/api`

## Pages

- **login.html** - User login
- **register.html** - Student registration
- **catalogue.html** - Browse and search books (requires login)
- **my-books.html** - View borrowed books (students only)
- **admin.html** - Manage books (admin only)

## Features

- ✅ Separate HTML files for each page
- ✅ Shared JavaScript utilities
- ✅ Shared CSS styles
- ✅ Authentication protection
- ✅ Role-based access (admin/student)
- ✅ All functionality from React version

## Default Credentials

**Admin:**
- Email: `admin@library.com`
- Password: `admin123`

**Student:**
- Register a new account through register.html

## Notes

- Make sure backend is running on `http://localhost:5000`
- Update `API_URL` in `js/api.js` if backend is on different port/URL
- All pages check authentication and redirect if needed
- Uses localStorage for token and user data






