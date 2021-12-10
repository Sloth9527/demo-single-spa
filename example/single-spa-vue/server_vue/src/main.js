import { createApp } from 'vue'
import App from './App.vue'
import apps from './apps';
import { registerApplication, start } from 'single-spa';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [],
});

apps.forEach(app => {
    registerApplication(app);
})

createApp(Object.assign({}, App, {
    mounted() {
        start({
            urlRerouteOnly: true
        });
    }
}))
.use(router)
.mount('#app')
