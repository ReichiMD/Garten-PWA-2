import { state } from './store.js';
import { Navbar } from './components/Navbar.js';

// Views
import { Login } from './views/Login.js';
import { Dashboard } from './views/Dashboard.js';
import { Club } from './views/Club.js';
import { Profile } from './views/Profile.js';
import { Settings } from './views/Settings.js';
import { Hours } from './views/Hours.js';
import { Market } from './views/Market.js';
import { Chat } from './views/Chat.js';
import { Meter, Report, Booking, Documents } from './views/Misc.js';

// --- DOM Elements ---
const app = document.getElementById('app');

// --- Service Worker ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered', reg))
      .catch(err => console.log('SW failed', err));
  });
}

// --- View Registry ---
const Views = {
  login: Login,
  dashboard: Dashboard,
  club: Club,
  profile: Profile,
  settings: Settings,
  hours: Hours,
  market: Market,
  chat: Chat,
  meter: Meter,
  report: Report,
  booking: Booking,
  documents: Documents
};

// --- Main Render Function ---
function render() {
  // 1. Check Auth
  if (!state.user && state.currentView !== 'login') {
    state.currentView = 'login';
  }

  // 2. Render View
  const viewRenderer = Views[state.currentView] || Views.login;
  app.innerHTML = viewRenderer() + Navbar();

  // 3. Attach Event Listeners
  attachListeners();
}

function attachListeners() {
  // Login Form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const role = document.getElementById('role').value;
      
      state.user = { username, role };
      state.currentView = 'dashboard';
    });
  }

  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      state.user = null;
      state.currentView = 'login';
    });
  }

  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('change', (e) => {
      const isChecked = e.target.checked;
      state.theme = isChecked ? 'dark' : 'light';
    });
  }
}

// --- Global Navigation Helper ---
window.navigate = (view) => {
  state.currentView = view;
};

// --- Init ---
// Listen for state changes to re-render
window.addEventListener('state-changed', () => {
  render();
});

// Initial Render
render();
