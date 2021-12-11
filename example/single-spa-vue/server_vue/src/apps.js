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
}

// 记载函数，返回一个 promise
function loadApp(url, globalVar) {
  // 支持远程加载子应用
  return async () => {
      await createScript(url + '/js/chunk-vendors.js')
      await createScript(url + '/js/app.js')
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
      name: 'app2',
      app: loadApp('http://localhost:8082', 'app2'),
      activeWhen: location => location.pathname.startsWith('/app2'),
      customProps: {}
    },
];

export default apps;
