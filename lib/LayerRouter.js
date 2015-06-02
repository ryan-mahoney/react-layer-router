'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LayerEvents = require('./LayerEvents');

var _LayerEvents2 = _interopRequireDefault(_LayerEvents);

var LayerRouter = (function () {
    function LayerRouter() {
        _classCallCheck(this, LayerRouter);

        this.layerCount = 0;
        this.currentIndex = 0;
        this.component = null;
        this.router = null;
        this.getRouter = this.getRouter.bind(this);
    }

    _createClass(LayerRouter, [{
        key: 'run',
        value: function run(router, locationEmitter) {
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
    }, {
        key: 'target',
        value: function target(index, to, params, Component) {
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
                    _LayerEvents2['default'].emit(layerId, {
                        route: null
                    });
                }
                this.layerCount = this.currentIndex;
            }

            var Route = this.findHandlerByName(this.router.routes[0], to);
            if (Route == false) {
                return;
            }

            var finalComponent;
            var style = {
                zIndex: this.currentIndex * 100,
                display: 'block'
            };
            if (Component) {
                finalComponent = _react2['default'].createElement(
                    Component,
                    { id: target, style: style, className: 'react-layer', router: this.router },
                    _react2['default'].createElement(Route, _extends({ router: this.router }, params))
                );
            } else {
                finalComponent = _react2['default'].createElement(Route, _extends({ id: target, style: style, className: 'react-layer', router: this.router }, params));
            }
            _LayerEvents2['default'].emit(target, {
                route: finalComponent
            });
        }
    }, {
        key: 'close',
        value: function close() {
            var target = 'react-layer-' + this.currentIndex;
            _LayerEvents2['default'].emit(target, {
                route: null
            });
            this.currentIndex--;
            this.layerCount--;
        }
    }, {
        key: 'findHandlerByName',
        value: function findHandlerByName(route, name) {
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
    }, {
        key: 'getRouter',
        value: function getRouter() {
            return this.router;
        }
    }]);

    return LayerRouter;
})();

var layerRouter = new LayerRouter();

exports['default'] = layerRouter;
module.exports = exports['default'];