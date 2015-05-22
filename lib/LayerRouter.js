'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var LayerRouter = (function () {
    function LayerRouter() {
        _classCallCheck(this, LayerRouter);

        this.layerCount = 0;
        this.currentIndex = 0;
    }

    _createClass(LayerRouter, [{
        key: 'run',
        value: function run(appRootId, routes) {
            var _this = this;

            _reactRouter2['default'].run(routes, function (Handler) {
                if (_this.currentIndex > _this.layerCount) {
                    var layer = document.createElement('div');
                    layer.style.cssText = 'position: fixed; width:100%; height:100%; z-index:' + _this.currentIndex * 100 + '; background:#fff;';
                    layer.id = 'react-layer-' + _this.currentIndex;
                    var previousLayer = appRootId;
                    if (_this.layerCount > 0) {
                        previousLayer = 'react-layer-' + _this.layerCount;
                    }
                    document.body.insertBefore(layer, document.getElementById(previousLayer));
                    _this.layerCount = _this.currentIndex;
                }
                var target = appRootId;
                if (_this.currentIndex > 0) {
                    target = 'react-layer-' + _this.currentIndex;
                }
                if (_this.currentIndex < _this.layerCount) {
                    var i;
                    var layerId;
                    for (i = _this.layerCount; i > _this.currentIndex; i--) {
                        layerId = 'react-layer-' + i;
                        document.body.removeChild(document.getElementById(layerId));
                    }
                    _this.layerCount = _this.currentIndex;
                }
                _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById(target));
            });
        }
    }, {
        key: 'target',
        value: function target(index) {
            if (index == 'new') {
                this.currentIndex = this.layerCount + 1;
            } else if (index == 'clear') {
                this.currentIndex = 0;
            } else {
                this.currentIndex = index;
            }
        }
    }, {
        key: 'close',
        value: function close() {
            document.body.removeChild(document.getElementById('react-layer-' + this.currentIndex));
            this.currentIndex--;
            this.layerCount--;
        }
    }]);

    return LayerRouter;
})();

var layerRouter = new LayerRouter();

exports['default'] = layerRouter;
module.exports = exports['default'];