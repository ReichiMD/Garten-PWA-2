import './style.css';
import { state } from './store';
import { UserRole } from './types';
import { Navbar } from './components/Navbar';

// Views
import { Login } from './views/Login';
import { Dashboard } from './views/Dashboard';
import { Club } from './views/Club';
import { Profile } from './views/Profile';
import { Settings } from './views/Settings';
import { Hours } from './views/Hours';
import { Market } from './views/Market';
import { Chat } from './views/Chat';
import { Meter, Report, Booking, Documents } from './views/Misc';

// --- DOM Elements ---
const app = document.getElementById('app')!;

// --- Service Worker ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered', reg))
      .catch(err => console.log('SW failed', err));
  });
}

// --- View Registry ---
const Views: Record<string, () => string> = {
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
    state.currentView = 'login'; // Direct mutation triggers proxy if we used it, but here we just render
    // Note: In our store implementation, setting property triggers event, but we are inside render loop.
    // Let's just ensure we render login.
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
      const username = (document.getElementById('username') as HTMLInputElement).value;
      const role = (document.getElementById('role') as HTMLSelectElement).value as UserRole;
      
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
      const isChecked = (e.target as HTMLInputElement).checked;
      state.theme = isChecked ? 'dark' : 'light';
    });
  }
}

// --- Global Navigation Helper ---
declare global {
  interface Window {
    navigate: (view: string) => void;
  }
}

window.navigate = (view: string) => {
  state.currentView = view;
};

// --- Init ---
// Listen for state changes to re-render
window.addEventListener('state-changed', () => {
  render();
});

// Initial Render
render();
