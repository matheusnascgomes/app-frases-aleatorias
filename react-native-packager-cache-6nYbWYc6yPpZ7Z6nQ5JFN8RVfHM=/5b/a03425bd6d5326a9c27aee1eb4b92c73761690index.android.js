Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/matheus/Documentos/Cursos/Udemy/React/app2/index.android.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var app2 = function (_Component) {
  babelHelpers.inherits(app2, _Component);

  function app2() {
    babelHelpers.classCallCheck(this, app2);
    return babelHelpers.possibleConstructorReturn(this, (app2.__proto__ || Object.getPrototypeOf(app2)).apply(this, arguments));
  }

  babelHelpers.createClass(app2, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.welcome, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          'Welcome to React Native!'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.instructions, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          'To get started, edit index.android.js'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.instructions, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          'Double tap R on your keyboard to reload,',
          '\n',
          'Shake or press menu button for dev menu'
        )
      );
    }
  }]);
  return app2;
}(_react.Component);

exports.default = app2;


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

_reactNative.AppRegistry.registerComponent('app2', function () {
  return app2;
});