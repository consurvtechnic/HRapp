(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mukadepan-admin-mukadepan-admin-module"],{

/***/ "19/I":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mukadepan-admin/mukadepan-admin.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-left\">\n    ADMIN DASHBOARD\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" [routerLink]=\"['/', 'home-hradmin']\">\n        <ion-icon slot=\"icon-only\" name=\"home-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n\n  <app-shrink-header [scrollArea]=\"myContent\" [headerHeight]=\"80\">\n    <ion-grid [style.padding-bottom.px]=\"120 - newHeight\"></ion-grid>\n    <ion-list class=\"popover\" lines=\"none\" \n      [style.margin-top.px]=\"-120 - newHeight/2\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <h1>\n                <b>3</b>\n                <ion-text class=\"ion-margin-start\" color=\"primary\">18%</ion-text>\n              </h1>\n              <p>Manager</p>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label class=\"ion-text-wrap ion-text-right\">\n              <h1>\n                <ion-text class=\"ion-margin-end\" color=\"primary\">82%</ion-text>\n                <b>25</b>\n              </h1>\n              <p>Staff</p>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <canvas #lineCanvas></canvas>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </app-shrink-header>\n\n  <div class=\"ion-padding\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment mode=\"ios\" [value]=\"segmentValue\">\n      <ion-segment-button value=\"1\">\n        <ion-label>Manager</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"2\">\n        <ion-label>Staff</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"scroll($event)\" #myContent>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-list lines=\"none\">\n    <ion-item color=\"light\">\n      <ion-label class=\"heading\">List of Registered{{segmentValue == '1' ? ' Manager' : ' Staff'}}</ion-label>\n      <!-- <ion-button slot=\"end\" fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n      </ion-button> -->\n    </ion-item>\n\n    <ion-item-group>\n      <ion-item class=\"ion-padding-vertical popItem\" \n        *ngFor=\"let item of (segmentValue == '1') ? requests : donors\">\n        <ion-thumbnail slot=\"start\">\n          <div class=\"ion-text-center\" *ngIf=\"segmentValue == '1'\">\n            <ion-text color=\"white\">MANAGER</ion-text>\n          </div>\n          <p class=\"ion-text-center\" [style.margin]=\"segmentValue == '1' ? '10px 0' : '20px 0'\">\n            <ion-text color=\"white\">{{item?.company}}</ion-text>\n          </p>\n        </ion-thumbnail>\n        <ion-label>\n          <ion-note color=\"dark\"><b>{{item?.name}}</b></ion-note>\n          <p class=\"ion-text-wrap\">{{item?.position}}</p>\n          <p>\n            <ion-text color=\"dark\">{{item?.age}}</ion-text>\n            <ion-text color=\"dark\"><span>&#9679;</span>{{item?.gender}}</ion-text>\n            <!-- <ion-text color=\"dark\"><span>&#9679;</span>{{item?.distance == 1 ? item?.distance + 'km' : item?.distance + 'kms'}}</ion-text> -->\n          </p>\n        </ion-label>\n        <ion-fab vertical=\"top\" horizontal=\"end\">\n          <ion-fab-button size=\"small\" color=\"white\">\n            <img [src]=\"item?.photo\"/>\n          </ion-fab-button>\n        </ion-fab>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n  \n</ion-content>\n");

/***/ }),

/***/ "6EAb":
/*!*****************************************************************!*\
  !*** ./src/app/pages/mukadepan-admin/mukadepan-admin.module.ts ***!
  \*****************************************************************/
/*! exports provided: MukadepanAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MukadepanAdminPageModule", function() { return MukadepanAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mukadepan_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mukadepan-admin-routing.module */ "gbW7");
/* harmony import */ var _mukadepan_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mukadepan-admin.page */ "wrRz");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let MukadepanAdminPageModule = class MukadepanAdminPageModule {
};
MukadepanAdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mukadepan_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["MukadepanAdminPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_mukadepan_admin_page__WEBPACK_IMPORTED_MODULE_6__["MukadepanAdminPage"]]
    })
], MukadepanAdminPageModule);



/***/ }),

/***/ "PuWb":
/*!*****************************************************************!*\
  !*** ./src/app/pages/mukadepan-admin/mukadepan-admin.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: var(--ion-color-light);\n}\n\nion-header app-shrink-header {\n  display: block;\n  overflow: hidden;\n}\n\nion-header app-shrink-header ion-grid {\n  background: var(--ion-color-primary);\n  margin-top: -5px;\n  border-radius: 0 0 5px 5px;\n}\n\nion-header app-shrink-header .popover {\n  background: var(--ion-color-white);\n  border-radius: 10px;\n  width: 90%;\n  margin: auto;\n}\n\nion-header app-shrink-header .popover ion-item ion-label {\n  margin: 0;\n}\n\nion-header app-shrink-header .popover ion-item ion-label h1 {\n  font-size: 1.8rem;\n}\n\nion-header app-shrink-header .popover ion-item ion-label p {\n  margin-top: 3px;\n  font-size: 0.8rem;\n}\n\nion-header app-shrink-header .popover ion-item ion-label ion-text {\n  font-size: 0.7rem;\n}\n\nion-header app-shrink-header .popover canvas {\n  height: 70px !important;\n}\n\nion-header div {\n  background: var(--ion-color-light);\n}\n\nion-header div ion-segment {\n  --background: var(--ion-color-white);\n  border-radius: 20px;\n  --margin-top: 5px;\n  --margin-bottom: 5px;\n}\n\nion-header div ion-segment ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  --border-radius: 20px;\n  --color: var(--ion-color-primary);\n  --color-checked: var(--ion-color-white);\n}\n\nion-content {\n  --background: var(--ion-color-light);\n}\n\nion-content ion-list {\n  background: var(--ion-color-light);\n}\n\nion-content ion-list .heading {\n  font-family: lato;\n}\n\nion-content ion-list .popItem {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 15px;\n  border-radius: 10px;\n  padding: 0;\n}\n\nion-content ion-list .popItem ion-thumbnail {\n  min-width: 5rem;\n  min-height: 6rem;\n  border-radius: 10px;\n  background: var(--ion-color-secondary);\n}\n\nion-content ion-list .popItem ion-thumbnail div {\n  background-color: var(--ion-color-primary);\n  border-radius: 10px 10px 0 0;\n  padding-bottom: 2px;\n}\n\nion-content ion-list .popItem ion-thumbnail div ion-text {\n  font-size: 0.7rem;\n  font-weight: bold;\n}\n\nion-content ion-list .popItem ion-thumbnail p ion-text {\n  font-size: 1.2rem !important;\n}\n\nion-content ion-list .popItem ion-label ion-note {\n  font-size: 1.1rem;\n  letter-spacing: 0.5px;\n}\n\nion-content ion-list .popItem ion-label p {\n  margin-top: 5px;\n}\n\nion-content ion-list .popItem ion-label p ion-text span {\n  color: var(--ion-color-dark);\n  padding: 0 5px;\n}\n\nion-content ion-list .popItem ion-fab {\n  margin-right: -15px !important;\n  margin-top: -10px;\n}\n\n* {\n  font-family: lato;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #7590d6;\n  background: linear-gradient(90deg, #7590d6 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50px;\n  border: 7px solid #5e7ccc;\n  margin-right: 14px;\n}\n\n.header-content h2 {\n  font-weight: 300px;\n  color: #fff;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.action-button ion-button {\n  text-transform: capitalize;\n  font-weight: 300;\n  --background: #628cff;\n  --border-radius: 7px;\n  --box-shadow: none;\n}\n\n.action-button ion-icon {\n  margin-right: 1px;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-icon {\n  margin-right: 20px;\n  color: #86979f;\n}\n\n.menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\n.menu-items .active {\n  border-left: 5px solid;\n  color: #628cff;\n  padding-left: 15px;\n}\n\n.menu-items .active ion-icon {\n  color: #628cff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL211a2FkZXBhbi1hZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBa0M7QUFDdEM7O0FBRkE7RUFHTSxjQUFjO0VBQ2QsZ0JBQWdCO0FBR3RCOztBQVBBO0VBTVEsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFLbEM7O0FBYkE7RUFZUSxrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0FBS3BCOztBQXBCQTtFQW1CWSxTQUFTO0FBS3JCOztBQXhCQTtFQXFCZSxpQkFBaUI7QUFPaEM7O0FBNUJBO0VBd0JlLGVBQWU7RUFDZixpQkFBaUI7QUFRaEM7O0FBakNBO0VBNEJjLGlCQUFpQjtBQVMvQjs7QUFyQ0E7RUFpQ1UsdUJBQXVCO0FBUWpDOztBQXpDQTtFQXNDTSxrQ0FBa0M7QUFPeEM7O0FBN0NBO0VBd0NRLG9DQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFhO0VBQ2Isb0JBQWdCO0FBU3hCOztBQXBEQTtFQTZDVSw4Q0FBcUI7RUFDckIsMkNBQWtCO0VBQ2xCLHFCQUFnQjtFQUNoQixpQ0FBUTtFQUNSLHVDQUFnQjtBQVcxQjs7QUFMRTtFQUNFLG9DQUFhO0FBUWpCOztBQVRFO0VBR0ksa0NBQWtDO0FBVXhDOztBQWJFO0VBS00saUJBQWlCO0FBWXpCOztBQWpCRTtFQVFNLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixVQUFVO0FBYWxCOztBQXpCRTtFQWNRLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNDQUFzQztBQWVoRDs7QUFoQ0U7RUFtQlUsMENBQTBDO0VBQzFDLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFpQi9COztBQXRDRTtFQXVCWSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBbUIvQjs7QUEzQ0U7RUE2QlksNEJBQTRCO0FBa0IxQzs7QUEvQ0U7RUFtQ1UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQWdCakM7O0FBcERFO0VBdUNVLGVBQWU7QUFpQjNCOztBQXhERTtFQTBDYyw0QkFBNEI7RUFDNUIsY0FBYztBQWtCOUI7O0FBN0RFO0VBaURRLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFnQjNCOztBQVZFO0VBQ0UsaUJBQWlCO0FBYXJCOztBQVZBO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNERBQTREO0VBQzVELGdEQUFnRDtFQUNoRCx5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBYXZCOztBQVZBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtBQWF2Qjs7QUFsQkE7RUFRUSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBYzFCOztBQTFCQTtFQWdCUSxrQkFBa0I7RUFDbEIsV0FBVztBQWNuQjs7QUEvQkE7RUFxQlEsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBYzdCOztBQVZBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFhdkI7O0FBaEJBO0VBTVEsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixxQkFBYTtFQUNiLG9CQUFnQjtFQUNoQixrQkFBYTtBQWNyQjs7QUF4QkE7RUFjUSxpQkFBaUI7QUFjekI7O0FBVkE7RUFDSSxXQUFXO0FBYWY7O0FBZEE7RUFJUSxrQkFBa0I7RUFDbEIsY0FBYztBQWN0Qjs7QUFuQkE7RUFTUSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBYzNCOztBQXhCQTtFQWNRLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0FBYzFCOztBQTlCQTtFQW1CWSxjQUFjO0FBZTFCIiwiZmlsZSI6Im11a2FkZXBhbi1hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGFwcC1zaHJpbmstaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGlvbi1ncmlkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDEyMHB4O1xuICAgICAgfVxuICAgICAgLnBvcG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIC8vIG1hcmdpbi10b3A6IC0xMjBweDtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYW52YXMge1xuICAgICAgICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGRpdiB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgaW9uLXNlZ21lbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIC0tbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAtLW1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IGxhdG87XG4gICAgICB9XG4gICAgICAucG9wSXRlbSB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDZyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgaW9uLW5vdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1mYWIge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICoge1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xufVxuXG4ubWVudS1oZWFkZXItYmcge1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTkwZDY7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzU5MGQ2IDAlLCAjNGQ3MWQ3IDEwMCUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDk4LCAxNDAsIDI1NSwgMC41KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5oZWFkZXItY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzBweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogN3B4IHNvbGlkICM1ZTdjY2M7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICNlNGU0ZTQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICB9XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzYyOGNmZjtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgIH1cbn1cblxuLm1lbnUtaXRlbXMge1xuICAgIG1hcmdpbjogMHB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjODY5NzlmO1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5hY3RpdmUge1xuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkO1xuICAgICAgICBjb2xvcjogIzYyOGNmZjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjI4Y2ZmO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5cbiAgIl19 */");

/***/ }),

/***/ "gbW7":
/*!*************************************************************************!*\
  !*** ./src/app/pages/mukadepan-admin/mukadepan-admin-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: MukadepanAdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MukadepanAdminPageRoutingModule", function() { return MukadepanAdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mukadepan_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mukadepan-admin.page */ "wrRz");




const routes = [
    {
        path: '',
        component: _mukadepan_admin_page__WEBPACK_IMPORTED_MODULE_3__["MukadepanAdminPage"]
    }
];
let MukadepanAdminPageRoutingModule = class MukadepanAdminPageRoutingModule {
};
MukadepanAdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MukadepanAdminPageRoutingModule);



/***/ }),

/***/ "wrRz":
/*!***************************************************************!*\
  !*** ./src/app/pages/mukadepan-admin/mukadepan-admin.page.ts ***!
  \***************************************************************/
/*! exports provided: MukadepanAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MukadepanAdminPage", function() { return MukadepanAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mukadepan_admin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mukadepan-admin.page.html */ "19/I");
/* harmony import */ var _mukadepan_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mukadepan-admin.page.scss */ "PuWb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MukadepanAdminPage = class MukadepanAdminPage {
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
MukadepanAdminPage.ctorParameters = () => [];
MukadepanAdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mukadepan-admin',
        template: _raw_loader_mukadepan_admin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mukadepan_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MukadepanAdminPage);



/***/ })

}]);
//# sourceMappingURL=pages-mukadepan-admin-mukadepan-admin-module-es2015.js.map