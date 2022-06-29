(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mukadepan-mukadepan-module"], {
    /***/
    "G0A+":
    /*!*************************************************************!*\
      !*** ./src/app/pages/mukadepan/mukadepan-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: MukadepanPageRoutingModule */

    /***/
    function G0A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MukadepanPageRoutingModule", function () {
        return MukadepanPageRoutingModule;
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


      var _mukadepan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mukadepan.page */
      "U52L");

      var routes = [{
        path: '',
        component: _mukadepan_page__WEBPACK_IMPORTED_MODULE_3__["MukadepanPage"]
      }];

      var MukadepanPageRoutingModule = /*#__PURE__*/_createClass(function MukadepanPageRoutingModule() {
        _classCallCheck(this, MukadepanPageRoutingModule);
      });

      MukadepanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MukadepanPageRoutingModule);
      /***/
    },

    /***/
    "Kf4d":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mukadepan/mukadepan.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Kf4d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>Home</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"overflow: scroll;\">\r\n  <div class=\"container\">\r\n    <ion-text color=\"primary\">\r\n      <h1 class=\"titledepan\" style=\"text-align:center\">DynaConsurv</h1>\r\n    </ion-text>\r\n   \r\n    <h2 style=\"text-align:center\">Welcome Back, {{displayUserData?.staff_name}}!</h2>\r\n    <br>\r\n    <p id=\"realTime\" style=\"text-align:center; font-family: 'Georama'!important; font-size:2.1em;\" size=\"big\">{{ today | date: \"HH:mm a\" }}</p>\r\n    <ion-datetime disabled=\"disabled\" style=\"text-align:center; font-family: 'Georama'!important; font-size:1.8em;\" size=\"medium\" display-format= \"DDDD\" [(ngModel)]=\"today\" (ionChange)=\"startTime()\"></ion-datetime>\r\n    <img (click)=\"addEvent()\" expand=\"block\" style=\"text-align:center;\" src=\"{{myimage}}\" height=\"150 px\" width=\"150 px\" class=\"smalllogo\" />\r\n    \r\n    <ion-item color=\"light\" class=\"location\">\r\n      <ion-label>Location:</ion-label>\r\n      <ion-select [(ngModel)]=\"location\" interface=\"popover\">\r\n        <ion-select-option value=\"WFH\">WFH</ion-select-option>\r\n        <ion-select-option value=\"Office\">OFFICE</ion-select-option>\r\n        <ion-select-option value=\"Site\">SITE</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-grid >\r\n      <ion-row style=\"text-align:center\" *ngFor=\"let a of displayUserData2\">\r\n        <ion-col>\r\n          <ion-icon name=\"enter-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkin | date:'h:mm a'}}</p>\r\n          <p class=\"rowBawah\">Clock In</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon name=\"log-out-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkout | date:'h:mm a'}}</p>\r\n          <p class=\"rowBawah\">Clock Out</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon name=\"location-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{ a.location }}</p>\r\n          <p class=\"rowBawah\" >Location</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <p style=\"text-align:center; color: brown;\">Check Out Time: before 6.30PM</p>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<!-- \r\n<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>Home</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"GotoNotityPage()\">\r\n      <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\r\n      <ion-badge color=\"danger\" style=\"position: absolute; right: -5px; top: -3px;\">?</ion-badge> \r\n    </ion-buttons>\r\n\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"settingsPopover()\">\r\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"overflow: scroll;\">\r\n  <div class=\"container\">\r\n    <ion-text color=\"primary\">\r\n      <h1 class=\"titledepan\" style=\"text-align:center\">DynaConsurv</h1>\r\n    </ion-text>\r\n   \r\n    <h2 style=\"text-align:center\">Welcome Back, {{displayUserData?.staff_name}}!</h2>\r\n    <br>\r\n    <p id=\"realTime\" style=\"text-align:center; font-family: 'Georama'!important; font-size:2.1em;\" size=\"big\">{{ today | date: \"HH:mm a\" }}</p>\r\n    <ion-datetime disabled=\"disabled\" style=\"text-align:center; font-family: 'Georama'!important; font-size:1.8em;\" size=\"medium\" display-format= \"DDDD\" [(ngModel)]=\"today\" (ionChange)=\"startTime()\"></ion-datetime>\r\n    <img (click)=\"addEvent()\" expand=\"block\" style=\"text-align:center;\" src=\"{{myimage}}\" height=\"150 px\" width=\"150 px\" class=\"smalllogo\" />\r\n \r\n    <ion-item color=\"light\" class=\"location\">\r\n      <ion-label>Location:</ion-label>\r\n      <ion-select [(ngModel)]=\"location\" interface=\"popover\">\r\n        <ion-select-option value=\"WFH\">WFH</ion-select-option>\r\n        <ion-select-option value=\"Office\">OFFICE</ion-select-option>\r\n        <ion-select-option value=\"Site\">SITE</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n       <ion-list>\r\n        <ion-item *ngFor=\"let a of transactions\">      \r\n          <p *ngIf=\" a.checkInAction == 'showToast1'\" > You have redeemed  {{a.checkin | date:'EEEE, h:mm a, dd/MM/yyyy '}} points.  </p>\r\n          <p *ngIf=\" a.checkOutAction == 'showToast2'\" > You have earned  {{a.checkout | date:'EEEE, h:mm a, dd/MM/yyyy '}}} points.  </p>  \r\n        </ion-item>\r\n      </ion-list> \r\n  \r\n     <p><ion-button (click)=\"goToList()\" expand=\"block\" >List of Attendees</ion-button></p> \r\n     <p><ion-button (click)=\"showToast3()\" expand=\"block\" >Leave</ion-button></p> \r\n\r\n    <ion-grid >\r\n    <ion-row style=\"text-align:center\" *ngFor=\"let a of displayUserData2\">\r\n      <ion-col>\r\n        <ion-icon name=\"enter-outline\"></ion-icon>\r\n        <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkin | date:'h:mm a'}}</p>\r\n        <p class=\"rowBawah\">Clock In</p>\r\n      </ion-col>\r\n       <ion-col *ngIf = \"a.checkout === 'showToast2()'; else noDisplay\"> \r\n      <ion-col>\r\n        <ion-icon name=\"log-out-outline\"></ion-icon>\r\n        <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkout | date:'h:mm a'}}</p>\r\n        <p class=\"rowBawah\">Clock Out</p>\r\n      </ion-col>\r\n      <ng-template #noDisplay>\r\n        <ion-col>\r\n          <ion-icon name=\"log-out-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder;\">-</p>\r\n           <p class=\"rowBawah\">Clock Out</p> \r\n        </ion-col>\r\n      </ng-template>\r\n      <ion-col>\r\n        <ion-icon name=\"location-outline\"></ion-icon>\r\n        <p style=\"font-weight: bolder; color: mediumblue;\">{{ a.location }}</p>\r\n        <p class=\"rowBawah\" >Location</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <p style=\"text-align:center; color: brown;\">Check Out Time: before 6.30PM</p>\r\n  </div>\r\n\r\n  \r\n</ion-content>\r\n-->";
      /***/
    },

    /***/
    "U52L":
    /*!***************************************************!*\
      !*** ./src/app/pages/mukadepan/mukadepan.page.ts ***!
      \***************************************************/

    /*! exports provided: MukadepanPage */

    /***/
    function U52L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MukadepanPage", function () {
        return MukadepanPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mukadepan_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mukadepan.page.html */
      "Kf4d");
      /* harmony import */


      var _mukadepan_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mukadepan.page.scss */
      "YTKF");
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


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_setting_setting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/setting/setting.component */
      "l7Ag");
      /*import {
        ActionPerformed,
        PushNotificationSchema,
        PushNotifications,
        Token,
      } from '@capacitor/push-notifications';
      import {
        Plugins,
        PushNotification,
        PushNotificationToken,
        PushNotificationActionPerformed,
      } from '@capacitor/core'; */
      //const { PushNotifications } = Plugins;


      var MukadepanPage = /*#__PURE__*/function () {
        function MukadepanPage(router, toastCtrl, authService, storageService, nav, popoverController, changeRef, loading) {
          _classCallCheck(this, MukadepanPage);

          this.router = router;
          this.toastCtrl = toastCtrl;
          this.authService = authService;
          this.storageService = storageService;
          this.nav = nav;
          this.popoverController = popoverController;
          this.changeRef = changeRef;
          this.loading = loading;
          this.today = new Date();
          this.myimage = 'assets/images/clock_in.png';
          this.postData = {
            staff_id: '',
            action: 0,
            staff_name: '',
            checkin: '',
            checkout: '',
            id: '',
            location: ''
          };
          this.displayUserData2 = [];
          this.userInfo = {};
          this.checkData = {
            staff_id: '',
            action: 2
          };
          this.startTime();
        }

        _createClass(MukadepanPage, [{
          key: "settingsPopover",
          value: function settingsPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var siteInfo, popover;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      siteInfo = {
                        id: 1,
                        name: 'hrapps dynaconsurv'
                      };
                      _context.next = 3;
                      return this.popoverController.create({
                        component: src_app_setting_setting_component__WEBPACK_IMPORTED_MODULE_8__["SettingComponent"],
                        event: ev,
                        cssClass: 'popover_setting',
                        componentProps: {
                          site: siteInfo
                        },
                        translucent: true
                      });

                    case 3:
                      popover = _context.sent;
                      popover.onDidDismiss().then(function (result) {
                        console.log(result.data);
                      });
                      _context.next = 7;
                      return popover.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nav.navigateRoot('home/mukadepan');
            console.log('Initializing HomePage');
            /*
            PushNotifications.requestPermissions().then((result) => {
              if (result.receive === 'granted') {
                PushNotifications.register();
              } else {
                // Show some error
              }
            });
                  PushNotifications.addListener('registration', (token: Token) => {
              alert('Push registration success, token: ' + token.value);
              // Push Notifications registered successfully.
              // Send token details to API to keep in DB.
            });
                  PushNotifications.addListener('registrationError', (error: any) => {
              alert('Error on registration: ' + JSON.stringify(error));
              // Handle push notification registration error here.
            });
                  PushNotifications.addListener(
              'pushNotificationReceived',
              (notification: PushNotificationSchema) => {
                alert('Push received: ' + JSON.stringify(notification));
                // Show the notification payload if the app is open on the device.
              }
            );
                  PushNotifications.addListener(
              'pushNotificationActionPerformed',
              (notification: ActionPerformed) => {
                // Implement the needed action to take when user tap on a notification.
              }
            );
            */
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this = this;

              var loader;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loading.create({
                        message: 'Loading...',
                        spinner: 'bubbles'
                      });

                    case 2:
                      loader = _context2.sent;
                      loader.present();
                      this.authService.getUserDataPromise().then(function (res) {
                        _this.displayUserData = res; // this.checkData.staff_id = this.displayUserData.staff_id; 

                        _this.sid = _this.displayUserData.staff_id;
                        _this.sname = _this.displayUserData.staff_name;

                        _this.authService.listName({
                          staff_id: _this.sid,
                          action: 2
                        }).subscribe(function (res) {
                          console.log('goChecking', res);
                          var temp = [];
                          res.results.forEach(function (value) {
                            console.log('value', value);
                            var dt = new Date(value.checkin); //console.log("checkin time 1",dt)

                            var checkoutTime = dt.setMinutes(dt.getMinutes() + 540);
                            var checkout = new Date(checkoutTime).toISOString();
                            temp.push({
                              staff_name: value.staff_name,
                              staff_id: value.staff_id,
                              checkin: new Date(value.checkin),
                              checkout: new Date(checkout),
                              location: value.location
                            });
                          });
                          _this.displayUserData2 = temp;
                          loader.dismiss();
                          console.log("user data 2", _this.displayUserData2);
                        });
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "startTime",
          value: function startTime() {
            var intervalVar = setInterval(function () {
              this.today = new Date().toISOString();
            }.bind(this), 500);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000); // location.reload();     //// this serves the purpose by reloading the entire app but its not what i want
            // this.navCtrl.navigateRoot('/tabs/tab2');  //// I tried this but not able to update 
          }
        }, {
          key: "addEvent",
          value: function addEvent() {
            if (this.myimage == 'assets/images/clock_in.png') {
              this.showToast1();
              this.checkInAction();
              this.changeRef.detectChanges();
              this.myimage = 'assets/images/clock_out.png';
              this.nav.navigateRoot('home/mukadepan');
            } else {
              this.showToast2();
              this.checkOutAction();
              this.changeRef.detectChanges();
              this.myimage = 'assets/images/clock_in.png';
            }
          }
        }, {
          key: "checkInAction",
          value: function checkInAction() {
            var _this2 = this;

            this.postData.staff_id = this.displayUserData.staff_id;
            this.postData.staff_name = this.displayUserData.staff_name;
            this.postData.action = 0;
            this.postData.location = this.location;
            this.authService.checkIn(this.postData).subscribe(function (res) {
              _this2.authService.getUserData();

              _this2.changeRef.detectChanges();

              console.log('checkin', res);
            });
          }
        }, {
          key: "checkOutAction",
          value: function checkOutAction() {
            var _this3 = this;

            this.postData.staff_id = this.displayUserData.staff_id;
            this.postData.staff_name = this.displayUserData.staff_name;
            this.postData.action = 1;
            this.postData.location = this.location.data;
            this.authService.checkOut(this.postData).subscribe(function (res) {
              _this3.authService.getUserData();

              _this3.changeRef.detectChanges();

              console.log('checkout', res);
            });
          }
        }, {
          key: "showToast1",
          value: function showToast1() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastCtrl.create({
                        message: "You've Check-In!",
                        duration: 2000,
                        position: 'middle',
                        buttons: [{
                          text: 'OK'
                        }]
                      }).then(function (res) {
                        return res.present();
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "showToast2",
          value: function showToast2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastCtrl.create({
                        message: "You've Check-Out!",
                        duration: 2000,
                        position: 'middle',
                        buttons: [{
                          text: 'OK'
                        }]
                      }).then(function (res) {
                        return res.present();
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "showToast3",
          value: function showToast3() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastCtrl.create({
                        message: "You're on Leave!",
                        duration: 2000,
                        position: 'middle',
                        buttons: [{
                          text: 'OK'
                        }]
                      }).then(function (res) {
                        return res.present();
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "goToList",
          value: function goToList() {
            this.postData.staff_id = this.displayUserData.staff_id;
            this.postData.action = 2;
            this.router.navigate(['listattendees']);
            this.authService.listName(this.postData).subscribe(function (res) {
              console.log('golist', res);
            });
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.changeRef.detectChanges();
          }
        }]);

        return MukadepanPage;
      }();

      MukadepanPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      MukadepanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mukadepan',
        template: _raw_loader_mukadepan_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mukadepan_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MukadepanPage);
      /***
        showStatus: boolean = false;
        async ionViewWillEnter()
        {
      
          let loader=await this.loading.create({
            message:'Loading...',
            spinner:'bubbles'
          })
      
          loader.present();
      
          this.authService.getUserDataPromise().then((res: any) => {
            this.displayUserData = res;
            // this.checkData.staff_id = this.displayUserData.staff_id;
            this.sid = this.displayUserData.staff_id;
       
          this.authService.listName({staff_id: this.sid, action: 2}).subscribe((res: any) => {
            console.log('goChecking',res);
            let temp : any[] = [];
            (res.results).forEach(function (value) {
              console.log(value)
              temp.push({staff_name:value.staff_name,
              checkin:new Date(value.checkin),
              checkout:new Date(value.checkout),
              location:value.location,
              })
            });
            this.displayUserData2 = temp;
            loader.dismiss();
            console.log(this.displayUserData2);} )
      
          });
      
        }
      }
        ***/

      /***/
    },

    /***/
    "XSHW":
    /*!*****************************************************!*\
      !*** ./src/app/pages/mukadepan/mukadepan.module.ts ***!
      \*****************************************************/

    /*! exports provided: MukadepanPageModule */

    /***/
    function XSHW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MukadepanPageModule", function () {
        return MukadepanPageModule;
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


      var _mukadepan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mukadepan-routing.module */
      "G0A+");
      /* harmony import */


      var _mukadepan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mukadepan.page */
      "U52L");

      var MukadepanPageModule = /*#__PURE__*/_createClass(function MukadepanPageModule() {
        _classCallCheck(this, MukadepanPageModule);
      });

      MukadepanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mukadepan_routing_module__WEBPACK_IMPORTED_MODULE_5__["MukadepanPageRoutingModule"]],
        declarations: [_mukadepan_page__WEBPACK_IMPORTED_MODULE_6__["MukadepanPage"]]
      })], MukadepanPageModule);
      /***/
    },

    /***/
    "YTKF":
    /*!*****************************************************!*\
      !*** ./src/app/pages/mukadepan/mukadepan.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function YTKF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  position: relative;\n  left: 0;\n  bottom: 10vh;\n  right: 0;\n  top: 2vh;\n}\n\n@media screen and (max-width: 1200px) and (min-width: 450px) {\n  .container {\n    background: white;\n  }\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\nion-button {\n  --border-radius: 30px;\n}\n\n.smalllogo {\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate-reverse both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate-reverse both;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#realTime {\n  margin-bottom: 0px;\n}\n\nion-datetime {\n  padding-top: 0%;\n}\n\n.location {\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-icon {\n  font-size: 35px;\n  color: #2C9DDE;\n}\n\nion-grid {\n  position: relative;\n  margin-top: 40px;\n  margin-bottom: auto;\n}\n\n.rowBawah {\n  font-size: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdWthZGVwYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxZQUFZO0VBQ1osUUFBUTtFQUNSLFFBQVE7QUFDWjs7QUFBSTtFQU5KO0lBT1EsaUJBQWlCO0VBSXZCO0FBQ0Y7O0FBREE7RUFDSSxrQkFBYTtFQUNiLGNBQWM7QUFJbEI7O0FBREM7RUFDSyxxQkFBZ0I7QUFJdEI7O0FBREU7RUFDRSx5R0FBOEc7RUFDOUcsaUdBQXNHO0VBQ3RHLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBSXRCOztBQURFO0VBQ0Usa0JBQWE7RUFDYixpREFBaUQ7RUFDakQsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFJMUI7O0FBREE7RUFDRSxrQkFBa0I7QUFJcEI7O0FBREE7RUFDRSxlQUFlO0FBSWpCOztBQURBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFJcEI7O0FBREE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUloQjs7QUFEQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBSXJCOztBQURBO0VBQ0UsZUFBZTtBQUlqQiIsImZpbGUiOiJtdWthZGVwYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAxMHZoO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDJ2aDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICMyQzlEREU7XHJcbiAgfVxyXG5cclxuIGlvbi1idXR0b24ge1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuc21hbGxsb2dvIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZSBib3RoO1xyXG4gICAgYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZSBib3RoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaHJfYmcucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4jcmVhbFRpbWUge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuaW9uLWRhdGV0aW1lIHtcclxuICBwYWRkaW5nLXRvcDogMCU7XHJcbn1cclxuXHJcbi5sb2NhdGlvbiB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6ICMyQzlEREU7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4ucm93QmF3YWgge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-mukadepan-mukadepan-module-es5.js.map