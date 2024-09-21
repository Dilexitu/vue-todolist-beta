import { createRouter, createWebHistory } from 'vue-router';
import HomeList from '../views/Home-list.vue';
import SelfCare from '../views/SelfCare.vue';
import StatisticsFigures from '../views/Statistics-figures.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeList,
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: StatisticsFigures,
  },
  {
    path: '/zelfzorg',
    name: 'SelfCare',
    component: SelfCare,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
