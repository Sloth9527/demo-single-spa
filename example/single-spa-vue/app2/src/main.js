import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router';
import singleSpaVue from 'single-spa-vue';

// 非single-spa环境，独立运行
if(!window.singleSpaNavigate) {
    createApp(App)
    .use(router)
    .mount('#app')
}

// single-spa 启动
const appOptions = {
    el: "#microApp",
    render: () => h(App)
}

const vueLifecycle = singleSpaVue({
    createApp,
    appOptions,
    handleInstance: vueInstance => {
        vueInstance.use(router);
    }
});

export function bootstrap(props) {
    console.log(`app_vue3 start <====================>`, props);
    return vueLifecycle.bootstrap(() => {});
}

export function mount(props) {
    console.log(`app_vue3 mount <====================>`, props);
    return vueLifecycle.mount(() => {});
}

export function unmount(props) {
    console.log(`app_vue3 unmount <====================>`, props);
    return vueLifecycle.unmount(() => {});
}
  