(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-hradmin-home-hradmin-module"], {
    /***/
    "4bGK":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-hradmin/home-hradmin.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function bGK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-menu side=\"start\" content-id=\"main-content\">\n  <!-- <ion-header>\n    <ion-toolbar translucent>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n  <ion-content>\n    <div class=\"menu-header-bg\"></div>\n    <div class=\"header-content\">\n      <img src=\"assets/images/user.png\" alt=\"\">\n      <ion-label>\n        <h2>Ms. Farahin</h2>\n        <p>HR Manager (admin) </p>\n      </ion-label>\n    </div>\n    <div class=\"action-button\">\n      <ion-button (click)=\"navigateToAddStaff()\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon> Add Staff\n      </ion-button>\n    </div>\n    <ion-list class=\"menu-items\" lines=\"none\">\n      <ion-item (click)=\"navigateToDashboard()\">\n        <ion-icon name=\"home-outline\" ></ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-item>\n      <ion-item class=\"active\" (click)=\"navigateToStaff()\">\n        <ion-icon name=\"person-outline\" ></ion-icon>\n        <ion-label>Staff</ion-label>\n      </ion-item>\n      <ion-item (click)=\"navigateToLeaveRules()\">\n        <ion-icon name=\"bag-check-outline\" ></ion-icon>\n        <ion-label>Leave Rules</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"calendar-clear-outline\" ></ion-icon>\n        <ion-label>Leave Balance</ion-label>\n      </ion-item>\n      <ion-item (click)=\"signOut()\">\n        <ion-icon name=\"exit-outline\" ></ion-icon>\n        <ion-label>Log out</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Dashboard</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"ion-padding\">\n    <ion-button expand=\"block\" onclick=\"openMenu()\">Open Menu</ion-button>\n  </ion-content>\n</div>";
      /***/
    },

    /***/
    "5ZJT":
    /*!*************************************************************!*\
      !*** ./src/app/home-hradmin/home-hradmin-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: HomeHRadminPageRoutingModule */

    /***/
    function ZJT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeHRadminPageRoutingModule", function () {
        return HomeHRadminPageRoutingModule;
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


      var _home_hradmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home-hradmin.page */
      "TC1P");

      var routes = [{
        path: '',
        component: _home_hradmin_page__WEBPACK_IMPORTED_MODULE_3__["HomeHRadminPage"]
      }];

      var HomeHRadminPageRoutingModule = function HomeHRadminPageRoutingModule() {
        _classCallCheck(this, HomeHRadminPageRoutingModule);
      };

      HomeHRadminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomeHRadminPageRoutingModule);
      /***/
    },

    /***/
    "EUcd":
    /*!*****************************************************!*\
      !*** ./src/app/home-hradmin/home-hradmin.module.ts ***!
      \*****************************************************/

    /*! exports provided: HomeHRadminPageModule */

    /***/
    function EUcd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeHRadminPageModule", function () {
        return HomeHRadminPageModule;
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


      var _home_hradmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-hradmin-routing.module */
      "5ZJT");
      /* harmony import */


      var _home_hradmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-hradmin.page */
      "TC1P");
      /* harmony import */


      var _home_hradmin_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home-hradmin.router */
      "sNJq");

      var HomeHRadminPageModule = function HomeHRadminPageModule() {
        _classCallCheck(this, HomeHRadminPageModule);
      };

      HomeHRadminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_hradmin_router__WEBPACK_IMPORTED_MODULE_7__["HomeAdminRouter"], _home_hradmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeHRadminPageRoutingModule"]],
        declarations: [_home_hradmin_page__WEBPACK_IMPORTED_MODULE_6__["HomeHRadminPage"]]
      })], HomeHRadminPageModule);
      /***/
    },

    /***/
    "TC1P":
    /*!***************************************************!*\
      !*** ./src/app/home-hradmin/home-hradmin.page.ts ***!
      \***************************************************/

    /*! exports provided: HomeHRadminPage */

    /***/
    function TC1P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeHRadminPage", function () {
        return HomeHRadminPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_hradmin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home-hradmin.page.html */
      "4bGK");
      /* harmony import */


      var _home_hradmin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-hradmin.page.scss */
      "jQjD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var HomeHRadminPage = /*#__PURE__*/function () {
        function HomeHRadminPage(authService, router, popoverController) {
          _classCallCheck(this, HomeHRadminPage);

          this.authService = authService;
          this.router = router;
          this.popoverController = popoverController;
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

        _createClass(HomeHRadminPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "mintakCuti",
          value: function mintakCuti() {}
        }, {
          key: "navigateToDashboard",
          value: function navigateToDashboard() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.router.navigate(['./mukadepan-admin']);

                    case 2:
                      console.log('button is clicked');

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "navigateToStaff",
          value: function navigateToStaff() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.router.navigate(['./staff']);

                    case 2:
                      console.log('button is clicked');

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "navigateToAddStaff",
          value: function navigateToAddStaff() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.router.navigate(['./signup']);

                    case 2:
                      console.log('button is clicked');

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "navigateToLeaveRules",
          value: function navigateToLeaveRules() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.router.navigate(['./leaverules']);

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
        }, {
          key: "signOut",
          value: function signOut() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.authService.logout();

                    case 2:
                      this.popoverController.dismiss();

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return HomeHRadminPage;
      }();

      HomeHRadminPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }];
      };

      HomeHRadminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-hradmin',
        template: _raw_loader_home_hradmin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_hradmin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeHRadminPage);
      /***/
    },

    /***/
    "jQjD":
    /*!*****************************************************!*\
      !*** ./src/app/home-hradmin/home-hradmin.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function jQjD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-family: lato;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #7590d6;\n  background: linear-gradient(90deg, #7590d6 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50px;\n  border: 7px solid #5e7ccc;\n  margin-right: 14px;\n}\n\n.header-content h2 {\n  font-weight: 300px;\n  color: #fff;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.action-button ion-button {\n  text-transform: capitalize;\n  font-weight: 300;\n  --background: #628cff;\n  --border-radius: 7px;\n  --box-shadow: none;\n}\n\n.action-button ion-icon {\n  margin-right: 1px;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-icon {\n  margin-right: 20px;\n  color: #86979f;\n}\n\n.menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\n.menu-items .active {\n  border-left: 5px solid;\n  color: #628cff;\n  padding-left: 15px;\n}\n\n.menu-items .active ion-icon {\n  color: #628cff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUtaHJhZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw0REFBNEQ7RUFDNUQsZ0RBQWdEO0VBQ2hELHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3ZCOztBQU5BO0VBUVEsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUUxQjs7QUFkQTtFQWdCUSxrQkFBa0I7RUFDbEIsV0FBVztBQUVuQjs7QUFuQkE7RUFxQlEsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBRTdCOztBQUVBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDdkI7O0FBSkE7RUFNUSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLHFCQUFhO0VBQ2Isb0JBQWdCO0VBQ2hCLGtCQUFhO0FBRXJCOztBQVpBO0VBY1EsaUJBQWlCO0FBRXpCOztBQUVBO0VBQ0ksV0FBVztBQUNmOztBQUZBO0VBSVEsa0JBQWtCO0VBQ2xCLGNBQWM7QUFFdEI7O0FBUEE7RUFTUSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBRTNCOztBQVpBO0VBY1Esc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7QUFFMUI7O0FBbEJBO0VBbUJZLGNBQWM7QUFHMUIiLCJmaWxlIjoiaG9tZS1ocmFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xufVxuXG4ubWVudS1oZWFkZXItYmcge1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTkwZDY7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzU5MGQ2IDAlLCAjNGQ3MWQ3IDEwMCUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDk4LCAxNDAsIDI1NSwgMC41KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5oZWFkZXItY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzBweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogN3B4IHNvbGlkICM1ZTdjY2M7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICNlNGU0ZTQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICB9XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzYyOGNmZjtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgIH1cbn1cblxuLm1lbnUtaXRlbXMge1xuICAgIG1hcmdpbjogMHB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjODY5NzlmO1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5hY3RpdmUge1xuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkO1xuICAgICAgICBjb2xvcjogIzYyOGNmZjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjI4Y2ZmO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG4iXX0= */";
      /***/
    },

    /***/
    "sNJq":
    /*!*****************************************************!*\
      !*** ./src/app/home-hradmin/home-hradmin.router.ts ***!
      \*****************************************************/

    /*! exports provided: HomeAdminRouter */

    /***/
    function sNJq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeAdminRouter", function () {
        return HomeAdminRouter;
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


      var _home_hradmin_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home-hradmin.page */
      "TC1P");

      var routes = [{
        path: 'home-hradmin',
        component: _home_hradmin_page__WEBPACK_IMPORTED_MODULE_4__["HomeHRadminPage"],
        resolve: {
          userData: _resolver_userData_resolver__WEBPACK_IMPORTED_MODULE_3__["UserDataResolver"]
        },
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
          path: 'mukadepanadmin',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-mukadepan-admin-mukadepan-admin-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-mukadepan-admin-mukadepan-admin-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/mukadepan-admin/mukadepan-admin.module */
            "6EAb")).then(function (m) {
              return m.MukadepanAdminPageModule;
            });
          }
        }, {
          path: 'applyleave',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-applyleave-applyleave-module */
            [__webpack_require__.e("default~approve-modal-approve-modal-module~home-home-module~home-hradmin-home-hradmin-module~home-ma~919c581d"), __webpack_require__.e("common"), __webpack_require__.e("pages-applyleave-applyleave-module")]).then(__webpack_require__.bind(null,
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

      var HomeAdminRouter = function HomeAdminRouter() {
        _classCallCheck(this, HomeAdminRouter);
      };

      HomeAdminRouter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomeAdminRouter);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-hradmin-home-hradmin-module-es5.js.map