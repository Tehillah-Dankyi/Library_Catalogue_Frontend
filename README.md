# Digital Library Catalogue System


### Tehillah Dankyi 
### 10022300068
## Project Name
Digital Library Catalogue System - Frontend

## Project Overview
This is the frontend application for a Digital Library Catalogue System that provides an intuitive interface for university students to search, borrow, and manage books. The system features:

- **Student Interface**: Browse books, search/filter catalogue, borrow available books, and manage personal borrows
- **Admin Interface**: Manage the book catalogue (add, edit, delete books) through an admin panel
- **Authentication**: Secure login and registration system with role-based access


## Deployment Link
**GitHub Pages Deployment**: 
-   https://github.com/Tehillah-Dankyi/Library_Catalogue_Frontend

- https://github.com/Tehillah-Dankyi/Library_Catalogue_Backend

**Backend API**: 
-  https://library-catalogue-backend.onrender.com
## Login Details
### Admin Account
- **Email**: `admin@library.com`
- **Password**: `admin123`

### Student Account (Create your own)
- Register a new account through the registration page
- Example credentials:
  - **Email**: `kimkpearnold@gmail.com`
  - **Password**: `password123`

## Feature Checklist

### Authentication & Book Submission
- ✅ Admin users can add books through admin panel
- ✅ Admin users can update books through admin panel
- ✅ Admin users can delete books through admin panel
- ✅ Students can register through registration page
- ✅ Students can log in through login page

- ✅ Role-based UI rendering (Admin vs Student)

### Book Catalogue 
- ✅ Display all books with title, author, ISBN, and availability status

- ✅ Search functionals (by title, authour, ISBN)
- ✅ Filter by author
- ✅ Filter by category

- ✅ Responsive book grid layout
- ✅ Real-time availability status display
- ✅ Borrow button for available books

### Borrow & Return Management
- ✅ Students can request/borrow available books
- ✅ Track borrowed books with due dates
- ✅ Display overdue status for borrowed books

- ✅ Students can return borrowed books
- ✅ View active and returned books separately
- ✅ Success/error message notifications

### Deployment
- ✅ React application
- ✅ Ready for GitHub Pages deployment
- ✅ Environment variable configuration for API URL

- ✅ Responsive design
- ✅ Connected to backend API
- ✅ CORS configured for API communication



** 
- **Login** (`/login`) - User login page
- **Register** (`/register`) - Student registration page
- **Book Catalogue** (`/catalogue`) - Main book browsing page with search/filter
- **My Books** (`/my-books`) - Student's borrowed books management (Student only)
- **Admin Panel** (`/admin`) - Book management interface (Admin only)

### Components
- **Navbar** - Navigation bar with user info and logout
- **PrivateRoute** - Route protection component

### Features
- **Authentication Context** - Global authentication state management
- **API Service** - Centralized API calls with axios
- **Responsive Design** - Mobile-friendly interface
- **Error Handling** - User-friendly error messages


## Users Flow

### Student Flow
1. Register/Login   2. Browse Catalogue  3. Search/Filter Books  4. Borrow Book  5. View My Books  6. Return Book

### Admin Flow
1. Login  2. Access Admin Panel  3. Add/Edit/Delete Books  4. View All Borrows

## Technologies Used
- React 18
- React Router DOM (v6)
- Axios (HTTP client)
- CSS3 (Custom styling)





