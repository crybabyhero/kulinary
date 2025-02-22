import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Food from '../views/Foods.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/Food', component: Food },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
