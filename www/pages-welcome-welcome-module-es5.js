(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"], {
    /***/
    "F8AR":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function F8AR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content >\r\n  <app-slides></app-slides>\r\n  <app-start></app-start>\r\n</ion-content>";
      /***/
    },

    /***/
    "T2Lb":
    /*!*********************************************************!*\
      !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: WelcomePageRoutingModule */

    /***/
    function T2Lb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function () {
        return WelcomePageRoutingModule;
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


      var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./welcome.page */
      "TxZw");

      var routes = [{
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
      }];

      var WelcomePageRoutingModule = /*#__PURE__*/_createClass(function WelcomePageRoutingModule() {
        _classCallCheck(this, WelcomePageRoutingModule);
      });

      WelcomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WelcomePageRoutingModule);
      /***/
    },

    /***/
    "TtBp":
    /*!*************************************************!*\
      !*** ./src/app/pages/welcome/welcome.module.ts ***!
      \*************************************************/

    /*! exports provided: WelcomePageModule */

    /***/
    function TtBp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
        return WelcomePageModule;
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


      var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./welcome-routing.module */
      "T2Lb");
      /* harmony import */


      var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./welcome.page */
      "TxZw");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");

      var WelcomePageModule = /*#__PURE__*/_createClass(function WelcomePageModule() {
        _classCallCheck(this, WelcomePageModule);
      });

      WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
      })], WelcomePageModule);
      /***/
    },

    /***/
    "TxZw":
    /*!***********************************************!*\
      !*** ./src/app/pages/welcome/welcome.page.ts ***!
      \***********************************************/

    /*! exports provided: WelcomePage */

    /***/
    function TxZw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePage", function () {
        return WelcomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./welcome.page.html */
      "F8AR");
      /* harmony import */


      var _welcome_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./welcome.page.scss */
      "w04Y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WelcomePage = /*#__PURE__*/function () {
        function WelcomePage() {
          _classCallCheck(this, WelcomePage);
        }

        _createClass(WelcomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WelcomePage;
      }();

      WelcomePage.ctorParameters = function () {
        return [];
      };

      WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-welcome',
        template: _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_welcome_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WelcomePage);
      /***/
    },

    /***/
    "w04Y":
    /*!*************************************************!*\
      !*** ./src/app/pages/welcome/welcome.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function w04Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map