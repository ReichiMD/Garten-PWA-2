export function Meter() {
  return `<header class="top-bar"><button onclick="window.navigate('club')" class="back-btn">←</button><h1>Zählerstand</h1></header><main class="content"><div class="card"><h3>Zählerstand melden</h3><p>Bitte Foto vom Zähler hochladen.</p><input type="file" accept="image/*" class="btn-block"><br><button class="btn btn-primary btn-block">Senden</button></div></main>`;
}

export function Report() {
  return `<header class="top-bar"><button onclick="window.navigate('dashboard')" class="back-btn">←</button><h1>Mängelmeldung</h1></header><main class="content"><div class="card"><h3>Schaden melden</h3><textarea style="width:100%;padding:0.5rem;" rows="4" placeholder="Beschreibung..."></textarea><br><br><button class="btn btn-primary btn-block">Melden</button></div></main>`;
}

export function Booking() {
  return `<header class="top-bar"><button onclick="window.navigate('club')" class="back-btn">←</button><h1>Buchung</h1></header><main class="content"><div class="card"><h3>Vereinsheim buchen</h3><p>Kalender-Ansicht (Mockup)</p><div style="background:#eee;height:200px;display:flex;align-items:center;justify-content:center;">Kalender</div></div></main>`;
}

export function Documents() {
  return `
    <header class="top-bar"><button onclick="window.navigate('profile')" class="back-btn">←</button><h1>Dokumente</h1></header>
    <main class="content">
      <div class="list-group">
        <div class="list-item">
          <span>📜</span>
          <div style="flex:1"><strong>Satzung.pdf</strong><br><small>2.4 MB • Offline verfügbar</small></div>
          <button class="btn-sm">Öffnen</button>
        </div>
        <div class="list-item">
          <span>📋</span>
          <div style="flex:1"><strong>Gartenordnung 2025.pdf</strong><br><small>1.1 MB • Offline verfügbar</small></div>
          <button class="btn-sm">Öffnen</button>
        </div>
      </div>
    </main>
  `;
}
