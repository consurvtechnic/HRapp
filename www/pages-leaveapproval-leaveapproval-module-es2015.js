(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leaveapproval-leaveapproval-module"],{

/***/ "+N/3":
/*!*************************************************************!*\
  !*** ./src/app/pages/leaveapproval/leaveapproval.module.ts ***!
  \*************************************************************/
/*! exports provided: LeaveapprovalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveapprovalPageModule", function() { return LeaveapprovalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _leaveapproval_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leaveapproval-routing.module */ "lhYH");
/* harmony import */ var _leaveapproval_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaveapproval.page */ "TuVu");







let LeaveapprovalPageModule = class LeaveapprovalPageModule {
};
LeaveapprovalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _leaveapproval_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeaveapprovalPageRoutingModule"]
        ],
        declarations: [_leaveapproval_page__WEBPACK_IMPORTED_MODULE_6__["LeaveapprovalPage"]]
    })
], LeaveapprovalPageModule);



/***/ }),

/***/ "KzZC":
/*!*************************************************************!*\
  !*** ./src/app/pages/leaveapproval/leaveapproval.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xlYXZlYXBwcm92YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWM7RUFDZCxzQkFBaUI7RUFDakIscUJBQWdCO0VBQ2hCLG1CQUFjO0FBQ2xCOztBQUVBO0VBQ0ksYUFBYTtFQUNiLGNBQWM7QUFDbEI7O0FBRUE7RUFDSSxrQkFBYTtFQUNiLGNBQWM7QUFDbEIiLCJmaWxlIjoibGVhdmVhcHByb3ZhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMjZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyNnB4O1xufVxuXG4udGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgY29sb3I6ICM0MzQzNDM7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6ICMyQzlEREU7XG59Il19 */");

/***/ }),

/***/ "TuVu":
/*!***********************************************************!*\
  !*** ./src/app/pages/leaveapproval/leaveapproval.page.ts ***!
  \***********************************************************/
/*! exports provided: LeaveapprovalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveapprovalPage", function() { return LeaveapprovalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leaveapproval_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leaveapproval.page.html */ "tZAa");
/* harmony import */ var _leaveapproval_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaveapproval.page.scss */ "KzZC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _leave_modal_leave_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../leave-modal/leave-modal.page */ "Rx4N");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");













let LeaveapprovalPage = class LeaveapprovalPage {
    constructor(authService, nav, loading, modal, storage, popoverController, router, changeRef, httpService, alertCtrl, toastCtrl) {
        this.authService = authService;
        this.nav = nav;
        this.loading = loading;
        this.modal = modal;
        this.storage = storage;
        this.popoverController = popoverController;
        this.router = router;
        this.changeRef = changeRef;
        this.httpService = httpService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.selectTabs = 'pending';
        this.userInfo = {};
        this.leaveMaster = [];
        this.approvedList = [];
        this.pendingList = [];
        this.userData = {};
        this.toggleValue = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader = yield this.loading.create({
                message: 'Loading...',
                spinner: 'bubbles'
            });
            loader.present();
            this.approvedList = [];
            this.pendingList = [];
            this.leaveMaster = [];
            this.userData = this.storage.modalData;
            console.log(this.userData);
            this.authService.getUserDataPromise()
                .then((res = {}) => {
                // console.log('USER DATA',res);
                this.userInfo = res;
                //DEBUG
                this.userInfo.staff_id = this.userInfo.staff_id;
                this.userInfo.hod = 0;
                //DEBUG
                this.authService.leavedetailPromise({ staffid: this.userInfo.staff_id })
                    .then(res => {
                    console.log('abc', res[0]);
                    this.leaveMaster = res[0];
                    this.segList(res[0]);
                    this.segList(res[1]);
                    loader.dismiss();
                }, err => {
                    console.log(err);
                    loader.dismiss();
                });
            }, err => {
                loader.dismiss();
                this.nav.navigateBack('login');
            });
        });
    }
    openModal(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.userInfo.hod == 0) {
                this.storage.modalData = item;
                let approveModal = yield this.modal.create({
                    component: _leave_modal_leave_modal_page__WEBPACK_IMPORTED_MODULE_6__["LeaveModalPage"]
                });
                approveModal.onDidDismiss().then(_ => {
                    this.ionViewWillEnter(); //Refresh data
                });
                approveModal.present();
            }
        });
    }
    segList(list) {
        for (var x = 0; x < list.length; x++) {
            if (Number(list[x].approved) == 2) {
                this.approvedList.push(list[x]);
            }
            else if (Number(list[x].approved) < 2) {
                this.pendingList.push(list[x]);
            }
        }
    }
    approveLeave() {
        this.httpService.post('leave/updateapprove', { leaveid: this.userData.leavedetailid, action: 1 })
            .subscribe(res => {
            console.log(res);
            this.presentAlert();
            this.changeRef.detectChanges();
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = this.alertCtrl.create({
                subHeader: "Leave Pending for Approval",
                message: this.userInfo.staff_name,
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                            this.toggleValue == false;
                            this.modal.dismiss();
                        }
                    },
                    {
                        text: 'Approved',
                        handler: data => {
                            console.log('Saved clicked');
                        }
                    }
                ]
            });
            if (this.toggleValue == true) {
                (yield alert).present();
            }
        });
    }
};
LeaveapprovalPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
LeaveapprovalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leaveapproval',
        template: _raw_loader_leaveapproval_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leaveapproval_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LeaveapprovalPage);



/***/ }),

/***/ "lhYH":
/*!*********************************************************************!*\
  !*** ./src/app/pages/leaveapproval/leaveapproval-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LeaveapprovalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveapprovalPageRoutingModule", function() { return LeaveapprovalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _leaveapproval_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaveapproval.page */ "TuVu");




const routes = [
    {
        path: '',
        component: _leaveapproval_page__WEBPACK_IMPORTED_MODULE_3__["LeaveapprovalPage"]
    }
];
let LeaveapprovalPageRoutingModule = class LeaveapprovalPageRoutingModule {
};
LeaveapprovalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LeaveapprovalPageRoutingModule);



/***/ }),

/***/ "tZAa":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaveapproval/leaveapproval.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"light\">\n    <ion-title>Leave Approval</ion-title>\n    <ion-back-button slot=\"start\"></ion-back-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-list *ngFor=\"let leave of leaveDetail\" >\n  <div class=\"cuti\">\n    <ion-card mode=\"ios\">\n      <ion-card-header></ion-card-header>\n      <ion-card-content style=\"overflow: scroll;\">\n        <ion-card-title color=\"primary-contrast\" style=\"font-size:20px; text-transform: uppercase;\">\n          {{leave.leavetype}}\n        </ion-card-title>\n        <ion-card-subtitle style=\"text-transform:none\" color=\"primary-contrast\">{{leave.reason}}</ion-card-subtitle>\n        <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:15px\"> Total of Days: {{leave.leaveday}}</ion-card-subtitle>\n        <a>From: {{leave.datefrom}}</a> <br> <a>To: {{leave.dateend}}</a>\n        <ion-button color=\"warning\" expand=\"block\" class=\"main-button\" *ngIf = \"leave.approved === 0; else approved\" >PENDING</ion-button>\n        <ng-template #approved>\n          <ion-button color=\"success\" expand=\"block\" class=\"main-button\">APPROVED</ion-button>\n        </ng-template>\n      </ion-card-content>\n    </ion-card>\n</div> \n</ion-list> -->\n<ion-list> \n<ion-item class=\"item-text-wrap\" *ngFor=\"let item of pendingList\">\n  <ion-label (click)='openModal(item)'>\n    <h2 style=\"font-weight: bold;\">{{item.reason}}</h2>\n    <p>{{item.staff_name}}<p>\n    <p>{{item.datefrom}} - {{item.dateend}}<p>\n    <p style=\"font-weight: bold;\">{{item.leaveday}} days<p>\n  </ion-label>\n  <ion-toggle [disabled]='false' [checked]=\"toggleValue\" (ionChange)=\"presentAlert()\" style='zoom:0.8;' (click)=\"approveLeave()\" color=\"secondary\" ></ion-toggle>\n  <!-- <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon> -->\n</ion-item>\n</ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-leaveapproval-leaveapproval-module-es2015.js.map