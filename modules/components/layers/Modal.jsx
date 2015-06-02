import React from 'react';

class Modal extends React.Component {
    constructor (props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        var classNames = 'react-layer-modal ' + this.props.className;
        return (
            <div
                className={classNames}
                style={this.props.style}
                id={this.props.id}
            >
                {this.props.children}
            </div>);
    }
};

export default Modal;