import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    email: '',
    password: '',
    isAuthenticated: false,
  }),
  actions: {
    async login(email, password) {
      if (email === 'daniel@lukmanov.net' && password === 'admin') {
        this.isAuthenticated = true;
        localStorage.setItem('isAuthenticated', true);
        return true;
      } else {
        return false;
      }
    },
    logout() {
      this.isAuthenticated = false;
      localStorage.removeItem('isAuthenticated');
    },
  },
  created() {
    if (localStorage.getItem('isAuthenticated')) {
      this.isAuthenticated = JSON.parse(isAuthenticated);
    }
  },
});
