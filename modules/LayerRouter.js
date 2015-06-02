import React from 'react';

class LayerRouter {

    constructor() {
        this.layerCount = 0;
        this.currentIndex = 0;
        this.component = null;
        this.router = null;
        this.getRouter = this.getRouter.bind(this);
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

    target (index, to, params, Component) {
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
                layer = document.getElementById(layerId);
                React.unmountComponentAtNode(layer);
                layer.style.display = 'none';
            }
            this.layerCount = this.currentIndex;
        }

        var Route = this.findHandlerByName(this.router.routes[0], to);
        if (Route == false) {
            return;
        }

        var target = document.getElementById(target);
        target.style.display = 'block';

        if (Component) {
            //React.withContext({'router': this.router}, function () {
                React.render(<Component router={this.router}><Route router={this.router} {...params} /></Component>, target);
            //});
        } else {
            //React.withContext({'router': this.router}, function () {
                React.render(<Route router={this.router} {...params} />, target);
            //});
        }
    }

    close () {
        var layer = document.getElementById('react-layer-' + this.currentIndex);
        React.unmountComponentAtNode(layer);
        layer.style.display = 'none';
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

    getRouter () {
        return this.router;
    }
}

var layerRouter = new LayerRouter();

export default layerRouter;