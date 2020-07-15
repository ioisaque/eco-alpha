import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/components/Route';

import Home from './views/website';
import Oportunidades from './views/website/oportunidades';

import E404 from './views/errors/404';
import Login from './views/login';

import Dashboard from './views/dashboard';
import Clientes from './views/clientes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/oportunidades" component={Oportunidades} />

      <Route path="/admin" component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/clientes/:action/:id?" component={Clientes} isPrivate />

      <Route path="/" component={E404} />
    </Switch>
  );
}
