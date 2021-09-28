(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approve-modal-approve-modal-module"], {
    /***/
    "EDlG":
    /*!*******************************************************!*\
      !*** ./src/app/approve-modal/approve-modal.module.ts ***!
      \*******************************************************/

    /*! exports provided: ApproveModalPageModule */

    /***/
    function EDlG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApproveModalPageModule", function () {
        return ApproveModalPageModule;
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


      var _approve_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./approve-modal-routing.module */
      "av8i");
      /* harmony import */


      var _approve_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./approve-modal.page */
      "1HE4");

      var ApproveModalPageModule = function ApproveModalPageModule() {
        _classCallCheck(this, ApproveModalPageModule);
      };

      ApproveModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _approve_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApproveModalPageRoutingModule"]],
        declarations: [_approve_modal_page__WEBPACK_IMPORTED_MODULE_6__["ApproveModalPage"]]
      })], ApproveModalPageModule);
      /***/
    },

    /***/
    "av8i":
    /*!***************************************************************!*\
      !*** ./src/app/approve-modal/approve-modal-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ApproveModalPageRoutingModule */

    /***/
    function av8i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApproveModalPageRoutingModule", function () {
        return ApproveModalPageRoutingModule;
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


      var _approve_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./approve-modal.page */
      "1HE4");

      var routes = [{
        path: '',
        component: _approve_modal_page__WEBPACK_IMPORTED_MODULE_3__["ApproveModalPage"]
      }];

      var ApproveModalPageRoutingModule = function ApproveModalPageRoutingModule() {
        _classCallCheck(this, ApproveModalPageRoutingModule);
      };

      ApproveModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ApproveModalPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=approve-modal-approve-modal-module-es5.js.map