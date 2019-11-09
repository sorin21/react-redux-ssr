/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsers = exports.FETCH_USERS = undefined;

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'FETCH_USERS';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get('https://react-ssr-api.herokuapp.com/users');

            case 2:
              res = _context.sent;


              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(8);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(14);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// define some functions that babel needs to use 
// in the async await sytax from actions
var app = (0, _express2.default)();

// Tells to express to treat this public folder static, available outsite world
// so the bundle.js, from below, comes from here
app.use(_express2.default.static('public'));

// * allows all routes and express decides what to do
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)();

  // logic to initialize and load data into store
  res.send((0, _renderer2.default)(req, store));
});

app.listen(3000, function () {
  console.log("Listening on PORT 3000");
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _Routes = __webpack_require__(10);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// req, store come here from index.js from res.send(renderer(req, store));
exports.default = function (req, store, context) {
  // const content = renderToString(
  //   <Provider store={store}>
  //     <StaticRouter location={req.path} context={context}>
  //       <div>{renderRoutes(Routes)}</div>
  //     </StaticRouter>
  //   </Provider>
  // );

  // const helmet = Helmet.renderStatic();
  var content = (0, _server.renderToString)(
  // context is required for errors handling and redirects
  // path si for looking to diff routes and decide what to show on screen
  _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(_Routes2.default, null)
    )
  ));

  return '\n    <html>\n      <head>\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};
// import { renderRoutes } from 'react-router-config';
// import serialize from 'serialize-javascript';
// import { Helmet } from 'react-helmet';

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Home = __webpack_require__(11);

var _Home2 = _interopRequireDefault(_Home);

var _UsersList = __webpack_require__(12);

var _UsersList2 = _interopRequireDefault(_UsersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/users', component: _UsersList2.default })
  );
};

exports.default = Routes;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      null,
      "I am the Super Dooper Home component"
    ),
    _react2.default.createElement(
      "button",
      { onClick: function onClick() {
          return console.log("Hi there!");
        } },
      "Press Me"
    )
  );
};

exports.default = Home;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: SyntaxError: Missing class properties transform.\n\n\u001b[0m \u001b[90m  5 | \u001b[39m\n \u001b[90m  6 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mUsersList\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mComponent\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 | \u001b[39m  state \u001b[33m=\u001b[39m {\n \u001b[90m    | \u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m  8 | \u001b[39m    purchasing\u001b[33m:\u001b[39m \u001b[36mfalse\u001b[39m\n \u001b[90m  9 | \u001b[39m}\n \u001b[90m 10 | \u001b[39m  componentDidMount() {\u001b[0m\n");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _reduxThunk = __webpack_require__(15);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(16);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createMyStore = function createMyStore() {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
  return store;
};

exports.default = createMyStore;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(4);

var _usersReducer = __webpack_require__(17);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(3);

var usersReducer = function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      console.log('action.payload.data', action.payload.data);
      return action.payload.data;

    default:
      return state;
  }
};

exports.default = usersReducer;

/***/ })
/******/ ]);