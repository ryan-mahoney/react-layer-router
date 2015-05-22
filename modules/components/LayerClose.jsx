import React from 'react';
import LayerRouter from '../libs/LayerRouter';

class LayerClose extends React.Component{

    constructor(props, context) {
        super(props);
    }

    handleClose () {
        LayerRouter.close();
    }

    render() {
        return (
            <div onClick={this.handleClose}>Close</div>
        );
    }
}

export default LayerClose;