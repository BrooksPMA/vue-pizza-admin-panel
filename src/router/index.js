import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginPage from '../views/LoginPage.vue';
import { useAuthStore } from '../stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = useAuthStore().isAuthenticated;

  if (to.name === 'Home' && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
