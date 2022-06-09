(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
    /***/
    "UUSl":
    /*!***********************************************!*\
      !*** ./src/app/pages/signup/signup.module.ts ***!
      \***********************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function UUSl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "eOyQ");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "XHxw");

      var SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "XHxw":
    /*!*********************************************!*\
      !*** ./src/app/pages/signup/signup.page.ts ***!
      \*********************************************/

    /*! exports provided: SignupPage */

    /***/
    function XHxw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signup.page.html */
      "vfPX");
      /* harmony import */


      var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup.page.scss */
      "bYg9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage() {
          _classCallCheck(this, SignupPage);

          this.name = "";
          this.position = "";
          this.email = "";
          this.password = "";
          this.confirm_password = "";
          this.userCount = "";
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            alert(this.name + ', ' + this.position + ', ' + this.email + ', ' + this.password + ', ' + this.confirm_password + ', ' + this.userCount);
          }
        }, {
          key: "numberOnlyValidation",
          value: function numberOnlyValidation(event) {
            var pattern = /[0-9.,]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              // invalid character, prevent input
              event.preventDefault();
            }
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignupPage);
      /***/
    },

    /***/
    "bYg9":
    /*!***********************************************!*\
      !*** ./src/app/pages/signup/signup.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function bYg9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-family: lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7QUFBSiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "eOyQ":
    /*!*******************************************************!*\
      !*** ./src/app/pages/signup/signup-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function eOyQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "XHxw");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "vfPX":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function vfPX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Create new account</ion-title>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Name</ion-label>\r\n    <ion-input [(ngModel)]=\"name\" type=\"text\" required></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Position</ion-label>\r\n    <ion-input [(ngModel)]=\"position\" type=\"text\" required></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item >\r\n    <ion-label position=\"floating\">Email</ion-label>\r\n    <ion-input [(ngModel)]=\"email\" type=\"text\" required></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Password</ion-label>\r\n    <ion-input [(ngModel)]=\"password\" type=\"text\" required></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Confirm Password</ion-label>\r\n    <ion-input [(ngModel)]=\"confirm_password\" type=\"text\" required></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item >\r\n    <ion-label position=\"floating\">Phone Number</ion-label>\r\n    <ion-input type=\"text\" placeholder=\"Enter number\"\r\n        [(ngModel)]=\"userCount\" \r\n        name=\"userCount\" \r\n        (keypress)=\"numberOnlyValidation($event)\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button class=\"ion-margin-top\" type=\"submit\" expand=\"block\" color=\"light\" (click)=\"onSubmit()\">\r\n    Create Account\r\n  </ion-button>\r\n\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-signup-signup-module-es5.js.map