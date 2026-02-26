import { state } from '../store';

export function Dashboard() {
  const isAdmin = state.user?.role === 'admin';
  
  return `
    <header class="top-bar">
      <h1 class="club-title">KKV Sonnenhain</h1>
      <div class="weather-widget">
        <span>⛅ 18°C</span>
      </div>
    </header>
    
    <main class="content">
      <!-- Pinned News -->
      <div class="card news-card pinned">
        <div class="card-header">
          <span class="badge">Wichtig</span>
          <small>12.05.2025</small>
        </div>
        <h3>Gemeinschaftsarbeit am Samstag</h3>
        <p>Bitte Gartengeräte mitbringen. Treffpunkt 09:00 Uhr am Vereinsheim.</p>
        ${isAdmin ? '<div class="admin-controls"><button class="btn-sm">Bearbeiten</button></div>' : ''}
      </div>

      <!-- Recent News -->
      <div class="card news-card">
        <div class="card-header">
          <small>10.05.2025</small>
        </div>
        <h3>Wasser wird angestellt</h3>
        <p>Die Wasserversorgung ist ab sofort wieder aktiv. Bitte Uhren prüfen!</p>
      </div>
    </main>
  `;
}
