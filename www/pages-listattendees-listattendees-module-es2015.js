(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-listattendees-listattendees-module"],{

/***/ "DMuj":
/*!***********************************************************!*\
  !*** ./src/app/pages/listattendees/listattendees.page.ts ***!
  \***********************************************************/
/*! exports provided: ListattendeesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListattendeesPage", function() { return ListattendeesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listattendees_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listattendees.page.html */ "GdIZ");
/* harmony import */ var _listattendees_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listattendees.page.scss */ "yJCb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");






let ListattendeesPage = class ListattendeesPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.displayUserData2 = [];
        this.postData = {
            staff_id: 1,
            action: 2,
        };
    }
    ngOnInit() {
        this.authService.listName(this.postData).subscribe((res) => {
            console.log('golist', res);
            let temp = [];
            (res.results).forEach(function (value) {
                console.log(value);
                temp.push({ staff_name: value.staff_name,
                    checkin: new Date(value.checkin) });
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
ListattendeesPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ListattendeesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listattendees',
        template: _raw_loader_listattendees_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listattendees_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListattendeesPage);



/***/ }),

/***/ "GdIZ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listattendees/listattendees.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title>List of Attendees</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item color='secondary'>\n      <ion-grid>\n        <ion-row>\n          <ion-col>Name:</ion-col>\n          <ion-col>Time & Date:</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-grid>\n        <ion-row *ngFor=\"let a of displayUserData2\" ><ion-col>{{a.staff_name}}</ion-col><ion-col>{{a.checkin | date:'EEEE, h:mm a, dd/MM/yyyy '}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <!-- <div class=\"bawah\">\n    <ion-button (click)=\"goBack()\" expand=\"block\" color=\"secondary\" style=\"width: fit-content; margin: auto;\" >Back to Homepage</ion-button>\n  </div> -->\n  \n</ion-content>\n");

/***/ }),

/***/ "NByi":
/*!*************************************************************!*\
  !*** ./src/app/pages/listattendees/listattendees.module.ts ***!
  \*************************************************************/
/*! exports provided: ListattendeesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListattendeesPageModule", function() { return ListattendeesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _listattendees_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listattendees-routing.module */ "hnu1");
/* harmony import */ var _listattendees_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listattendees.page */ "DMuj");







let ListattendeesPageModule = class ListattendeesPageModule {
};
ListattendeesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listattendees_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListattendeesPageRoutingModule"]
        ],
        declarations: [_listattendees_page__WEBPACK_IMPORTED_MODULE_6__["ListattendeesPage"]]
    })
], ListattendeesPageModule);



/***/ }),

/***/ "hnu1":
/*!*********************************************************************!*\
  !*** ./src/app/pages/listattendees/listattendees-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListattendeesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListattendeesPageRoutingModule", function() { return ListattendeesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _listattendees_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listattendees.page */ "DMuj");




const routes = [
    {
        path: '',
        component: _listattendees_page__WEBPACK_IMPORTED_MODULE_3__["ListattendeesPage"]
    }
];
let ListattendeesPageRoutingModule = class ListattendeesPageRoutingModule {
};
ListattendeesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListattendeesPageRoutingModule);



/***/ }),

/***/ "yJCb":
/*!*************************************************************!*\
  !*** ./src/app/pages/listattendees/listattendees.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpc3RhdHRlbmRlZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksa0JBQWE7RUFDYixjQUFjO0FBTmxCIiwiZmlsZSI6Imxpc3RhdHRlbmRlZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmJhd2Foe1xuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIGJvdHRvbTogMTB2aDtcbi8vICAgICByaWdodDogMDtcbi8vIH1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tbWluLWhlaWdodDogNTBweDtcbiAgICBjb2xvcjogIzJDOURERTtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-listattendees-listattendees-module-es2015.js.map