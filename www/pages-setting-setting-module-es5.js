(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setting-setting-module"], {
    /***/
    "UDOt":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function UDOt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar color='primary'>\r\n    <ion-title>Setting</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button share=\"round\" color=\"primary\" (click)=\"logoutAction()\">LOGOUT</ion-button>\r\n  <ion-item>Name: {{displayUserData?.staff_name}}</ion-item>\r\n  <div style=\"margin-top:1em;\" *ngIf=\"showChangePassword==false\" class=\"ion-text-center\">\r\n    <ion-button (click)=\"showChangePassword=true\">\r\n      Change Password kmu?\r\n    </ion-button>\r\n  </div>\r\n  <ion-item color='primary' *ngIf=\"showChangePassword==true\">\r\n    <strong>\r\n      CHANGE PASSWORD\r\n    </strong>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"showChangePassword==true\">\r\n    <ion-label>\r\n      Old Password\r\n    </ion-label>\r\n    <ion-input [(ngModel)]='oldPassword' type=\"password\"></ion-input>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"showChangePassword==true\">\r\n    <ion-label>\r\n      New Password\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"newPassword\" type=\"password\"></ion-input>\r\n  </ion-item>\r\n    <div *ngIf=\"showChangePassword==true\">\r\n      <ion-button color=\"danger\" expand='full' (click)=\"changePassword()\">\r\n        Send New Password\r\n      </ion-button>\r\n    </div>\r\n    <div *ngIf=\"showChangePassword==true\">\r\n      <ion-button expand='full' fill=\"clear\" color=\"dark\" (click)=\"showChangePassword=false\">\r\n        Close\r\n      </ion-button>\r\n    </div>\r\n\r\n</ion-content> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>Settings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list-header>\r\n    <ion-label class=\"ion-text-uppercase\" color=\"ios-lh-labl-gray\">\r\n      User Details\r\n    </ion-label>\r\n  </ion-list-header>\r\n  <ion-list >\r\n    <ion-item lines=\"full\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2 class=\"ion-text-lowercase\" lines=\"none\">{{displayUserData?.staff_name}}</h2>\r\n        <!-- <p class=\"ion-text-lowercase\" lines=\"none\">{{displayUserData?.staff_name}}@consurv.com.my</p> -->\r\n      </ion-label>\r\n      <div class=\"center\">\r\n        <ion-button (click)=\"signOut()\" fill=\"clear\">Log out</ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!-- <ion-list *ngIf=\"!user\">\r\n    <ion-item lines=\"full\">\r\n      <a class=\"link\" (click)=\"loginAction()\">Log in to view</a>\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n  <ion-list-header>\r\n    <ion-label class=\"ion-text-uppercase\" color=\"ios-lh-labl-gray\">\r\n      Communications\r\n    </ion-label>\r\n  </ion-list-header>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-icon name=\"send\" slot=\"start\" color=\"medium\"></ion-icon>\r\n      <ion-label>Push Notifications (coming soon)</ion-label>\r\n      <ion-toggle slot checked></ion-toggle>\r\n    </ion-item>\r\n    <!-- <ion-item>\r\n      <ion-icon name=\"mail\" slot=\"start\" color=\"medium\"></ion-icon>\r\n      <ion-label>Email</ion-label>\r\n      <ion-toggle slot></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"chatbox-ellipses\" slot=\"start\" color=\"medium\"></ion-icon>\r\n      <ion-label>SMS</ion-label>\r\n      <ion-toggle slot checked></ion-toggle>\r\n    </ion-item> -->\r\n  </ion-list>\r\n\r\n  <!--\r\n  <div style=\"margin-top:1em;\" *ngIf=\"showChangePassword==false\" class=\"ion-text-center\">\r\n    <ion-button color=\"warning\" (click)=\"showChangePassword=true\">\r\n      Change Password?\r\n    </ion-button>\r\n  </div>\r\n  <ion-item color='warning' *ngIf=\"showChangePassword==true\">\r\n    <strong>\r\n      CHANGE PASSWORD\r\n    </strong>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"showChangePassword==true\">\r\n    <ion-label position=\"floating\">\r\n      Old Password\r\n    </ion-label>\r\n    <ion-input [(ngModel)]='oldPassword' [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\r\n    <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()' slot=\"end\"></ion-icon>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"showChangePassword==true\">\r\n    <ion-label position=\"floating\">\r\n      New Password\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"newPassword\" [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\r\n    <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()' slot=\"end\"></ion-icon>\r\n  </ion-item>\r\n\r\n    <div *ngIf=\"showChangePassword==true\">\r\n      <ion-button color=\"danger\" expand='full' (click)=\"changePassword()\">\r\n        Send New Password\r\n      </ion-button>\r\n    </div>\r\n    <div *ngIf=\"showChangePassword==true\">\r\n      <ion-button expand='full' fill=\"clear\" color=\"dark\" (click)=\"showChangePassword=false\">\r\n        Close\r\n      </ion-button>\r\n    </div>\r\n-->\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "hBK9":
    /*!*************************************************!*\
      !*** ./src/app/pages/setting/setting.module.ts ***!
      \*************************************************/

    /*! exports provided: SettingPageModule */

    /***/
    function hBK9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPageModule", function () {
        return SettingPageModule;
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


      var _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./setting-routing.module */
      "zhNF");
      /* harmony import */


      var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./setting.page */
      "kSd7");

      var SettingPageModule = /*#__PURE__*/_createClass(function SettingPageModule() {
        _classCallCheck(this, SettingPageModule);
      });

      SettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPageRoutingModule"]],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
      })], SettingPageModule);
      /***/
    },

    /***/
    "kSd7":
    /*!***********************************************!*\
      !*** ./src/app/pages/setting/setting.page.ts ***!
      \***********************************************/

    /*! exports provided: SettingPage */

    /***/
    function kSd7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPage", function () {
        return SettingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./setting.page.html */
      "UDOt");
      /* harmony import */


      var _setting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./setting.page.scss */
      "xQ/8");
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


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SettingPage = /*#__PURE__*/function () {
        function SettingPage(authService, http, router, routerOutlet, modalController) {
          _classCallCheck(this, SettingPage);

          this.authService = authService;
          this.http = http;
          this.router = router;
          this.routerOutlet = routerOutlet;
          this.modalController = modalController;
          this.userInfo = {};
          this.showChangePassword = false;
          this.passwordType = 'password';
          this.passwordIcon = 'eye-off';
        }

        _createClass(SettingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.userData$.subscribe(function (res) {
              _this.displayUserData = res;
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.authService.logout();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            // console.log('User Info',this.userInfo);
            //     URL: http://consurv.no-ip.biz/leave/changepassword
            // Expected variable : username, olpass, newpass
            this.http.post('changepassword', {
              username: this.userInfo.staff_id,
              olpass: this.oldPassword,
              newpass: this.newPassword
            }).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "hideShowPassword",
          value: function hideShowPassword() {
            this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
            this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
          }
        }]);

        return SettingPage;
      }();

      SettingPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRouterOutlet"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }];
      };

      SettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-setting',
        template: _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SettingPage);
      /***/
    },

    /***/
    "xQ/8":
    /*!*************************************************!*\
      !*** ./src/app/pages/setting/setting.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function xQ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/* Workaround for Ionic bug where Card color is set to gray due to \r\n     ion-content background rule above */\n\nion-card {\n  --background: white !important;\n}\n\n.center {\n  text-align: center;\n}\n\n.card-padding {\n  padding-top: 30px;\n}\n\n.log-in-padding {\n  display: block;\n  margin-top: 20px;\n  margin-left: 20px;\n}\n\n.link {\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFhO0VBQ2IsaURBQWlEO0VBQ2pELCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQzFCOztBQUVFO3dDQUNzQzs7QUFDdEM7RUFDRSw4QkFBYTtBQUNqQjs7QUFFRTtFQUNFLGtCQUFrQjtBQUN0Qjs7QUFFRTtFQUNFLGlCQUFpQjtBQUNyQjs7QUFFRTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVFO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUM3Qjs7QUFFRTtFQUNFLGtCQUFhO0VBQ2IsY0FBYztBQUNsQiIsImZpbGUiOiJzZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaHJfYmcucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFdvcmthcm91bmQgZm9yIElvbmljIGJ1ZyB3aGVyZSBDYXJkIGNvbG9yIGlzIHNldCB0byBncmF5IGR1ZSB0byBcclxuICAgICBpb24tY29udGVudCBiYWNrZ3JvdW5kIHJ1bGUgYWJvdmUgKi9cclxuICBpb24tY2FyZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1wYWRkaW5ne1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2ctaW4tcGFkZGluZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICMyQzlEREU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "zhNF":
    /*!*********************************************************!*\
      !*** ./src/app/pages/setting/setting-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SettingPageRoutingModule */

    /***/
    function zhNF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function () {
        return SettingPageRoutingModule;
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


      var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./setting.page */
      "kSd7");

      var routes = [{
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
      }];

      var SettingPageRoutingModule = /*#__PURE__*/_createClass(function SettingPageRoutingModule() {
        _classCallCheck(this, SettingPageRoutingModule);
      });

      SettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-setting-setting-module-es5.js.map