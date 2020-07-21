import 'bootstrap';
import '~/styles/main.scss';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from '~/styles/global';

import Home from '~/pages/index';
import Galeria from '~/pages/galeria';
import FAQ from '~/pages/faq';
import Contato from '~/pages/contato';

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/galeria" component={Galeria} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </Router>
  );
}
