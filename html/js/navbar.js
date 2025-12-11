// Navbar component
function renderNavbar() {
  const user = getUser();
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  navbar.innerHTML = `
    <nav class="navbar">
      <div class="navbar-container">
        <a href="catalogue.html" class="navbar-brand">Library Catalogue</a>
        <div class="navbar-menu">
          ${user ? `
            <a href="catalogue.html" class="navbar-link">Catalogue</a>
            ${user.role === 'student' ? '<a href="my-books.html" class="navbar-link">My Books</a>' : ''}
            ${user.role === 'admin' ? '<a href="admin.html" class="navbar-link">Admin Panel</a>' : ''}
            <span class="navbar-user">Welcome, ${user.name}</span>
            <button onclick="logout()" class="navbar-logout">Logout</button>
          ` : `
            <a href="login.html" class="navbar-link">Login</a>
            <a href="register.html" class="navbar-link">Register</a>
          `}
        </div>
      </div>
    </nav>
  `;
}

// Render navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', renderNavbar);






