(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leavelist-leavelist-module"], {
    /***/
    "50S+":
    /*!***************************************************!*\
      !*** ./src/app/pages/leavelist/leavelist.page.ts ***!
      \***************************************************/

    /*! exports provided: LeavelistPage */

    /***/
    function S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeavelistPage", function () {
        return LeavelistPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leavelist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leavelist.page.html */
      "PyS+");
      /* harmony import */


      var _leavelist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leavelist.page.scss */
      "AWSy");
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


      var _leave_modal_leave_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../leave-modal/leave-modal.page */
      "Rx4N");
      /* harmony import */


      var _approve_modal_approve_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../approve-modal/approve-modal.page */
      "1HE4");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LeavelistPage = /*#__PURE__*/function () {
        function LeavelistPage(authService, nav, loading, modal, storage, popoverController, router, storageService) {
          _classCallCheck(this, LeavelistPage);

          this.authService = authService;
          this.nav = nav;
          this.loading = loading;
          this.modal = modal;
          this.storage = storage;
          this.popoverController = popoverController;
          this.router = router;
          this.storageService = storageService;
          this.selectTabs = 'pending';
          this.userInfo = {};
          this.leaveMaster = [];
          this.approvedList = [];
          this.pendingList = [];
          this.showBtn = true;
        }

        _createClass(LeavelistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.userData$.subscribe(function (res) {
              _this.displayUserData = res;

              if (_this.displayUserData.level === 2) {
                _this.showBtn = false;
              } else {
                _this.showBtn = true;
              }
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this2 = this;

              var loader;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loading.create({
                        message: 'Loading...',
                        spinner: 'bubbles'
                      });

                    case 2:
                      loader = _context.sent;
                      loader.present();
                      this.approvedList = [];
                      this.pendingList = [];
                      this.leaveMaster = [];
                      this.authService.getUserDataPromise().then(function () {
                        var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        // console.log('USER DATA',res);
                        _this2.userInfo = res; //DEBUG

                        _this2.userInfo.staff_id = _this2.userInfo.staff_id;
                        _this2.userInfo.hod = 0; //DEBUG

                        _this2.authService.leavedetailPromise({
                          staffid: _this2.userInfo.staff_id
                        }).then(function (res) {
                          console.log('staffinfo', res[0]);
                          _this2.leaveMaster = res[0];

                          _this2.segList(res[0]);

                          _this2.segList(res[1]);

                          loader.dismiss();
                        }, function (err) {
                          console.log(err);
                          loader.dismiss();
                        });
                      }, function (err) {
                        loader.dismiss();

                        _this2.nav.navigateBack('login');
                      });

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openModal",
          value: function openModal(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this3 = this;

              var approveModal;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.userInfo.hod == 0)) {
                        _context2.next = 7;
                        break;
                      }

                      this.storage.modalData = item;
                      _context2.next = 4;
                      return this.modal.create({
                        component: _leave_modal_leave_modal_page__WEBPACK_IMPORTED_MODULE_6__["LeaveModalPage"]
                      });

                    case 4:
                      approveModal = _context2.sent;
                      approveModal.onDidDismiss().then(function (_) {
                        _this3.ionViewWillEnter(); //Refresh data

                      });
                      approveModal.present();

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openModalApprove",
          value: function openModalApprove(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var approveModal;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(this.userInfo.hod == 0)) {
                        _context3.next = 6;
                        break;
                      }

                      this.storage.modalData = item;
                      _context3.next = 4;
                      return this.modal.create({
                        component: _approve_modal_approve_modal_page__WEBPACK_IMPORTED_MODULE_7__["ApproveModalPage"]
                      });

                    case 4:
                      approveModal = _context3.sent;
                      approveModal.present();

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "sortFunc",
          value: function sortFunc(a, b) {
            return new Date(b.datefrom).getTime() - new Date(a.datefrom).getTime();
          }
        }, {
          key: "segList",
          value: function segList(list) {
            for (var x = 0; x < list.length; x++) {
              if (Number(list[x].approved) == 2 && Number(list[x].hod) !== 0) {
                this.approvedList.push(list[x]);
              } else if (Number(list[x].approved) < 2 && Number(list[x].hod) !== 0) {
                this.pendingList.push(list[x]);
              }
            }
          } // async addLeave () {
          //   await this.router.navigate(['applyleave']);
          //   console.log('apply leave for HR admin');
          // }

        }, {
          key: "goToLeaveHistory",
          value: function goToLeaveHistory() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.router.navigate(['./leave']);

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
        }]);

        return LeavelistPage;
      }();

      LeavelistPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }];
      };

      LeavelistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leavelist',
        template: _raw_loader_leavelist_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leavelist_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LeavelistPage);
      /***/
    },

    /***/
    "AWSy":
    /*!*****************************************************!*\
      !*** ./src/app/pages/leavelist/leavelist.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function AWSy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --min-height: 50px;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsZWF2ZWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWE7QUFDakI7O0FBRUU7RUFDRSxrQkFBYTtFQUNiLGNBQWM7QUFDbEIiLCJmaWxlIjoibGVhdmVsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjMkM5RERFO1xyXG59Il19 */";
      /***/
    },

    /***/
    "PyS+":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leavelist/leavelist.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function PyS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>Leave List</ion-title>\r\n    <ion-buttons *ngIf=\"showBtn\" slot=\"end\" (click)=\"goToLeaveHistory()\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"clipboard-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-segment [(ngModel)]=\"selectTabs\" mode=\"md\">\r\n\r\n    <ion-segment-button value=\"pending\">\r\n      <ion-icon name=\"hourglass-outline\"></ion-icon>\r\n        <ion-label>Pending</ion-label>\r\n    </ion-segment-button>\r\n    \r\n    <ion-segment-button value=\"approved\">\r\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\r\n        <ion-label>Approved</ion-label>\r\n    </ion-segment-button>\r\n\r\n  </ion-segment>\r\n\r\n  <div *ngIf=\"selectTabs == 'pending'\" >\r\n    <ion-list>\r\n      <ion-item color='secondary'>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>Name:</ion-col>\r\n            <ion-col>Type:</ion-col>\r\n            <ion-col>Date:</ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"pendingList.length==0\">\r\n        No pending leave found\r\n      </ion-item>\r\n      <ion-item *ngFor=\"let item of pendingList.sort(sortFunc)\">\r\n        <ion-grid>\r\n          <ion-row (click)='openModal(item)'>\r\n            <ion-col>\r\n              {{item.staff_name}}\r\n            </ion-col>\r\n            <ion-col>\r\n              {{item.leavetype}}\r\n            </ion-col>\r\n            <ion-col>\r\n              <span *ngIf=\"item.datehalf=='0000-00-00'\">\r\n              {{item.datefrom}}-{{item.dateend}}\r\n              </span>\r\n              <span *ngIf=\"item.datehalf!='0000-00-00'\">\r\n              {{item.datehalf}}\r\n              </span>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-col>\r\n            \r\n          </ion-col>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <div *ngIf=\"selectTabs == 'approved'\">\r\n    <ion-list>\r\n      <ion-item color='secondary'>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>Name:</ion-col>\r\n            <ion-col>Type:</ion-col>\r\n            <ion-col>Date:</ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"approvedList.length==0\">\r\n        No approved leave found\r\n      </ion-item>\r\n      <ion-item *ngFor=\"let item of approvedList\">\r\n        <ion-grid>\r\n          <ion-row (click)='openModalApprove(item)'>\r\n            <ion-col>\r\n              {{item.staff_name}}\r\n            </ion-col>\r\n            <ion-col>\r\n              {{item.leavetype}}\r\n            </ion-col>\r\n            <ion-col>\r\n              <span *ngIf=\"item.datehalf=='0000-00-00'\">\r\n              {{item.datefrom}}-{{item.dateend}}\r\n              </span>\r\n              <span *ngIf=\"item.datehalf!='0000-00-00'\">\r\n              {{item.datehalf}}\r\n              </span>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "QoW/":
    /*!*****************************************************!*\
      !*** ./src/app/pages/leavelist/leavelist.module.ts ***!
      \*****************************************************/

    /*! exports provided: LeavelistPageModule */

    /***/
    function QoW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeavelistPageModule", function () {
        return LeavelistPageModule;
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


      var _leavelist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./leavelist-routing.module */
      "mmam");
      /* harmony import */


      var _leavelist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./leavelist.page */
      "50S+");

      var LeavelistPageModule = /*#__PURE__*/_createClass(function LeavelistPageModule() {
        _classCallCheck(this, LeavelistPageModule);
      });

      LeavelistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _leavelist_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeavelistPageRoutingModule"]],
        declarations: [_leavelist_page__WEBPACK_IMPORTED_MODULE_6__["LeavelistPage"]]
      })], LeavelistPageModule);
      /***/
    },

    /***/
    "mmam":
    /*!*************************************************************!*\
      !*** ./src/app/pages/leavelist/leavelist-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: LeavelistPageRoutingModule */

    /***/
    function mmam(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeavelistPageRoutingModule", function () {
        return LeavelistPageRoutingModule;
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


      var _leavelist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./leavelist.page */
      "50S+");

      var routes = [{
        path: '',
        component: _leavelist_page__WEBPACK_IMPORTED_MODULE_3__["LeavelistPage"]
      }];

      var LeavelistPageRoutingModule = /*#__PURE__*/_createClass(function LeavelistPageRoutingModule() {
        _classCallCheck(this, LeavelistPageRoutingModule);
      });

      LeavelistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LeavelistPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-leavelist-leavelist-module-es5.js.map