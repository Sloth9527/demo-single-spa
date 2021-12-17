// 远程加载子应用
function createScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)
  })
  .then((data) => {
    console.log(`url <====================>`, url);
    return data;
  })
}

const vueFiles = [
  '/js/chunk-vendors.js',
  '/js/app.js',
];

const reactFiles = [
  '/static/js/bundle.js',
  '/static/js/vendors~main.chunk.js',
  '/static/js/main.chunk.js',
];

const filesMap ={
  app_vue2: vueFiles,
  app_vue3: vueFiles,
  app_react: reactFiles,
};

// 记载函数，返回一个 promise
function loadApp(url, globalVar) {
  // 支持远程加载子应用
  return async () => {
      // await createScript(url + '/js/chunk-vendors.js')
      // await createScript(url + '/js/app.js')
      const loadFuncs = (filesMap[globalVar] || []).map(path => () => createScript(url + path))

      const load = (idx) => async () => {
        const func = loadFuncs[idx];

        if(!func) {
          return;
        }

        return await func()
          .then(load(idx + 1));
      }

      await Promise.resolve().then(load(0));

      // 这里的return很重要，需要从这个全局对象中拿到子应用暴露出来的生命周期函数
      return window[globalVar]
  }
}

const apps = [
    {
      // 子应用名称
      name: 'app_vue2',
      // 子应用加载函数，是一个promise
      app: loadApp('http://localhost:8081', 'app_vue2'),
      // 当路由满足条件时（返回true），激活（挂载）子应用
      activeWhen: location => location.pathname.startsWith('/app_vue2'),
      // 传递给子应用的对象
      customProps: {}
    },
    {
      name: 'app_vue3',
      app: loadApp('http://localhost:8082', 'app_vue3'),
      activeWhen: location => location.pathname.startsWith('/app_vue3'),
      customProps: {}
    },
    {
      name: 'app_react',
      app: loadApp('http://localhost:8083', 'app_react'),
      activeWhen: location => location.pathname.startsWith('/app_react'),
      customProps: {}
    },
];

export default apps;
