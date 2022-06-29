(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  margin-top: 5%;\n}\n\n.logo img {\n  height: 200px;\n}\n\n.form-container {\n  margin-top: 15px;\n  margin-bottom: 1px;\n}\n\n.main-button {\n  margin-top: 10px;\n}\n\n.myCustomSelect {\n  max-width: 100% !important;\n}\n\nion-toolbar {\n  --border-width: 0 !important;\n  color: #2C9DDE;\n}\n\n.header-md::after {\n  background: none !important;\n}\n\n.container h1 {\n  margin-top: 0;\n}\n\n.backbtn {\n  margin-left: 20px;\n  size: 10%;\n}\n\n.form-container {\n  margin-top: 28px;\n}\n\n.form-container ion-item {\n  --padding-start: 0;\n  --border-color: #DADADA;\n}\n\n.form-container ion-item ion-label {\n  color: #A6A6A6;\n}\n\n.form-container ion-item ion-icon {\n  margin-top: auto;\n  color: #c6cbd4;\n}\n\n.form-container ion-button {\n  margin-top: 48px;\n}\n\n.sign-up {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sign-up ion-button {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUZBO0VBR0UsYUFBYTtBQUdmOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUVwQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUVsQjs7QUFDQTtFQUNFLDBCQUEwQjtBQUU1Qjs7QUFFQTtFQUNFLDRCQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFHQTtFQUNFLDJCQUEyQjtBQUE3Qjs7QUFHQTtFQUNFLGFBQWE7QUFBZjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0FBQVg7O0FBR0E7RUFDRSxnQkFBZ0I7QUFBbEI7O0FBR0E7RUFDRSxrQkFBZ0I7RUFDaEIsdUJBQWU7QUFBakI7O0FBR0E7RUFDRSxjQUFjO0FBQWhCOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFBaEI7O0FBR0E7RUFDRSxnQkFBZ0I7QUFBbEI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUFyQjs7QUFHQTtFQUNFLFNBQVM7QUFBWCIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBpbWd7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxufVxyXG5cclxuLm1haW4tYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubXlDdXN0b21TZWxlY3R7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4vLyBUaGlzIHdpbGwgcmVtb3ZlIGlPUyBIZWFkZXIgTGluZVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzJDOURERTtcclxufVxyXG5cclxuLy8gUmVtb3ZpbmcgQW5kcm9pZCBIZWFkZXIgTGluZVxyXG4uaGVhZGVyLW1kOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVyIGgxIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uYmFja2J0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgc2l6ZTogMTAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDI4cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiAjREFEQURBO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBjb2xvcjogI0E2QTZBNjtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIGNvbG9yOiAjYzZjYmQ0O1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNDhweDtcclxufVxyXG5cclxuLnNpZ24tdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZ24tdXAgaW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-content class=\"ion-padding ion-text-center\">\r\n\r\n  <div class=\"logo\">\r\n  <img src=\"assets/images/hr.png\"/>\r\n    <h1>DynaConsurv HR App</h1>\r\n  </div>\r\n\r\n  <div class=\"form\">\r\n    <ion-item lines='none'>\r\n      <ion-input [(ngModel)]=\"postData.username\" placeholder='username'></ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines='none'>\r\n      <ion-input [(ngModel)]=\"postData.password\" placeholder='password' type='password'></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"block\" color=\"dark\" (click)=\"loginAction()\">Login</ion-button>\r\n  </div>\r\n\r\n<form>-->\r\n<!--  <ion-list>-->\r\n<!--  <ion-item>-->\r\n<!--  <ion-label position=\"stacked\" padding='true'>Username</ion-label>-->\r\n<!--  <ion-input autocomplete=\"off\" name=\"username\" type=\"text\" [(ngModel)]=\"postData.username\"></ion-input>-->\r\n<!--  </ion-item>-->\r\n\r\n<!--  <ion-item>-->\r\n<!--  <ion-label position=\"stacked\" padding='true'>Password</ion-label>-->\r\n<!--  <ion-input autocomplete=\"off\" name=\"password\" type=\"password\" [(ngModel)]=\"postData.password\"></ion-input>-->\r\n<!--  </ion-item>-->\r\n<!--  </ion-list>-->\r\n\r\n<!--  </form>-->\r\n<!-- </ion-content> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content style=\"overflow: scroll;\" class=\"ion-padding ion-text-center\">\r\n\r\n  <div class=\"logo\">\r\n    <img src=\"assets/images/hr.png\"/>\r\n      <h1>DynaConsurv HR App</h1>\r\n    </div>\r\n\r\n  <div class=\"ion-padding container\">\r\n\r\n    <div class=\"form-container\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">username</ion-label>\r\n        <ion-input name=\"username\" type=\"text\" [(ngModel)]=\"postData.username\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">password</ion-label>\r\n        <ion-input [(ngModel)]=\"postData.password\" [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\r\n        <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()' slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item class=\"company\">\r\n        <ion-label>company:</ion-label>\r\n        <ion-select class= \"myCustomSelect\" [(ngModel)]=\"company\" interface=\"action-sheet\">\r\n          <ion-select-option value=\"dyna\">Dyna Segmen</ion-select-option>\r\n          <ion-select-option value=\"consurv\">Consurv Technic</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-button color=\"secondary\" expand=\"block\" class=\"main-button\" (click)=\"loginAction()\">Log in</ion-button>\r\n    </div>\r\n     <ion-grid>\r\n      <ion-row>\r\n        <ion-col col-6>\r\n          <ion-text class=\"ion-no-margin\">Register a new user?</ion-text>\r\n        </ion-col>\r\n        <ion-col col-6>\r\n          <ion-text class=\"ion-no-margin\" style=\"font-size: small;\" expand=\"block\" color=\"secondary\">Create New Account</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col col-6>\r\n          <ion-text (click)=\"showToast2()\" expand=\"block\" color=\"secondary\">Forgot Password?</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <!-- <ion-button (click)=\"navigateToHRadmin()\">HR Admin</ion-button>\r\n    <ion-button (click)=\"navigateToManager()\">Manager</ion-button> -->\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config/auth-constant */ "5Fp5");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/storage.service */ "n90K");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/toast.service */ "2g2N");










let LoginPage = class LoginPage {
    constructor(router, authService, storageService, toastService, nav) {
        this.router = router;
        this.authService = authService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.nav = nav;
        this.postData = {
            username: '',
            password: '',
            gsm: '0',
        };
        // ionViewWillEnter()
        // {
        // }
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    ngOnInit() {
        this.authService.userData$.subscribe((res) => {
            this.displayUserData = res;
        });
        // this.authService.getUserDataPromise()
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
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    validateInputs() {
        let username = this.postData.username.trim();
        let password = this.postData.password.trim();
        let gsm = 1; //this.postData.password.trim();
        console.log(this.postData.username, this.postData.password, this.postData.gsm);
        return (this.postData.username && this.postData.password
            && username.length > 0 && password.length > 0);
    }
    loginAction() {
        if (this.validateInputs()) {
            this.authService.login(this.postData).subscribe((res) => {
                console.log('here', res);
                if (res.result[0].level == 0) {
                    this.storageService.store(src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].AUTH, res.result);
                    this.router.navigate(['./home/mukadepan']);
                }
                else if (res.result[0].level == 1) {
                    this.storageService.store(src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].AUTH, res.result);
                    this.router.navigate(['./home-manager/mukadepan']);
                }
                else if (res.result[0].level == 2) {
                    this.storageService.store(src_app_config_auth_constant__WEBPACK_IMPORTED_MODULE_6__["AuthConstants"].AUTH, res.result);
                    this.router.navigate(['./home-boss/mukadepan']);
                }
                else {
                    this.toastService.presentToast('Incorrect Name or Password');
                }
            }, (error) => {
                this.toastService.presentToast("Network Connection Error");
            });
        }
        else {
            this.toastService.presentToast('Please Give Some Information');
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map