"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstract2 = require("./abstract.js");

var _abstract3 = _interopRequireDefault(_abstract2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require("babel-polyfill");

var Projector = function (_abstract) {
  _inherits(Projector, _abstract);

  function Projector(screenManager) {
    _classCallCheck(this, Projector);

    return _possibleConstructorReturn(this, (Projector.__proto__ || Object.getPrototypeOf(Projector)).call(this, screenManager));
  }

  _createClass(Projector, [{
    key: "init",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.setScreen("projector");

              case 2:

                this.addListener("click_b2", function (e) {
                  _this2.changePage("home");
                });

                this.addListener("click_b4", function () {
                  return _this2.nanoDLP.command("/shutter/open");
                });
                this.addListener("click_b8", function () {
                  return _this2.nanoDLP.command("/shutter/close");
                });

                this.addListener("click_b3", function () {
                  return _this2.nanoDLP.command("/button/press/1");
                });
                this.addListener("click_b9", function () {
                  return _this2.nanoDLP.command("/button/press/0");
                });

                this.addListener("click_b5", function () {
                  if (_this2.status.Projecting) _this2.nanoDLP.command("/projector/blank");else _this2.nanoDLP.command("/projector/generate/calibration");
                });

                this.addListener("click_b6", function () {
                  if (_this2.status.Projecting) _this2.nanoDLP.command("/projector/blank");else _this2.nanoDLP.command("/projector/generate/white");
                });

                this.addListener("click_b7", function () {
                  if (_this2.status.Projecting) _this2.nanoDLP.command("/projector/blank");else _this2.nanoDLP.command("/projector/generate/boundaries");
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init(_x) {
        return _ref.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "update",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(status) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.status = status;

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function update(_x2) {
        return _ref2.apply(this, arguments);
      }

      return update;
    }()
  }]);

  return Projector;
}(_abstract3.default);

exports.default = Projector;