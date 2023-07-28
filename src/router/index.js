import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import LoginPage from '../views/LoginPage.vue';
import Products from '../views/Products.vue';
import AddFood from '../views/AddFood.vue';
import OrdersList from '../views/OrdersList.vue';
import Order from '../views/Order.vue';
import UpdateProduct from '../views/UpdateProduct.vue';
import { useAuthStore } from '../stores/authStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',

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
      path: '/products/:type',
      name: 'Products',
      component: Products,
    },
    {
      path: '/new/:type',
      name: 'AddFood',
      component: AddFood,
    },
    {
      path: '/update/:type/:id?',
      name: 'UpdateProduct',
      component: UpdateProduct,
    },
    {
      path: '/orders',
      name: 'Orders',
      component: OrdersList,
    },
    {
      path: '/order/:id',
      name: 'Order',
      component: Order,
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
