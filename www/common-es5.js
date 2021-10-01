(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "+PL+":
    /*!*****************************************************!*\
      !*** ./src/app/components/start/start.component.ts ***!
      \*****************************************************/

    /*! exports provided: StartComponent */

    /***/
    function PL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
        return StartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_start_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./start.component.html */
      "kPKb");
      /* harmony import */


      var _start_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./start.component.scss */
      "MNc6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var StartComponent = /*#__PURE__*/function () {
        function StartComponent(router) {
          _classCallCheck(this, StartComponent);

          this.router = router;
        }

        _createClass(StartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateToLoginPage",
          value: function navigateToLoginPage() {
            this.router.navigate(['login']);
          }
        }]);

        return StartComponent;
      }();

      StartComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      StartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-start',
        template: _raw_loader_start_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_start_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StartComponent);
      /***/
    },

    /***/
    "1HE4":
    /*!*****************************************************!*\
      !*** ./src/app/approve-modal/approve-modal.page.ts ***!
      \*****************************************************/

    /*! exports provided: ApproveModalPage */

    /***/
    function HE4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApproveModalPage", function () {
        return ApproveModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_approve_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./approve-modal.page.html */
      "lTO4");
      /* harmony import */


      var _approve_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./approve-modal.page.scss */
      "9JMh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/storage.service */
      "n90K");

      var ApproveModalPage = /*#__PURE__*/function () {
        function ApproveModalPage(modal, storage) {
          _classCallCheck(this, ApproveModalPage);

          this.modal = modal;
          this.storage = storage;
        }

        _createClass(ApproveModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.userData = this.storage.modalData;
            console.log(this.userData);
          }
        }, {
          key: "close",
          value: function close() {
            this.modal.dismiss();
          }
        }, {
          key: "getHalfDate",
          value: function getHalfDate() {
            if (this.userData.datehalf == "0000-00-00") {
              return '';
            } else {
              return this.userData.datehalf;
            }
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            if (date == "0000-00-00") {
              return '';
            } else {
              return date;
            }
          }
        }]);

        return ApproveModalPage;
      }();

      ApproveModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      };

      ApproveModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-approve-modal',
        template: _raw_loader_approve_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_approve_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ApproveModalPage);
      /***/
    },

    /***/
    "2g2N":
    /*!*******************************************!*\
      !*** ./src/app/services/toast.service.ts ***!
      \*******************************************/

    /*! exports provided: ToastService */

    /***/
    function g2N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(toastController) {
          _classCallCheck(this, ToastService);

          this.toastController = toastController;
        }

        _createClass(ToastService, [{
          key: "presentToast",
          value: function presentToast(infoMessage) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: infoMessage,
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
      /***/
    },

    /***/
    "5DpU":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function DpU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-list>\n    <ion-item (click)=\"navigateToProfilePage()\">\n      My Profile\n    </ion-item>\n    <ion-item (click)=\"goToHistory()\" >\n      History\n    </ion-item>\n    <ion-item (click)=\"signOut()\">\n      Logout\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "5Fp5":
    /*!*****************************************!*\
      !*** ./src/app/config/auth-constant.ts ***!
      \*****************************************/

    /*! exports provided: AuthConstants */

    /***/
    function Fp5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthConstants", function () {
        return AuthConstants;
      });

      var AuthConstants = function AuthConstants() {
        _classCallCheck(this, AuthConstants);
      };

      AuthConstants.AUTH = 'userData';
      /***/
    },

    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "8+mF":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function mF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <app-logo></app-logo>\n      <h2>Welcome to DynaConsurv HRApp</h2>\n      <p>Explore Us</p>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"displayed\">\n      <img src=\"assets/images/dynaxconsurv.png\"/>\n      </div>\n      <h2></h2>\n      <p></p>\n    </ion-slide>\n    <ion-slide>\n      <h2>We are</h2>\n      <p>Dyna Consurv</p>\n    </ion-slide>\n\n    \n";
      /***/
    },

    /***/
    "9JMh":
    /*!*******************************************************!*\
      !*** ./src/app/approve-modal/approve-modal.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function JMh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcHJvdmUtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWE7RUFDYixjQUFjO0FBQ2xCIiwiZmlsZSI6ImFwcHJvdmUtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tbWluLWhlaWdodDogNTBweDtcbiAgICBjb2xvcjogIzJDOURERTtcbn0iXX0= */";
      /***/
    },

    /***/
    "AWzS":
    /*!***********************************************!*\
      !*** ./src/app/resolver/userData.resolver.ts ***!
      \***********************************************/

    /*! exports provided: UserDataResolver */

    /***/
    function AWzS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDataResolver", function () {
        return UserDataResolver;
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


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");

      var UserDataResolver = /*#__PURE__*/function () {
        function UserDataResolver(authService) {
          _classCallCheck(this, UserDataResolver);

          this.authService = authService;
        }

        _createClass(UserDataResolver, [{
          key: "resolve",
          value: function resolve() {
            console.log('Hello');
            return this.authService.getUserData();
          }
        }]);

        return UserDataResolver;
      }();

      UserDataResolver.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      UserDataResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserDataResolver);
      /***/
    },

    /***/
    "DaWH":
    /*!***************************************************!*\
      !*** ./src/app/leave-modal/leave-modal.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function DaWH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xlYXZlLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFhO0VBQ2IsY0FBYztBQUNsQiIsImZpbGUiOiJsZWF2ZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjMkM5RERFO1xufSJdfQ== */";
      /***/
    },

    /***/
    "Dm/a":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leave-modal/leave-modal.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function DmA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='light'>\n    <ion-title>Leave Approval</ion-title>\n    <ion-buttons slot='end'>\n      <ion-button (click)=\"close()\">\n        <ion-icon name='close'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-item>\n  <ion-label>\n    <strong>\n    Reason:\n    </strong>\n  </ion-label>\n  <ion-label text-wrap>\n    {{userData.reason}}\n  </ion-label>\n</ion-item>\n<ion-item>\n  <ion-label>\n    <strong>\n      Staff Name:\n    </strong>\n  </ion-label>\n  <ion-label>\n    {{userData.staff_name}}\n  </ion-label>\n</ion-item>\n\n<!-- *ngIf=\"userData.datehalf=='0000-00-00'\" -->\n<ion-grid>\n<ion-row class='ion-text-center'>\n  <ion-col>\n    <strong>\n      Date From:<br>\n    </strong>\n      {{ getDate(userData.datefrom) }}\n  </ion-col>\n  <ion-col>\n      <strong>\n        Date End:<br>\n      </strong>\n      {{ getDate(userData.dateend) }}\n  </ion-col>\n</ion-row>\n</ion-grid>\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n        {{ getHalfDate(userData.datehalf) }}\n    </ion-col>\n    </ion-row>\n</ion-grid>\n\n<div *ngIf=\"userData.datehalf!='0000-00-00'\">\n<ion-item>\n  <ion-row>\n  <ion-col>\n      {{userData.datehalf}}\n  </ion-col>\n  </ion-row>\n</ion-item>\n</div>\n\n<ion-row>\n<ion-col>\n  <ion-button expand='full' color='danger' (click)=\"rejectLeave()\">\n    Reject\n  </ion-button>\n</ion-col>\n<ion-col>\n  <ion-button expand='full' color='primary' (click)=\"approveLeave()\">\n    Approve\n  </ion-button>\n</ion-col>\n</ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "EiNB":
    /*!*******************************************************!*\
      !*** ./src/app/components/slides/slides.component.ts ***!
      \*******************************************************/

    /*! exports provided: SlidesComponent */

    /***/
    function EiNB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidesComponent", function () {
        return SlidesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_slides_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./slides.component.html */
      "8+mF");
      /* harmony import */


      var _slides_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./slides.component.scss */
      "Lslk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SlidesComponent = function SlidesComponent() {
        _classCallCheck(this, SlidesComponent);

        this.slideOpts = {
          speed: 400
        };
      };

      SlidesComponent.ctorParameters = function () {
        return [];
      };

      SlidesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slides',
        template: _raw_loader_slides_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slides_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SlidesComponent);
      /***/
    },

    /***/
    "JbSX":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function JbSX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "Lslk":
    /*!*********************************************************!*\
      !*** ./src/app/components/slides/slides.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function Lslk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slide {\n  padding: 140px 20px 140px 20px;\n  display: block;\n}\n\nion-slide img {\n  width: 100px;\n}\n\nion-slide h2 {\n  font-size: 27px;\n  font-weight: bold;\n}\n\n.displayed img {\n  width: 300px;\n  height: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NsaWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUE4QjtFQUM5QixjQUFjO0FBQ2xCOztBQUhBO0VBSUksWUFBWTtBQUdoQjs7QUFQQTtFQU9JLGVBQWU7RUFDZixpQkFBaUI7QUFJckI7O0FBQ0k7RUFDSSxZQUFZO0VBQ1osWUFBWTtBQUVwQiIsImZpbGUiOiJzbGlkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xuICAgIHBhZGRpbmc6IDE0MHB4IDIwcHggMTQwcHggMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBpbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgLmRpc3BsYXllZCBpbWd7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIFxuICBcbiJdfQ== */";
      /***/
    },

    /***/
    "MNc6":
    /*!*******************************************************!*\
      !*** ./src/app/components/start/start.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function MNc6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".button-container {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */";
      /***/
    },

    /***/
    "N+K7":
    /*!******************************************!*\
      !*** ./src/app/services/http.service.ts ***!
      \******************************************/

    /*! exports provided: HttpService */

    /***/
    function NK7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
        }

        _createClass(HttpService, [{
          key: "post",
          value: function post(serviceName, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers,
              withCredentials: false,
              contentType: 'application/json'
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl1 + serviceName;
            console.log(url, JSON.stringify(data), options, 'call');
            return this.http.post(url, JSON.stringify(data), options);
          }
        }, {
          key: "post1",
          value: function post1(serviceName, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers,
              withCredentials: false,
              contentType: 'application/json'
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl3 + serviceName;
            console.log(url, JSON.stringify(data), options, 'call');
            return this.http.post(url, JSON.stringify(data), options);
          }
        }, {
          key: "post2",
          value: function post2(serviceName, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: headers,
              withCredentials: false,
              contentType: 'application/json'
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl2; //console.log(url,JSON.stringify(data),options,'call')

            return this.http.post(url, JSON.stringify(data), options);
          }
        }, {
          key: "get",
          value: function get(url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              _this.http.get(url).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }]);

        return HttpService;
      }();

      HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], HttpService);
      /***/
    },

    /***/
    "Rx4N":
    /*!*************************************************!*\
      !*** ./src/app/leave-modal/leave-modal.page.ts ***!
      \*************************************************/

    /*! exports provided: LeaveModalPage */

    /***/
    function Rx4N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaveModalPage", function () {
        return LeaveModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leave_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leave-modal.page.html */
      "Dm/a");
      /* harmony import */


      var _leave_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leave-modal.page.scss */
      "DaWH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/http.service */
      "N+K7");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/storage.service */
      "n90K");

      var LeaveModalPage = /*#__PURE__*/function () {
        function LeaveModalPage(modal, storage, authService, httpService) {
          _classCallCheck(this, LeaveModalPage);

          this.modal = modal;
          this.storage = storage;
          this.authService = authService;
          this.httpService = httpService;
          this.userData = {};
        }

        _createClass(LeaveModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.userData = this.storage.modalData;
            console.log(this.userData);
          }
        }, {
          key: "close",
          value: function close() {
            this.modal.dismiss();
          }
        }, {
          key: "getHalfDate",
          value: function getHalfDate() {
            if (this.userData.datehalf == "0000-00-00") {
              return '';
            } else {
              return this.userData.datehalf;
            }
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            if (date == "0000-00-00") {
              return '';
            } else {
              return date;
            }
          }
        }, {
          key: "rejectLeave",
          value: function rejectLeave() {
            var _this2 = this;

            //NOTE: Change action to reflect reject action
            this.httpService.post('leave/updateapprove', {
              leaveid: this.userData.leavedetailid,
              action: 1
            }).subscribe(function (res) {
              console.log(res);

              _this2.close();
            });
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

              _this3.close();
            });
          }
        }]);

        return LeaveModalPage;
      }();

      LeaveModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
        }];
      };

      LeaveModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leave-modal',
        template: _raw_loader_leave_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leave_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LeaveModalPage);
      /***/
    },

    /***/
    "Ys3K":
    /*!***********************************************************************!*\
      !*** ./src/app/components/shrink-header/shrink-header.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function Ys3K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaHJpbmstaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "ZONN":
    /*!************************************************!*\
      !*** ./src/app/setting/setting.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function ZONN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "acej":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function acej(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!delegate) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context3.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context3.next = 10;
                  return new Promise(function (resolve) {
                    return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                  });

                case 10:
                  return _context3.abrupt("return", el);

                case 11:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "gnXD":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function gnXD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<img src='assets/images/hr.png' alt=\"HRApp log\"/>";
      /***/
    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _slides_slides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./slides/slides.component */
      "EiNB");
      /* harmony import */


      var _start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./start/start.component */
      "+PL+");
      /* harmony import */


      var _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./logo/logo.component */
      "o5g6");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shrink_header_shrink_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shrink-header/shrink-header.component */
      "jvs9");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _shrink_header_shrink_header_component__WEBPACK_IMPORTED_MODULE_7__["ShrinkHeaderComponent"]],
        exports: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _shrink_header_shrink_header_component__WEBPACK_IMPORTED_MODULE_7__["ShrinkHeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "jvs9":
    /*!*********************************************************************!*\
      !*** ./src/app/components/shrink-header/shrink-header.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ShrinkHeaderComponent */

    /***/
    function jvs9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShrinkHeaderComponent", function () {
        return ShrinkHeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_shrink_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./shrink-header.component.html */
      "rkMx");
      /* harmony import */


      var _shrink_header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shrink-header.component.scss */
      "Ys3K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ShrinkHeaderComponent = /*#__PURE__*/function () {
        function ShrinkHeaderComponent(element, renderer, domCtrl) {
          _classCallCheck(this, ShrinkHeaderComponent);

          this.element = element;
          this.renderer = renderer;
          this.domCtrl = domCtrl;
        }

        _createClass(ShrinkHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            this.renderer.setStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
            this.scrollSub = this.scrollArea.ionScroll.subscribe(function (event) {
              console.log(event.detail.scrollTop);

              _this4.resizeHeader(event);
            });
          }
        }, {
          key: "resizeHeader",
          value: function resizeHeader(event) {
            var _this5 = this;

            this.domCtrl.write(function () {
              _this5.newHeaderHeight = _this5.headerHeight - event.detail.scrollTop;
              if (_this5.newHeaderHeight < 0) _this5.newHeaderHeight = 0;

              _this5.renderer.setStyle(_this5.element.nativeElement, 'height', _this5.newHeaderHeight + 'px');
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.scrollSub) this.scrollSub.unsubscribe();
          }
        }]);

        return ShrinkHeaderComponent;
      }();

      ShrinkHeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["DomController"]
        }];
      };

      ShrinkHeaderComponent.propDecorators = {
        scrollArea: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['scrollArea']
        }],
        headerHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['headerHeight']
        }]
      };
      ShrinkHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shrink-header',
        template: _raw_loader_shrink_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shrink_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ShrinkHeaderComponent);
      /***/
    },

    /***/
    "kPKb":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function kPKb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"button-container\">\n    <ion-button expand=\"block\" share=\"round\" color='primary' (click)=\"navigateToLoginPage()\">Start!</ion-button>\n</div>";
      /***/
    },

    /***/
    "l7Ag":
    /*!**********************************************!*\
      !*** ./src/app/setting/setting.component.ts ***!
      \**********************************************/

    /*! exports provided: SettingComponent */

    /***/
    function l7Ag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingComponent", function () {
        return SettingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_setting_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./setting.component.html */
      "5DpU");
      /* harmony import */


      var _setting_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./setting.component.scss */
      "ZONN");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SettingComponent = /*#__PURE__*/function () {
        function SettingComponent(authService, router, nav, popoverController) {
          _classCallCheck(this, SettingComponent);

          this.authService = authService;
          this.router = router;
          this.nav = nav;
          this.popoverController = popoverController;
          this.postData = {
            staff_id: '',
            action: 0,
            staff_name: '',
            checkin: '',
            checkout: '',
            id: ''
          };
        }

        _createClass(SettingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.siteInfo = this.navParams.get('site');
            console.log(this.site);
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.authService.logout();

                    case 2:
                      this.popoverController.dismiss();

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "eventFromPopover",
          value: function eventFromPopover() {
            this.popoverController.dismiss('edupala.com');
          }
        }, {
          key: "navigateToProfilePage",
          value: function navigateToProfilePage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.router.navigate(['profile']);

                    case 2:
                      console.log('button is clicked');
                      this.popoverController.dismiss();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "goToHistory",
          value: function goToHistory() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.router.navigate(['history']);

                    case 2:
                      console.log('goHistory');
                      this.popoverController.dismiss();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return SettingComponent;
      }();

      SettingComponent.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }];
      };

      SettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-setting',
        template: _raw_loader_setting_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_setting_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SettingComponent);
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _config_auth_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../config/auth-constant */
      "5Fp5");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./http.service */
      "N+K7");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./storage.service */
      "n90K");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(httpService, storageService, router) {
          _classCallCheck(this, AuthService);

          this.httpService = httpService;
          this.storageService = storageService;
          this.router = router;
          this.userData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        }

        _createClass(AuthService, [{
          key: "getUserData",
          value: function getUserData() {
            var _this6 = this;

            this.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].AUTH).then(function (res) {
              console.log(res);

              _this6.userData$.next(res[0]);
            });
          }
        }, {
          key: "getUserDataPromise",
          value: function getUserDataPromise() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.storageService.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].AUTH).then(function (res) {
                console.log(res);
                resolve(res[0]);
              }, function (_) {
                reject(null);
              });
            });
          }
        }, {
          key: "login",
          value: function login(postData) {
            return this.httpService.post1('login', postData); // return this.httpService.post('logintest', postData);
          } //logout(postData: Observable<any>){
          //logout(postData: any): void {

        }, {
          key: "logout",
          value: function logout() {
            var _this8 = this;

            this.storageService.removeItem(_config_auth_constant__WEBPACK_IMPORTED_MODULE_4__["AuthConstants"].AUTH).then(function (res) {
              _this8.userData$.next('');

              _this8.router.navigate(['']);
            });
          }
        }, {
          key: "applyleave",
          value: function applyleave(postData) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              _this9.httpService.post1('app/submitleave', postData).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "leavedetail",
          value: function leavedetail(postData) {
            return this.httpService.post('leavedetail', postData);
          }
        }, {
          key: "leavedetailPromise",
          value: function leavedetailPromise(postData) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              // console.log(postData);
              _this10.httpService.post('leavedetail', postData).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "leaveapprove",
          value: function leaveapprove(postData) {
            return this.httpService.post('updateapprove', postData);
          }
        }, {
          key: "typeofleave",
          value: function typeofleave(postData) {
            return this.httpService.post('leavetype', postData);
          }
        }, {
          key: "leavebalance",
          value: function leavebalance(postData) {
            console.log(postData);
            return this.httpService.post1('leavesummary/2', postData);
          }
        }, {
          key: "checkIn",
          value: function checkIn(postData) {
            console.log(postData);
            return this.httpService.post2('dailycheck', postData);
          }
        }, {
          key: "checkOut",
          value: function checkOut(postData) {
            console.log(postData);
            return this.httpService.post2('dailycheck', postData);
          }
        }, {
          key: "listName",
          value: function listName(postData) {
            console.log(postData);
            return this.httpService.post2('dailycheck', postData);
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "lTO4":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/approve-modal/approve-modal.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function lTO4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='light'>\n    <ion-title>Leave Approval</ion-title>\n    <ion-buttons slot='end'>\n      <ion-button (click)=\"close()\">\n        <ion-icon name='close'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-item>\n  <ion-label>\n    <strong>\n    Reason:\n    </strong>\n  </ion-label>\n  <ion-label text-wrap>\n    {{userData.reason}}\n  </ion-label>\n</ion-item>\n<ion-item>\n  <ion-label>\n    <strong>\n      Staff Name:\n    </strong>\n  </ion-label>\n  <ion-label>\n    {{userData.staff_name}}\n  </ion-label>\n</ion-item>\n\n<!-- *ngIf=\"userData.datehalf=='0000-00-00'\" -->\n<ion-grid>\n<ion-row class='ion-text-center'>\n  <ion-col>\n    <strong>\n      Date From:<br>\n    </strong>\n      {{ getDate(userData.datefrom) }}\n  </ion-col>\n  <ion-col>\n      <strong>\n        Date End:<br>\n      </strong>\n      {{ getDate(userData.dateend) }}\n  </ion-col>\n</ion-row>\n</ion-grid>\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n        {{ getHalfDate(userData.datehalf) }}\n    </ion-col>\n    </ion-row>\n</ion-grid>\n\n<div *ngIf=\"userData.datehalf!='0000-00-00'\">\n<ion-item>\n  <ion-row>\n  <ion-col>\n      {{userData.datehalf}}\n  </ion-col>\n  </ion-row>\n</ion-item>\n</div>\n\n<!-- <ion-row>\n<ion-col>\n  <ion-button expand='full' color='danger'>\n    Reject\n  </ion-button>\n</ion-col>\n<ion-col>\n  <ion-button expand='full' color='primary'>\n    Approve\n  </ion-button>\n</ion-col>\n</ion-row> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "o5g6":
    /*!***************************************************!*\
      !*** ./src/app/components/logo/logo.component.ts ***!
      \***************************************************/

    /*! exports provided: LogoComponent */

    /***/
    function o5g6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
        return LogoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_logo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./logo.component.html */
      "gnXD");
      /* harmony import */


      var _logo_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logo.component.scss */
      "yrnK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LogoComponent = /*#__PURE__*/function () {
        function LogoComponent() {
          _classCallCheck(this, LogoComponent);
        }

        _createClass(LogoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LogoComponent;
      }();

      LogoComponent.ctorParameters = function () {
        return [];
      };

      LogoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logo',
        template: _raw_loader_logo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logo_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LogoComponent);
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "rkMx":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shrink-header/shrink-header.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rkMx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-content></ng-content>";
      /***/
    },

    /***/
    "yrnK":
    /*!*****************************************************!*\
      !*** ./src/app/components/logo/logo.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function yrnK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map