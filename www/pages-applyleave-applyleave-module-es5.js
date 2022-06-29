(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-applyleave-applyleave-module"], {
    /***/
    "1hyo":
    /*!*******************************************************!*\
      !*** ./src/app/pages/applyleave/applyleave.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function hyo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".apply-button {\n  float: right;\n}\n\n.applyButton {\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\nion-card {\n  color: #2C9DDE;\n  max-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nion-list {\n  overflow: hidden;\n  overflow-y: auto;\n}\n\nion-list ::-webkit-scrollbar {\n  display: none;\n}\n\n.myCustomSelect {\n  max-width: 100% !important;\n}\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHBseWxlYXZlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7QUFDaEI7O0FBRUE7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7RUFDSSxrQkFBYTtFQUNiLGNBQWM7QUFDbEI7O0FBRUE7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUhBO0VBSU0sYUFBYTtBQUduQjs7QUFDRTtFQUNFLDBCQUEwQjtBQUU5Qjs7QUFDRTtFQUNFLGtCQUFhO0VBQ2IsaURBQWlEO0VBQ2pELCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBRTFCIiwiZmlsZSI6ImFwcGx5bGVhdmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcGx5LWJ1dHRvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmFwcGx5QnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICMyQzlEREU7XHJcbiAgfVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgY29sb3I6ICMyQzlEREU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5teUN1c3RvbVNlbGVjdHtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICB9XHJcblxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaHJfYmcucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "BwO+":
    /*!*****************************************************!*\
      !*** ./src/app/pages/applyleave/applyleave.page.ts ***!
      \*****************************************************/

    /*! exports provided: ApplyleavePage */

    /***/
    function BwO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyleavePage", function () {
        return ApplyleavePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_applyleave_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./applyleave.page.html */
      "Ys5u");
      /* harmony import */


      var _applyleave_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./applyleave.page.scss */
      "1hyo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "n90K");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "2g2N");

      var ApplyleavePage = /*#__PURE__*/function () {
        function ApplyleavePage(toastCtrl, router, authService, storageService, toastService, nav, http, alertCtrl, changeRef, loading) {
          _classCallCheck(this, ApplyleavePage);

          this.toastCtrl = toastCtrl;
          this.router = router;
          this.authService = authService;
          this.storageService = storageService;
          this.toastService = toastService;
          this.nav = nav;
          this.http = http;
          this.alertCtrl = alertCtrl;
          this.changeRef = changeRef;
          this.loading = loading;
          this.postData = {
            staff_id: '',
            leavetype: '',
            reason: '',
            currentDate: '',
            endDate: '',
            image: '',
            halfday1: '',
            halfday2: '',
            data: ''
          };
          this.userInfo = {};
          this.leaveDetail = {};
          this.leaveBalance = [];
          this.leaveTypeChoices = [];
          this.image = '';
        } //  async showToastLeave(){
        //   await this.toastCtrl.create({
        //     message: "You have successfully applied for a leave!",
        //     duration: 2000,
        //     position: 'middle',
        //     buttons: [{
        //       text: 'OK'
        //     }]
        //   }).then( res => res.present());
        // }


        _createClass(ApplyleavePage, [{
          key: "showAlert",
          value: function showAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'SUCCESS!',
                        subHeader: 'You have successfully applied for a leave!',
                        cssClass: 'my-custom-class',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
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
            var _this = this;

            this.authService.userData$.subscribe(function (res) {
              _this.displayUserData = res;
            });
            setTimeout(function () {
              _this.dateTime = new Date().toISOString();
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            //this.leaveBalance.data.AL=0;
            this.authService.getUserDataPromise().then(function () {
              var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              // console.log(res);
              _this2.userInfo = res;

              _this2.getBalance();

              _this2.authService.leavedetailPromise({
                staffid: _this2.userInfo.staff_id
              }).then(function (res) {
                console.log(res);
                _this2.leaveDetail = res[0];

                _this2.getLeaveType();
              }, function (err) {
                console.log(err);
              });
            }, function (err) {
              _this2.nav.navigateBack('login');
            });
          }
        }, {
          key: "getLeaveType",
          value: function getLeaveType() {
            var _this3 = this;

            this.http.get('http://consurv.no-ip.biz/leave/leavetype').then(function (res) {
              console.log("type", res);
              _this3.leaveTypeChoices = res;
            });
          }
        }, {
          key: "getBalance",
          value: function getBalance() {
            var _this4 = this;

            this.http.get('http://consurv.no-ip.biz:3000/api/leavesummary/' + "".concat(this.userInfo.staff_id)).then(function (res) {
              console.log("balance", res);
              _this4.leaveBalance = res;
            });
          }
        }, {
          key: "validateInputs",
          value: function validateInputs() {
            var staff_id = this.postData.staff_id;
            var leavetype = this.postData.leavetype;
            var reason = this.postData.reason;
            var currentDate = this.postData.currentDate;
            var endDate = this.postData.endDate;
            var image = this.postData.image;
            var halfday1 = this.postData.halfday1;
            var halfday2 = this.postData.halfday2;
            return this.postData.staff_id && this.postData.leavetype && this.postData.reason && this.postData.currentDate && this.postData.endDate && this.postData.image && this.postData.halfday1 && this.postData.halfday2;
          }
        }, {
          key: "applyCuti",
          value: function applyCuti() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this5 = this;

              var pack_data;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      pack_data = {
                        staff_id: this.userInfo.staff_id,
                        leavetype: this.leaveType.toString(),
                        reason: this.reason,
                        startdate: this.currentDate,
                        enddate: this.endDate,
                        startdate_type: this.halfday1.toString(),
                        enddate_type: this.halfday2.toString(),
                        image: '' //ok

                      };
                      console.log('pack_', pack_data);
                      this.authService.applyleave(pack_data).then(function (res) {
                        console.log(res);

                        _this5.changeRef.detectChanges(); // this.nav.navigateForward('home/calendar');

                      }, function (err) {
                        console.log(err);
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // let loader=await this.loading.create({
          //   message:'Loading...',
          //   spinner:'bubbles'
          // })
          // loader.present();
          // this.postData.staff_id;
          // this.postData.currentDate;
          // this.postData.endDate;
          // this.postData.halfday1;
          // this.postData.halfday2;
          // this.postData.leavetype;
          // this.postData.reason;
          //   this.authService.applyleave(this.postData).subscribe((res: any) => {
          //     console.log('apply',res)} )
          // let startDate= this.getCorrectDateFormat(this.currentDate);
          // let endDate= this.getCorrectDateFormat(this.endDate);
          // staff_id(from user data),
          // leavetype(typeid from HRAppGetLeaveType),
          // reason(user input string),
          // currentDate(in string),
          // endDate(in string),
          // image(leave it null),
          // halfday1( 1=full day, 2=morning, 3=evening )
          // halfday2( 1=full day, 2=morning, 3=evening )

        }, {
          key: "getCorrectDateFormat",
          value: function getCorrectDateFormat(dateTemp) {
            var theDate = new Date(dateTemp);
            var fullYear = theDate.getFullYear();
            var fullMonth;
            var monthTemp = Number(theDate.getMonth()) + 1;

            if (Number(monthTemp) < 10) {
              fullMonth = "0".concat(monthTemp);
            } else {
              fullMonth = monthTemp.toString();
            }

            var fullDay;
            var dayTemp = Number(theDate.getDate());

            if (Number(dayTemp) < 10) {
              fullDay = "0".concat(dayTemp);
            } else {
              fullDay = dayTemp.toString();
            }

            var fullDate = "".concat(fullYear, "-").concat(fullMonth, "-").concat(fullDay); // console.log(fullDate);

            return fullDate;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.myform.valid) {
              console.log("Form Submitted!");
              this.myform.reset();
            }
          }
        }]);

        return ApplyleavePage;
      }();

      ApplyleavePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      ApplyleavePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-applyleave',
        template: _raw_loader_applyleave_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_applyleave_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ApplyleavePage);
      /***/
    },

    /***/
    "Ys5u":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/applyleave/applyleave.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ys5u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color='light'>\r\n    <ion-title>Apply Leave</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<ion-card>\r\n    <ion-card-content style=\"overflow: scroll;\">\r\n      <form [formGroup]=\"myform\" (ngSubmit)=\"onSubmit()\">\r\n        <ion-item>\r\n          <ion-label>Type of leave:</ion-label>\r\n            <ion-select class= \"myCustomSelect\" required slot=\"end\" [(ngModel)]='leaveType'>\r\n              <ion-select-option *ngFor=\"let item of leaveTypeChoices\" [value]=\"item.typeid\">{{item.leavetype}}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n      \r\n        <ion-item lines=\"none\">\r\n          <ion-label>Reason:</ion-label>\r\n            <ion-input required type=\"text\" type=\"text\" [(ngModel)]='reason'> </ion-input>\r\n        </ion-item>\r\n      \r\n        <ion-list>\r\n          <ion-item-divider></ion-item-divider>\r\n          <ion-item color=\"secondary\" lines=\"none\">\r\n            <ion-label>Start Date</ion-label>\r\n            <ion-datetime [(ngModel)]=\"currentDate\" color=\"light\" placeholder=\"Select Date\"></ion-datetime>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Duration</ion-label>\r\n                  <ion-select slot=\"end\" [(ngModel)]='halfday1'>\r\n                    <ion-select-option value=\"1\">Full day</ion-select-option>\r\n                    <ion-select-option value=\"2\">Morning Only</ion-select-option>\r\n                    <ion-select-option value=\"3\">Evening Only</ion-select-option>\r\n              </ion-select>\r\n          </ion-item>\r\n          <ion-item color=\"secondary\" lines=\"none\">\r\n            <ion-label>Ends</ion-label>\r\n            <ion-datetime [(ngModel)]=\"endDate\" placeholder=\"Select Date\"></ion-datetime>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Duration</ion-label>\r\n                  <ion-select slot=\"end\" [(ngModel)]='halfday2'>\r\n                    <ion-select-option value=\"1\">Full day</ion-select-option>\r\n                    <ion-select-option value=\"2\">Morning Only</ion-select-option>\r\n                    <ion-select-option value=\"3\">Evening Only</ion-select-option>\r\n              </ion-select>\r\n          </ion-item>\r\n        </ion-list>\r\n      </form>\r\n     \r\n    </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-item style=\"overflow: scroll;\" lines=\"none\">\r\n  <div class=\"applyButton\">\r\n    <ion-button (ionClear)=\"ionClear($event)\" type=\"ngSubmit\" (click)=\"showAlert()\" (click)=\"applyCuti()\" class=\"apply-button\" color=\"secondary\">Apply Leave</ion-button>\r\n  </div>\r\n</ion-item>\r\n\r\n<div lines=\"none\" class=\"cuti\">\r\n  <ion-card color='light'>\r\n    <ion-card-header>Leave Balance for Year <ion-datetime [value]=\"dateTime\" displayFormat=\"YYYY\" ></ion-datetime>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <!-- <ion-card-subtitle color=\"primary-contrast\">Leave Balance for year 2021:</ion-card-subtitle> -->\r\n      <ion-card-title color=\"primary-contrast\" style=\"font-size:70px\" >\r\n        {{leaveBalance.data?.AL}}\r\n      </ion-card-title>\r\n      <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:20px\">Days</ion-card-subtitle>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "wK0/":
    /*!***************************************************************!*\
      !*** ./src/app/pages/applyleave/applyleave-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ApplyleavePageRoutingModule */

    /***/
    function wK0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyleavePageRoutingModule", function () {
        return ApplyleavePageRoutingModule;
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


      var _applyleave_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./applyleave.page */
      "BwO+");

      var routes = [{
        path: '',
        component: _applyleave_page__WEBPACK_IMPORTED_MODULE_3__["ApplyleavePage"]
      }];

      var ApplyleavePageRoutingModule = /*#__PURE__*/_createClass(function ApplyleavePageRoutingModule() {
        _classCallCheck(this, ApplyleavePageRoutingModule);
      });

      ApplyleavePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ApplyleavePageRoutingModule);
      /***/
    },

    /***/
    "xN67":
    /*!*******************************************************!*\
      !*** ./src/app/pages/applyleave/applyleave.module.ts ***!
      \*******************************************************/

    /*! exports provided: ApplyleavePageModule */

    /***/
    function xN67(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyleavePageModule", function () {
        return ApplyleavePageModule;
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


      var _applyleave_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./applyleave-routing.module */
      "wK0/");
      /* harmony import */


      var _applyleave_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./applyleave.page */
      "BwO+");

      var ApplyleavePageModule = /*#__PURE__*/_createClass(function ApplyleavePageModule() {
        _classCallCheck(this, ApplyleavePageModule);
      });

      ApplyleavePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _applyleave_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplyleavePageRoutingModule"]],
        declarations: [_applyleave_page__WEBPACK_IMPORTED_MODULE_6__["ApplyleavePage"]]
      })], ApplyleavePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-applyleave-applyleave-module-es5.js.map