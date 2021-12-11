import Vue from 'vue'
import App from './App.vue'
import router from './router';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false

// 非single-spa环境，独立运行
if(!window.singleSpaNavigate) {
  new Vue({
    render: h => h(App),
    router,
  }).$mount('#app')
}

// single-spa 启动
const appOptions = {
  el: "#microApp",
  router,
  render: h => h(App)
}

const vueLifecycle = singleSpaVue({
  Vue,
  appOptions,
});

export function bootstrap(props) {
  console.log(`app_vue2 start <====================>`, props);
  return vueLifecycle.bootstrap(() => {});
}

export function mount(props) {
  console.log(`app_vue2 mount <====================>`, props);
  return vueLifecycle.mount(() => {});
}

export function unmount(props) {
  console.log(`app_vue2 unmount <====================>`, props);
  return vueLifecycle.unmount(() => {});
}

