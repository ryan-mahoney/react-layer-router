'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layer = require('./Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var RouterLayerHandler = (function (_React$Component) {
    function RouterLayerHandler() {
        _classCallCheck(this, RouterLayerHandler);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(RouterLayerHandler, _React$Component);

    _createClass(RouterLayerHandler, [{
        key: 'render',
        value: function render() {
            var layers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (layer) {
                var layerStyle = {
                    display: 'none'
                };
                layerStyle.zIndex = layer * 100;
                var key = 'react-layer-' + layer;
                return _react2['default'].createElement(_Layer2['default'], {
                    key: key,
                    offset: layer,
                    style: layerStyle
                });
            });

            return _react2['default'].createElement(
                'div',
                { id: 'react-layer-container' },
                layers
            );
        }
    }]);

    return RouterLayerHandler;
})(_react2['default'].Component);

;

exports['default'] = RouterLayerHandler;
module.exports = exports['default'];