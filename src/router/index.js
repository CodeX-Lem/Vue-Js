import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AddProductView from '../views/AddProductView.vue'
import EditProductView from '../views/EditProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todolist',
      name: 'todolist',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TodoView.vue')
    },
    {
      path: '/multiform',
      name: 'multiform',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView
    },
    {
      path: '/products/add',
      name: 'add_product',
      component: AddProductView
    },
    {
      path: '/products/:id/edit',
      name: 'edit_product',
      component: EditProductView
    }
  ]
})
export default router
