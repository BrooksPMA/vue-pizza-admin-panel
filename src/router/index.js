import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import LoginPage from '../views/LoginPage.vue';
import Food from '../views/Food.vue';
import AddFood from '../views/AddFood.vue';
import Orders from '../views/Orders.vue';
import { useAuthStore } from '../stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
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
    {
      path: '/food',
      name: 'Food',
      component: Food,
    },
    {
      path: '/new/:type',
      name: 'AddFood',
      component: AddFood,
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = useAuthStore().isLoggedIn;

  if (
    (to.name === 'Dashboard' ||
      to.name === 'Food' ||
      to.name === 'AddFood' ||
      to.name === 'Orders') &&
    !isLoggedIn
  ) {
    next('/login');
  } else if (to.name === 'Login' && isLoggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router;
