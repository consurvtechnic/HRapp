(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-boss-home-boss-module"],{

/***/ "+rqp":
/*!***********************************************!*\
  !*** ./src/app/home-boss/home-boss.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .tab-selected {\n  color: #ffffff;\n  background-color: #2C9DDE;\n  border-radius: 30px 50px 0px 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUtYm9zcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFpQlEsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFmeEMiLCJmaWxlIjoiaG9tZS1ib3NzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC8vIGlvbi10YWItYmFyIHtcclxuICAgIC8vICAgICBib3JkZXI6IDA7XHJcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAvLyAgICAgcGFkZGluZzogMTVweDtcclxuICAgIC8vICAgICBpb24taWNvbiB7XHJcbiAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAvLyAgICAgbWF4LXdpZHRoOiA1NnB4O1xyXG4gICAgLy8gICAgIG1heC1oZWlnaHQ6IDM2cHg7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLnRhYi1zZWxlY3RlZHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkM5RERFO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggNTBweCAwcHggMHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "1Ycf":
/*!*********************************************!*\
  !*** ./src/app/home-boss/home-boss.page.ts ***!
  \*********************************************/
/*! exports provided: HomeBossPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBossPage", function() { return HomeBossPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_boss_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-boss.page.html */ "SsX6");
/* harmony import */ var _home_boss_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-boss.page.scss */ "+rqp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeBossPage = class HomeBossPage {
    constructor() { }
    ngOnInit() {
    }
};
HomeBossPage.ctorParameters = () => [];
HomeBossPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-boss',
        template: _raw_loader_home_boss_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_boss_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeBossPage);



/***/ }),

/***/ "BRCq":
/*!***********************************************!*\
  !*** ./src/app/home-boss/home-boss.router.ts ***!
  \***********************************************/
/*! exports provided: HomeBossRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBossRouter", function() { return HomeBossRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resolver_userData_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resolver/userData.resolver */ "AWzS");
/* harmony import */ var _home_boss_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-boss.page */ "1Ycf");





const routes = [
    {
        path: 'home-boss',
        component: _home_boss_page__WEBPACK_IMPORTED_MODULE_4__["HomeBossPage"],
        resolve: {
            userData: _resolver_userData_resolver__WEBPACK_IMPORTED_MODULE_3__["UserDataResolver"]
        },
        children: [
            {
                path: 'mukadepan',
                loadChildren: () => Promise.all(/*! import() | pages-mukadepan-hod-mukadepan-hod-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-mukadepan-hod-mukadepan-hod-module")]).then(__webpack_require__.bind(null, /*! ../pages/mukadepan-hod/mukadepan-hod.module */ "BseU")).then(m => m.MukadepanHodPageModule)
            },
            {
                path: 'leaveapproval',
                loadChildren: () => Promise.all(/*! import() | pages-leaveapproval-leaveapproval-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-leaveapproval-leaveapproval-module")]).then(__webpack_require__.bind(null, /*! ../pages/leaveapproval/leaveapproval.module */ "+N/3")).then(m => m.LeaveapprovalPageModule)
            },
            {
                path: 'leavelist',
                loadChildren: () => Promise.all(/*! import() | pages-leavelist-leavelist-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-leavelist-leavelist-module")]).then(__webpack_require__.bind(null, /*! ../pages/leavelist/leavelist.module */ "QoW/")).then(m => m.LeavelistPageModule)
            },
            {
                path: 'calendar',
                loadChildren: () => Promise.all(/*! import() | pages-calendar-calendar-module */[__webpack_require__.e("default~pages-cal-modal-cal-modal-module~pages-calendar-calendar-module"), __webpack_require__.e("pages-calendar-calendar-module")]).then(__webpack_require__.bind(null, /*! ../pages/calendar/calendar.module */ "awFG")).then(m => m.CalendarPageModule)
            },
            {
                path: 'setting',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-setting-setting-module */ "pages-setting-setting-module").then(__webpack_require__.bind(null, /*! ../pages/setting/setting.module */ "hBK9")).then(m => m.SettingPageModule)
            },
        ]
    }
];
let HomeBossRouter = class HomeBossRouter {
};
HomeBossRouter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeBossRouter);



/***/ }),

/***/ "PXmj":
/*!*******************************************************!*\
  !*** ./src/app/home-boss/home-boss-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HomeBossPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBossPageRoutingModule", function() { return HomeBossPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_boss_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-boss.page */ "1Ycf");




const routes = [
    {
        path: '',
        component: _home_boss_page__WEBPACK_IMPORTED_MODULE_3__["HomeBossPage"]
    }
];
let HomeBossPageRoutingModule = class HomeBossPageRoutingModule {
};
HomeBossPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeBossPageRoutingModule);



/***/ }),

/***/ "SsX6":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-boss/home-boss.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n\r\n  <ion-tab-button tab=\"mukadepan\">\r\n  <ion-icon name=\"home-outline\"></ion-icon>\r\n  <ion-label>Home</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button tab=\"leaveapproval\">\r\n  <ion-icon name=\"paper-plane-outline\"></ion-icon>\r\n  <ion-label (click)=\"mintakCuti()\">Leave Approval</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button tab=\"leavelist\">\r\n  <ion-icon name=\"list-outline\"></ion-icon>\r\n  <ion-label>Leave List</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button tab=\"calendar\">\r\n  <ion-icon name=\"Calendar-outline\"></ion-icon>\r\n  <ion-label>Calendar</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button tab=\"setting\">\r\n  <ion-icon name=\"cog-outline\"></ion-icon>\r\n  <ion-label>Setting</ion-label>\r\n  </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "xbfX":
/*!***********************************************!*\
  !*** ./src/app/home-boss/home-boss.module.ts ***!
  \***********************************************/
/*! exports provided: HomeBossPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBossPageModule", function() { return HomeBossPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_boss_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-boss-routing.module */ "PXmj");
/* harmony import */ var _home_boss_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-boss.page */ "1Ycf");
/* harmony import */ var _home_boss_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-boss.router */ "BRCq");








let HomeBossPageModule = class HomeBossPageModule {
};
HomeBossPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_boss_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeBossPageRoutingModule"],
            _home_boss_router__WEBPACK_IMPORTED_MODULE_7__["HomeBossRouter"]
        ],
        declarations: [_home_boss_page__WEBPACK_IMPORTED_MODULE_6__["HomeBossPage"]]
    })
], HomeBossPageModule);



/***/ })

}]);
//# sourceMappingURL=home-boss-home-boss-module-es2015.js.map