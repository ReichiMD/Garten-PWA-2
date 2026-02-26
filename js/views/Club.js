import { state } from '../store.js';

export function Club() {
  return `
    <header class="top-bar">
      <h1>Unser Verein</h1>
    </header>
    <main class="content">
      <div class="card">
        <div style="text-align:center; margin-bottom:1rem;">
          <div style="font-size:3rem;">🏡</div>
          <h2 class="club-title" style="color:var(--primary); text-shadow:none;">KKV Sonnenhain</h2>
          <p>Gegründet 1924</p>
        </div>
        <p>Willkommen im digitalen Zuhause unseres Kleingartenvereins. Hier finden Sie Informationen zum Vorstand, zur Geschichte und zu unseren Gemeinschaftsprojekten.</p>
      </div>
      
      <div class="list-group">
        <div class="list-item">
          <span>👑</span>
          <div>
            <strong>Der Vorstand</strong><br>
            <small>Kontakt & Sprechzeiten</small>
          </div>
        </div>
        <div class="list-item">
          <span>📜</span>
          <div>
            <strong>Chronik</strong><br>
            <small>100 Jahre Geschichte</small>
          </div>
        </div>
      </div>

      <hr style="margin: 2rem 0; border: 0; border-top: 1px solid var(--border);">
      
      <h3>Verwaltung</h3>
      <div class="list-group">
        <button onclick="window.navigate('hours')" class="list-item">
          <span>⏱️</span>
          <div style="flex:1">
            <strong>Stunden</strong><br>
            <small>Arbeitsstunden erfassen</small>
          </div>
          <span>›</span>
        </button>
        <button onclick="window.navigate('meter')" class="list-item">
          <span>💧</span>
          <div style="flex:1">
            <strong>Zähler</strong><br>
            <small>Wasserstand melden</small>
          </div>
          <span>›</span>
        </button>
        <button onclick="window.navigate('booking')" class="list-item">
          <span>📅</span>
          <div style="flex:1">
            <strong>Buchung</strong><br>
            <small>Vereinsheim reservieren</small>
          </div>
          <span>›</span>
        </button>
      </div>
    </main>
  `;
}
