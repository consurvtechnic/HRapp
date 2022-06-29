(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-hradmin-home-hradmin-module"],{

/***/ "4bGK":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-hradmin/home-hradmin.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" content-id=\"main-content\">\r\n  \r\n  <!-- <ion-header>\r\n    <ion-toolbar translucent>\r\n      <ion-title>Menu</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header> -->\r\n  \r\n  <ion-content>\r\n    <div class=\"menu-header-bg\"></div>\r\n    <div class=\"header-content\">\r\n      <img src=\"assets/images/user.png\" alt=\"\">\r\n      <ion-label>\r\n        <h2>Ms. Farahin</h2>\r\n        <p>HR Manager (admin) </p>\r\n      </ion-label>\r\n    </div>\r\n\r\n    <!-- Add new staff -->\r\n    <div class=\"action-button\">\r\n      <ion-button (click)=\"navigateToAddStaff()\">\r\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon> Add Staff\r\n      </ion-button>\r\n    </div>\r\n\r\n    <!-- Home button -->\r\n    <ion-list class=\"menu-items\" lines=\"none\">\r\n      <ion-item (click)=\"navigateToDashboard()\">\r\n        <ion-icon name=\"home-outline\" ></ion-icon>\r\n        <ion-label>Home</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"active\" (click)=\"navigateToStaff()\">\r\n        <ion-icon name=\"person-outline\" ></ion-icon>\r\n        <ion-label>Staff</ion-label>\r\n      </ion-item>\r\n      <ion-item (click)=\"navigateToLeaveRules()\">\r\n        <ion-icon name=\"bag-check-outline\" ></ion-icon>\r\n        <ion-label>Leave Rules</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon name=\"calendar-clear-outline\" ></ion-icon>\r\n        <ion-label>Leave Balance</ion-label>\r\n      </ion-item>\r\n      <ion-item (click)=\"signOut()\">\r\n        <ion-icon name=\"exit-outline\" ></ion-icon>\r\n        <ion-label>Log out</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<div class=\"ion-page\" id=\"main-content\">\r\n\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Dashboard</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"ion-padding\">\r\n    <ion-button expand=\"block\" onclick=\"openMenu()\">Open Menu</ion-button>\r\n  </ion-content>\r\n</div>\r\n");

/***/ }),

/***/ "5ZJT":
/*!*************************************************************!*\
  !*** ./src/app/home-hradmin/home-hradmin-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeHRadminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHRadminPageRoutingModule", function() { return HomeHRadminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_hradmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-hradmin.page */ "TC1P");




const routes = [
    {
        path: '',
        component: _home_hradmin_page__WEBPACK_IMPORTED_MODULE_3__["HomeHRadminPage"]
    }
];
let HomeHRadminPageRoutingModule = class HomeHRadminPageRoutingModule {
};
HomeHRadminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeHRadminPageRoutingModule);



/***/ }),

/***/ "EUcd":
/*!*****************************************************!*\
  !*** ./src/app/home-hradmin/home-hradmin.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeHRadminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHRadminPageModule", function() { return HomeHRadminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_hradmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-hradmin-routing.module */ "5ZJT");
/* harmony import */ var _home_hradmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-hradmin.page */ "TC1P");
/* harmony import */ var _home_hradmin_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-hradmin.router */ "sNJq");








let HomeHRadminPageModule = class HomeHRadminPageModule {
};
HomeHRadminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_hradmin_router__WEBPACK_IMPORTED_MODULE_7__["HomeAdminRouter"],
            _home_hradmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeHRadminPageRoutingModule"]
        ],
        declarations: [_home_hradmin_page__WEBPACK_IMPORTED_MODULE_6__["HomeHRadminPage"]]
    })
], HomeHRadminPageModule);



/***/ }),

/***/ "TC1P":
/*!***************************************************!*\
  !*** ./src/app/home-hradmin/home-hradmin.page.ts ***!
  \***************************************************/
/*! exports provided: HomeHRadminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHRadminPage", function() { return HomeHRadminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_hradmin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-hradmin.page.html */ "4bGK");
/* harmony import */ var _home_hradmin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-hradmin.page.scss */ "jQjD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let HomeHRadminPage = class HomeHRadminPage {
    constructor(authService, router, popoverController) {
        this.authService = authService;
        this.router = router;
        this.popoverController = popoverController;
        this.postData = {
            staff_id: '',
            staff_name: '',
            password: '',
            status: '',
        };
    }
    ngOnInit() {
    }
    navigateToDashboard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['./mukadepan-admin']);
            console.log('home button is clicked');
        });
    }
    navigateToStaff() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['./staff']);
            console.log('button is clicked');
        });
    }
    navigateToAddStaff() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //await this.router.navigate(['./signup']);
            console.log('add staff button is clicked');
        });
    }
    navigateToLeaveRules() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['./leaverules']);
            console.log('button is clicked');
        });
    }
    signOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.popoverController.dismiss();
        });
    }
};
HomeHRadminPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] }
];
HomeHRadminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-hradmin',
        template: _raw_loader_home_hradmin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_hradmin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeHRadminPage);



/***/ }),

/***/ "jQjD":
/*!*****************************************************!*\
  !*** ./src/app/home-hradmin/home-hradmin.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: lato;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #7590d6;\n  background: linear-gradient(90deg, #7590d6 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50px;\n  border: 7px solid #5e7ccc;\n  margin-right: 14px;\n}\n\n.header-content h2 {\n  font-weight: 300px;\n  color: #fff;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.action-button ion-button {\n  text-transform: capitalize;\n  font-weight: 300;\n  --background: #628cff;\n  --border-radius: 7px;\n  --box-shadow: none;\n}\n\n.action-button ion-icon {\n  margin-right: 1px;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-icon {\n  margin-right: 20px;\n  color: #86979f;\n}\n\n.menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\n.menu-items .active {\n  border-left: 5px solid;\n  color: #628cff;\n  padding-left: 15px;\n}\n\n.menu-items .active ion-icon {\n  color: #628cff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUtaHJhZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw0REFBNEQ7RUFDNUQsZ0RBQWdEO0VBQ2hELHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3ZCOztBQU5BO0VBUVEsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUUxQjs7QUFkQTtFQWdCUSxrQkFBa0I7RUFDbEIsV0FBVztBQUVuQjs7QUFuQkE7RUFxQlEsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBRTdCOztBQUVBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDdkI7O0FBSkE7RUFNUSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLHFCQUFhO0VBQ2Isb0JBQWdCO0VBQ2hCLGtCQUFhO0FBRXJCOztBQVpBO0VBY1EsaUJBQWlCO0FBRXpCOztBQUVBO0VBQ0ksV0FBVztBQUNmOztBQUZBO0VBSVEsa0JBQWtCO0VBQ2xCLGNBQWM7QUFFdEI7O0FBUEE7RUFTUSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBRTNCOztBQVpBO0VBY1Esc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7QUFFMUI7O0FBbEJBO0VBbUJZLGNBQWM7QUFHMUIiLCJmaWxlIjoiaG9tZS1ocmFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbn1cclxuXHJcbi5tZW51LWhlYWRlci1iZyB7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1OTBkNjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc1OTBkNiAwJSwgIzRkNzFkNyAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDk4LCAxNDAsIDI1NSwgMC41KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiA3cHggc29saWQgIzVlN2NjYztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICM2MjhjZmY7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1lbnUtaXRlbXMge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjogIzg2OTc5ZjtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcclxuICAgICAgICBjb2xvcjogIzYyOGNmZjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2MjhjZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "sNJq":
/*!*****************************************************!*\
  !*** ./src/app/home-hradmin/home-hradmin.router.ts ***!
  \*****************************************************/
/*! exports provided: HomeAdminRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminRouter", function() { return HomeAdminRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resolver_userData_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resolver/userData.resolver */ "AWzS");
/* harmony import */ var _home_hradmin_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-hradmin.page */ "TC1P");





const routes = [
    {
        path: 'home-hradmin',
        component: _home_hradmin_page__WEBPACK_IMPORTED_MODULE_4__["HomeHRadminPage"],
        resolve: {
            userData: _resolver_userData_resolver__WEBPACK_IMPORTED_MODULE_3__["UserDataResolver"]
        },
        children: [
            {
                path: 'mukadepan',
                loadChildren: () => Promise.all(/*! import() | pages-mukadepan-mukadepan-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-mukadepan-mukadepan-module")]).then(__webpack_require__.bind(null, /*! ../pages/mukadepan/mukadepan.module */ "XSHW")).then(m => m.MukadepanPageModule)
            },
            {
                path: 'mukadepanadmin',
                loadChildren: () => Promise.all(/*! import() | pages-mukadepan-admin-mukadepan-admin-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-mukadepan-admin-mukadepan-admin-module")]).then(__webpack_require__.bind(null, /*! ../pages/mukadepan-admin/mukadepan-admin.module */ "6EAb")).then(m => m.MukadepanAdminPageModule)
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
let HomeAdminRouter = class HomeAdminRouter {
};
HomeAdminRouter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeAdminRouter);



/***/ })

}]);
//# sourceMappingURL=home-hradmin-home-hradmin-module-es2015.js.map