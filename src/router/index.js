import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AddView from '../views/AddView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/add',
      name: 'AddView',
      component: AddView
    },
    { 
      path : '/:notFound(.*)', 
      component: NotFoundView
    }
  ]
})

export default router
