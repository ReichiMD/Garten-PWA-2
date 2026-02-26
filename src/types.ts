export type UserRole = 'member' | 'admin';

export interface User {
  username: string;
  role: UserRole;
}

export interface AppState {
  user: User | null;
  currentView: string;
  theme: 'light' | 'dark';
}
