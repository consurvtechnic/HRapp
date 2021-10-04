(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
    /***/
    "723k":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.module.ts ***!
      \*************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "x0XS");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "uxLX");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "EGjV":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function EGjV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content * {\n  font-family: lato;\n}\n\nion-content .main-header {\n  height: 28vh;\n  width: 120%;\n  background: linear-gradient(90deg, var(--ion-color-tertiary) 0%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 10px var(--ion-color-light);\n  border-radius: 0 0 50% 50%;\n  margin-left: -4.5vh;\n  margin-top: -5px;\n}\n\nion-content .main-header div {\n  transform: translateY(2vh);\n}\n\nion-content .main-header div ion-avatar {\n  width: 15vh;\n  height: 15vh;\n  background: var(--ion-color-light);\n  margin-bottom: 5px;\n  border: 7px solid var(--ion-color-light);\n}\n\nion-content ion-row {\n  margin-top: -60px;\n  justify-content: center;\n}\n\nion-content ion-row ion-col ion-item {\n  width: 100%;\n  margin: auto;\n  border: 1px solid var(--ion-color-light);\n  box-shadow: 1px var(--ion-color-dark);\n  border-radius: 5px;\n}\n\nion-content ion-row ion-col ion-item ion-label {\n  font-size: 1.8rem;\n  font-weight: bold;\n}\n\nion-content ion-row ion-col ion-item ion-label p {\n  font-size: 0.7rem;\n}\n\nion-content ion-row ion-col ion-item ion-icon {\n  font-size: 3rem;\n}\n\nion-content ion-list ion-item {\n  margin-top: 1vh;\n}\n\nion-content ion-list ion-item ion-label {\n  color: #2C9DDE;\n  font-size: 0.9rem;\n}\n\nion-content ion-list ion-item ion-label p {\n  margin-top: 5px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.image-center {\n  margin: 0 auto;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\nion-back-button {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCO0FBQXpCOztBQUZBO0VBS1EsWUFBWTtFQUNaLFdBQVc7RUFDWCwrRkFBK0Y7RUFDL0YsNkNBQTZDO0VBQzdDLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ3hCOztBQVpBO0VBYVksMEJBQTBCO0FBR3RDOztBQWhCQTtFQWVnQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsd0NBQXdDO0FBS3hEOztBQXhCQTtFQXdCUSxpQkFBaUI7RUFDakIsdUJBQXVCO0FBSS9COztBQTdCQTtFQTRCZ0IsV0FBVztFQUNYLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUtsQzs7QUFyQ0E7RUFrQ29CLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFPckM7O0FBMUNBO0VBcUN3QixpQkFBaUI7QUFTekM7O0FBOUNBO0VBeUNvQixlQUFlO0FBU25DOztBQWxEQTtFQWtEWSxlQUFlO0FBSTNCOztBQXREQTtFQW9EZ0IsY0FBYztFQUNkLGlCQUFpQjtBQU1qQzs7QUEzREE7RUF1RG9CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0FBUXJDOztBQUZBO0VBQ0EsY0FBYTtBQUtiOztBQUZBO0VBQ0ksa0JBQWE7RUFDYixjQUFjO0FBS2xCOztBQUZBO0VBQ0ksY0FBYztBQUtsQiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAqIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IGxhdG87XG4gICAgfVxuICAgIC5tYWluLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMjh2aDtcbiAgICAgICAgd2lkdGg6IDEyMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSAwJSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDEwMCUpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTQuNXZoO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBkaXYge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCk7XG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTV2aDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1dmg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiA3cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tcm93IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTYwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyQzlEREU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5pbWFnZS1jZW50ZXJ7XG5tYXJnaW46MCBhdXRvO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjMkM5RERFO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuIH1cblxuIl19 */";
      /***/
    },

    /***/
    "VVTS":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function VVTS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n\n  <ion-toolbar color=\"light\">\n    <ion-title>My Profile</ion-title>\n    <ion-back-button slot=\"start\" (click)=\"close()\">\n      <ion-icon name=\"close\"></ion-icon>\n  </ion-back-button>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\">EDIT</ion-button>\n     </ion-buttons>\n  </ion-toolbar>\n  <ion-grid class=\"main-header\">\n    <div ion-align=\"center\">\n      <ion-avatar class=\"image-center\">\n        <img src=\"assets/images/user.png\" />\n      </ion-avatar>\n    </div>\n  </ion-grid>\n\n  <ion-row class=\"ion-padding-horizontal\" >\n    <ion-col size=\"6\">\n      <ion-item lines=\"none\" class=\"ion-text-center\">\n        <ion-icon name=\"calendar-outline\" color=\"primary\"></ion-icon>\n        <ion-label>\n          {{leaveBalance.data}}\n          <p>Leave Balance</p>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n    <!-- <ion-col size=\"6\">\n      <ion-item lines=\"none\" class=\"ion-text-center\">\n        <ion-icon name=\"medkit-outline\" color=\"primary\"></ion-icon>\n        <ion-label>\n          4\n          <p>MC Balance</p>\n        </ion-label>\n      </ion-item>\n    </ion-col> -->\n\n  </ion-row>\n<ion-card style=\"overflow: scroll;\">\n  <ion-card-content>\n    <ion-list lines=\"full\">\n      <ion-item>\n        <ion-label>\n          <ion-text>Name</ion-text>\n          <p><ion-text color=\"dark\">{{displayUserData?.staff_name}}</ion-text></p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <ion-text>Designation</ion-text>\n          <p><ion-text color=\"dark\">Engineer</ion-text></p>\n        </ion-label>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label>\n          <ion-text>Email</ion-text>\n          <p><ion-text color=\"dark\" class=\"ion-text-lowercase\">{{displayUserData?.username}}@consurv.com.my</ion-text></p>\n        </ion-label>\n      </ion-item> -->\n      <ion-item>\n        <ion-label>\n          <ion-text>Phone Number</ion-text>\n          <p><ion-input type=phone color=\"dark\"></ion-input></p>\n        </ion-label>\n      </ion-item>\n      \n    </ion-list>\n  \n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    "uxLX":
    /*!***********************************************!*\
      !*** ./src/app/pages/profile/profile.page.ts ***!
      \***********************************************/

    /*! exports provided: ProfilePage */

    /***/
    function uxLX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "VVTS");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "EGjV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(router, authService, http, modalCtrl) {
          _classCallCheck(this, ProfilePage);

          this.router = router;
          this.authService = authService;
          this.http = http;
          this.modalCtrl = modalCtrl;
          this.leaveBalance = [];
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var data = this.router.url.split('/');
            console.log(data); // if(data[1] == 'home') this.back = true;
            // else this.back = false;
            // this.authService.userData$.subscribe((res: any) => {
            //   this.displayUserData = res;
            // })
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.authService.getUserDataPromise().then(function () {
              var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              // console.log(res);
              _this.displayUserData = res;

              _this.getBalance();
            });
          }
        }, {
          key: "getBalance",
          value: function getBalance() {
            var _this2 = this;

            this.http.get('http://consurv.no-ip.biz:3000/api/leavesummary/' + "".concat(this.displayUserData.staff_id)).then(function (res) {
              console.log(res);
              _this2.leaveBalance = res;
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "x0XS":
    /*!*********************************************************!*\
      !*** ./src/app/pages/profile/profile-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function x0XS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "uxLX");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-profile-profile-module-es5.js.map