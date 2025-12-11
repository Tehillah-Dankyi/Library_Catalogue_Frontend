// Auth utilities
function getUser() {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}

function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

function getToken() {
  return localStorage.getItem('token');
}

function setToken(token) {
  localStorage.setItem('token', token);
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = 'login.html';
}

function checkAuth() {
  const token = getToken();
  if (!token) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

function checkAdmin() {
  const user = getUser();
  if (!user || user.role !== 'admin') {
    window.location.href = 'catalogue.html';
    return false;
  }
  return true;
}






