import React from 'react';
import LayerRouter from '../LayerRouter';

class LayerLink extends React.Component{
    handleClick (event) {
        event.preventDefault();
        LayerRouter.target(this.props.layer, this.props.to, this.props.params);
    }

    render() {
        var props = this.props;
        props.onClick = this.handleClick.bind(this);

        return React.DOM.a(props, this.props.children);
    }
};

export default LayerLink;