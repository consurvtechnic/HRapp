(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leave-leave-module"], {
    /***/
    "1PB1":
    /*!*****************************************************!*\
      !*** ./src/app/pages/leave/leave-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LeavePageRoutingModule */

    /***/
    function PB1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeavePageRoutingModule", function () {
        return LeavePageRoutingModule;
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


      var _leave_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./leave.page */
      "JTSN");

      var routes = [{
        path: '',
        component: _leave_page__WEBPACK_IMPORTED_MODULE_3__["LeavePage"]
      }];

      var LeavePageRoutingModule = function LeavePageRoutingModule() {
        _classCallCheck(this, LeavePageRoutingModule);
      };

      LeavePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LeavePageRoutingModule);
      /***/
    },

    /***/
    "2/E7":
    /*!*********************************************!*\
      !*** ./src/app/pages/leave/leave.module.ts ***!
      \*********************************************/

    /*! exports provided: LeavePageModule */

    /***/
    function E7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeavePageModule", function () {
        return LeavePageModule;
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


      var _leave_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./leave-routing.module */
      "1PB1");
      /* harmony import */


      var _leave_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./leave.page */
      "JTSN");

      var LeavePageModule = function LeavePageModule() {
        _classCallCheck(this, LeavePageModule);
      };

      LeavePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _leave_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeavePageRoutingModule"]],
        declarations: [_leave_page__WEBPACK_IMPORTED_MODULE_6__["LeavePage"]]
      })], LeavePageModule);
      /***/
    },

    /***/
    "JTSN":
    /*!*******************************************!*\
      !*** ./src/app/pages/leave/leave.page.ts ***!
      \*******************************************/

    /*! exports provided: LeavePage */

    /***/
    function JTSN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeavePage", function () {
        return LeavePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leave_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leave.page.html */
      "l928");
      /* harmony import */


      var _leave_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leave.page.scss */
      "aD2C");
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


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "n90K");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "2g2N");

      var LeavePage = /*#__PURE__*/function () {
        function LeavePage(modal, storage, authService, http, toastService, nav) {
          _classCallCheck(this, LeavePage);

          this.modal = modal;
          this.storage = storage;
          this.authService = authService;
          this.http = http;
          this.toastService = toastService;
          this.nav = nav;
          this.postData = {
            staff_id: '',
            leavetype: '',
            reason: '',
            currentDate: '',
            endDate: '',
            image: '',
            halfday1: '',
            halfday2: '',
            data: '',
            status: ''
          };
          this.userInfo = {};
          this.leaveDetail = [];
          this.leave = {};
          this.image = '';
        }

        _createClass(LeavePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.userData$.subscribe(function (res) {
              _this.displayUserData = res;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.authService.getUserDataPromise().then(function () {
              var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              // console.log(res);
              _this2.userInfo = res;

              _this2.authService.leavedetailPromise({
                staffid: _this2.userInfo.staff_id
              }).then(function (res) {
                console.log(res);
                _this2.leaveDetail = res[0];
              }, function (err) {
                console.log(err);
              });
            }, function (err) {
              _this2.nav.navigateBack('login');
            });
          }
        }]);

        return LeavePage;
      }();

      LeavePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      LeavePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leave',
        template: _raw_loader_leave_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leave_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LeavePage);
      /***/
    },

    /***/
    "aD2C":
    /*!*********************************************!*\
      !*** ./src/app/pages/leave/leave.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function aD2C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xlYXZlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFjO0VBQ2Qsc0JBQWlCO0VBQ2pCLHFCQUFnQjtFQUNoQixtQkFBYztBQUNsQjs7QUFFQTtFQUNJLGFBQWE7RUFDYixjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksa0JBQWE7RUFDYixjQUFjO0FBQ2xCIiwiZmlsZSI6ImxlYXZlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDI2cHg7XG59XG5cbi50aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogIzQzNDM0Mztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tbWluLWhlaWdodDogNTBweDtcbiAgICBjb2xvcjogIzJDOURERTtcbn0iXX0= */";
      /***/
    },

    /***/
    "l928":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leave/leave.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function l928(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"light\">\n    <ion-title>Leave History</ion-title>\n    <ion-back-button slot=\"start\"></ion-back-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let leave of leaveDetail\" >\n  <div class=\"cuti\">\n    <ion-card mode=\"ios\">\n      <ion-card-header></ion-card-header>\n      <ion-card-content style=\"overflow: scroll;\">\n        <ion-card-title color=\"primary-contrast\" style=\"font-size:20px; text-transform: uppercase;\">\n          {{leave.leavetype}}\n        </ion-card-title>\n        <ion-card-subtitle style=\"text-transform:none\" color=\"primary-contrast\">{{leave.reason}}</ion-card-subtitle>\n        <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:15px\"> Total of Days: {{leave.leaveday}}</ion-card-subtitle>\n        <a>From: {{leave.datefrom}}</a> <br> <a>To: {{leave.dateend}}</a>\n        <ion-button color=\"success\" expand=\"block\" class=\"main-button\" *ngIf = \"leave.status === 1; else pending\" >APPROVED</ion-button>\n        <ng-template #pending>\n          <ion-button color=\"warning\" expand=\"block\" class=\"main-button\">PENDING</ion-button>\n        </ng-template>\n      </ion-card-content>\n      \n    </ion-card>\n    \n</div>\n\n</ion-list>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-leave-leave-module-es5.js.map