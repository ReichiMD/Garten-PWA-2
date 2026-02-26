export function Chat() {
  return `
    <header class="top-bar">
      <h1>Community</h1>
    </header>
    <main class="content">
      <div class="list-group">
        <div class="list-item chat-row">
          <div class="avatar">📢</div>
          <div class="chat-info">
            <strong>Offizielles</strong>
            <p>Vorstand: Bitte Tor schließen...</p>
          </div>
        </div>
        <div class="list-item chat-row">
          <div class="avatar">🍅</div>
          <div class="chat-info">
            <strong>Anbau-Tipps</strong>
            <p>Lisa: Wann sät ihr Karotten?</p>
          </div>
        </div>
        <div class="list-item chat-row">
          <div class="avatar">🎉</div>
          <div class="chat-info">
            <strong>Sommerfest Planung</strong>
            <p>Klaus: Ich bringe den Grill...</p>
          </div>
        </div>
      </div>
    </main>
  `;
}
