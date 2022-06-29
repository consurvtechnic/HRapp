(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-manager-home-manager-module"], {
    /***/
    "3mmL":
    /*!***************************************************!*\
      !*** ./src/app/home-manager/home-manager.page.ts ***!
      \***************************************************/

    /*! exports provided: HomeManagerPage */

    /***/
    function mmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeManagerPage", function () {
        return HomeManagerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_manager_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home-manager.page.html */
      "Qw2y");
      /* harmony import */


      var _home_manager_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-manager.page.scss */
      "b/vs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeManagerPage = /*#__PURE__*/function () {
        function HomeManagerPage() {
          _classCallCheck(this, HomeManagerPage);
        }

        _createClass(HomeManagerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeManagerPage;
      }();

      HomeManagerPage.ctorParameters = function () {
        return [];
      };

      HomeManagerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-manager',
        template: _raw_loader_home_manager_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_manager_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeManagerPage);
      /***/
    },

    /***/
    "5xhe":
    /*!*****************************************************!*\
      !*** ./src/app/home-manager/home-manager.router.ts ***!
      \*****************************************************/

    /*! exports provided: HomeManagerRouter */

    /***/
    function xhe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeManagerRouter", function () {
        return HomeManagerRouter;
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


      var _resolver_userData_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../resolver/userData.resolver */
      "AWzS");
      /* harmony import */


      var _home_manager_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home-manager.page */
      "3mmL");

      var routes = [{
        path: 'home-manager',
        component: _home_manager_page__WEBPACK_IMPORTED_MODULE_4__["HomeManagerPage"],
        resolve: {
          userData: _resolver_userData_resolver__WEBPACK_IMPORTED_MODULE_3__["UserDataResolver"]
        },
        children: [{
          path: 'mukadepan',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-mukadepan-hod-mukadepan-hod-module */
            [__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-mukadepan-hod-mukadepan-hod-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/mukadepan-hod/mukadepan-hod.module */
            "BseU")).then(function (m) {
              return m.MukadepanHodPageModule;
            });
          }
        }, {
          path: 'applyleave',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-applyleave-applyleave-module */
            [__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-applyleave-applyleave-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/applyleave/applyleave.module */
            "xN67")).then(function (m) {
              return m.ApplyleavePageModule;
            });
          }
        }, {
          path: 'leavelist',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-leavelist-leavelist-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-leavelist-leavelist-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/leavelist/leavelist.module */
            "QoW/")).then(function (m) {
              return m.LeavelistPageModule;
            });
          }
        }, {
          path: 'calendar',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-calendar-calendar-module */
            [__webpack_require__.e("default~pages-cal-modal-cal-modal-module~pages-calendar-calendar-module"), __webpack_require__.e("pages-calendar-calendar-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/calendar/calendar.module */
            "awFG")).then(function (m) {
              return m.CalendarPageModule;
            });
          }
        }, {
          path: 'setting',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-setting-setting-module */
            "pages-setting-setting-module").then(__webpack_require__.bind(null,
            /*! ../pages/setting/setting.module */
            "hBK9")).then(function (m) {
              return m.SettingPageModule;
            });
          }
        }]
      }];

      var HomeManagerRouter = /*#__PURE__*/_createClass(function HomeManagerRouter() {
        _classCallCheck(this, HomeManagerRouter);
      });

      HomeManagerRouter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomeManagerRouter);
      /***/
    },

    /***/
    "Qw2y":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-manager/home-manager.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qw2y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n\r\n  <ion-tab-button tab=\"mukadepan\">\r\n  <ion-icon name=\"home-outline\"></ion-icon>\r\n  <ion-label>Home</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button tab=\"applyleave\">\r\n  <ion-icon name=\"paper-plane-outline\"></ion-icon>\r\n  <ion-label (click)=\"mintakCuti()\">Apply Leave</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button tab=\"leavelist\">\r\n  <ion-icon name=\"list-outline\"></ion-icon>\r\n  <ion-label>Leave List</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button tab=\"calendar\">\r\n  <ion-icon name=\"Calendar-outline\"></ion-icon>\r\n  <ion-label>Calendar</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button tab=\"setting\">\r\n  <ion-icon name=\"cog-outline\"></ion-icon>\r\n  <ion-label>Setting</ion-label>\r\n  </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n";
      /***/
    },

    /***/
    "b/vs":
    /*!*****************************************************!*\
      !*** ./src/app/home-manager/home-manager.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function bVs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .tab-selected {\n  color: #ffffff;\n  background-color: #2C9DDE;\n  border-radius: 30px 50px 0px 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUtbWFuYWdlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFpQlEsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFmeEMiLCJmaWxlIjoiaG9tZS1tYW5hZ2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC8vIGlvbi10YWItYmFyIHtcclxuICAgIC8vICAgICBib3JkZXI6IDA7XHJcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAvLyAgICAgcGFkZGluZzogMTVweDtcclxuICAgIC8vICAgICBpb24taWNvbiB7XHJcbiAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAvLyAgICAgbWF4LXdpZHRoOiA1NnB4O1xyXG4gICAgLy8gICAgIG1heC1oZWlnaHQ6IDM2cHg7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLnRhYi1zZWxlY3RlZHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkM5RERFO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggNTBweCAwcHggMHB4O1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "gHsv":
    /*!*****************************************************!*\
      !*** ./src/app/home-manager/home-manager.module.ts ***!
      \*****************************************************/

    /*! exports provided: HomeManagerPageModule */

    /***/
    function gHsv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeManagerPageModule", function () {
        return HomeManagerPageModule;
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


      var _home_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-manager-routing.module */
      "ozkU");
      /* harmony import */


      var _home_manager_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-manager.page */
      "3mmL");
      /* harmony import */


      var _home_manager_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home-manager.router */
      "5xhe");

      var HomeManagerPageModule = /*#__PURE__*/_createClass(function HomeManagerPageModule() {
        _classCallCheck(this, HomeManagerPageModule);
      });

      HomeManagerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeManagerPageRoutingModule"], _home_manager_router__WEBPACK_IMPORTED_MODULE_7__["HomeManagerRouter"]],
        declarations: [_home_manager_page__WEBPACK_IMPORTED_MODULE_6__["HomeManagerPage"]]
      })], HomeManagerPageModule);
      /***/
    },

    /***/
    "ozkU":
    /*!*************************************************************!*\
      !*** ./src/app/home-manager/home-manager-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: HomeManagerPageRoutingModule */

    /***/
    function ozkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeManagerPageRoutingModule", function () {
        return HomeManagerPageRoutingModule;
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


      var _home_manager_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home-manager.page */
      "3mmL");

      var routes = [{
        path: '',
        component: _home_manager_page__WEBPACK_IMPORTED_MODULE_3__["HomeManagerPage"]
      }];

      var HomeManagerPageRoutingModule = /*#__PURE__*/_createClass(function HomeManagerPageRoutingModule() {
        _classCallCheck(this, HomeManagerPageRoutingModule);
      });

      HomeManagerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomeManagerPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-manager-home-manager-module-es5.js.map