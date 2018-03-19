import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home';
import Resume from './Resume';
import Lewan from './Lewan';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/resume',
            name: 'Resume',
            component: Resume,
        },
        {
            path: '/lewan',
            name: 'Lewan',
            component: Lewan,
        },
    ]
})