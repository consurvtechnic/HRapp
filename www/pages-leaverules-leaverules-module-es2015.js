(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leaverules-leaverules-module"],{

/***/ "Tr91":
/*!*****************************************************!*\
  !*** ./src/app/pages/leaverules/leaverules.page.ts ***!
  \*****************************************************/
/*! exports provided: LeaverulesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaverulesPage", function() { return LeaverulesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leaverules_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leaverules.page.html */ "WyJK");
/* harmony import */ var _leaverules_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaverules.page.scss */ "f4gE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LeaverulesPage = class LeaverulesPage {
    constructor() {
        this.segmentValue = '1';
        this.requests = [];
        this.donors = [];
        this.newHeight = 0;
    }
    ngOnInit() {
        console.log('ngOnInit');
        this.donors = [
            { id: 1, name: 'Noriko Rusk', age: 25, position: 'Engineer', gender: 'Female', company: 'Consurv', photo: 'assets/images/4.png', distance: 0.5, phone: '9999900000', email: 'abc@xyz.com' },
            { id: 2, name: 'Carl Sweat', age: 22, position: 'Engineer', gender: 'Male', company: 'Consurv', photo: 'assets/images/2.png', distance: 2, phone: '9999900001', email: 'abc1@xyz.com' },
            { id: 3, name: 'Phoebe Jackson', age: 27, position: 'Engineer', gender: 'Female', company: 'Dyna', photo: 'assets/images/3.png', distance: 6, phone: '9999900002', email: 'abc2@xyz.com' },
            { id: 4, name: 'Bajrang Bali', age: 35, position: 'Engineer', gender: 'Male', company: 'Dyna', photo: 'assets/images/1.png', distance: 10, phone: '9999900003', email: 'abc3@xyz.com' },
            { id: 5, name: 'Lan T\'ang', age: 30, position: 'Engineer', gender: 'Male', company: 'Dyna', photo: 'assets/images/2.png', distance: 12, phone: '9999900004', email: 'abc4@xyz.com' },
            { id: 6, name: 'S. Dilshan', age: 45, position: 'Engineer', gender: 'Male', company: 'Dyna', photo: 'assets/images/2.png', distance: 14.5, phone: '9999900005', email: 'ab5@xyz.com' },
            { id: 7, name: 'Amy D\'Souza', age: 20, position: 'Engineer', gender: 'Female', company: 'Consurv', photo: 'assets/images/3.png', distance: 16.7, phone: '9999900006', email: 'abc6@xyz.com' }
        ];
        this.requests = [
            { id: 1, name: 'Jessika Lynch', age: 20, position: 'Engineer', gender: 'Female', company: 'Consurv', photo: 'assets/images/3.png', distance: 1, phone: '9999900010', email: 'xyz1@xyz.com' },
            { id: 2, name: 'Chris Manhattan', age: 29, position: 'IT Manager', gender: 'Male', company: 'Dyna', photo: 'assets/images/2.png', distance: 1.5, phone: '9999900020', email: 'xyz2@xyz.com' },
            { id: 3, name: 'Sanya Iyer', age: 45, position: 'Engineer', gender: 'Male', company: 'Dyna', photo: 'assets/images/4.png', distance: 3, phone: '9999900030', email: 'xyz3@xyz.com' },
        ];
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }
    segmentChanged(event) {
        console.log(event);
        this.segmentValue = event.detail.value;
    }
    scroll(event) {
        const value = event.detail.scrollTop;
        console.log(value, this.newHeight);
        if (value > 40) {
            this.newHeight += 5; // this.newHeight = this.newHeight + 5
        }
        else {
            this.newHeight = 0;
        }
        if (value > 180 && this.newHeight <= 65) {
            this.newHeight += 50;
        }
    }
};
LeaverulesPage.ctorParameters = () => [];
LeaverulesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leaverules',
        template: _raw_loader_leaverules_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leaverules_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LeaverulesPage);



/***/ }),

/***/ "U2yf":
/*!***************************************************************!*\
  !*** ./src/app/pages/leaverules/leaverules-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: LeaverulesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaverulesPageRoutingModule", function() { return LeaverulesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _leaverules_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaverules.page */ "Tr91");




const routes = [
    {
        path: '',
        component: _leaverules_page__WEBPACK_IMPORTED_MODULE_3__["LeaverulesPage"]
    }
];
let LeaverulesPageRoutingModule = class LeaverulesPageRoutingModule {
};
LeaverulesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LeaverulesPageRoutingModule);



/***/ }),

/***/ "WyJK":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaverules/leaverules.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"light\">\n    <ion-title class=\"ion-text-left\">\n    LEAVE RULES\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\">\n    <ion-item color=\"light\">\n      <ion-label class=\"heading\">Set rules for each roles</ion-label>\n      <!-- <ion-button slot=\"end\" fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n      </ion-button> -->\n    </ion-item>\n    \n    <ion-item-group>\n      <ion-item class=\"ion-padding-vertical popItem\" \n        *ngFor=\"let item of (segmentValue == '1') ? requests : donors\">\n        <ion-label slot=\"start\">\n          <ion-note color=\"dark\"><b>{{item?.name}}</b></ion-note>\n          <p class=\"ion-text-wrap\">{{item?.position}}</p>\n          \n        </ion-label>\n        <ion-fab vertical=\"top\" horizontal=\"end\">\n          <ion-fab-button size=\"small\" color=\"white\">\n            <img [src]=\"item?.photo\"/>\n          </ion-fab-button>\n        </ion-fab>\n        <ion-list>\n          <ion-item>\n            <ion-button color=\"warning\"><ion-label>Rules</ion-label>\n              <ion-select>\n                <ion-select-option value=\"1\">1</ion-select-option>\n                <ion-select-option value=\"2\">2</ion-select-option>\n          </ion-select></ion-button>\n        </ion-item>\n        </ion-list>\n          \n    \n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "f4gE":
/*!*******************************************************!*\
  !*** ./src/app/pages/leaverules/leaverules.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: var(--ion-color-light);\n}\n\nion-header app-shrink-header {\n  display: block;\n  overflow: hidden;\n}\n\nion-header app-shrink-header ion-grid {\n  background: var(--ion-color-primary);\n  margin-top: -5px;\n  border-radius: 0 0 5px 5px;\n}\n\nion-header app-shrink-header .popover {\n  background: var(--ion-color-white);\n  border-radius: 10px;\n  width: 90%;\n  margin: auto;\n}\n\nion-header app-shrink-header .popover ion-item ion-label {\n  margin: 0;\n}\n\nion-header app-shrink-header .popover ion-item ion-label h1 {\n  font-size: 1.8rem;\n}\n\nion-header app-shrink-header .popover ion-item ion-label p {\n  margin-top: 3px;\n  font-size: 0.8rem;\n}\n\nion-header app-shrink-header .popover ion-item ion-label ion-text {\n  font-size: 0.7rem;\n}\n\nion-header app-shrink-header .popover canvas {\n  height: 70px !important;\n}\n\nion-header div {\n  background: var(--ion-color-light);\n}\n\nion-header div ion-segment {\n  --background: var(--ion-color-white);\n  border-radius: 20px;\n  --margin-top: 5px;\n  --margin-bottom: 5px;\n}\n\nion-header div ion-segment ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  --border-radius: 20px;\n  --color: var(--ion-color-primary);\n  --color-checked: var(--ion-color-white);\n}\n\nion-content {\n  --background: var(--ion-color-light);\n}\n\nion-content ion-list {\n  background: var(--ion-color-light);\n}\n\nion-content ion-list .heading {\n  font-family: lato;\n}\n\nion-content ion-list .popItem {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 15px;\n  border-radius: 10px;\n  padding: 0;\n}\n\nion-content ion-list .popItem ion-thumbnail {\n  min-width: 5rem;\n  min-height: 6rem;\n  border-radius: 10px;\n  background: var(--ion-color-secondary);\n}\n\nion-content ion-list .popItem ion-thumbnail div {\n  background-color: var(--ion-color-primary);\n  border-radius: 10px 10px 0 0;\n  padding-bottom: 2px;\n}\n\nion-content ion-list .popItem ion-thumbnail div ion-text {\n  font-size: 0.7rem;\n  font-weight: bold;\n}\n\nion-content ion-list .popItem ion-thumbnail p ion-text {\n  font-size: 1.2rem !important;\n}\n\nion-content ion-list .popItem ion-label ion-note {\n  font-size: 1.1rem;\n  letter-spacing: 0.5px;\n}\n\nion-content ion-list .popItem ion-label p {\n  margin-top: 5px;\n}\n\nion-content ion-list .popItem ion-label p ion-text span {\n  color: var(--ion-color-dark);\n  padding: 0 5px;\n}\n\nion-content ion-list .popItem ion-fab {\n  margin-right: -15px !important;\n  margin-top: -10px;\n}\n\n* {\n  font-family: lato;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xlYXZlcnVsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQWtDO0FBQ3RDOztBQUZBO0VBR00sY0FBYztFQUNkLGdCQUFnQjtBQUd0Qjs7QUFQQTtFQU1RLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBS2xDOztBQWJBO0VBWVEsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtBQUtwQjs7QUFwQkE7RUFtQlksU0FBUztBQUtyQjs7QUF4QkE7RUFxQmUsaUJBQWlCO0FBT2hDOztBQTVCQTtFQXdCZSxlQUFlO0VBQ2YsaUJBQWlCO0FBUWhDOztBQWpDQTtFQTRCYyxpQkFBaUI7QUFTL0I7O0FBckNBO0VBaUNVLHVCQUF1QjtBQVFqQzs7QUF6Q0E7RUFzQ00sa0NBQWtDO0FBT3hDOztBQTdDQTtFQXdDUSxvQ0FBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBYTtFQUNiLG9CQUFnQjtBQVN4Qjs7QUFwREE7RUE2Q1UsOENBQXFCO0VBQ3JCLDJDQUFrQjtFQUNsQixxQkFBZ0I7RUFDaEIsaUNBQVE7RUFDUix1Q0FBZ0I7QUFXMUI7O0FBTEU7RUFDRSxvQ0FBYTtBQVFqQjs7QUFURTtFQUdJLGtDQUFrQztBQVV4Qzs7QUFiRTtFQUtNLGlCQUFpQjtBQVl6Qjs7QUFqQkU7RUFRTSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsVUFBVTtBQWFsQjs7QUF6QkU7RUFjUSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQ0FBc0M7QUFlaEQ7O0FBaENFO0VBbUJVLDBDQUEwQztFQUMxQyw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBaUIvQjs7QUF0Q0U7RUF1QlksaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQW1CL0I7O0FBM0NFO0VBNkJZLDRCQUE0QjtBQWtCMUM7O0FBL0NFO0VBbUNVLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFnQmpDOztBQXBERTtFQXVDVSxlQUFlO0FBaUIzQjs7QUF4REU7RUEwQ2MsNEJBQTRCO0VBQzVCLGNBQWM7QUFrQjlCOztBQTdERTtFQWlEUSw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBZ0IzQjs7QUFWQTtFQUNJLGlCQUFpQjtBQWFyQjs7QUFWQTtFQUNFLGtCQUFhO0VBQ2IsY0FBYztBQWFoQiIsImZpbGUiOiJsZWF2ZXJ1bGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYXBwLXNocmluay1oZWFkZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaW9uLWdyaWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XG4gICAgICB9XG4gICAgICAucG9wb3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogLTEyMHB4O1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZGl2IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBpb24tc2VnbWVudCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgLS1tYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBpb24tbGlzdCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgLmhlYWRpbmcge1xuICAgICAgICBmb250LWZhbWlseTogbGF0bztcbiAgICAgIH1cbiAgICAgIC5wb3BJdGVtIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDVyZW07XG4gICAgICAgICAgbWluLWhlaWdodDogNnJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBpb24tbm90ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWZhYiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbiAgY29sb3I6ICMyQzlEREU7XG59Il19 */");

/***/ }),

/***/ "kUyV":
/*!*******************************************************!*\
  !*** ./src/app/pages/leaverules/leaverules.module.ts ***!
  \*******************************************************/
/*! exports provided: LeaverulesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaverulesPageModule", function() { return LeaverulesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _leaverules_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leaverules-routing.module */ "U2yf");
/* harmony import */ var _leaverules_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaverules.page */ "Tr91");







let LeaverulesPageModule = class LeaverulesPageModule {
};
LeaverulesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _leaverules_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeaverulesPageRoutingModule"]
        ],
        declarations: [_leaverules_page__WEBPACK_IMPORTED_MODULE_6__["LeaverulesPage"]]
    })
], LeaverulesPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-leaverules-leaverules-module-es2015.js.map