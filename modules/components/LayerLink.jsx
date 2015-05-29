import React from 'react';
import LayerRouter from '../LayerRouter';

class LayerLink extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        event.preventDefault();
        LayerRouter.target(this.props.layer, this.props.to, this.props.params, this.props.component);
    }

    render() {
        return (<a href="#" onClick={this.handleClick}>{this.props.children}</a>);
    }
};

export default LayerLink;