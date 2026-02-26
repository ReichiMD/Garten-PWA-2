import { state } from '../store';

export function Navbar() {
  if (!state.user) return '';
  
  const active = state.currentView;
  return `
    <nav class="nav-bar">
      <a href="#" onclick="window.navigate('club')" class="nav-item ${active === 'club' ? 'active' : ''}">
        <span>🏡</span>
        <small>Verein</small>
      </a>
      <a href="#" onclick="window.navigate('market')" class="nav-item ${active === 'market' ? 'active' : ''}">
        <span>🛒</span>
        <small>Markt</small>
      </a>
      <a href="#" onclick="window.navigate('dashboard')" class="nav-item ${active === 'dashboard' ? 'active' : ''}">
        <span>🏠</span>
        <small>Home</small>
      </a>
      <a href="#" onclick="window.navigate('chat')" class="nav-item ${active === 'chat' ? 'active' : ''}">
        <span>💬</span>
        <small>Chat</small>
      </a>
      <a href="#" onclick="window.navigate('profile')" class="nav-item ${active === 'profile' ? 'active' : ''}">
        <span>👤</span>
        <small>Profil</small>
      </a>
    </nav>
  `;
}
