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
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast.service */ "2g2N");









let LeavePage = class LeavePage {
    constructor(modal, storage, authService, http, toastService, nav) {
        this.modal = modal;
        this.storage = storage;
        this.authService = authService;
        this.http = http;
        this.toastService = toastService;
        this.nav = nav;
        this.postData = {
            staff_id: '',
            leavetype: '',
            reason: '',
            currentDate: '',
            endDate: '',
            image: '',
            halfday1: '',
            halfday2: '',
            data: '',
            status: ''
        };
        this.userInfo = {};
        this.leaveDetail = [];
        this.leave = {};
        this.image = '';
    }
    ngOnInit() {
        this.authService.userData$.subscribe((res) => {
            this.displayUserData = res;
        });
        this.leaveDetail.sort((a, b) => {
            //sort by date
            if (new Date(b.lastDate) > new Date(a.lastDate))
                return 1;
            if (new Date(b.lastDate) < new Date(a.lastDate))
                return -1;
            return 0;
        });
    }
    ionViewWillEnter() {
        this.authService.getUserDataPromise()
            .then((res = {}) => {
            // console.log(res);
            this.userInfo = res;
            this.authService.leavedetailPromise({ staffid: this.userInfo.staff_id })
                .then(res => {
                console.log(res);
                this.leaveDetail = res[0];
            }, err => {
                console.log(err);
            });
        }, err => {
            this.nav.navigateBack('login');
        });
    }
};
LeavePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xlYXZlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFjO0VBQ2Qsc0JBQWlCO0VBQ2pCLHFCQUFnQjtFQUNoQixtQkFBYztFQUNkLGtCQUFhO0VBQ2IsaURBQWlEO0VBQ2pELCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0VBQ0ksYUFBYTtFQUNiLGNBQWM7QUFDbEI7O0FBRUE7RUFDSSxrQkFBYTtFQUNiLGNBQWM7QUFDbEIiLCJmaWxlIjoibGVhdmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjZweDtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9ocl9iZy5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiAjNDM0MzQzO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjMkM5RERFO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "l928":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leave/leave.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"light\">\n    <ion-title>Leave History</ion-title>\n    <ion-back-button slot=\"start\"></ion-back-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let leave of leaveDetail\" >\n  <div class=\"cuti\">\n    <ion-card mode=\"ios\">\n      <ion-card-header></ion-card-header>\n      <ion-card-content style=\"overflow: scroll;\">\n        <ion-card-title color=\"primary-contrast\" style=\"font-size:20px; text-transform: uppercase;\">\n          {{leave.leavetype}}\n        </ion-card-title>\n        <ion-card-subtitle style=\"text-transform:none\" color=\"primary-contrast\">{{leave.reason}}</ion-card-subtitle>\n        <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:15px\"> Total of Days: {{leave.leaveday}}</ion-card-subtitle>\n        <a>From: {{leave.datefrom | date:'EEEE, dd/MM/yyyy '}}</a> <br> <a>To: {{leave.dateend | date:'EEEE, dd/MM/yyyy '}}</a>\n        <ion-button color=\"warning\" expand=\"block\" class=\"main-button\" *ngIf = \"leave.approved === 0; else approved\" >PENDING</ion-button>\n        <ng-template #approved>\n          <ion-button color=\"success\" expand=\"block\" class=\"main-button\">APPROVED</ion-button>\n        </ng-template>\n      </ion-card-content>\n      \n    </ion-card>\n    \n</div>\n\n</ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-leave-leave-module-es2015.js.map