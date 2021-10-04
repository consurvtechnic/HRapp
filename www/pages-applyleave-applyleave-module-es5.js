(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-applyleave-applyleave-module"], {
    /***/
    "1hyo":
    /*!*******************************************************!*\
      !*** ./src/app/pages/applyleave/applyleave.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function hyo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".apply-button {\n  float: right;\n}\n\n.applyButton {\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\nion-card {\n  color: #2C9DDE;\n  max-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nion-list {\n  overflow: hidden;\n  overflow-y: auto;\n}\n\nion-list ::-webkit-scrollbar {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcGx5bGVhdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtFQUNJLGtCQUFhO0VBQ2IsY0FBYztBQUNsQjs7QUFFQTtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDcEI7O0FBSEE7RUFJTSxhQUFhO0FBR25CIiwiZmlsZSI6ImFwcGx5bGVhdmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcGx5LWJ1dHRvbntcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5hcHBseUJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjMkM5RERFO1xuICB9XG5cbmlvbi1jYXJkIHtcbiAgICBjb2xvcjogIzJDOURERTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pb24tbGlzdCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "BwO+":
    /*!*****************************************************!*\
      !*** ./src/app/pages/applyleave/applyleave.page.ts ***!
      \*****************************************************/

    /*! exports provided: ApplyleavePage */

    /***/
    function BwO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyleavePage", function () {
        return ApplyleavePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_applyleave_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./applyleave.page.html */
      "Ys5u");
      /* harmony import */


      var _applyleave_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./applyleave.page.scss */
      "1hyo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "n90K");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/toast.service */
      "2g2N");

      var ApplyleavePage = /*#__PURE__*/function () {
        function ApplyleavePage(toastCtrl, router, authService, storageService, toastService, nav, http, alertCtrl, changeRef, loading) {
          _classCallCheck(this, ApplyleavePage);

          this.toastCtrl = toastCtrl;
          this.router = router;
          this.authService = authService;
          this.storageService = storageService;
          this.toastService = toastService;
          this.nav = nav;
          this.http = http;
          this.alertCtrl = alertCtrl;
          this.changeRef = changeRef;
          this.loading = loading;
          this.postData = {
            staff_id: '',
            leavetype: '',
            reason: '',
            currentDate: '',
            endDate: '',
            image: '',
            halfday1: '',
            halfday2: '',
            data: ''
          };
          this.userInfo = {};
          this.leaveDetail = {};
          this.leaveBalance = [];
          this.leaveTypeChoices = [];
          this.image = '';
        } //  async showToastLeave(){
        //   await this.toastCtrl.create({
        //     message: "You have successfully applied for a leave!",
        //     duration: 2000,
        //     position: 'middle',
        //     buttons: [{
        //       text: 'OK'
        //     }]
        //   }).then( res => res.present());
        // }


        _createClass(ApplyleavePage, [{
          key: "showAlert",
          value: function showAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'SUCCESS!',
                        subHeader: 'You have successfully applied for a leave!',
                        cssClass: 'my-custom-class',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
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

              _this2.getBalance();

              _this2.authService.leavedetailPromise({
                staffid: _this2.userInfo.staff_id
              }).then(function (res) {
                console.log(res);
                _this2.leaveDetail = res[0];

                _this2.getLeaveType();
              }, function (err) {
                console.log(err);
              });
            }, function (err) {
              _this2.nav.navigateBack('login');
            });
          }
        }, {
          key: "getLeaveType",
          value: function getLeaveType() {
            var _this3 = this;

            this.http.get('http://consurv.no-ip.biz/leave/leavetype').then(function (res) {
              console.log(res);
              _this3.leaveTypeChoices = res;
            });
          }
        }, {
          key: "getBalance",
          value: function getBalance() {
            var _this4 = this;

            this.http.get('http://consurv.no-ip.biz:3000/api/leavesummary/' + "".concat(this.userInfo.staff_id)).then(function (res) {
              console.log(res);
              _this4.leaveBalance = res;
            });
          }
        }, {
          key: "validateInputs",
          value: function validateInputs() {
            var staff_id = this.postData.staff_id;
            var leavetype = this.postData.leavetype;
            var reason = this.postData.reason;
            var currentDate = this.postData.currentDate;
            var endDate = this.postData.endDate;
            var image = this.postData.image;
            var halfday1 = this.postData.halfday1;
            var halfday2 = this.postData.halfday2;
            return this.postData.staff_id && this.postData.leavetype && this.postData.reason && this.postData.currentDate && this.postData.endDate && this.postData.image && this.postData.halfday1 && this.postData.halfday2;
          }
        }, {
          key: "applyCuti",
          value: function applyCuti() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var pack_data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // let loader=await this.loading.create({
                      //   message:'Loading...',
                      //   spinner:'bubbles'
                      // })
                      // loader.present();
                      // this.postData.staff_id;
                      // this.postData.currentDate;
                      // this.postData.endDate;
                      // this.postData.halfday1;
                      // this.postData.halfday2;
                      // this.postData.leavetype;
                      // this.postData.reason;
                      //   this.authService.applyleave(this.postData).subscribe((res: any) => {
                      //     console.log('apply',res)} )
                      // let startDate= this.getCorrectDateFormat(this.currentDate);
                      // let endDate= this.getCorrectDateFormat(this.endDate);
                      // staff_id(from user data),
                      // leavetype(typeid from HRAppGetLeaveType),
                      // reason(user input string),
                      // currentDate(in string),
                      // endDate(in string),
                      // image(leave it null),
                      // halfday1( 1=full day, 2=morning, 3=evening )
                      // halfday2( 1=full day, 2=morning, 3=evening )
                      pack_data = {
                        staff_id: this.userInfo.staff_id,
                        leavetype: this.leaveType.toString(),
                        reason: this.reason,
                        startdate: this.currentDate,
                        enddate: this.endDate,
                        startdate_type: this.halfday1.toString(),
                        enddate_type: this.halfday2.toString(),
                        image: '' //ok

                      };
                      console.log('pack_', pack_data);
                      this.authService.applyleave(pack_data).then(function (res) {
                        console.log(res);

                        _this5.changeRef.detectChanges(); // this.nav.navigateForward('home/calendar');

                      }, function (err) {
                        console.log(err);
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getCorrectDateFormat",
          value: function getCorrectDateFormat(dateTemp) {
            var theDate = new Date(dateTemp);
            var fullYear = theDate.getFullYear();
            var fullMonth;
            var monthTemp = Number(theDate.getMonth()) + 1;

            if (Number(monthTemp) < 10) {
              fullMonth = "0".concat(monthTemp);
            } else {
              fullMonth = monthTemp.toString();
            }

            var fullDay;
            var dayTemp = Number(theDate.getDate());

            if (Number(dayTemp) < 10) {
              fullDay = "0".concat(dayTemp);
            } else {
              fullDay = dayTemp.toString();
            }

            var fullDate = "".concat(fullYear, "-").concat(fullMonth, "-").concat(fullDay); // console.log(fullDate);

            return fullDate;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.myform.valid) {
              console.log("Form Submitted!");
              this.myform.reset();
            }
          }
        }]);

        return ApplyleavePage;
      }();

      ApplyleavePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      ApplyleavePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-applyleave',
        template: _raw_loader_applyleave_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_applyleave_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ApplyleavePage);
      /***/
    },

    /***/
    "Ys5u":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/applyleave/applyleave.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ys5u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color='light'>\n    <ion-title>Apply Leave</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-card>\n    <ion-card-content style=\"overflow: scroll;\">\n      <form [formGroup]=\"myform\" (ngSubmit)=\"onSubmit()\">\n        <ion-item>\n          <ion-label>Type of leave:</ion-label>\n            <ion-select required slot=\"end\" [(ngModel)]='leaveType'>\n              <ion-select-option *ngFor=\"let item of leaveTypeChoices\" [value]=\"item.typeid\">{{item.leavetype}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n      \n        <ion-item lines=\"none\">\n          <ion-label>Reason:</ion-label>\n            <ion-input required type=\"text\" type=\"text\" [(ngModel)]='reason'> </ion-input>\n        </ion-item>\n      \n        <ion-list>\n          <ion-item-divider></ion-item-divider>\n          <ion-item color=\"secondary\" lines=\"none\">\n            <ion-label>Start Date</ion-label>\n            <ion-datetime [(ngModel)]=\"currentDate\" color=\"light\" placeholder=\"Select Date\"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label>Duration</ion-label>\n                  <ion-select slot=\"end\" [(ngModel)]='halfday1'>\n                    <ion-select-option value=\"1\">Full day</ion-select-option>\n                    <ion-select-option value=\"2\">Morning Only</ion-select-option>\n                    <ion-select-option value=\"3\">Evening Only</ion-select-option>\n              </ion-select>\n          </ion-item>\n          <ion-item color=\"secondary\" lines=\"none\">\n            <ion-label>Ends</ion-label>\n            <ion-datetime [(ngModel)]=\"endDate\" placeholder=\"Select Date\"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label>Duration</ion-label>\n                  <ion-select slot=\"end\" [(ngModel)]='halfday2'>\n                    <ion-select-option value=\"1\">Full day</ion-select-option>\n                    <ion-select-option value=\"2\">Morning Only</ion-select-option>\n                    <ion-select-option value=\"3\">Evening Only</ion-select-option>\n              </ion-select>\n          </ion-item>\n        </ion-list>\n      </form>\n     \n    </ion-card-content>\n</ion-card>\n\n<ion-item lines=\"none\">\n  <div class=\"applyButton\">\n    <ion-button (ionClear)=\"ionClear($event)\" type=\"ngSubmit\" (click)=\"showAlert()\" (click)=\"applyCuti()\" class=\"apply-button\" color=\"secondary\">Apply Leave</ion-button>\n  </div>\n</ion-item>\n\n<div lines=\"none\" class=\"cuti\">\n  <ion-card color='light'>\n    <ion-card-header></ion-card-header>\n    <ion-card-content>\n      <ion-card-subtitle color=\"primary-contrast\">Leave Balance for year 2021:</ion-card-subtitle>\n      <ion-card-title color=\"primary-contrast\" style=\"font-size:70px\" >\n        {{leaveBalance.data}}\n      </ion-card-title>\n      <ion-card-subtitle color=\"primary-contrast\" style=\"font-size:20px\">Days</ion-card-subtitle>\n    </ion-card-content>\n  </ion-card>\n</div>";
      /***/
    },

    /***/
    "wK0/":
    /*!***************************************************************!*\
      !*** ./src/app/pages/applyleave/applyleave-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ApplyleavePageRoutingModule */

    /***/
    function wK0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyleavePageRoutingModule", function () {
        return ApplyleavePageRoutingModule;
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


      var _applyleave_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./applyleave.page */
      "BwO+");

      var routes = [{
        path: '',
        component: _applyleave_page__WEBPACK_IMPORTED_MODULE_3__["ApplyleavePage"]
      }];

      var ApplyleavePageRoutingModule = function ApplyleavePageRoutingModule() {
        _classCallCheck(this, ApplyleavePageRoutingModule);
      };

      ApplyleavePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ApplyleavePageRoutingModule);
      /***/
    },

    /***/
    "xN67":
    /*!*******************************************************!*\
      !*** ./src/app/pages/applyleave/applyleave.module.ts ***!
      \*******************************************************/

    /*! exports provided: ApplyleavePageModule */

    /***/
    function xN67(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplyleavePageModule", function () {
        return ApplyleavePageModule;
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


      var _applyleave_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./applyleave-routing.module */
      "wK0/");
      /* harmony import */


      var _applyleave_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./applyleave.page */
      "BwO+");

      var ApplyleavePageModule = function ApplyleavePageModule() {
        _classCallCheck(this, ApplyleavePageModule);
      };

      ApplyleavePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _applyleave_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplyleavePageRoutingModule"]],
        declarations: [_applyleave_page__WEBPACK_IMPORTED_MODULE_6__["ApplyleavePage"]]
      })], ApplyleavePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-applyleave-applyleave-module-es5.js.map