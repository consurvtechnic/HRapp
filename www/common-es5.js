(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "+PL+":
    /*!*****************************************************!*\
      !*** ./src/app/components/start/start.component.ts ***!
      \*****************************************************/

    /*! exports provided: StartComponent */

    /***/
    function PL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
        return StartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_start_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./start.component.html */
      "kPKb");
      /* harmony import */


      var _start_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./start.component.scss */
      "MNc6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var StartComponent = /*#__PURE__*/function () {
        function StartComponent(router) {
          _classCallCheck(this, StartComponent);

          this.router = router;
        }

        _createClass(StartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateToLoginPage",
          value: function navigateToLoginPage() {
            this.router.navigate(['login']);
          }
        }]);

        return StartComponent;
      }();

      StartComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      StartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-start',
        template: _raw_loader_start_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_start_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StartComponent);
      /***/
    },

    /***/
    "1HE4":
    /*!*****************************************************!*\
      !*** ./src/app/approve-modal/approve-modal.page.ts ***!
      \*****************************************************/

    /*! exports provided: ApproveModalPage */

    /***/
    function HE4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApproveModalPage", function () {
        return ApproveModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_approve_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./approve-modal.page.html */
      "lTO4");
      /* harmony import */


      var _approve_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./approve-modal.page.scss */
      "9JMh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/storage.service */
      "n90K");

      var ApproveModalPage = /*#__PURE__*/function () {
        function ApproveModalPage(modal, storage) {
          _classCallCheck(this, ApproveModalPage);

          this.modal = modal;
          this.storage = storage;
        }

        _createClass(ApproveModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.userData = this.storage.modalData;
            console.log(this.userData);
          }
        }, {
          key: "close",
          value: function close() {
            this.modal.dismiss();
          }
        }, {
          key: "getHalfDate",
          value: function getHalfDate() {
            if (this.userData.datehalf == "0000-00-00") {
              return '';
            } else {
              return this.userData.datehalf;
            }
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            if (date == "0000-00-00") {
              return '';
            } else {
              return date;
            }
          }
        }]);

        return ApproveModalPage;
      }();

      ApproveModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      ApproveModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-approve-modal',
        template: _raw_loader_approve_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_approve_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ApproveModalPage);
      /***/
    },

    /***/
    "2g2N":
    /*!*******************************************!*\
      !*** ./src/app/services/toast.service.ts ***!
      \*******************************************/

    /*! exports provided: ToastService */

    /***/
    function g2N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(toastController) {
          _classCallCheck(this, ToastService);

          this.toastController = toastController;
        }

        _createClass(ToastService, [{
          key: "presentToast",
          value: function presentToast(infoMessage) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: infoMessage,
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
      /***/
    },

    /***/
    "5DpU":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function DpU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-list>\r\n    <ion-item (click)=\"navigateToProfilePage()\">\r\n      My Profile\r\n    </ion-item>\r\n    <ion-item (click)=\"goToHistory()\" >\r\n      History\r\n    </ion-item>\r\n    <ion-item (click)=\"signOut()\">\r\n      Logout\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>";
      /***/
    },

    /***/
    "5Fp5":
    /*!*****************************************!*\
      !*** ./src/app/config/auth-constant.ts ***!
      \*****************************************/

    /*! exports provided: AuthConstants */

    /***/
    function Fp5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthConstants", function () {
        return AuthConstants;
      });

      var AuthConstants = /*#__PURE__*/_createClass(function AuthConstants() {
        _classCallCheck(this, AuthConstants);
      });

      AuthConstants.AUTH = 'userData';
      /***/
    },

    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, ev, direction, animation) {
          var router;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "8+mF":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function mF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide>\r\n      <app-logo></app-logo>\r\n      <h2>Welcome to DynaConsurv HRApp</h2>\r\n      <p>Explore Us</p>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"displayed\">\r\n      <img src=\"assets/images/dynaxconsurv.png\"/>\r\n      </div>\r\n      <h2></h2>\r\n      <p></p>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <h2>We are</h2>\r\n      <p>Dyna Consurv</p>\r\n    </ion-slide>\r\n\r\n    \r\n";
      /***/
    },

    /***/
    "9JMh":
    /*!*******************************************************!*\
      !*** ./src/app/approve-modal/approve-modal.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function JMh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcHJvdmUtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWE7RUFDYixjQUFjO0FBQ2xCIiwiZmlsZSI6ImFwcHJvdmUtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICMyQzlEREU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "AWzS":
    /*!***********************************************!*\
      !*** ./src/app/resolver/userData.resolver.ts ***!
      \***********************************************/

    /*! exports provided: UserDataResolver */

    /***/
    function AWzS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDataResolver", function () {
        return UserDataResolver;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");

      var UserDataResolver = /*#__PURE__*/function () {
        function UserDataResolver(authService) {
          _classCallCheck(this, UserDataResolver);

          this.authService = authService;
        }

        _createClass(UserDataResolver, [{
          key: "resolve",
          value: function resolve() {
            console.log('Hello');
            return this.authService.getUserData();
          }
        }]);

        return UserDataResolver;
      }();

      UserDataResolver.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      UserDataResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserDataResolver);
      /***/
    },

    /***/
    "DaWH":
    /*!***************************************************!*\
      !*** ./src/app/leave-modal/leave-modal.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function DaWH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxlYXZlLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFhO0VBQ2IsY0FBYztBQUNsQiIsImZpbGUiOiJsZWF2ZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogIzJDOURERTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "Dm/a":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leave-modal/leave-modal.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function DmA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color='light'>\r\n    <ion-title>Leave Approval</ion-title>\r\n    <ion-buttons slot='end'>\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name='close'></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n    Type:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label text-wrap>\r\n    {{userData.leavetype}}\r\n  </ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n    Reason:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label text-wrap>\r\n    {{userData.reason}}\r\n  </ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n      Staff Name:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label>\r\n    {{userData.staff_name}}\r\n  </ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n      Leave Day:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label>\r\n    {{userData.leaveday}}\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<!-- *ngIf=\"userData.datehalf=='0000-00-00'\" -->\r\n\r\n<ion-grid>\r\n<ion-row class='ion-text-center'>\r\n  <ion-col>\r\n    <strong>\r\n      Date From:<br>\r\n    </strong>\r\n      {{ getDate(userData.datefrom) }}\r\n  </ion-col>\r\n  <ion-col>\r\n      <strong>\r\n        Date End:<br>\r\n      </strong>\r\n      {{ getDate(userData.dateend) }}\r\n  </ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n        {{ getHalfDate(userData.datehalf) }}\r\n    </ion-col>\r\n    </ion-row>\r\n</ion-grid>\r\n\r\n<div *ngIf=\"userData.datehalf!='0000-00-00'\">\r\n<ion-item>\r\n  <ion-row>\r\n  <ion-col>\r\n      {{userData.datehalf}}\r\n  </ion-col>\r\n  </ion-row>\r\n</ion-item>\r\n</div>\r\n\r\n<ion-row>\r\n<ion-col>\r\n  <ion-button expand='full' color='danger' (click)=\"rejectLeave()\">\r\n    Reject\r\n  </ion-button>\r\n</ion-col>\r\n<ion-col>\r\n  <ion-button expand='full' color='primary' (click)=\"approveLeave()\">\r\n    Approve\r\n  </ion-button>\r\n</ion-col>\r\n</ion-row>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "EiNB":
    /*!*******************************************************!*\
      !*** ./src/app/components/slides/slides.component.ts ***!
      \*******************************************************/

    /*! exports provided: SlidesComponent */

    /***/
    function EiNB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidesComponent", function () {
        return SlidesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_slides_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./slides.component.html */
      "8+mF");
      /* harmony import */


      var _slides_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./slides.component.scss */
      "Lslk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SlidesComponent = /*#__PURE__*/_createClass(function SlidesComponent() {
        _classCallCheck(this, SlidesComponent);

        this.slideOpts = {
          speed: 400
        };
      });

      SlidesComponent.ctorParameters = function () {
        return [];
      };

      SlidesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slides',
        template: _raw_loader_slides_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slides_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SlidesComponent);
      /***/
    },

    /***/
    "Lslk":
    /*!*********************************************************!*\
      !*** ./src/app/components/slides/slides.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function Lslk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slide {\n  padding: 140px 20px 140px 20px;\n  display: block;\n}\n\nion-slide img {\n  width: 100px;\n}\n\nion-slide h2 {\n  font-size: 27px;\n  font-weight: bold;\n}\n\n.displayed img {\n  width: 300px;\n  height: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBOEI7RUFDOUIsY0FBYztBQUNsQjs7QUFIQTtFQUlJLFlBQVk7QUFHaEI7O0FBUEE7RUFPSSxlQUFlO0VBQ2YsaUJBQWlCO0FBSXJCOztBQUNJO0VBQ0ksWUFBWTtFQUNaLFlBQVk7QUFFcEIiLCJmaWxlIjoic2xpZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlIHtcclxuICAgIHBhZGRpbmc6IDE0MHB4IDIwcHggMTQwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLmRpc3BsYXllZCBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBcclxuICBcclxuIl19 */";
      /***/
    },

    /***/
    "MNc6":
    /*!*******************************************************!*\
      !*** ./src/app/components/start/start.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function MNc6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".button-container {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InN0YXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59Il19 */";
      /***/
    },

    /***/
    "N+K7":
    /*!******************************************!*\
      !*** ./src/app/services/http.service.ts ***!
      \******************************************/

    /*! exports provided: HttpService */

    /***/
    function NK7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
        }

        _createClass(HttpService, [{
          key: "post",
          value: function post(serviceName, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers,
              withCredentials: false,
              contentType: 'application/json'
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl1 + serviceName;
            console.log(url, JSON.stringify(data), options, 'call');
            return this.http.post(url, JSON.stringify(data), options);
          }
        }, {
          key: "post1",
          value: function post1(serviceName, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers,
              withCredentials: false,
              contentType: 'application/json'
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl3 + serviceName;
            console.log(url, JSON.stringify(data), options, 'call');
            return this.http.post(url, JSON.stringify(data), options);
          }
        }, {
          key: "post2",
          value: function post2(serviceName, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers,
              withCredentials: false,
              contentType: 'application/json'
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl2; //console.log(url,JSON.stringify(data),options,'call')

            return this.http.post(url, JSON.stringify(data), options);
          }
        }, {
          key: "get",
          value: function get(url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              _this.http.get(url).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }]);

        return HttpService;
      }();

      HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], HttpService);
      /***/
    },

    /***/
    "Rx4N":
    /*!*************************************************!*\
      !*** ./src/app/leave-modal/leave-modal.page.ts ***!
      \*************************************************/

    /*! exports provided: LeaveModalPage */

    /***/
    function Rx4N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaveModalPage", function () {
        return LeaveModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leave_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leave-modal.page.html */
      "Dm/a");
      /* harmony import */


      var _leave_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leave-modal.page.scss */
      "DaWH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/http.service */
      "N+K7");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/storage.service */
      "n90K");

      var LeaveModalPage = /*#__PURE__*/function () {
        function LeaveModalPage(modal, storage, authService, httpService) {
          _classCallCheck(this, LeaveModalPage);

          this.modal = modal;
          this.storage = storage;
          this.authService = authService;
          this.httpService = httpService;
          this.userData = {};
        }

        _createClass(LeaveModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.userData = this.storage.modalData;
            console.log(this.userData);
          }
        }, {
          key: "close",
          value: function close() {
            this.modal.dismiss();
          }
        }, {
          key: "getHalfDate",
          value: function getHalfDate() {
            if (this.userData.datehalf == "0000-00-00") {
              return '';
            } else {
              return this.userData.datehalf;
            }
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            if (date == "0000-00-00") {
              return '';
            } else {
              return date;
            }
          }
        }, {
          key: "rejectLeave",
          value: function rejectLeave() {
            var _this2 = this;

            //NOTE: Change action to reflect reject action
            this.httpService.post('leave/updateapprove', {
              leaveid: this.userData.leavedetailid,
              action: 1
            }).subscribe(function (res) {
              console.log(res);

              _this2.close();
            });
          }
        }, {
          key: "approveLeave",
          value: function approveLeave() {
            var _this3 = this;

            this.httpService.post('leave/updateapprove', {
              leaveid: this.userData.leavedetailid,
              action: 1
            }).subscribe(function (res) {
              console.log(res);

              _this3.close();
            });
          }
        }]);

        return LeaveModalPage;
      }();

      LeaveModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
        }];
      };

      LeaveModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leave-modal',
        template: _raw_loader_leave_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leave_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LeaveModalPage);
      /***/
    },

    /***/
    "Ys3K":
    /*!***********************************************************************!*\
      !*** ./src/app/components/shrink-header/shrink-header.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function Ys3K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaHJpbmstaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "ZONN":
    /*!************************************************!*\
      !*** ./src/app/setting/setting.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function ZONN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "Zcj0":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function Zcj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      "KF81");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "gnXD":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function gnXD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<img src='assets/images/hr.png' alt=\"HRApp log\"/>";
      /***/
    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _slides_slides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./slides/slides.component */
      "EiNB");
      /* harmony import */


      var _start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./start/start.component */
      "+PL+");
      /* harmony import */


      var _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./logo/logo.component */
      "o5g6");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shrink_header_shrink_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shrink-header/shrink-header.component */
      "jvs9");

      var ComponentsModule = /*#__PURE__*/_createClass(function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      });

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _shrink_header_shrink_header_component__WEBPACK_IMPORTED_MODULE_7__["ShrinkHeaderComponent"]],
        exports: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _shrink_header_shrink_header_component__WEBPACK_IMPORTED_MODULE_7__["ShrinkHeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "jvs9":
    /*!*********************************************************************!*\
      !*** ./src/app/components/shrink-header/shrink-header.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ShrinkHeaderComponent */

    /***/
    function jvs9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShrinkHeaderComponent", function () {
        return ShrinkHeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_shrink_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./shrink-header.component.html */
      "rkMx");
      /* harmony import */


      var _shrink_header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shrink-header.component.scss */
      "Ys3K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ShrinkHeaderComponent = /*#__PURE__*/function () {
        function ShrinkHeaderComponent(element, renderer, domCtrl) {
          _classCallCheck(this, ShrinkHeaderComponent);

          this.element = element;
          this.renderer = renderer;
          this.domCtrl = domCtrl;
        }

        _createClass(ShrinkHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            this.renderer.setStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
            this.scrollSub = this.scrollArea.ionScroll.subscribe(function (event) {
              console.log(event.detail.scrollTop);

              _this4.resizeHeader(event);
            });
          }
        }, {
          key: "resizeHeader",
          value: function resizeHeader(event) {
            var _this5 = this;

            this.domCtrl.write(function () {
              _this5.newHeaderHeight = _this5.headerHeight - event.detail.scrollTop;
              if (_this5.newHeaderHeight < 0) _this5.newHeaderHeight = 0;

              _this5.renderer.setStyle(_this5.element.nativeElement, 'height', _this5.newHeaderHeight + 'px');
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.scrollSub) this.scrollSub.unsubscribe();
          }
        }]);

        return ShrinkHeaderComponent;
      }();

      ShrinkHeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["DomController"]
        }];
      };

      ShrinkHeaderComponent.propDecorators = {
        scrollArea: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['scrollArea']
        }],
        headerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['headerHeight']
        }]
      };
      ShrinkHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shrink-header',
        template: _raw_loader_shrink_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shrink_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ShrinkHeaderComponent);
      /***/
    },

    /***/
    "kPKb":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function kPKb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"button-container\">\r\n    <ion-button expand=\"block\" share=\"round\" color='primary' (click)=\"navigateToLoginPage()\">Start!</ion-button>\r\n</div>";
      /***/
    },

    /***/
    "l7Ag":
    /*!**********************************************!*\
      !*** ./src/app/setting/setting.component.ts ***!
      \**********************************************/

    /*! exports provided: SettingComponent */

    /***/
    function l7Ag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingComponent", function () {
        return SettingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_setting_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./setting.component.html */
      "5DpU");
      /* harmony import */


      var _setting_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./setting.component.scss */
      "ZONN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SettingComponent = /*#__PURE__*/function () {
        function SettingComponent(authService, router, nav, popoverController) {
          _classCallCheck(this, SettingComponent);

          this.authService = authService;
          this.router = router;
          this.nav = nav;
          this.popoverController = popoverController;
          this.postData = {
            staff_id: '',
            action: 0,
            staff_name: '',
            checkin: '',
            checkout: '',
            id: ''
          };
        }

        _createClass(SettingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.siteInfo = this.navParams.get('site');
            console.log(this.site);
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.authService.logout();

                    case 2:
                      this.popoverController.dismiss();

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "eventFromPopover",
          value: function eventFromPopover() {
            this.popoverController.dismiss('edupala.com');
          }
        }, {
          key: "navigateToProfilePage",
          value: function navigateToProfilePage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.router.navigate(['profile']);

                    case 2:
                      console.log('button is clicked');
                      this.popoverController.dismiss();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "goToHistory",
          value: function goToHistory() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.router.navigate(['history']);

                    case 2:
                      console.log('goHistory');
                      this.popoverController.dismiss();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return SettingComponent;
      }();

      SettingComponent.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }];
      };

      SettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-setting',
        template: _raw_loader_setting_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_setting_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SettingComponent);
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _config_auth_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../config/auth-constant */
      "5Fp5");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./http.service */
      "N+K7");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./storage.service */
      "n90K");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(httpService, storageService, router) {
          _classCallCheck(this, AuthService);

          this.httpService = httpService;
          this.storageService = storageService;
          this.router = router;
          this.userData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        }

        _createClass(AuthService, [{
          key: "getUserData",
          value: function getUserData() {
            var _this6 = this;

            this.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].AUTH).then(function (res) {
              console.log(res);

              _this6.userData$.next(res[0]);
            });
          }
        }, {
          key: "getUserDataPromise",
          value: function getUserDataPromise() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].AUTH).then(function (res) {
                console.log(res);
                resolve(res[0]);
              }, function (_) {
                reject(null);
              });
            });
          }
        }, {
          key: "login",
          value: function login(postData) {
            return this.httpService.post1('login', postData); // return this.httpService.post('logintest', postData);
          } //logout(postData: Observable<any>){
          //logout(postData: any): void {

        }, {
          key: "logout",
          value: function logout() {
            var _this8 = this;

            this.storageService.removeItem(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].AUTH).then(function (res) {
              _this8.userData$.next('');

              _this8.router.navigate(['']);
            });
          }
        }, {
          key: "applyleave",
          value: function applyleave(postData) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              _this9.httpService.post1('app/submitleave', postData).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "leavedetail",
          value: function leavedetail(postData) {
            return this.httpService.post('leavedetail', postData);
          }
        }, {
          key: "leavedetailPromise",
          value: function leavedetailPromise(postData) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              // console.log(postData);
              _this10.httpService.post('leavedetail', postData).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "leaveapprove",
          value: function leaveapprove(postData) {
            return this.httpService.post('updateapprove', postData);
          }
        }, {
          key: "typeofleave",
          value: function typeofleave(postData) {
            return this.httpService.post('leavetype', postData);
          } // leavebalance(postData: any): Observable<any> {
          //   console.log(postData);
          //   return this.httpService.post1('leavesummary/', postData);
          //   } 

        }, {
          key: "leavebalance",
          value: function leavebalance(postData) {
            return this.httpService.post1('leavesummary/', postData);
          }
        }, {
          key: "leavebalancePromise",
          value: function leavebalancePromise(postData) {
            var _this11 = this;

            return new Promise(function (resolve, reject) {
              // console.log(postData);
              _this11.httpService.post1('leavesummary/', postData).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "checkIn",
          value: function checkIn(postData) {
            console.log(postData);
            return this.httpService.post2('dailycheck', postData);
          }
        }, {
          key: "checkOut",
          value: function checkOut(postData) {
            console.log(postData);
            return this.httpService.post2('dailycheck', postData);
          }
        }, {
          key: "listName",
          value: function listName(postData) {
            console.log(postData);
            return this.httpService.post2('dailycheck', postData);
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "lTO4":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/approve-modal/approve-modal.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function lTO4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color='light'>\r\n    <ion-title>Leave Approval</ion-title>\r\n    <ion-buttons slot='end'>\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name='close'></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label>\r\n      <strong>\r\n      Type:\r\n      </strong>\r\n    </ion-label>\r\n    <ion-label text-wrap>\r\n      {{userData.leavetype}}\r\n    </ion-label>\r\n  </ion-item>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n    Reason:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label text-wrap>\r\n    {{userData.reason}}\r\n  </ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n      Staff Name:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label>\r\n    {{userData.staff_name}}\r\n  </ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n      Leave Day:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label>\r\n    {{userData.leaveday}}\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<!-- *ngIf=\"userData.datehalf=='0000-00-00'\" -->\r\n<ion-grid>\r\n<ion-row class='ion-text-center'>\r\n  <ion-col>\r\n    <strong>\r\n      Date From:<br>\r\n    </strong>\r\n      {{ getDate(userData.datefrom) }}\r\n  </ion-col>\r\n  <ion-col>\r\n      <strong>\r\n        Date End:<br>\r\n      </strong>\r\n      {{ getDate(userData.dateend) }}\r\n  </ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n        {{ getHalfDate(userData.datehalf) }}\r\n    </ion-col>\r\n    </ion-row>\r\n</ion-grid>\r\n\r\n<div *ngIf=\"userData.datehalf!='0000-00-00'\">\r\n<ion-item>\r\n  <ion-row>\r\n  <ion-col>\r\n      {{userData.datehalf}}\r\n  </ion-col>\r\n  </ion-row>\r\n</ion-item>\r\n</div>\r\n\r\n<!-- <ion-row>\r\n<ion-col>\r\n  <ion-button expand='full' color='danger'>\r\n    Reject\r\n  </ion-button>\r\n</ion-col>\r\n<ion-col>\r\n  <ion-button expand='full' color='primary'>\r\n    Approve\r\n  </ion-button>\r\n</ion-col>\r\n</ion-row> -->\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "o5g6":
    /*!***************************************************!*\
      !*** ./src/app/components/logo/logo.component.ts ***!
      \***************************************************/

    /*! exports provided: LogoComponent */

    /***/
    function o5g6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
        return LogoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_logo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./logo.component.html */
      "gnXD");
      /* harmony import */


      var _logo_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logo.component.scss */
      "yrnK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LogoComponent = /*#__PURE__*/function () {
        function LogoComponent() {
          _classCallCheck(this, LogoComponent);
        }

        _createClass(LogoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LogoComponent;
      }();

      LogoComponent.ctorParameters = function () {
        return [];
      };

      LogoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logo',
        template: _raw_loader_logo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logo_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LogoComponent);
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "rkMx":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shrink-header/shrink-header.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rkMx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-content></ng-content>";
      /***/
    },

    /***/
    "spDm":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function spDm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-1457892a.js */
      "W6o/");

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(delegate, container, component, cssClasses, componentProps) {
          var el;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!delegate) {
                    _context6.next = 2;
                    break;
                  }

                  return _context6.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context6.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context6.next = 10;
                  return new Promise(function (resolve) {
                    return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                  });

                case 10:
                  return _context6.abrupt("return", el);

                case 11:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "yrnK":
    /*!*****************************************************!*\
      !*** ./src/app/components/logo/logo.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function yrnK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map