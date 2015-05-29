import React from 'react';

class Modal extends React.Component {
    render() {
        return (<div className="react-layer-modal">{this.props.children}</div>);
    }
};

export default Modal;