import React from 'react';
import ReactDOM from 'react-dom';
import FishMenu from './components/fishMenu';
import store from './store'
import { Provider } from 'react-redux'


const app = (
  <Provider store={store}>
    <FishMenu />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));