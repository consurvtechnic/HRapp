(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mukadepan-hod-mukadepan-hod-module"], {
    /***/
    "BseU":
    /*!*************************************************************!*\
      !*** ./src/app/pages/mukadepan-hod/mukadepan-hod.module.ts ***!
      \*************************************************************/

    /*! exports provided: MukadepanHodPageModule */

    /***/
    function BseU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MukadepanHodPageModule", function () {
        return MukadepanHodPageModule;
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


      var _mukadepan_hod_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mukadepan-hod-routing.module */
      "oG9v");
      /* harmony import */


      var _mukadepan_hod_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mukadepan-hod.page */
      "qW/p");

      var MukadepanHodPageModule = function MukadepanHodPageModule() {
        _classCallCheck(this, MukadepanHodPageModule);
      };

      MukadepanHodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mukadepan_hod_routing_module__WEBPACK_IMPORTED_MODULE_5__["MukadepanHodPageRoutingModule"]],
        declarations: [_mukadepan_hod_page__WEBPACK_IMPORTED_MODULE_6__["MukadepanHodPage"]]
      })], MukadepanHodPageModule);
      /***/
    },

    /***/
    "hozz":
    /*!*************************************************************!*\
      !*** ./src/app/pages/mukadepan-hod/mukadepan-hod.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function hozz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  position: relative;\n  left: 0;\n  bottom: 10vh;\n  right: 0;\n  top: 2vh;\n}\n@media screen and (max-width: 1200px) and (min-width: 450px) {\n  .container {\n    background: white;\n  }\n}\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\nion-button {\n  --border-radius: 30px;\n}\n.smalllogo {\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate-reverse both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate-reverse both;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-content {\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nion-content ion-refresher-content {\n  color: red;\n  position: relative;\n  align-content: center;\n}\n#realTime {\n  margin-bottom: 0px;\n}\nion-datetime {\n  padding-top: 0%;\n}\n.location {\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-icon {\n  font-size: 35px;\n  color: #2C9DDE;\n}\nion-grid {\n  position: relative;\n  margin-top: 40px;\n  margin-bottom: auto;\n}\n.rowBawah {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdWthZGVwYW4taG9kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUNKO0FBQUk7RUFOSjtJQU9RLGlCQUFBO0VBR047QUFDRjtBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBR0o7QUFBQztFQUNLLHFCQUFBO0FBR047QUFBRTtFQUNFLHlHQUFBO0VBQ0EsaUdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKO0FBQUU7RUFDRSxrQkFBQTtFQUVBLGlEQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBRUo7QUFBSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRU47QUFHQTtFQUNFLGtCQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7QUFBRjtBQUdBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7QUFBRiIsImZpbGUiOiJtdWthZGVwYW4taG9kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMTB2aDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAydmg7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCkgYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjMkM5RERFO1xyXG4gIH1cclxuXHJcbiBpb24tYnV0dG9uIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsbG9nbyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2UgYm90aDtcclxuICAgIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2UgYm90aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaHJfYmcucG5nJykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaHJfYmcucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gICAgaW9uLXJlZnJlc2hlci1jb250ZW50IHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuI3JlYWxUaW1lIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1kYXRldGltZSB7XHJcbiAgcGFkZGluZy10b3A6IDAlO1xyXG59XHJcblxyXG4ubG9jYXRpb24ge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiAjMkM5RERFO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuLnJvd0Jhd2FoIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "oG9v":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/mukadepan-hod/mukadepan-hod-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: MukadepanHodPageRoutingModule */

    /***/
    function oG9v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MukadepanHodPageRoutingModule", function () {
        return MukadepanHodPageRoutingModule;
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


      var _mukadepan_hod_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mukadepan-hod.page */
      "qW/p");

      var routes = [{
        path: '',
        component: _mukadepan_hod_page__WEBPACK_IMPORTED_MODULE_3__["MukadepanHodPage"]
      }];

      var MukadepanHodPageRoutingModule = function MukadepanHodPageRoutingModule() {
        _classCallCheck(this, MukadepanHodPageRoutingModule);
      };

      MukadepanHodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MukadepanHodPageRoutingModule);
      /***/
    },

    /***/
    "p4Rr":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mukadepan-hod/mukadepan-hod.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function p4Rr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>Home</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"GotoNotityPage()\">\r\n      <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\r\n      <!-- <ion-badge color=\"danger\" style=\"position: absolute; right: -5px; top: -3px;\">?</ion-badge> -->\r\n    </ion-buttons>\r\n\r\n        <!-- <span>&nbsp;</span> -->\r\n\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"settingsPopover()\">\r\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <div class=\"container\">\r\n    <ion-text color=\"primary\" style=\"margin-top: 10px;\">\r\n      <h1 style=\"text-align:center\">DynaConsurv</h1>\r\n    </ion-text>\r\n    <h2 style=\"text-align:center\">Welcome Back, {{displayUserData?.staff_name}}!</h2>\r\n    <p id=\"realTime\" style=\"text-align:center; font-family: 'Georama'!important; font-size:2.1em;\" size=\"big\">{{ today | date: \"HH:mm a\" }}</p>\r\n    <ion-datetime disabled=\"disabled\" style=\"text-align:center; font-family: 'Georama'!important; font-size:1.8em;\" size=\"medium\" display-format= \"DDDD\" [(ngModel)]=\"today\" (ionChange)=\"startTime()\"></ion-datetime>\r\n    <img (click)=\"addEvent()\" expand=\"block\" style=\"text-align:center;\" src=\"{{myimage}}\" height=\"150 px\" width=\"150 px\" class=\"smalllogo\" />\r\n    <ion-item color=\"light\" class=\"location\">\r\n      <ion-label>Location:</ion-label>\r\n      <ion-select [(ngModel)]=\"location\" interface=\"popover\">\r\n        <ion-select-option value=\"WFH\">WFH</ion-select-option>\r\n        <ion-select-option value=\"Office\">OFFICE</ion-select-option>\r\n        <ion-select-option value=\"Site\">SITE</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <p><ion-button (click)=\"goToList()\" expand=\"full\" color=\"dark\" style=\"width: fit-content; margin: auto;\">List of Attendees</ion-button></p>\r\n    <ion-grid >\r\n      <ion-row style=\"text-align:center\" *ngFor=\"let a of displayUserData2\">\r\n        <ion-col>\r\n          <ion-icon name=\"enter-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkin | date:'h:mm a'}}</p>\r\n          <p class=\"rowBawah\">Clock In</p>\r\n        </ion-col>\r\n        <ion-col *ngIf = \"a.checkout === 'showToast2()'; else noDisplay\">\r\n          <ion-icon name=\"log-out-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkout | date:'h:mm a'}}</p>\r\n          <p class=\"rowBawah\">Clock Out</p>\r\n        </ion-col>\r\n        <ng-template #noDisplay>\r\n          <ion-col>\r\n            <ion-icon name=\"log-out-outline\"></ion-icon>\r\n            <p style=\"font-weight: bolder;\">-</p>\r\n            <p class=\"rowBawah\">Clock Out</p>\r\n          </ion-col>\r\n        </ng-template>\r\n        <ion-col>\r\n          <ion-icon name=\"location-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{ a.location }}</p>\r\n          <p class=\"rowBawah\" >Location</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <p style=\"text-align:center; color: brown;\">Check Out Time: before 6.30PM</p>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<!-- <ion-content style=\"overflow: scroll;\">\r\n  <div class=\"container\">\r\n    <ion-text color=\"primary\" style=\"margin-top: 10px;\">\r\n      <h1 style=\"text-align:center\">DynaConsurv</h1>\r\n    </ion-text>\r\n   \r\n    <h2 style=\"text-align:center\">Welcome Back, {{displayUserData?.staff_name}}!</h2>\r\n    <img src=\"assets/images/home1.png\"  class=\"smalllogo\"/>\r\n    <p><ion-button (click)=\"goToList()\" expand=\"full\" color=\"dark\" style=\"width: fit-content; margin: auto;\">List of Attendees</ion-button></p>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col col-6>\r\n          <ion-button (click)=\"showToast1()\" expand=\"block\" (click)=\"checkInAction()\" color=\"secondary\">Check In</ion-button>\r\n        </ion-col>\r\n        <ion-col col-6>\r\n          <ion-button (click)=\"showToast2()\" expand=\"block\" (click)=\"checkOutAction()\"color=\"secondary\">Check Out</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-text color=\"dark\">\r\n      <p style=\"text-align:center\">STATUS:</p>\r\n    </ion-text>\r\n    <ion-text color=\"success\">\r\n      <h1 style=\"text-align:center\" id=\"status\">None</h1>\r\n    </ion-text>\r\n      \r\n\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let tran of transactions\">      \r\n          <p *ngIf=\" a.checkInAction == 'showToast1'\" > You have redeemed  {{a.checkin | date:'EEEE, h:mm a, dd/MM/yyyy '}} points.  </p>\r\n          <p *ngIf=\" a.checkOutAction == 'showToast2'\" > You have earned  {{a.checkout | date:'EEEE, h:mm a, dd/MM/yyyy '}}} points.  </p>  \r\n        </ion-item>\r\n      </ion-list>\r\n  \r\n    <p><ion-button (click)=\"goToList()\" expand=\"block\" color=\"secondary\" style=\"width: fit-content; margin: auto;\">List of Attendees</ion-button></p> -->\r\n    <!-- <p><ion-button (click)=\"showToast3()\" expand=\"block\" >Leave</ion-button></p> \r\n  </div>\r\n</ion-content> -->\r\n";
      /***/
    },

    /***/
    "qW/p":
    /*!***********************************************************!*\
      !*** ./src/app/pages/mukadepan-hod/mukadepan-hod.page.ts ***!
      \***********************************************************/

    /*! exports provided: MukadepanHodPage */

    /***/
    function qWP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MukadepanHodPage", function () {
        return MukadepanHodPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mukadepan_hod_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mukadepan-hod.page.html */
      "p4Rr");
      /* harmony import */


      var _mukadepan_hod_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mukadepan-hod.page.scss */
      "hozz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_setting_setting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/setting/setting.component */
      "l7Ag");

      var MukadepanHodPage = /*#__PURE__*/function () {
        function MukadepanHodPage(router, toastCtrl, authService, storageService, nav, loading, popoverController, changeRef) {
          _classCallCheck(this, MukadepanHodPage);

          this.router = router;
          this.toastCtrl = toastCtrl;
          this.authService = authService;
          this.storageService = storageService;
          this.nav = nav;
          this.loading = loading;
          this.popoverController = popoverController;
          this.changeRef = changeRef;
          this.showStatus = false;
          this.postData = {
            staff_id: '',
            action: 0,
            staff_name: '',
            checkin: '',
            checkout: '',
            id: '',
            location: ''
          };
          this.displayUserData2 = [];
          this.userInfo = {};
          this.postDataa = {
            staff_id: '',
            action: 2
          };
          this.leaveDetail = {};
          this.today = new Date();
          this.myimage = 'assets/images/clock_in.png';
          this.startTime();
        }

        _createClass(MukadepanHodPage, [{
          key: "settingsPopover",
          value: function settingsPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var siteInfo, popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      siteInfo = {
                        id: 1,
                        name: 'edupala'
                      };
                      _context.next = 3;
                      return this.popoverController.create({
                        component: src_app_setting_setting_component__WEBPACK_IMPORTED_MODULE_8__["SettingComponent"],
                        event: ev,
                        cssClass: 'popover_setting',
                        componentProps: {
                          site: siteInfo
                        },
                        translucent: true
                      });

                    case 3:
                      popover = _context.sent;
                      popover.onDidDismiss().then(function (result) {
                        console.log(result.data);
                      });
                      _context.next = 7;
                      return popover.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loading.create({
                        message: 'Loading...',
                        spinner: 'bubbles'
                      });

                    case 2:
                      loader = _context2.sent;
                      loader.present();
                      this.authService.getUserDataPromise().then(function () {
                        var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        // console.log(res);
                        _this.userInfo = res;

                        _this.authService.leavedetailPromise({
                          staffid: _this.userInfo.staff_id
                        }).then(function (res) {
                          console.log(res);
                          _this.leaveDetail = res[0];
                          loader.dismiss();
                        }, function (err) {
                          loader.dismiss();
                          console.log(err);
                        });
                      }, function (err) {
                        _this.nav.navigateBack('login');

                        loader.dismiss();
                      });
                      loader.dismiss();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.authService.getUserDataPromise().then(function (res) {
              _this2.displayUserData = res; // this.checkData.staff_id = this.displayUserData.staff_id; 

              _this2.sid = _this2.displayUserData.staff_id;

              _this2.authService.listName({
                staff_id: _this2.sid,
                action: 2
              }).subscribe(function (res) {
                console.log('goHistory', res);
                var temp = [];
                res.results.forEach(function (value) {
                  console.log(value);
                  temp.push({
                    staff_name: value.staff_name,
                    checkin: new Date(value.checkin),
                    checkout: new Date(value.checkout),
                    location: value.location
                  });
                });
                _this2.displayUserData2 = temp;
                console.log(_this2.displayUserData2);
              });
              /*this.authService.userData$.subscribe((res: any) => {
                this.displayUserData2 = res.results;
                console.log(res);
                
              })*/

            });
          }
          /*this.authService.login(this.postData).subscribe((res: any) => {
                console.log('here',res)
                if(Array.isArray(res)) {
                  this.storageService.store(AuthConstants.AUTH, res[0]);
                  this.router.navigate(['./home/mukadepan']);
                } else {
                  this.toastService.presentToast('Incorrect Name or Password');
                    }
                  }*/

        }, {
          key: "startTime",
          value: function startTime() {
            var intervalVar = setInterval(function () {
              this.today = new Date().toISOString();
            }.bind(this), 500);
          }
        }, {
          key: "addEvent",
          value: function addEvent() {
            if (this.myimage == 'assets/images/clock_in.png') {
              this.showToast1();
              this.checkInAction();
              this.myimage = 'assets/images/clock_out.png';
            } else {
              this.showToast2();
              this.checkOutAction();
              this.myimage = 'assets/images/clock_in.png';
            }
          }
        }, {
          key: "checkInAction",
          value: function checkInAction() {
            //  let checkInData={
            //  this.postData.staff_id = this.displayUserData.staff_id;
            //  this.postData.action = 0;
            //  this.postData.location = this.location;
            //  }
            //let data = this.authService.getUserData();
            //console.log('i am clicked',this.displayUserData.staff_id);
            this.postData.staff_id = this.displayUserData.staff_id;
            this.postData.action = 0;
            this.postData.location = this.location;
            this.authService.checkIn(this.postData).subscribe(function (res) {
              // this.authService.getUserData();
              // this.changeRef.detectChanges();
              console.log('checkin', res);
            });
          }
        }, {
          key: "checkOutAction",
          value: function checkOutAction() {
            var _this3 = this;

            //  let checkOutData={
            this.postData.staff_id = this.displayUserData.staff_id;
            this.postData.action = 1;
            this.postData.location = this.location.data; //  }
            // this.postData.staff_id = this.displayUserData.staff_id;
            // this.postData.action = 1;

            this.authService.checkOut(this.postData).subscribe(function (res) {
              _this3.authService.getUserData();

              _this3.changeRef.detectChanges();

              console.log('checkout', res);
            });
          }
        }, {
          key: "showToast1",
          value: function showToast1() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastCtrl.create({
                        message: "You've Check-In!",
                        duration: 2000,
                        position: 'middle',
                        buttons: [{
                          text: 'OK'
                        }]
                      }).then(function (res) {
                        return res.present();
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "showToast2",
          value: function showToast2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastCtrl.create({
                        message: "You've Check-Out!",
                        duration: 2000,
                        position: 'middle',
                        buttons: [{
                          text: 'OK'
                        }]
                      }).then(function (res) {
                        return res.present();
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "showToast3",
          value: function showToast3() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastCtrl.create({
                        message: "You're on Leave!",
                        duration: 2000,
                        position: 'middle',
                        buttons: [{
                          text: 'OK'
                        }]
                      }).then(function (res) {
                        return res.present();
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "goToList",
          value: function goToList() {
            this.postData.staff_id = this.displayUserData.staff_id;
            this.postData.action = 2;
            this.router.navigate(['listattendees']);
            this.authService.listName(this.postData).subscribe(function (res) {
              console.log('golist', res);
            });
          }
        }]);

        return MukadepanHodPage;
      }();

      MukadepanHodPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      MukadepanHodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mukadepan-hod',
        template: _raw_loader_mukadepan_hod_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mukadepan_hod_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MukadepanHodPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-mukadepan-hod-mukadepan-hod-module-es5.js.map