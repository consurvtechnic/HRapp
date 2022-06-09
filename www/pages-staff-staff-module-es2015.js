(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-staff-staff-module"],{

/***/ "/UHV":
/*!*******************************************!*\
  !*** ./src/app/pages/staff/staff.page.ts ***!
  \*******************************************/
/*! exports provided: StaffPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPage", function() { return StaffPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_staff_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./staff.page.html */ "1BjT");
/* harmony import */ var _staff_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staff.page.scss */ "IVbf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let StaffPage = class StaffPage {
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
StaffPage.ctorParameters = () => [];
StaffPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-staff',
        template: _raw_loader_staff_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_staff_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StaffPage);



/***/ }),

/***/ "1BjT":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/staff/staff.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"ion-text-left\">\r\n    Staff Database\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <div class=\"ion-padding\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment mode=\"ios\" [value]=\"segmentValue\">\r\n      <ion-segment-button value=\"1\">\r\n        <ion-label>Staff</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2\">\r\n        <ion-label>Intern</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"scroll($event)\" #myContent>\r\n\r\n  <ion-list lines=\"none\">\r\n    <ion-item color=\"light\">\r\n      <!--<ion-label class=\"heading\">List of Registered{{segmentValue == '1' ? ' Manager' : ' Staff'}}</ion-label>\r\n       <ion-button slot=\"end\" fill=\"clear\" size=\"small\">\r\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\r\n      </ion-button> -->\r\n    </ion-item>\r\n\r\n    <ion-item-group>\r\n      <ion-item class=\"ion-padding-vertical popItem\" \r\n        *ngFor=\"let item of (segmentValue == '1') ? requests : donors\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <div class=\"ion-text-center\" *ngIf=\"segmentValue == '1'\">\r\n            <ion-text color=\"white\">MANAGER</ion-text>\r\n          </div>\r\n          <p class=\"ion-text-center\" [style.margin]=\"segmentValue == '1' ? '10px 0' : '20px 0'\">\r\n            <ion-text color=\"white\">{{item?.company}}</ion-text>\r\n          </p>\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <ion-note color=\"dark\"><b>{{item?.name}}</b></ion-note>\r\n          <p class=\"ion-text-wrap\">{{item?.position}}</p>\r\n          <p>\r\n            <ion-text color=\"dark\">{{item?.age}}</ion-text>\r\n            <ion-text color=\"dark\"><span>&#9679;</span>{{item?.gender}}</ion-text>\r\n            <!-- <ion-text color=\"dark\"><span>&#9679;</span>{{item?.distance == 1 ? item?.distance + 'km' : item?.distance + 'kms'}}</ion-text> -->\r\n          </p>\r\n        </ion-label>\r\n        <ion-fab vertical=\"top\" horizontal=\"end\">\r\n          <ion-fab-button size=\"small\" color=\"white\">\r\n            <img [src]=\"item?.photo\"/>\r\n          </ion-fab-button>\r\n        </ion-fab>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "IVbf":
/*!*********************************************!*\
  !*** ./src/app/pages/staff/staff.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: var(--ion-color-light);\n}\nion-header app-shrink-header {\n  display: block;\n  overflow: hidden;\n}\nion-header app-shrink-header ion-grid {\n  background: var(--ion-color-primary);\n  margin-top: -5px;\n  border-radius: 0 0 5px 5px;\n}\nion-header app-shrink-header .popover {\n  background: var(--ion-color-white);\n  border-radius: 10px;\n  width: 90%;\n  margin: auto;\n}\nion-header app-shrink-header .popover ion-item ion-label {\n  margin: 0;\n}\nion-header app-shrink-header .popover ion-item ion-label h1 {\n  font-size: 1.8rem;\n}\nion-header app-shrink-header .popover ion-item ion-label p {\n  margin-top: 3px;\n  font-size: 0.8rem;\n}\nion-header app-shrink-header .popover ion-item ion-label ion-text {\n  font-size: 0.7rem;\n}\nion-header app-shrink-header .popover canvas {\n  height: 70px !important;\n}\nion-header div {\n  background: var(--ion-color-light);\n}\nion-header div ion-segment {\n  --background: var(--ion-color-white);\n  border-radius: 20px;\n  --margin-top: 5px;\n  --margin-bottom: 5px;\n}\nion-header div ion-segment ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  --border-radius: 20px;\n  --color: var(--ion-color-primary);\n  --color-checked: var(--ion-color-white);\n}\nion-content {\n  --background: var(--ion-color-light);\n}\nion-content ion-list {\n  background: var(--ion-color-light);\n}\nion-content ion-list .heading {\n  font-family: lato;\n}\nion-content ion-list .popItem {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 15px;\n  border-radius: 10px;\n  padding: 0;\n}\nion-content ion-list .popItem ion-thumbnail {\n  min-width: 5rem;\n  min-height: 6rem;\n  border-radius: 10px;\n  background: var(--ion-color-secondary);\n}\nion-content ion-list .popItem ion-thumbnail div {\n  background-color: var(--ion-color-primary);\n  border-radius: 10px 10px 0 0;\n  padding-bottom: 2px;\n}\nion-content ion-list .popItem ion-thumbnail div ion-text {\n  font-size: 0.7rem;\n  font-weight: bold;\n}\nion-content ion-list .popItem ion-thumbnail p ion-text {\n  font-size: 1.2rem !important;\n}\nion-content ion-list .popItem ion-label ion-note {\n  font-size: 1.1rem;\n  letter-spacing: 0.5px;\n}\nion-content ion-list .popItem ion-label p {\n  margin-top: 5px;\n}\nion-content ion-list .popItem ion-label p ion-text span {\n  color: var(--ion-color-dark);\n  padding: 0 5px;\n}\nion-content ion-list .popItem ion-fab {\n  margin-right: -15px !important;\n  margin-top: -10px;\n}\n* {\n  font-family: lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGFmZi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtBQUNKO0FBQUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFFTjtBQURNO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBR1I7QUFBTTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQ1U7RUFDRSxTQUFBO0FBQ1o7QUFBYTtFQUNFLGlCQUFBO0FBRWY7QUFBYTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVmO0FBQWE7RUFDQyxpQkFBQTtBQUVkO0FBRVE7RUFDRSx1QkFBQTtBQUFWO0FBSUk7RUFDRSxrQ0FBQTtBQUZOO0FBR007RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQURSO0FBRVE7RUFDRSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHVDQUFBO0FBQVY7QUFNRTtFQUNFLG9DQUFBO0FBSEo7QUFJSTtFQUNFLGtDQUFBO0FBRk47QUFHTTtFQUNFLGlCQUFBO0FBRFI7QUFHTTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFEUjtBQUVRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQUFWO0FBQ1U7RUFDRSwwQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUFZO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUVkO0FBRVk7RUFDRSw0QkFBQTtBQUFkO0FBS1U7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBSFo7QUFLVTtFQUNFLGVBQUE7QUFIWjtBQUtjO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0FBSGhCO0FBUVE7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBTlY7QUFZQTtFQUNJLGlCQUFBO0FBVEoiLCJmaWxlIjoic3RhZmYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgYXBwLXNocmluay1oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaW9uLWdyaWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xyXG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMjBweDtcclxuICAgICAgfVxyXG4gICAgICAucG9wb3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IC0xMjBweDtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbnZhcyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAtLW1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgLmhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5wb3BJdGVtIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogNXJlbTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDZyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBpb24tbm90ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1mYWIge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuKiB7XHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxufSJdfQ== */");

/***/ }),

/***/ "TGu0":
/*!*****************************************************!*\
  !*** ./src/app/pages/staff/staff-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StaffPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPageRoutingModule", function() { return StaffPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _staff_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff.page */ "/UHV");




const routes = [
    {
        path: '',
        component: _staff_page__WEBPACK_IMPORTED_MODULE_3__["StaffPage"]
    }
];
let StaffPageRoutingModule = class StaffPageRoutingModule {
};
StaffPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StaffPageRoutingModule);



/***/ }),

/***/ "qZb1":
/*!*********************************************!*\
  !*** ./src/app/pages/staff/staff.module.ts ***!
  \*********************************************/
/*! exports provided: StaffPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPageModule", function() { return StaffPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _staff_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff-routing.module */ "TGu0");
/* harmony import */ var _staff_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff.page */ "/UHV");







let StaffPageModule = class StaffPageModule {
};
StaffPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _staff_routing_module__WEBPACK_IMPORTED_MODULE_5__["StaffPageRoutingModule"]
        ],
        declarations: [_staff_page__WEBPACK_IMPORTED_MODULE_6__["StaffPage"]]
    })
], StaffPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-staff-staff-module-es2015.js.map