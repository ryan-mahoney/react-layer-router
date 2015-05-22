'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _LayerRouter = require('../LayerRouter');

var _LayerRouter2 = _interopRequireDefault(_LayerRouter);

function layerLink(Component) {
    var LayerLink = _react2['default'].createClass({
        displayName: 'LayerLink',

        render: function render() {
            var customClick = function customClick(e) {
                var el = e.target;
                if (el.hasAttribute('data-layer')) {
                    _LayerRouter2['default'].target(el.getAttribute('data-layer'));
                }
            };

            return _react2['default'].createElement(Component, _extends({}, this.props, { onClick: customClick }));
        }
    });
    return LayerLink;
};

var LayerLink = layerLink(_reactRouter.Link);

exports['default'] = LayerLink;
module.exports = exports['default'];