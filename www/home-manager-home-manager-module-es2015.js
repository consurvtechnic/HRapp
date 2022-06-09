(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-manager-home-manager-module"],{

/***/ "3mmL":
/*!***************************************************!*\
  !*** ./src/app/home-manager/home-manager.page.ts ***!
  \***************************************************/
/*! exports provided: HomeManagerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeManagerPage", function() { return HomeManagerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_manager_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-manager.page.html */ "Qw2y");
/* harmony import */ var _home_manager_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-manager.page.scss */ "b/vs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeManagerPage = class HomeManagerPage {
    constructor() { }
    ngOnInit() {
    }
};
HomeManagerPage.ctorParameters = () => [];
HomeManagerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-manager',
        template: _raw_loader_home_manager_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_manager_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeManagerPage);



/***/ }),

/***/ "5xhe":
/*!*****************************************************!*\
  !*** ./src/app/home-manager/home-manager.router.ts ***!
  \*****************************************************/
/*! exports provided: HomeManagerRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeManagerRouter", function() { return HomeManagerRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resolver_userData_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resolver/userData.resolver */ "AWzS");
/* harmony import */ var _home_manager_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-manager.page */ "3mmL");





const routes = [
    {
        path: 'home-manager',
        component: _home_manager_page__WEBPACK_IMPORTED_MODULE_4__["HomeManagerPage"],
        resolve: {
            userData: _resolver_userData_resolver__WEBPACK_IMPORTED_MODULE_3__["UserDataResolver"]
        },
        children: [
            {
                path: 'mukadepan',
                loadChildren: () => Promise.all(/*! import() | pages-mukadepan-hod-mukadepan-hod-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-mukadepan-hod-mukadepan-hod-module")]).then(__webpack_require__.bind(null, /*! ../pages/mukadepan-hod/mukadepan-hod.module */ "BseU")).then(m => m.MukadepanHodPageModule)
            },
            {
                path: 'applyleave',
                loadChildren: () => Promise.all(/*! import() | pages-applyleave-applyleave-module */[__webpack_require__.e("default~approve-modal-approve-modal-module~home-boss-home-boss-module~home-home-module~home-hradmin-~5c01b0f9"), __webpack_require__.e("common"), __webpack_require__.e("pages-applyleave-applyleave-module")]).then(__webpack_require__.bind(null, /*! ../pages/applyleave/applyleave.module */ "xN67")).then(m => m.ApplyleavePageModule)
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
let HomeManagerRouter = class HomeManagerRouter {
};
HomeManagerRouter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeManagerRouter);



/***/ }),

/***/ "Qw2y":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-manager/home-manager.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n\r\n  <ion-tab-button tab=\"mukadepan\">\r\n  <ion-icon name=\"home-outline\"></ion-icon>\r\n  <ion-label>Home</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button tab=\"applyleave\">\r\n  <ion-icon name=\"paper-plane-outline\"></ion-icon>\r\n  <ion-label (click)=\"mintakCuti()\">Apply Leave</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button tab=\"leavelist\">\r\n  <ion-icon name=\"list-outline\"></ion-icon>\r\n  <ion-label>Leave List</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button tab=\"calendar\">\r\n  <ion-icon name=\"Calendar-outline\"></ion-icon>\r\n  <ion-label>Calendar</ion-label>\r\n  </ion-tab-button>\r\n\r\n  <ion-tab-button tab=\"setting\">\r\n  <ion-icon name=\"cog-outline\"></ion-icon>\r\n  <ion-label>Setting</ion-label>\r\n  </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "b/vs":
/*!*****************************************************!*\
  !*** ./src/app/home-manager/home-manager.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .tab-selected {\n  color: #ffffff;\n  background-color: #2C9DDE;\n  border-radius: 30px 50px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUtbWFuYWdlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JJO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUFmUiIsImZpbGUiOiJob21lLW1hbmFnZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLy8gaW9uLXRhYi1iYXIge1xyXG4gICAgLy8gICAgIGJvcmRlcjogMDtcclxuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC8vICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLy8gICAgIGlvbi1pY29uIHtcclxuICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlvbi10YWItYnV0dG9uIHtcclxuICAgIC8vICAgICBtYXgtd2lkdGg6IDU2cHg7XHJcbiAgICAvLyAgICAgbWF4LWhlaWdodDogMzZweDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAudGFiLXNlbGVjdGVke1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzlEREU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweCA1MHB4IDBweCAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "gHsv":
/*!*****************************************************!*\
  !*** ./src/app/home-manager/home-manager.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeManagerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeManagerPageModule", function() { return HomeManagerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-manager-routing.module */ "ozkU");
/* harmony import */ var _home_manager_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-manager.page */ "3mmL");
/* harmony import */ var _home_manager_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-manager.router */ "5xhe");








let HomeManagerPageModule = class HomeManagerPageModule {
};
HomeManagerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeManagerPageRoutingModule"],
            _home_manager_router__WEBPACK_IMPORTED_MODULE_7__["HomeManagerRouter"]
        ],
        declarations: [_home_manager_page__WEBPACK_IMPORTED_MODULE_6__["HomeManagerPage"]]
    })
], HomeManagerPageModule);



/***/ }),

/***/ "ozkU":
/*!*************************************************************!*\
  !*** ./src/app/home-manager/home-manager-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeManagerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeManagerPageRoutingModule", function() { return HomeManagerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_manager_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-manager.page */ "3mmL");




const routes = [
    {
        path: '',
        component: _home_manager_page__WEBPACK_IMPORTED_MODULE_3__["HomeManagerPage"]
    }
];
let HomeManagerPageRoutingModule = class HomeManagerPageRoutingModule {
};
HomeManagerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeManagerPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=home-manager-home-manager-module-es2015.js.map