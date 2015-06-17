import React from 'react';
import LayerManager from '../LayerManager';

class LayerLink extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        event.preventDefault();
        LayerManager.target(this.props.layer, this.props.component, this.props.params, this.props.wrapper);
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