import React from 'react';
import Layer from './Layer';

class RouterLayerHandler extends React.Component {

    render() {
        var layers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (layer) {
            var layerStyle = {
                display: 'none'
            };
            layerStyle.zIndex = layer * 100;
            var key = 'react-layer-' + layer;
            return (
                <Layer
                    key={key}
                    offset={layer}
                    style={layerStyle}
                />
            );
        });

        return (
            <div id="react-layer-container">{layers}</div>
        );
    }
};

export default RouterLayerHandler;