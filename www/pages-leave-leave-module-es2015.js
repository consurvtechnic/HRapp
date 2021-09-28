(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leave-leave-module"],{

/***/ "1PB1":
/*!*****************************************************!*\
  !*** ./src/app/pages/leave/leave-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LeavePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavePageRoutingModule", function() { return LeavePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _leave_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leave.page */ "JTSN");




const routes = [
    {
        path: '',
        component: _leave_page__WEBPACK_IMPORTED_MODULE_3__["LeavePage"]
    }
];
let LeavePageRoutingModule = class LeavePageRoutingModule {
};
LeavePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LeavePageRoutingModule);



/***/ }),

/***/ "2/E7":
/*!*********************************************!*\
  !*** ./src/app/pages/leave/leave.module.ts ***!
  \*********************************************/
/*! exports provided: LeavePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavePageModule", function() { return LeavePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _leave_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leave-routing.module */ "1PB1");
/* harmony import */ var _leave_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leave.page */ "JTSN");







let LeavePageModule = class LeavePageModule {
};
LeavePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _leave_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeavePageRoutingModule"]
        ],
        declarations: [_leave_page__WEBPACK_IMPORTED_MODULE_6__["LeavePage"]]
    })
], LeavePageModule);



/***/ }),

/***/ "JTSN":
/*!*******************************************!*\
  !*** ./src/app/pages/leave/leave.page.ts ***!
  \*******************************************/
/*! exports provided: LeavePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavePage", function() { return LeavePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leave_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leave.page.html */ "l928");
/* harmony import */ var _leave_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave.page.scss */ "aD2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage.service */ "n90K");








let LeavePage = class LeavePage {
    constructor(modal, storage, authService, httpService) {
        this.modal = modal;
        this.storage = storage;
        this.authService = authService;
        this.httpService = httpService;
        this.userData = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.userData = this.storage.modalData;
        console.log(this.userData);
    }
};
LeavePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }
];
LeavePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leave',
        template: _raw_loader_leave_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leave_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LeavePage);



/***/ }),

/***/ "aD2C":
/*!*********************************************!*\
  !*** ./src/app/pages/leave/leave.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xlYXZlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFjO0VBQ2Qsc0JBQWlCO0VBQ2pCLHFCQUFnQjtFQUNoQixtQkFBYztBQUNsQjs7QUFFQTtFQUNJLGFBQWE7RUFDYixjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksa0JBQWE7RUFDYixjQUFjO0FBQ2xCIiwiZmlsZSI6ImxlYXZlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDI2cHg7XG59XG5cbi50aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogIzQzNDM0Mztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tbWluLWhlaWdodDogNTBweDtcbiAgICBjb2xvcjogIzJDOURERTtcbn0iXX0= */");

/***/ }),

/***/ "l928":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leave/leave.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"light\">\n    <ion-title>Leave History (coming soon)</ion-title>\n    <ion-back-button slot=\"start\"></ion-back-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"cuti\">\n    <ion-card mode=\"ios\">\n      <ion-card-header></ion-card-header>\n      <ion-card-content>\n        <ion-card-title color=\"primary-contrast\" style=\"font-size:20px; text-transform: uppercase;\">\n          Emergency Leave\n        </ion-card-title>\n        <ion-card-subtitle style=\"text-transform:none\" color=\"primary-contrast\">Personal reason / family matters</ion-card-subtitle>\n        <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:20px\"> 2 Days</ion-card-subtitle>\n        <a>From: 1/9/21</a> <a> Full Day</a> <br> <a>To: 2/9/21</a> <a> Morning only</a>\n        <ion-button color=\"warning\" expand=\"block\" class=\"main-button\">PENDING</ion-button>\n      </ion-card-content>\n      \n    </ion-card>\n    \n</div>\n  \n<div class=\"cuti\">\n  <ion-card mode=\"ios\">\n    <ion-card-header></ion-card-header>\n    <ion-card-content>\n      <ion-card-title color=\"primary-contrast\" style=\"font-size:20px; text-transform: uppercase;\">\n        Annual Leave\n      </ion-card-title>\n      <ion-card-subtitle style=\"text-transform:none\" color=\"primary-contrast\">Personal reason / family matters</ion-card-subtitle>\n      <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:20px\"> 2 Days</ion-card-subtitle>\n      <a>From: 1/9/21</a> <a> Full Day</a> <br> <a>To: 2/9/21</a> <a> Morning only</a>\n      <ion-button color=\"success\" expand=\"block\" class=\"main-button\">APPROVED</ion-button>\n    </ion-card-content>\n    \n  </ion-card>\n  \n</div>\n<div class=\"cuti\">\n  <ion-card mode=\"ios\">\n    <ion-card-header></ion-card-header>\n    <ion-card-content>\n      <ion-card-title color=\"primary-contrast\" style=\"font-size:20px; text-transform: uppercase;\">\n        Annual Leave\n      </ion-card-title>\n      <ion-card-subtitle style=\"text-transform:none\" color=\"primary-contrast\">Personal reason / family matters</ion-card-subtitle>\n      <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:20px\"> 2 Days</ion-card-subtitle>\n      <a>From: 1/9/21</a> <a> Full Day</a> <br> <a>To: 2/9/21</a> <a> Morning only</a>\n      <ion-button color=\"success\" expand=\"block\" class=\"main-button\">APPROVED</ion-button>\n    </ion-card-content>\n    \n  </ion-card>\n  \n</div>\n<div class=\"cuti\">\n  <ion-card mode=\"ios\">\n    <ion-card-header></ion-card-header>\n    <ion-card-content>\n      <ion-card-title color=\"primary-contrast\" style=\"font-size:20px; text-transform: uppercase;\">\n        Annual Leave\n      </ion-card-title>\n      <ion-card-subtitle style=\"text-transform:none\" color=\"primary-contrast\">Personal reason / family matters</ion-card-subtitle>\n      <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:20px\"> 2 Days</ion-card-subtitle>\n      <a>From: 1/9/21</a> <a> Full Day</a> <br> <a>To: 2/9/21</a> <a> Morning only</a>\n      <ion-button color=\"danger\" expand=\"block\" class=\"main-button\">NOT APPROVED</ion-button>\n    </ion-card-content>\n    \n  </ion-card>\n  \n</div>\n<div class=\"cuti\">\n  <ion-card mode=\"ios\">\n    <ion-card-header></ion-card-header>\n    <ion-card-content>\n      <ion-card-title color=\"primary-contrast\" style=\"font-size:20px; text-transform: uppercase;\">\n        MC Leave\n      </ion-card-title>\n      <ion-card-subtitle style=\"text-transform:none\" color=\"primary-contrast\">Contagious illness </ion-card-subtitle>\n      <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:20px\"> 3 Days</ion-card-subtitle>\n      <a>From: 1/9/21</a> <a> Full Day</a> <br> <a>To: 3/9/21</a> <a> Morning only</a>\n      <ion-button color=\"success\" expand=\"block\" class=\"main-button\">APPROVED</ion-button>\n    </ion-card-content>\n    \n  </ion-card>\n  \n</div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-leave-leave-module-es2015.js.map