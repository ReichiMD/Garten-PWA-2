import { state } from '../store.js';

export function Login() {
  return `
    <div class="login-container">
      <div class="card login-card">
        <div class="logo-placeholder">🌱</div>
        <h2>Gartenverein Login</h2>
        <p class="subtitle">Willkommen zurück im Grünen</p>
        
        <form id="loginForm">
          <div class="input-group">
            <label>Benutzername</label>
            <input type="text" id="username" placeholder="Max Mustermann" required>
          </div>
          
          <div class="input-group">
            <label>Rolle</label>
            <select id="role">
              <option value="member">Mitglied</option>
              <option value="admin">Vorstand / Admin</option>
            </select>
          </div>
          
          <button type="submit" class="btn btn-primary btn-block">Anmelden</button>
        </form>
      </div>
    </div>
  `;
}
