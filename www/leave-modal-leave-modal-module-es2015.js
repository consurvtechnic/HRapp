(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leave-modal-leave-modal-module"],{

/***/ "0tfx":
/*!***********************************************************!*\
  !*** ./src/app/leave-modal/leave-modal-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LeaveModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveModalPageRoutingModule", function() { return LeaveModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _leave_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leave-modal.page */ "Rx4N");




const routes = [
    {
        path: '',
        component: _leave_modal_page__WEBPACK_IMPORTED_MODULE_3__["LeaveModalPage"]
    }
];
let LeaveModalPageRoutingModule = class LeaveModalPageRoutingModule {
};
LeaveModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LeaveModalPageRoutingModule);



/***/ }),

/***/ "11sy":
/*!***************************************************!*\
  !*** ./src/app/leave-modal/leave-modal.module.ts ***!
  \***************************************************/
/*! exports provided: LeaveModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveModalPageModule", function() { return LeaveModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _leave_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leave-modal-routing.module */ "0tfx");
/* harmony import */ var _leave_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leave-modal.page */ "Rx4N");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");








let LeaveModalPageModule = class LeaveModalPageModule {
};
LeaveModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _leave_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeaveModalPageRoutingModule"],
        ],
        declarations: [_leave_modal_page__WEBPACK_IMPORTED_MODULE_6__["LeaveModalPage"]]
    })
], LeaveModalPageModule);



/***/ })

}]);
//# sourceMappingURL=leave-modal-leave-modal-module-es2015.js.map