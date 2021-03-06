import React from 'react';
import LayerEvents from './LayerEvents';

class LayerRouter {

    constructor() {
        this.layerCount = 0;
        this.currentIndex = 0;
        this.component = null;
        this.router = null;
    }

    run (router, locationEmitter) {
        // plug this router into the location event emitter
        this.router = router;
        var that = this;
        locationEmitter.addChangeListener(function (change) {
            // close all open layers
            if (that.currentIndex == 0) {
                return;
            }

            // loop over the close
            while (that.currentIndex > 0) {
                that.close();
            }
        });
    }

    target (index, to, params, Wrapper) {
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
                    route: null,
                    style: {
                        zIndex: (i * 100),
                        display: 'none'
                    }
                });
            }
            this.layerCount = this.currentIndex;
        }

        var Route = this.findHandlerByName(this.router.routes[0], to);
        if (Route == false) {
            return;
        }

        var style = {
            zIndex: (this.currentIndex * 100),
            display: 'block'
        };

        LayerEvents.emit(target, {
            route: Route,
            wrapper: Wrapper,
            style: style,
            params: params
        });
    }

    close () {
        var target = 'react-layer-' + this.currentIndex;
        LayerEvents.emit(target, {
            route: null,
            style: {
                zIndex: (this.currentIndex * 100),
                display: 'none'
            }
        });
        this.currentIndex--;
        this.layerCount--;
    }

    findHandlerByName (route, name) {
        if (route.name == name) {
            return route.handler;
        }
        if (!route.childRoutes) {
            return false;
        }
        var handler;
        for (var index in route.childRoutes) {
            handler = this.findHandlerByName(route.childRoutes[index], name);
            if (handler !== false) {
                return handler;
            }
        }
        return false;
    }
}

var layerRouter = new LayerRouter();

export default layerRouter;