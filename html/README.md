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

## Pages

- **login.html** - User login
- **register.html** - Student registration
- **catalogue.html** - Browse and search books (requires login)
- **my-books.html** - View borrowed books (students only)
- **admin.html** - Manage books (admin only)

## Features

-  ✅Separate HTML files for each page
-  ✅Shared JavaScript utilities
-  ✅Shared CSS styles
-  ✅Authentication protection
-  ✅Role-based access (admin/student)
-  ✅All functionality from React version

## Default Credentials

**Admin:**
- Email: `admin@library.com`
- Password: `admin123`

**Student:**
- Register a new account through register.html






