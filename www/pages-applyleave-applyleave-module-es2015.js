(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-applyleave-applyleave-module"],{

/***/ "1hyo":
/*!*******************************************************!*\
  !*** ./src/app/pages/applyleave/applyleave.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".apply-button {\n  float: right;\n}\n\n.applyButton {\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcGx5bGVhdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtBQUNoQjs7QUFHQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUF4Qjs7QUFHQTtFQUNJLGtCQUFhO0VBQ2IsY0FBYztBQUFsQiIsImZpbGUiOiJhcHBseWxlYXZlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBseS1idXR0b257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgXG59XG5cbi5hcHBseUJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjMkM5RERFO1xuICB9XG5cbiJdfQ== */");

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
    constructor(toastCtrl, router, authService, storageService, toastService, nav, http, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.authService = authService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.nav = nav;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.postData = {
            staff_id: '',
            leavetype: '',
            reason: '',
            currentDate: '',
            endDate: '',
            image: '',
            halfday1: '',
            halfday2: '',
        };
        this.userInfo = {};
        this.leaveDetail = {};
        this.leaveBalance = 10;
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
    ngOnInit() { }
    ionViewWillEnter() {
        this.authService.getUserDataPromise()
            .then((res = {}) => {
            // console.log(res);
            this.userInfo = res;
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
            console.log(res);
            this.leaveTypeChoices = res;
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
        let pack_data = {
            staff_id: this.userInfo.staff_id,
            leavetype: this.leaveType.toString(),
            reason: this.reason,
            currentDate: this.currentDate,
            endDate: this.endDate,
            halfday1: this.halfday1.toString(),
            halfday2: this.halfday2.toString(),
            image: '' //ok
        };
        console.log('pack_', pack_data);
        this.authService.applyleave(pack_data)
            .then(res => {
            console.log(res);
            this.nav.navigateForward('home/mukadepan');
        }, err => {
            console.log(err);
        });
    }
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
};
ApplyleavePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color='light'>\n    <ion-title>Apply Leave</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-label>Type of leave:</ion-label>\n      <ion-select slot=\"end\" [(ngModel)]='leaveType'>\n        <ion-select-option *ngFor=\"let item of leaveTypeChoices\" [value]=\"item.typeid\">{{item.leavetype}}</ion-select-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Reason:</ion-label>\n      <ion-input type=\"text\" type=\"text\" [(ngModel)]='reason'> </ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" >\n    <ion-label>From:</ion-label>\n  </ion-item>\n\n  <ion-item>\n      <div class=\"container\">\n        <ion-button color=\"warning\"><ion-label>Pick Date</ion-label><ion-datetime [(ngModel)]=\"currentDate\"></ion-datetime></ion-button>\n          <ion-button color=\"warning\"><ion-label>Duration</ion-label>\n            <ion-select slot=\"end\" [(ngModel)]='halfday1'>\n              <ion-select-option value=\"1\">Full day</ion-select-option>\n              <ion-select-option value=\"2\">Morning Only</ion-select-option>\n              <ion-select-option value=\"3\">Evening Only</ion-select-option>\n        </ion-select></ion-button>\n      </div>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-label>To:</ion-label>\n  </ion-item>\n\n  <ion-item>\n      <div class=\"container\">\n        <ion-button color=\"warning\"><ion-label>Pick Date</ion-label><ion-datetime [(ngModel)]=\"endDate\"></ion-datetime></ion-button>\n          <ion-button color=\"warning\"><ion-label>Duration</ion-label>\n            <ion-select slot=\"end\" [(ngModel)]='halfday2'>\n              <ion-select-option value=\"1\">Full day</ion-select-option>\n              <ion-select-option value=\"2\">Morning Only</ion-select-option>\n              <ion-select-option value=\"3\">Evening Only</ion-select-option>\n        </ion-select></ion-button>\n      </div>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <div class=\"applyButton\">\n      <ion-button (ionClear)=\"ionClear($event)\" (click)=\"showAlert()\" expand=\"full\" (click)=\"applyCuti()\" class=\"apply-button\" color=\"secondary\">Apply Leave</ion-button>\n    </div>\n  </ion-item>\n\n  <div class=\"cuti\">\n      <ion-card color=\"success\">\n        <ion-card-header></ion-card-header>\n        <ion-card-content>\n          <ion-card-subtitle color=\"primary-contrast\">Leave Balance for year 2021:</ion-card-subtitle>\n          <ion-card-title color=\"primary-contrast\" style=\"font-size:70px\">\n            {{leaveBalance}}\n          </ion-card-title>\n          <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:20px\">Days</ion-card-subtitle>\n        </ion-card-content>\n      </ion-card>\n  </div>\n\n</ion-content>\n");

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