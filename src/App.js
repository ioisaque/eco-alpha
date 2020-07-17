import 'bootstrap';
import '~/styles/main.scss';
import '~/config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import Routes from '~/routes';
import { store, persistor } from '~/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer autoClose={5000} />
        <Router>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}
