import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'authStore',
  state: () => ({
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  }),
  actions: {
    async login(email, password) {
      if (email === 'admin@admin.ru' && password === 'admin') {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', true);
        return true;
      } else {
        return false;
      }
    },
    logout() {
      this.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
    },
  },
});
