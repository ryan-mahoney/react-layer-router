'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LayerEvents = require('./LayerEvents');

var _LayerEvents2 = _interopRequireDefault(_LayerEvents);

var LayerManager = (function () {
    function LayerManager() {
        _classCallCheck(this, LayerManager);

        this.layerCount = 0;
        this.currentIndex = 0;
        this.component = null;
    }

    _createClass(LayerManager, [{
        key: 'target',
        value: function target(index, Component, params, Wrapper) {
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
                        component: null,
                        style: {
                            zIndex: i * 100,
                            display: 'none'
                        }
                    });
                }
                this.layerCount = this.currentIndex;
            }

            var style = {
                zIndex: this.currentIndex * 100,
                display: 'block'
            };

            _LayerEvents2['default'].emit(target, {
                component: Component,
                wrapper: Wrapper,
                style: style,
                params: params
            });
        }
    }, {
        key: 'close',
        value: function close() {
            var target = 'react-layer-' + this.currentIndex;
            _LayerEvents2['default'].emit(target, {
                component: null,
                style: {
                    zIndex: this.currentIndex * 100,
                    display: 'none'
                }
            });
            this.currentIndex--;
            this.layerCount--;
        }
    }]);

    return LayerManager;
})();

var layerManager = new LayerManager();

exports['default'] = layerManager;
module.exports = exports['default'];