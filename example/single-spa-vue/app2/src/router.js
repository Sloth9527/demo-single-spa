import { createWebHistory } from 'vue-router';
import routes from './views/routes';

const router = createWebHistory({
    base: process.env.VUE_APP_BASE_URL,
    routes,
});

export default router;
