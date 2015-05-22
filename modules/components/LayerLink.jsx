import React from 'react';
import { Link } from 'react-router';
import LayerRouter from '../libs/LayerRouter';

function layerLink(Component) {
    const LayerLink = React.createClass({
        render() {
            var customClick = function (e) {
                var el = e.target;
                if (el.hasAttribute('data-layer')) {
                    LayerRouter.target(el.getAttribute('data-layer'));
                }
            };

            return <Component {...this.props} onClick={customClick} />;
        }
    });
    return LayerLink;
};

var LayerLink = layerLink(Link);

export default LayerLink;