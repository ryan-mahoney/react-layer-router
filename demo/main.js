import React from 'react';
import { LayerRouter } from '../lib/index';
import Router from 'react-router';
import routes from './routes';

var router = Router.run(routes, Router.HistoryLocation, (Handler, state) => {
    React.render(<Handler />, document.getElementById('app'));
});

LayerRouter.run(router, Router.HistoryLocation);