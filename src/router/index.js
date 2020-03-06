import Vue from 'vue';
import VueRouter from 'vue-router';
import PlanetsList from '../views/PlanetsList.vue';
import SpeciesList from '../views/SpeciesList.vue';
import PlanetDetail from '../views/PlanetDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Planets',
    component: PlanetsList,
  },
  {
    path: '/species',
    name: 'Species',
    component: SpeciesList,
  },
  {
    path: '/planet/detail',
    name: 'PlanetsDetail',
    component: PlanetDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
