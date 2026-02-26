import { state } from '../store.js';

export function Settings() {
  const isDark = state.theme === 'dark';
  return `
    <header class="top-bar">
      <button onclick="window.navigate('profile')" class="back-btn">←</button>
      <h1>Einstellungen</h1>
    </header>
    <main class="content">
      <div class="card">
        <h3>Darstellung</h3>
        <div class="list-item" style="justify-content: space-between; border: none; padding: 0;">
          <div>
            <strong>Dunkelmodus</strong><br>
            <small>Augenschonendes Design</small>
          </div>
          <label class="switch">
            <input type="checkbox" id="themeToggle" ${isDark ? 'checked' : ''}>
            <span class="slider"></span>
          </label>
        </div>
      </div>
      
      <div class="card">
        <h3>Benachrichtigungen</h3>
        <div class="list-item" style="justify-content: space-between; border: none; padding: 0; margin-bottom: 1rem;">
          <div>
            <strong>Push-Nachrichten</strong><br>
            <small>Bei neuen Aushängen</small>
          </div>
          <label class="switch">
            <input type="checkbox" checked>
            <span class="slider"></span>
          </label>
        </div>
      </div>
      
      <div class="card">
        <h3>App Info</h3>
        <p>Version 2.0.0 (2026 Edition)</p>
        <small>Build: 20260225</small>
      </div>
    </main>
  `;
}
