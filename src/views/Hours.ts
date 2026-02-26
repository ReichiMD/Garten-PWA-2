import { state } from '../store';

export function Hours() {
  const isAdmin = state.user?.role === 'admin';
  return `
    <header class="top-bar">
      <button onclick="window.navigate('club')" class="back-btn">←</button>
      <h1>Arbeitsstunden</h1>
    </header>
    <main class="content">
      ${isAdmin ? `
        <div class="card">
          <h3>Offene Genehmigungen</h3>
          <ul class="list-group">
            <li class="list-item">
              <div>
                <strong>Müller, Parzelle 12</strong><br>
                <small>Heckenschnitt, 4 Std.</small>
              </div>
              <div class="actions">
                <button class="btn-icon check">✓</button>
                <button class="btn-icon cross">✗</button>
              </div>
            </li>
          </ul>
        </div>
      ` : `
        <div class="card">
          <h3>Stunden erfassen</h3>
          <form>
            <div class="input-group">
              <label>Tätigkeit</label>
              <select>
                <option>Heckenschnitt</option>
                <option>Wegebau</option>
                <option>Vereinsheim Reinigung</option>
              </select>
            </div>
            <div class="input-group">
              <label>Dauer (Stunden)</label>
              <input type="number" value="1">
            </div>
            <div class="input-group">
              <label>Datum</label>
              <input type="date">
            </div>
            <button class="btn btn-primary btn-block">Einreichen</button>
          </form>
        </div>
        
        <div class="card">
          <h3>Mein Status</h3>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 60%;">6 / 10 Std.</div>
          </div>
        </div>
      `}
    </main>
  `;
}
