(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "723k":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "x0XS");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "uxLX");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "EGjV":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content * {\n  font-family: lato;\n}\n\nion-content .main-header {\n  height: 28vh;\n  width: 120%;\n  background: linear-gradient(90deg, var(--ion-color-tertiary) 0%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 10px var(--ion-color-light);\n  border-radius: 0 0 50% 50%;\n  margin-left: -4.5vh;\n  margin-top: -5px;\n}\n\nion-content .main-header div {\n  transform: translateY(2vh);\n}\n\nion-content .main-header div ion-avatar {\n  width: 15vh;\n  height: 15vh;\n  background: var(--ion-color-light);\n  margin-bottom: 5px;\n  border: 7px solid var(--ion-color-light);\n}\n\nion-content ion-row {\n  margin-top: -60px;\n  justify-content: center;\n}\n\nion-content ion-row ion-col ion-item {\n  width: 100%;\n  margin: auto;\n  border: 1px solid var(--ion-color-light);\n  box-shadow: 1px var(--ion-color-dark);\n  border-radius: 5px;\n}\n\nion-content ion-row ion-col ion-item ion-label {\n  font-size: 1.8rem;\n  font-weight: bold;\n}\n\nion-content ion-row ion-col ion-item ion-label p {\n  font-size: 0.7rem;\n}\n\nion-content ion-row ion-col ion-item ion-icon {\n  font-size: 3rem;\n}\n\nion-content ion-list ion-item {\n  margin-top: 1vh;\n}\n\nion-content ion-list ion-item ion-label {\n  color: #2C9DDE;\n  font-size: 0.9rem;\n}\n\nion-content ion-list ion-item ion-label p {\n  margin-top: 5px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.image-center {\n  margin: 0 auto;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\nion-back-button {\n  display: block;\n}\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGlCQUFpQjtBQUF6Qjs7QUFGQTtFQUtRLFlBQVk7RUFDWixXQUFXO0VBQ1gsK0ZBQStGO0VBQy9GLDZDQUE2QztFQUM3QywwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUN4Qjs7QUFaQTtFQWFZLDBCQUEwQjtBQUd0Qzs7QUFoQkE7RUFlZ0IsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUt4RDs7QUF4QkE7RUF3QlEsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUkvQjs7QUE3QkE7RUE0QmdCLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFLbEM7O0FBckNBO0VBa0NvQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBT3JDOztBQTFDQTtFQXFDd0IsaUJBQWlCO0FBU3pDOztBQTlDQTtFQXlDb0IsZUFBZTtBQVNuQzs7QUFsREE7RUFrRFksZUFBZTtBQUkzQjs7QUF0REE7RUFvRGdCLGNBQWM7RUFDZCxpQkFBaUI7QUFNakM7O0FBM0RBO0VBdURvQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQVFyQzs7QUFGQTtFQUNBLGNBQWE7QUFLYjs7QUFGQTtFQUNJLGtCQUFhO0VBQ2IsY0FBYztBQUtsQjs7QUFGQTtFQUNJLGNBQWM7QUFLbEI7O0FBRkM7RUFDRyxrQkFBYTtFQUNiLGlEQUFpRDtFQUNqRCwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUsxQiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgICoge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgfVxyXG4gICAgLm1haW4taGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDI4dmg7XHJcbiAgICAgICAgd2lkdGg6IDEyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpIDAlLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMTAwJSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMTBweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNC41dmg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKTtcclxuICAgICAgICAgICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTV2aDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTV2aDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDdweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJDOURERTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5pbWFnZS1jZW50ZXJ7XHJcbm1hcmdpbjowIGF1dG87XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjMkM5RERFO1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiB9XHJcblxyXG4gaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9ocl9iZy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9Il19 */");

/***/ }),

/***/ "VVTS":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>My Profile</ion-title>\r\n    <ion-back-button slot=\"start\" (click)=\"close()\">\r\n      <ion-icon name=\"close\"></ion-icon>\r\n  </ion-back-button>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\">EDIT</ion-button>\r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-grid class=\"main-header\">\r\n    <div ion-align=\"center\">\r\n      <ion-avatar class=\"image-center\">\r\n        <img src=\"assets/images/user.png\" />\r\n      </ion-avatar>\r\n    </div>\r\n  </ion-grid>\r\n\r\n  <ion-row class=\"ion-padding-horizontal\" >\r\n    <ion-col size=\"6\">\r\n      <ion-item lines=\"none\" class=\"ion-text-center\">\r\n        <ion-icon name=\"calendar-outline\" color=\"primary\"></ion-icon>\r\n        <ion-label>\r\n          {{leaveBalance.data}}\r\n          <p>Leave Balance</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-col>\r\n    <!-- <ion-col size=\"6\">\r\n      <ion-item lines=\"none\" class=\"ion-text-center\">\r\n        <ion-icon name=\"medkit-outline\" color=\"primary\"></ion-icon>\r\n        <ion-label>\r\n          4\r\n          <p>MC Balance</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-col> -->\r\n\r\n  </ion-row>\r\n<ion-card style=\"overflow: scroll;\">\r\n  <ion-card-content>\r\n    <ion-list lines=\"full\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <ion-text>Name</ion-text>\r\n          <p><ion-text color=\"dark\">{{displayUserData?.staff_name}}</ion-text></p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          <ion-text>Designation</ion-text>\r\n          <p><ion-text color=\"dark\">Engineer</ion-text></p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <!-- <ion-item>\r\n        <ion-label>\r\n          <ion-text>Email</ion-text>\r\n          <p><ion-text color=\"dark\" class=\"ion-text-lowercase\">{{displayUserData?.username}}@consurv.com.my</ion-text></p>\r\n        </ion-label>\r\n      </ion-item> -->\r\n      <!-- <ion-item>\r\n        <ion-label>\r\n          <ion-text>Phone Number</ion-text>\r\n          <p><ion-input type=phone color=\"dark\"></ion-input></p>\r\n        </ion-label>\r\n      </ion-item> -->\r\n      \r\n    </ion-list>\r\n  \r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "uxLX":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "VVTS");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "EGjV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let ProfilePage = class ProfilePage {
    constructor(router, authService, http, modalCtrl) {
        this.router = router;
        this.authService = authService;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.leaveBalance = [];
    }
    ngOnInit() {
        const data = this.router.url.split('/');
        console.log(data);
        // if(data[1] == 'home') this.back = true;
        // else this.back = false;
        // this.authService.userData$.subscribe((res: any) => {
        //   this.displayUserData = res;
        // })
    }
    ionViewWillEnter() {
        this.authService.getUserDataPromise()
            .then((res = {}) => {
            // console.log(res);
            this.displayUserData = res;
            this.getBalance();
        });
    }
    getBalance() {
        this.http.get('http://consurv.no-ip.biz:3000/api/leavesummary/' + `${this.displayUserData.staff_id}`)
            .then(res => {
            console.log(res);
            this.leaveBalance = res;
        });
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "x0XS":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "uxLX");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map