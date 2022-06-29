(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\HRapp\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //LOGIN (HTTP POST) :
    //URL: http://consurv.no-ip.biz/leave/logintest
    //Expected variable : username, password, gsm
    //On successful will return : JSON(userdata)
    apiUrl1: 'http://consurv.no-ip.biz/leave/',
    //checkin-checkout
    apiUrl2: 'http://consurv.no-ip.biz:3000/api/dailycheck',
    //login
    apiUrl3: 'http://consurv.no-ip.biz:3000/api/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






// import {Plugins } from '@capacitor/core';
// const { App } = Plugins;
let AppComponent = class AppComponent {
    constructor(alertCtrl, platform, location) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.location = location;
        this.backButtonEvent();
    }
    backButtonEvent() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            if (!this.routerOutlet.canGoBack()) {
                this.backButtonAlert();
            }
            else {
                this.location.back();
            }
        });
    }
    backButtonAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: 'You want to exit the app?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    }, {
                        text: 'Close App',
                        handler: () => {
                            navigator['app'].exitApp();
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
AppComponent.propDecorators = {
    routerOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"], { static: true },] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot({ mode: 'md', }), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], { provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"], }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | index-index-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("index-index-module")]).then(__webpack_require__.bind(null, /*! ./index/index.module */ "rSti")).then(m => m.IndexPageModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | home-hradmin-home-hradmin-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("home-hradmin-home-hradmin-module")]).then(__webpack_require__.bind(null, /*! ./home-hradmin/home-hradmin.module */ "EUcd")).then(m => m.HomeHRadminPageModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | home-manager-home-manager-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("home-manager-home-manager-module")]).then(__webpack_require__.bind(null, /*! ./home-manager/home-manager.module */ "gHsv")).then(m => m.HomeManagerPageModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | home-boss-home-boss-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("home-boss-home-boss-module")]).then(__webpack_require__.bind(null, /*! ./home-boss/home-boss.module */ "xbfX")).then(m => m.HomeBossPageModule)
    },
    {
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() | components-components-module */ "common").then(__webpack_require__.bind(null, /*! ./components/components.module */ "j1ZV")).then(m => m.ComponentsModule)
    },
    {
        path: 'listattendees',
        loadChildren: () => Promise.all(/*! import() | pages-listattendees-listattendees-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-listattendees-listattendees-module")]).then(__webpack_require__.bind(null, /*! ./pages/listattendees/listattendees.module */ "NByi")).then(m => m.ListattendeesPageModule)
    },
    {
        path: 'leave-modal',
        loadChildren: () => Promise.all(/*! import() | leave-modal-leave-modal-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("leave-modal-leave-modal-module")]).then(__webpack_require__.bind(null, /*! ./leave-modal/leave-modal.module */ "11sy")).then(m => m.LeaveModalPageModule)
    },
    {
        path: 'approve-modal',
        loadChildren: () => Promise.all(/*! import() | approve-modal-approve-modal-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("approve-modal-approve-modal-module")]).then(__webpack_require__.bind(null, /*! ./approve-modal/approve-modal.module */ "EDlG")).then(m => m.ApproveModalPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | pages-profile-profile-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./pages/profile/profile.module */ "723k")).then(m => m.ProfilePageModule)
    },
    {
        path: 'history',
        loadChildren: () => Promise.all(/*! import() | pages-history-history-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-history-history-module")]).then(__webpack_require__.bind(null, /*! ./pages/history/history.module */ "6F3i")).then(m => m.HistoryPageModule)
    },
    {
        path: 'cal-modal',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-cal-modal-cal-modal-module */ "default~pages-cal-modal-cal-modal-module~pages-calendar-calendar-module").then(__webpack_require__.bind(null, /*! ./pages/cal-modal/cal-modal.module */ "Pz3A")).then(m => m.CalModalPageModule)
    },
    {
        path: 'leave',
        loadChildren: () => Promise.all(/*! import() | pages-leave-leave-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-leave-leave-module")]).then(__webpack_require__.bind(null, /*! ./pages/leave/leave.module */ "2/E7")).then(m => m.LeavePageModule)
    },
    {
        path: 'home-hradmin',
        loadChildren: () => Promise.all(/*! import() | home-hradmin-home-hradmin-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("home-hradmin-home-hradmin-module")]).then(__webpack_require__.bind(null, /*! ./home-hradmin/home-hradmin.module */ "EUcd")).then(m => m.HomeHRadminPageModule)
    },
    {
        path: 'applyleave',
        loadChildren: () => Promise.all(/*! import() | pages-applyleave-applyleave-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-applyleave-applyleave-module")]).then(__webpack_require__.bind(null, /*! ./pages/applyleave/applyleave.module */ "xN67")).then(m => m.ApplyleavePageModule)
    },
    {
        path: 'mukadepan-admin',
        loadChildren: () => Promise.all(/*! import() | pages-mukadepan-admin-mukadepan-admin-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-mukadepan-admin-mukadepan-admin-module")]).then(__webpack_require__.bind(null, /*! ./pages/mukadepan-admin/mukadepan-admin.module */ "6EAb")).then(m => m.MukadepanAdminPageModule)
    },
    {
        path: 'staff',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-staff-staff-module */ "pages-staff-staff-module").then(__webpack_require__.bind(null, /*! ./pages/staff/staff.module */ "qZb1")).then(m => m.StaffPageModule)
    },
    {
        path: 'leaverules',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-leaverules-leaverules-module */ "pages-leaverules-leaverules-module").then(__webpack_require__.bind(null, /*! ./pages/leaverules/leaverules.module */ "kUyV")).then(m => m.LeaverulesPageModule)
    },
    {
        path: 'home-manager',
        loadChildren: () => Promise.all(/*! import() | home-manager-home-manager-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("home-manager-home-manager-module")]).then(__webpack_require__.bind(null, /*! ./home-manager/home-manager.module */ "gHsv")).then(m => m.HomeManagerPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-signup-signup-module */ "pages-signup-signup-module").then(__webpack_require__.bind(null, /*! ./pages/signup/signup.module */ "UUSl")).then(m => m.SignupPageModule)
    },
    {
        path: 'mukadepan-hod',
        loadChildren: () => Promise.all(/*! import() | pages-mukadepan-hod-mukadepan-hod-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-mukadepan-hod-mukadepan-hod-module")]).then(__webpack_require__.bind(null, /*! ./pages/mukadepan-hod/mukadepan-hod.module */ "BseU")).then(m => m.MukadepanHodPageModule)
    },
    {
        path: 'home-boss',
        loadChildren: () => Promise.all(/*! import() | home-boss-home-boss-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("home-boss-home-boss-module")]).then(__webpack_require__.bind(null, /*! ./home-boss/home-boss.module */ "xbfX")).then(m => m.HomeBossPageModule)
    },
    {
        path: 'leaveapproval',
        loadChildren: () => Promise.all(/*! import() | pages-leaveapproval-leaveapproval-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-leaveapproval-leaveapproval-module")]).then(__webpack_require__.bind(null, /*! ./pages/leaveapproval/leaveapproval.module */ "+N/3")).then(m => m.LeaveapprovalPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
            // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map