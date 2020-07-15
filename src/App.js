import 'bootstrap';
import '~/styles/main.scss';
import '~/config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { createBrowserHistory } from 'history';

import Routes from '~/routes';
import { store, persistor } from '~/store';

const history = createBrowserHistory();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer autoClose={5000} />
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}
