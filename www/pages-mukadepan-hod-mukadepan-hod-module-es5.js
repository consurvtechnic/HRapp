(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mukadepan-hod-mukadepan-hod-module"], {
    /***/
    "BseU":
    /*!*************************************************************!*\
      !*** ./src/app/pages/mukadepan-hod/mukadepan-hod.module.ts ***!
      \*************************************************************/

    /*! exports provided: MukadepanHodPageModule */

    /***/
    function BseU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MukadepanHodPageModule", function () {
        return MukadepanHodPageModule;
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


      var _mukadepan_hod_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mukadepan-hod-routing.module */
      "oG9v");
      /* harmony import */


      var _mukadepan_hod_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mukadepan-hod.page */
      "qW/p");

      var MukadepanHodPageModule = /*#__PURE__*/_createClass(function MukadepanHodPageModule() {
        _classCallCheck(this, MukadepanHodPageModule);
      });

      MukadepanHodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mukadepan_hod_routing_module__WEBPACK_IMPORTED_MODULE_5__["MukadepanHodPageRoutingModule"]],
        declarations: [_mukadepan_hod_page__WEBPACK_IMPORTED_MODULE_6__["MukadepanHodPage"]]
      })], MukadepanHodPageModule);
      /***/
    },

    /***/
    "hozz":
    /*!*************************************************************!*\
      !*** ./src/app/pages/mukadepan-hod/mukadepan-hod.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function hozz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  position: relative;\n  left: 0;\n  bottom: 10vh;\n  right: 0;\n  top: 2vh;\n}\n\n@media screen and (max-width: 1200px) and (min-width: 450px) {\n  .container {\n    background: white;\n  }\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\nion-button {\n  --border-radius: 30px;\n}\n\n.smalllogo {\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate-reverse both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate-reverse both;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-content ion-refresher-content {\n  color: red;\n  position: relative;\n  align-content: center;\n}\n\n#realTime {\n  margin-bottom: 0px;\n}\n\nion-datetime {\n  padding-top: 0%;\n}\n\n.location {\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-icon {\n  font-size: 35px;\n  color: #2C9DDE;\n}\n\nion-grid {\n  position: relative;\n  margin-top: 40px;\n  margin-bottom: auto;\n}\n\n.rowBawah {\n  font-size: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdWthZGVwYW4taG9kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsWUFBWTtFQUNaLFFBQVE7RUFDUixRQUFRO0FBQ1o7O0FBQUk7RUFOSjtJQU9RLGlCQUFpQjtFQUl2QjtBQUNGOztBQURBO0VBQ0ksa0JBQWE7RUFDYixjQUFjO0FBSWxCOztBQURDO0VBQ0sscUJBQWdCO0FBSXRCOztBQURFO0VBQ0UseUdBQThHO0VBQzlHLGlHQUFzRztFQUN0RyxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUl0Qjs7QUFERTtFQUNFLGtCQUFhO0VBRWIsaURBQWlEO0VBQ2pELCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBRzFCOztBQVRFO0VBU0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFJM0I7O0FBQ0E7RUFDRSxrQkFBa0I7QUFFcEI7O0FBQ0E7RUFDRSxlQUFlO0FBRWpCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFFcEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUVoQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBRXJCOztBQUNBO0VBQ0UsZUFBZTtBQUVqQiIsImZpbGUiOiJtdWthZGVwYW4taG9kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMTB2aDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAydmg7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCkgYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjMkM5RERFO1xyXG4gIH1cclxuXHJcbiBpb24tYnV0dG9uIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsbG9nbyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2UgYm90aDtcclxuICAgIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2UgYm90aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaHJfYmcucG5nJykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaHJfYmcucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gICAgaW9uLXJlZnJlc2hlci1jb250ZW50IHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuI3JlYWxUaW1lIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1kYXRldGltZSB7XHJcbiAgcGFkZGluZy10b3A6IDAlO1xyXG59XHJcblxyXG4ubG9jYXRpb24ge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiAjMkM5RERFO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuLnJvd0Jhd2FoIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "oG9v":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/mukadepan-hod/mukadepan-hod-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: MukadepanHodPageRoutingModule */

    /***/
    function oG9v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MukadepanHodPageRoutingModule", function () {
        return MukadepanHodPageRoutingModule;
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


      var _mukadepan_hod_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mukadepan-hod.page */
      "qW/p");

      var routes = [{
        path: '',
        component: _mukadepan_hod_page__WEBPACK_IMPORTED_MODULE_3__["MukadepanHodPage"]
      }];

      var MukadepanHodPageRoutingModule = /*#__PURE__*/_createClass(function MukadepanHodPageRoutingModule() {
        _classCallCheck(this, MukadepanHodPageRoutingModule);
      });

      MukadepanHodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MukadepanHodPageRoutingModule);
      /***/
    },

    /***/
    "p4Rr":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mukadepan-hod/mukadepan-hod.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function p4Rr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>Home</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"GotoNotityPage()\">\r\n      <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\r\n      <!-- <ion-badge color=\"danger\" style=\"position: absolute; right: -5px; top: -3px;\">?</ion-badge> -->\r\n    </ion-buttons>\r\n\r\n        <!-- <span>&nbsp;</span> -->\r\n\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"settingsPopover()\">\r\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"container\">\r\n    <ion-text color=\"primary\" style=\"margin-top: 10px;\">\r\n      <h1 style=\"text-align:center\">DynaConsurv</h1>\r\n    </ion-text>\r\n    <h2 style=\"text-align:center\">Welcome Back, {{displayUserData?.staff_name}}!</h2>\r\n    <p id=\"realTime\" style=\"text-align:center; font-family: 'Georama'!important; font-size:2.1em;\" size=\"big\">{{ today | date: \"HH:mm a\" }}</p>\r\n    <ion-datetime disabled=\"disabled\" style=\"text-align:center; font-family: 'Georama'!important; font-size:1.8em;\" size=\"medium\" display-format= \"DDDD\" [(ngModel)]=\"today\" (ionChange)=\"startTime()\"></ion-datetime>\r\n    <img (click)=\"addEvent()\" expand=\"block\" style=\"text-align:center;\" src=\"{{myimage}}\" height=\"150 px\" width=\"150 px\" class=\"smalllogo\" />\r\n    <ion-item color=\"light\" class=\"location\">\r\n      <ion-label>Location:</ion-label>\r\n      <ion-select [(ngModel)]=\"location\" interface=\"popover\">\r\n        <ion-select-option value=\"WFH\">WFH</ion-select-option>\r\n        <ion-select-option value=\"Office\">OFFICE</ion-select-option>\r\n        <ion-select-option value=\"Site\">SITE</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <p><ion-button (click)=\"goToList()\" expand=\"full\" color=\"dark\" style=\"width: fit-content; margin: auto;\">List of Attendees</ion-button></p>\r\n    <ion-grid >\r\n      <ion-row style=\"text-align:center\" *ngFor=\"let a of displayUserData2\">\r\n        <ion-col>\r\n          <ion-icon name=\"enter-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkin | date:'h:mm a'}}</p>\r\n          <p class=\"rowBawah\">Clock In</p>\r\n        </ion-col>\r\n        <ion-col *ngIf = \"a.checkout === 'showToast2()'; else noDisplay\">\r\n          <ion-icon name=\"log-out-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkout | date:'h:mm a'}}</p>\r\n          <p class=\"rowBawah\">Clock Out</p>\r\n        </ion-col>\r\n        <ng-template #noDisplay>\r\n          <ion-col>\r\n            <ion-icon name=\"log-out-outline\"></ion-icon>\r\n            <p style=\"font-weight: bolder;\">-</p>\r\n            <p class=\"rowBawah\">Clock Out</p>\r\n          </ion-col>\r\n        </ng-template>\r\n        <ion-col>\r\n          <ion-icon name=\"location-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{ a.location }}</p>\r\n          <p class=\"rowBawah\" >Location</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <p style=\"text-align:center; color: brown;\">Check Out Time: before 6.30PM</p>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<!-- <ion-content style=\"overflow: scroll;\">\r\n  <div class=\"container\">\r\n    <ion-text color=\"primary\" style=\"margin-top: 10px;\">\r\n      <h1 style=\"text-align:center\">DynaConsurv</h1>\r\n    </ion-text>\r\n   \r\n    <h2 style=\"text-align:center\">Welcome Back, {{displayUserData?.staff_name}}!</h2>\r\n    <img src=\"assets/images/home1.png\"  class=\"smalllogo\"/>\r\n    <p><ion-button (click)=\"goToList()\" expand=\"full\" color=\"dark\" style=\"width: fit-content; margin: auto;\">List of Attendees</ion-button></p>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col col-6>\r\n          <ion-button (click)=\"showToast1()\" expand=\"block\" (click)=\"checkInAction()\" color=\"secondary\">Check In</ion-button>\r\n        </ion-col>\r\n        <ion-col col-6>\r\n          <ion-button (click)=\"showToast2()\" expand=\"block\" (click)=\"checkOutAction()\"color=\"secondary\">Check Out</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-text color=\"dark\">\r\n      <p style=\"text-align:center\">STATUS:</p>\r\n    </ion-text>\r\n    <ion-text color=\"success\">\r\n      <h1 style=\"text-align:center\" id=\"status\">None</h1>\r\n    </ion-text>\r\n      \r\n\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let tran of transactions\">      \r\n          <p *ngIf=\" a.checkInAction == 'showToast1'\" > You have redeemed  {{a.checkin | date:'EEEE, h:mm a, dd/MM/yyyy '}} points.  </p>\r\n          <p *ngIf=\" a.checkOutAction == 'showToast2'\" > You have earned  {{a.checkout | date:'EEEE, h:mm a, dd/MM/yyyy '}}} points.  </p>  \r\n        </ion-item>\r\n      </ion-list>\r\n  \r\n    <p><ion-button (click)=\"goToList()\" expand=\"block\" color=\"secondary\" style=\"width: fit-content; margin: auto;\">List of Attendees</ion-button></p> -->\r\n    <!-- <p><ion-button (click)=\"showToast3()\" expand=\"block\" >Leave</ion-button></p> \r\n  </div>\r\n</ion-content> -->\r\n";
      /***/
    },

    /***/
    "qW/p":
    /*!***********************************************************!*\
      !*** ./src/app/pages/mukadepan-hod/mukadepan-hod.page.ts ***!
      \***********************************************************/

    /*! exports provided: MukadepanHodPage */

    /***/
    function qWP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MukadepanHodPage", function () {
        return MukadepanHodPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mukadepan_hod_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mukadepan-hod.page.html */
      "p4Rr");
      /* harmony import */


      var _mukadepan_hod_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mukadepan-hod.page.scss */
      "hozz");
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

      var MukadepanHodPage = /*#__PURE__*/function () {
        function MukadepanHodPage(router, toastCtrl, authService, storageService, nav, loading, popoverController, changeRef) {
          _classCallCheck(this, MukadepanHodPage);

          this.router = router;
          this.toastCtrl = toastCtrl;
          this.authService = authService;
          this.storageService = storageService;
          this.nav = nav;
          this.loading = loading;
          this.popoverController = popoverController;
          this.changeRef = changeRef;
          this.showStatus = false;
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
          this.postDataa = {
            staff_id: '',
            action: 2
          };
          this.leaveDetail = {};
          this.today = new Date();
          this.myimage = 'assets/images/clock_in.png';
          this.startTime();
        }

        _createClass(MukadepanHodPage, [{
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
                        name: 'edupala'
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
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
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
                      this.authService.getUserDataPromise().then(function () {
                        var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        // console.log(res);
                        _this.userInfo = res;

                        _this.authService.leavedetailPromise({
                          staffid: _this.userInfo.staff_id
                        }).then(function (res) {
                          console.log(res);
                          _this.leaveDetail = res[0];
                          loader.dismiss();
                        }, function (err) {
                          loader.dismiss();
                          console.log(err);
                        });
                      }, function (err) {
                        _this.nav.navigateBack('login');

                        loader.dismiss();
                      });
                      loader.dismiss();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.authService.getUserDataPromise().then(function (res) {
              _this2.displayUserData = res; // this.checkData.staff_id = this.displayUserData.staff_id; 

              _this2.sid = _this2.displayUserData.staff_id;

              _this2.authService.listName({
                staff_id: _this2.sid,
                action: 2
              }).subscribe(function (res) {
                console.log('goHistory', res);
                var temp = [];
                res.results.forEach(function (value) {
                  console.log(value);
                  temp.push({
                    staff_name: value.staff_name,
                    checkin: new Date(value.checkin),
                    checkout: new Date(value.checkout),
                    location: value.location
                  });
                });
                _this2.displayUserData2 = temp;
                console.log(_this2.displayUserData2);
              });
              /*this.authService.userData$.subscribe((res: any) => {
                this.displayUserData2 = res.results;
                console.log(res);
                
              })*/

            });
          }
          /*this.authService.login(this.postData).subscribe((res: any) => {
                console.log('here',res)
                if(Array.isArray(res)) {
                  this.storageService.store(AuthConstants.AUTH, res[0]);
                  this.router.navigate(['./home/mukadepan']);
                } else {
                  this.toastService.presentToast('Incorrect Name or Password');
                    }
                  }*/

        }, {
          key: "startTime",
          value: function startTime() {
            var intervalVar = setInterval(function () {
              this.today = new Date().toISOString();
            }.bind(this), 500);
          }
        }, {
          key: "addEvent",
          value: function addEvent() {
            if (this.myimage == 'assets/images/clock_in.png') {
              this.showToast1();
              this.checkInAction();
              this.myimage = 'assets/images/clock_out.png';
            } else {
              this.showToast2();
              this.checkOutAction();
              this.myimage = 'assets/images/clock_in.png';
            }
          }
        }, {
          key: "checkInAction",
          value: function checkInAction() {
            //  let checkInData={
            //  this.postData.staff_id = this.displayUserData.staff_id;
            //  this.postData.action = 0;
            //  this.postData.location = this.location;
            //  }
            //let data = this.authService.getUserData();
            //console.log('i am clicked',this.displayUserData.staff_id);
            this.postData.staff_id = this.displayUserData.staff_id;
            this.postData.action = 0;
            this.postData.location = this.location;
            this.authService.checkIn(this.postData).subscribe(function (res) {
              // this.authService.getUserData();
              // this.changeRef.detectChanges();
              console.log('checkin', res);
            });
          }
        }, {
          key: "checkOutAction",
          value: function checkOutAction() {
            var _this3 = this;

            //  let checkOutData={
            this.postData.staff_id = this.displayUserData.staff_id;
            this.postData.action = 1;
            this.postData.location = this.location.data; //  }
            // this.postData.staff_id = this.displayUserData.staff_id;
            // this.postData.action = 1;

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
        }]);

        return MukadepanHodPage;
      }();

      MukadepanHodPage.ctorParameters = function () {
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      MukadepanHodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mukadepan-hod',
        template: _raw_loader_mukadepan_hod_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mukadepan_hod_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MukadepanHodPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-mukadepan-hod-mukadepan-hod-module-es5.js.map