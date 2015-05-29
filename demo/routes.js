import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import Info from './components/Info.jsx';
import Test from './components/Test.jsx';
import App from './components/App.jsx';

var routes = (
  <Route name="app" path="/" handler={ App }>
    <Route name="info" handler={ Info } />
    <Route name="test" handler={ Test } />
    <DefaultRoute handler={ Test } />
    <NotFoundRoute handler={ Info } />
  </Route>
);

export default routes;