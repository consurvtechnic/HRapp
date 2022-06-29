(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "1mSK":
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./history.page.html */ "yyvh");
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.page.scss */ "X84x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");






let HistoryPage = class HistoryPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.displayUserData2 = [];
        this.userInfo = {};
        this.postData = {
            staff_id: '',
            action: 2,
        };
    }
    ngOnInit() {
        this.authService.userData$.subscribe((res) => {
            this.displayUserData = res;
            this.postData.staff_id = this.displayUserData.staff_id;
        });
        this.authService.listName(this.postData).subscribe((res) => {
            console.log('goHistory', res);
            let temp = [];
            (res.results).forEach(function (value) {
                console.log(value);
                temp.push({ staff_name: value.staff_name,
                    checkin: new Date(value.checkin),
                    checkout: new Date(value.checkout),
                    location: value.location,
                });
            });
            this.displayUserData2 = temp;
            console.log(this.displayUserData2);
        });
        /*this.authService.userData$.subscribe((res: any) => {
          this.displayUserData2 = res.results;
          console.log(res);
          
        })*/
    }
};
HistoryPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history',
        template: _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HistoryPage);



/***/ }),

/***/ "6F3i":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ "f9vg");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "1mSK");







let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"]
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "X84x":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: lato;\n}\n\nion-col {\n  border: 1px solid grey;\n  text-align: center;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNJLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSxrQkFBYTtFQUNiLGNBQWM7QUFDbEIiLCJmaWxlIjoiaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICMyQzlEREU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "f9vg":
/*!*********************************************************!*\
  !*** ./src/app/pages/history/history-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function() { return HistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.page */ "1mSK");




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ "yyvh":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>History</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n     <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item color=\"secondary\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>Check In:</ion-col>\r\n          <ion-col>Check Out:</ion-col>\r\n          <ion-col>Location:</ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-grid>\r\n        <ion-row *ngFor=\"let a of displayUserData2\" >\r\n          <ion-col>{{a.checkin | date:'EEEE, h:mm a'}}</ion-col>\r\n          <ion-col>\r\n            {{a.checkout | date:'h:mm a'}}\r\n          </ion-col>\r\n          <ion-col >{{a.location}}</ion-col>\r\n        </ion-row>\r\n        <!-- <ion-row *ngFor=\"let a of displayUserData2\" ><ion-col>{{a.location}}</ion-col><ion-col >{{a.location}}</ion-col> -->\r\n        <!-- </ion-row> -->\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=pages-history-history-module-es2015.js.map