import { createApp } from 'vue'
import App from './App.vue'
import apps from './apps';
import { registerApplication, start } from 'single-spa';

apps.forEach(app => {
    registerApplication(app);
})

createApp(Object.assign({}, App, {
    mounted() {
        start({
            urlRerouteOnly: true
        });
    }
})).mount('#app')
