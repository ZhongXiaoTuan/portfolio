import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home';
import Resume from './Resume';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Resume',
            name: 'Resume',
            component: Resume,
        }
    ]
})