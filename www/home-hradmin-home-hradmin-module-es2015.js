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
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: lato;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #7590d6;\n  background: linear-gradient(90deg, #7590d6 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50px;\n  border: 7px solid #5e7ccc;\n  margin-right: 14px;\n}\n\n.header-content h2 {\n  font-weight: 300px;\n  color: #fff;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.action-button ion-button {\n  text-transform: capitalize;\n  font-weight: 300;\n  --background: #628cff;\n  --border-radius: 7px;\n  --box-shadow: none;\n}\n\n.action-button ion-icon {\n  margin-right: 1px;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-icon {\n  margin-right: 20px;\n  color: #86979f;\n}\n\n.menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\n.menu-items .active {\n  border-left: 5px solid;\n  color: #628cff;\n  padding-left: 15px;\n}\n\n.menu-items .active ion-icon {\n  color: #628cff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUtaHJhZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDREQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBQVI7O0FBR0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFEUjs7QUFLQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBSUk7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBRlI7O0FBS0k7RUFDSSxpQkFBQTtBQUhSOztBQU9BO0VBQ0ksV0FBQTtBQUpKOztBQU1JO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBSlI7O0FBT0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBTFI7O0FBUUk7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU5SOztBQVFRO0VBQ0ksY0FBQTtBQU5aIiwiZmlsZSI6ImhvbWUtaHJhZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG59XHJcblxyXG4ubWVudS1oZWFkZXItYmcge1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTkwZDY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3NTkwZDYgMCUsICM0ZDcxZDcgMTAwJSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSg5OCwgMTQwLCAyNTUsIDAuNSk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMThweDtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmhlYWRlci1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzBweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGJvcmRlcjogN3B4IHNvbGlkICM1ZTdjY2M7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNjI4Y2ZmO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZW51LWl0ZW1zIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM4Njk3OWY7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQ7XHJcbiAgICAgICAgY29sb3I6ICM2MjhjZmY7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjI4Y2ZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4iXX0= */");

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