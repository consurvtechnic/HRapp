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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content * {\n  font-family: lato;\n}\nion-content .main-header {\n  height: 28vh;\n  width: 120%;\n  background: linear-gradient(90deg, var(--ion-color-tertiary) 0%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 10px var(--ion-color-light);\n  border-radius: 0 0 50% 50%;\n  margin-left: -4.5vh;\n  margin-top: -5px;\n}\nion-content .main-header div {\n  transform: translateY(2vh);\n}\nion-content .main-header div ion-avatar {\n  width: 15vh;\n  height: 15vh;\n  background: var(--ion-color-light);\n  margin-bottom: 5px;\n  border: 7px solid var(--ion-color-light);\n}\nion-content ion-row {\n  margin-top: -60px;\n  justify-content: center;\n}\nion-content ion-row ion-col ion-item {\n  width: 100%;\n  margin: auto;\n  border: 1px solid var(--ion-color-light);\n  box-shadow: 1px var(--ion-color-dark);\n  border-radius: 5px;\n}\nion-content ion-row ion-col ion-item ion-label {\n  font-size: 1.8rem;\n  font-weight: bold;\n}\nion-content ion-row ion-col ion-item ion-label p {\n  font-size: 0.7rem;\n}\nion-content ion-row ion-col ion-item ion-icon {\n  font-size: 3rem;\n}\nion-content ion-list ion-item {\n  margin-top: 1vh;\n}\nion-content ion-list ion-item ion-label {\n  color: #2C9DDE;\n  font-size: 0.9rem;\n}\nion-content ion-list ion-item ion-label p {\n  margin-top: 5px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.image-center {\n  margin: 0 auto;\n}\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\nion-back-button {\n  display: block;\n}\nion-content {\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0ZBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFSO0FBQ1E7RUFDSSwwQkFBQTtBQUNaO0FBQVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQUVoQjtBQUVJO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQUFSO0FBRVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQUFoQjtBQUNnQjtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFDcEI7QUFBb0I7RUFDSSxpQkFBQTtBQUV4QjtBQUNnQjtFQUNJLGVBQUE7QUFDcEI7QUFPUTtFQUNJLGVBQUE7QUFMWjtBQU1ZO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBSmhCO0FBS2dCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFIcEI7QUFTQTtFQUNBLGNBQUE7QUFOQTtBQVNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBTko7QUFTQTtFQUNJLGNBQUE7QUFOSjtBQVNDO0VBQ0csa0JBQUE7RUFDQSxpREFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQU5KIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgKiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICB9XHJcbiAgICAubWFpbi1oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMjh2aDtcclxuICAgICAgICB3aWR0aDogMTIwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgMCUsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAxMDAlKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDUwJSA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00LjV2aDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpO1xyXG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXZoO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogN3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tcm93IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMkM5RERFO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmltYWdlLWNlbnRlcntcclxubWFyZ2luOjAgYXV0bztcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICMyQzlEREU7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuIH1cclxuXHJcbiBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2hyX2JnLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH0iXX0= */");

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