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


      __webpack_exports__["default"] = ".container {\n  position: fixed;\n  left: 0;\n  bottom: 10vh;\n  right: 0;\n  top: 2vh;\n}\n\n@media screen and (max-width: 1200px) and (min-width: 450px) {\n  .container {\n    background: white;\n  }\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\nion-button {\n  --border-radius: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL211a2FkZXBhbi1ob2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLE9BQU87RUFDUCxZQUFZO0VBQ1osUUFBUTtFQUNSLFFBQVE7QUFDWjs7QUFBSTtFQU5KO0lBT1EsaUJBQWlCO0VBSXZCO0FBQ0Y7O0FBREE7RUFDSSxrQkFBYTtFQUNiLGNBQWM7QUFJbEI7O0FBREU7RUFDSSxxQkFBZ0I7QUFJdEIiLCJmaWxlIjoibXVrYWRlcGFuLWhvZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDEwdmg7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAydmg7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA0NTBweCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6ICMyQzlEREU7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgfSJdfQ== */";
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


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"light\">\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"GotoNotityPage()\">\n      <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\n      <ion-badge color=\"danger\" style=\"position: absolute; right: -5px; top: -3px;\">?</ion-badge>\n    </ion-buttons>\n\n        <!-- <span>&nbsp;</span> -->\n\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"settingsPopover()\">\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  \n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content style=\"overflow: scroll;\">\n  <div class=\"container\">\n    <ion-text color=\"primary\" style=\"margin-top: 10px;\">\n      <h1 style=\"text-align:center\">DynaConsurv</h1>\n    </ion-text>\n   \n    <h2 style=\"text-align:center\">Welcome Back, {{displayUserData?.staff_name}}!</h2>\n    <img src=\"assets/images/home1.png\"  class=\"smalllogo\"/>\n    <p><ion-button (click)=\"goToList()\" expand=\"full\" color=\"dark\" style=\"width: fit-content; margin: auto;\">List of Attendees</ion-button></p>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-button (click)=\"showToast1()\" expand=\"block\" (click)=\"checkInAction()\" color=\"secondary\">Check In</ion-button>\n        </ion-col>\n        <ion-col col-6>\n          <ion-button (click)=\"showToast2()\" expand=\"block\" (click)=\"checkOutAction()\"color=\"secondary\">Check Out</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-text color=\"dark\">\n      <p style=\"text-align:center\">STATUS:</p>\n    </ion-text>\n    <ion-text color=\"success\">\n      <h1 style=\"text-align:center\" id=\"status\">None</h1>\n    </ion-text>\n      \n\n      <ion-list>\n        <ion-item *ngFor=\"let tran of transactions\">      \n          <p *ngIf=\" a.checkInAction == 'showToast1'\" > You have redeemed  {{a.checkin | date:'EEEE, h:mm a, dd/MM/yyyy '}} points.  </p>\n          <p *ngIf=\" a.checkOutAction == 'showToast2'\" > You have earned  {{a.checkout | date:'EEEE, h:mm a, dd/MM/yyyy '}}} points.  </p>  \n        </ion-item>\n      </ion-list>\n  \n    <!-- <p><ion-button (click)=\"goToList()\" expand=\"block\" color=\"secondary\" style=\"width: fit-content; margin: auto;\">List of Attendees</ion-button></p> -->\n    <!-- <p><ion-button (click)=\"showToast3()\" expand=\"block\" >Leave</ion-button></p> -->\n  </div>\n</ion-content>\n";
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
        function MukadepanHodPage(router, toastCtrl, authService, storageService, nav, popoverController) {
          _classCallCheck(this, MukadepanHodPage);

          this.router = router;
          this.toastCtrl = toastCtrl;
          this.authService = authService;
          this.storageService = storageService;
          this.nav = nav;
          this.popoverController = popoverController;
          this.showStatus = false;
          this.postData = {
            staff_id: '',
            action: 0,
            staff_name: '',
            checkin: '',
            checkout: '',
            id: ''
          };
          this.userInfo = {};
          this.leaveDetail = {};
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

            this.authService.userData$.subscribe(function (res) {
              _this2.displayUserData = res;
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
          key: "checkInAction",
          value: function checkInAction() {
            //let data = this.authService.getUserData();
            //console.log('i am clicked',this.displayUserData.staff_id);
            this.postData.staff_id = this.displayUserData.staff_id;
            this.postData.action = 0;
            this.authService.checkIn(this.postData).subscribe(function (res) {
              console.log('checkin', res);
            });
          }
        }, {
          key: "checkOutAction",
          value: function checkOutAction() {
            var _this3 = this;

            this.postData.staff_id = this.displayUserData.staff_id;
            this.postData.action = 1;
            this.authService.checkOut(this.postData).subscribe(function (res) {
              _this3.authService.getUserData();

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
                      document.getElementById("status").innerHTML = "You've Checked-In!";

                    case 3:
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
                      document.getElementById("status").innerHTML = "You've Checked-Out!";

                    case 3:
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