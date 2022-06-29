(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mukadepan-admin-mukadepan-admin-module"], {
    /***/
    "19/I":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mukadepan-admin/mukadepan-admin.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"ion-text-left\">\r\n    ADMIN DASHBOARD\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" [routerLink]=\"['/', 'home-hradmin']\">\r\n        <ion-icon slot=\"icon-only\" name=\"home-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n\r\n  <app-shrink-header [scrollArea]=\"myContent\" [headerHeight]=\"80\">\r\n    <ion-grid [style.padding-bottom.px]=\"120 - newHeight\"></ion-grid>\r\n    <ion-list class=\"popover\" lines=\"none\" \r\n      [style.margin-top.px]=\"-120 - newHeight/2\">\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-item>\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <h1>\r\n                <b>3</b>\r\n                <ion-text class=\"ion-margin-start\" color=\"primary\">18%</ion-text>\r\n              </h1>\r\n              <p>Manager</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-item>\r\n            <ion-label class=\"ion-text-wrap ion-text-right\">\r\n              <h1>\r\n                <ion-text class=\"ion-margin-end\" color=\"primary\">82%</ion-text>\r\n                <b>25</b>\r\n              </h1>\r\n              <p>Staff</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <canvas #lineCanvas></canvas>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-list>\r\n  </app-shrink-header>\r\n\r\n  <div class=\"ion-padding\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment mode=\"ios\" [value]=\"segmentValue\">\r\n      <ion-segment-button value=\"1\">\r\n        <ion-label>Manager</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2\">\r\n        <ion-label>Staff</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"scroll($event)\" #myContent>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-list lines=\"none\">\r\n    <ion-item color=\"light\">\r\n      <ion-label class=\"heading\">List of Registered{{segmentValue == '1' ? ' Manager' : ' Staff'}}</ion-label>\r\n      <!-- <ion-button slot=\"end\" fill=\"clear\" size=\"small\">\r\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\r\n      </ion-button> -->\r\n    </ion-item>\r\n\r\n    <ion-item-group>\r\n      <ion-item class=\"ion-padding-vertical popItem\" \r\n        *ngFor=\"let item of (segmentValue == '1') ? requests : donors\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <div class=\"ion-text-center\" *ngIf=\"segmentValue == '1'\">\r\n            <ion-text color=\"white\">MANAGER</ion-text>\r\n          </div>\r\n          <p class=\"ion-text-center\" [style.margin]=\"segmentValue == '1' ? '10px 0' : '20px 0'\">\r\n            <ion-text color=\"white\">{{item?.company}}</ion-text>\r\n          </p>\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <ion-note color=\"dark\"><b>{{item?.name}}</b></ion-note>\r\n          <p class=\"ion-text-wrap\">{{item?.position}}</p>\r\n          <p>\r\n            <ion-text color=\"dark\">{{item?.age}}</ion-text>\r\n            <ion-text color=\"dark\"><span>&#9679;</span>{{item?.gender}}</ion-text>\r\n            <!-- <ion-text color=\"dark\"><span>&#9679;</span>{{item?.distance == 1 ? item?.distance + 'km' : item?.distance + 'kms'}}</ion-text> -->\r\n          </p>\r\n        </ion-label>\r\n        <ion-fab vertical=\"top\" horizontal=\"end\">\r\n          <ion-fab-button size=\"small\" color=\"white\">\r\n            <img [src]=\"item?.photo\"/>\r\n          </ion-fab-button>\r\n        </ion-fab>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  \r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "6EAb":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/mukadepan-admin/mukadepan-admin.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MukadepanAdminPageModule */

    /***/
    function EAb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MukadepanAdminPageModule", function () {
        return MukadepanAdminPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _mukadepan_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mukadepan-admin-routing.module */
      "gbW7");
      /* harmony import */


      var _mukadepan_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mukadepan-admin.page */
      "wrRz");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");

      var MukadepanAdminPageModule = /*#__PURE__*/_createClass(function MukadepanAdminPageModule() {
        _classCallCheck(this, MukadepanAdminPageModule);
      });

      MukadepanAdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mukadepan_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["MukadepanAdminPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_mukadepan_admin_page__WEBPACK_IMPORTED_MODULE_6__["MukadepanAdminPage"]]
      })], MukadepanAdminPageModule);
      /***/
    },

    /***/
    "PuWb":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/mukadepan-admin/mukadepan-admin.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function PuWb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  background: var(--ion-color-light);\n}\n\nion-header app-shrink-header {\n  display: block;\n  overflow: hidden;\n}\n\nion-header app-shrink-header ion-grid {\n  background: var(--ion-color-primary);\n  margin-top: -5px;\n  border-radius: 0 0 5px 5px;\n}\n\nion-header app-shrink-header .popover {\n  background: var(--ion-color-white);\n  border-radius: 10px;\n  width: 90%;\n  margin: auto;\n}\n\nion-header app-shrink-header .popover ion-item ion-label {\n  margin: 0;\n}\n\nion-header app-shrink-header .popover ion-item ion-label h1 {\n  font-size: 1.8rem;\n}\n\nion-header app-shrink-header .popover ion-item ion-label p {\n  margin-top: 3px;\n  font-size: 0.8rem;\n}\n\nion-header app-shrink-header .popover ion-item ion-label ion-text {\n  font-size: 0.7rem;\n}\n\nion-header app-shrink-header .popover canvas {\n  height: 70px !important;\n}\n\nion-header div {\n  background: var(--ion-color-light);\n}\n\nion-header div ion-segment {\n  --background: var(--ion-color-white);\n  border-radius: 20px;\n  --margin-top: 5px;\n  --margin-bottom: 5px;\n}\n\nion-header div ion-segment ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  --border-radius: 20px;\n  --color: var(--ion-color-primary);\n  --color-checked: var(--ion-color-white);\n}\n\nion-content {\n  --background: var(--ion-color-light);\n}\n\nion-content ion-list {\n  background: var(--ion-color-light);\n}\n\nion-content ion-list .heading {\n  font-family: lato;\n}\n\nion-content ion-list .popItem {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 15px;\n  border-radius: 10px;\n  padding: 0;\n}\n\nion-content ion-list .popItem ion-thumbnail {\n  min-width: 5rem;\n  min-height: 6rem;\n  border-radius: 10px;\n  background: var(--ion-color-secondary);\n}\n\nion-content ion-list .popItem ion-thumbnail div {\n  background-color: var(--ion-color-primary);\n  border-radius: 10px 10px 0 0;\n  padding-bottom: 2px;\n}\n\nion-content ion-list .popItem ion-thumbnail div ion-text {\n  font-size: 0.7rem;\n  font-weight: bold;\n}\n\nion-content ion-list .popItem ion-thumbnail p ion-text {\n  font-size: 1.2rem !important;\n}\n\nion-content ion-list .popItem ion-label ion-note {\n  font-size: 1.1rem;\n  letter-spacing: 0.5px;\n}\n\nion-content ion-list .popItem ion-label p {\n  margin-top: 5px;\n}\n\nion-content ion-list .popItem ion-label p ion-text span {\n  color: var(--ion-color-dark);\n  padding: 0 5px;\n}\n\nion-content ion-list .popItem ion-fab {\n  margin-right: -15px !important;\n  margin-top: -10px;\n}\n\n* {\n  font-family: lato;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #7590d6;\n  background: linear-gradient(90deg, #7590d6 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50px;\n  border: 7px solid #5e7ccc;\n  margin-right: 14px;\n}\n\n.header-content h2 {\n  font-weight: 300px;\n  color: #fff;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.action-button ion-button {\n  text-transform: capitalize;\n  font-weight: 300;\n  --background: #628cff;\n  --border-radius: 7px;\n  --box-shadow: none;\n}\n\n.action-button ion-icon {\n  margin-right: 1px;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-icon {\n  margin-right: 20px;\n  color: #86979f;\n}\n\n.menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\n.menu-items .active {\n  border-left: 5px solid;\n  color: #628cff;\n  padding-left: 15px;\n}\n\n.menu-items .active ion-icon {\n  color: #628cff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdWthZGVwYW4tYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQWtDO0FBQ3RDOztBQUZBO0VBR00sY0FBYztFQUNkLGdCQUFnQjtBQUd0Qjs7QUFQQTtFQU1RLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBS2xDOztBQWJBO0VBWVEsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtBQUtwQjs7QUFwQkE7RUFtQlksU0FBUztBQUtyQjs7QUF4QkE7RUFxQmUsaUJBQWlCO0FBT2hDOztBQTVCQTtFQXdCZSxlQUFlO0VBQ2YsaUJBQWlCO0FBUWhDOztBQWpDQTtFQTRCYyxpQkFBaUI7QUFTL0I7O0FBckNBO0VBaUNVLHVCQUF1QjtBQVFqQzs7QUF6Q0E7RUFzQ00sa0NBQWtDO0FBT3hDOztBQTdDQTtFQXdDUSxvQ0FBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBYTtFQUNiLG9CQUFnQjtBQVN4Qjs7QUFwREE7RUE2Q1UsOENBQXFCO0VBQ3JCLDJDQUFrQjtFQUNsQixxQkFBZ0I7RUFDaEIsaUNBQVE7RUFDUix1Q0FBZ0I7QUFXMUI7O0FBTEU7RUFDRSxvQ0FBYTtBQVFqQjs7QUFURTtFQUdJLGtDQUFrQztBQVV4Qzs7QUFiRTtFQUtNLGlCQUFpQjtBQVl6Qjs7QUFqQkU7RUFRTSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsVUFBVTtBQWFsQjs7QUF6QkU7RUFjUSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQ0FBc0M7QUFlaEQ7O0FBaENFO0VBbUJVLDBDQUEwQztFQUMxQyw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBaUIvQjs7QUF0Q0U7RUF1QlksaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQW1CL0I7O0FBM0NFO0VBNkJZLDRCQUE0QjtBQWtCMUM7O0FBL0NFO0VBbUNVLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFnQmpDOztBQXBERTtFQXVDVSxlQUFlO0FBaUIzQjs7QUF4REU7RUEwQ2MsNEJBQTRCO0VBQzVCLGNBQWM7QUFrQjlCOztBQTdERTtFQWlEUSw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBZ0IzQjs7QUFWRTtFQUNFLGlCQUFpQjtBQWFyQjs7QUFWQTtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDREQUE0RDtFQUM1RCxnREFBZ0Q7RUFDaEQseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQWF2Qjs7QUFWQTtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7QUFhdkI7O0FBbEJBO0VBUVEsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQWMxQjs7QUExQkE7RUFnQlEsa0JBQWtCO0VBQ2xCLFdBQVc7QUFjbkI7O0FBL0JBO0VBcUJRLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQWM3Qjs7QUFWQTtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBYXZCOztBQWhCQTtFQU1RLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIscUJBQWE7RUFDYixvQkFBZ0I7RUFDaEIsa0JBQWE7QUFjckI7O0FBeEJBO0VBY1EsaUJBQWlCO0FBY3pCOztBQVZBO0VBQ0ksV0FBVztBQWFmOztBQWRBO0VBSVEsa0JBQWtCO0VBQ2xCLGNBQWM7QUFjdEI7O0FBbkJBO0VBU1Esa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQWMzQjs7QUF4QkE7RUFjUSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtBQWMxQjs7QUE5QkE7RUFtQlksY0FBYztBQWUxQiIsImZpbGUiOiJtdWthZGVwYW4tYWRtaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgYXBwLXNocmluay1oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaW9uLWdyaWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xyXG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMjBweDtcclxuICAgICAgfVxyXG4gICAgICAucG9wb3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IC0xMjBweDtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbnZhcyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAtLW1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAtLW1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgLmhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5wb3BJdGVtIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogNXJlbTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDZyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBpb24tbm90ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1mYWIge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG59XHJcblxyXG4ubWVudS1oZWFkZXItYmcge1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTkwZDY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3NTkwZDYgMCUsICM0ZDcxZDcgMTAwJSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSg5OCwgMTQwLCAyNTUsIDAuNSk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMThweDtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmhlYWRlci1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzBweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGJvcmRlcjogN3B4IHNvbGlkICM1ZTdjY2M7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNjI4Y2ZmO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZW51LWl0ZW1zIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM4Njk3OWY7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQ7XHJcbiAgICAgICAgY29sb3I6ICM2MjhjZmY7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjI4Y2ZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuICAiXX0= */";
      /***/
    },

    /***/
    "gbW7":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/mukadepan-admin/mukadepan-admin-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: MukadepanAdminPageRoutingModule */

    /***/
    function gbW7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MukadepanAdminPageRoutingModule", function () {
        return MukadepanAdminPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _mukadepan_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mukadepan-admin.page */
      "wrRz");

      var routes = [{
        path: '',
        component: _mukadepan_admin_page__WEBPACK_IMPORTED_MODULE_3__["MukadepanAdminPage"]
      }];

      var MukadepanAdminPageRoutingModule = /*#__PURE__*/_createClass(function MukadepanAdminPageRoutingModule() {
        _classCallCheck(this, MukadepanAdminPageRoutingModule);
      });

      MukadepanAdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MukadepanAdminPageRoutingModule);
      /***/
    },

    /***/
    "wrRz":
    /*!***************************************************************!*\
      !*** ./src/app/pages/mukadepan-admin/mukadepan-admin.page.ts ***!
      \***************************************************************/

    /*! exports provided: MukadepanAdminPage */

    /***/
    function wrRz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MukadepanAdminPage", function () {
        return MukadepanAdminPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mukadepan_admin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mukadepan-admin.page.html */
      "19/I");
      /* harmony import */


      var _mukadepan_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mukadepan-admin.page.scss */
      "PuWb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MukadepanAdminPage = /*#__PURE__*/function () {
        function MukadepanAdminPage() {
          _classCallCheck(this, MukadepanAdminPage);

          this.segmentValue = '1';
          this.requests = [];
          this.donors = [];
          this.newHeight = 0;
        }

        _createClass(MukadepanAdminPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('ngOnInit');
            this.donors = [{
              id: 1,
              name: 'Noriko Rusk',
              age: 25,
              position: 'Engineer',
              gender: 'Female',
              company: 'Consurv',
              photo: 'assets/images/4.png',
              distance: 0.5,
              phone: '9999900000',
              email: 'abc@xyz.com'
            }, {
              id: 2,
              name: 'Carl Sweat',
              age: 22,
              position: 'Engineer',
              gender: 'Male',
              company: 'Consurv',
              photo: 'assets/images/2.png',
              distance: 2,
              phone: '9999900001',
              email: 'abc1@xyz.com'
            }, {
              id: 3,
              name: 'Phoebe Jackson',
              age: 27,
              position: 'Engineer',
              gender: 'Female',
              company: 'Dyna',
              photo: 'assets/images/3.png',
              distance: 6,
              phone: '9999900002',
              email: 'abc2@xyz.com'
            }, {
              id: 4,
              name: 'Bajrang Bali',
              age: 35,
              position: 'Engineer',
              gender: 'Male',
              company: 'Dyna',
              photo: 'assets/images/1.png',
              distance: 10,
              phone: '9999900003',
              email: 'abc3@xyz.com'
            }, {
              id: 5,
              name: 'Lan T\'ang',
              age: 30,
              position: 'Engineer',
              gender: 'Male',
              company: 'Dyna',
              photo: 'assets/images/2.png',
              distance: 12,
              phone: '9999900004',
              email: 'abc4@xyz.com'
            }, {
              id: 6,
              name: 'S. Dilshan',
              age: 45,
              position: 'Engineer',
              gender: 'Male',
              company: 'Dyna',
              photo: 'assets/images/2.png',
              distance: 14.5,
              phone: '9999900005',
              email: 'ab5@xyz.com'
            }, {
              id: 7,
              name: 'Amy D\'Souza',
              age: 20,
              position: 'Engineer',
              gender: 'Female',
              company: 'Consurv',
              photo: 'assets/images/3.png',
              distance: 16.7,
              phone: '9999900006',
              email: 'abc6@xyz.com'
            }];
            this.requests = [{
              id: 1,
              name: 'Jessika Lynch',
              age: 20,
              position: 'Engineer',
              gender: 'Female',
              company: 'Consurv',
              photo: 'assets/images/3.png',
              distance: 1,
              phone: '9999900010',
              email: 'xyz1@xyz.com'
            }, {
              id: 2,
              name: 'Chris Manhattan',
              age: 29,
              position: 'IT Manager',
              gender: 'Male',
              company: 'Dyna',
              photo: 'assets/images/2.png',
              distance: 1.5,
              phone: '9999900020',
              email: 'xyz2@xyz.com'
            }, {
              id: 3,
              name: 'Sanya Iyer',
              age: 45,
              position: 'Engineer',
              gender: 'Male',
              company: 'Dyna',
              photo: 'assets/images/4.png',
              distance: 3,
              phone: '9999900030',
              email: 'xyz3@xyz.com'
            }];
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            console.log('ngAfterViewInit');
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(event) {
            console.log(event);
            this.segmentValue = event.detail.value;
          }
        }, {
          key: "scroll",
          value: function scroll(event) {
            var value = event.detail.scrollTop;
            console.log(value, this.newHeight);

            if (value > 40) {
              this.newHeight += 5; // this.newHeight = this.newHeight + 5
            } else {
              this.newHeight = 0;
            }

            if (value > 180 && this.newHeight <= 65) {
              this.newHeight += 50;
            }
          }
        }]);

        return MukadepanAdminPage;
      }();

      MukadepanAdminPage.ctorParameters = function () {
        return [];
      };

      MukadepanAdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mukadepan-admin',
        template: _raw_loader_mukadepan_admin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mukadepan_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MukadepanAdminPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-mukadepan-admin-mukadepan-admin-module-es5.js.map