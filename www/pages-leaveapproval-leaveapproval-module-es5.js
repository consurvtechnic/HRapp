(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leaveapproval-leaveapproval-module"], {
    /***/
    "+N/3":
    /*!*************************************************************!*\
      !*** ./src/app/pages/leaveapproval/leaveapproval.module.ts ***!
      \*************************************************************/

    /*! exports provided: LeaveapprovalPageModule */

    /***/
    function N3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaveapprovalPageModule", function () {
        return LeaveapprovalPageModule;
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


      var _leaveapproval_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./leaveapproval-routing.module */
      "lhYH");
      /* harmony import */


      var _leaveapproval_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./leaveapproval.page */
      "TuVu");

      var LeaveapprovalPageModule = function LeaveapprovalPageModule() {
        _classCallCheck(this, LeaveapprovalPageModule);
      };

      LeaveapprovalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _leaveapproval_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeaveapprovalPageRoutingModule"]],
        declarations: [_leaveapproval_page__WEBPACK_IMPORTED_MODULE_6__["LeaveapprovalPage"]]
      })], LeaveapprovalPageModule);
      /***/
    },

    /***/
    "KzZC":
    /*!*************************************************************!*\
      !*** ./src/app/pages/leaveapproval/leaveapproval.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function KzZC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsZWF2ZWFwcHJvdmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoibGVhdmVhcHByb3ZhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDI2cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6ICM0MzQzNDM7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjMkM5RERFO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "TuVu":
    /*!***********************************************************!*\
      !*** ./src/app/pages/leaveapproval/leaveapproval.page.ts ***!
      \***********************************************************/

    /*! exports provided: LeaveapprovalPage */

    /***/
    function TuVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaveapprovalPage", function () {
        return LeaveapprovalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leaveapproval_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leaveapproval.page.html */
      "tZAa");
      /* harmony import */


      var _leaveapproval_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leaveapproval.page.scss */
      "KzZC");
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


      var _leave_modal_leave_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../leave-modal/leave-modal.page */
      "Rx4N");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");

      var LeaveapprovalPage = /*#__PURE__*/function () {
        function LeaveapprovalPage(authService, nav, loading, modal, storage, popoverController, router, changeRef, httpService, alertCtrl, toastCtrl) {
          _classCallCheck(this, LeaveapprovalPage);

          this.authService = authService;
          this.nav = nav;
          this.loading = loading;
          this.modal = modal;
          this.storage = storage;
          this.popoverController = popoverController;
          this.router = router;
          this.changeRef = changeRef;
          this.httpService = httpService;
          this.alertCtrl = alertCtrl;
          this.toastCtrl = toastCtrl;
          this.selectTabs = 'pending';
          this.userInfo = {};
          this.leaveMaster = [];
          this.approvedList = [];
          this.pendingList = [];
          this.userData = {};
          this.toggleValue = false;
        }

        _createClass(LeaveapprovalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loading.create({
                        message: 'Loading...',
                        spinner: 'bubbles'
                      });

                    case 2:
                      loader = _context.sent;
                      loader.present();
                      this.approvedList = [];
                      this.pendingList = [];
                      this.leaveMaster = [];
                      this.userData = this.storage.modalData;
                      console.log(this.userData);
                      this.authService.getUserDataPromise().then(function () {
                        var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        // console.log('USER DATA',res);
                        _this.userInfo = res; //DEBUG

                        _this.userInfo.staff_id = _this.userInfo.staff_id;
                        _this.userInfo.hod = 0; //DEBUG

                        _this.authService.leavedetailPromise({
                          staffid: _this.userInfo.staff_id
                        }).then(function (res) {
                          console.log('abc', res[0]);
                          _this.leaveMaster = res[0];

                          _this.segList(res[0]);

                          _this.segList(res[1]);

                          loader.dismiss();
                        }, function (err) {
                          console.log(err);
                          loader.dismiss();
                        });
                      }, function (err) {
                        loader.dismiss();

                        _this.nav.navigateBack('login');
                      });

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openModal",
          value: function openModal(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var approveModal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.userInfo.hod == 0)) {
                        _context2.next = 7;
                        break;
                      }

                      this.storage.modalData = item;
                      _context2.next = 4;
                      return this.modal.create({
                        component: _leave_modal_leave_modal_page__WEBPACK_IMPORTED_MODULE_6__["LeaveModalPage"]
                      });

                    case 4:
                      approveModal = _context2.sent;
                      approveModal.onDidDismiss().then(function (_) {
                        _this2.ionViewWillEnter(); //Refresh data

                      });
                      approveModal.present();

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "segList",
          value: function segList(list) {
            for (var x = 0; x < list.length; x++) {
              if (Number(list[x].approved) == 2) {
                this.approvedList.push(list[x]);
              } else if (Number(list[x].approved) < 2) {
                this.pendingList.push(list[x]);
              }
            }
          }
        }, {
          key: "approveLeave",
          value: function approveLeave() {
            var _this3 = this;

            this.httpService.post('leave/updateapprove', {
              leaveid: this.userData.leavedetailid,
              action: 1
            }).subscribe(function (res) {
              console.log(res);

              _this3.presentAlert();

              _this3.changeRef.detectChanges();
            });
          }
        }, {
          key: "checkboxClick",
          value: function checkboxClick(item) {
            if (item.checked) {
              this.approveLeave(), this.presentAlert();
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      alert = this.alertCtrl.create({
                        subHeader: "Leave Pending for Approval",
                        message: this.userInfo.staff_name,
                        buttons: [{
                          text: 'Cancel',
                          handler: function handler(data) {
                            console.log('Cancel clicked');
                            _this4.toggleValue == false;

                            _this4.modal.dismiss();
                          }
                        }, {
                          text: 'Approved',
                          handler: function handler(data) {
                            console.log('Saved clicked');
                          }
                        }]
                      });

                      if (!(this.toggleValue == true)) {
                        _context3.next = 5;
                        break;
                      }

                      _context3.next = 4;
                      return alert;

                    case 4:
                      _context3.sent.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return LeaveapprovalPage;
      }();

      LeaveapprovalPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      LeaveapprovalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leaveapproval',
        template: _raw_loader_leaveapproval_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leaveapproval_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LeaveapprovalPage);
      /***/
    },

    /***/
    "lhYH":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/leaveapproval/leaveapproval-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: LeaveapprovalPageRoutingModule */

    /***/
    function lhYH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaveapprovalPageRoutingModule", function () {
        return LeaveapprovalPageRoutingModule;
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


      var _leaveapproval_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./leaveapproval.page */
      "TuVu");

      var routes = [{
        path: '',
        component: _leaveapproval_page__WEBPACK_IMPORTED_MODULE_3__["LeaveapprovalPage"]
      }];

      var LeaveapprovalPageRoutingModule = function LeaveapprovalPageRoutingModule() {
        _classCallCheck(this, LeaveapprovalPageRoutingModule);
      };

      LeaveapprovalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LeaveapprovalPageRoutingModule);
      /***/
    },

    /***/
    "tZAa":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaveapproval/leaveapproval.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tZAa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>Leave Approval</ion-title>\r\n    <ion-back-button slot=\"start\"></ion-back-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <ion-list *ngFor=\"let leave of leaveDetail\" >\r\n  <div class=\"cuti\">\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-header></ion-card-header>\r\n      <ion-card-content style=\"overflow: scroll;\">\r\n        <ion-card-title color=\"primary-contrast\" style=\"font-size:20px; text-transform: uppercase;\">\r\n          {{leave.leavetype}}\r\n        </ion-card-title>\r\n        <ion-card-subtitle style=\"text-transform:none\" color=\"primary-contrast\">{{leave.reason}}</ion-card-subtitle>\r\n        <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:15px\"> Total of Days: {{leave.leaveday}}</ion-card-subtitle>\r\n        <a>From: {{leave.datefrom}}</a> <br> <a>To: {{leave.dateend}}</a>\r\n        <ion-button color=\"warning\" expand=\"block\" class=\"main-button\" *ngIf = \"leave.approved === 0; else approved\" >PENDING</ion-button>\r\n        <ng-template #approved>\r\n          <ion-button color=\"success\" expand=\"block\" class=\"main-button\">APPROVED</ion-button>\r\n        </ng-template>\r\n      </ion-card-content>\r\n    </ion-card>\r\n</div> \r\n</ion-list> -->\r\n<ion-list> \r\n<ion-item class=\"item-text-wrap\" *ngFor=\"let item of pendingList\">\r\n  <ion-label (click)='openModal(item)'>\r\n    <h2 style=\"font-weight: bold;\">{{item.reason}}</h2>\r\n    <p>{{item.staff_name}}<p>\r\n    <p>{{item.datefrom}} - {{item.dateend}}<p>\r\n    <p style=\"font-weight: bold;\">{{item.leaveday}} days<p>\r\n  </ion-label>\r\n  <ion-checkbox (ionChange)=\"checkboxClick($event)\" checked></ion-checkbox>\r\n  <!-- <ion-toggle [disabled]='false' [checked]=\"toggleValue\" (ionChange)=\"presentAlert()\" style='zoom:0.8;' (click)=\"approveLeave()\" color=\"secondary\" ></ion-toggle> -->\r\n  <!-- <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon> -->\r\n</ion-item>\r\n<div class=\"ion-text-right\">\r\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button (ionChange)=\"checkboxClick($event)\" type=\"submit\" shape=\"round\" size=\"large\">Submit</ion-fab-button>\r\n  </ion-fab>\r\n</div>\r\n</ion-list>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-leaveapproval-leaveapproval-module-es5.js.map