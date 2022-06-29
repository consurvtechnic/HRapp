(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-hradmin-home-hradmin-module"], {
    /***/
    "4bGK":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-hradmin/home-hradmin.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function bGK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-menu side=\"start\" content-id=\"main-content\">\r\n  \r\n  <!-- <ion-header>\r\n    <ion-toolbar translucent>\r\n      <ion-title>Menu</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header> -->\r\n  \r\n  <ion-content>\r\n    <div class=\"menu-header-bg\"></div>\r\n    <div class=\"header-content\">\r\n      <img src=\"assets/images/user.png\" alt=\"\">\r\n      <ion-label>\r\n        <h2>Ms. Farahin</h2>\r\n        <p>HR Manager (admin) </p>\r\n      </ion-label>\r\n    </div>\r\n\r\n    <!-- Add new staff -->\r\n    <div class=\"action-button\">\r\n      <ion-button (click)=\"navigateToAddStaff()\">\r\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon> Add Staff\r\n      </ion-button>\r\n    </div>\r\n\r\n    <!-- Home button -->\r\n    <ion-list class=\"menu-items\" lines=\"none\">\r\n      <ion-item (click)=\"navigateToDashboard()\">\r\n        <ion-icon name=\"home-outline\" ></ion-icon>\r\n        <ion-label>Home</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"active\" (click)=\"navigateToStaff()\">\r\n        <ion-icon name=\"person-outline\" ></ion-icon>\r\n        <ion-label>Staff</ion-label>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigateToLeaveRules()\">\r\n        <ion-icon name=\"bag-check-outline\" ></ion-icon>\r\n        <ion-label>Leave Rules</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon name=\"calendar-clear-outline\" ></ion-icon>\r\n        <ion-label>Leave Balance</ion-label>\r\n      </ion-item>\r\n      <ion-item (click)=\"signOut()\">\r\n        <ion-icon name=\"exit-outline\" ></ion-icon>\r\n        <ion-label>Log out</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<div class=\"ion-page\" id=\"main-content\">\r\n\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Dashboard</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"ion-padding\">\r\n    <ion-button expand=\"block\" onclick=\"openMenu()\">Open Menu</ion-button>\r\n  </ion-content>\r\n</div>\r\n";
      /***/
    },

    /***/
    "5ZJT":
    /*!*************************************************************!*\
      !*** ./src/app/home-hradmin/home-hradmin-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: HomeHRadminPageRoutingModule */

    /***/
    function ZJT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeHRadminPageRoutingModule", function () {
        return HomeHRadminPageRoutingModule;
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


      var _home_hradmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home-hradmin.page */
      "TC1P");

      var routes = [{
        path: '',
        component: _home_hradmin_page__WEBPACK_IMPORTED_MODULE_3__["HomeHRadminPage"]
      }];

      var HomeHRadminPageRoutingModule = /*#__PURE__*/_createClass(function HomeHRadminPageRoutingModule() {
        _classCallCheck(this, HomeHRadminPageRoutingModule);
      });

      HomeHRadminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomeHRadminPageRoutingModule);
      /***/
    },

    /***/
    "EUcd":
    /*!*****************************************************!*\
      !*** ./src/app/home-hradmin/home-hradmin.module.ts ***!
      \*****************************************************/

    /*! exports provided: HomeHRadminPageModule */

    /***/
    function EUcd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeHRadminPageModule", function () {
        return HomeHRadminPageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _home_hradmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-hradmin-routing.module */
      "5ZJT");
      /* harmony import */


      var _home_hradmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-hradmin.page */
      "TC1P");
      /* harmony import */


      var _home_hradmin_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home-hradmin.router */
      "sNJq");

      var HomeHRadminPageModule = /*#__PURE__*/_createClass(function HomeHRadminPageModule() {
        _classCallCheck(this, HomeHRadminPageModule);
      });

      HomeHRadminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_hradmin_router__WEBPACK_IMPORTED_MODULE_7__["HomeAdminRouter"], _home_hradmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeHRadminPageRoutingModule"]],
        declarations: [_home_hradmin_page__WEBPACK_IMPORTED_MODULE_6__["HomeHRadminPage"]]
      })], HomeHRadminPageModule);
      /***/
    },

    /***/
    "TC1P":
    /*!***************************************************!*\
      !*** ./src/app/home-hradmin/home-hradmin.page.ts ***!
      \***************************************************/

    /*! exports provided: HomeHRadminPage */

    /***/
    function TC1P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeHRadminPage", function () {
        return HomeHRadminPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_hradmin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home-hradmin.page.html */
      "4bGK");
      /* harmony import */


      var _home_hradmin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-hradmin.page.scss */
      "jQjD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var HomeHRadminPage = /*#__PURE__*/function () {
        function HomeHRadminPage(authService, router, popoverController) {
          _classCallCheck(this, HomeHRadminPage);

          this.authService = authService;
          this.router = router;
          this.popoverController = popoverController;
          this.postData = {
            staff_id: '',
            staff_name: '',
            password: '',
            status: ''
          };
        }

        _createClass(HomeHRadminPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateToDashboard",
          value: function navigateToDashboard() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.router.navigate(['./mukadepan-admin']);

                    case 2:
                      console.log('home button is clicked');

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "navigateToStaff",
          value: function navigateToStaff() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.router.navigate(['./staff']);

                    case 2:
                      console.log('button is clicked');

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "navigateToAddStaff",
          value: function navigateToAddStaff() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      //await this.router.navigate(['./signup']);
                      console.log('add staff button is clicked');

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "navigateToLeaveRules",
          value: function navigateToLeaveRules() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.router.navigate(['./leaverules']);

                    case 2:
                      console.log('button is clicked');

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.authService.logout();

                    case 2:
                      this.popoverController.dismiss();

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return HomeHRadminPage;
      }();

      HomeHRadminPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }];
      };

      HomeHRadminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-hradmin',
        template: _raw_loader_home_hradmin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_hradmin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeHRadminPage);
      /***/
    },

    /***/
    "jQjD":
    /*!*****************************************************!*\
      !*** ./src/app/home-hradmin/home-hradmin.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function jQjD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-family: lato;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #7590d6;\n  background: linear-gradient(90deg, #7590d6 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50px;\n  border: 7px solid #5e7ccc;\n  margin-right: 14px;\n}\n\n.header-content h2 {\n  font-weight: 300px;\n  color: #fff;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.action-button ion-button {\n  text-transform: capitalize;\n  font-weight: 300;\n  --background: #628cff;\n  --border-radius: 7px;\n  --box-shadow: none;\n}\n\n.action-button ion-icon {\n  margin-right: 1px;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-icon {\n  margin-right: 20px;\n  color: #86979f;\n}\n\n.menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\n.menu-items .active {\n  border-left: 5px solid;\n  color: #628cff;\n  padding-left: 15px;\n}\n\n.menu-items .active ion-icon {\n  color: #628cff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUtaHJhZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw0REFBNEQ7RUFDNUQsZ0RBQWdEO0VBQ2hELHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3ZCOztBQU5BO0VBUVEsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUUxQjs7QUFkQTtFQWdCUSxrQkFBa0I7RUFDbEIsV0FBVztBQUVuQjs7QUFuQkE7RUFxQlEsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBRTdCOztBQUVBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDdkI7O0FBSkE7RUFNUSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLHFCQUFhO0VBQ2Isb0JBQWdCO0VBQ2hCLGtCQUFhO0FBRXJCOztBQVpBO0VBY1EsaUJBQWlCO0FBRXpCOztBQUVBO0VBQ0ksV0FBVztBQUNmOztBQUZBO0VBSVEsa0JBQWtCO0VBQ2xCLGNBQWM7QUFFdEI7O0FBUEE7RUFTUSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBRTNCOztBQVpBO0VBY1Esc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7QUFFMUI7O0FBbEJBO0VBbUJZLGNBQWM7QUFHMUIiLCJmaWxlIjoiaG9tZS1ocmFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbn1cclxuXHJcbi5tZW51LWhlYWRlci1iZyB7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1OTBkNjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc1OTBkNiAwJSwgIzRkNzFkNyAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDk4LCAxNDAsIDI1NSwgMC41KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiA3cHggc29saWQgIzVlN2NjYztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICM2MjhjZmY7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1lbnUtaXRlbXMge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjogIzg2OTc5ZjtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcclxuICAgICAgICBjb2xvcjogIzYyOGNmZjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2MjhjZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "sNJq":
    /*!*****************************************************!*\
      !*** ./src/app/home-hradmin/home-hradmin.router.ts ***!
      \*****************************************************/

    /*! exports provided: HomeAdminRouter */

    /***/
    function sNJq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeAdminRouter", function () {
        return HomeAdminRouter;
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


      var _resolver_userData_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../resolver/userData.resolver */
      "AWzS");
      /* harmony import */


      var _home_hradmin_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home-hradmin.page */
      "TC1P");

      var routes = [{
        path: 'home-hradmin',
        component: _home_hradmin_page__WEBPACK_IMPORTED_MODULE_4__["HomeHRadminPage"],
        resolve: {
          userData: _resolver_userData_resolver__WEBPACK_IMPORTED_MODULE_3__["UserDataResolver"]
        },
        children: [{
          path: 'mukadepan',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-mukadepan-mukadepan-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-mukadepan-mukadepan-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/mukadepan/mukadepan.module */
            "XSHW")).then(function (m) {
              return m.MukadepanPageModule;
            });
          }
        }, {
          path: 'mukadepanadmin',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-mukadepan-admin-mukadepan-admin-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-mukadepan-admin-mukadepan-admin-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/mukadepan-admin/mukadepan-admin.module */
            "6EAb")).then(function (m) {
              return m.MukadepanAdminPageModule;
            });
          }
        }, {
          path: 'applyleave',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-applyleave-applyleave-module */
            [__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-applyleave-applyleave-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/applyleave/applyleave.module */
            "xN67")).then(function (m) {
              return m.ApplyleavePageModule;
            });
          }
        }, {
          path: 'leavelist',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-leavelist-leavelist-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-leavelist-leavelist-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/leavelist/leavelist.module */
            "QoW/")).then(function (m) {
              return m.LeavelistPageModule;
            });
          }
        }, {
          path: 'calendar',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-calendar-calendar-module */
            [__webpack_require__.e("default~pages-cal-modal-cal-modal-module~pages-calendar-calendar-module"), __webpack_require__.e("pages-calendar-calendar-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/calendar/calendar.module */
            "awFG")).then(function (m) {
              return m.CalendarPageModule;
            });
          }
        }, {
          path: 'setting',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-setting-setting-module */
            "pages-setting-setting-module").then(__webpack_require__.bind(null,
            /*! ../pages/setting/setting.module */
            "hBK9")).then(function (m) {
              return m.SettingPageModule;
            });
          }
        }]
      }];

      var HomeAdminRouter = /*#__PURE__*/_createClass(function HomeAdminRouter() {
        _classCallCheck(this, HomeAdminRouter);
      });

      HomeAdminRouter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomeAdminRouter);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-hradmin-home-hradmin-module-es5.js.map