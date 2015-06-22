import React from 'react';
import { RouteHandler } from 'react-router';
import RouterLayerHandler from '../../lib/components/RouterLayerHandler';

class App extends React.Component {
    render() {
        return (
            <div>
                <RouterLayerHandler {...this.props} />
                <RouteHandler {...this.props} />
            </div>
        );
    }
}

export default App;