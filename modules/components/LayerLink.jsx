import React from 'react';
import LayerRouter from '../LayerRouter';

class LayerLink extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        event.preventDefault();
        LayerRouter.target(this.props.layer, this.props.to, this.props.params, this.props.component);
    }

    render () {
        var classNames = 'react-layer-open';
        if (this.props.className) {
            classNames += ' ' + this.props.className;
        }
        var id = null;
        if (this.props.id) {
            id = this.props.id;
        }
        return (<a id={id} className={classNames} href="#" onClick={this.handleClick}>{this.props.children}</a>);
    }
};

export default LayerLink;