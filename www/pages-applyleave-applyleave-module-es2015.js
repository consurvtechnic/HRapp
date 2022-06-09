(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-applyleave-applyleave-module"],{

/***/ "1hyo":
/*!*******************************************************!*\
  !*** ./src/app/pages/applyleave/applyleave.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".apply-button {\n  float: right;\n}\n\n.applyButton {\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\nion-card {\n  color: #2C9DDE;\n  max-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nion-list {\n  overflow: hidden;\n  overflow-y: auto;\n}\n\nion-list ::-webkit-scrollbar {\n  display: none;\n}\n\n.myCustomSelect {\n  max-width: 100% !important;\n}\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHBseWxlYXZlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNGLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUFJO0VBQ0UsYUFBQTtBQUVOOztBQUVFO0VBQ0UsMEJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJhcHBseWxlYXZlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBseS1idXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5hcHBseUJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjMkM5RERFO1xyXG4gIH1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGNvbG9yOiAjMkM5RERFO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubXlDdXN0b21TZWxlY3R7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgfVxyXG5cclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2hyX2JnLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "BwO+":
/*!*****************************************************!*\
  !*** ./src/app/pages/applyleave/applyleave.page.ts ***!
  \*****************************************************/
/*! exports provided: ApplyleavePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyleavePage", function() { return ApplyleavePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_applyleave_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./applyleave.page.html */ "Ys5u");
/* harmony import */ var _applyleave_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applyleave.page.scss */ "1hyo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/storage.service */ "n90K");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/toast.service */ "2g2N");












let ApplyleavePage = class ApplyleavePage {
    constructor(toastCtrl, router, authService, storageService, toastService, nav, http, alertCtrl, changeRef, loading) {
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.authService = authService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.nav = nav;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.changeRef = changeRef;
        this.loading = loading;
        this.postData = {
            staff_id: '',
            leavetype: '',
            reason: '',
            currentDate: '',
            endDate: '',
            image: '',
            halfday1: '',
            halfday2: '',
            data: ''
        };
        this.userInfo = {};
        this.leaveDetail = {};
        this.leaveBalance = [];
        this.leaveTypeChoices = [];
        this.image = '';
    }
    //  async showToastLeave(){
    //   await this.toastCtrl.create({
    //     message: "You have successfully applied for a leave!",
    //     duration: 2000,
    //     position: 'middle',
    //     buttons: [{
    //       text: 'OK'
    //     }]
    //   }).then( res => res.present());
    // }
    showAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'SUCCESS!',
                subHeader: 'You have successfully applied for a leave!',
                cssClass: 'my-custom-class',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        this.authService.userData$.subscribe((res) => {
            this.displayUserData = res;
        });
        setTimeout(() => {
            this.dateTime = new Date().toISOString();
        });
    }
    ionViewWillEnter() {
        //this.leaveBalance.data.AL=0;
        this.authService.getUserDataPromise()
            .then((res = {}) => {
            // console.log(res);
            this.userInfo = res;
            this.getBalance();
            this.authService.leavedetailPromise({ staffid: this.userInfo.staff_id })
                .then(res => {
                console.log(res);
                this.leaveDetail = res[0];
                this.getLeaveType();
            }, err => {
                console.log(err);
            });
        }, err => {
            this.nav.navigateBack('login');
        });
    }
    getLeaveType() {
        this.http.get('http://consurv.no-ip.biz/leave/leavetype')
            .then(res => {
            console.log("type", res);
            this.leaveTypeChoices = res;
        });
    }
    getBalance() {
        this.http.get('http://consurv.no-ip.biz:3000/api/leavesummary/' + `${this.userInfo.staff_id}`)
            .then(res => {
            console.log("balance", res);
            this.leaveBalance = res;
        });
    }
    validateInputs() {
        let staff_id = this.postData.staff_id;
        let leavetype = this.postData.leavetype;
        let reason = this.postData.reason;
        let currentDate = this.postData.currentDate;
        let endDate = this.postData.endDate;
        let image = this.postData.image;
        let halfday1 = this.postData.halfday1;
        let halfday2 = this.postData.halfday2;
        return (this.postData.staff_id && this.postData.leavetype && this.postData.reason && this.postData.currentDate
            && this.postData.endDate && this.postData.image && this.postData.halfday1 && this.postData.halfday2);
    }
    applyCuti() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let pack_data = {
                staff_id: this.userInfo.staff_id,
                leavetype: this.leaveType.toString(),
                reason: this.reason,
                startdate: this.currentDate,
                enddate: this.endDate,
                startdate_type: this.halfday1.toString(),
                enddate_type: this.halfday2.toString(),
                image: '' //ok
            };
            console.log('pack_', pack_data);
            this.authService.applyleave(pack_data)
                .then(res => {
                console.log(res);
                this.changeRef.detectChanges();
                // this.nav.navigateForward('home/calendar');
            }, err => {
                console.log(err);
            });
        });
    }
    // let loader=await this.loading.create({
    //   message:'Loading...',
    //   spinner:'bubbles'
    // })
    // loader.present();
    // this.postData.staff_id;
    // this.postData.currentDate;
    // this.postData.endDate;
    // this.postData.halfday1;
    // this.postData.halfday2;
    // this.postData.leavetype;
    // this.postData.reason;
    //   this.authService.applyleave(this.postData).subscribe((res: any) => {
    //     console.log('apply',res)} )
    // let startDate= this.getCorrectDateFormat(this.currentDate);
    // let endDate= this.getCorrectDateFormat(this.endDate);
    // staff_id(from user data),
    // leavetype(typeid from HRAppGetLeaveType),
    // reason(user input string),
    // currentDate(in string),
    // endDate(in string),
    // image(leave it null),
    // halfday1( 1=full day, 2=morning, 3=evening )
    // halfday2( 1=full day, 2=morning, 3=evening )
    getCorrectDateFormat(dateTemp) {
        const theDate = new Date(dateTemp);
        const fullYear = theDate.getFullYear();
        let fullMonth;
        let monthTemp = Number(theDate.getMonth()) + 1;
        if (Number(monthTemp) < 10) {
            fullMonth = `0${monthTemp}`;
        }
        else {
            fullMonth = monthTemp.toString();
        }
        let fullDay;
        let dayTemp = Number(theDate.getDate());
        if (Number(dayTemp) < 10) {
            fullDay = `0${dayTemp}`;
        }
        else {
            fullDay = dayTemp.toString();
        }
        const fullDate = `${fullYear}-${fullMonth}-${fullDay}`;
        // console.log(fullDate);
        return fullDate;
    }
    onSubmit() {
        if (this.myform.valid) {
            console.log("Form Submitted!");
            this.myform.reset();
        }
    }
};
ApplyleavePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
ApplyleavePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-applyleave',
        template: _raw_loader_applyleave_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_applyleave_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ApplyleavePage);



/***/ }),

/***/ "Ys5u":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/applyleave/applyleave.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color='light'>\r\n    <ion-title>Apply Leave</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<ion-card>\r\n    <ion-card-content style=\"overflow: scroll;\">\r\n      <form [formGroup]=\"myform\" (ngSubmit)=\"onSubmit()\">\r\n        <ion-item>\r\n          <ion-label>Type of leave:</ion-label>\r\n            <ion-select class= \"myCustomSelect\" required slot=\"end\" [(ngModel)]='leaveType'>\r\n              <ion-select-option *ngFor=\"let item of leaveTypeChoices\" [value]=\"item.typeid\">{{item.leavetype}}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n      \r\n        <ion-item lines=\"none\">\r\n          <ion-label>Reason:</ion-label>\r\n            <ion-input required type=\"text\" type=\"text\" [(ngModel)]='reason'> </ion-input>\r\n        </ion-item>\r\n      \r\n        <ion-list>\r\n          <ion-item-divider></ion-item-divider>\r\n          <ion-item color=\"secondary\" lines=\"none\">\r\n            <ion-label>Start Date</ion-label>\r\n            <ion-datetime [(ngModel)]=\"currentDate\" color=\"light\" placeholder=\"Select Date\"></ion-datetime>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Duration</ion-label>\r\n                  <ion-select slot=\"end\" [(ngModel)]='halfday1'>\r\n                    <ion-select-option value=\"1\">Full day</ion-select-option>\r\n                    <ion-select-option value=\"2\">Morning Only</ion-select-option>\r\n                    <ion-select-option value=\"3\">Evening Only</ion-select-option>\r\n              </ion-select>\r\n          </ion-item>\r\n          <ion-item color=\"secondary\" lines=\"none\">\r\n            <ion-label>Ends</ion-label>\r\n            <ion-datetime [(ngModel)]=\"endDate\" placeholder=\"Select Date\"></ion-datetime>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Duration</ion-label>\r\n                  <ion-select slot=\"end\" [(ngModel)]='halfday2'>\r\n                    <ion-select-option value=\"1\">Full day</ion-select-option>\r\n                    <ion-select-option value=\"2\">Morning Only</ion-select-option>\r\n                    <ion-select-option value=\"3\">Evening Only</ion-select-option>\r\n              </ion-select>\r\n          </ion-item>\r\n        </ion-list>\r\n      </form>\r\n     \r\n    </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-item style=\"overflow: scroll;\" lines=\"none\">\r\n  <div class=\"applyButton\">\r\n    <ion-button (ionClear)=\"ionClear($event)\" type=\"ngSubmit\" (click)=\"showAlert()\" (click)=\"applyCuti()\" class=\"apply-button\" color=\"secondary\">Apply Leave</ion-button>\r\n  </div>\r\n</ion-item>\r\n\r\n<div lines=\"none\" class=\"cuti\">\r\n  <ion-card color='light'>\r\n    <ion-card-header>Leave Balance for Year <ion-datetime [value]=\"dateTime\" displayFormat=\"YYYY\" ></ion-datetime>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <!-- <ion-card-subtitle color=\"primary-contrast\">Leave Balance for year 2021:</ion-card-subtitle> -->\r\n      <ion-card-title color=\"primary-contrast\" style=\"font-size:70px\" >\r\n        {{leaveBalance.data?.AL}}\r\n      </ion-card-title>\r\n      <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:20px\">Days</ion-card-subtitle>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "wK0/":
/*!***************************************************************!*\
  !*** ./src/app/pages/applyleave/applyleave-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ApplyleavePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyleavePageRoutingModule", function() { return ApplyleavePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _applyleave_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applyleave.page */ "BwO+");




const routes = [
    {
        path: '',
        component: _applyleave_page__WEBPACK_IMPORTED_MODULE_3__["ApplyleavePage"]
    }
];
let ApplyleavePageRoutingModule = class ApplyleavePageRoutingModule {
};
ApplyleavePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ApplyleavePageRoutingModule);



/***/ }),

/***/ "xN67":
/*!*******************************************************!*\
  !*** ./src/app/pages/applyleave/applyleave.module.ts ***!
  \*******************************************************/
/*! exports provided: ApplyleavePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyleavePageModule", function() { return ApplyleavePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _applyleave_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./applyleave-routing.module */ "wK0/");
/* harmony import */ var _applyleave_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./applyleave.page */ "BwO+");







let ApplyleavePageModule = class ApplyleavePageModule {
};
ApplyleavePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _applyleave_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplyleavePageRoutingModule"]
        ],
        declarations: [_applyleave_page__WEBPACK_IMPORTED_MODULE_6__["ApplyleavePage"]]
    })
], ApplyleavePageModule);



/***/ })

}]);
//# sourceMappingURL=pages-applyleave-applyleave-module-es2015.js.map