import { createRouter, createWebHistory } from 'vue-router';
import UserDetails from './components/UserDetails.vue';

const routes = [
  { path: '/', component: WeatherGrid },
  { path: '/user/:id', component: UserDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
