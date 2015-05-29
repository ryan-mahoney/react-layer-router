'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var LayerRouter = (function () {
    function LayerRouter() {
        _classCallCheck(this, LayerRouter);

        this.layerCount = 0;
        this.currentIndex = 0;
        this.component = null;
        this.router = null;
        this.appRootId = null;
    }

    _createClass(LayerRouter, [{
        key: 'run',
        value: function run(appRootId, router, locationEmitter) {
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
    }, {
        key: 'target',
        value: function target(index, to, params) {
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
                layer.style.cssText = 'z-index:' + this.currentIndex * 100 + ';';
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
            _react2['default'].withContext({ 'router': this.router }, function () {
                _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById(target));
            });
        }
    }, {
        key: 'close',
        value: function close() {
            _react2['default'].unmountComponentAtNode(document.getElementById('react-layer-' + this.currentIndex));
            document.body.removeChild(document.getElementById('react-layer-' + this.currentIndex));
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
    }]);

    return LayerRouter;
})();

var layerRouter = new LayerRouter();

exports['default'] = layerRouter;
module.exports = exports['default'];