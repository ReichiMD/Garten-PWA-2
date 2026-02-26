const initialState = {
  user: JSON.parse(localStorage.getItem('garten_user') || 'null'),
  currentView: 'login',
  theme: (localStorage.getItem('garten_theme')) || 'light'
};

export const state = new Proxy(initialState, {
  set(target, property, value) {
    target[property] = value;
    
    // Persistence
    if (property === 'user') {
      if (value) localStorage.setItem('garten_user', JSON.stringify(value));
      else localStorage.removeItem('garten_user');
    }
    if (property === 'theme') {
      localStorage.setItem('garten_theme', value);
      document.documentElement.setAttribute('data-theme', value);
    }

    // Trigger re-render (simple observer pattern)
    window.dispatchEvent(new CustomEvent('state-changed'));
    return true;
  }
});

// Apply theme on load
document.documentElement.setAttribute('data-theme', state.theme);
