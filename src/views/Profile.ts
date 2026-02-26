import { state } from '../store';

export function Profile() {
  return `
    <header class="top-bar">
      <h1>Mein Profil</h1>
    </header>
    <main class="content">
      <div class="card profile-card">
        <div class="avatar-large">👤</div>
        <h3>${state.user?.username}</h3>
        <p>${state.user?.role === 'admin' ? 'Vorstand' : 'Mitglied, Parzelle 42'}</p>
      </div>
      
      <div class="list-group">
        <button onclick="window.navigate('documents')" class="list-item action-row">
          <span>📄 Dokumente & Satzung</span>
          <span>›</span>
        </button>
        <button onclick="window.navigate('settings')" class="list-item action-row">
          <span>⚙️ Einstellungen</span>
          <span>›</span>
        </button>
        <button class="list-item action-row" id="logoutBtn" style="color: red;">
          <span>🚪 Abmelden</span>
        </button>
      </div>
    </main>
  `;
}
