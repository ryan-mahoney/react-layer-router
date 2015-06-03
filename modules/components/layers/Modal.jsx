import React from 'react';

class Modal extends React.Component {
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