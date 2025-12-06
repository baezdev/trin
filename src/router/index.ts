import PrincipalMenu from '@/pages/PrincipalMenu.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal-menu',
      component: PrincipalMenu,
    },
    {
      path: '/products-catalog',
      name: 'products-catalog',
      component: () => import('../pages/ProductsCatalog.vue'),
    },
    {
      path: '/cart-payment',
      name: 'cart-payment',
      component: () => import('../pages/CartPayment.vue'),
    },
    {
      path: '/order-complete',
      name: 'order-complete',
      component: () => import('../pages/OrderComplete.vue'),
    },
    {
      path: '/sales-history',
      name: 'sales-history',
      component: () => import('../pages/SalesHistory.vue'),
    },
  ],
})

export default router
