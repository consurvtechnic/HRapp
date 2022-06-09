(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setting-setting-module"], {
    /***/
    "UDOt":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function UDOt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar color='primary'>\r\n    <ion-title>Setting</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button share=\"round\" color=\"primary\" (click)=\"logoutAction()\">LOGOUT</ion-button>\r\n  <ion-item>Name: {{displayUserData?.staff_name}}</ion-item>\r\n  <div style=\"margin-top:1em;\" *ngIf=\"showChangePassword==false\" class=\"ion-text-center\">\r\n    <ion-button (click)=\"showChangePassword=true\">\r\n      Change Password kmu?\r\n    </ion-button>\r\n  </div>\r\n  <ion-item color='primary' *ngIf=\"showChangePassword==true\">\r\n    <strong>\r\n      CHANGE PASSWORD\r\n    </strong>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"showChangePassword==true\">\r\n    <ion-label>\r\n      Old Password\r\n    </ion-label>\r\n    <ion-input [(ngModel)]='oldPassword' type=\"password\"></ion-input>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"showChangePassword==true\">\r\n    <ion-label>\r\n      New Password\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"newPassword\" type=\"password\"></ion-input>\r\n  </ion-item>\r\n    <div *ngIf=\"showChangePassword==true\">\r\n      <ion-button color=\"danger\" expand='full' (click)=\"changePassword()\">\r\n        Send New Password\r\n      </ion-button>\r\n    </div>\r\n    <div *ngIf=\"showChangePassword==true\">\r\n      <ion-button expand='full' fill=\"clear\" color=\"dark\" (click)=\"showChangePassword=false\">\r\n        Close\r\n      </ion-button>\r\n    </div>\r\n\r\n</ion-content> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>Settings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list-header>\r\n    <ion-label class=\"ion-text-uppercase\" color=\"ios-lh-labl-gray\">\r\n      User Details\r\n    </ion-label>\r\n  </ion-list-header>\r\n  <ion-list >\r\n    <ion-item lines=\"full\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2 class=\"ion-text-lowercase\" lines=\"none\">{{displayUserData?.staff_name}}</h2>\r\n        <!-- <p class=\"ion-text-lowercase\" lines=\"none\">{{displayUserData?.staff_name}}@consurv.com.my</p> -->\r\n      </ion-label>\r\n      <div class=\"center\">\r\n        <ion-button (click)=\"signOut()\" fill=\"clear\">Log out</ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!-- <ion-list *ngIf=\"!user\">\r\n    <ion-item lines=\"full\">\r\n      <a class=\"link\" (click)=\"loginAction()\">Log in to view</a>\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n  <ion-list-header>\r\n    <ion-label class=\"ion-text-uppercase\" color=\"ios-lh-labl-gray\">\r\n      Communications\r\n    </ion-label>\r\n  </ion-list-header>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-icon name=\"send\" slot=\"start\" color=\"medium\"></ion-icon>\r\n      <ion-label>Push Notifications (coming soon)</ion-label>\r\n      <ion-toggle slot checked></ion-toggle>\r\n    </ion-item>\r\n    <!-- <ion-item>\r\n      <ion-icon name=\"mail\" slot=\"start\" color=\"medium\"></ion-icon>\r\n      <ion-label>Email</ion-label>\r\n      <ion-toggle slot></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"chatbox-ellipses\" slot=\"start\" color=\"medium\"></ion-icon>\r\n      <ion-label>SMS</ion-label>\r\n      <ion-toggle slot checked></ion-toggle>\r\n    </ion-item> -->\r\n  </ion-list>\r\n\r\n  <div style=\"margin-top:1em;\" *ngIf=\"showChangePassword==false\" class=\"ion-text-center\">\r\n    <ion-button color=\"warning\" (click)=\"showChangePassword=true\">\r\n      Change Password?\r\n    </ion-button>\r\n  </div>\r\n  <ion-item color='warning' *ngIf=\"showChangePassword==true\">\r\n    <strong>\r\n      CHANGE PASSWORD\r\n    </strong>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"showChangePassword==true\">\r\n    <ion-label position=\"floating\">\r\n      Old Password\r\n    </ion-label>\r\n    <ion-input [(ngModel)]='oldPassword' [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\r\n    <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()' slot=\"end\"></ion-icon>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"showChangePassword==true\">\r\n    <ion-label position=\"floating\">\r\n      New Password\r\n    </ion-label>\r\n    <ion-input [(ngModel)]=\"newPassword\" [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\r\n    <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()' slot=\"end\"></ion-icon>\r\n  </ion-item>\r\n\r\n    <div *ngIf=\"showChangePassword==true\">\r\n      <ion-button color=\"danger\" expand='full' (click)=\"changePassword()\">\r\n        Send New Password\r\n      </ion-button>\r\n    </div>\r\n    <div *ngIf=\"showChangePassword==true\">\r\n      <ion-button expand='full' fill=\"clear\" color=\"dark\" (click)=\"showChangePassword=false\">\r\n        Close\r\n      </ion-button>\r\n    </div>\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "hBK9":
    /*!*************************************************!*\
      !*** ./src/app/pages/setting/setting.module.ts ***!
      \*************************************************/

    /*! exports provided: SettingPageModule */

    /***/
    function hBK9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPageModule", function () {
        return SettingPageModule;
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


      var _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./setting-routing.module */
      "zhNF");
      /* harmony import */


      var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./setting.page */
      "kSd7");

      var SettingPageModule = function SettingPageModule() {
        _classCallCheck(this, SettingPageModule);
      };

      SettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPageRoutingModule"]],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
      })], SettingPageModule);
      /***/
    },

    /***/
    "kSd7":
    /*!***********************************************!*\
      !*** ./src/app/pages/setting/setting.page.ts ***!
      \***********************************************/

    /*! exports provided: SettingPage */

    /***/
    function kSd7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPage", function () {
        return SettingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./setting.page.html */
      "UDOt");
      /* harmony import */


      var _setting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./setting.page.scss */
      "xQ/8");
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


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SettingPage = /*#__PURE__*/function () {
        function SettingPage(authService, http, router, routerOutlet, modalController) {
          _classCallCheck(this, SettingPage);

          this.authService = authService;
          this.http = http;
          this.router = router;
          this.routerOutlet = routerOutlet;
          this.modalController = modalController;
          this.userInfo = {};
          this.showChangePassword = false;
          this.passwordType = 'password';
          this.passwordIcon = 'eye-off';
        }

        _createClass(SettingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.userData$.subscribe(function (res) {
              _this.displayUserData = res;
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.authService.logout();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            // console.log('User Info',this.userInfo);
            //     URL: http://consurv.no-ip.biz/leave/changepassword
            // Expected variable : username, olpass, newpass
            this.http.post('changepassword', {
              username: this.userInfo.staff_id,
              olpass: this.oldPassword,
              newpass: this.newPassword
            }).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "hideShowPassword",
          value: function hideShowPassword() {
            this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
            this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
          }
        }]);

        return SettingPage;
      }();

      SettingPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRouterOutlet"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }];
      };

      SettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-setting',
        template: _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SettingPage);
      /***/
    },

    /***/
    "xQ/8":
    /*!*************************************************!*\
      !*** ./src/app/pages/setting/setting.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function xQ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/* Workaround for Ionic bug where Card color is set to gray due to \n   ion-content background rule above */\n\nion-card {\n  --background: white !important;\n}\n\n.center {\n  text-align: center;\n}\n\n.card-padding {\n  padding-top: 30px;\n}\n\n.log-in-padding {\n  display: block;\n  margin-top: 20px;\n  margin-left: 20px;\n}\n\n.link {\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFRTtzQ0FBQTs7QUFFQTtFQUNFLDhCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InNldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9ocl9iZy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgLyogV29ya2Fyb3VuZCBmb3IgSW9uaWMgYnVnIHdoZXJlIENhcmQgY29sb3IgaXMgc2V0IHRvIGdyYXkgZHVlIHRvIFxyXG4gICAgIGlvbi1jb250ZW50IGJhY2tncm91bmQgcnVsZSBhYm92ZSAqL1xyXG4gIGlvbi1jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXBhZGRpbmd7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZy1pbi1wYWRkaW5nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAubGluayB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogIzJDOURERTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "zhNF":
    /*!*********************************************************!*\
      !*** ./src/app/pages/setting/setting-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SettingPageRoutingModule */

    /***/
    function zhNF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function () {
        return SettingPageRoutingModule;
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


      var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./setting.page */
      "kSd7");

      var routes = [{
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
      }];

      var SettingPageRoutingModule = function SettingPageRoutingModule() {
        _classCallCheck(this, SettingPageRoutingModule);
      };

      SettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-setting-setting-module-es5.js.map