import 'bootstrap';
import '~/styles/main.scss';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '~/pages/index.jsx';
import Galeria from '~/pages/galeria.jsx';
import FAQ from '~/pages/faq.jsx';
import Contato from '~/pages/contato.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/galeria" component={Galeria} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </Router>
  );
}
