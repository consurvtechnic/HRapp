(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-staff-staff-module"], {
    /***/
    "/UHV":
    /*!*******************************************!*\
      !*** ./src/app/pages/staff/staff.page.ts ***!
      \*******************************************/

    /*! exports provided: StaffPage */

    /***/
    function UHV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaffPage", function () {
        return StaffPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_staff_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./staff.page.html */
      "1BjT");
      /* harmony import */


      var _staff_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./staff.page.scss */
      "IVbf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StaffPage = /*#__PURE__*/function () {
        function StaffPage() {
          _classCallCheck(this, StaffPage);

          this.segmentValue = '1';
          this.requests = [];
          this.donors = [];
          this.newHeight = 0;
        }

        _createClass(StaffPage, [{
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

        return StaffPage;
      }();

      StaffPage.ctorParameters = function () {
        return [];
      };

      StaffPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-staff',
        template: _raw_loader_staff_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_staff_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StaffPage);
      /***/
    },

    /***/
    "1BjT":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/staff/staff.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function BjT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-left\">\n    STAFF\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <div class=\"ion-padding\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment mode=\"ios\" [value]=\"segmentValue\">\n      <ion-segment-button value=\"1\">\n        <ion-label>Manager</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"2\">\n        <ion-label>Staff</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"scroll($event)\" #myContent>\n\n  <ion-list lines=\"none\">\n    <ion-item color=\"light\">\n      <ion-label class=\"heading\">List of Registered{{segmentValue == '1' ? ' Manager' : ' Staff'}}</ion-label>\n      <!-- <ion-button slot=\"end\" fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n      </ion-button> -->\n    </ion-item>\n\n    <ion-item-group>\n      <ion-item class=\"ion-padding-vertical popItem\" \n        *ngFor=\"let item of (segmentValue == '1') ? requests : donors\">\n        <ion-thumbnail slot=\"start\">\n          <div class=\"ion-text-center\" *ngIf=\"segmentValue == '1'\">\n            <ion-text color=\"white\">MANAGER</ion-text>\n          </div>\n          <p class=\"ion-text-center\" [style.margin]=\"segmentValue == '1' ? '10px 0' : '20px 0'\">\n            <ion-text color=\"white\">{{item?.company}}</ion-text>\n          </p>\n        </ion-thumbnail>\n        <ion-label>\n          <ion-note color=\"dark\"><b>{{item?.name}}</b></ion-note>\n          <p class=\"ion-text-wrap\">{{item?.position}}</p>\n          <p>\n            <ion-text color=\"dark\">{{item?.age}}</ion-text>\n            <ion-text color=\"dark\"><span>&#9679;</span>{{item?.gender}}</ion-text>\n            <!-- <ion-text color=\"dark\"><span>&#9679;</span>{{item?.distance == 1 ? item?.distance + 'km' : item?.distance + 'kms'}}</ion-text> -->\n          </p>\n        </ion-label>\n        <ion-fab vertical=\"top\" horizontal=\"end\">\n          <ion-fab-button size=\"small\" color=\"white\">\n            <img [src]=\"item?.photo\"/>\n          </ion-fab-button>\n        </ion-fab>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n  \n</ion-content>\n";
      /***/
    },

    /***/
    "IVbf":
    /*!*********************************************!*\
      !*** ./src/app/pages/staff/staff.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function IVbf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  background: var(--ion-color-light);\n}\n\nion-header app-shrink-header {\n  display: block;\n  overflow: hidden;\n}\n\nion-header app-shrink-header ion-grid {\n  background: var(--ion-color-primary);\n  margin-top: -5px;\n  border-radius: 0 0 5px 5px;\n}\n\nion-header app-shrink-header .popover {\n  background: var(--ion-color-white);\n  border-radius: 10px;\n  width: 90%;\n  margin: auto;\n}\n\nion-header app-shrink-header .popover ion-item ion-label {\n  margin: 0;\n}\n\nion-header app-shrink-header .popover ion-item ion-label h1 {\n  font-size: 1.8rem;\n}\n\nion-header app-shrink-header .popover ion-item ion-label p {\n  margin-top: 3px;\n  font-size: 0.8rem;\n}\n\nion-header app-shrink-header .popover ion-item ion-label ion-text {\n  font-size: 0.7rem;\n}\n\nion-header app-shrink-header .popover canvas {\n  height: 70px !important;\n}\n\nion-header div {\n  background: var(--ion-color-light);\n}\n\nion-header div ion-segment {\n  --background: var(--ion-color-white);\n  border-radius: 20px;\n  --margin-top: 5px;\n  --margin-bottom: 5px;\n}\n\nion-header div ion-segment ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  --border-radius: 20px;\n  --color: var(--ion-color-primary);\n  --color-checked: var(--ion-color-white);\n}\n\nion-content {\n  --background: var(--ion-color-light);\n}\n\nion-content ion-list {\n  background: var(--ion-color-light);\n}\n\nion-content ion-list .heading {\n  font-family: lato;\n}\n\nion-content ion-list .popItem {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 15px;\n  border-radius: 10px;\n  padding: 0;\n}\n\nion-content ion-list .popItem ion-thumbnail {\n  min-width: 5rem;\n  min-height: 6rem;\n  border-radius: 10px;\n  background: var(--ion-color-secondary);\n}\n\nion-content ion-list .popItem ion-thumbnail div {\n  background-color: var(--ion-color-primary);\n  border-radius: 10px 10px 0 0;\n  padding-bottom: 2px;\n}\n\nion-content ion-list .popItem ion-thumbnail div ion-text {\n  font-size: 0.7rem;\n  font-weight: bold;\n}\n\nion-content ion-list .popItem ion-thumbnail p ion-text {\n  font-size: 1.2rem !important;\n}\n\nion-content ion-list .popItem ion-label ion-note {\n  font-size: 1.1rem;\n  letter-spacing: 0.5px;\n}\n\nion-content ion-list .popItem ion-label p {\n  margin-top: 5px;\n}\n\nion-content ion-list .popItem ion-label p ion-text span {\n  color: var(--ion-color-dark);\n  padding: 0 5px;\n}\n\nion-content ion-list .popItem ion-fab {\n  margin-right: -15px !important;\n  margin-top: -10px;\n}\n\n* {\n  font-family: lato;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YWZmLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFrQztBQUN0Qzs7QUFGQTtFQUdNLGNBQWM7RUFDZCxnQkFBZ0I7QUFHdEI7O0FBUEE7RUFNUSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUtsQzs7QUFiQTtFQVlRLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFLcEI7O0FBcEJBO0VBbUJZLFNBQVM7QUFLckI7O0FBeEJBO0VBcUJlLGlCQUFpQjtBQU9oQzs7QUE1QkE7RUF3QmUsZUFBZTtFQUNmLGlCQUFpQjtBQVFoQzs7QUFqQ0E7RUE0QmMsaUJBQWlCO0FBUy9COztBQXJDQTtFQWlDVSx1QkFBdUI7QUFRakM7O0FBekNBO0VBc0NNLGtDQUFrQztBQU94Qzs7QUE3Q0E7RUF3Q1Esb0NBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWE7RUFDYixvQkFBZ0I7QUFTeEI7O0FBcERBO0VBNkNVLDhDQUFxQjtFQUNyQiwyQ0FBa0I7RUFDbEIscUJBQWdCO0VBQ2hCLGlDQUFRO0VBQ1IsdUNBQWdCO0FBVzFCOztBQUxFO0VBQ0Usb0NBQWE7QUFRakI7O0FBVEU7RUFHSSxrQ0FBa0M7QUFVeEM7O0FBYkU7RUFLTSxpQkFBaUI7QUFZekI7O0FBakJFO0VBUU0sVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFVBQVU7QUFhbEI7O0FBekJFO0VBY1EsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0NBQXNDO0FBZWhEOztBQWhDRTtFQW1CVSwwQ0FBMEM7RUFDMUMsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQWlCL0I7O0FBdENFO0VBdUJZLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFtQi9COztBQTNDRTtFQTZCWSw0QkFBNEI7QUFrQjFDOztBQS9DRTtFQW1DVSxpQkFBaUI7RUFDakIscUJBQXFCO0FBZ0JqQzs7QUFwREU7RUF1Q1UsZUFBZTtBQWlCM0I7O0FBeERFO0VBMENjLDRCQUE0QjtFQUM1QixjQUFjO0FBa0I5Qjs7QUE3REU7RUFpRFEsOEJBQThCO0VBQzlCLGlCQUFpQjtBQWdCM0I7O0FBVkE7RUFDSSxpQkFBaUI7QUFhckIiLCJmaWxlIjoic3RhZmYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBhcHAtc2hyaW5rLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBpb24tZ3JpZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbiAgICAgIH1cbiAgICAgIC5wb3BvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiAtMTIwcHg7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBkaXYge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGlvbi1zZWdtZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAtLW1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGlvbi1saXN0IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAuaGVhZGluZyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgICAgfVxuICAgICAgLnBvcEl0ZW0ge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgIG1pbi13aWR0aDogNXJlbTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA2cmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGlvbi1ub3RlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuKiB7XG4gICAgZm9udC1mYW1pbHk6IGxhdG87XG59Il19 */";
      /***/
    },

    /***/
    "TGu0":
    /*!*****************************************************!*\
      !*** ./src/app/pages/staff/staff-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: StaffPageRoutingModule */

    /***/
    function TGu0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaffPageRoutingModule", function () {
        return StaffPageRoutingModule;
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


      var _staff_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./staff.page */
      "/UHV");

      var routes = [{
        path: '',
        component: _staff_page__WEBPACK_IMPORTED_MODULE_3__["StaffPage"]
      }];

      var StaffPageRoutingModule = function StaffPageRoutingModule() {
        _classCallCheck(this, StaffPageRoutingModule);
      };

      StaffPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], StaffPageRoutingModule);
      /***/
    },

    /***/
    "qZb1":
    /*!*********************************************!*\
      !*** ./src/app/pages/staff/staff.module.ts ***!
      \*********************************************/

    /*! exports provided: StaffPageModule */

    /***/
    function qZb1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaffPageModule", function () {
        return StaffPageModule;
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


      var _staff_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./staff-routing.module */
      "TGu0");
      /* harmony import */


      var _staff_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./staff.page */
      "/UHV");

      var StaffPageModule = function StaffPageModule() {
        _classCallCheck(this, StaffPageModule);
      };

      StaffPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _staff_routing_module__WEBPACK_IMPORTED_MODULE_5__["StaffPageRoutingModule"]],
        declarations: [_staff_page__WEBPACK_IMPORTED_MODULE_6__["StaffPage"]]
      })], StaffPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-staff-staff-module-es5.js.map