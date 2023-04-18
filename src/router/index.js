import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import LoginPage from '../views/LoginPage.vue';
import { useAuthStore } from '../stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = useAuthStore().isLoggedIn;

  if (to.name === 'Dashboard' && !isLoggedIn) {
    next('/login');
  } else if (to.name === 'Login' && isLoggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router;
