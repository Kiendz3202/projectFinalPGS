import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/index'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

