import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import singleSpaReact from 'single-spa-react';

// 非single-spa环境，独立运行
if(!window.singleSpaNavigate) {
  ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

const reactLifecycles = new singleSpaReact({
  React,
  ReactDOM,
  rootComponent: <React.StrictMode>
    <App />
  </React.StrictMode>,
  domElementGetter: () => document.getElementById('microApp'),
});

export function bootstrap(props) {
  console.log(`app_react start <====================>`, props);
  return reactLifecycles.bootstrap(() => {});
}

export function mount(props) {
  console.log(`app_react mount <====================>`, props);
  return reactLifecycles.mount(() => {});
}

export function unmount(props) {
  console.log(`app_react unmount <====================>`, props);
  return reactLifecycles.unmount(() => {});
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
