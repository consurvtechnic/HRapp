(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-applyleave-applyleave-module"],{

/***/ "1hyo":
/*!*******************************************************!*\
  !*** ./src/app/pages/applyleave/applyleave.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".apply-button {\n  float: right;\n}\n\n.applyButton {\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\nion-card {\n  color: #2C9DDE;\n  max-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nion-list {\n  overflow: hidden;\n  overflow-y: auto;\n}\n\nion-list ::-webkit-scrollbar {\n  display: none;\n}\n\n.myCustomSelect {\n  max-width: 100% !important;\n}\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcGx5bGVhdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtFQUNJLGtCQUFhO0VBQ2IsY0FBYztBQUNsQjs7QUFFQTtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDcEI7O0FBSEE7RUFJTSxhQUFhO0FBR25COztBQUNFO0VBQ0UsMEJBQTBCO0FBRTlCOztBQUNFO0VBQ0Usa0JBQWE7RUFDYixpREFBaUQ7RUFDakQsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFFMUIiLCJmaWxlIjoiYXBwbHlsZWF2ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbHktYnV0dG9ue1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmFwcGx5QnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6ICMyQzlEREU7XG4gIH1cblxuaW9uLWNhcmQge1xuICAgIGNvbG9yOiAjMkM5RERFO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmlvbi1saXN0IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5teUN1c3RvbVNlbGVjdHtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgIH1cblxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaHJfYmcucG5nJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH0iXX0= */");

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
    }
    ionViewWillEnter() {
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
            console.log(res);
            this.leaveTypeChoices = res;
        });
    }
    getBalance() {
        this.http.get('http://consurv.no-ip.biz:3000/api/leavesummary/' + `${this.userInfo.staff_id}`)
            .then(res => {
            console.log(res);
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color='light'>\n    <ion-title>Apply Leave</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-card>\n    <ion-card-content style=\"overflow: scroll;\">\n      <form [formGroup]=\"myform\" (ngSubmit)=\"onSubmit()\">\n        <ion-item>\n          <ion-label>Type of leave:</ion-label>\n            <ion-select class= \"myCustomSelect\" required slot=\"end\" [(ngModel)]='leaveType'>\n              <ion-select-option *ngFor=\"let item of leaveTypeChoices\" [value]=\"item.typeid\">{{item.leavetype}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n      \n        <ion-item lines=\"none\">\n          <ion-label>Reason:</ion-label>\n            <ion-input required type=\"text\" type=\"text\" [(ngModel)]='reason'> </ion-input>\n        </ion-item>\n      \n        <ion-list>\n          <ion-item-divider></ion-item-divider>\n          <ion-item color=\"secondary\" lines=\"none\">\n            <ion-label>Start Date</ion-label>\n            <ion-datetime [(ngModel)]=\"currentDate\" color=\"light\" placeholder=\"Select Date\"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label>Duration</ion-label>\n                  <ion-select slot=\"end\" [(ngModel)]='halfday1'>\n                    <ion-select-option value=\"1\">Full day</ion-select-option>\n                    <ion-select-option value=\"2\">Morning Only</ion-select-option>\n                    <ion-select-option value=\"3\">Evening Only</ion-select-option>\n              </ion-select>\n          </ion-item>\n          <ion-item color=\"secondary\" lines=\"none\">\n            <ion-label>Ends</ion-label>\n            <ion-datetime [(ngModel)]=\"endDate\" placeholder=\"Select Date\"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label>Duration</ion-label>\n                  <ion-select slot=\"end\" [(ngModel)]='halfday2'>\n                    <ion-select-option value=\"1\">Full day</ion-select-option>\n                    <ion-select-option value=\"2\">Morning Only</ion-select-option>\n                    <ion-select-option value=\"3\">Evening Only</ion-select-option>\n              </ion-select>\n          </ion-item>\n        </ion-list>\n      </form>\n     \n    </ion-card-content>\n</ion-card>\n\n<ion-item style=\"overflow: scroll;\" lines=\"none\">\n  <div class=\"applyButton\">\n    <ion-button (ionClear)=\"ionClear($event)\" type=\"ngSubmit\" (click)=\"showAlert()\" (click)=\"applyCuti()\" class=\"apply-button\" color=\"secondary\">Apply Leave</ion-button>\n  </div>\n</ion-item>\n\n<div lines=\"none\" class=\"cuti\">\n  <ion-card color='light'>\n    <ion-card-header>Leave Balance for Year 2021:</ion-card-header>\n    <ion-card-content>\n      <!-- <ion-card-subtitle color=\"primary-contrast\">Leave Balance for year 2021:</ion-card-subtitle> -->\n      <ion-card-title color=\"primary-contrast\" style=\"font-size:70px\" >\n        {{leaveBalance.data}}\n      </ion-card-title>\n      <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:20px\">Days</ion-card-subtitle>\n    </ion-card-content>\n  </ion-card>\n</div>\n\n</ion-content>");

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