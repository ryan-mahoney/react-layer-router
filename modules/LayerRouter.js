import React from 'react';

class LayerRouter {

    constructor() {
        this.layerCount = 0;
        this.currentIndex = 0;
        this.component = null;
        this.router = null;
        this.appRootId = null;
    }

    run (appRootId, router, locationEmitter) {
        // plug this router into the location event emitter
        this.router = router;
        this.appRootId = appRootId;
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

    target (index, to, params) {
        if (index == 'new') {
            this.currentIndex = this.layerCount + 1;
        } else if (index == 'clear') {
            this.currentIndex = 0;
        } else if (index == 'current') {
            if (this.currentIndex == 0) {
                this.currentIndex++;
            }
        } else {
            this.currentIndex = index;
        }

        if (this.currentIndex > this.layerCount) {
            var layer = document.createElement('div');
            layer.style.cssText = 'z-index:' + (this.currentIndex * 100) + ';';
            layer.id = 'react-layer-' + this.currentIndex;
            layer.className = 'react-layer';
            var previousLayer = this.appRootId;
            if (this.layerCount > 0) {
                previousLayer = 'react-layer-' + this.layerCount;
            }
            document.body.insertBefore(layer, document.getElementById(previousLayer));
            this.layerCount = this.currentIndex;
        }
        var target = 'react-layer-' + this.currentIndex;
        if (this.currentIndex < this.layerCount) {
            var i;
            var layerId;
            for (i = this.layerCount; i > this.currentIndex; i--) {
                layerId = 'react-layer-' + i;
                document.body.removeChild(document.getElementById(layerId));
            }
            this.layerCount = this.currentIndex;
        }

        var Handler = this.findHandlerByName(this.router.routes[0], to);
        if (Handler == false) {
            return;
        }
        React.withContext({'router': this.router}, function () {
            React.render(<Handler />, document.getElementById(target));
        });
    }

    close () {
        React.unmountComponentAtNode(document.getElementById('react-layer-' + this.currentIndex));
        document.body.removeChild(document.getElementById('react-layer-' + this.currentIndex));
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