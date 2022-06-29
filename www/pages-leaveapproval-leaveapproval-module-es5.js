(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leaveapproval-leaveapproval-module"], {
    /***/
    "+N/3":
    /*!*************************************************************!*\
      !*** ./src/app/pages/leaveapproval/leaveapproval.module.ts ***!
      \*************************************************************/

    /*! exports provided: LeaveapprovalPageModule */

    /***/
    function N3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaveapprovalPageModule", function () {
        return LeaveapprovalPageModule;
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


      var _leaveapproval_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./leaveapproval-routing.module */
      "lhYH");
      /* harmony import */


      var _leaveapproval_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./leaveapproval.page */
      "TuVu");

      var LeaveapprovalPageModule = /*#__PURE__*/_createClass(function LeaveapprovalPageModule() {
        _classCallCheck(this, LeaveapprovalPageModule);
      });

      LeaveapprovalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _leaveapproval_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeaveapprovalPageRoutingModule"]],
        declarations: [_leaveapproval_page__WEBPACK_IMPORTED_MODULE_6__["LeaveapprovalPage"]]
      })], LeaveapprovalPageModule);
      /***/
    },

    /***/
    "KzZC":
    /*!*************************************************************!*\
      !*** ./src/app/pages/leaveapproval/leaveapproval.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function KzZC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsZWF2ZWFwcHJvdmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFjO0VBQ2Qsc0JBQWlCO0VBQ2pCLHFCQUFnQjtFQUNoQixtQkFBYztBQUNsQjs7QUFFQTtFQUNJLGFBQWE7RUFDYixjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksa0JBQWE7RUFDYixjQUFjO0FBQ2xCIiwiZmlsZSI6ImxlYXZlYXBwcm92YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyNnB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiAjNDM0MzQzO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogIzJDOURERTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "TuVu":
    /*!***********************************************************!*\
      !*** ./src/app/pages/leaveapproval/leaveapproval.page.ts ***!
      \***********************************************************/

    /*! exports provided: LeaveapprovalPage */

    /***/
    function TuVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaveapprovalPage", function () {
        return LeaveapprovalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leaveapproval_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leaveapproval.page.html */
      "tZAa");
      /* harmony import */


      var _leaveapproval_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leaveapproval.page.scss */
      "KzZC");
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


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");

      var LeaveapprovalPage = /*#__PURE__*/function () {
        function LeaveapprovalPage(authService, nav, loading, modal, storage, popoverController, router, changeRef, httpService, alertCtrl, toastCtrl) {
          _classCallCheck(this, LeaveapprovalPage);

          this.authService = authService;
          this.nav = nav;
          this.loading = loading;
          this.modal = modal;
          this.storage = storage;
          this.popoverController = popoverController;
          this.router = router;
          this.changeRef = changeRef;
          this.httpService = httpService;
          this.alertCtrl = alertCtrl;
          this.toastCtrl = toastCtrl;
          this.selectTabs = 'pending';
          this.userInfo = {};
          this.leaveMaster = [];
          this.approvedList = [];
          this.pendingList = [];
          this.userData = {};
          this.toggleValue = false;
        }

        _createClass(LeaveapprovalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

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
                      this.userData = this.storage.modalData;
                      console.log(this.userData);
                      this.authService.getUserDataPromise().then(function () {
                        var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        // console.log('USER DATA',res);
                        _this.userInfo = res; //DEBUG

                        _this.userInfo.staff_id = _this.userInfo.staff_id;
                        _this.userInfo.hod = 0; //DEBUG

                        _this.authService.leavedetailPromise({
                          staffid: _this.userInfo.staff_id
                        }).then(function (res) {
                          console.log('abc', res[0]);
                          _this.leaveMaster = res[0];

                          _this.segList(res[0]);

                          _this.segList(res[1]);

                          loader.dismiss();
                        }, function (err) {
                          console.log(err);
                          loader.dismiss();
                        });
                      }, function (err) {
                        loader.dismiss();

                        _this.nav.navigateBack('login');
                      });

                    case 10:
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
              var _this2 = this;

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
                        _this2.ionViewWillEnter(); //Refresh data

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
          key: "segList",
          value: function segList(list) {
            for (var x = 0; x < list.length; x++) {
              if (Number(list[x].approved) == 2) {
                this.approvedList.push(list[x]);
              } else if (Number(list[x].approved) < 2) {
                this.pendingList.push(list[x]);
              }
            }
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

              _this3.presentAlert();

              _this3.changeRef.detectChanges();
            });
          }
        }, {
          key: "checkboxClick",
          value: function checkboxClick(item) {
            if (item.checked) {
              this.approveLeave(), this.presentAlert();
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this4 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      alert = this.alertCtrl.create({
                        subHeader: "Leave Pending for Approval",
                        message: this.userInfo.staff_name,
                        buttons: [{
                          text: 'Cancel',
                          handler: function handler(data) {
                            console.log('Cancel clicked');
                            _this4.toggleValue == false;

                            _this4.modal.dismiss();
                          }
                        }, {
                          text: 'Approved',
                          handler: function handler(data) {
                            console.log('Saved clicked');
                          }
                        }]
                      });

                      if (!(this.toggleValue == true)) {
                        _context3.next = 5;
                        break;
                      }

                      _context3.next = 4;
                      return alert;

                    case 4:
                      _context3.sent.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return LeaveapprovalPage;
      }();

      LeaveapprovalPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      LeaveapprovalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leaveapproval',
        template: _raw_loader_leaveapproval_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leaveapproval_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LeaveapprovalPage);
      /***/
    },

    /***/
    "lhYH":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/leaveapproval/leaveapproval-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: LeaveapprovalPageRoutingModule */

    /***/
    function lhYH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaveapprovalPageRoutingModule", function () {
        return LeaveapprovalPageRoutingModule;
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


      var _leaveapproval_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./leaveapproval.page */
      "TuVu");

      var routes = [{
        path: '',
        component: _leaveapproval_page__WEBPACK_IMPORTED_MODULE_3__["LeaveapprovalPage"]
      }];

      var LeaveapprovalPageRoutingModule = /*#__PURE__*/_createClass(function LeaveapprovalPageRoutingModule() {
        _classCallCheck(this, LeaveapprovalPageRoutingModule);
      });

      LeaveapprovalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LeaveapprovalPageRoutingModule);
      /***/
    },

    /***/
    "tZAa":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaveapproval/leaveapproval.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tZAa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>Leave Approval</ion-title>\r\n    <ion-back-button slot=\"start\"></ion-back-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <ion-list *ngFor=\"let leave of leaveDetail\" >\r\n  <div class=\"cuti\">\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-header></ion-card-header>\r\n      <ion-card-content style=\"overflow: scroll;\">\r\n        <ion-card-title color=\"primary-contrast\" style=\"font-size:20px; text-transform: uppercase;\">\r\n          {{leave.leavetype}}\r\n        </ion-card-title>\r\n        <ion-card-subtitle style=\"text-transform:none\" color=\"primary-contrast\">{{leave.reason}}</ion-card-subtitle>\r\n        <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:15px\"> Total of Days: {{leave.leaveday}}</ion-card-subtitle>\r\n        <a>From: {{leave.datefrom}}</a> <br> <a>To: {{leave.dateend}}</a>\r\n        <ion-button color=\"warning\" expand=\"block\" class=\"main-button\" *ngIf = \"leave.approved === 0; else approved\" >PENDING</ion-button>\r\n        <ng-template #approved>\r\n          <ion-button color=\"success\" expand=\"block\" class=\"main-button\">APPROVED</ion-button>\r\n        </ng-template>\r\n      </ion-card-content>\r\n    </ion-card>\r\n</div> \r\n</ion-list> -->\r\n<ion-list> \r\n<ion-item class=\"item-text-wrap\" *ngFor=\"let item of pendingList\">\r\n  <ion-label (click)='openModal(item)'>\r\n    <h2 style=\"font-weight: bold;\">{{item.reason}}</h2>\r\n    <p>{{item.staff_name}}<p>\r\n    <p>{{item.datefrom}} - {{item.dateend}}<p>\r\n    <p style=\"font-weight: bold;\">{{item.leaveday}} days<p>\r\n  </ion-label>\r\n  <ion-checkbox (ionChange)=\"checkboxClick($event)\" checked></ion-checkbox>\r\n  <!-- <ion-toggle [disabled]='false' [checked]=\"toggleValue\" (ionChange)=\"presentAlert()\" style='zoom:0.8;' (click)=\"approveLeave()\" color=\"secondary\" ></ion-toggle> -->\r\n  <!-- <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon> -->\r\n</ion-item>\r\n<div class=\"ion-text-right\">\r\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button (ionChange)=\"checkboxClick($event)\" type=\"submit\" shape=\"round\" size=\"large\">Submit</ion-fab-button>\r\n  </ion-fab>\r\n</div>\r\n</ion-list>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-leaveapproval-leaveapproval-module-es5.js.map