import React from 'react';
import LayerRouter from '../LayerRouter';

class RouterLayerHandler extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        var layers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (layer) {
            var id = 'react-layer-' + layer;
            var layerStyle = {
                display: 'none'
            };
            layerStyle.zIndex = layer * 100;
            return (
                <div key={id} id={id} style={layerStyle} className="react-layer"></div>
            );
        });

        return (
            <div id="react-layer-container">{layers}</div>
        );
    }
};

export default RouterLayerHandler;