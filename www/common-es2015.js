(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+PL+":
/*!*****************************************************!*\
  !*** ./src/app/components/start/start.component.ts ***!
  \*****************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_start_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./start.component.html */ "kPKb");
/* harmony import */ var _start_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start.component.scss */ "MNc6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let StartComponent = class StartComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateToLoginPage() {
        this.router.navigate(['login']);
    }
};
StartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
StartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-start',
        template: _raw_loader_start_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_start_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StartComponent);



/***/ }),

/***/ "1HE4":
/*!*****************************************************!*\
  !*** ./src/app/approve-modal/approve-modal.page.ts ***!
  \*****************************************************/
/*! exports provided: ApproveModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveModalPage", function() { return ApproveModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_approve_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./approve-modal.page.html */ "lTO4");
/* harmony import */ var _approve_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approve-modal.page.scss */ "9JMh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ "n90K");






let ApproveModalPage = class ApproveModalPage {
    constructor(modal, storage) {
        this.modal = modal;
        this.storage = storage;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.userData = this.storage.modalData;
        console.log(this.userData);
    }
    close() {
        this.modal.dismiss();
    }
    getHalfDate() {
        if (this.userData.datehalf == "0000-00-00") {
            return '';
        }
        else {
            return this.userData.datehalf;
        }
    }
    getDate(date) {
        if (date == "0000-00-00") {
            return '';
        }
        else {
            return date;
        }
    }
};
ApproveModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
ApproveModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-approve-modal',
        template: _raw_loader_approve_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_approve_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ApproveModalPage);



/***/ }),

/***/ "2g2N":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(infoMessage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: infoMessage,
                duration: 2000
            });
            toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "5DpU":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-list>\r\n    <ion-item (click)=\"navigateToProfilePage()\">\r\n      My Profile\r\n    </ion-item>\r\n    <ion-item (click)=\"goToHistory()\" >\r\n      History\r\n    </ion-item>\r\n    <ion-item (click)=\"signOut()\">\r\n      Logout\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "5Fp5":
/*!*****************************************!*\
  !*** ./src/app/config/auth-constant.ts ***!
  \*****************************************/
/*! exports provided: AuthConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthConstants", function() { return AuthConstants; });
class AuthConstants {
}
AuthConstants.AUTH = 'userData';


/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "8+mF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide>\r\n      <app-logo></app-logo>\r\n      <h2>Welcome to DynaConsurv HRApp</h2>\r\n      <p>Explore Us</p>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"displayed\">\r\n      <img src=\"assets/images/dynaxconsurv.png\"/>\r\n      </div>\r\n      <h2></h2>\r\n      <p></p>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <h2>We are</h2>\r\n      <p>Dyna Consurv</p>\r\n    </ion-slide>\r\n\r\n    \r\n");

/***/ }),

/***/ "9JMh":
/*!*******************************************************!*\
  !*** ./src/app/approve-modal/approve-modal.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcHJvdmUtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiYXBwcm92ZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogIzJDOURERTtcclxufSJdfQ== */");

/***/ }),

/***/ "AWzS":
/*!***********************************************!*\
  !*** ./src/app/resolver/userData.resolver.ts ***!
  \***********************************************/
/*! exports provided: UserDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataResolver", function() { return UserDataResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");



let UserDataResolver = class UserDataResolver {
    constructor(authService) {
        this.authService = authService;
    }
    resolve() {
        console.log('Hello');
        return this.authService.getUserData();
    }
};
UserDataResolver.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
UserDataResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserDataResolver);



/***/ }),

/***/ "DaWH":
/*!***************************************************!*\
  !*** ./src/app/leave-modal/leave-modal.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxlYXZlLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6ImxlYXZlLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjMkM5RERFO1xyXG59Il19 */");

/***/ }),

/***/ "Dm/a":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leave-modal/leave-modal.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color='light'>\r\n    <ion-title>Leave Approval</ion-title>\r\n    <ion-buttons slot='end'>\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name='close'></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n    Type:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label text-wrap>\r\n    {{userData.leavetype}}\r\n  </ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n    Reason:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label text-wrap>\r\n    {{userData.reason}}\r\n  </ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n      Staff Name:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label>\r\n    {{userData.staff_name}}\r\n  </ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n      Leave Day:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label>\r\n    {{userData.leaveday}}\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<!-- *ngIf=\"userData.datehalf=='0000-00-00'\" -->\r\n\r\n<ion-grid>\r\n<ion-row class='ion-text-center'>\r\n  <ion-col>\r\n    <strong>\r\n      Date From:<br>\r\n    </strong>\r\n      {{ getDate(userData.datefrom) }}\r\n  </ion-col>\r\n  <ion-col>\r\n      <strong>\r\n        Date End:<br>\r\n      </strong>\r\n      {{ getDate(userData.dateend) }}\r\n  </ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n        {{ getHalfDate(userData.datehalf) }}\r\n    </ion-col>\r\n    </ion-row>\r\n</ion-grid>\r\n\r\n<div *ngIf=\"userData.datehalf!='0000-00-00'\">\r\n<ion-item>\r\n  <ion-row>\r\n  <ion-col>\r\n      {{userData.datehalf}}\r\n  </ion-col>\r\n  </ion-row>\r\n</ion-item>\r\n</div>\r\n\r\n<ion-row>\r\n<ion-col>\r\n  <ion-button expand='full' color='danger' (click)=\"rejectLeave()\">\r\n    Reject\r\n  </ion-button>\r\n</ion-col>\r\n<ion-col>\r\n  <ion-button expand='full' color='primary' (click)=\"approveLeave()\">\r\n    Approve\r\n  </ion-button>\r\n</ion-col>\r\n</ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "EiNB":
/*!*******************************************************!*\
  !*** ./src/app/components/slides/slides.component.ts ***!
  \*******************************************************/
/*! exports provided: SlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesComponent", function() { return SlidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_slides_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./slides.component.html */ "8+mF");
/* harmony import */ var _slides_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slides.component.scss */ "Lslk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SlidesComponent = class SlidesComponent {
    constructor() {
        this.slideOpts = {
            speed: 400
        };
    }
};
SlidesComponent.ctorParameters = () => [];
SlidesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slides',
        template: _raw_loader_slides_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slides_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SlidesComponent);



/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "Lslk":
/*!*********************************************************!*\
  !*** ./src/app/components/slides/slides.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  padding: 140px 20px 140px 20px;\n  display: block;\n}\nion-slide img {\n  width: 100px;\n}\nion-slide h2 {\n  font-size: 27px;\n  font-weight: bold;\n}\n.displayed img {\n  width: 300px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGNBQUE7QUFDSjtBQUFJO0VBQ0EsWUFBQTtBQUVKO0FBQUk7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUdJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFBUiIsImZpbGUiOiJzbGlkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xyXG4gICAgcGFkZGluZzogMTQwcHggMjBweCAxNDBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAuZGlzcGxheWVkIGltZ3tcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gIFxyXG4iXX0= */");

/***/ }),

/***/ "MNc6":
/*!*******************************************************!*\
  !*** ./src/app/components/start/start.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button-container {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "N+K7":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    post(serviceName, data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const options = { headers: headers, withCredentials: false, contentType: 'application/json' };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl1 + serviceName;
        console.log(url, JSON.stringify(data), options, 'call');
        return this.http.post(url, JSON.stringify(data), options);
    }
    post1(serviceName, data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const options = { headers: headers, withCredentials: false, contentType: 'application/json' };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl3 + serviceName;
        console.log(url, JSON.stringify(data), options, 'call');
        return this.http.post(url, JSON.stringify(data), options);
    }
    post2(serviceName, data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        const options = { headers: headers, withCredentials: false, contentType: 'application/json' };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl2;
        //console.log(url,JSON.stringify(data),options,'call')
        return this.http.post(url, JSON.stringify(data), options);
    }
    get(url) {
        return new Promise((resolve, reject) => {
            this.http.get(url).subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "Rx4N":
/*!*************************************************!*\
  !*** ./src/app/leave-modal/leave-modal.page.ts ***!
  \*************************************************/
/*! exports provided: LeaveModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveModalPage", function() { return LeaveModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leave_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leave-modal.page.html */ "Dm/a");
/* harmony import */ var _leave_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-modal.page.scss */ "DaWH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/http.service */ "N+K7");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/storage.service */ "n90K");








let LeaveModalPage = class LeaveModalPage {
    constructor(modal, storage, authService, httpService) {
        this.modal = modal;
        this.storage = storage;
        this.authService = authService;
        this.httpService = httpService;
        this.userData = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.userData = this.storage.modalData;
        console.log(this.userData);
    }
    close() {
        this.modal.dismiss();
    }
    getHalfDate() {
        if (this.userData.datehalf == "0000-00-00") {
            return '';
        }
        else {
            return this.userData.datehalf;
        }
    }
    getDate(date) {
        if (date == "0000-00-00") {
            return '';
        }
        else {
            return date;
        }
    }
    rejectLeave() {
        //NOTE: Change action to reflect reject action
        this.httpService.post('leave/updateapprove', { leaveid: this.userData.leavedetailid, action: 1 })
            .subscribe(res => {
            console.log(res);
            this.close();
        });
    }
    approveLeave() {
        this.httpService.post('leave/updateapprove', { leaveid: this.userData.leavedetailid, action: 1 })
            .subscribe(res => {
            console.log(res);
            this.close();
        });
    }
};
LeaveModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }
];
LeaveModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leave-modal',
        template: _raw_loader_leave_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leave_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LeaveModalPage);



/***/ }),

/***/ "Ys3K":
/*!***********************************************************************!*\
  !*** ./src/app/components/shrink-header/shrink-header.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaHJpbmstaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ZONN":
/*!************************************************!*\
  !*** ./src/app/setting/setting.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "gnXD":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src='assets/images/hr.png' alt=\"HRApp log\"/>");

/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slides/slides.component */ "EiNB");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start/start.component */ "+PL+");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo/logo.component */ "o5g6");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shrink_header_shrink_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shrink-header/shrink-header.component */ "jvs9");








let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _shrink_header_shrink_header_component__WEBPACK_IMPORTED_MODULE_7__["ShrinkHeaderComponent"]],
        exports: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _shrink_header_shrink_header_component__WEBPACK_IMPORTED_MODULE_7__["ShrinkHeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]]
    })
], ComponentsModule);



/***/ }),

/***/ "jvs9":
/*!*********************************************************************!*\
  !*** ./src/app/components/shrink-header/shrink-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShrinkHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShrinkHeaderComponent", function() { return ShrinkHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shrink_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shrink-header.component.html */ "rkMx");
/* harmony import */ var _shrink_header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shrink-header.component.scss */ "Ys3K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ShrinkHeaderComponent = class ShrinkHeaderComponent {
    constructor(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.renderer.setStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollSub = this.scrollArea.ionScroll.subscribe(event => {
            console.log(event.detail.scrollTop);
            this.resizeHeader(event);
        });
    }
    resizeHeader(event) {
        this.domCtrl.write(() => {
            this.newHeaderHeight = this.headerHeight - event.detail.scrollTop;
            if (this.newHeaderHeight < 0)
                this.newHeaderHeight = 0;
            this.renderer.setStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
        });
    }
    ngOnDestroy() {
        if (this.scrollSub)
            this.scrollSub.unsubscribe();
    }
};
ShrinkHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["DomController"] }
];
ShrinkHeaderComponent.propDecorators = {
    scrollArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['scrollArea',] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['headerHeight',] }]
};
ShrinkHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shrink-header',
        template: _raw_loader_shrink_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shrink_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShrinkHeaderComponent);



/***/ }),

/***/ "kPKb":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"button-container\">\r\n    <ion-button expand=\"block\" share=\"round\" color='primary' (click)=\"navigateToLoginPage()\">Start!</ion-button>\r\n</div>");

/***/ }),

/***/ "l7Ag":
/*!**********************************************!*\
  !*** ./src/app/setting/setting.component.ts ***!
  \**********************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_setting_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./setting.component.html */ "5DpU");
/* harmony import */ var _setting_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.component.scss */ "ZONN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








let SettingComponent = class SettingComponent {
    constructor(authService, router, nav, popoverController) {
        this.authService = authService;
        this.router = router;
        this.nav = nav;
        this.popoverController = popoverController;
        this.postData = {
            staff_id: '',
            action: 0,
            staff_name: '',
            checkin: '',
            checkout: '',
            id: '',
        };
    }
    ngOnInit() {
        // this.siteInfo = this.navParams.get('site');
        console.log(this.site);
    }
    signOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.logout();
            this.popoverController.dismiss();
        });
    }
    eventFromPopover() {
        this.popoverController.dismiss('edupala.com');
    }
    navigateToProfilePage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['profile']);
            console.log('button is clicked');
            this.popoverController.dismiss();
        });
    }
    goToHistory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['history']);
            console.log('goHistory');
            this.popoverController.dismiss();
        });
    }
};
SettingComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
SettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-setting',
        template: _raw_loader_setting_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_setting_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingComponent);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _config_auth_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/auth-constant */ "5Fp5");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "N+K7");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage.service */ "n90K");







let AuthService = class AuthService {
    constructor(httpService, storageService, router) {
        this.httpService = httpService;
        this.storageService = storageService;
        this.router = router;
        this.userData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
    }
    getUserData() {
        this.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].AUTH).then(res => {
            console.log(res);
            this.userData$.next(res[0]);
        });
    }
    getUserDataPromise() {
        return new Promise((resolve, reject) => {
            this.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].AUTH).then(res => {
                console.log(res);
                resolve(res[0]);
            }, _ => {
                reject(null);
            });
        });
    }
    login(postData) {
        return this.httpService.post1('login', postData);
        // return this.httpService.post('logintest', postData);
    }
    //logout(postData: Observable<any>){
    //logout(postData: any): void {
    logout() {
        this.storageService.removeItem(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].AUTH).then(res => {
            this.userData$.next('');
            this.router.navigate(['']);
        });
    }
    applyleave(postData) {
        return new Promise((resolve, reject) => {
            this.httpService.post1('app/submitleave', postData)
                .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }
    leavedetail(postData) {
        return this.httpService.post('leavedetail', postData);
    }
    leavedetailPromise(postData) {
        return new Promise((resolve, reject) => {
            // console.log(postData);
            this.httpService.post('leavedetail', postData)
                .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }
    leaveapprove(postData) {
        return this.httpService.post('updateapprove', postData);
    }
    typeofleave(postData) {
        return this.httpService.post('leavetype', postData);
    }
    // leavebalance(postData: any): Observable<any> {
    //   console.log(postData);
    //   return this.httpService.post1('leavesummary/', postData);
    //   } 
    leavebalance(postData) {
        return this.httpService.post1('leavesummary/', postData);
    }
    leavebalancePromise(postData) {
        return new Promise((resolve, reject) => {
            // console.log(postData);
            this.httpService.post1('leavesummary/', postData)
                .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }
    checkIn(postData) {
        console.log(postData);
        return this.httpService.post2('dailycheck', postData);
    }
    checkOut(postData) {
        console.log(postData);
        return this.httpService.post2('dailycheck', postData);
    }
    listName(postData) {
        console.log(postData);
        return this.httpService.post2('dailycheck', postData);
    }
};
AuthService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "lTO4":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/approve-modal/approve-modal.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color='light'>\r\n    <ion-title>Leave Approval</ion-title>\r\n    <ion-buttons slot='end'>\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name='close'></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label>\r\n      <strong>\r\n      Type:\r\n      </strong>\r\n    </ion-label>\r\n    <ion-label text-wrap>\r\n      {{userData.leavetype}}\r\n    </ion-label>\r\n  </ion-item>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n    Reason:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label text-wrap>\r\n    {{userData.reason}}\r\n  </ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n      Staff Name:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label>\r\n    {{userData.staff_name}}\r\n  </ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label>\r\n    <strong>\r\n      Leave Day:\r\n    </strong>\r\n  </ion-label>\r\n  <ion-label>\r\n    {{userData.leaveday}}\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<!-- *ngIf=\"userData.datehalf=='0000-00-00'\" -->\r\n<ion-grid>\r\n<ion-row class='ion-text-center'>\r\n  <ion-col>\r\n    <strong>\r\n      Date From:<br>\r\n    </strong>\r\n      {{ getDate(userData.datefrom) }}\r\n  </ion-col>\r\n  <ion-col>\r\n      <strong>\r\n        Date End:<br>\r\n      </strong>\r\n      {{ getDate(userData.dateend) }}\r\n  </ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n        {{ getHalfDate(userData.datehalf) }}\r\n    </ion-col>\r\n    </ion-row>\r\n</ion-grid>\r\n\r\n<div *ngIf=\"userData.datehalf!='0000-00-00'\">\r\n<ion-item>\r\n  <ion-row>\r\n  <ion-col>\r\n      {{userData.datehalf}}\r\n  </ion-col>\r\n  </ion-row>\r\n</ion-item>\r\n</div>\r\n\r\n<!-- <ion-row>\r\n<ion-col>\r\n  <ion-button expand='full' color='danger'>\r\n    Reject\r\n  </ion-button>\r\n</ion-col>\r\n<ion-col>\r\n  <ion-button expand='full' color='primary'>\r\n    Approve\r\n  </ion-button>\r\n</ion-col>\r\n</ion-row> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "o5g6":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_logo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./logo.component.html */ "gnXD");
/* harmony import */ var _logo_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.component.scss */ "yrnK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LogoComponent = class LogoComponent {
    constructor() { }
    ngOnInit() { }
};
LogoComponent.ctorParameters = () => [];
LogoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logo',
        template: _raw_loader_logo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logo_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LogoComponent);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "rkMx":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shrink-header/shrink-header.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>");

/***/ }),

/***/ "yrnK":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map