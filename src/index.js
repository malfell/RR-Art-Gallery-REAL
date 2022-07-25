import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import store and provider
import { store } from './store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    {/* provider is store; wraps around app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);