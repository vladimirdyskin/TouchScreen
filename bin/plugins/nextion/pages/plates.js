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

var Plates = function (_abstract) {
  _inherits(Plates, _abstract);

  function Plates(screenManager) {
    _classCallCheck(this, Plates);

    return _possibleConstructorReturn(this, (Plates.__proto__ || Object.getPrototypeOf(Plates)).call(this, screenManager));
  }

  _createClass(Plates, [{
    key: "init",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var _this2 = this;

        var gap;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.setScreen("plates");

              case 2:
                if (!(options && options.confirmResult)) {
                  _context.next = 6;
                  break;
                }

                if (!(options.confirmType === "deleteplate" && options.data0)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 6;
                return this.nanoDLP.command("/plate/delete/" + options.data0);

              case 6:
                _context.next = 8;
                return this.nanoDLP.getPlates();

              case 8:
                this.plates = _context.sent;


                this.addListener("click_b2", function (e) {
                  _this2.changePage("home");
                });

                this.addListener("click_b9", function (e) {
                  _this2.changePage("addPlate");
                });

                this.addListener("click_b4", function (e) {
                  if (_this2.currentIndex + 0 < _this2.plates.length) _this2.changePage("plate", _this2.plates[_this2.currentIndex]);
                });
                this.addListener("click_b5", function (e) {
                  if (_this2.currentIndex + 1 < _this2.plates.length) _this2.changePage("plate", _this2.plates[_this2.currentIndex + 1]);
                });
                this.addListener("click_b6", function (e) {
                  if (_this2.currentIndex + 2 < _this2.plates.length) _this2.changePage("plate", _this2.plates[_this2.currentIndex + 2]);
                });
                this.addListener("click_b7", function (e) {
                  if (_this2.currentIndex + 3 < _this2.plates.length) _this2.changePage("plate", _this2.plates[_this2.currentIndex + 3]);
                });
                this.addListener("click_b8", function (e) {
                  if (_this2.currentIndex + 4 < _this2.plates.length) _this2.changePage("plate", _this2.plates[_this2.currentIndex + 4]);
                });

                gap = 100 / (this.plates.length - 4);


                this.addListener("number", function (scroll) {
                  scroll = Math.floor((100 - scroll) / gap);
                  if (scroll <= _this2.plates.length - 5) _this2.updateList(scroll);
                });

                this.updateList(0);

              case 19:
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
    key: "updateList",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(index) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.currentIndex = index;
                this.setText("b4", index + 1 + ". " + this.plates[index].Path);
                this.setText("b5", index + 2 + ". " + this.plates[index + 1].Path);
                this.setText("b6", index + 3 + ". " + this.plates[index + 2].Path);
                this.setText("b7", index + 4 + ". " + this.plates[index + 3].Path);
                this.setText("b8", index + 5 + ". " + this.plates[index + 4].Path);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateList(_x2) {
        return _ref2.apply(this, arguments);
      }

      return updateList;
    }()
  }]);

  return Plates;
}(_abstract3.default);

exports.default = Plates;