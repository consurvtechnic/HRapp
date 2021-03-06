(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mukadepan-mukadepan-module"],{

/***/ "G0A+":
/*!*************************************************************!*\
  !*** ./src/app/pages/mukadepan/mukadepan-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MukadepanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MukadepanPageRoutingModule", function() { return MukadepanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mukadepan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mukadepan.page */ "U52L");




const routes = [
    {
        path: '',
        component: _mukadepan_page__WEBPACK_IMPORTED_MODULE_3__["MukadepanPage"]
    }
];
let MukadepanPageRoutingModule = class MukadepanPageRoutingModule {
};
MukadepanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MukadepanPageRoutingModule);



/***/ }),

/***/ "Kf4d":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mukadepan/mukadepan.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>Home</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"overflow: scroll;\">\r\n  <div class=\"container\">\r\n    <ion-text color=\"primary\">\r\n      <h1 class=\"titledepan\" style=\"text-align:center\">DynaConsurv</h1>\r\n    </ion-text>\r\n   \r\n    <h2 style=\"text-align:center\">Welcome Back, {{displayUserData?.staff_name}}!</h2>\r\n    <br>\r\n    <p id=\"realTime\" style=\"text-align:center; font-family: 'Georama'!important; font-size:2.1em;\" size=\"big\">{{ today | date: \"HH:mm a\" }}</p>\r\n    <ion-datetime disabled=\"disabled\" style=\"text-align:center; font-family: 'Georama'!important; font-size:1.8em;\" size=\"medium\" display-format= \"DDDD\" [(ngModel)]=\"today\" (ionChange)=\"startTime()\"></ion-datetime>\r\n    <img (click)=\"addEvent()\" expand=\"block\" style=\"text-align:center;\" src=\"{{myimage}}\" height=\"150 px\" width=\"150 px\" class=\"smalllogo\" />\r\n    \r\n    <ion-item color=\"light\" class=\"location\">\r\n      <ion-label>Location:</ion-label>\r\n      <ion-select [(ngModel)]=\"location\" interface=\"popover\">\r\n        <ion-select-option value=\"WFH\">WFH</ion-select-option>\r\n        <ion-select-option value=\"Office\">OFFICE</ion-select-option>\r\n        <ion-select-option value=\"Site\">SITE</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-grid >\r\n      <ion-row style=\"text-align:center\" *ngFor=\"let a of displayUserData2\">\r\n        <ion-col>\r\n          <ion-icon name=\"enter-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkin | date:'h:mm a'}}</p>\r\n          <p class=\"rowBawah\">Clock In</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon name=\"log-out-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkout | date:'h:mm a'}}</p>\r\n          <p class=\"rowBawah\">Clock Out</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon name=\"location-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder; color: mediumblue;\">{{ a.location }}</p>\r\n          <p class=\"rowBawah\" >Location</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <p style=\"text-align:center; color: brown;\">Check Out Time: before 6.30PM</p>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<!-- \r\n<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-title>Home</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"GotoNotityPage()\">\r\n      <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\r\n      <ion-badge color=\"danger\" style=\"position: absolute; right: -5px; top: -3px;\">?</ion-badge> \r\n    </ion-buttons>\r\n\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"settingsPopover()\">\r\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n  \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"overflow: scroll;\">\r\n  <div class=\"container\">\r\n    <ion-text color=\"primary\">\r\n      <h1 class=\"titledepan\" style=\"text-align:center\">DynaConsurv</h1>\r\n    </ion-text>\r\n   \r\n    <h2 style=\"text-align:center\">Welcome Back, {{displayUserData?.staff_name}}!</h2>\r\n    <br>\r\n    <p id=\"realTime\" style=\"text-align:center; font-family: 'Georama'!important; font-size:2.1em;\" size=\"big\">{{ today | date: \"HH:mm a\" }}</p>\r\n    <ion-datetime disabled=\"disabled\" style=\"text-align:center; font-family: 'Georama'!important; font-size:1.8em;\" size=\"medium\" display-format= \"DDDD\" [(ngModel)]=\"today\" (ionChange)=\"startTime()\"></ion-datetime>\r\n    <img (click)=\"addEvent()\" expand=\"block\" style=\"text-align:center;\" src=\"{{myimage}}\" height=\"150 px\" width=\"150 px\" class=\"smalllogo\" />\r\n \r\n    <ion-item color=\"light\" class=\"location\">\r\n      <ion-label>Location:</ion-label>\r\n      <ion-select [(ngModel)]=\"location\" interface=\"popover\">\r\n        <ion-select-option value=\"WFH\">WFH</ion-select-option>\r\n        <ion-select-option value=\"Office\">OFFICE</ion-select-option>\r\n        <ion-select-option value=\"Site\">SITE</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n       <ion-list>\r\n        <ion-item *ngFor=\"let a of transactions\">      \r\n          <p *ngIf=\" a.checkInAction == 'showToast1'\" > You have redeemed  {{a.checkin | date:'EEEE, h:mm a, dd/MM/yyyy '}} points.  </p>\r\n          <p *ngIf=\" a.checkOutAction == 'showToast2'\" > You have earned  {{a.checkout | date:'EEEE, h:mm a, dd/MM/yyyy '}}} points.  </p>  \r\n        </ion-item>\r\n      </ion-list> \r\n  \r\n     <p><ion-button (click)=\"goToList()\" expand=\"block\" >List of Attendees</ion-button></p> \r\n     <p><ion-button (click)=\"showToast3()\" expand=\"block\" >Leave</ion-button></p> \r\n\r\n    <ion-grid >\r\n    <ion-row style=\"text-align:center\" *ngFor=\"let a of displayUserData2\">\r\n      <ion-col>\r\n        <ion-icon name=\"enter-outline\"></ion-icon>\r\n        <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkin | date:'h:mm a'}}</p>\r\n        <p class=\"rowBawah\">Clock In</p>\r\n      </ion-col>\r\n       <ion-col *ngIf = \"a.checkout === 'showToast2()'; else noDisplay\"> \r\n      <ion-col>\r\n        <ion-icon name=\"log-out-outline\"></ion-icon>\r\n        <p style=\"font-weight: bolder; color: mediumblue;\">{{a.checkout | date:'h:mm a'}}</p>\r\n        <p class=\"rowBawah\">Clock Out</p>\r\n      </ion-col>\r\n      <ng-template #noDisplay>\r\n        <ion-col>\r\n          <ion-icon name=\"log-out-outline\"></ion-icon>\r\n          <p style=\"font-weight: bolder;\">-</p>\r\n           <p class=\"rowBawah\">Clock Out</p> \r\n        </ion-col>\r\n      </ng-template>\r\n      <ion-col>\r\n        <ion-icon name=\"location-outline\"></ion-icon>\r\n        <p style=\"font-weight: bolder; color: mediumblue;\">{{ a.location }}</p>\r\n        <p class=\"rowBawah\" >Location</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <p style=\"text-align:center; color: brown;\">Check Out Time: before 6.30PM</p>\r\n  </div>\r\n\r\n  \r\n</ion-content>\r\n-->");

/***/ }),

/***/ "U52L":
/*!***************************************************!*\
  !*** ./src/app/pages/mukadepan/mukadepan.page.ts ***!
  \***************************************************/
/*! exports provided: MukadepanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MukadepanPage", function() { return MukadepanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mukadepan_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mukadepan.page.html */ "Kf4d");
/* harmony import */ var _mukadepan_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mukadepan.page.scss */ "YTKF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage.service */ "n90K");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_setting_setting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/setting/setting.component */ "l7Ag");











/*import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core'; */
//const { PushNotifications } = Plugins;
let MukadepanPage = class MukadepanPage {
    constructor(router, toastCtrl, authService, storageService, nav, popoverController, changeRef, loading) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.storageService = storageService;
        this.nav = nav;
        this.popoverController = popoverController;
        this.changeRef = changeRef;
        this.loading = loading;
        this.today = new Date();
        this.myimage = 'assets/images/clock_in.png';
        this.postData = {
            staff_id: '',
            action: 0,
            staff_name: '',
            checkin: '',
            checkout: '',
            id: '',
            location: '',
        };
        this.displayUserData2 = [];
        this.userInfo = {};
        this.checkData = {
            staff_id: '',
            action: 2,
        };
        this.startTime();
    }
    settingsPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const siteInfo = { id: 1, name: 'hrapps dynaconsurv' };
            const popover = yield this.popoverController.create({
                component: src_app_setting_setting_component__WEBPACK_IMPORTED_MODULE_8__["SettingComponent"],
                event: ev,
                cssClass: 'popover_setting',
                componentProps: {
                    site: siteInfo
                },
                translucent: true
            });
            popover.onDidDismiss().then((result) => {
                console.log(result.data);
            });
            return yield popover.present();
            /** Sync event from popover component */
        });
    }
    ngOnInit() {
        this.nav.navigateRoot('home/mukadepan');
        console.log('Initializing HomePage');
        /*
        PushNotifications.requestPermissions().then((result) => {
          if (result.receive === 'granted') {
            PushNotifications.register();
          } else {
            // Show some error
          }
        });
    
        PushNotifications.addListener('registration', (token: Token) => {
          alert('Push registration success, token: ' + token.value);
          // Push Notifications registered successfully.
          // Send token details to API to keep in DB.
        });
    
        PushNotifications.addListener('registrationError', (error: any) => {
          alert('Error on registration: ' + JSON.stringify(error));
          // Handle push notification registration error here.
        });
    
        PushNotifications.addListener(
          'pushNotificationReceived',
          (notification: PushNotificationSchema) => {
            alert('Push received: ' + JSON.stringify(notification));
            // Show the notification payload if the app is open on the device.
          }
        );
    
        PushNotifications.addListener(
          'pushNotificationActionPerformed',
          (notification: ActionPerformed) => {
            // Implement the needed action to take when user tap on a notification.
          }
        );
        */
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader = yield this.loading.create({
                message: 'Loading...',
                spinner: 'bubbles'
            });
            loader.present();
            this.authService.getUserDataPromise().then((res) => {
                this.displayUserData = res;
                // this.checkData.staff_id = this.displayUserData.staff_id; 
                this.sid = this.displayUserData.staff_id;
                this.sname = this.displayUserData.staff_name;
                this.authService.listName({ staff_id: this.sid, action: 2 }).subscribe((res) => {
                    console.log('goChecking', res);
                    let temp = [];
                    (res.results).forEach(function (value) {
                        console.log('value', value);
                        var dt = new Date(value.checkin);
                        //console.log("checkin time 1",dt)
                        const checkoutTime = dt.setMinutes(dt.getMinutes() + 540);
                        let checkout = new Date(checkoutTime).toISOString();
                        temp.push({
                            staff_name: value.staff_name,
                            staff_id: value.staff_id,
                            checkin: new Date(value.checkin),
                            checkout: new Date(checkout),
                            location: value.location,
                        });
                    });
                    this.displayUserData2 = temp;
                    loader.dismiss();
                    console.log("user data 2", this.displayUserData2);
                });
            });
        });
    }
    startTime() {
        var intervalVar = setInterval(function () {
            this.today = new Date().toISOString();
        }.bind(this), 500);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
        // location.reload();     //// this serves the purpose by reloading the entire app but its not what i want
        // this.navCtrl.navigateRoot('/tabs/tab2');  //// I tried this but not able to update 
    }
    addEvent() {
        if (this.myimage == 'assets/images/clock_in.png') {
            this.showToast1();
            this.checkInAction();
            this.changeRef.detectChanges();
            this.myimage = 'assets/images/clock_out.png';
            this.nav.navigateRoot('home/mukadepan');
        }
        else {
            this.showToast2();
            this.checkOutAction();
            this.changeRef.detectChanges();
            this.myimage = 'assets/images/clock_in.png';
        }
    }
    checkInAction() {
        this.postData.staff_id = this.displayUserData.staff_id;
        this.postData.staff_name = this.displayUserData.staff_name;
        this.postData.action = 0;
        this.postData.location = this.location;
        this.authService.checkIn(this.postData).subscribe((res) => {
            this.authService.getUserData();
            this.changeRef.detectChanges();
            console.log('checkin', res);
        });
    }
    checkOutAction() {
        this.postData.staff_id = this.displayUserData.staff_id;
        this.postData.staff_name = this.displayUserData.staff_name;
        this.postData.action = 1;
        this.postData.location = this.location.data;
        this.authService.checkOut(this.postData).subscribe((res) => {
            this.authService.getUserData();
            this.changeRef.detectChanges();
            console.log('checkout', res);
        });
    }
    showToast1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.toastCtrl.create({
                message: "You've Check-In!",
                duration: 2000,
                position: 'middle',
                buttons: [{
                        text: 'OK'
                    }]
            }).then(res => res.present());
            // document.getElementById("status").innerHTML = "You've Checked-In!";
        });
    }
    showToast2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.toastCtrl.create({
                message: "You've Check-Out!",
                duration: 2000,
                position: 'middle',
                buttons: [{
                        text: 'OK'
                    }]
            }).then(res => res.present());
            // document.getElementById("status").innerHTML = "You've Checked-Out!";
        });
    }
    showToast3() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.toastCtrl.create({
                message: "You're on Leave!",
                duration: 2000,
                position: 'middle',
                buttons: [{
                        text: 'OK'
                    }]
            }).then(res => res.present());
        });
    }
    goToList() {
        this.postData.staff_id = this.displayUserData.staff_id;
        this.postData.action = 2;
        this.router.navigate(['listattendees']);
        this.authService.listName(this.postData).subscribe((res) => {
            console.log('golist', res);
        });
    }
    refresh() {
        this.changeRef.detectChanges();
    }
};
MukadepanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
MukadepanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mukadepan',
        template: _raw_loader_mukadepan_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mukadepan_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MukadepanPage);

/***
  showStatus: boolean = false;
  async ionViewWillEnter()
  {

    let loader=await this.loading.create({
      message:'Loading...',
      spinner:'bubbles'
    })

    loader.present();

    this.authService.getUserDataPromise().then((res: any) => {
      this.displayUserData = res;
      // this.checkData.staff_id = this.displayUserData.staff_id;
      this.sid = this.displayUserData.staff_id;
 
    this.authService.listName({staff_id: this.sid, action: 2}).subscribe((res: any) => {
      console.log('goChecking',res);
      let temp : any[] = [];
      (res.results).forEach(function (value) {
        console.log(value)
        temp.push({staff_name:value.staff_name,
        checkin:new Date(value.checkin),
        checkout:new Date(value.checkout),
        location:value.location,
        })
      });
      this.displayUserData2 = temp;
      loader.dismiss();
      console.log(this.displayUserData2);} )

    });

  }
}
  ***/


/***/ }),

/***/ "XSHW":
/*!*****************************************************!*\
  !*** ./src/app/pages/mukadepan/mukadepan.module.ts ***!
  \*****************************************************/
/*! exports provided: MukadepanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MukadepanPageModule", function() { return MukadepanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mukadepan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mukadepan-routing.module */ "G0A+");
/* harmony import */ var _mukadepan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mukadepan.page */ "U52L");







let MukadepanPageModule = class MukadepanPageModule {
};
MukadepanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mukadepan_routing_module__WEBPACK_IMPORTED_MODULE_5__["MukadepanPageRoutingModule"]
        ],
        declarations: [_mukadepan_page__WEBPACK_IMPORTED_MODULE_6__["MukadepanPage"]]
    })
], MukadepanPageModule);



/***/ }),

/***/ "YTKF":
/*!*****************************************************!*\
  !*** ./src/app/pages/mukadepan/mukadepan.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  position: relative;\n  left: 0;\n  bottom: 10vh;\n  right: 0;\n  top: 2vh;\n}\n\n@media screen and (max-width: 1200px) and (min-width: 450px) {\n  .container {\n    background: white;\n  }\n}\n\nion-toolbar {\n  --min-height: 50px;\n  color: #2C9DDE;\n}\n\nion-button {\n  --border-radius: 30px;\n}\n\n.smalllogo {\n  -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate-reverse both;\n  animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate-reverse both;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/images/hr_bg.png\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#realTime {\n  margin-bottom: 0px;\n}\n\nion-datetime {\n  padding-top: 0%;\n}\n\n.location {\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-icon {\n  font-size: 35px;\n  color: #2C9DDE;\n}\n\nion-grid {\n  position: relative;\n  margin-top: 40px;\n  margin-bottom: auto;\n}\n\n.rowBawah {\n  font-size: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdWthZGVwYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxZQUFZO0VBQ1osUUFBUTtFQUNSLFFBQVE7QUFDWjs7QUFBSTtFQU5KO0lBT1EsaUJBQWlCO0VBSXZCO0FBQ0Y7O0FBREE7RUFDSSxrQkFBYTtFQUNiLGNBQWM7QUFJbEI7O0FBREM7RUFDSyxxQkFBZ0I7QUFJdEI7O0FBREU7RUFDRSx5R0FBOEc7RUFDOUcsaUdBQXNHO0VBQ3RHLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBSXRCOztBQURFO0VBQ0Usa0JBQWE7RUFDYixpREFBaUQ7RUFDakQsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFJMUI7O0FBREE7RUFDRSxrQkFBa0I7QUFJcEI7O0FBREE7RUFDRSxlQUFlO0FBSWpCOztBQURBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFJcEI7O0FBREE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUloQjs7QUFEQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBSXJCOztBQURBO0VBQ0UsZUFBZTtBQUlqQiIsImZpbGUiOiJtdWthZGVwYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAxMHZoO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDJ2aDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICMyQzlEREU7XHJcbiAgfVxyXG5cclxuIGlvbi1idXR0b24ge1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuc21hbGxsb2dvIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZSBib3RoO1xyXG4gICAgYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMXMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZSBib3RoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaHJfYmcucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4jcmVhbFRpbWUge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuaW9uLWRhdGV0aW1lIHtcclxuICBwYWRkaW5nLXRvcDogMCU7XHJcbn1cclxuXHJcbi5sb2NhdGlvbiB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6ICMyQzlEREU7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4ucm93QmF3YWgge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-mukadepan-mukadepan-module-es2015.js.map