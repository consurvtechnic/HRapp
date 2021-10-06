(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "HYnJ":
    /*!*************************************!*\
      !*** ./src/app/home/home.router.ts ***!
      \*************************************/

    /*! exports provided: HomeRouter */

    /***/
    function HYnJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRouter", function () {
        return HomeRouter;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");
      /* harmony import */


      var _guards_home_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../guards/home.guard */
      "nvHE");

      var routes = [{
        path: 'home',
        component: _home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"],
        resolve: {
          userData: _resolver_userData_resolver__WEBPACK_IMPORTED_MODULE_3__["UserDataResolver"]
        },
        canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_5__["HomeGuard"]],
        children: [{
          path: 'mukadepan',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-mukadepan-mukadepan-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-mukadepan-mukadepan-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/mukadepan/mukadepan.module */
            "XSHW")).then(function (m) {
              return m.MukadepanPageModule;
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
            /*! import() | pages-leave-leave-module */
            [__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-leave-leave-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/leave/leave.module */
            "2/E7")).then(function (m) {
              return m.LeavePageModule;
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

      var HomeRouter = function HomeRouter() {
        _classCallCheck(this, HomeRouter);
      };

      HomeRouter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomeRouter);
      /***/
    },

    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"mukadepan\">\n    <ion-icon name=\"home-outline\"></ion-icon>\n    <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"applyleave\">\n    <ion-icon name=\"paper-plane-outline\"></ion-icon>\n    <ion-label (click)=\"mintakCuti()\">Apply Leave</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"leavelist\">\n    <ion-icon name=\"list-outline\"></ion-icon>\n    <ion-label>Leave List</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"calendar\">\n    <ion-icon name=\"Calendar-outline\"></ion-icon>\n    <ion-label>Calendar</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"setting\">\n    <ion-icon name=\"cog-outline\"></ion-icon>\n    <ion-label>Setting</ion-label>\n    </ion-tab-button>\n\n    </ion-tab-bar>\n\n</ion-tabs>\n";
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");
      /* harmony import */


      var _home_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home.router */
      "HYnJ");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_router__WEBPACK_IMPORTED_MODULE_7__["HomeRouter"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .tab-selected {\n  color: #ffffff;\n  background-color: #2C9DDE;\n  border-radius: 30px 50px 0px 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBYVEsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFYeEMiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLy8gaW9uLXRhYi1iYXIge1xuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgIGJvdHRvbTogMDtcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gfVxuXG4gICAgLy8gaW9uLXRhYi1idXR0b24ge1xuICAgIC8vICAgICBtYXgtd2lkdGg6IDU2cHg7XG4gICAgLy8gICAgIG1heC1oZWlnaHQ6IDM2cHg7XG4gICAgLy8gfVxuXG4gICAgLnRhYi1zZWxlY3RlZHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzlEREU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggNTBweCAwcHggMHB4O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "nvHE":
    /*!**************************************!*\
      !*** ./src/app/guards/home.guard.ts ***!
      \**************************************/

    /*! exports provided: HomeGuard */

    /***/
    function nvHE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeGuard", function () {
        return HomeGuard;
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

      var HomeGuard = /*#__PURE__*/function () {
        function HomeGuard(storageService, router) {
          _classCallCheck(this, HomeGuard);

          this.storageService = storageService;
          this.router = router;
        }

        _createClass(HomeGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var _this = this;

            return new Promise(function (resolve) {
              _this.storageService.get(src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH).then(function (res) {
                if (res) {
                  resolve(true);
                } else {
                  _this.router.navigate(['login']);

                  resolve(false);
                }
              })["catch"](function (err) {
                resolve(false);
              });
            });
          }
        }]);

        return HomeGuard;
      }();

      HomeGuard.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      HomeGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], HomeGuard);
      /***/
    },

    /***/
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomePage = /*#__PURE__*/function () {
        function HomePage() {
          _classCallCheck(this, HomePage);

          this.postData = {
            staff_id: '',
            leavetype: '',
            reason: '',
            currentDate: '',
            endDate: '',
            image: '',
            halfday1: '',
            halfday2: ''
          };
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "mintakCuti",
          value: function mintakCuti() {}
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map