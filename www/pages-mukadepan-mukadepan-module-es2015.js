(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mukadepan-mukadepan-module"],{

/***/ "G0A+":
/*!*************************************************************!*\
  !*** ./src/app/pages/mukadepan/mukadepan-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MukadepanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MukadepanPageRoutingModule", function() { return MukadepanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mukadepan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mukadepan.page */ "U52L");




const routes = [
    {
        path: '',
        component: _mukadepan_page__WEBPACK_IMPORTED_MODULE_3__["MukadepanPage"]
    }
];
let MukadepanPageRoutingModule = class MukadepanPageRoutingModule {
};
MukadepanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MukadepanPageRoutingModule);



/***/ }),

/***/ "Kf4d":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mukadepan/mukadepan.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"light\">\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"GotoNotityPage()\">\n      <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\n      <ion-badge color=\"danger\" style=\"position: absolute; right: -5px; top: -3px;\">3</ion-badge></ion-buttons>\n\n        <!-- <span>&nbsp;</span> -->\n\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"settingsPopover()\">\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  \n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n  <div class=\"container\">\n    <ion-text color=\"primary\">\n      <h1 style=\"text-align:center\">DynaConsurv</h1>\n    </ion-text>\n   \n    <h2 style=\"text-align:center\">Welcome Back, {{displayUserData?.staff_name}}!</h2>\n    <img src=\"assets/images/home1.png\"  class=\"smalllogo\"/>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-button (click)=\"showToast1()\" expand=\"full\" (click)=\"checkInAction()\" color=\"secondary\">Check In</ion-button>\n        </ion-col>\n        <ion-col col-6>\n          <ion-button (click)=\"showToast2()\" expand=\"full\" (click)=\"checkOutAction()\"color=\"secondary\">Check Out</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-text color=\"dark\">\n      <p style=\"text-align:center\">STATUS:</p>\n    </ion-text>\n    <ion-text color=\"success\">\n      <h1 style=\"text-align:center\" id=\"status\">None</h1>\n    </ion-text>\n      \n\n      <ion-list>\n        <ion-item *ngFor=\"let tran of transactions\">      \n          <p *ngIf=\" a.checkInAction == 'showToast1'\" > You have redeemed  {{a.checkin | date:'EEEE, h:mm a, dd/MM/yyyy '}} points.  </p>\n          <p *ngIf=\" a.checkOutAction == 'showToast2'\" > You have earned  {{a.checkout | date:'EEEE, h:mm a, dd/MM/yyyy '}}} points.  </p>  \n        </ion-item>\n      </ion-list>\n  \n    <!-- <p><ion-button (click)=\"goToList()\" expand=\"block\" >List of Attendees</ion-button></p> -->\n    <!-- <p><ion-button (click)=\"showToast3()\" expand=\"block\" >Leave</ion-button></p> -->\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "U52L":
/*!***************************************************!*\
  !*** ./src/app/pages/mukadepan/mukadepan.page.ts ***!
  \***************************************************/
/*! exports provided: MukadepanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MukadepanPage", function() { return MukadepanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mukadepan_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mukadepan.page.html */ "Kf4d");
/* harmony import */ var _mukadepan_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mukadepan.page.scss */ "YTKF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage.service */ "n90K");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_setting_setting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/setting/setting.component */ "l7Ag");










let MukadepanPage = class MukadepanPage {
    constructor(router, toastCtrl, authService, storageService, nav, popoverController) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.storageService = storageService;
        this.nav = nav;
        this.popoverController = popoverController;
        this.showStatus = false;
        this.postData = {
            staff_id: '',
            action: 0,
            staff_name: '',
            checkin: '',
            checkout: '',
            id: '',
        };
        this.userInfo = {};
        this.leaveDetail = {};
    }
    settingsPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const siteInfo = { id: 1, name: 'edupala' };
            const popover = yield this.popoverController.create({
                component: src_app_setting_setting_component__WEBPACK_IMPORTED_MODULE_8__["SettingComponent"],
                event: ev,
                cssClass: 'popover_setting',
                componentProps: {
                    site: siteInfo
                },
                translucent: true
            });
            popover.onDidDismiss().then((result) => {
                console.log(result.data);
            });
            return yield popover.present();
            /** Sync event from popover component */
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
    ngOnInit() {
        this.authService.userData$.subscribe((res) => {
            this.displayUserData = res;
        });
    }
    /*this.authService.login(this.postData).subscribe((res: any) => {
          console.log('here',res)
          if(Array.isArray(res)) {
            this.storageService.store(AuthConstants.AUTH, res[0]);
            this.router.navigate(['./home/mukadepan']);
          } else {
            this.toastService.presentToast('Incorrect Name or Password');
  
          }
  
        }*/
    checkInAction() {
        //let data = this.authService.getUserData();
        //console.log('i am clicked',this.displayUserData.staff_id);
        this.postData.staff_id = this.displayUserData.staff_id;
        this.postData.action = 0;
        this.authService.checkIn(this.postData).subscribe((res) => {
            console.log('checkin', res);
        });
    }
    checkOutAction() {
        this.postData.staff_id = this.displayUserData.staff_id;
        this.postData.action = 1;
        this.authService.checkOut(this.postData).subscribe((res) => {
            this.authService.getUserData();
            console.log('checkout', res);
        });
    }
    showToast1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.toastCtrl.create({
                message: "You've Check-In!",
                duration: 2000,
                position: 'middle',
                buttons: [{
                        text: 'OK'
                    }]
            }).then(res => res.present());
            document.getElementById("status").innerHTML = "You've Checked-In!";
        });
    }
    showToast2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.toastCtrl.create({
                message: "You've Check-Out!",
                duration: 2000,
                position: 'middle',
                buttons: [{
                        text: 'OK'
                    }]
            }).then(res => res.present());
            document.getElementById("status").innerHTML = "You've Checked-Out!";
        });
    }
    showToast3() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.toastCtrl.create({
                message: "You're on Leave!",
                duration: 2000,
                position: 'middle',
                buttons: [{
                        text: 'OK'
                    }]
            }).then(res => res.present());
        });
    }
    goToList() {
        this.postData.staff_id = this.displayUserData.staff_id;
        this.postData.action = 2;
        this.router.navigate(['listattendees']);
        this.authService.listName(this.postData).subscribe((res) => {
            console.log('golist', res);
        });
    }
};
MukadepanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
MukadepanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mukadepan',
        template: _raw_loader_mukadepan_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mukadepan_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MukadepanPage);



/***/ }),

/***/ "XSHW":
/*!*****************************************************!*\
  !*** ./src/app/pages/mukadepan/mukadepan.module.ts ***!
  \*****************************************************/
/*! exports provided: MukadepanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MukadepanPageModule", function() { return MukadepanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mukadepan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mukadepan-routing.module */ "G0A+");
/* harmony import */ var _mukadepan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mukadepan.page */ "U52L");







let MukadepanPageModule = class MukadepanPageModule {
};
MukadepanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mukadepan_routing_module__WEBPACK_IMPORTED_MODULE_5__["MukadepanPageRoutingModule"]
        ],
        declarations: [_mukadepan_page__WEBPACK_IMPORTED_MODULE_6__["MukadepanPage"]]
    })
], MukadepanPageModule);



/***/ }),

/***/ "YTKF":
/*!*****************************************************!*\
  !*** ./src/app/pages/mukadepan/mukadepan.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  position: fixed;\n  left: 0;\n  bottom: 10vh;\n  right: 0;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL211a2FkZXBhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsT0FBTztFQUNQLFlBQVk7RUFDWixRQUFRO0FBQ1o7O0FBRUE7RUFDSSxrQkFBYTtFQUNiLGNBQWM7QUFDbEIiLCJmaWxlIjoibXVrYWRlcGFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMTB2aDtcbiAgICByaWdodDogMDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tbWluLWhlaWdodDogNTBweDtcbiAgICBjb2xvcjogIzJDOURERTtcbiAgfVxuXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-mukadepan-mukadepan-module-es2015.js.map