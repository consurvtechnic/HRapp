(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "F4UR":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function F4UR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "aTZN");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "H+1c":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function H1c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo {\n  margin-top: 5%;\n}\n\n.logo img {\n  height: 200px;\n}\n\n.form-container {\n  margin-top: 15px;\n  margin-bottom: 1px;\n}\n\n.main-button {\n  margin-top: 10px;\n}\n\n.myCustomSelect {\n  max-width: 100% !important;\n}\n\nion-toolbar {\n  --border-width: 0 !important;\n  color: #2C9DDE;\n}\n\n.header-md::after {\n  background: none !important;\n}\n\n.container h1 {\n  margin-top: 0;\n}\n\n.backbtn {\n  margin-left: 20px;\n  size: 10%;\n}\n\n.form-container {\n  margin-top: 28px;\n}\n\n.form-container ion-item {\n  --padding-start: 0;\n  --border-color: #DADADA;\n}\n\n.form-container ion-item ion-label {\n  color: #A6A6A6;\n}\n\n.form-container ion-item ion-icon {\n  margin-top: auto;\n  color: #c6cbd4;\n}\n\n.form-container ion-button {\n  margin-top: 48px;\n}\n\n.sign-up {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sign-up ion-button {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRkE7RUFHRSxhQUFhO0FBR2Y7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBRXBCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBRWxCOztBQUNBO0VBQ0UsMEJBQTBCO0FBRTVCOztBQUVBO0VBQ0UsNEJBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUdBO0VBQ0UsMkJBQTJCO0FBQTdCOztBQUdBO0VBQ0UsYUFBYTtBQUFmOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7QUFBWDs7QUFHQTtFQUNFLGdCQUFnQjtBQUFsQjs7QUFHQTtFQUNFLGtCQUFnQjtFQUNoQix1QkFBZTtBQUFqQjs7QUFHQTtFQUNFLGNBQWM7QUFBaEI7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUFoQjs7QUFHQTtFQUNFLGdCQUFnQjtBQUFsQjs7QUFHQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQXJCOztBQUdBO0VBQ0UsU0FBUztBQUFYIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgaW1ne1xuICBoZWlnaHQ6IDIwMHB4O1xuICB9XG59XG5cbi5mb3JtLWNvbnRhaW5lcntcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4ubWFpbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubXlDdXN0b21TZWxlY3R7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuIH1cblxuLy8gVGhpcyB3aWxsIHJlbW92ZSBpT1MgSGVhZGVyIExpbmVcbmlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMyQzlEREU7XG59XG5cbi8vIFJlbW92aW5nIEFuZHJvaWQgSGVhZGVyIExpbmVcbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIGgxIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmJhY2tidG4ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgc2l6ZTogMTAlO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tYm9yZGVyLWNvbG9yOiAjREFEQURBO1xufVxuXG4uZm9ybS1jb250YWluZXIgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNBNkE2QTY7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBpb24taXRlbSBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGNvbG9yOiAjYzZjYmQ0O1xufVxuXG4uZm9ybS1jb250YWluZXIgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG59XG5cbi5zaWduLXVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaWduLXVwIGlvbi1idXR0b24ge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "TuYN":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function TuYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-content class=\"ion-padding ion-text-center\">\n\n  <div class=\"logo\">\n  <img src=\"assets/images/hr.png\"/>\n    <h1>DynaConsurv HR App</h1>\n  </div>\n\n  <div class=\"form\">\n    <ion-item lines='none'>\n      <ion-input [(ngModel)]=\"postData.username\" placeholder='username'></ion-input>\n    </ion-item>\n\n\n    <ion-item lines='none'>\n      <ion-input [(ngModel)]=\"postData.password\" placeholder='password' type='password'></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"block\" color=\"dark\" (click)=\"loginAction()\">Login</ion-button>\n  </div>\n\n<form>-->\n<!--  <ion-list>-->\n<!--  <ion-item>-->\n<!--  <ion-label position=\"stacked\" padding='true'>Username</ion-label>-->\n<!--  <ion-input autocomplete=\"off\" name=\"username\" type=\"text\" [(ngModel)]=\"postData.username\"></ion-input>-->\n<!--  </ion-item>-->\n\n<!--  <ion-item>-->\n<!--  <ion-label position=\"stacked\" padding='true'>Password</ion-label>-->\n<!--  <ion-input autocomplete=\"off\" name=\"password\" type=\"password\" [(ngModel)]=\"postData.password\"></ion-input>-->\n<!--  </ion-item>-->\n<!--  </ion-list>-->\n\n<!--  </form>-->\n<!-- </ion-content> -->\n\n<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"overflow: scroll;\" class=\"ion-padding ion-text-center\">\n\n  <div class=\"logo\">\n    <img src=\"assets/images/hr.png\"/>\n      <h1>DynaConsurv HR App</h1>\n    </div>\n\n  <div class=\"ion-padding container\">\n\n    <div class=\"form-container\">\n      <ion-item>\n        <ion-label position=\"floating\">username</ion-label>\n        <ion-input name=\"username\" type=\"text\" [(ngModel)]=\"postData.username\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">password</ion-label>\n        <ion-input [(ngModel)]=\"postData.password\" [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\n        <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()' slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item class=\"company\">\n        <ion-label>company:</ion-label>\n        <ion-select class= \"myCustomSelect\" [(ngModel)]=\"company\" interface=\"action-sheet\">\n          <ion-select-option value=\"dyna\">Dyna Segmen</ion-select-option>\n          <ion-select-option value=\"consurv\">Consurv Technic</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-button color=\"secondary\" expand=\"block\" class=\"main-button\" (click)=\"loginAction()\">Log in</ion-button>\n    </div>\n     <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-text class=\"ion-no-margin\">Register a new user?</ion-text>\n        </ion-col>\n        <ion-col col-6>\n          <ion-text class=\"ion-no-margin\" style=\"font-size: small;\" expand=\"block\" color=\"secondary\">Create New Account</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-text (click)=\"showToast2()\" expand=\"block\" color=\"secondary\">Forgot Password?</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- <ion-button (click)=\"navigateToHRadmin()\">HR Admin</ion-button>\n    <ion-button (click)=\"navigateToManager()\">Manager</ion-button> -->\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "aTZN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function aTZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "bP1B":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function bP1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "TuYN");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "H+1c");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/config/auth-constant */
      "5Fp5");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "n90K");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "2g2N");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, authService, storageService, toastService, nav) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.authService = authService;
          this.storageService = storageService;
          this.toastService = toastService;
          this.nav = nav;
          this.postData = {
            username: '',
            password: '',
            gsm: '0'
          }; // ionViewWillEnter()
          // {
          // }

          this.passwordType = 'password';
          this.passwordIcon = 'eye-off';
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.userData$.subscribe(function (res) {
              _this.displayUserData = res;
            }); // this.authService.getUserDataPromise()
            // .then((res:any={})=>{
            //   console.log(res);
            //   // this.userInfo=res;
            //   if(res)
            //   {
            //     this.router.navigate(['./home/mukadepan']);
            //     }
            //   },err=>{
            //     console.log(err);
            //   })
          }
        }, {
          key: "hideShowPassword",
          value: function hideShowPassword() {
            this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
            this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
          }
        }, {
          key: "validateInputs",
          value: function validateInputs() {
            var username = this.postData.username.trim();
            var password = this.postData.password.trim();
            var gsm = 1; //this.postData.password.trim();

            console.log(this.postData.username, this.postData.password, this.postData.gsm);
            return this.postData.username && this.postData.password && username.length > 0 && password.length > 0;
          }
        }, {
          key: "loginAction",
          value: function loginAction() {
            var _this2 = this;

            if (this.validateInputs()) {
              this.authService.login(this.postData).subscribe(function (res) {
                console.log('here', res);

                if (res.result[0].level == 0) {
                  _this2.storageService.store(src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].AUTH, res.result);

                  _this2.router.navigate(['./home/mukadepan']);
                } else if (res.result[0].level == 1) {
                  _this2.storageService.store(src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].AUTH, res.result);

                  _this2.router.navigate(['./home-manager/mukadepan']);
                } else if (res.result[0].level == 2) {
                  _this2.storageService.store(src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].AUTH, res.result);

                  _this2.router.navigate(['./home-boss/mukadepan']);
                } else {
                  _this2.toastService.presentToast('Incorrect Name or Password');
                }
              }, function (error) {
                _this2.toastService.presentToast("Network Connection Error");
              });
            } else {
              this.toastService.presentToast('Please Give Some Information');
            }
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map