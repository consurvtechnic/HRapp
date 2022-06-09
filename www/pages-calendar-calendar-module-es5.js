(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calendar-calendar-module"], {
    /***/
    "KuxQ":
    /*!***************************************************!*\
      !*** ./src/app/pages/calendar/calendar.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function KuxQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYWxlbmRhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFGSiIsImZpbGUiOiJjYWxlbmRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjMkM5RERFO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9ocl9iZy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "Pl5l":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendar/calendar.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pl5l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color='light'>\r\n    <ion-title>Calendar</ion-title>\r\n    \r\n    <ion-buttons slot=\"end\" style=\"margin-right: 20px;\">\r\n        <ion-button (click)=\"today()\">Today</ion-button>\r\n    </ion-buttons>  \r\n   <!-- <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openCalModal()\">\r\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment [(ngModel)]=\"calendar.mode\">\r\n    <ion-segment-button value=\"month\">\r\n      <ion-label>Month</ion-label>\r\n    </ion-segment-button>\r\n   <!-- <ion-segment-button value=\"week\">\r\n      <ion-label>Week</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"day\">\r\n      <ion-label>Day</ion-label>\r\n    </ion-segment-button> -->\r\n  </ion-segment>\r\n\r\n  <ion-row>\r\n    <!-- Move back one screen of the slides -->\r\n    <ion-col size=\"2\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n \r\n    <ion-col size=\"8\" class=\"ion-text-center\">\r\n      <h2>{{ viewTitle }}</h2>\r\n    </ion-col>\r\n \r\n    <!-- Move forward one screen of the slides -->\r\n    <ion-col size=\"2\">\r\n      <ion-button fill=\"clear\" (click)=\"next()\">\r\n        <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n<calendar\r\n  [eventSource]=\"eventSource\"\r\n  [calendarMode]=\"calendar.mode\"\r\n  [currentDate]=\"calendar.currentDate\"\r\n  (onEventSelected)=\"onEventSelected($event)\"\r\n  (onTitleChanged)=\"onViewTitleChanged($event)\"\r\n  (onEventSelected)=\"onEventSelected($event)\"\r\n  (onTitleChanged)=\"onViewTitleChanged($event)\"\r\n  (onTimeSelected)=\"onTimeSelected($event)\">\r\n</calendar>\r\n  \r\n</ion-content>";
      /***/
    },

    /***/
    "TqYJ":
    /*!***********************************************************!*\
      !*** ./src/app/pages/calendar/calendar-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CalendarPageRoutingModule */

    /***/
    function TqYJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarPageRoutingModule", function () {
        return CalendarPageRoutingModule;
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


      var _calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./calendar.page */
      "aBd5");

      var routes = [{
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_3__["CalendarPage"]
      }];

      var CalendarPageRoutingModule = function CalendarPageRoutingModule() {
        _classCallCheck(this, CalendarPageRoutingModule);
      };

      CalendarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CalendarPageRoutingModule);
      /***/
    },

    /***/
    "VLs4":
    /*!****************************************************!*\
      !*** ./node_modules/@angular/common/locales/de.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function VLs4(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * @license
      * Copyright Google LLC All Rights Reserved.
      *
      * Use of this source code is governed by an MIT-style license that can be
      * found in the LICENSE file at https://angular.io/license
      */


      (function (factory) {
        if (true && typeof module.exports === "object") {
          var v = factory(null, exports);
          if (v !== undefined) module.exports = v;
        } else if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
      })(function (require, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        }); // THIS CODE IS GENERATED - DO NOT MODIFY
        // See angular/tools/gulp-tasks/cldr/extract.js

        var u = undefined;

        function plural(n) {
          var i = Math.floor(Math.abs(n)),
              v = n.toString().replace(/^[^.]*\.?/, '').length;
          if (i === 1 && v === 0) return 1;
          return 5;
        }

        exports["default"] = ['de', [['AM', 'PM'], u, u], u, [['S', 'M', 'D', 'M', 'D', 'F', 'S'], ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'], ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'], ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']], [['S', 'M', 'D', 'M', 'D', 'F', 'S'], ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'], ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'], ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']], [['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'], ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']], [['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'], ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']], [['v. Chr.', 'n. Chr.'], u, u], 1, [6, 0], ['dd.MM.yy', 'dd.MM.y', 'd. MMMM y', 'EEEE, d. MMMM y'], ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1}, {0}', u, '{1} \'um\' {0}', u], [',', '.', ';', '%', '+', '-', 'E', '·', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], 'EUR', '€', 'Euro', {
          'ATS': ['öS'],
          'AUD': ['AU$', '$'],
          'BGM': ['BGK'],
          'BGO': ['BGJ'],
          'CUC': [u, 'Cub$'],
          'DEM': ['DM'],
          'FKP': [u, 'Fl£'],
          'GNF': [u, 'F.G.'],
          'KMF': [u, 'FC'],
          'RON': [u, 'L'],
          'RWF': [u, 'F.Rw'],
          'SYP': [],
          'THB': ['฿'],
          'TWD': ['NT$'],
          'XXX': [],
          'ZMW': [u, 'K']
        }, 'ltr', plural];
      }); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUk7UUFDSixDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RixDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztZQUNqRixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxF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RSxNQUFNLENBQUM7WUFDbEIsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO1lBQ2xCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7WUFDbEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7U0FDaEI7UUFDRCxLQUFLO1FBQ0wsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpLCB2ID0gbi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoO1xuICBpZiAoaSA9PT0gMSAmJiB2ID09PSAwKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2RlJyxcbiAgW1snQU0nLCAnUE0nXSwgdSwgdV0sXG4gIHUsXG4gIFtcbiAgICBbJ1MnLCAnTScsICdEJywgJ00nLCAnRCcsICdGJywgJ1MnXSwgWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXSxcbiAgICBbJ1Nvbm50YWcnLCAnTW9udGFnJywgJ0RpZW5zdGFnJywgJ01pdHR3b2NoJywgJ0Rvbm5lcnN0YWcnLCAnRnJlaXRhZycsICdTYW1zdGFnJ10sXG4gICAgWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXVxuICBdLFxuICBbXG4gICAgWydTJywgJ00nLCAnRCcsICdNJywgJ0QnLCAnRicsICdTJ10sIFsnU28nLCAnTW8nLCAnRGknLCAnTWknLCAnRG8nLCAnRnInLCAnU2EnXSxcbiAgICBbJ1Nvbm50YWcnLCAnTW9udGFnJywgJ0RpZW5zdGFnJywgJ01pdHR3b2NoJywgJ0Rvbm5lcnN0YWcnLCAnRnJlaXRhZycsICdTYW1zdGFnJ10sXG4gICAgWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXVxuICBdLFxuICBbXG4gICAgWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICAgIFtcbiAgICAgICdKYW4uJywgJ0ZlYi4nLCAnTcOkcnonLCAnQXByLicsICdNYWknLCAnSnVuaScsICdKdWxpJywgJ0F1Zy4nLCAnU2VwdC4nLCAnT2t0LicsICdOb3YuJywgJ0Rlei4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnSmFudWFyJywgJ0ZlYnJ1YXInLCAnTcOkcnonLCAnQXByaWwnLCAnTWFpJywgJ0p1bmknLCAnSnVsaScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLFxuICAgICAgJ05vdmVtYmVyJywgJ0RlemVtYmVyJ1xuICAgIF1cbiAgXSxcbiAgW1xuICAgIFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgICBbJ0phbicsICdGZWInLCAnTcOkcicsICdBcHInLCAnTWFpJywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPa3QnLCAnTm92JywgJ0RleiddLFxuICAgIFtcbiAgICAgICdKYW51YXInLCAnRmVicnVhcicsICdNw6RyeicsICdBcHJpbCcsICdNYWknLCAnSnVuaScsICdKdWxpJywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2t0b2JlcicsXG4gICAgICAnTm92ZW1iZXInLCAnRGV6ZW1iZXInXG4gICAgXVxuICBdLFxuICBbWyd2LiBDaHIuJywgJ24uIENoci4nXSwgdSwgdV0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkZC5NTS55eScsICdkZC5NTS55JywgJ2QuIE1NTU0geScsICdFRUVFLCBkLiBNTU1NIHknXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0sIHswfScsIHUsICd7MX0gXFwndW1cXCcgezB9JywgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfCtycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwwqAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSxcbiAgJ0VVUicsXG4gICfigqwnLFxuICAnRXVybycsXG4gIHtcbiAgICAnQVRTJzogWyfDtlMnXSxcbiAgICAnQVVEJzogWydBVSQnLCAnJCddLFxuICAgICdCR00nOiBbJ0JHSyddLFxuICAgICdCR08nOiBbJ0JHSiddLFxuICAgICdDVUMnOiBbdSwgJ0N1YiQnXSxcbiAgICAnREVNJzogWydETSddLFxuICAgICdGS1AnOiBbdSwgJ0ZswqMnXSxcbiAgICAnR05GJzogW3UsICdGLkcuJ10sXG4gICAgJ0tNRic6IFt1LCAnRkMnXSxcbiAgICAnUk9OJzogW3UsICdMJ10sXG4gICAgJ1JXRic6IFt1LCAnRi5SdyddLFxuICAgICdTWVAnOiBbXSxcbiAgICAnVEhCJzogWyfguL8nXSxcbiAgICAnVFdEJzogWydOVCQnXSxcbiAgICAnWFhYJzogW10sXG4gICAgJ1pNVyc6IFt1LCAnSyddXG4gIH0sXG4gICdsdHInLFxuICBwbHVyYWxcbl07XG4iXX0=

      /***/

    },

    /***/
    "aBd5":
    /*!*************************************************!*\
      !*** ./src/app/pages/calendar/calendar.page.ts ***!
      \*************************************************/

    /*! exports provided: CalendarPage */

    /***/
    function aBd5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarPage", function () {
        return CalendarPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./calendar.page.html */
      "Pl5l");
      /* harmony import */


      var _calendar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./calendar.page.scss */
      "KuxQ");
      /* harmony import */


      var ionic2_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ionic2-calendar */
      "L+Ny");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CalendarPage = /*#__PURE__*/function () {
        function CalendarPage(alertCtrl, datePipe, locale, popoverController, authService, router, storageService, nav) {
          _classCallCheck(this, CalendarPage);

          this.alertCtrl = alertCtrl;
          this.datePipe = datePipe;
          this.locale = locale;
          this.popoverController = popoverController;
          this.authService = authService;
          this.router = router;
          this.storageService = storageService;
          this.nav = nav;
          this.eventSource = [];
          this.calendar = {
            mode: 'month',
            //mode: 'month' as CalendarMode,
            currentDate: new Date(),
            queryMode: 'remote'
          };
          this.postData = {
            staff_id: '',
            leavetype: '',
            reason: '',
            currentDate: Date,
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
          this.event = {
            title: '',
            desc: '',
            startTime: '',
            endTime: '',
            allDay: false
          };
          this.minDate = new Date().toISOString();
        }

        _createClass(CalendarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.userData$.subscribe(function (res) {
              _this.displayUserData = res;
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.getEvents('2022-04-01', '2022-04-30');
          }
        }, {
          key: "getEvents",
          value: function getEvents(start, end) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var events, startDate, endDate, holidays;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      //console.log('get events');
                      events = [];
                      startDate = this.datePipe.transform(start, 'yyyy-MM-dd');
                      endDate = this.datePipe.transform(end, 'yyyy-MM-dd');
                      _context.next = 5;
                      return this.getLeave(startDate, endDate);

                    case 5:
                      holidays = _context.sent;
                      console.log('holidays: ', holidays);

                      if (holidays) {
                        //map() method creates a new array populated with the results of calling a provided function
                        holidays.map(function (item) {
                          //new Date(getField("dob").value);
                          var datestart = new Date(item.datefrom);
                          var startTime = new Date(Date.UTC(datestart.getUTCFullYear(), datestart.getUTCMonth(), datestart.getUTCDate()));
                          var dateend = new Date(item.dateend);
                          var endTime = new Date(Date.UTC(dateend.getUTCFullYear(), dateend.getUTCMonth(), dateend.getUTCDate())); //let endTime = new Date(Date.UTC(dateend.getUTCFullYear(), dateend.getUTCMonth(), dateend.getUTCDate()));

                          events.push({
                            title: item.reason,
                            startTime: startTime,
                            endTime: endTime,
                            allDay: false
                          });
                        });
                        this.eventSource = events;
                      }

                      console.log('event source: ', this.eventSource);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getLeave",
          value: function getLeave(startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.authService.getUserDataPromise().then(function () {
                        var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        console.log(1);
                        _this2.userInfo = _this2.displayUserData;
                      }, function (err) {
                        _this2.nav.navigateBack('login');
                      });

                    case 2:
                      _context2.next = 4;
                      return this.authService.leavedetailPromise({
                        staffid: this.userInfo.staff_id
                      }).then(function (res) {
                        console.log("leave detail", res);
                        _this2.leaveDetail = res[0]; //this.eventSource=this.leaveDetail;
                      }, function (err) {
                        console.log("leave detail err", err);
                        return _this2.leaveDetail;
                      });

                    case 4:
                      return _context2.abrupt("return", this.leaveDetail);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "next",
          value: function next() {
            this.myCal.slideNext();
          }
        }, {
          key: "back",
          value: function back() {
            this.myCal.slidePrev();
          }
        }, {
          key: "today",
          value: function today() {
            this.calendar.currentDate = new Date();
          }
        }, {
          key: "onViewTitleChanged",
          value: function onViewTitleChanged(title) {
            this.viewTitle = title;
          }
        }, {
          key: "onTimeSelected",
          value: function onTimeSelected(ev) {
            var selected = new Date(ev.selectedTime);
            this.event.startTime = selected.toISOString();
            selected.setHours(selected.getHours() + 1);
            this.event.endTime = selected.toISOString();
          }
        }, {
          key: "onCurrentDateChanged",
          value: function onCurrentDateChanged(event) {
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            event.setHours(0, 0, 0, 0);
            this.isToday = today.getTime() === event.getTime();
          }
        }, {
          key: "onEventSelected",
          value: function onEventSelected(event) {
            console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
          }
        }]);

        return CalendarPage;
      }();

      CalendarPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"]]
          }]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      CalendarPage.propDecorators = {
        myCal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [ionic2_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"]]
        }]
      };
      CalendarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-calendar',
        template: _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calendar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CalendarPage);
      /*
      
        public postData = {
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
        }
      
        public displayUserData: any;
      
        userInfo:any={};
        leaveDetail:any=[];
        leave:any={};
      
        reason:any;
        currentDate:any;
        endDate:any;
        halfday1:any;
        halfday2:any;
      
          event={
            title:'',
            desc:'',
            startTime:'',
            endTime:'',
            allDay:false
        };
      
        minDate=new Date().toISOString();
        
        eventSource = [];
        viewTitle;
      
        calendar = {
          mode:'month',
          //mode: 'month' as CalendarMode,
          currentDate: new Date(),
          queryMode: 'remote'
        }
          
          ionViewWillEnter(title)
          {
            this.leaveDetail=[];
            this.authService.getUserDataPromise()
            .then((res:any={})=>{
              // console.log(res);
              this.userInfo=res;
      
              this.authService.leavedetailPromise({staffid:this.userInfo.staff_id})
              .then(res=>{
                console.log("leave detail",res);
                this.leaveDetail=res[0];
                this.eventSource=this.leaveDetail;
              },err=>{
                console.log("leave detail",err);
              })
        
            },err=>{
              this.nav.navigateBack('login')
            })
        
            //this.viewTitle = title;
        
          }
          
          
      
          changeMode(mode) {
            this.calendar.mode = mode;
          }
      
          today(){
            this.calendar.currentDate= new Date();
          }
      
          onViewTitleChanged(title){
            this.viewTitle=title;
          }
      
          loadEvents() {
            this.eventSource = this.leaveDetail;
          }
      
          // Calendar event was clicked
          async onEventSelected(event) {
            // Use Angular date pipe for conversion
            let start = formatDate(event.startTime, 'medium', this.locale);
            let end = formatDate(event.endTime, 'medium', this.locale);
            
            const alert = await this.alertCtrl.create({
              header: event.title,
              subHeader: event.desc,
              message: 'From: ' + start + '<br><br>To: ' + end,
              buttons: ['OK'],
            });
            alert.present();
          }
      
        
          
          onTimeSelected(ev){
            let selected = new Date(ev.selectedTime);
            this.event.startTime = selected.toISOString();
            selected.setHours(selected.getHours()+1);
            this.event.endTime = (selected.toISOString());
        
          }
      
         onRangeChanged = (ev: { startTime: Date, endTime: Date }) => {
            this.event.query(ev, (events) => {
                this.eventSource = events;
            });
          }
      
      
      } */

      /***/
    },

    /***/
    "awFG":
    /*!***************************************************!*\
      !*** ./src/app/pages/calendar/calendar.module.ts ***!
      \***************************************************/

    /*! exports provided: CalendarPageModule */

    /***/
    function awFG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function () {
        return CalendarPageModule;
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


      var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calendar-routing.module */
      "TqYJ");
      /* harmony import */


      var _calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./calendar.page */
      "aBd5");
      /* harmony import */


      var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic2-calendar */
      "L+Ny");
      /* harmony import */


      var src_app_pages_cal_modal_cal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/pages/cal-modal/cal-modal.module */
      "Pz3A");
      /* harmony import */


      var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/locales/de */
      "VLs4");
      /* harmony import */


      var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9__);

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9___default.a);

      var CalendarPageModule = function CalendarPageModule() {
        _classCallCheck(this, CalendarPageModule);
      };

      CalendarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarPageRoutingModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"], src_app_pages_cal_modal_cal_modal_module__WEBPACK_IMPORTED_MODULE_8__["CalModalPageModule"]],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'en-US'
        }]
      })], CalendarPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-calendar-calendar-module-es5.js.map