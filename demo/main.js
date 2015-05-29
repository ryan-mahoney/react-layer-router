import React from 'react';
import { LayerRouter } from '../modules/index';
import Router from 'react-router';
import routes from './routes';

var router = Router.run(routes, Router.HistoryLocation, (Handler) => {
    React.render(<Handler />, document.getElementById('app'));
});

LayerRouter.run('app', router, Router.HistoryLocation);