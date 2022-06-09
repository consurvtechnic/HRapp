(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

      var MukadepanAdminPageModule = function MukadepanAdminPageModule() {
        _classCallCheck(this, MukadepanAdminPageModule);
      };

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


      __webpack_exports__["default"] = "ion-header {\n  background: var(--ion-color-light);\n}\nion-header app-shrink-header {\n  display: block;\n  overflow: hidden;\n}\nion-header app-shrink-header ion-grid {\n  background: var(--ion-color-primary);\n  margin-top: -5px;\n  border-radius: 0 0 5px 5px;\n}\nion-header app-shrink-header .popover {\n  background: var(--ion-color-white);\n  border-radius: 10px;\n  width: 90%;\n  margin: auto;\n}\nion-header app-shrink-header .popover ion-item ion-label {\n  margin: 0;\n}\nion-header app-shrink-header .popover ion-item ion-label h1 {\n  font-size: 1.8rem;\n}\nion-header app-shrink-header .popover ion-item ion-label p {\n  margin-top: 3px;\n  font-size: 0.8rem;\n}\nion-header app-shrink-header .popover ion-item ion-label ion-text {\n  font-size: 0.7rem;\n}\nion-header app-shrink-header .popover canvas {\n  height: 70px !important;\n}\nion-header div {\n  background: var(--ion-color-light);\n}\nion-header div ion-segment {\n  --background: var(--ion-color-white);\n  border-radius: 20px;\n  --margin-top: 5px;\n  --margin-bottom: 5px;\n}\nion-header div ion-segment ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  --border-radius: 20px;\n  --color: var(--ion-color-primary);\n  --color-checked: var(--ion-color-white);\n}\nion-content {\n  --background: var(--ion-color-light);\n}\nion-content ion-list {\n  background: var(--ion-color-light);\n}\nion-content ion-list .heading {\n  font-family: lato;\n}\nion-content ion-list .popItem {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 15px;\n  border-radius: 10px;\n  padding: 0;\n}\nion-content ion-list .popItem ion-thumbnail {\n  min-width: 5rem;\n  min-height: 6rem;\n  border-radius: 10px;\n  background: var(--ion-color-secondary);\n}\nion-content ion-list .popItem ion-thumbnail div {\n  background-color: var(--ion-color-primary);\n  border-radius: 10px 10px 0 0;\n  padding-bottom: 2px;\n}\nion-content ion-list .popItem ion-thumbnail div ion-text {\n  font-size: 0.7rem;\n  font-weight: bold;\n}\nion-content ion-list .popItem ion-thumbnail p ion-text {\n  font-size: 1.2rem !important;\n}\nion-content ion-list .popItem ion-label ion-note {\n  font-size: 1.1rem;\n  letter-spacing: 0.5px;\n}\nion-content ion-list .popItem ion-label p {\n  margin-top: 5px;\n}\nion-content ion-list .popItem ion-label p ion-text span {\n  color: var(--ion-color-dark);\n  padding: 0 5px;\n}\nion-content ion-list .popItem ion-fab {\n  margin-right: -15px !important;\n  margin-top: -10px;\n}\n* {\n  font-family: lato;\n}\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #7590d6;\n  background: linear-gradient(90deg, #7590d6 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50px;\n  border: 7px solid #5e7ccc;\n  margin-right: 14px;\n}\n.header-content h2 {\n  font-weight: 300px;\n  color: #fff;\n}\n.header-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n.action-button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.action-button ion-button {\n  text-transform: capitalize;\n  font-weight: 300;\n  --background: #628cff;\n  --border-radius: 7px;\n  --box-shadow: none;\n}\n.action-button ion-icon {\n  margin-right: 1px;\n}\n.menu-items {\n  margin: 0px;\n}\n.menu-items ion-icon {\n  margin-right: 20px;\n  color: #86979f;\n}\n.menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n.menu-items .active {\n  border-left: 5px solid;\n  color: #628cff;\n  padding-left: 15px;\n}\n.menu-items .active ion-icon {\n  color: #628cff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdWthZGVwYW4tYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUFDSjtBQUFJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBRU47QUFETTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUdSO0FBQU07RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFFUjtBQUNVO0VBQ0UsU0FBQTtBQUNaO0FBQWE7RUFDRSxpQkFBQTtBQUVmO0FBQWE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFZjtBQUFhO0VBQ0MsaUJBQUE7QUFFZDtBQUVRO0VBQ0UsdUJBQUE7QUFBVjtBQUlJO0VBQ0Usa0NBQUE7QUFGTjtBQUdNO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFEUjtBQUVRO0VBQ0UsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtBQUFWO0FBTUU7RUFDRSxvQ0FBQTtBQUhKO0FBSUk7RUFDRSxrQ0FBQTtBQUZOO0FBR007RUFDRSxpQkFBQTtBQURSO0FBR007RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRFI7QUFFUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUFBVjtBQUNVO0VBQ0UsMENBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBQ1o7QUFBWTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFFZDtBQUVZO0VBQ0UsNEJBQUE7QUFBZDtBQUtVO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUhaO0FBS1U7RUFDRSxlQUFBO0FBSFo7QUFLYztFQUNFLDRCQUFBO0VBQ0EsY0FBQTtBQUhoQjtBQVFRO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQU5WO0FBWUU7RUFDRSxpQkFBQTtBQVRKO0FBWUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNERBQUE7RUFDQSxnREFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQVlBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVRKO0FBV0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVRSO0FBWUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFWUjtBQWFJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBWFI7QUFlQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWko7QUFjSTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFaUjtBQWVJO0VBQ0ksaUJBQUE7QUFiUjtBQWlCQTtFQUNJLFdBQUE7QUFkSjtBQWdCSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQWRSO0FBaUJJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQWZSO0FBa0JJO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFoQlI7QUFrQlE7RUFDSSxjQUFBO0FBaEJaIiwiZmlsZSI6Im11a2FkZXBhbi1hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBhcHAtc2hyaW5rLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBpb24tZ3JpZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XHJcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDEyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5wb3BvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogLTEyMHB4O1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FudmFzIHtcclxuICAgICAgICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgaW9uLXNlZ21lbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIC0tbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICAgIH1cclxuICAgICAgLnBvcEl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNnJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGlvbi1ub3RlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWZhYiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICoge1xyXG4gICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbn1cclxuXHJcbi5tZW51LWhlYWRlci1iZyB7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1OTBkNjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc1OTBkNiAwJSwgIzRkNzFkNyAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDk4LCAxNDAsIDI1NSwgMC41KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiA3cHggc29saWQgIzVlN2NjYztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICM2MjhjZmY7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1lbnUtaXRlbXMge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjogIzg2OTc5ZjtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcclxuICAgICAgICBjb2xvcjogIzYyOGNmZjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2MjhjZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4gICJdfQ== */";
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

      var MukadepanAdminPageRoutingModule = function MukadepanAdminPageRoutingModule() {
        _classCallCheck(this, MukadepanAdminPageRoutingModule);
      };

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