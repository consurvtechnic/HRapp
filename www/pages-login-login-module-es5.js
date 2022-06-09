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


      __webpack_exports__["default"] = ".logo {\n  margin-top: 5%;\n}\n.logo img {\n  height: 200px;\n}\n.form-container {\n  margin-top: 15px;\n  margin-bottom: 1px;\n}\n.main-button {\n  margin-top: 10px;\n}\n.myCustomSelect {\n  max-width: 100% !important;\n}\nion-toolbar {\n  --border-width: 0 !important;\n  color: #2C9DDE;\n}\n.header-md::after {\n  background: none !important;\n}\n.container h1 {\n  margin-top: 0;\n}\n.backbtn {\n  margin-left: 20px;\n  size: 10%;\n}\n.form-container {\n  margin-top: 28px;\n}\n.form-container ion-item {\n  --padding-start: 0;\n  --border-color: #DADADA;\n}\n.form-container ion-item ion-label {\n  color: #A6A6A6;\n}\n.form-container ion-item ion-icon {\n  margin-top: auto;\n  color: #c6cbd4;\n}\n.form-container ion-button {\n  margin-top: 48px;\n}\n.sign-up {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.sign-up ion-button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFBRTtFQUNBLGFBQUE7QUFFRjtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtBQUNGO0FBRUE7RUFDRSwwQkFBQTtBQUNGO0FBR0E7RUFDRSw0QkFBQTtFQUNBLGNBQUE7QUFBRjtBQUlBO0VBQ0UsMkJBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtBQURGO0FBSUE7RUFDRSxpQkFBQTtFQUNBLFNBQUE7QUFERjtBQUlBO0VBQ0UsZ0JBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQURGO0FBSUE7RUFDRSxjQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURGO0FBSUE7RUFDRSxTQUFBO0FBREYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgaW1ne1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcbi5tYWluLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm15Q3VzdG9tU2VsZWN0e1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuLy8gVGhpcyB3aWxsIHJlbW92ZSBpT1MgSGVhZGVyIExpbmVcclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMyQzlEREU7XHJcbn1cclxuXHJcbi8vIFJlbW92aW5nIEFuZHJvaWQgSGVhZGVyIExpbmVcclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lciBoMSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmJhY2tidG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIHNpemU6IDEwJTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAyOHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLWJvcmRlci1jb2xvcjogI0RBREFEQTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgY29sb3I6ICNBNkE2QTY7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBjb2xvcjogI2M2Y2JkNDtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGlvbi1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDQ4cHg7XHJcbn1cclxuXHJcbi5zaWduLXVwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWduLXVwIGlvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */";
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


      __webpack_exports__["default"] = "<!-- <ion-content class=\"ion-padding ion-text-center\">\r\n\r\n  <div class=\"logo\">\r\n  <img src=\"assets/images/hr.png\"/>\r\n    <h1>DynaConsurv HR App</h1>\r\n  </div>\r\n\r\n  <div class=\"form\">\r\n    <ion-item lines='none'>\r\n      <ion-input [(ngModel)]=\"postData.username\" placeholder='username'></ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines='none'>\r\n      <ion-input [(ngModel)]=\"postData.password\" placeholder='password' type='password'></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"block\" color=\"dark\" (click)=\"loginAction()\">Login</ion-button>\r\n  </div>\r\n\r\n<form>-->\r\n<!--  <ion-list>-->\r\n<!--  <ion-item>-->\r\n<!--  <ion-label position=\"stacked\" padding='true'>Username</ion-label>-->\r\n<!--  <ion-input autocomplete=\"off\" name=\"username\" type=\"text\" [(ngModel)]=\"postData.username\"></ion-input>-->\r\n<!--  </ion-item>-->\r\n\r\n<!--  <ion-item>-->\r\n<!--  <ion-label position=\"stacked\" padding='true'>Password</ion-label>-->\r\n<!--  <ion-input autocomplete=\"off\" name=\"password\" type=\"password\" [(ngModel)]=\"postData.password\"></ion-input>-->\r\n<!--  </ion-item>-->\r\n<!--  </ion-list>-->\r\n\r\n<!--  </form>-->\r\n<!-- </ion-content> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content style=\"overflow: scroll;\" class=\"ion-padding ion-text-center\">\r\n\r\n  <div class=\"logo\">\r\n    <img src=\"assets/images/hr.png\"/>\r\n      <h1>DynaConsurv HR App</h1>\r\n    </div>\r\n\r\n  <div class=\"ion-padding container\">\r\n\r\n    <div class=\"form-container\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">username</ion-label>\r\n        <ion-input name=\"username\" type=\"text\" [(ngModel)]=\"postData.username\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">password</ion-label>\r\n        <ion-input [(ngModel)]=\"postData.password\" [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\r\n        <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()' slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item class=\"company\">\r\n        <ion-label>company:</ion-label>\r\n        <ion-select class= \"myCustomSelect\" [(ngModel)]=\"company\" interface=\"action-sheet\">\r\n          <ion-select-option value=\"dyna\">Dyna Segmen</ion-select-option>\r\n          <ion-select-option value=\"consurv\">Consurv Technic</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-button color=\"secondary\" expand=\"block\" class=\"main-button\" (click)=\"loginAction()\">Log in</ion-button>\r\n    </div>\r\n     <ion-grid>\r\n      <ion-row>\r\n        <ion-col col-6>\r\n          <ion-text class=\"ion-no-margin\">Register a new user?</ion-text>\r\n        </ion-col>\r\n        <ion-col col-6>\r\n          <ion-text class=\"ion-no-margin\" style=\"font-size: small;\" expand=\"block\" color=\"secondary\">Create New Account</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col col-6>\r\n          <ion-text (click)=\"showToast2()\" expand=\"block\" color=\"secondary\">Forgot Password?</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <!-- <ion-button (click)=\"navigateToHRadmin()\">HR Admin</ion-button>\r\n    <ion-button (click)=\"navigateToManager()\">Manager</ion-button> -->\r\n  </div>\r\n</ion-content>";
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