# Digital Library Catalogue System - Frontend

## Project Name
Digital Library Catalogue System - Frontend

## Project Overview
This is the frontend application for a Digital Library Catalogue System that provides an intuitive interface for university students to search, borrow, and manage books. The system features:

- **Student Interface**: Browse books, search/filter catalogue, borrow available books, and manage personal borrows
- **Admin Interface**: Manage the book catalogue (add, edit, delete books) through an admin panel
- **Authentication**: Secure login and registration system with role-based access

The frontend is built with React and provides a modern, responsive user interface connected to the backend API.

## Deployment Link
**GitHub Pages Deployment**: [Your GitHub Pages URL]
- Example: `https://yourusername.github.io/library-catalogue-frontend`

**Backend API**: [Your Render Backend URL]
- Example: `https://library-catalogue-backend.onrender.com`

## Login Details
### Admin Account
- **Email**: `admin@library.com`
- **Password**: `admin123`

### Student Account (Create your own)
- Register a new account through the registration page
- Example credentials:
  - **Email**: `testuser@example.com`
  - **Password**: `password123`

## Feature Checklist

### Authentication & Book Submission (15 Marks)
- ✅ Admin users can add books through admin panel
- ✅ Admin users can update books through admin panel
- ✅ Admin users can delete books through admin panel
- ✅ Students can register through registration page
- ✅ Students can log in through login page
- ✅ Protected routes based on authentication
- ✅ Role-based UI rendering (Admin vs Student)

### Book Catalogue (15 Marks)
- ✅ Display all books with title, author, ISBN, and availability status
- ✅ Search functionality (by title, author, or ISBN)
- ✅ Filter by author
- ✅ Filter by category
- ✅ Responsive book grid layout
- ✅ Real-time availability status display
- ✅ Borrow button for available books

### Borrow & Return Management (15 Marks)
- ✅ Students can request/borrow available books
- ✅ Track borrowed books with due dates
- ✅ Display overdue status for borrowed books
- ✅ Students can return borrowed books
- ✅ View active and returned books separately
- ✅ Success/error message notifications

### Deployment (15 Marks)
- ✅ React application
- ✅ Ready for GitHub Pages deployment
- ✅ Environment variable configuration for API URL
- ✅ Responsive design
- ✅ Connected to backend API
- ✅ CORS configured for API communication

## Installation Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone <your-frontend-repo-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Create a `.env` file in the root directory:
     ```
     REACT_APP_API_URL=http://localhost:5000/api
     ```
   - For production, update this to your Render backend URL:
     ```
     REACT_APP_API_URL=https://your-backend-url.onrender.com/api
     ```

4. **Run the development server**
   ```bash
   npm start
   ```

5. **Access the application**
   - The app will open in your browser at `http://localhost:3000`
   - Make sure the backend API is running and accessible

### Build for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Update `package.json` homepage field with your GitHub Pages URL
   - Install gh-pages: `npm install --save-dev gh-pages`
   - Add deploy script to `package.json`:
     ```json
     "scripts": {
       "deploy": "gh-pages -d build"
     }
     ```
   - Deploy: `npm run deploy`

## Application Structure

### Pages
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
- **Loading States** - Loading indicators for async operations

## User Flow

### Student Flow
1. Register/Login → 2. Browse Catalogue → 3. Search/Filter Books → 4. Borrow Book → 5. View My Books → 6. Return Book

### Admin Flow
1. Login → 2. Access Admin Panel → 3. Add/Edit/Delete Books → 4. View All Borrows

## Technologies Used
- React 18
- React Router DOM (v6)
- Axios (HTTP client)
- CSS3 (Custom styling)

## Environment Variables
- `REACT_APP_API_URL` - Backend API URL (default: `http://localhost:5000/api`)

## Notes for Deployment on GitHub Pages
1. Update `homepage` in `package.json` with your GitHub Pages URL
2. Set `REACT_APP_API_URL` environment variable to your Render backend URL
3. Build the project: `npm run build`
4. Deploy using gh-pages or GitHub Actions
5. Ensure CORS is properly configured on the backend

## Troubleshooting

### API Connection Issues
- Verify the backend is running and accessible
- Check `REACT_APP_API_URL` environment variable
- Ensure CORS is enabled on the backend

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf build`

### Authentication Issues
- Clear browser localStorage
- Verify JWT token is being sent in API requests
- Check backend authentication endpoints

