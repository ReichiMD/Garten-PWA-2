export function Market() {
  return `
    <header class="top-bar">
      <button onclick="window.navigate('dashboard')" class="back-btn">←</button>
      <h1>Gartenzaun-Börse</h1>
    </header>
    <main class="content">
      <div class="filter-bar">
        <button class="chip active">Alles</button>
        <button class="chip">Pflanzen</button>
        <button class="chip">Werkzeug</button>
      </div>
      
      <div class="market-grid">
        <div class="card market-item">
          <div class="market-img" style="background-color: #e0e0e0; height: 100px;"></div>
          <h4>Tomatensetzlinge</h4>
          <p>Verschiedene Sorten, Bio.</p>
          <div class="price">Zu verschenken</div>
          <button class="btn-sm">Kontakt</button>
        </div>
        <div class="card market-item">
          <div class="market-img" style="background-color: #e0e0e0; height: 100px;"></div>
          <h4>Vertikutierer</h4>
          <p>Nur 2x benutzt.</p>
          <div class="price">20 €</div>
          <button class="btn-sm">Kontakt</button>
        </div>
      </div>
      
      <button class="fab">+</button>
    </main>
  `;
}
