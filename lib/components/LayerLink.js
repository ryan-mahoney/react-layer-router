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

var _LayerRouter = require('../LayerRouter');

var _LayerRouter2 = _interopRequireDefault(_LayerRouter);

var LayerLink = (function (_React$Component) {
    function LayerLink() {
        _classCallCheck(this, LayerLink);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(LayerLink, _React$Component);

    _createClass(LayerLink, [{
        key: 'handleClick',
        value: function handleClick(event) {
            event.preventDefault();
            _LayerRouter2['default'].target(this.props.layer, this.props.to, this.props.params);
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            props.onClick = this.handleClick.bind(this);

            return _react2['default'].DOM.a(props, this.props.children);
        }
    }]);

    return LayerLink;
})(_react2['default'].Component);

;

exports['default'] = LayerLink;
module.exports = exports['default'];