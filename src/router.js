import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// Provides LazyLoading of these components
const Skills = () => import('./components/Skills.vue');
const About = () => import('./components/About.vue');

export default new Router({
    routes: [
        {
            path: '/',
            name: 'skills',
            component: Skills
        },
        {
            path: '/about/:name',
            name: 'about',
            component: About
        }
    ]
});
