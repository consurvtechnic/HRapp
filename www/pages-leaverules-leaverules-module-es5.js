(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leaverules-leaverules-module"], {
    /***/
    "Tr91":
    /*!*****************************************************!*\
      !*** ./src/app/pages/leaverules/leaverules.page.ts ***!
      \*****************************************************/

    /*! exports provided: LeaverulesPage */

    /***/
    function Tr91(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaverulesPage", function () {
        return LeaverulesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leaverules_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leaverules.page.html */
      "WyJK");
      /* harmony import */


      var _leaverules_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leaverules.page.scss */
      "f4gE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LeaverulesPage = /*#__PURE__*/function () {
        function LeaverulesPage() {
          _classCallCheck(this, LeaverulesPage);

          this.segmentValue = '1';
          this.requests = [];
          this.donors = [];
          this.newHeight = 0;
        }

        _createClass(LeaverulesPage, [{
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

        return LeaverulesPage;
      }();

      LeaverulesPage.ctorParameters = function () {
        return [];
      };

      LeaverulesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leaverules',
        template: _raw_loader_leaverules_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leaverules_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LeaverulesPage);
      /***/
    },

    /***/
    "U2yf":
    /*!***************************************************************!*\
      !*** ./src/app/pages/leaverules/leaverules-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: LeaverulesPageRoutingModule */

    /***/
    function U2yf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaverulesPageRoutingModule", function () {
        return LeaverulesPageRoutingModule;
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


      var _leaverules_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./leaverules.page */
      "Tr91");

      var routes = [{
        path: '',
        component: _leaverules_page__WEBPACK_IMPORTED_MODULE_3__["LeaverulesPage"]
      }];

      var LeaverulesPageRoutingModule = /*#__PURE__*/_createClass(function LeaverulesPageRoutingModule() {
        _classCallCheck(this, LeaverulesPageRoutingModule);
      });

      LeaverulesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LeaverulesPageRoutingModule);
      /***/
    },

    /***/
    "WyJK":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaverules/leaverules.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function WyJK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title class=\"ion-text-left\">\r\n    LEAVE RULES\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list lines=\"none\">\r\n    <ion-item color=\"light\">\r\n      <ion-label class=\"heading\">Set rules for each roles</ion-label>\r\n      <!-- <ion-button slot=\"end\" fill=\"clear\" size=\"small\">\r\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\r\n      </ion-button> -->\r\n    </ion-item>\r\n    \r\n    <ion-item-group>\r\n      <ion-item class=\"ion-padding-vertical popItem\" \r\n        *ngFor=\"let item of (segmentValue == '1') ? requests : donors\">\r\n        <ion-label slot=\"start\">\r\n          <ion-note color=\"dark\"><b>{{item?.name}}</b></ion-note>\r\n          <p class=\"ion-text-wrap\">{{item?.position}}</p>\r\n          \r\n        </ion-label>\r\n        <ion-fab vertical=\"top\" horizontal=\"end\">\r\n          <ion-fab-button size=\"small\" color=\"white\">\r\n            <img [src]=\"item?.photo\"/>\r\n          </ion-fab-button>\r\n        </ion-fab>\r\n        <ion-list>\r\n          <ion-item>\r\n            <ion-button color=\"warning\"><ion-label>Rules</ion-label>\r\n              <ion-select>\r\n                <ion-select-option value=\"1\">1</ion-select-option>\r\n                <ion-select-option value=\"2\">2</ion-select-option>\r\n          </ion-select></ion-button>\r\n        </ion-item>\r\n        </ion-list>\r\n          \r\n    \r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "f4gE":
    /*!*******************************************************!*\
      !*** ./src/app/pages/leaverules/leaverules.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function f4gE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  background: var(--ion-color-light);\n}\n\nion-header app-shrink-header {\n  display: block;\n  overflow: hidden;\n}\n\nion-header app-shrink-header ion-grid {\n  background: var(--ion-color-primary);\n  margin-top: -5px;\n  border-radius: 0 0 5px 5px;\n}\n\nion-header app-shrink-header .popover {\n  background: var(--ion-color-white);\n  border-radius: 10px;\n  width: 90%;\n  margin: auto;\n}\n\nion-header app-shrink-header .popover ion-item ion-label {\n  margin: 0;\n}\n\nion-header app-shrink-header .popover ion-item ion-label h1 {\n  font-size: 1.8rem;\n}\n\nion-header app-shrink-header .popover ion-item ion-label p {\n  margin-top: 3px;\n  font-size: 0.8rem;\n}\n\nion-header app-shrink-header .popover ion-item ion-label ion-text {\n  font-size: 0.7rem;\n}\n\nion-header app-shrink-header .popover canvas {\n  height: 70px !important;\n}\n\nion-header div {\n  background: var(--ion-color-light);\n}\n\nion-header div ion-segment {\n  --background: var(--ion-color-white);\n  border-radius: 20px;\n  --margin-top: 5px;\n  --margin-bottom: 5px;\n}\n\nion-header div ion-segment ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  --border-radius: 20px;\n  --color: var(--ion-color-primary);\n  --color-checked: var(--ion-color-white);\n}\n\nion-content {\n  --background: var(--ion-color-light);\n}\n\nion-content ion-list {\n  background: var(--ion-color-light);\n}\n\nion-content ion-list .heading {\n  font-family: lato;\n}\n\nion-content ion-list .popItem {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 15px;\n  border-radius: 10px;\n  padding: 0;\n}\n\nion-content ion-list .popItem ion-thumbnail {\n  min-width: 5rem;\n  min-height: 6rem;\n  border-radius: 10px;\n  background: var(--ion-color-secondary);\n}\n\nion-content ion-list .popItem ion-thumbnail div {\n  background-color: var(--ion-color-primary);\n  border-radius: 10px 10px 0 0;\n  padding-bottom: 2px;\n}\n\nion-content ion-list .popItem ion-thumbnail div ion-text {\n  font-size: 0.7rem;\n  font-weight: bold;\n}\n\nion-content ion-list .popItem ion-thumbnail p ion-text {\n  font-size: 1.2rem !important;\n}\n\nion-content ion-list .popItem ion-label ion-note {\n  font-size: 1.1rem;\n  letter-spacing: 0.5px;\n}\n\nion-content ion-list .popItem ion-label p {\n  margin-top: 5px;\n}\n\nion-content ion-list .popItem ion-label p ion-text span {\n  color: var(--ion-color-dark);\n  padding: 0 5px;\n}\n\nion-content ion-list .popItem ion-fab {\n  margin-right: -15px !important;\n  margin-top: -10px;\n}\n\n* {\n  font-family: lato;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsZWF2ZXJ1bGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFrQztBQUN0Qzs7QUFGQTtFQUdNLGNBQWM7RUFDZCxnQkFBZ0I7QUFHdEI7O0FBUEE7RUFNUSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUtsQzs7QUFiQTtFQVlRLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFLcEI7O0FBcEJBO0VBbUJZLFNBQVM7QUFLckI7O0FBeEJBO0VBcUJlLGlCQUFpQjtBQU9oQzs7QUE1QkE7RUF3QmUsZUFBZTtFQUNmLGlCQUFpQjtBQVFoQzs7QUFqQ0E7RUE0QmMsaUJBQWlCO0FBUy9COztBQXJDQTtFQWlDVSx1QkFBdUI7QUFRakM7O0FBekNBO0VBc0NNLGtDQUFrQztBQU94Qzs7QUE3Q0E7RUF3Q1Esb0NBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWE7RUFDYixvQkFBZ0I7QUFTeEI7O0FBcERBO0VBNkNVLDhDQUFxQjtFQUNyQiwyQ0FBa0I7RUFDbEIscUJBQWdCO0VBQ2hCLGlDQUFRO0VBQ1IsdUNBQWdCO0FBVzFCOztBQUxFO0VBQ0Usb0NBQWE7QUFRakI7O0FBVEU7RUFHSSxrQ0FBa0M7QUFVeEM7O0FBYkU7RUFLTSxpQkFBaUI7QUFZekI7O0FBakJFO0VBUU0sVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFVBQVU7QUFhbEI7O0FBekJFO0VBY1EsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0NBQXNDO0FBZWhEOztBQWhDRTtFQW1CVSwwQ0FBMEM7RUFDMUMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQWlCL0I7O0FBdENFO0VBdUJZLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFtQi9COztBQTNDRTtFQTZCWSw0QkFBNEI7QUFrQjFDOztBQS9DRTtFQW1DVSxpQkFBaUI7RUFDakIscUJBQXFCO0FBZ0JqQzs7QUFwREU7RUF1Q1UsZUFBZTtBQWlCM0I7O0FBeERFO0VBMENjLDRCQUE0QjtFQUM1QixjQUFjO0FBa0I5Qjs7QUE3REU7RUFpRFEsOEJBQThCO0VBQzlCLGlCQUFpQjtBQWdCM0I7O0FBVkE7RUFDSSxpQkFBaUI7QUFhckI7O0FBVkE7RUFDRSxrQkFBYTtFQUNiLGNBQWM7QUFhaEIiLCJmaWxlIjoibGVhdmVydWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBhcHAtc2hyaW5rLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBpb24tZ3JpZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XHJcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDEyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5wb3BvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogLTEyMHB4O1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FudmFzIHtcclxuICAgICAgICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgaW9uLXNlZ21lbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIC0tbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIC0tbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICAgIH1cclxuICAgICAgLnBvcEl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNnJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGlvbi1ub3RlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWZhYiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG4gIGNvbG9yOiAjMkM5RERFO1xyXG59Il19 */";
      /***/
    },

    /***/
    "kUyV":
    /*!*******************************************************!*\
      !*** ./src/app/pages/leaverules/leaverules.module.ts ***!
      \*******************************************************/

    /*! exports provided: LeaverulesPageModule */

    /***/
    function kUyV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaverulesPageModule", function () {
        return LeaverulesPageModule;
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


      var _leaverules_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./leaverules-routing.module */
      "U2yf");
      /* harmony import */


      var _leaverules_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./leaverules.page */
      "Tr91");

      var LeaverulesPageModule = /*#__PURE__*/_createClass(function LeaverulesPageModule() {
        _classCallCheck(this, LeaverulesPageModule);
      });

      LeaverulesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _leaverules_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeaverulesPageRoutingModule"]],
        declarations: [_leaverules_page__WEBPACK_IMPORTED_MODULE_6__["LeaverulesPage"]]
      })], LeaverulesPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-leaverules-leaverules-module-es5.js.map