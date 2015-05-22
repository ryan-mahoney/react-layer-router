import React from 'react';
import Router from 'react-router';

class LayerRouter {

    constructor() {
        this.layerCount = 0;
        this.currentIndex = 0;
    }

    run (appRootId, routes) {
        Router.run(routes, (Handler) => {
            if (this.currentIndex > this.layerCount) {
                var layer = document.createElement('div');
                layer.style.cssText = 'position: fixed; width:100%; height:100%; z-index:' + (this.currentIndex * 100) + '; background:#fff;';
                layer.id = 'react-layer-' + this.currentIndex;
                var previousLayer = appRootId;
                if (this.layerCount > 0) {
                    previousLayer = 'react-layer-' + this.layerCount;
                }
                document.body.insertBefore(layer, document.getElementById(previousLayer));
                this.layerCount = this.currentIndex;
            }
            var target = appRootId;
            if (this.currentIndex > 0) {
                target = 'react-layer-' + this.currentIndex;
            }
            if (this.currentIndex < this.layerCount) {
                var i;
                var layerId;
                for (i = this.layerCount; i > this.currentIndex; i--) {
                    layerId = 'react-layer-' + i;
                    document.body.removeChild(document.getElementById(layerId));
                }
                this.layerCount = this.currentIndex;
            }
            React.render(<Handler />, document.getElementById(target));
        });
    }

    target (index) {
        if (index == 'new') {
            this.currentIndex = this.layerCount + 1;
        } else if (index == 'clear') {
            this.currentIndex = 0;
        } else {
            this.currentIndex = index;
        }
    }

    close () {
        document.body.removeChild(document.getElementById('react-layer-' + this.currentIndex));
        this.currentIndex--;
        this.layerCount--;
    }
}

var layerRouter = new LayerRouter();

export default layerRouter;