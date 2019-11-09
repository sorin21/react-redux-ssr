exports.id = 0;
exports.modules = {

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(53);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(111);

var _Home = __webpack_require__(122);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString; 
// const Home = require('./client/components/Home').default;

var app = (0, _express2.default)();

// Tells to express to treat this public folder static, available outsite world
app.use(_express2.default.static('public'));
app.get('/', function (req, res) {
  var content = (0, _server.renderToString)(_react2.default.createElement(_Home2.default, null));
  var html = '\n    <html>\n      <head>\n        <body>\n          <div>' + content + '</div>\n        </body>\n      </head>\n    </html>\n  ';

  res.send(content);
});

app.listen(3000, function () {
  console.log("Listening on PORT 3000");
});

/***/ })

};