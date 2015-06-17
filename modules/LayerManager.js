import React from 'react';
import LayerEvents from './LayerEvents';

class LayerManager {

    constructor() {
        this.layerCount = 0;
        this.currentIndex = 0;
        this.component = null;
    }

    target (index, Component, params, Wrapper) {
        if (index == 'new') {
            this.currentIndex = this.layerCount + 1;
        } else if (index == 'clear') {
            this.currentIndex = 0;
        } else if (index == 'current') {
            if (this.currentIndex == 0) {
                this.currentIndex++;
            }
        } else {
            if (index == 0) {
                console.log('The first layer is identified by the index 1.');
                return;
            }
            this.currentIndex = index;
        }

        if (this.currentIndex > this.layerCount) {
            this.layerCount = this.currentIndex;
        }
        var target = 'react-layer-' + this.currentIndex;
        if (this.currentIndex < this.layerCount) {
            var i;
            var layerId;
            var layer;
            for (i = this.layerCount; i > this.currentIndex; i--) {
                layerId = 'react-layer-' + i;
                LayerEvents.emit(layerId, {
                    component: null,
                    style: {
                        zIndex: (i * 100),
                        display: 'none'
                    }
                });
            }
            this.layerCount = this.currentIndex;
        }

        var style = {
            zIndex: (this.currentIndex * 100),
            display: 'block'
        };

        LayerEvents.emit(target, {
            component: Component,
            wrapper: Wrapper,
            style: style,
            params: params
        });
    }

    close () {
        var target = 'react-layer-' + this.currentIndex;
        LayerEvents.emit(target, {
            component: null,
            style: {
                zIndex: (this.currentIndex * 100),
                display: 'none'
            }
        });
        this.currentIndex--;
        this.layerCount--;
    }
}

var layerManager = new LayerManager();

export default layerManager;