import React from 'react';
import LayerRouter from '../LayerRouter';

class LayerClose extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        event.preventDefault();
        LayerRouter.close();
    }

    render() {
        return (<a className="react-layer-close" href="#" onClick={this.handleClick}>{this.props.children}</a>);
    }
}

export default LayerClose;