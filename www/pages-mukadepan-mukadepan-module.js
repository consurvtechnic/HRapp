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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='primary'>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n  <div class=\"container\">\n    <h2 style=\"text-align:center\">Haiii, {{displayUserData?.staff_name}}!</h2>\n    <img src=\"assets/images/home1.png\"  class=\"smalllogo\"/>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-button (click)=\"showToast1()\" expand=\"full\" (click)=\"checkInAction()\">Check In</ion-button>\n        </ion-col>\n        <ion-col col-6>\n          <ion-button (click)=\"showToast2()\" expand=\"full\" (click)=\"checkOutAction()\">Check Out</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <p><ion-button (click)=\"goToList()\" expand=\"block\" >List of Attendees</ion-button></p>\n    <p><ion-button (click)=\"showToast3()\" expand=\"block\" >Leave</ion-button></p>\n  </div>\n</ion-content>\n");

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








let MukadepanPage = class MukadepanPage {
    constructor(router, toastCtrl, authService, storageService, nav) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.storageService = storageService;
        this.nav = nav;
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  position: fixed;\n  left: 0;\n  bottom: 10vh;\n  right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL211a2FkZXBhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsT0FBTztFQUNQLFlBQVk7RUFDWixRQUFRO0FBQ1oiLCJmaWxlIjoibXVrYWRlcGFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMTB2aDtcbiAgICByaWdodDogMDtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-mukadepan-mukadepan-module.js.map