"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstract2 = require("./abstract.js");

var _abstract3 = _interopRequireDefault(_abstract2);

var _requestPromiseNative = require("request-promise-native");

var _requestPromiseNative2 = _interopRequireDefault(_requestPromiseNative);

var zMove = 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require("babel-polyfill");

var ZAxis = function (_abstract) {
  _inherits(ZAxis, _abstract);

  function ZAxis(screenManager) {
    _classCallCheck(this, ZAxis);

    var _this = _possibleConstructorReturn(this, (ZAxis.__proto__ || Object.getPrototypeOf(ZAxis)).call(this, screenManager));

    _this.currentButton = 8;
    return _this;
  }

  _createClass(ZAxis, [{
    key: "init",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.setScreen("zAxis");

              case 2:
              _context.prev = 2;

              if (!(options && options.confirmResult && options.confirmResult)) {
                _context.next = 14;
                break;
              }

              _context.next = options.confirmType === "calibrovka" ? 7 : options.confirmType === "dodatchika" ? 11 : 14;
              break;

            case 7:
              console.log("calibrovka");
              var result = (0, _requestPromiseNative2.default)({
                       uri: global.SERVER_URL + "/gcode",
                       formData: {
                          'gcode': "$1=255\n$H\nG91\nG1X-12.7F300\nG4P0.1\n[[WaitForDoneMessage]]\nG1Z-199F300\nG4P0.1\n[[WaitForDoneMessage]]\nG90\nG92X0Y0Z0\n[[PositionSet 0]]"
                       },
                       method: 'POST'
                    });
              this.changePage("zAxis");
              return _context.abrupt("break", 14);

            case 11:
              console.log("dodatchika");

              var result = (0, _requestPromiseNative2.default)({
                       uri: global.SERVER_URL + "/gcode",
                       formData: {
                          'gcode': "$1=255\n$H\nG91\nG1Y0F300\nG4P0.1\n[[WaitForDoneMessage]]\nG1X-13.7F300"
                       },
                       method: 'POST'
                    });

              this.changePage("zAxis");
              return _context.abrupt("break", 14);

            case 14:
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t1 = _context["catch"](2);

              console.log("error", _context.t1);

            case 19:
                this.addListener("click_b1", function (e) {
                  _this2.changePage("home");
                });

                this.addListener("click_b6", function () {
                 //Vverh
                 console.log(this.zMove);
                 var result = (0, _requestPromiseNative2.default)({
                          uri: global.SERVER_URL + "/gcode",
                          formData: {
                             'gcode': "G91\n G1Z" + this.zMove + "F200\nG90\n"
                          },
                          method: 'POST'
                       });

                });

                this.addListener("click_b7", function (e) {
                  //Vniz
                  console.log(this.zMove);
                  var result = (0, _requestPromiseNative2.default)({
                           uri: global.SERVER_URL + "/gcode",
                           formData: {
                             'gcode': "G91\n G1Z-" + this.zMove + "F200\nG90\n"
                           },
                           method: 'POST'
                        });
                });

                this.addListener("click_b10", function (e) {
                  //TiltUp
                  //console.log("Vverh");
                  var result = (0, _requestPromiseNative2.default)({
                           uri: global.SERVER_URL + "/gcode",
                           formData: {
                              'gcode': "G90\n G1X-13.7F500"
                           },
                           method: 'POST'
                        });
                });

                this.addListener("click_b11", function (e) {
                  //TiltDown
                  //console.log("Vniz");
                  var result = (0, _requestPromiseNative2.default)({
                           uri: global.SERVER_URL + "/gcode",
                           formData: {
                              'gcode': "G90\n G1X-1F500"
                           },
                           method: 'POST'
                        });
                });

                this.addListener("click_b8", function (e) {
                  //DoDatchika

                  console.log("click_b8");
                     _this2.changePage("confirm", {
                       text: "Поднять платформу до датчика?\rВнимание!",
                       confirmType: "dodatchika",
                       returnPage: "zAxis"
                       });


                  // var result = (0, _requestPromiseNative2.default)({
                  //          uri: global.SERVER_URL + "/gcode",
                  //          formData: {
                  //             'gcode': "G38.3 Z200 F200;"
                  //          },
                  //          method: 'POST'
                  //       });
                });

                this.addListener("click_b9", function (e) {
                  //Calibrovka
                  _this2.changePage("confirm", {
                    text: "Выполнить калибровку?\rВНИМАНИЕ!\rоткрутите калибровочные болты",
                    confirmType: "calibrovka",
                    returnPage: "zAxis"
                    });

                  // var result = (0, _requestPromiseNative2.default)({
                  //          uri: global.SERVER_URL + "/gcode",
                  //          formData: {
                  //             'gcode': "G91\nG1 Z-15 F250\nG38.3 Z16 F100\nG1 Z-140 F400\nG1 Z-10 F100\nG28.1; Set Zero Axis Z\nG92 Z0;\nG90;"
                  //          },
                  //          method: 'POST'
                  //       });

                });


                this.addListener("click_b12", function () {
                  this.zMove = "0.1";
                  return this.setText("t7", "0.1");
                });
                this.addListener("click_b5", function () {
                  this.zMove = "1";
                  return this.setText("t7", "1");
                });
                this.addListener("click_b4", function () {
                  this.zMove = "10";
                  return this.setText("t7", "10");
                });
                this.addListener("click_b3", function () {
                  this.zMove = "100";
                  return this.setText("t7", "100");
                });

              case 18:
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
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(status) {
        var currentMm, total;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:

              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function update(_x4) {
        return _ref6.apply(this, arguments);
      }

      return update;
    }()
  }]);

  return ZAxis;
}(_abstract3.default);

exports.default = ZAxis;
