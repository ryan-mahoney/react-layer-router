import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import Info from './components/Info.jsx';
import Info2 from './components/Info2.jsx';
import Test from './components/Test.jsx';
import Test2 from './components/Test2.jsx';
import App from './components/App.jsx';

var routes = (
  <Route name="app" path="/" handler={ App }>
    <Route name="info" handler={ Info } />
    <Route name="info2" handler={ Info2 } />
    <Route name="test" handler={ Test } />
    <Route name="test2" handler={ Test2 } />
    <DefaultRoute handler={ Info } />
    <NotFoundRoute handler={ Info } />
  </Route>
);

export default routes;