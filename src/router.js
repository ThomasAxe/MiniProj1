import { createRouter, createWebHistory } from 'vue-router'; 
import QuemSouEu from './Views/QuemSouEu.vue';
import OQueFaco from './Views/OQueFaco.vue';
import Hobbies from './Views/Hobbies.vue';

const routes = [
  { path: '/', redirect: '/quem-sou-eu' },
  { path: '/quem-sou-eu', component: QuemSouEu },
  { path: '/o-que-faco', component: OQueFaco },
  { path: '/hobbies', component: Hobbies },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
