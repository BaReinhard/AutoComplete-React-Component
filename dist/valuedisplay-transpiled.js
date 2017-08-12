'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true,
});

var _extends =
	Object.assign ||
	function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	};

exports.default = ValueDisplay;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./valuedisplay.css');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function ValueDisplay(props) {
	if (props.displayValues) {
		var style = _extends(
			{
				position: 'absolute',
				zIndex: '600',
				height: '300px',
				width: '400px',
				overflow: 'scroll',
				color: 'black',
				backgroundColor: 'white',
				borderBottomLeftRadius: '10px',
				borderBottomRightRadius: '10px',
			},
			props.dropdownStyle,
		);
		var valuesDisplay = _extends(
			{
				padding: '4px',
				boxSizing: 'border-box',
				listStyle: 'none',
			},
			props.valuesStyle,
		);

		return _react2.default.createElement(
			'div',
			{ name: 'valuedisplay', className: 'valuedisplay-container', style: style },
			props.displayedValues.map(function(value, i) {
				return _react2.default.createElement(
					'li',
					{
						className: 'valuedisplay-item',
						style: valuesDisplay,
						onClick: props.onClick,
						name: value,
						key: value + i,
					},
					value,
				);
			}),
		);
	} else {
		return _react2.default.createElement('div', null);
	}
}
ValueDisplay.propTypes = {
	dropdownStyle: _propTypes2.default.object,
	displayValues: _propTypes2.default.bool.isRequired,
	displayedValues: _propTypes2.default.array.isRequired,
	valuesStyle: _propTypes2.default.object,
	onClick: _propTypes2.default.func.isRequired,
};
