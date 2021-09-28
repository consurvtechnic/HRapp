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


      __webpack_exports__["default"] = "ion-content * {\n  font-family: lato;\n}\n\nion-content .main-header {\n  height: 28vh;\n  width: 120%;\n  background: linear-gradient(90deg, var(--ion-color-tertiary) 0%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 10px var(--ion-color-light);\n  border-radius: 0 0 50% 50%;\n  margin-left: -4.5vh;\n  margin-top: -5px;\n}\n\nion-content .main-header div {\n  transform: translateY(2vh);\n}\n\nion-content .main-header div ion-avatar {\n  width: 15vh;\n  height: 15vh;\n  background: var(--ion-color-light);\n  margin-bottom: 5px;\n  border: 7px solid var(--ion-color-light);\n}\n\nion-content ion-row {\n  margin-top: -60px;\n  justify-content: center;\n}\n\nion-content ion-row ion-col ion-item {\n  width: 100%;\n  margin: auto;\n  border: 1px solid var(--ion-color-light);\n  box-shadow: 1px var(--ion-color-dark);\n  border-radius: 5px;\n}\n\nion-content ion-row ion-col ion-item ion-label {\n  font-size: 1.8rem;\n  font-weight: bold;\n}\n\nion-content ion-row ion-col ion-item ion-label p {\n  font-size: 0.7rem;\n}\n\nion-content ion-row ion-col ion-item ion-icon {\n  font-size: 3rem;\n}\n\nion-content ion-list ion-item {\n  margin-top: 1vh;\n}\n\nion-content ion-list ion-item ion-label {\n  font-size: 0.9rem;\n}\n\nion-content ion-list ion-item ion-label p {\n  margin-top: 5px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.image-center {\n  margin: 0 auto;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCO0FBQXpCOztBQUZBO0VBS1EsWUFBWTtFQUNaLFdBQVc7RUFDWCwrRkFBK0Y7RUFDL0YsNkNBQTZDO0VBQzdDLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ3hCOztBQVpBO0VBYVksMEJBQTBCO0FBR3RDOztBQWhCQTtFQWVnQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsd0NBQXdDO0FBS3hEOztBQXhCQTtFQXdCUSxpQkFBaUI7RUFDakIsdUJBQXVCO0FBSS9COztBQTdCQTtFQTRCZ0IsV0FBVztFQUNYLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUtsQzs7QUFyQ0E7RUFrQ29CLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFPckM7O0FBMUNBO0VBcUN3QixpQkFBaUI7QUFTekM7O0FBOUNBO0VBeUNvQixlQUFlO0FBU25DOztBQWxEQTtFQWlEWSxlQUFlO0FBSzNCOztBQXREQTtFQW1EZ0IsaUJBQWlCO0FBT2pDOztBQTFEQTtFQXFEb0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFTckM7O0FBSEE7RUFDQSxjQUFhO0FBTWI7O0FBSEE7RUFDSSxrQkFBYTtFQUNiLGNBQWM7QUFNbEIiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIH1cbiAgICAubWFpbi1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDI4dmg7XG4gICAgICAgIHdpZHRoOiAxMjAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgMCUsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAxMDAlKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMTBweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNTAlIDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00LjV2aDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpO1xuICAgICAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1dmg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZoO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogN3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXZoO1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmltYWdlLWNlbnRlcntcbm1hcmdpbjowIGF1dG87XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6ICMyQzlEREU7XG59Il19 */";
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


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n\n  <ion-toolbar color=\"light\">\n    <ion-title>My Profile</ion-title>\n    <ion-buttons slot=\"start\">\n     <ion-back-button defaultHref=\"/home/mukadepan\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\">EDIT</ion-button>\n     </ion-buttons>\n  </ion-toolbar>\n  <ion-grid class=\"main-header\">\n    <div ion-align=\"center\">\n      <ion-avatar class=\"image-center\">\n        <img src=\"assets/images/user.png\" />\n      </ion-avatar>\n    </div>\n  </ion-grid>\n\n  <ion-row class=\"ion-padding-horizontal\" >\n    <ion-col size=\"6\">\n      <ion-item lines=\"none\" class=\"ion-text-center\">\n        <ion-icon name=\"calendar-outline\" color=\"primary\"></ion-icon>\n        <ion-label>\n          34\n          <p>Leave Balance</p>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-item lines=\"none\" class=\"ion-text-center\">\n        <ion-icon name=\"medkit-outline\" color=\"primary\"></ion-icon>\n        <ion-label>\n          4\n          <p>MC Balance</p>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n\n  </ion-row>\n\n  <ion-list lines=\"full\">\n    <ion-item>\n      <ion-label>\n        <ion-text>Name</ion-text>\n        <p><ion-text color=\"dark\">{{displayUserData?.staff_name}}</ion-text></p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-text>Designation</ion-text>\n        <p><ion-text color=\"dark\">Engineer</ion-text></p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-text>Email</ion-text>\n        <p><ion-text color=\"dark\" class=\"ion-text-lowercase\">{{displayUserData?.staff_name}}@consurv.com.my</ion-text></p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-text>Phone Number</ion-text>\n        <p><ion-input type=phone color=\"dark\"></ion-input></p>\n      </ion-label>\n    </ion-item>\n    \n  </ion-list>\n\n</ion-content>\n\n";
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

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(router, authService) {
          _classCallCheck(this, ProfilePage);

          this.router = router;
          this.authService = authService;
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var data = this.router.url.split('/');
            console.log(data);
            if (data[1] == 'home') this.back = true;else this.back = false;
            this.authService.userData$.subscribe(function (res) {
              _this.displayUserData = res;
            });
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
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