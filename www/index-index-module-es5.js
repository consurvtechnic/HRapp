(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"], {
    /***/
    "GHnz":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function GHnz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <router-outlet></router-outlet>\r\n</ion-content>";
      /***/
    },

    /***/
    "HdlW":
    /*!***************************************!*\
      !*** ./src/app/index/index.router.ts ***!
      \***************************************/

    /*! exports provided: IndexRouter */

    /***/
    function HdlW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexRouter", function () {
        return IndexRouter;
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


      var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./index.page */
      "pCgC");
      /* harmony import */


      var _guards_index_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../guards/index.guard */
      "SNid");

      var routes = [{
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"],
        canActivate: [_guards_index_guard__WEBPACK_IMPORTED_MODULE_4__["IndexGuard"]],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-welcome-welcome-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-welcome-welcome-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/welcome/welcome.module */
            "TtBp")).then(function (m) {
              return m.WelcomePageModule;
            });
          }
        }, {
          path: 'login',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-login-login-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/login/login.module */
            "F4UR")).then(function (m) {
              return m.LoginPageModule;
            });
          }
        }, {
          path: 'signup',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-signup-signup-module */
            "pages-signup-signup-module").then(__webpack_require__.bind(null,
            /*! ../pages/signup/signup.module */
            "UUSl")).then(function (m) {
              return m.SignupPageModule;
            });
          }
        }]
      }];

      var IndexRouter = function IndexRouter() {
        _classCallCheck(this, IndexRouter);
      };

      IndexRouter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IndexRouter);
      /***/
    },

    /***/
    "SNid":
    /*!***************************************!*\
      !*** ./src/app/guards/index.guard.ts ***!
      \***************************************/

    /*! exports provided: IndexGuard */

    /***/
    function SNid(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexGuard", function () {
        return IndexGuard;
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


      var src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/config/auth-constant */
      "5Fp5");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/storage.service */
      "n90K");

      var IndexGuard = /*#__PURE__*/function () {
        function IndexGuard(storageService, router) {
          _classCallCheck(this, IndexGuard);

          this.storageService = storageService;
          this.router = router;
        }

        _createClass(IndexGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var _this = this;

            return new Promise(function (resolve) {
              _this.storageService.get(src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH).then(function (res) {
                if (res) {
                  _this.router.navigate(['home/mukadepan']);

                  resolve(false);
                } else resolve(true);
              })["catch"](function (err) {
                resolve(true);
              });
            });
          }
        }]);

        return IndexGuard;
      }();

      IndexGuard.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      IndexGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], IndexGuard);
      /***/
    },

    /***/
    "TxYl":
    /*!***************************************!*\
      !*** ./src/app/index/index.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function TxYl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "nR/L":
    /*!***********************************************!*\
      !*** ./src/app/index/index-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: IndexPageRoutingModule */

    /***/
    function nRL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function () {
        return IndexPageRoutingModule;
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


      var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./index.page */
      "pCgC");

      var routes = [{
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"]
      }];

      var IndexPageRoutingModule = function IndexPageRoutingModule() {
        _classCallCheck(this, IndexPageRoutingModule);
      };

      IndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IndexPageRoutingModule);
      /***/
    },

    /***/
    "pCgC":
    /*!*************************************!*\
      !*** ./src/app/index/index.page.ts ***!
      \*************************************/

    /*! exports provided: IndexPage */

    /***/
    function pCgC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexPage", function () {
        return IndexPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./index.page.html */
      "GHnz");
      /* harmony import */


      var _index_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index.page.scss */
      "TxYl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IndexPage = /*#__PURE__*/function () {
        function IndexPage() {
          _classCallCheck(this, IndexPage);
        }

        _createClass(IndexPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IndexPage;
      }();

      IndexPage.ctorParameters = function () {
        return [];
      };

      IndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-index',
        template: _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_index_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], IndexPage);
      /***/
    },

    /***/
    "rSti":
    /*!***************************************!*\
      !*** ./src/app/index/index.module.ts ***!
      \***************************************/

    /*! exports provided: IndexPageModule */

    /***/
    function rSti(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexPageModule", function () {
        return IndexPageModule;
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


      var _index_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./index.page */
      "pCgC");
      /* harmony import */


      var _index_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./index.router */
      "HdlW");
      /* harmony import */


      var _index_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./index-routing.module */
      "nR/L");

      var IndexPageModule = function IndexPageModule() {
        _classCallCheck(this, IndexPageModule);
      };

      IndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _index_router__WEBPACK_IMPORTED_MODULE_6__["IndexRouter"], _index_routing_module__WEBPACK_IMPORTED_MODULE_7__["IndexPageRoutingModule"]],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_5__["IndexPage"]]
      })], IndexPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=index-index-module-es5.js.map