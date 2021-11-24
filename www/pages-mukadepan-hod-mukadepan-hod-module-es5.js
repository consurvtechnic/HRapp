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


      __webpack_exports__["default"] = ".container {\n  position: relative;\n  left: 0;\n  bottom: 10vh;\n  right: 0;\n  top: 2vh;\n}\n\n@media screen and (max-width: 1200px) and (min-width: 450px) {\n  .container {\n    background: white;\n  }\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\nion-button {\n  --border-radius: 30px;\n}\n\n.smalllogo {\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate-reverse both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate-reverse both;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#realTime {\n  margin-bottom: 0px;\n}\n\nion-datetime {\n  padding-top: 0%;\n}\n\n.location {\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-icon {\n  font-size: 35px;\n  color: #2C9DDE;\n}\n\nion-grid {\n  position: relative;\n  margin-top: 40px;\n  margin-bottom: auto;\n}\n\n.rowBawah {\n  font-size: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL211a2FkZXBhbi1ob2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxZQUFZO0VBQ1osUUFBUTtFQUNSLFFBQVE7QUFDWjs7QUFBSTtFQU5KO0lBT1EsaUJBQWlCO0VBSXZCO0FBQ0Y7O0FBREE7RUFDSSxrQkFBYTtFQUNiLGNBQWM7QUFJbEI7O0FBREM7RUFDSyxxQkFBZ0I7QUFJdEI7O0FBREU7RUFDRSx5R0FBOEc7RUFDOUcsaUdBQXNHO0VBQ3RHLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBSXRCOztBQURFO0VBQ0Usa0JBQWE7RUFDYixpREFBaUQ7RUFDakQsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFJMUI7O0FBREE7RUFDRSxrQkFBa0I7QUFJcEI7O0FBREE7RUFDRSxlQUFlO0FBSWpCOztBQURBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFJcEI7O0FBREE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUloQjs7QUFEQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBSXJCOztBQURBO0VBQ0UsZUFBZTtBQUlqQiIsImZpbGUiOiJtdWthZGVwYW4taG9kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMTB2aDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDJ2aDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCkgYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tbWluLWhlaWdodDogNTBweDtcbiAgICBjb2xvcjogIzJDOURERTtcbiAgfVxuXG4gaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cblxuICAuc21hbGxsb2dvIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDFzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2UgYm90aDtcbiAgICBhbmltYXRpb246IHNjYWxlLXVwLWNlbnRlciAxcyBjdWJpYy1iZXppZXIoMC4zOTAsIDAuNTc1LCAwLjU2NSwgMS4wMDApIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlIGJvdGg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2hyX2JnLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIFxuI3JlYWxUaW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nLXRvcDogMCU7XG59XG5cbi5sb2NhdGlvbiB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzJDOURERTtcbn1cblxuaW9uLWdyaWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5yb3dCYXdhaCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */";
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


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"light\">\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"GotoNotityPage()\">\n      <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\n      <ion-badge color=\"danger\" style=\"position: absolute; right: -5px; top: -3px;\">?</ion-badge>\n    </ion-buttons>\n\n        <!-- <span>&nbsp;</span> -->\n\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"settingsPopover()\">\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"overflow: scroll;\">\n  <div class=\"container\">\n    <ion-text color=\"primary\" style=\"margin-top: 10px;\">\n      <h1 style=\"text-align:center\">DynaConsurv</h1>\n    </ion-text>\n    <h2 style=\"text-align:center\">Welcome Back, {{displayUserData?.staff_name}}!</h2>\n    <p id=\"realTime\" style=\"text-align:center; font-family: 'Georama'!important; font-size:2.1em;\" size=\"big\">{{ today | date: \"HH:mm a\" }}</p>\n    <ion-datetime disabled=\"disabled\" style=\"text-align:center; font-family: 'Georama'!important; font-size:1.8em;\" size=\"medium\" display-format= \"DDDD\" [(ngModel)]=\"today\" (ionChange)=\"startTime()\"></ion-datetime>\n    <img (click)=\"addEvent()\" expand=\"block\" style=\"text-align:center;\" src=\"{{myimage}}\" height=\"150 px\" width=\"150 px\" class=\"smalllogo\" />\n    <ion-item color=\"light\" class=\"location\">\n      <ion-label>Location:</ion-label>\n      <ion-select [(ngModel)]=\"location\" interface=\"popover\">\n        <ion-select-option value=\"WFH\">WFH</ion-select-option>\n        <ion-select-option value=\"Office\">OFFICE</ion-select-option>\n        <ion-select-option value=\"Site\">SITE</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <p><ion-button (click)=\"goToList()\" expand=\"full\" color=\"dark\" style=\"width: fit-content; margin: auto;\">List of Attendees</ion-button></p>\n    <ion-grid >\n      <ion-row style=\"text-align:center\" *ngFor=\"let a of displayUserData2\">\n        <ion-col>\n          <ion-icon name=\"enter-outline\"></ion-icon>\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkin | date:'h:mm a'}}</p>\n          <p class=\"rowBawah\">Clock In</p>\n        </ion-col>\n        <ion-col *ngIf = \"a.checkout === 'showToast2()'; else noDisplay\">\n          <ion-icon name=\"log-out-outline\"></ion-icon>\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkout | date:'h:mm a'}}</p>\n          <p class=\"rowBawah\">Clock Out</p>\n        </ion-col>\n        <ng-template #noDisplay>\n          <ion-col>\n            <ion-icon name=\"log-out-outline\"></ion-icon>\n            <p style=\"font-weight: bolder;\">-</p>\n            <p class=\"rowBawah\">Clock Out</p>\n          </ion-col>\n        </ng-template>\n        <ion-col>\n          <ion-icon name=\"location-outline\"></ion-icon>\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{ a.location }}</p>\n          <p class=\"rowBawah\" >Location</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <p style=\"text-align:center; color: brown;\">Check Out Time: before 6.30PM</p>\n  </div>\n</ion-content>\n\n\n<!-- <ion-content style=\"overflow: scroll;\">\n  <div class=\"container\">\n    <ion-text color=\"primary\" style=\"margin-top: 10px;\">\n      <h1 style=\"text-align:center\">DynaConsurv</h1>\n    </ion-text>\n   \n    <h2 style=\"text-align:center\">Welcome Back, {{displayUserData?.staff_name}}!</h2>\n    <img src=\"assets/images/home1.png\"  class=\"smalllogo\"/>\n    <p><ion-button (click)=\"goToList()\" expand=\"full\" color=\"dark\" style=\"width: fit-content; margin: auto;\">List of Attendees</ion-button></p>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-button (click)=\"showToast1()\" expand=\"block\" (click)=\"checkInAction()\" color=\"secondary\">Check In</ion-button>\n        </ion-col>\n        <ion-col col-6>\n          <ion-button (click)=\"showToast2()\" expand=\"block\" (click)=\"checkOutAction()\"color=\"secondary\">Check Out</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-text color=\"dark\">\n      <p style=\"text-align:center\">STATUS:</p>\n    </ion-text>\n    <ion-text color=\"success\">\n      <h1 style=\"text-align:center\" id=\"status\">None</h1>\n    </ion-text>\n      \n\n      <ion-list>\n        <ion-item *ngFor=\"let tran of transactions\">      \n          <p *ngIf=\" a.checkInAction == 'showToast1'\" > You have redeemed  {{a.checkin | date:'EEEE, h:mm a, dd/MM/yyyy '}} points.  </p>\n          <p *ngIf=\" a.checkOutAction == 'showToast2'\" > You have earned  {{a.checkout | date:'EEEE, h:mm a, dd/MM/yyyy '}}} points.  </p>  \n        </ion-item>\n      </ion-list>\n  \n    <p><ion-button (click)=\"goToList()\" expand=\"block\" color=\"secondary\" style=\"width: fit-content; margin: auto;\">List of Attendees</ion-button></p> -->\n    <!-- <p><ion-button (click)=\"showToast3()\" expand=\"block\" >Leave</ion-button></p> \n  </div>\n</ion-content> -->\n";
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
        function MukadepanHodPage(router, toastCtrl, authService, storageService, nav, popoverController, changeRef) {
          _classCallCheck(this, MukadepanHodPage);

          this.router = router;
          this.toastCtrl = toastCtrl;
          this.authService = authService;
          this.storageService = storageService;
          this.nav = nav;
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
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.authService.getUserDataPromise().then(function () {
              var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              // console.log(res);
              _this.userInfo = res;

              _this.authService.leavedetailPromise({
                staffid: _this.userInfo.staff_id
              }).then(function (res) {
                console.log(res);
                _this.leaveDetail = res[0];
              }, function (err) {
                console.log(err);
              });
            }, function (err) {
              _this.nav.navigateBack('login');
            });
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
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
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "showToast2",
          value: function showToast2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
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
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "showToast3",
          value: function showToast3() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
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
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
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