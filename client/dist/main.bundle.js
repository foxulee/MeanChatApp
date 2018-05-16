webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuardService = /** @class */ (function () {
    function AdminGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminGuardService.prototype.canActivate = function () {
        if (!this.auth.isAdmin()) {
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    };
    AdminGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AdminGuardService);
    return AdminGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Admin Dashboard</h1>\n<div class=\"container\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"club\">Club Name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"club\" placeholder=\"Club Name\" id=\"club\">\n      <!-- <div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n        <div *ngIf=\"name?.errors.required\" class=\"text-danger\">\n          Full Name is required.\n        </div>\n      </div> -->\n    </div>\n    <div class=\"form-group\">\n      <label for=\"country\">Country</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"country\" placeholder=\"Country\" id=\"country\">\n      <!-- <div *ngIf=\"email.invalid && (name.dirty || name.touched)\">\n        <div *ngIf=\"email?.errors.required\" class=\"text-danger\">\n          Email is required.\n        </div>\n      </div> -->\n    </div>\n    <input type=\"file\" name=\"upload\" id=\"upload\" style=\"display: none\" (change)=\"onFileChange($event)\" #fileInput>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"fileInput.click()\">\n      Upload Image\n      <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"clearFile()\">clear file</button>\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.invalid || loading\">Add Group</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_service__ = __webpack_require__("../../../../../src/app/admin/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(fb, uploadService) {
        this.fb = fb;
        this.uploadService = uploadService;
        this.loading = false;
        this.createForm();
    }
    DashboardComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            club: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            country: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            upload: null
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        var club = {
            imageName: this.form.get('upload').value['name'],
            name: this.form.get('club').value,
            country: this.form.get('country').value
        };
        this.uploadService.addClub(club).subscribe(function (res) {
            _this.clearFile();
        });
    };
    DashboardComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var formData = new FormData();
            var file = event.target.files[0];
            formData.append('upload', file);
            this.form.get('upload').setValue(file);
            this.loading = true;
            this.uploadService.uploadClubImage(formData).subscribe(function (res) {
                _this.loading = false;
            });
        }
    };
    DashboardComponent.prototype.clearFile = function () {
        this.form.get('upload').setValue(null);
        this.form.get('club').setValue('');
        this.form.get('country').setValue('');
        this.fileInput.nativeElement.value = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DashboardComponent.prototype, "fileInput", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__upload_service__["a" /* UploadService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.uploadClubImage = function (formData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.delete('Content-Type');
        return this.http.post('/api/uploadClubImage', formData, { headers: headers });
    };
    UploadService.prototype.uploadUserImage = function (formData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.delete('Content-Type');
        return this.http.post('/api/uploadUserImage', formData, { headers: headers });
    };
    UploadService.prototype.addClub = function (club) {
        return this.http.post('/api/addClub', club);
    };
    UploadService.prototype.saveUser = function (user) {
        return this.http.post('/api/saveUser', user);
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_upload_service__ = __webpack_require__("../../../../../src/app/admin/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__club_service__ = __webpack_require__("../../../../../src/app/club.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__club_list_club_list_component__ = __webpack_require__("../../../../../src/app/club-list/club-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__club_card_club_card_component__ = __webpack_require__("../../../../../src/app/club-card/club-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__group_chat_group_chat_component__ = __webpack_require__("../../../../../src/app/group-chat/group-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__friend_request_service__ = __webpack_require__("../../../../../src/app/friend-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__notification_service__ = __webpack_require__("../../../../../src/app/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__private_chat_private_chat_component__ = __webpack_require__("../../../../../src/app/private-chat/private-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__message_notification_message_notification_component__ = __webpack_require__("../../../../../src/app/message-notification/message-notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__member_list_member_list_component__ = __webpack_require__("../../../../../src/app/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__member_info_member_info_component__ = __webpack_require__("../../../../../src/app/member-info/member-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__interest_interest_component__ = __webpack_require__("../../../../../src/app/interest/interest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__user_overview_user_overview_component__ = __webpack_require__("../../../../../src/app/user-overview/user-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__group_chat_service__ = __webpack_require__("../../../../../src/app/group-chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__private_chat_service__ = __webpack_require__("../../../../../src/app/private-chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__admin_guard_service__ = __webpack_require__("../../../../../src/app/admin-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__news_service__ = __webpack_require__("../../../../../src/app/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */], runGuardsAndResolvers: 'always', },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_32__news_news_component__["a" /* NewsComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__admin_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'members', component: __WEBPACK_IMPORTED_MODULE_25__member_list_member_list_component__["a" /* MemberListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'overview/:id', component: __WEBPACK_IMPORTED_MODULE_28__user_overview_user_overview_component__["a" /* UserOverviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'group-chat/:name', component: __WEBPACK_IMPORTED_MODULE_19__group_chat_group_chat_component__["a" /* GroupChatComponent */], runGuardsAndResolvers: 'always', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'private-chat/:id', component: __WEBPACK_IMPORTED_MODULE_23__private_chat_private_chat_component__["a" /* PrivateChatComponent */], runGuardsAndResolvers: 'always', canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'setting/profile', component: __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'setting/interest', component: __WEBPACK_IMPORTED_MODULE_27__interest_interest_component__["a" /* InterestComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard_service__["a" /* AuthGuardService */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__admin_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__club_list_club_list_component__["a" /* ClubListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__club_card_club_card_component__["a" /* ClubCardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__group_chat_group_chat_component__["a" /* GroupChatComponent */],
                __WEBPACK_IMPORTED_MODULE_23__private_chat_private_chat_component__["a" /* PrivateChatComponent */],
                __WEBPACK_IMPORTED_MODULE_24__message_notification_message_notification_component__["a" /* MessageNotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_25__member_list_member_list_component__["a" /* MemberListComponent */],
                __WEBPACK_IMPORTED_MODULE_26__member_info_member_info_component__["a" /* MemberInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_27__interest_interest_component__["a" /* InterestComponent */],
                __WEBPACK_IMPORTED_MODULE_28__user_overview_user_overview_component__["a" /* UserOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_32__news_news_component__["a" /* NewsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["d" /* RouterModule */].forRoot(routes, { onSameUrlNavigation: 'reload' }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_3__auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_31__admin_guard_service__["a" /* AdminGuardService */],
                __WEBPACK_IMPORTED_MODULE_14__admin_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_22__socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_16__club_service__["a" /* ClubService */],
                __WEBPACK_IMPORTED_MODULE_29__group_chat_service__["a" /* GroupChatService */],
                __WEBPACK_IMPORTED_MODULE_21__notification_service__["a" /* NotificationService */],
                __WEBPACK_IMPORTED_MODULE_20__friend_request_service__["a" /* FriendRequestService */],
                __WEBPACK_IMPORTED_MODULE_30__private_chat_service__["a" /* PrivateChatService */],
                __WEBPACK_IMPORTED_MODULE_33__news_service__["a" /* NewsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router, socketService) {
        this.http = http;
        this.router = router;
        this.socketService = socketService;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.isAdmin = function () {
        var user = this.getUserDetails();
        if (!user.roles)
            return false;
        for (var _i = 0, _a = user.roles; _i < _a.length; _i++) {
            var role = _a[_i];
            if (role == 'admin')
                return true;
        }
        return false;
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post("/api/" + type, user);
        }
        else {
            base = this.http.get("/api/" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.saveProfile = function (userProfile) {
        return this.http.post('/api/saveProfile', userProfile);
    };
    AuthenticationService.prototype.addInterest = function (interests) {
        return this.http.post('api/addInterest', { interests: interests, _id: this.getUserDetails()._id });
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.socketService.disconnect();
        this.router.navigateByUrl('/');
    };
    AuthenticationService.prototype.isEmailRegisterd = function (email) {
        // return this.request('post', 'isEmailRegistered',{email});
        return this.http.post('/api/isEmailRegistered', { email: email });
    };
    AuthenticationService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error.json());
        ;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__socket_service__["a" /* SocketService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/club-card/club-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/club-card/club-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"border: #4aa1f3 2px solid; border-radius: 10px\">\n  <!-- <a [routerLink]=\"['/group-chat', club.name ]\" style=\"text-decoration: none\"> -->\n  <!-- user href instead, otherwise cannot reconnect socket because angular reuse the page-->\n  <a [href]=\"'/group-chat/'+ club.name \" style=\"text-decoration: none\">\n    <img class=\"card-img-top\" [src]=\"'https://s3.amazonaws.com/fox-club-pictures/'+club.imageName\" style=\"display: block;max-width: 100%;  height: auto; border-top-right-radius: 8px;  border-top-left-radius: 8px; border: #4aa1f3 1px solid\">\n    <div class=\"card-body\" style=\"margin-left: 20px \">\n      <h4 class=\"card-title\">{{club.name}} ({{club.fans.length}})</h4>\n      <p class=\"card-text\">{{club.country}}</p>\n    </div>\n  </a>\n  <div class=\"card-footer\">\n    <button class=\"btn add-fav btn-block\" (click)=\"addFavorite(club.id, club.name)\" style=\"border-top-right-radius: 0px;  border-top-left-radius: 0px;\" *ngIf=\"userDetails\">Add To Favorite</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/club-card/club-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_club__ = __webpack_require__("../../../../../src/app/models/club.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_service__ = __webpack_require__("../../../../../src/app/club.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClubCardComponent = /** @class */ (function () {
    function ClubCardComponent(auth, clubService) {
        this.auth = auth;
        this.clubService = clubService;
    }
    ClubCardComponent.prototype.ngOnInit = function () {
        this.userDetails = this.auth.getUserDetails();
    };
    ClubCardComponent.prototype.addFavorite = function (clubId, clubName) {
        var _this = this;
        if (this.userDetails) {
            this.clubService.addFavoriteClub(clubId, clubName, this.userDetails.name, this.userDetails.email).subscribe(function (fan) {
                var fans = _this.club.fans;
                var added = false;
                for (var i = 0; i < fans.length; i++) {
                    if (fans[i].email === _this.userDetails.email)
                        added = true;
                }
                if (!added)
                    _this.club.fans.push({ username: _this.userDetails.name, email: _this.userDetails.email });
            });
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('club'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_club__["a" /* Club */])
    ], ClubCardComponent.prototype, "club", void 0);
    ClubCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'club-card',
            template: __webpack_require__("../../../../../src/app/club-card/club-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/club-card/club-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__club_service__["a" /* ClubService */]])
    ], ClubCardComponent);
    return ClubCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/club-list/club-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/club-list/club-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor=\"let club of clubs; let index = index\">\n  <club-card [club] = \"club\"></club-card>\n</div> -->\n\n\n  <div class=\"row\">\n    <div *ngFor=\"let club of clubs; let index = index\" style=\"border: blue, 1px, solid\">\n      <div class=\"col-md-9 col-lg-4\">\n        <club-card [club]=\"club\"></club-card> <br>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/club-list/club-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClubListComponent = /** @class */ (function () {
    function ClubListComponent() {
        this.clubs = [];
    }
    ClubListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('clubs'),
        __metadata("design:type", Array)
    ], ClubListComponent.prototype, "clubs", void 0);
    ClubListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'club-list',
            template: __webpack_require__("../../../../../src/app/club-list/club-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/club-list/club-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClubListComponent);
    return ClubListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/club.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_club__ = __webpack_require__("../../../../../src/app/models/club.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClubService = /** @class */ (function () {
    function ClubService(http) {
        this.http = http;
    }
    ClubService.prototype.getClubs = function () {
        return this.http.get('/api/home/getClubs').map(function (res) {
            var allClubs = [];
            res['allClubs'].forEach(function (obj) {
                allClubs.push(new __WEBPACK_IMPORTED_MODULE_3__models_club__["a" /* Club */](obj));
            });
            var countries = res['countries'];
            return { allClubs: allClubs, countries: countries };
        });
    };
    ClubService.prototype.addFavoriteClub = function (clubId, clubName, userName, userEmail) {
        return this.http.post('/api/home/club', { clubId: clubId, clubName: clubName, userName: userName, userEmail: userEmail });
    };
    ClubService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ClubService);
    return ClubService;
}());



/***/ }),

/***/ "../../../../../src/app/friend-request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendRequestService = /** @class */ (function () {
    function FriendRequestService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    FriendRequestService.prototype.getFriendList = function (userId) {
        return this.http.get('api/group/getFriendList/' + userId);
    };
    FriendRequestService.prototype.sendFriendRequest = function (sender, receiver, group) {
        return this.http.post('api/group/friendRequest/' + group, { sender: sender, receiver: receiver });
    };
    FriendRequestService.prototype.accetpFriendRequest = function (senderId, senderName) {
        var currentUser = this.auth.getUserDetails();
        var userId = currentUser._id;
        var userName = currentUser.name;
        return this.http.post('api/group/request/accept', { senderId: senderId, senderName: senderName, userId: userId, userName: userName });
    };
    FriendRequestService.prototype.cancelFriendRequest = function (senderId, senderName) {
        var currentUser = this.auth.getUserDetails();
        var userId = currentUser._id;
        var userName = currentUser.name;
        return this.http.post('api/group/request/cancel', { senderId: senderId, senderName: senderName, userId: userId, userName: userName });
    };
    FriendRequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
    ], FriendRequestService);
    return FriendRequestService;
}());



/***/ }),

/***/ "../../../../../src/app/group-chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// const SERVER_URL = 'http://localhost:3000'; 
var GroupChatService = /** @class */ (function () {
    function GroupChatService(socketService, http) {
        this.socketService = socketService;
        this.http = http;
        this.socket = socketService.socket;
    }
    // initSocket() {
    //   this.socket = socketIO.connect(SERVER_URL, { transports: ['websocket', 'htmlfile', 'xhr-multipart', 'xhr-polling'] });
    // }
    // oinGroup(group: string, name: string, userId: string, image: string) {
    //   this.socket.emit('join', { group, name, userId, image });
    // }j
    GroupChatService.prototype.send = function (message) {
        this.http.post('api/group/saveGroupMessage', message).subscribe();
    };
    GroupChatService.prototype.getAllGroupMessages = function (group) {
        return this.http.get('api/group/getAllGroupMessages/' + group)
            .map(function (messages) { return messages.map(function (message) {
            // console.log('message',message);
            return { from: { id: message.senderId._id, name: message.senderName, image: message.senderId.userImage }, content: message.message };
        }); });
        ;
    };
    GroupChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], GroupChatService);
    return GroupChatService;
}());



/***/ }),

/***/ "../../../../../src/app/group-chat/group-chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* h1 {\r\n  font-size: 38px;\r\n  color: #5C5C5B;\r\n}\r\n\r\nh2 {\r\n  font-size: 32px;\r\n  color: #5C5C5B;\r\n  margin-top: 0px;\r\n}\r\n\r\nh3 {\r\n  font-size: 24px;\r\n  color: #333;\r\n}\r\n\r\n.navbar {\r\n  background: #4aa1f3;\r\n}\r\n\r\n.navbar-default .navbar-brand {\r\n  color: #fff;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  padding-left: 0px;\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar-brand:hover {\r\n  color: #fff !important;\r\n  background-color: #4aa1f3;\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a {\r\n  color: #fff !important;\r\n  background-color: #4aa1f3;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a:hover {\r\n  color: #fff !important;\r\n  background-color: #4aa1f3;\r\n}\r\n\r\n.dropdown-toggle:active,\r\n.open .dropdown-toggle {\r\n  background: #4aa1f3 !important;\r\n  border: none !important;\r\n  color: #000 !important;\r\n} */\r\n\r\n.margin-80 {\r\n  margin-bottom: 80px\r\n}\r\n\r\n.new_message_head button {\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border: medium none;\r\n  outline: 0;\r\n  font-size: 17px;\r\n  color: #4aa1f3;\r\n}\r\n\r\n.new_message_head button:focus {\r\n  outline: 0 !important;\r\n}\r\n\r\n.new_message_head {\r\n  background: white none repeat scroll 0 0;\r\n  float: left;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  padding: 18px 10px;\r\n  width: 100%;\r\n  border: 1px solid rgba(128, 128, 128, 0.32);\r\n}\r\n\r\n.message_section {\r\n  border: 1px solid #dddddd;\r\n}\r\n\r\n.chat_area {\r\n  background: white;\r\n  float: left;\r\n  height: 360px;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n  width: 100%;\r\n  border-left: 1px solid rgba(128, 128, 128, 0.32);\r\n  border-bottom: 1px solid rgba(128, 128, 128, 0.32);\r\n  border-right: 1px solid rgba(128, 128, 128, 0.32);\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  -ms-word-break: break-all;\r\n  word-break: break-all;\r\n  word-break: break-word;\r\n  -ms-hyphens: auto;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\r\n\r\n.chat_area li {\r\n  padding: 14px 14px 0;\r\n}\r\n\r\n.chat_area li .chat-img1 img {\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n.chat_area .chat-body1 {\r\n  margin-left: 50px;\r\n}\r\n\r\n.chat_area li:last-child {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.chat-name {\r\n  font-size: 17px;\r\n  font-weight: 600;\r\n  color: #4aa1f3;\r\n}\r\n\r\n.message_write {\r\n  background: white none repeat scroll 0 0;\r\n  float: left;\r\n  padding: 15px;\r\n  width: 100%;\r\n}\r\n\r\n.message_write textarea.form-control {\r\n  height: 70px;\r\n  padding: 10px;\r\n}\r\n\r\n.chat_bottom {\r\n  float: left;\r\n  margin-top: 13px;\r\n  width: 100%;\r\n}\r\n\r\nmember_list li:hover {\r\n  background: #428bca none repeat scroll 0 0;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.friends {\r\n  font-size: 18px;\r\n  color: gray;\r\n}\r\n\r\n.btn:hover,\r\n.btn:focus,\r\n.btn:active {\r\n  outline: 0 !important;\r\n}\r\n\r\n.card-container {\r\n  -webkit-perspective: 800px;\r\n  -o-perspective: 800px;\r\n  perspective: 800px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.card {\r\n  background: none repeat scroll 0 0 #FFFFFF;\r\n  border-radius: 4px;\r\n  color: #444444;\r\n}\r\n\r\n.card-container,\r\n.front,\r\n.back {\r\n  width: 100%;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n}\r\n\r\n.card .cover {\r\n  height: 105px;\r\n  overflow: hidden;\r\n  border-radius: 4px 4px 0 0;\r\n}\r\n\r\n.card .cover img {\r\n  width: 100%;\r\n}\r\n\r\n.card .user {\r\n  border-radius: 50%;\r\n  display: block;\r\n  height: 120px;\r\n  margin: -55px auto 0;\r\n  overflow: hidden;\r\n  width: 120px;\r\n}\r\n\r\n.card .user img {\r\n  background: none repeat scroll 0 0 #FFFFFF;\r\n  border: 4px solid #FFFFFF;\r\n  width: 100%;\r\n}\r\n\r\n.card .content {\r\n  background-color: rgba(0, 0, 0, 0);\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  padding: 10px 20px 20px;\r\n}\r\n\r\n.card .main {\r\n  min-height: 160px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.card .back .content .main {\r\n  height: 215px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.card .name {\r\n  font-family: 'Arima Madurai', cursive;\r\n  font-size: 22px;\r\n  line-height: 28px;\r\n  margin: 10px 0 0;\r\n  text-align: center;\r\n}\r\n\r\n.card .profession-online {\r\n  color: #999999;\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.online {\r\n  font-size: 10px;\r\n  color: rgba(129, 191, 57, 0.95);\r\n  position: relative;\r\n  top: -2px;\r\n}\r\n\r\n.offline {\r\n  font-size: 10px;\r\n  color: grey;\r\n  position: relative;\r\n  top: -2px;\r\n}\r\n\r\n.card .footer {\r\n  border-top: 1px solid #EEEEEE;\r\n  color: #999999;\r\n  margin: 30px 0 0;\r\n  padding: 10px 0 0;\r\n  text-align: center;\r\n}\r\n\r\n.main-scroll {\r\n  height: 300px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.online_friend {\r\n  font-size: 10px;\r\n  color: rgba(129, 191, 57, 0.95);\r\n  position: relative;\r\n  float: right;\r\n}\r\n\r\n.name,\r\n.friends,\r\n#numOfFriends,\r\n.club_name,\r\n.club_fans {\r\n  color: #4aa1f3 !important;\r\n}\r\n\r\n.bl {\r\n  color: #03a9f4;\r\n  font-weight: 500;\r\n}\r\n\r\n.gr-rightsidebar {\r\n  padding-top: 15px;\r\n  background: white;\r\n  float: left;\r\n  height: 506px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n  border-left: 1px solid rgba(128, 128, 128, 0.32);\r\n  border-bottom: 1px solid rgba(128, 128, 128, 0.32);\r\n  border-right: 1px solid rgba(128, 128, 128, 0.32);\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.modal-title {\r\n  color: #4aa1f3;\r\n}\r\n\r\n#nameLink,\r\n.btn_close {\r\n  background-color: #4aa1f3 !important;\r\n  color: white !important;\r\n}\r\n\r\n.modal-body {\r\n  text-align: center;\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 15% auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 100%;\r\n}\r\n\r\n.modal-footer {\r\n  padding-top: 15px;\r\n}\r\n\r\n.val {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  color: #4aa1f3;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/group-chat/group-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat_container\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 col-md-3 mob-clearfix\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card-container\">\n            <div class=\"card\">\n              <div class=\"front\">\n                <div class=\"cover\">\n\n                </div>\n                <div class=\"user cover-img\">\n                  <!-- <img src=\"https://placehold.it/300x300\" class=\"img-circle\" alt=\"\"> -->\n                  <ng-container *ngIf=\"user.image.includes('http'); else noHttp\">\n                    <img [src]=\"user.image\" class=\"img-circle\">\n                  </ng-container>\n                  <ng-template #noHttp>\n                    <img [src]=\"'https://s3.amazonaws.com/fox-user-pictures/' + user.image\" class=\"img-circle\">\n                  </ng-template>\n                </div>\n                <div class=\"content\">\n                  <div class=\"main\">\n                    <h3 class=\"name\">{{username}}</h3>\n                    <p class=\"profession-online\">\n                      <i class=\"fa fa-circle\" [ngClass]=\"{'online': isOnline, 'offline':!isOnline}\" aria-hidden=\"true\"></i>\n                      <ng-container *ngIf=\"isOnline; else offline\">Online</ng-container>\n                      <ng-template #offline>Offline</ng-template>\n                    </p>\n                    <p class=\"text-center\">\n                      {{user.mantra}}\n                    </p>\n                  </div>\n                  <div class=\"footer\">\n                    <i class=\"fa fa-mail-forward\"></i>\n                    <a (click)=\"navigateToMyProfile()\" style=\"cursor: pointer\">\n                      View My Profile\n                    </a>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" style=\"margin-top:10px;\">\n        <div class=\"col-md-12\">\n          <div class=\"card-container\">\n            <div class=\"card\">\n              <div class=\"front\">\n\n                <div class=\"content main-scroll\">\n                  <div class=\"main\" id=\"main_scroll\">\n                    <p class=\"friends\" style=\"margin-bottom:0px;\">\n                      Online Friends\n                      <span id=\"numOfFriends\">({{onlineFriendsList.length}})</span>\n                    </p>\n                    <hr style=\"margin-top:10px\" />\n\n                    <div class=\"onlineFriends\">\n                      <div *ngFor=\"let onlineFriend of onlineFriendsList\">\n                        <ng-container *ngIf=\"onlineFriend.img.includes('http'); else noHttp\">\n                          <img [src]=\"onlineFriend.img\" class=\"pull-left img-circle\" style=\"width: 30px; margin-right: 10px;\">\n                        </ng-container>\n                        <ng-template #noHttp>\n                          <img [src]=\"'https://s3.amazonaws.com/fox-user-pictures/' + onlineFriend.img\" class=\"pull-left img-circle\" style=\"width: 30px; margin-right: 10px;\">\n                        </ng-template>\n                        <!-- <img [src]=\"'https://placehold.it/30*30'\" class=\"pull-left img-circle\" style=\"width: 50px; margin-right: 10px;\"> -->\n                        <p>\n                          <a class=\"val\" [href]=\"'/private-chat/'+ onlineFriend['id'] + '.'+ auth.getUserDetails()._id + '?receiverName=' + onlineFriend['name']\">\n                            <h3 style=\"padding-top: 15px; font-size: 14px\">@{{onlineFriend['name']}}\n                              <i class=\"fa fa-circle pull-right\" aria-hidden=\"true\" [ngClass]=\"{'online': isOnline, 'offline':!isOnline}\"></i>\n                            </h3>\n                          </a>\n                          <!-- <a class=\"val\" [routerLink]=\"['/private-chat', onlineFriend['id']+'.'+auth.getUserDetails()._id]\" [queryParams]=\"{receiverName: onlineFriend['name']}\">\n                            <h3 style=\"padding-top: 15px; font-size: 14px\">@{{onlineFriend['name']}}\n                              <i class=\"fa fa-circle online pull-right\" aria-hidden=\"true\"></i>\n                            </h3>\n                          </a> -->\n                        </p>\n                      </div>\n                    </div>\n\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"col-sm-5 col-md-6 message_section\">\n      <div class=\"row\">\n        <div class=\"new_message_head\">\n          <div class=\"pull-left\">\n            <button class=\"club_name\">\n              {{groupName}}\n            </button>\n          </div>\n          <div class=\"pull-right\">\n          </div>\n        </div>\n\n        <div class=\"chat_area\" #messageDiv>\n          <ul id=\"messages\" class=\"list-unstyled\">\n            <li *ngFor=\"let message of messages\" class=\"left\" #messageList>\n              <span class=\"chat-img1 pull-left\">\n                <!-- <img src=\"http://placehold.it/300x300\" class=\"img-circle\"> -->\n                <ng-container *ngIf=\"message.from.image.includes('http'); else noHttp\">\n                  <img [src]=\"message.from.image\" class=\"img-circle\">\n                </ng-container>\n                <ng-template #noHttp>\n                  <img [src]=\"'https://s3.amazonaws.com/fox-user-pictures/' + message.from.image\" class=\"img-circle\">\n                </ng-template>\n              </span>\n              <div class=\"chat-body1\">\n                <span class=\"chat-name\">\n                  {{message?.from.name}}\n                </span>\n                <br>{{message?.content}}\n              </div>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"message_write\">\n\n          <textarea class=\"form-control\" name=\"message\" id=\"msg\" placeholder=\"Type a message\" [(ngModel)]=\"messageContent\"></textarea>\n          <div class=\"clearfix\"></div>\n          <div class=\"chat_bottom\">\n            <button id=\"send-message\" class=\"pull-right btn btn-primary\" style=\"background: #4aa1f3; border: #4aa1f3; \" (click)=\"sendMessage()\">\n              Send\n            </button>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-3 col-md-3 mob-50 mob-clearfix\">\n\n\n      <div class=\"new_message_head\">\n        <div class=\"pull-left\">\n          <button class=\"club_fans\">\n            <i class=\"fa fa-users\" aria-hidden=\"true\" style=\"padding-right:15px; color:#4aa1f3 !important;\"></i>\n            Online Club Fans\n            <span id=\"numValue\">({{onlineUsersList.length}})</span>\n          </button>\n        </div>\n      </div>\n\n\n\n      <div class=\"gr-rightsidebar\">\n\n        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n          <div class=\"modal-dialog\">\n\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h3 class=\"modal-title\" id=\"name\">@{{receiverName}}</h3>\n              </div>\n              <div class=\"modal-body\">\n                <button type=\"submit\" id=\"friend-add\" class=\"btn add\" (click)=\"sendFriendRequest()\" [disabled]=\"receiverId == user.id\">\n                  <i class=\"fa fa-user\"></i> Add Friend\n                </button>\n\n                <a id=\"nameLink\" class=\"btn \" (click)=\"navigateToOverview(receiverId)\">View Profile</a>\n\n                <div id=\"myTest\">\n                </div>\n\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn_close\" data-dismiss=\"modal\">Close</button>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"col-md-12\" id=\"main\">\n          <div id=\"users\">\n            <ol *ngFor=\"let user of onlineUsersList\">\n              <p>\n                <a class=\"val\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"receiverName=user.name; receiverId = user.id\">{{user.name}}</a>\n              </p>\n            </ol>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/group-chat/group-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_chat__ = __webpack_require__("../../../../../src/app/models/chat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friend_request_service__ = __webpack_require__("../../../../../src/app/friend-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__group_chat_service__ = __webpack_require__("../../../../../src/app/group-chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GroupChatComponent = /** @class */ (function () {
    function GroupChatComponent(route, groupChatService, auth, friendRequestService, socketService, router) {
        this.route = route;
        this.groupChatService = groupChatService;
        this.auth = auth;
        this.friendRequestService = friendRequestService;
        this.socketService = socketService;
        this.router = router;
        this.action = __WEBPACK_IMPORTED_MODULE_2__models_chat__["a" /* Action */];
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_chat__["c" /* User */]('');
        this.onlineUsersList = [];
        this.messages = [];
        this.receiverName = "";
        this.receiverId = "";
        this.isOnline = false;
        this.onlineFriendsList = [];
    }
    Object.defineProperty(GroupChatComponent.prototype, "message", {
        get: function () {
            return {
                from: this.user,
                content: this.messageContent,
                group: this.groupName
            };
        },
        enumerable: true,
        configurable: true
    });
    GroupChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupName = this.route.snapshot.params['name'];
        var userDetails = this.auth.getUserDetails();
        this.username = this.user.name = userDetails.name;
        this.user.id = userDetails._id;
        this.user.image = userDetails.img;
        this.user.mantra = userDetails.mantra;
        this.groupChatService.getAllGroupMessages(this.groupName).subscribe(function (messages) {
            // console.log(messages)
            _this.messages = messages;
        });
        this.initIoConnection();
        // friend list
        var group = 'GlobalGroup';
        var name = userDetails.name;
        var img = userDetails.img;
        var id = userDetails._id;
        this.socketService.emit('global group', { group: group, name: name, img: img, id: id });
        // get online friend list
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_2__models_chat__["b" /* SocketEvent */].ONLINE_FRIENDS).subscribe(function (onlineUsers) {
            _this.friendRequestService.getFriendList(_this.user.id).subscribe(function (friendList) {
                // console.log('onlineUsers', onlineUsers);
                // console.log('friendList', friendList);
                _this.onlineFriendsList = [];
                onlineUsers.forEach(function (user) {
                    for (var _i = 0, _a = friendList; _i < _a.length; _i++) {
                        var friend = _a[_i];
                        if (friend.id == user.id) {
                            _this.onlineFriendsList.push(user);
                            break;
                        }
                    }
                });
            });
        });
    };
    GroupChatComponent.prototype.ngOnDestroy = function () {
        this.socketService.emit('leave group', {});
        this.ioConnection.unsubscribe();
    };
    GroupChatComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.socketService.emit('joinNotificationList', this.user.name);
        this.ioConnection = this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_2__models_chat__["b" /* SocketEvent */].GROUP_MESSAGE)
            .subscribe(function (message) {
            // console.log(message);
            _this.messages.push(message);
        });
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_2__models_chat__["b" /* SocketEvent */].CONNECT)
            .subscribe(function () {
            console.log('connected');
            // join group chat
            _this.socketService.emit('join', { group: _this.groupName, name: _this.user.name, userId: _this.user.id, image: _this.user.image });
            _this.isOnline = true;
            // join friend request notification
            _this.socketService.emit('joinRequest', { sender: _this.user, receiver: _this.receiverName });
        });
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_2__models_chat__["b" /* SocketEvent */].JOIN).subscribe(function () {
            console.log('User has joined this channel');
        });
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_2__models_chat__["b" /* SocketEvent */].ONLINE_GROUP_USERS).subscribe(function (usersList) {
            // console.log(usersList);
            // let self appears at the first place
            var newUserList = [];
            usersList.forEach(function (user) {
                if (user.id === _this.user.id)
                    newUserList.push(user);
            });
            usersList.forEach(function (user) {
                if (user.id !== _this.user.id)
                    newUserList.push(user);
            });
            _this.onlineUsersList = newUserList;
        });
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_2__models_chat__["b" /* SocketEvent */].DISCONNECT)
            .subscribe(function () {
            console.log('disconnected');
            _this.isOnline = false;
        });
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_2__models_chat__["b" /* SocketEvent */].FRIEND_REQUEST_SEND).subscribe(console.log);
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_2__models_chat__["b" /* SocketEvent */].FRIEND_REQUEST_RECEIVE).subscribe(function (data) {
            console.log(data);
        });
    };
    GroupChatComponent.prototype.sendMessage = function () {
        if (!this.messageContent) {
            return;
        }
        this.socketService.emit(__WEBPACK_IMPORTED_MODULE_2__models_chat__["b" /* SocketEvent */].GROUP_MESSAGE, this.message);
        this.groupChatService.send(this.message);
        this.messageContent = null;
    };
    GroupChatComponent.prototype.sendFriendRequest = function () {
        this.socketService.emit('friendRequest send', { receiver: this.receiverName, sender: this.user });
        this.friendRequestService.sendFriendRequest(this.user, this.receiverName, this.groupName).subscribe();
    };
    GroupChatComponent.prototype.navigateToOverview = function (receiverId) {
        // this.router.navigate(['/overview', receiverId]);
        window.open('/overview/' + receiverId);
    };
    GroupChatComponent.prototype.navigateToMyProfile = function () {
        window.open('/setting/profile');
    };
    GroupChatComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.messageList.changes.subscribe(function () {
            _this.scrollToBottom();
        });
    };
    GroupChatComponent.prototype.scrollToBottom = function () {
        try {
            this.messageDiv.nativeElement.scrollTop = this.messageDiv.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])('messageList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */])
    ], GroupChatComponent.prototype, "messageList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('messageDiv'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GroupChatComponent.prototype, "messageDiv", void 0);
    GroupChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-group-chat',
            template: __webpack_require__("../../../../../src/app/group-chat/group-chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/group-chat/group-chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__group_chat_service__["a" /* GroupChatService */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__friend_request_service__["a" /* FriendRequestService */],
            __WEBPACK_IMPORTED_MODULE_5__socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], GroupChatComponent);
    return GroupChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    font-size: 16px;\r\n    line-height: 1.42857143;\r\n    color: #555;\r\n    background: #eeeeee;\r\n}\r\n\r\n#custom-search-input {\r\n    background: #e8e6e7 none repeat scroll 0 0;\r\n    margin: 0;\r\n    padding: 10px;\r\n}\r\n\r\n#custom-search-input .search-query {\r\n    background: #fff none repeat scroll 0 0 !important;\r\n    border-radius: 4px;\r\n    height: 33px;\r\n    margin-bottom: 0;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n}\r\n\r\n#custom-search-input button {\r\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n    border: 0 none;\r\n    border-radius: 3px;\r\n    color: #666666;\r\n    left: auto;\r\n    margin-bottom: 0;\r\n    margin-top: 7px;\r\n    padding: 2px 5px;\r\n    position: absolute;\r\n    right: 0;\r\n    z-index: 9999;\r\n}\r\n\r\n.card {\r\n    background: none repeat scroll 0 0 #FFFFFF;\r\n    border-radius: 4px;\r\n    color: #444444;\r\n}\r\n\r\n.card .content {\r\n    background-color: rgba(0, 0, 0, 0);\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    padding: 10px 20px 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-md-12\">\n    <form action=\"#\" method=\"post\">\n      <div class=\"form-group ad-30\" style=\"margin-top:8px;\">\n        <div class=\"input-group search-style\">\n          <input class=\"form-control new-search-bar\" name=\"country\" id=\"search\" placeholder=\"Enter Your Club Name\" type=\"text\" #search>\n          <span class=\"input-group-btn\">\n            <button class=\"btn input-btn\" type=\"\" id=\"search-form\" (click)=\"onSearchClick(search.value)\">Search</button>\n          </span>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"col-md-12\">\n    <div class=\"\">\n      <div class=\"row\">\n\n        <div class=\"col-md-3\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"filter-container\">\n                <div class=\"card\">\n                  <form action=\"#\" method=\"post\">\n                    <div class=\"content\">\n                      <p class=\"filter\">\n                        FILTER\n                      </p>\n                      <hr/>\n                      <select class=\"form-control\" name=\"country\" id=\"country\" (change)=\"onClubNameChange(club.value)\" #club>\n                        <option value=\"\">Filter By Country</option>\n                        <option *ngFor=\"let country of countries\" value=\"{{country}}\">{{country}}</option>                        \n                      </select>\n                      <div class=\"clearfix\"></div>\n                      <button class=\"btn add-apply\">Apply</button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-9\">\n            <club-list [clubs] = \"filteredClubs\"></club-list>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__club_service__ = __webpack_require__("../../../../../src/app/club.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    // private socket: SocketIOClient.Socket;
    function HomeComponent(clubService, route, auth, socketService) {
        this.clubService = clubService;
        this.route = route;
        this.auth = auth;
        this.socketService = socketService;
        this.clubs = [];
        this.filteredClubs = [];
        this.countries = [];
        this.searchedName = '';
        var socialToken = route.snapshot.queryParams['token'];
        if (socialToken) {
            // console.log('token', socialToken);
            this.auth.saveToken(socialToken);
            this.socketService.connect();
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // friend list
        var userDetails = this.auth.getUserDetails();
        if (userDetails) {
            var group = 'GlobalGroup';
            var name_1 = userDetails.name;
            var img = userDetails.img;
            var id = userDetails._id;
            // notify online friends list
            this.socketService.emit('global group', { group: group, name: name_1, img: img, id: id });
        }
        this.subscription = this.clubService.getClubs().subscribe(function (data) {
            _this.filteredClubs = _this.clubs = data['allClubs'];
            _this.countries = data['countries'];
        });
    };
    HomeComponent.prototype.onClubNameChange = function (country) {
        this.selectedCountry = country;
        this.filter(null, country);
    };
    HomeComponent.prototype.onSearchClick = function (name) {
        this.searchedName = name;
        this.filter(name);
    };
    HomeComponent.prototype.filter = function (name, country) {
        if (name === void 0) { name = this.searchedName; }
        if (country === void 0) { country = this.selectedCountry; }
        if (name) {
            if (this.selectedCountry)
                this.filteredClubs = this.clubs.filter(function (club) { return club.name.toLowerCase().includes(name.toLowerCase()) && club.country === country; });
            else
                this.filteredClubs = this.clubs.filter(function (club) { return club.name.toLowerCase().includes(name.toLowerCase()); });
        }
        else {
            if (this.selectedCountry) {
                this.filteredClubs = this.clubs.filter(function (club) { return club.country === country; });
            }
            else {
                this.filteredClubs = this.clubs;
            }
        }
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__club_service__["a" /* ClubService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interest/interest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-display {\r\n    background: #fff;\r\n    -webkit-box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.16);\r\n    box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.16);\r\n    padding: 20px;\r\n}\r\n\r\n.user-display-head {\r\n    margin-top: 0px;\r\n    color: #03a9f4;\r\n}\r\n\r\n.profile-sidebar {\r\n    padding: 20px 0 10px 0;\r\n    background: #fff;\r\n    -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n    box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n  }\r\n\r\n.profile-userpic img {\r\n    float: none;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50% !important;\r\n  }\r\n\r\n.profile-usertitle {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n  }\r\n\r\n.profile-usertitle-name {\r\n    color: #5a7391;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    margin-bottom: 7px;\r\n  }\r\n\r\n.profile-usertitle-job {\r\n    text-transform: lowercase;\r\n    color: #4aa1f3;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n.profile-usermenu {\r\n    margin-top: 30px;\r\n  }\r\n\r\n.profile-usermenu ul li {\r\n    border-bottom: 1px solid #f0f4f7;\r\n  }\r\n\r\n.profile-usermenu ul li:last-child {\r\n    border-bottom: none;\r\n  }\r\n\r\n.profile-usermenu ul li a {\r\n    color: #93a3b5;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n  }\r\n\r\n.profile-usermenu ul li a i {\r\n    margin-right: 8px;\r\n    font-size: 14px;\r\n  }\r\n\r\n.profile-usermenu ul li a:hover {\r\n    background-color: #fafcfd;\r\n    color: #5b9bd1;\r\n  }\r\n\r\n.profile-usermenu ul li.active {\r\n    border-bottom: none;\r\n  }\r\n\r\n.profile-usermenu ul li.active a {\r\n    color: #5b9bd1;\r\n    background-color: #f6f9fb;\r\n    border-left: 2px solid #5b9bd1;\r\n    margin-left: -2px;\r\n  }\r\n\r\n.profile-signup {\r\n    background: white;\r\n    padding: 30px;\r\n    -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n    box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n  }\r\n\r\n.profile-signup .form .form-control {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n.save-profile-btn {\r\n    background: #03A9F4;\r\n    border: #3bb5ec;\r\n    width: 100%;\r\n    text-shadow: none;\r\n    color: white;\r\n    margin-top: 40px;\r\n  }\r\n\r\n.profile-settings-friends {\r\n    background: white;\r\n    padding: 30px;\r\n    -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n    box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n  }\r\n\r\n.img-user {\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    \r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interest/interest.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 mob-clearfix margin-80\">\n\n  <div class=\"col-md-12\">\n    <div class=\"chat_container\">\n      <div class=\"row\">\n        <!-- LEFT -->\n\n        <div class=\"col-sm-4 col-md-3\">\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"profile-sidebar\">\n                <div class=\"img-container\">\n                  <img [src]=\"details?('https://s3.amazonaws.com/fox-user-pictures/' + details.userImage): ''\" class=\"img-responsive img-user\"\n                    id=\"show_img\">\n                </div>\n\n                <div class=\"profile-usertitle\">\n                  <div class=\"profile-usertitle-name\">\n                    {{details?.fullName}}\n                  </div>\n                  <div class=\"profile-usertitle-job\">\n                    @{{details?.name}}\n                  </div>\n                </div>\n\n                <div class=\"profile-usermenu\">\n                  <ul class=\"nav\">\n                    <li>\n                      <a [routerLink]=\"['/overview', auth.getUserDetails()._id]\" style=\"color:#4aa1f3 !important\">\n                        <i class=\"fa fa-home\" style=\"color:#4aa1f3 !important\"></i>\n                        Overview\n                      </a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/setting/profile\" style=\"color:#4aa1f3 !important\">\n                        <i class=\"fa fa-user\" style=\"color:#4aa1f3 !important\"></i>\n                        Profile\n                      </a>\n                    </li>\n                    <li class=\"active\">\n                      <a routerLink=\"/setting/interest\" style=\"color:#4aa1f3 !important\">\n                        <i class=\"fa fa-check\" style=\"color:#4aa1f3 !important\"></i>\n                        Interests\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n\n\n        </div>\n\n\n        <!--MIDDLE-->\n        <div class=\"col-sm-8 col-md-9 mob-50\">\n          <div>\n            <div class=\"user-display\">\n              <h3 class=\"user-display-head\" style=\"color:#4aa1f3 !important\">Favourite Clubs</h3>\n              <hr />\n              <p style=\"margin-bottom:30px;\" *ngFor=\"let favClub of details?.favClubs\">\n                <span class=\"glyphicon glyphicon-check\" style=\"color:#4aa1f3\"> {{favClub.clubName}}</span>\n              </p>\n\n              <div class=\"form-group ad-30\" style=\"margin-top:18px;\">\n                <div class=\"input-group\">\n                  <input class=\"form-control add-items\" name=\"favClub\" type=\"text\" style=\"\" #favClub>\n\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-default add-items-btn\" style=\"font-weight:bold; background-color:#4aa1f3; color: white\" (click)=\"onSubmit(favClub.value)\"\n                      [disabled]=\"!favClub.value\">Add Club</button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div style=\"margin-top:20px;\">\n            <div class=\"user-display\">\n              <h3 class=\"user-display-head\" style=\"color:#4aa1f3 !important\">Favourite Players</h3>\n              <hr />\n              <p style=\"margin-bottom:30px;\" *ngFor=\"let favPlayer of details?.favPlayers\">\n                <span class=\"glyphicon glyphicon-check\" style=\"color:#4aa1f3\"> {{favPlayer.playerName}}</span>\n              </p>\n\n              <div class=\"form-group ad-30\" style=\"margin-top:18px;\">\n                <div class=\"input-group\">\n                  <input class=\"form-control add-items\" name=\"favPlayer\" type=\"text\" style=\"\" #favPlayer>\n\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-default add-items-btn\" style=\"font-weight:bold; background-color:#4aa1f3; color: white\" (click)=\"onSubmit(null, favPlayer.value)\"\n                      [disabled]=\"!favPlayer.value\">Add Player</button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div style=\"margin-top:20px;\">\n            <div class=\"user-display\">\n              <h3 class=\"user-display-head\" style=\"color:#4aa1f3 !important\">Favourite National Team</h3>\n              <hr />\n              <p style=\"margin-bottom:30px;\" *ngFor=\"let favTeam of details?.favNationalTeams\">\n                <span class=\"glyphicon glyphicon-check\" style=\"color:#4aa1f3\"> {{favTeam.teamName}}</span>\n              </p>\n\n              <div class=\"form-group ad-30\" style=\"margin-top:18px;\">\n                <div class=\"input-group\">\n                  <input class=\"form-control add-items\" name=\"favTeam\" type=\"text\" style=\"\" #favTeam>\n\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-default add-items-btn\" style=\"font-weight:bold; background-color:#4aa1f3; color: white\" (click)=\"onSubmit(null, null, favTeam.value)\"\n                      [disabled]=\"!favTeam.value\">Add Team</button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/interest/interest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_upload_service__ = __webpack_require__("../../../../../src/app/admin/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InterestComponent = /** @class */ (function () {
    function InterestComponent(auth, uploadService) {
        this.auth = auth;
        this.uploadService = uploadService;
        this.favClubs = [];
        this.favNationalTeams = [];
        this.favPlayers = [];
    }
    InterestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
            // console.log(this.details)
        }, function (err) {
            console.error(err);
        });
    };
    InterestComponent.prototype.onSubmit = function (favClub, favPlayer, favNationalTeam) {
        var _this = this;
        var interests = {};
        if (favClub)
            interests.favClub = favClub;
        if (favPlayer)
            interests.favPlayer = favPlayer;
        if (favNationalTeam)
            interests.favNationalTeam = favNationalTeam;
        // console.log(interests);
        this.auth.addInterest(interests).subscribe(function () {
            _this.ngOnInit();
        });
    };
    InterestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-interest',
            template: __webpack_require__("../../../../../src/app/interest/interest.component.html"),
            styles: [__webpack_require__("../../../../../src/app/interest/interest.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__admin_upload_service__["a" /* UploadService */]])
    ], InterestComponent);
    return InterestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-6\">\n      <h1>\n        <a class=\"btn btn-social btn-facebook btn-lg\" href=\"/api/facebook\">\n          <i class=\"fa fa-facebook\"></i> Sign In With Facebook\n        </a>\n      </h1>\n      <h1>\n        <a class=\"btn btn-social btn-gplus btn-lg\" href=\"/api/google\">\n          <i class=\"fa fa-google-plus\"></i> Sign Up With Google\n        </a>\n      </h1>\n      <h1 class=\"form-signin-heading\">Sign in</h1>\n      <p class=\"lead\">Not a member? Please\n        <a routerLink=\"/register\">register</a> instead.</p>\n\n      <form (submit)=\"login()\" #form=\"ngForm\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !credentials.email}\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\" required>\n        </div>\n        <div class=\"form-group \" [ngClass]=\"{'has-error': !credentials.password}\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\" required>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!form.form.valid\">Sign in!</button>\n      </form>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, socketService) {
        this.auth = auth;
        this.router = router;
        this.socketService = socketService;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            _this.socketService.connect();
            // this.router.navigateByUrl('/');
            window.location.href = '/';
        }, function (err) {
            console.error(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__socket_service__["a" /* SocketService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/member-info/member-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member-info/member-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"border: #4aa1f3 2px solid; border-radius: 10px\">\n  <!-- <a [routerLink]=\"['/group-chat', club.name ]\" style=\"text-decoration: none\"> -->\n  <!-- user href instead, otherwise cannot reconnect socket because angular reuse the page-->\n  <a [routerLink]=\"['/overview', user._id]\" style=\"text-decoration: none\">\n    <img class=\"card-img-top\" [src]=\"user.userImage.includes('http')?user.userImage:('https://s3.amazonaws.com/fox-user-pictures/' + user.userImage)\"\n      style=\"display: block;max-width: 100%;  height: auto; border-top-right-radius: 8px;  border-top-left-radius: 8px; border: #4aa1f3 1px solid\">\n    <div class=\"card-body\" style=\"margin-left: 20px \">\n      <h4 class=\"card-title\">{{user.name}}</h4>\n      <p class=\"card-text\">{{user.email}}</p>\n    </div>\n  </a>\n  <div class=\"card-footer\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/member-info/member-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberInfoComponent = /** @class */ (function () {
    function MemberInfoComponent() {
    }
    MemberInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('user'),
        __metadata("design:type", Object)
    ], MemberInfoComponent.prototype, "user", void 0);
    MemberInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'member-info',
            template: __webpack_require__("../../../../../src/app/member-info/member-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/member-info/member-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberInfoComponent);
    return MemberInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/member-list/member-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/member-list/member-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-md-12\">\n    <div class=\"form-group ad-30\" style=\"margin-top:8px;\">\n      <div class=\"input-group search-style\">\n        <input class=\"form-control new-search-bar\" name=\"country\" id=\"search\" placeholder=\"Enter User Name\" type=\"text\" #search>\n        <span class=\"input-group-btn\">\n          <button class=\"btn input-btn\" type=\"\" id=\"search-form\" (click)=\"onSearchClick(search.value)\">Search</button>\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-12\">\n    <div class=\"\">\n      <div class=\"row\">\n\n        <div class=\"col-md-9\">\n          <div class=\"row\">\n            <div *ngFor=\"let user of filteredUserList; let index = index\" style=\"border: blue, 1px, solid\">\n              <div class=\"col-md-9 col-lg-3\">\n                <member-info [user]=\"user\"></member-info>\n                <br>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/member-list/member-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(http) {
        this.http = http;
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/members').subscribe(function (userList) { return _this.filteredUserList = _this.userList = userList; });
    };
    MemberListComponent.prototype.onSearchClick = function (name) {
        if (name)
            this.filteredUserList = this.userList.filter(function (user) { return user.name.toLowerCase().includes(name.toLowerCase()); });
        else
            this.filteredUserList = this.userList;
    };
    MemberListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-member-list',
            template: __webpack_require__("../../../../../src/app/member-list/member-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message-notification/message-notification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar,\r\n.collapse {\r\n  background-color: #4aa1f3 !important;\r\n}\r\n\r\n.navbar-brand:hover {\r\n  color: #ffffff !important;\r\n  background-color: #4aa1f3 !important;\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a {\r\n  color: #ffffff !important;\r\n  background-color: #4aa1f3 !important;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a:hover {\r\n  color: #ffffff !important;\r\n  background-color: #4aa1f3 !important;\r\n}\r\n\r\n.navbar-default .navbar-brand {\r\n  background-color: #4aa1f3 !important;\r\n  color: #ffffff;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-label-icon {\r\n  top: -9px;\r\n  position: relative;\r\n  background: red;\r\n  padding: 2px;\r\n}\r\n\r\n.nav-glyphicon {\r\n  padding-right: 4px;\r\n  position: relative;\r\n  top: 2px;\r\n}\r\n\r\n.dropdown-tag-head {\r\n  color: white;\r\n  padding-top: 7px;\r\n  margin-top: 0px;\r\n  font-size: 17px;\r\n}\r\n\r\n.dmenu {\r\n  padding-top: 0px !important;\r\n}\r\n\r\n.dropdown-tag {\r\n  background: #03A9F4;\r\n  color: white;\r\n  padding: 4px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.navbar-login {\r\n  width: 305px;\r\n  padding-bottom: 30px;\r\n  padding-top: 0px;\r\n  height: 300px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.drop-name {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.dropdown-divider {\r\n  margin-top: 5px !important;\r\n  margin-bottom: 14px !important;\r\n}\r\n\r\n.drop-accept {\r\n  background: #4aa1f3 !important;\r\n  border: #3bb5ec;\r\n  color: white !important;\r\n  text-shadow: none;\r\n}\r\n\r\n#reload{\r\n  padding: 0px 15px 0px 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-notification/message-notification.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n  <span class=\"fa fa-globe \"></span>\n  <b class=\"caret\"></b>\n  <span class=\"label label-primary nav-label-icon\" id=\"\"></span>\n</a>\n<ul class=\"dropdown-menu dmenu\">\n  <li>\n    <div class=\"navbar-login\">\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"dropdown-tag\">\n            <h3 class=\"text-center dropdown-tag-head\">\n              Notifications\n            </h3>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n\n        <a href=\"\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <p class=\"text-center\">\n                <img src=\"https://placehold.it/300x300\" class=\"img-circle img-responsive dropdown-img\" />\n              </p>\n            </div>\n            <div class=\"col-md-9 pleft-0\">\n              <div class=\"row\">\n                <div class=\"col-md-12 textRow\">\n                  <div class=\"col-md-12\" id=\"textRow\">\n                    <p class=\"text-left drop-name\">\n                      <strong>Sender Name</strong>\n                    </p>\n                    Body\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </a>\n        <hr class=\"dropdown-divider\" />\n\n      </div>\n    </div>\n  </li>\n\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/message-notification/message-notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageNotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageNotificationComponent = /** @class */ (function () {
    function MessageNotificationComponent() {
    }
    MessageNotificationComponent.prototype.ngOnInit = function () {
    };
    MessageNotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'message-notification',
            template: __webpack_require__("../../../../../src/app/message-notification/message-notification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message-notification/message-notification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageNotificationComponent);
    return MessageNotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/chat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return User; });
/* unused harmony export Message */
/* unused harmony export PrivateMessage */
/* unused harmony export ChatMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SocketEvent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());

var Message = /** @class */ (function () {
    function Message(from, content, group) {
    }
    return Message;
}());

var PrivateMessage = /** @class */ (function () {
    function PrivateMessage() {
    }
    return PrivateMessage;
}());

var ChatMessage = /** @class */ (function (_super) {
    __extends(ChatMessage, _super);
    function ChatMessage(from, content, group) {
        return _super.call(this, from, content, group) || this;
    }
    return ChatMessage;
}(Message));

var Action;
(function (Action) {
    Action[Action["JOINED"] = 0] = "JOINED";
    Action[Action["LEFT"] = 1] = "LEFT";
    Action[Action["RENAME"] = 2] = "RENAME";
})(Action || (Action = {}));
// Socket.io events
var SocketEvent;
(function (SocketEvent) {
    SocketEvent["CONNECT"] = "connect";
    SocketEvent["DISCONNECT"] = "disconnect";
    SocketEvent["JOIN"] = "join";
    SocketEvent["GROUP_MESSAGE"] = "group message";
    SocketEvent["ONLINE_GROUP_USERS"] = "online group users";
    SocketEvent["FRIEND_REQUEST_SEND"] = "friendRequest send";
    SocketEvent["FRIEND_REQUEST_RECEIVE"] = "friendRequest receive";
    SocketEvent["ONLINE_FRIENDS"] = "online friends";
    SocketEvent["PRIVATE_MESSAGE_RECEIVE"] = "private message receive";
    SocketEvent["PRIVATE_MESSAGE_NOTIFICATION"] = "new private message notification";
})(SocketEvent || (SocketEvent = {}));


/***/ }),

/***/ "../../../../../src/app/models/club.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Club; });
var Club = /** @class */ (function () {
    function Club(receivedObj) {
        this.name = receivedObj['name'];
        this.country = receivedObj['country'];
        this.imageName = receivedObj['image'];
        this.id = receivedObj['_id'];
        this.fans = receivedObj['fans'];
    }
    return Club;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar,\r\n.collapse {\r\n  background-color: #4aa1f3 !important;\r\n}\r\n\r\n.navbar-brand:hover {\r\n  color: #ffffff !important;\r\n  background-color: #4aa1f3 !important;\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a {\r\n  color: #ffffff !important;\r\n  background-color: #4aa1f3 !important;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a:hover {\r\n  color: #ffffff !important;\r\n  background-color: #4aa1f3 !important;\r\n}\r\n\r\n.navbar-default .navbar-brand {\r\n  background-color: #4aa1f3 !important;\r\n  color: #ffffff;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-label-icon {\r\n  top: -9px;\r\n  position: relative;\r\n  background: red;\r\n  padding: 2px;\r\n}\r\n\r\n.nav-glyphicon {\r\n  padding-right: 4px;\r\n  position: relative;\r\n  top: 2px;\r\n}\r\n\r\n.dropdown-tag-head {\r\n  color: white;\r\n  padding-top: 7px;\r\n  margin-top: 0px;\r\n  font-size: 17px;\r\n}\r\n\r\n.dmenu {\r\n  padding-top: 0px !important;\r\n}\r\n\r\n.dropdown-tag {\r\n  background: #03A9F4;\r\n  color: white;\r\n  padding: 4px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.navbar-login {\r\n  width: 305px;\r\n  padding-bottom: 30px;\r\n  padding-top: 0px;\r\n  height: 300px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.drop-name {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.dropdown-divider {\r\n  margin-top: 5px !important;\r\n  margin-bottom: 14px !important;\r\n}\r\n\r\n.drop-accept {\r\n  background: #4aa1f3 !important;\r\n  border: #3bb5ec;\r\n  color: white !important;\r\n  text-shadow: none;\r\n}\r\n\r\n#reload{\r\n  padding: 0px 15px 0px 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/\">MEAN Stack Chat App</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\" id=\"reload\">\n        <li *ngIf=\"auth.isLoggedIn()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <span class=\"glyphicon fa fa-bell nav-glyphicon\"></span>\n            <b class=\"caret\"></b>\n            <span class=\"label label-primary nav-label-icon\" *ngIf=\"totalFriendRequests > 0\">{{totalFriendRequests}}</span>\n          </a>\n\n          <ul class=\"dropdown-menu\">\n            <li>\n              <div class=\"navbar-login\" id=\"requestBar\">\n                <div class=\"col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"dropdown-tag\">\n                      <h3 class=\"text-center dropdown-tag-head\">\n                        Friend Requests\n                      </h3>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <ng-container *ngIf=\"totalFriendRequests > 0; else noRequest\">\n                    <div class=\"row\" *ngFor=\"let sender of requestSenders; let index=index\">\n                      <div class=\"col-md-3\">\n                        <p class=\"text-center\">\n                          <!-- <img src=\"https://placehold.it/300x300\" class=\"img-circle img-responsive dropdown-img\" /> -->\n                          <ng-container *ngIf=\"sender.id.userImage.includes('http'); else noHttp\">\n                            <img [src]=\"sender.id.userImage\" class=\"img-circle img-responsive dropdown-img\">\n                          </ng-container>\n                          <ng-template #noHttp>\n                            <img [src]=\"'https://s3.amazonaws.com/fox-user-pictures/' + sender.id.userImage\" class=\"img-circle img-responsive dropdown-img\">\n                          </ng-template>\n                        </p>\n                      </div>\n                      <div class=\"col-md-9 pleft-0\">\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <div class=\"col-md-12\">\n                              <p class=\"text-left\">\n                                <strong id=\"\">{{sender.name}}</strong>\n                              </p>\n                            </div>\n                            <div class=\"col-md-12\">\n                              <div class=\"row\">\n                                <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                  <button type=\"submit\" name=\"accept\" id=\"accept_friend\" class=\"btn btn-default drop-accept accept\" (click)=\"acceptFriendRequest(sender.id._id,sender.name)\">\n                                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Accept</button>\n                                </div>\n                                <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                  <button type=\"submit\" name=\"cancel\" class=\"btn drop-cancel remove\" id=\"cancel_friend\" (click)=\"cancelFriendRequest(sender.id._id,sender.name)\">\n                                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Cancel\n                                  </button>\n                                </div>\n                              </div>\n                            </div>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <hr />\n                  </ng-container>\n                  <ng-template #noRequest>\n                    <p class=\"text-center\">No Friend Request</p>\n                  </ng-template>\n                </div>\n              </div>\n            </li>\n\n          </ul>\n        </li>\n\n        <!-- /**\n        * *************************Unread messages************************************\n        */ -->\n        <li *ngIf=\"auth.isLoggedIn()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <span class=\"fa fa-globe \"></span>\n            <b class=\"caret\"></b>\n            <span class=\"label label-primary nav-label-icon\" id=\"\" *ngIf=\"unreadCount > 0\">{{unreadCount}}</span>\n          </a>\n          <ul class=\"dropdown-menu dmenu\">\n            <li>\n              <div class=\"navbar-login\">\n                <div class=\"col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"dropdown-tag\">\n                      <h3 class=\"text-center dropdown-tag-head\">\n                        Notifications\n                      </h3>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <ng-container *ngFor=\"let newMessage of newMessages\">\n                    <a (click)=\"readLastMessage(newMessage)\" style=\"cursor: pointer;\">\n                      <!-- <a [href]=\"'private-chat/' + unreadMsg.senderId +'.' + unreadMsg.receiverId + '?receiverName=' + unreadMsg.senderName\" (click)=\"readLastMessage(unreadMsg._id)\"> -->\n                      <!-- <a [routerLink]=\"['private-chat/', unreadMsg.senderId +'.' + unreadMsg.receiverId]\" [queryParams]=\"{receiverName: unreadMsg.senderName}\"> -->\n                      <div class=\"row\">\n                        <div class=\"col-md-3\">\n                          <p class=\"text-center\">\n                            <!-- <img src=\"https://placehold.it/300x300\" class=\"img-circle img-responsive dropdown-img\" /> -->\n                            <ng-container *ngIf=\"newMessage.userImage.includes('http'); else noHttp\">\n                              <img [src]=\"newMessage.userImage\" class=\"img-circle img-responsive dropdown-img\">\n                            </ng-container>\n                            <ng-template #noHttp>\n                              <img [src]=\"'https://s3.amazonaws.com/fox-user-pictures/' + newMessage.userImage\" class=\"img-circle img-responsive dropdown-img\">\n                            </ng-template>\n                          </p>\n                        </div>\n                        <div class=\"col-md-9 pleft-0\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12 textRow\">\n                              <div class=\"col-md-12\" id=\"textRow\">\n                                <p class=\"text-left drop-name\">\n                                  <strong *ngIf=\"!newMessage.isRead;else readName\">{{newMessage.senderName}}</strong>\n                                  <ng-template #readName>{{newMessage.senderName}}</ng-template>\n                                </p>\n                                <strong *ngIf=\"!newMessage.isRead;else readMsg\">{{newMessage.message}}</strong>\n                                <ng-template #readMsg>{{newMessage.message}}</ng-template>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </a>\n                    <hr class=\"dropdown-divider\" />\n                  </ng-container>\n                </div>\n              </div>\n            </li>\n\n          </ul>\n\n        </li>\n        <!-- /**\n        * *************************Unread messages END************************************\n        */ -->\n\n\n        <li *ngIf=\"auth.isLoggedIn()\">\n          <a routerLink=\"/news\">News</a>\n        </li>\n        <li *ngIf=\"auth.isLoggedIn()\">\n          <a routerLink=\"/members\">Members</a>\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{auth.getUserDetails()?.name}}\n            <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li *ngIf=\"auth.isLoggedIn()\">\n              <a routerLink=\"/setting/profile\">{{ auth.getUserDetails()?.name }}'s profile</a>\n            </li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li *ngIf=\"auth.isLoggedIn() && auth.isAdmin()\">\n              <a routerLink=\"/dashboard\">Dashboard</a>\n            </li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li *ngIf=\"auth.isLoggedIn()\">\n              <a (click)=\"auth.logout()\">\n                <span class=\"fa fa-sign-out\"></span>Logout</a>\n            </li>\n            <li *ngIf=\"!auth.isLoggedIn()\">\n              <a routerLink=\"/login\">\n                <span class=\"fa fa-sign-in\"></span>Sign in</a>\n            </li>\n            <li *ngIf=\"!auth.isLoggedIn()\">\n              <a routerLink=\"/register\">\n                <span class=\"fa fa-registered\"></span>Sign up</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_service__ = __webpack_require__("../../../../../src/app/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friend_request_service__ = __webpack_require__("../../../../../src/app/friend-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_chat__ = __webpack_require__("../../../../../src/app/models/chat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__private_chat_service__ = __webpack_require__("../../../../../src/app/private-chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, notificationService, friendRequestService, socketService, router, privateChatService) {
        var _this = this;
        this.auth = auth;
        this.notificationService = notificationService;
        this.friendRequestService = friendRequestService;
        this.socketService = socketService;
        this.router = router;
        this.privateChatService = privateChatService;
        this.newMessages = [];
        this.unreadCount = 0;
        this.userDetails = this.auth.getUserDetails();
        if (this.userDetails) {
            this.socketService.connect();
            router.events.subscribe(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* NavigationEnd */]) {
                    _this.url = event.url;
                    // if not in the chat pages, emit join global group
                    if (_this.url.indexOf('chat') < 0) {
                        var group = 'GlobalGroup';
                        var name_1 = _this.userDetails.name;
                        var img = _this.userDetails.img;
                        var id = _this.userDetails._id;
                        _this.socketService.emit('global group', { group: group, name: name_1, img: img, id: id });
                    }
                }
            });
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userDetails) {
            this.sub1 = this.notificationService.getLoginUserInfo(this.userDetails._id).subscribe(function (user) {
                _this.totalFriendRequests = user['totalRequest'];
                _this.requestSenders = user['request'];
                // console.log('requestSenders', this.requestSenders);
            });
            this.sub2 = this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_7__models_chat__["b" /* SocketEvent */].FRIEND_REQUEST_RECEIVE)
                .switchMap(function () { return _this.notificationService.getLoginUserInfo(_this.userDetails._id); })
                .subscribe(function (user) {
                _this.totalFriendRequests = user['totalRequest'];
                _this.requestSenders = user['request'];
                // console.log('requestSenders', this.requestSenders);
            });
            this.loadUnreadMessages();
            this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_7__models_chat__["b" /* SocketEvent */].PRIVATE_MESSAGE_NOTIFICATION).subscribe(function () {
                _this.loadUnreadMessages();
            });
            this.socketService.emit('joinNotificationList', this.userDetails.name);
        }
    };
    NavbarComponent.prototype.loadUnreadMessages = function () {
        var _this = this;
        this.unreadCount = 0;
        if (this.auth.getUserDetails()) {
            this.privateChatService.loadUnreadMessages(this.auth.getUserDetails()._id)
                .subscribe(function (latestMessages) {
                if (latestMessages && _this.url && _this.url.split('/')[2]) {
                    // console.log('latestMsgs', latestMessages);
                    // console.log('url', this.url);
                    var ids = _this.url.split('/')[2].split('?')[0].split('.');
                    var receiverId_1 = ids[1];
                    var senderId_1 = ids[0];
                    latestMessages.forEach(function (msg) {
                        if (!msg.isRead) {
                            if (msg.receiverId === receiverId_1 && msg.senderId === senderId_1) {
                                _this.changeReadStatus(msg._id).subscribe(function () { return console.log('yes'); });
                            }
                            else {
                                _this.unreadCount = _this.unreadCount + 1;
                            }
                        }
                    });
                }
                else {
                    latestMessages.forEach(function (msg) {
                        if (!msg.isRead) {
                            _this.unreadCount = _this.unreadCount + 1;
                        }
                    });
                }
                _this.newMessages = _this.reorder(latestMessages);
                // console.log('newMsgs', this.newMessages);
                // console.log('count', this.unreadCount);
            });
        }
    };
    NavbarComponent.prototype.reorder = function (latestMessages) {
        var newMessages = [];
        latestMessages.forEach(function (msg) {
            if (!msg.isRead)
                newMessages.push(msg);
        });
        latestMessages.forEach(function (msg) {
            if (msg.isRead)
                newMessages.push(msg);
        });
        return newMessages;
    };
    NavbarComponent.prototype.readLastMessage = function (lastUnreadMsg) {
        this.changeReadStatus(lastUnreadMsg._id).subscribe(function () {
            // force reload, then trigger the ngOnInit life hook again
            window.location.href = 'private-chat/' + lastUnreadMsg.senderId + '.' + lastUnreadMsg.receiverId + '?receiverName=' + lastUnreadMsg.senderName;
        });
    };
    NavbarComponent.prototype.changeReadStatus = function (lastUnreadMsgId) {
        return this.privateChatService.changeReadStatus(lastUnreadMsgId);
    };
    NavbarComponent.prototype.acceptFriendRequest = function (senderId, senderName) {
        var _this = this;
        this.friendRequestService.accetpFriendRequest(senderId, senderName).subscribe(function () {
            _this.updateRequestSenders(senderId);
            _this.socketService.emit('global group', { group: 'GlobalGroup' });
        });
    };
    NavbarComponent.prototype.cancelFriendRequest = function (senderId, senderName) {
        var _this = this;
        this.friendRequestService.cancelFriendRequest(senderId, senderName).subscribe(function () {
            _this.updateRequestSenders(senderId);
        });
    };
    NavbarComponent.prototype.updateRequestSenders = function (senderId) {
        for (var i = 0; i < this.requestSenders.length; i++) {
            if (this.requestSenders[i]._Id === senderId) {
                this.requestSenders.splice(i, 1);
                break;
            }
        }
        this.totalFriendRequests--;
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_3__friend_request_service__["a" /* FriendRequestService */],
            __WEBPACK_IMPORTED_MODULE_5__socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8__private_chat_service__["a" /* PrivateChatService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
    }
    NewsService.prototype.getNews = function (page) {
        return this.http.get("https://content.guardianapis.com/football?order-by=newest&show-fields=all&page=" + page + "&api-key=aeaa2d7f-f449-4b25-8904-8909cbedfc97")
            .map(function (data) {
            // console.log('data', data)
            return data['response']['results'];
        });
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".news-mainhead {\r\n  color: #4aa1f3;\r\n  margin-bottom: 20px;\r\n  font-size: 32px;\r\n}\r\n\r\n.news-bottom {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.news-post {\r\n  background-color: white;\r\n  padding: 20px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.news-date{\r\n    color: #333333 !important;\r\n}\r\n\r\n.news-text{\r\n    font-size: 18px;\r\n    color: #333333 !important;\r\n}\r\n\r\n.top{\r\n    text-decoration: none;\r\n    color: #4aa1f3;\r\n    cursor: pointer;\r\n}\r\n\r\n.loadMore{\r\n    padding: 10px;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    background-color: #4aa1f3;\r\n    color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-md-12\">\n    <div class=\"col-md-12\">\n      <h1 class=\"news-mainhead\">Latest News</h1>\n    </div>\n    <div class=\"col-md-12 col-sm-12 news-bottom\" *ngFor=\"let news of newsList\">\n      <div class=\"col-md-12 news-post\">\n        <div class=\"row\">\n          <a [href]=\"news.webUrl\" target=\"_blank\" style=\"color: #4aa1f3; text-decoration: none;\">\n            <div class=\"col-md-3\">\n              <img [src]=\"news.fields.thumbnail\" class=\"img-responsive\">\n            </div>\n            <div class=\"col-md-9\">\n              <h5 class=\"news-date\">{{news.webPublicationDate | date: 'dd/MM/yyyy'}}</h5>\n              <h4>{{news.webTitle}}</h4>\n              <p [innerHTML]=\"news.fields.standfirst\" class=\"news-text\"></p>\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <button (click)=\"loadMore()\" class=\"loadMore btn btn-block\">Load More</button>\n      <p>\n        <a (click)=\"scrollToTop()\" class=\"top\">Back to top</a>\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("../../../../../src/app/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = /** @class */ (function () {
    function NewsComponent(newsService) {
        this.newsService = newsService;
        this.newsList = [];
        this.page = 1;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getNews(this.page).subscribe(function (newsList) {
            for (var _i = 0, newsList_1 = newsList; _i < newsList_1.length; _i++) {
                var news = newsList_1[_i];
                _this.newsList.push(news);
            }
        });
    };
    NewsComponent.prototype.loadMore = function () {
        var _this = this;
        this.page++;
        this.newsService.getNews(this.page).subscribe(function (newsList) {
            for (var _i = 0, newsList_2 = newsList; _i < newsList_2.length; _i++) {
                var news = newsList_2[_i];
                _this.newsList.push(news);
            }
        });
    };
    NewsComponent.prototype.scrollToTop = function () {
        // window.scrollTo(0,0)
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationService = /** @class */ (function () {
    function NotificationService(http, socketService) {
        this.http = http;
        this.socketService = socketService;
        this.socket = socketService.socket;
    }
    NotificationService.prototype.getLoginUserInfo = function (userId) {
        return this.http.get('api/group/getUser/' + userId);
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "../../../../../src/app/private-chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivateChatService = /** @class */ (function () {
    function PrivateChatService(http) {
        this.http = http;
    }
    PrivateChatService.prototype.getAllPrivateMessages = function (senderId, receiverId) {
        return this.http.get('api/private-chat/getAllMessages/', { params: { senderId: senderId, receiverId: receiverId } })
            .map(function (messages) { return messages.map(function (message) {
            return { from: { id: message.senderId, name: message.senderName, image: message.userImage }, content: message.message };
        }); });
    };
    PrivateChatService.prototype.sendMessage = function (privateMessage) {
        this.http.post('api/private-chat', privateMessage).subscribe();
    };
    PrivateChatService.prototype.changeReadStatus = function (lastUnreadMsgId) {
        return this.http.post('api/private-chat/readLastMessage/', { lastUnreadMessageId: lastUnreadMsgId });
    };
    PrivateChatService.prototype.loadUnreadMessages = function (userId) {
        return this.http.get('/api/private-chat/getUnreadMessages/' + userId)
            .map(function (result) { return result.map(function (obj) { return obj['latest-message']; }); });
    };
    PrivateChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PrivateChatService);
    return PrivateChatService;
}());



/***/ }),

/***/ "../../../../../src/app/private-chat/private-chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin-80 {\r\n    margin-bottom: 80px\r\n  }\r\n  \r\n  .new_message_head button {\r\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n    border: medium none;\r\n    outline: 0;\r\n    font-size: 17px;\r\n    color: #4aa1f3;\r\n  }\r\n  \r\n  .new_message_head button:focus {\r\n    outline: 0 !important;\r\n  }\r\n  \r\n  .new_message_head {\r\n    background: white none repeat scroll 0 0;\r\n    float: left;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    padding: 18px 10px;\r\n    width: 100%;\r\n    border: 1px solid rgba(128, 128, 128, 0.32);\r\n  }\r\n  \r\n  .message_section {\r\n    border: 1px solid #dddddd;\r\n  }\r\n  \r\n  .chat_area {\r\n    background: white;\r\n    float: left;\r\n    height: 360px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n    width: 100%;\r\n    border-left: 1px solid rgba(128, 128, 128, 0.32);\r\n    border-bottom: 1px solid rgba(128, 128, 128, 0.32);\r\n    border-right: 1px solid rgba(128, 128, 128, 0.32);\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    -ms-word-break: break-all;\r\n    word-break: break-all;\r\n    word-break: break-word;\r\n    -ms-hyphens: auto;\r\n    -webkit-hyphens: auto;\r\n    hyphens: auto;\r\n  }\r\n  \r\n  .chat_area li {\r\n    padding: 14px 14px 0;\r\n  }\r\n  \r\n  .chat_area li .chat-img1 img {\r\n    height: 40px;\r\n    width: 40px;\r\n  }\r\n  \r\n  .chat_area .chat-body1 {\r\n    margin-left: 50px;\r\n  }\r\n  \r\n  .chat_area li:last-child {\r\n    padding-bottom: 10px;\r\n  }\r\n  \r\n  .chat-name{\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n    color: #4aa1f3;\r\n  }\r\n  \r\n  .message_write {\r\n    background: white none repeat scroll 0 0;\r\n    float: left;\r\n    padding: 15px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .message_write textarea.form-control {\r\n    height: 70px;\r\n    padding: 10px;\r\n  }\r\n  \r\n  .chat_bottom {\r\n    float: left;\r\n    margin-top: 13px;\r\n    width: 100%;\r\n  }\r\n  \r\n  member_list li:hover {\r\n    background: #428bca none repeat scroll 0 0;\r\n    color: #fff;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .friends {\r\n    font-size: 18px;\r\n    color: gray;\r\n  }\r\n  \r\n  .btn:hover,\r\n  .btn:focus,\r\n  .btn:active {\r\n    outline: 0 !important;\r\n  }\r\n  \r\n  .card-container {\r\n    -webkit-perspective: 800px;\r\n    -o-perspective: 800px;\r\n    perspective: 800px;\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .card {\r\n    background: none repeat scroll 0 0 #FFFFFF;\r\n    border-radius: 4px;\r\n    color: #444444;\r\n  }\r\n  \r\n  .card-container,\r\n  .front,\r\n  .back {\r\n    width: 100%;\r\n    border-radius: 4px;\r\n    -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n    box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n  }\r\n  \r\n  .card .cover {\r\n    height: 105px;\r\n    overflow: hidden;\r\n    border-radius: 4px 4px 0 0;\r\n  }\r\n  \r\n  .card .cover img {\r\n    width: 100%;\r\n  }\r\n  \r\n  .card .user {\r\n    border-radius: 50%;\r\n    display: block;\r\n    height: 120px;\r\n    margin: -55px auto 0;\r\n    overflow: hidden;\r\n    width: 120px;\r\n  }\r\n  \r\n  .card .user img {\r\n    background: none repeat scroll 0 0 #FFFFFF;\r\n    border: 4px solid #FFFFFF;\r\n    width: 100%;\r\n  }\r\n  \r\n  .card .content {\r\n    background-color: rgba(0, 0, 0, 0);\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    padding: 10px 20px 20px;\r\n  }\r\n  \r\n  .card .main {\r\n    min-height: 160px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n  }\r\n  \r\n  .card .back .content .main {\r\n    height: 215px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n  }\r\n  \r\n  .card .name {\r\n    font-family: 'Arima Madurai', cursive;\r\n    font-size: 22px;\r\n    line-height: 28px;\r\n    margin: 10px 0 0;\r\n    text-align: center;\r\n  }\r\n  \r\n  .card .profession-online {\r\n    color: #999999;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .online {\r\n    font-size: 10px;\r\n    color: rgba(129, 191, 57, 0.95);\r\n    position: relative;\r\n    top: -2px;\r\n  }\r\n  \r\n  .offline {\r\n    font-size: 10px;\r\n    color: grey;\r\n    position: relative;\r\n    top: -2px;\r\n  }\r\n  \r\n  .card .footer {\r\n    border-top: 1px solid #EEEEEE;\r\n    color: #999999;\r\n    margin: 30px 0 0;\r\n    padding: 10px 0 0;\r\n    text-align: center;\r\n  }\r\n  \r\n  .main-scroll {\r\n    height: 300px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n  }\r\n  \r\n  .online_friend {\r\n    font-size: 10px;\r\n    color: rgba(129, 191, 57, 0.95);\r\n    position: relative;\r\n    float: right;\r\n  }\r\n  \r\n  .name,\r\n  .friends,\r\n  #numOfFriends,\r\n  .club_name,\r\n  .club_fans {\r\n    color: #4aa1f3 !important;\r\n  }\r\n  \r\n  .bl {\r\n    color: #03a9f4;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .gr-rightsidebar {\r\n    padding-top: 15px;\r\n    background: white;\r\n    float: left;\r\n    height: 506px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    width: 100%;\r\n    border-left: 1px solid rgba(128, 128, 128, 0.32);\r\n    border-bottom: 1px solid rgba(128, 128, 128, 0.32);\r\n    border-right: 1px solid rgba(128, 128, 128, 0.32);\r\n  }\r\n  \r\n  .modal {\r\n    display: none;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgb(0,0,0);\r\n    background-color: rgba(0,0,0,0.4);\r\n  }\r\n  \r\n  .modal-title{\r\n    color: #4aa1f3;\r\n  }\r\n  \r\n  #nameLink, .btn_close{\r\n    background-color: #4aa1f3 !important;\r\n    color: white !important;\r\n  }\r\n  \r\n  .modal-body{\r\n    text-align: center;\r\n  }\r\n  \r\n  .modal-content {\r\n    background-color: #fefefe;\r\n    margin: 15% auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 100%;\r\n  }\r\n  \r\n  .modal-footer {\r\n    padding-top: 15px;\r\n  }\r\n  \r\n  .val{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    color: #4aa1f3;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/private-chat/private-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 mob-clearfix margin-80\">\n\n  <div class=\"col-md-12\">\n    <div class=\"chat_container\">\n      <div class=\"row\">\n\n        <div class=\"col-sm-4 col-md-3\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"card-container\">\n                <div class=\"card\">\n                  <div class=\"front\">\n                    <div class=\"cover\">\n                    </div>\n                    <div class=\"user cover-img\">\n                      <!-- <img class=\"img-circle\" src=\"https://placehold.it/500x500\" /> -->\n\n                      <ng-container *ngIf=\"senderImage.includes('http'); else noHttp\">\n                        <img [src]=\"senderImage\" class=\"img-circle\">\n                      </ng-container>\n                      <ng-template #noHttp>\n                        <img [src]=\"'https://s3.amazonaws.com/fox-user-pictures/' + senderImage\" class=\"img-circle\">\n                      </ng-template>\n\n                    </div>\n                    <div class=\"content\">\n                      <div class=\"main\">\n                        <h3 class=\"name\">\n                          {{user.name}}\n                        </h3>\n                        <p class=\"profession-online\">\n                          <i class=\"fa fa-circle\" [ngClass]=\"{'online': isOnline, 'offline':!isOnline}\" aria-hidden=\"true\"></i>\n                          <ng-container *ngIf=\"isOnline; else offline\">Online</ng-container>\n                          <ng-template #offline>Offline</ng-template>\n                        </p>\n                        <p class=\"text-center\">\n                          {{user.mantra}}\n                        </p>\n                      </div>\n                      <div class=\"footer\">\n                        <i class=\"fa fa-mail-forward\"></i>\n                        <a (click)=\"navigateToMyProfile()\" style=\"color:#999999; text-decoration:none;font-weight:normal; font-size:16px; cursor: pointer\"\n                          id=\"user-name\">\n                          View Profile\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"margin-top:10px\">\n            <div class=\"col-md-12\">\n              <div class=\"card-container\">\n                <div class=\"card\">\n                  <div class=\"front\">\n\n                    <div class=\"content main-scroll\">\n                      <div class=\"main\">\n                        <p class=\"friends\" style=\"margin-bottom:0px;color:#444\">\n                          Online Friends\n                          <span id=\"numOfFriends\">({{onlineFriendsList.length}})</span>\n                        </p>\n                        <hr style=\"margin-top:10px\" />\n\n                        <div class=\"onlineFriends\">\n                          <div *ngFor=\"let onlineFriend of onlineFriendsList\">\n                            <ng-container *ngIf=\"onlineFriend.img.includes('http'); else noHttp\">\n                              <img [src]=\"onlineFriend.img\" class=\"pull-left img-circle\" style=\"width: 30px; margin-right: 10px;\">\n                            </ng-container>\n                            <ng-template #noHttp>\n                              <img [src]=\"'https://s3.amazonaws.com/fox-user-pictures/' + onlineFriend.img\" class=\"pull-left img-circle\" style=\"width: 30px; margin-right: 10px;\">\n                            </ng-template>\n                            <!-- <img [src]=\"'https://placehold.it/30*30'\" class=\"pull-left img-circle\" style=\"width: 50px; margin-right: 10px;\"> -->\n                            <p>\n                              <a class=\"val\" [routerLink]=\"['/private-chat', onlineFriend['id']+'.'+auth.getUserDetails()._id]\" [queryParams]=\"{receiverName: onlineFriend['name']}\">\n                                <h3 style=\"padding-top: 15px; font-size: 14px\">@{{onlineFriend['name']}}\n                                  <i class=\"fa fa-circle pull-right\" aria-hidden=\"true\" [ngClass]=\"{'online': isOnline, 'offline':!isOnline}\"></i>\n                                </h3>\n                              </a>\n                            </p>\n                          </div>\n                        </div>\n\n                      </div>\n\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <!--chat_sidebar-->\n        <div class=\"col-sm-8 col-md-9 message_section assign-width\">\n          <div class=\"row\">\n            <div class=\"new_message_head\">\n              <div class=\"pull-left\">\n                <button>\n                  <i class=\"\" aria-hidden=\"true\"></i>\n                  @{{receiverName}}\n                </button>\n              </div>\n              <div class=\"pull-right\">\n\n              </div>\n            </div>\n\n            <div class=\"chat_area\" #messageDiv>\n              <ul id=\"messages\" class=\"list-unstyled\" >\n                <li class=\"left clearfix\" *ngFor=\"let message of messages\" #messageList>\n                  <span class=\"chat-img1 pull-left\">\n                    <!-- <img src=\"https://placehold.it/300x300\" class=\"img-circle\" /> -->\n                    <ng-container *ngIf=\"message.from.image.includes('http'); else noHttp\">\n                      <img [src]=\"message.from.image\" class=\"img-circle\">\n                    </ng-container>\n                    <ng-template #noHttp>\n                      <img [src]=\"'https://s3.amazonaws.com/fox-user-pictures/' + message.from.image\" class=\"img-circle\">\n                    </ng-template>\n                  </span>\n                  <div class=\"chat-body1 clearfix\">\n                    <p>\n                      <span class=\"chat-name\">{{message.from.name}}</span>\n                      <br /> {{message.content}}\n                    </p>\n                  </div>\n                </li>\n              </ul>\n              <!-- </ul> -->\n            </div>\n            <!--chat_area-->\n            <div class=\"message_write\">\n              <textarea class=\"form-control\" name=\"message\" id=\"msg\" placeholder=\"Type a message\" [(ngModel)]=\"messageContent\"></textarea>\n              <div class=\"clearfix\"></div>\n              <div class=\"chat_bottom\">\n                <button id=\"chatMessage\" class=\"pull-right btn btn-primary\" style=\"background: #4aa1f3; border: #4aa1f3;\" (click)=\"sendMessage()\"\n                  [disabled]=\"!messageContent\">\n                  Send\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/private-chat/private-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_chat__ = __webpack_require__("../../../../../src/app/models/chat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__private_chat_service__ = __webpack_require__("../../../../../src/app/private-chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__socket_service__ = __webpack_require__("../../../../../src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__friend_request_service__ = __webpack_require__("../../../../../src/app/friend-request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PrivateChatComponent = /** @class */ (function () {
    function PrivateChatComponent(route, socketService, auth, http, privateChatService, friendRequestService) {
        this.route = route;
        this.socketService = socketService;
        this.auth = auth;
        this.http = http;
        this.privateChatService = privateChatService;
        this.friendRequestService = friendRequestService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_chat__["c" /* User */]('');
        this.messages = [];
        this.onlineFriendsList = [];
        this.isOnline = false;
        var details = this.auth.getUserDetails();
        this.user.name = details.name;
        this.user.id = details._id;
        this.user.mantra = details.mantra;
        this.user.image = details.img;
        this.senderImage = details.img;
        this.socketService.connect();
    }
    Object.defineProperty(PrivateChatComponent.prototype, "message", {
        get: function () {
            return {
                from: this.user,
                content: this.messageContent.trim(),
                group: this.group
            };
        },
        enumerable: true,
        configurable: true
    });
    PrivateChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.receiverName = this.route.snapshot.queryParams['receiverName'];
        var room1 = this.route.snapshot.params['id'];
        this.group = room1;
        var arr = room1.split('.');
        this.receiverId = arr[0];
        var room2 = arr[1] + '.' + arr[0];
        // this.socket.on('connect', () => {
        // friend list
        var userDetails = this.auth.getUserDetails();
        var group = 'GlobalGroup';
        var name = userDetails.name;
        var img = userDetails.img;
        var id = userDetails._id;
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_4__models_chat__["b" /* SocketEvent */].CONNECT)
            .subscribe(function () {
            _this.isOnline = true;
        });
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_4__models_chat__["b" /* SocketEvent */].DISCONNECT)
            .subscribe(function () {
            _this.isOnline = false;
        });
        this.socketService.emit('global group', { group: group, name: name, img: img, id: id });
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_4__models_chat__["b" /* SocketEvent */].ONLINE_FRIENDS).subscribe(function (onlineUsers) {
            _this.friendRequestService.getFriendList(_this.user.id).subscribe(function (friendList) {
                _this.onlineFriendsList = [];
                onlineUsers.forEach(function (user) {
                    for (var _i = 0, _a = friendList; _i < _a.length; _i++) {
                        var friend = _a[_i];
                        if (friend.id == user.id) {
                            _this.onlineFriendsList.push(user);
                            break;
                        }
                    }
                });
            });
        });
        this.privateChatService.getAllPrivateMessages(this.user.id, this.receiverId).subscribe(function (messages) {
            // console.log(messages);
            _this.messages = messages;
        });
        this.socketService.emit('private-room', { room1: room1, room2: room2 });
        this.socketService.onEvent(__WEBPACK_IMPORTED_MODULE_4__models_chat__["b" /* SocketEvent */].PRIVATE_MESSAGE_RECEIVE).subscribe(function (message) { return _this.messages.push(message); });
        // });
    };
    PrivateChatComponent.prototype.sendMessage = function () {
        // save to the database
        var privateMessage = { from: this.user, to: { id: this.receiverId, name: this.receiverName }, group: this.group, content: this.messageContent, senderImage: this.senderImage };
        this.privateChatService.sendMessage(privateMessage);
        // directly send to friend
        this.socketService.emit('private message send', this.message);
        this.messageContent = '';
    };
    PrivateChatComponent.prototype.navigateToMyProfile = function () {
        window.open('/setting/profile');
    };
    PrivateChatComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.messageList.changes.subscribe(function () {
            _this.scrollToBottom();
        });
    };
    PrivateChatComponent.prototype.scrollToBottom = function () {
        try {
            this.messageDiv.nativeElement.scrollTop = this.messageDiv.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_10" /* ViewChildren */])('messageList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["U" /* QueryList */])
    ], PrivateChatComponent.prototype, "messageList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('messageDiv'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */])
    ], PrivateChatComponent.prototype, "messageDiv", void 0);
    PrivateChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-private-chat',
            template: __webpack_require__("../../../../../src/app/private-chat/private-chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/private-chat/private-chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__private_chat_service__["a" /* PrivateChatService */],
            __WEBPACK_IMPORTED_MODULE_7__friend_request_service__["a" /* FriendRequestService */]])
    ], PrivateChatComponent);
    return PrivateChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-sidebar {\r\n  padding: 20px 0 10px 0;\r\n  background: #fff;\r\n  -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n}\r\n\r\n.profile-userpic img {\r\n  float: none;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50% !important;\r\n}\r\n\r\n.profile-usertitle {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.profile-usertitle-name {\r\n  color: #5a7391;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.profile-usertitle-job {\r\n  text-transform: lowercase;\r\n  color: #4aa1f3;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.profile-usermenu {\r\n  margin-top: 30px;\r\n}\r\n\r\n.profile-usermenu ul li {\r\n  border-bottom: 1px solid #f0f4f7;\r\n}\r\n\r\n.profile-usermenu ul li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.profile-usermenu ul li a {\r\n  color: #93a3b5;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\n.profile-usermenu ul li a i {\r\n  margin-right: 8px;\r\n  font-size: 14px;\r\n}\r\n\r\n.profile-usermenu ul li a:hover {\r\n  background-color: #fafcfd;\r\n  color: #5b9bd1;\r\n}\r\n\r\n.profile-usermenu ul li.active {\r\n  border-bottom: none;\r\n}\r\n\r\n.profile-usermenu ul li.active a {\r\n  color: #5b9bd1;\r\n  background-color: #f6f9fb;\r\n  border-left: 2px solid #5b9bd1;\r\n  margin-left: -2px;\r\n}\r\n\r\n.profile-signup {\r\n  background: white;\r\n  padding: 30px;\r\n  -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n}\r\n\r\n.profile-signup .form .form-control {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.save-profile-btn {\r\n  background: #03A9F4;\r\n  border: #3bb5ec;\r\n  width: 100%;\r\n  text-shadow: none;\r\n  color: white;\r\n  margin-top: 40px;\r\n}\r\n\r\n.profile-settings-friends {\r\n  background: white;\r\n  padding: 30px;\r\n  -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n}\r\n\r\n.img-user {\r\n  width: 90%;\r\n  margin-left: 5%;\r\n  \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 mob-clearfix margin-80\">\n\n  <div class=\"col-md-12\">\n    <div class=\"chat_container\">\n      <div class=\"row\">\n        <!-- LEFT -->\n\n        <div class=\"col-sm-4 col-md-3\">\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"profile-sidebar\">\n                <div class=\"img-container\">\n                  <ng-container *ngIf=\"details\">\n                    <ng-container *ngIf=\"details.userImage.includes('http'); else noHttp\">\n                      <img [src]=\"details.userImage\" class=\"img-responsive img-user\">\n                    </ng-container>\n                    <ng-template #noHttp>\n                      <img [src]=\"'https://s3.amazonaws.com/fox-user-pictures/' + details.userImage\" class=\"img-responsive img-user\">\n                    </ng-template>\n                  </ng-container>\n                </div>\n\n                <div class=\"profile-usertitle\">\n                  <div class=\"profile-usertitle-name\">\n                    {{details?.fullName}}\n                  </div>\n                  <div class=\"profile-usertitle-job\">\n                    @{{details?.name}}\n                  </div>\n                </div>\n\n                <div class=\"profile-usermenu\">\n                  <ul class=\"nav\">\n                    <li>\n                      <a [routerLink]=\"['/overview', auth.getUserDetails()._id]\" style=\"color:#4aa1f3 !important\">\n                        <i class=\"fa fa-home\" style=\"color:#4aa1f3 !important\"></i>\n                        Overview\n                      </a>\n                    </li>\n                    <li class=\"active\">\n                      <a routerLink=\"/setting/profile\" style=\"color:#4aa1f3 !important\">\n                        <i class=\"fa fa-user\" style=\"color:#4aa1f3 !important\"></i>\n                        Profile\n                      </a>\n                    </li>\n                    <li>\n                      <a routerLink=\"/setting/interest\" style=\"color:#4aa1f3 !important\">\n                        <i class=\"fa fa-check\" style=\"color:#4aa1f3 !important\"></i>\n                        Interests\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n\n\n        </div>\n\n\n        <!--MIDDLE-->\n        <div class=\"col-sm-5 col-md-6 mob-50\">\n\n          <div class=\"profile-signup\">\n\n            <form class=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\n              <h3 style=\"margin-top:0px; color:#4aa1f3 !important\">Personal Information</h3>\n              <hr />\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <input id=\"username\" class=\"form-control input-lg\" formControlName=\"username\" type=\"text\" placeholder=\"Username\" [ngModel]=\"details?.name\">\n                </div>\n                <div class=\"col-md-12\">\n                  <input id=\"fullName\" class=\"form-control input-lg\" formControlName=\"fullName\" type=\"text\" placeholder=\"Fullname\" [ngModel]=\"details?.fullName\">\n                </div>\n                <div class=\"col-md-12\">\n                  <input id=\"country\" class=\"form-control input-lg\" formControlName=\"country\" type=\"text\" placeholder=\"Country\" [ngModel]=\"details?.country\">\n                </div>\n\n              </div>\n              <label style=\"color:#4aa1f3 !important\">Gender : </label>\n              <label style=\"color:#4aa1f3 !important; margin-right:65px;\"></label>\n              <label class=\"radio-inline\">\n                <input type=\"radio\" formControlName=\"gender\" value=\"Male\" id=\"gender\" [ngModel]=\"details?.gender\" /> Male\n              </label>\n              <label class=\"radio-inline\">\n                <input type=\"radio\" formControlName=\"gender\" value=\"Female\" id=\"gender\" [ngModel]=\"details?.gender\" /> Female\n              </label>\n\n\n              <div class=\"\" style=\"margin-top:20px\">\n                <label style=\"color:#4aa1f3 !important\">Mantra</label>\n                <br>\n                <textarea formControlName=\"mantra\" id=\"mantra\" class=\"form-control input-lg\" rows=\"5\" placeholder=\"A one liner sentence\"\n                  [ngModel]=\"details?.mantra\"></textarea>\n              </div>\n\n              <label style=\"color:#4aa1f3 !important\">Club You Support</label>\n              <br>\n              <select formControlName=\"club\" id=\"club\" class=\"form-control select\">\n                <option value=\"\">Club name</option>\n              </select>\n\n              <div>\n                <label style=\"color:#4aa1f3 !important\">Add Profile Photo</label>\n                <br>\n                <button class=\"btn btn-lg add-btn\" style=\"background-color:#4aa1f3 !important; color:white\" type=\"button\" (click)=\"fileInput.click()\">Add Profile Image</button>\n                <input type=\"file\" class=\"form-control\" id=\"add-input\" style=\"display: none\" (change)=\"onFileChange($event)\" #fileInput>\n                <span id=\"completed\" class=\"alert-success\" *ngIf=\"uploaded\">File Uploaded Successfully</span>\n                <span id=\"completed\" class=\"alert-danger\" *ngIf=\"isWrongType\">Please choose .jpg, .jpeg, .png, .gif files</span>\n              </div>\n\n              <button type=\"submit\" id=\"profile\" class=\"btn btn-lg btn-default btn-block save-profile-btn\" name=\"submit\" style=\"background-color:#4aa1f3 !important; color:white !important\"\n                [disabled]=\"!form.valid\">\n                SAVE PROFILE\n              </button>\n\n            </form>\n\n          </div>\n\n        </div>\n\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_upload_service__ = __webpack_require__("../../../../../src/app/admin/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, fb, uploadService) {
        this.auth = auth;
        this.fb = fb;
        this.uploadService = uploadService;
        this.uploaded = false;
        this.allowedFileTypes = ['jpg', 'jpeg', 'png', 'gif'];
        this.isWrongType = false;
        this.createForm();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
            // console.log(this.details)
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            fullName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            country: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            mantra: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            upload: null,
            club: [''],
        });
    };
    ProfileComponent.prototype.onFileChange = function (event) {
        var _this = this;
        this.isWrongType = false;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var arr = file.name.split('.');
            var extensionName = arr[arr.length - 1].toLowerCase();
            // check the extension name 
            if (this.allowedFileTypes.indexOf(extensionName) < 0) {
                this.isWrongType = true;
                return false;
            }
            else {
                var formData = new FormData();
                formData.append('upload', file);
                this.form.get('upload').setValue(file);
                this.uploadService.uploadUserImage(formData).subscribe(function (res) {
                    _this.uploaded = true;
                    _this.details.userImage = _this.form.get('upload').value['name'];
                });
            }
        }
        else
            return false;
    };
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            var userProfile = {
                _id: this.auth.getUserDetails()._id,
                name: this.form.get('username').value,
                fullName: this.form.get('fullName').value,
                country: this.form.get('country').value,
                gender: this.form.get('gender').value,
                mantra: this.form.get('mantra').value,
            };
            if (this.form.get('upload').value) {
                // console.log(this.form.get('upload').value);
                userProfile.imageName = this.form.get('upload').value['name'];
            }
            this.auth.saveProfile(userProfile).subscribe(function (res) {
                _this.ngOnInit();
            });
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__admin_upload_service__["a" /* UploadService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1>\n        <a class=\"btn btn-social btn-facebook btn-lg\" href=\"/api/facebook\">\n          <i class=\"fa fa-facebook\"></i> Sign Up With Facebook\n        </a>\n      </h1>\n      <h1>\n        <a class=\"btn btn-social btn-gplus btn-lg\" href=\"/api/google\">\n          <i class=\"fa fa-google-plus\"></i> Sign Up With Google\n        </a>\n      </h1>\n      <h1>Register</h1>\n      <p class=\"lead\">Already a member? Please\n        <a routerLink=\"/login\">log in</a> instead.</p>\n      <form (submit)=\"register()\" #form=\"ngForm\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': credentials.name==''}\">\n          <label for=\"name\">Full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter your name\" [(ngModel)]=\"credentials.name\" required\n            #name=\"ngModel\">\n          <div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n            <div *ngIf=\"name?.errors.required\" class=\"text-danger\">\n              Full Name is required. \n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': credentials.email==''}\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\" required\n            #email=\"ngModel\" (blur)=\"isEmailUnique($event)\">\n          <div *ngIf=\"email.invalid && (name.dirty || name.touched)\">\n            <div *ngIf=\"email?.errors.required\" class=\"text-danger\">\n              Email is required.\n            </div>\n          </div>\n          <div *ngIf=\"emailUnique | async as checkEmail\" class=\"text-danger\">\n            {{checkEmail.message}}\n          </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': credentials.password==''}\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\" required\n            #password=\"ngModel\">\n          <div *ngIf=\"password.invalid && (name.dirty || name.touched)\">\n            <div *ngIf=\"password?.errors.required\" class=\"text-danger\">\n              Password is required.\n            </div>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!form.form.valid\">Register!</button>\n      </form>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            name: '',
            password: ''
        };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent.prototype.isEmailUnique = function (event) {
        var email = event.target.value;
        console.log(email);
        this.emailUnique = this.auth.isEmailRegisterd(email);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SERVER_URL = 'wss://localhost:3000';
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.connect = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](SERVER_URL, { transports: ['websocket', 'htmlfile', 'xhr-multipart', 'xhr-polling'] });
    };
    SocketService.prototype.disconnect = function () {
        this.socket.close();
    };
    SocketService.prototype.emit = function (to, data) {
        this.socket.emit(to, data);
    };
    SocketService.prototype.onEvent = function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on(event, function (data) { return observer.next(data); });
        });
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/app/user-overview/user-overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-display {\r\n    background: #fff;\r\n    -webkit-box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.16);\r\n    box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.16);\r\n    padding: 20px;\r\n}\r\n\r\n.user-display-head {\r\n    margin-top: 0px;\r\n    color: #03a9f4;\r\n}\r\n\r\n.profile-sidebar {\r\n    padding: 20px 0 10px 0;\r\n    background: #fff;\r\n    -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n    box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n  }\r\n\r\n.profile-userpic img {\r\n    float: none;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50% !important;\r\n  }\r\n\r\n.profile-usertitle {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n  }\r\n\r\n.profile-usertitle-name {\r\n    color: #5a7391;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    margin-bottom: 7px;\r\n  }\r\n\r\n.profile-usertitle-job {\r\n    text-transform: lowercase;\r\n    color: #4aa1f3;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n.profile-usermenu {\r\n    margin-top: 30px;\r\n  }\r\n\r\n.profile-usermenu ul li {\r\n    border-bottom: 1px solid #f0f4f7;\r\n  }\r\n\r\n.profile-usermenu ul li:last-child {\r\n    border-bottom: none;\r\n  }\r\n\r\n.profile-usermenu ul li a {\r\n    color: #93a3b5;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n  }\r\n\r\n.profile-usermenu ul li a i {\r\n    margin-right: 8px;\r\n    font-size: 14px;\r\n  }\r\n\r\n.profile-usermenu ul li a:hover {\r\n    background-color: #fafcfd;\r\n    color: #5b9bd1;\r\n  }\r\n\r\n.profile-usermenu ul li.active {\r\n    border-bottom: none;\r\n  }\r\n\r\n.profile-usermenu ul li.active a {\r\n    color: #5b9bd1;\r\n    background-color: #f6f9fb;\r\n    border-left: 2px solid #5b9bd1;\r\n    margin-left: -2px;\r\n  }\r\n\r\n.profile-signup {\r\n    background: white;\r\n    padding: 30px;\r\n    -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n    box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n  }\r\n\r\n.profile-signup .form .form-control {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n.save-profile-btn {\r\n    background: #03A9F4;\r\n    border: #3bb5ec;\r\n    width: 100%;\r\n    text-shadow: none;\r\n    color: white;\r\n    margin-top: 40px;\r\n  }\r\n\r\n.profile-settings-friends {\r\n    background: white;\r\n    padding: 30px;\r\n    -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n    box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.16);\r\n  }\r\n\r\n.img-user {\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    \r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-overview/user-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 mob-clearfix margin-80\">\n\n  <div class=\"col-md-12\">\n    <div class=\"chat_container\">\n      <div class=\"row\">\n        <!-- LEFT -->\n\n        <div class=\"col-sm-4 col-md-3\">\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"profile-sidebar\">\n                <div class=\"img-container\">\n                  <ng-container *ngIf=\"details?.userImage.includes('http'); else noHttp\">\n                    <img [src]=\"details.userImage\" class=\"img-responsive img-user\" id=\"show_img\">\n                  </ng-container>\n                  <ng-template #noHttp>\n                    <img [src]=\"details?('https://s3.amazonaws.com/fox-user-pictures/' + details.userImage): ''\" class=\"img-responsive img-user\"\n                      id=\"show_img\">\n                  </ng-template>\n\n                </div>\n\n                <div class=\"profile-usertitle\">\n                  <div class=\"profile-usertitle-name\">\n                    {{details?.fullName}}\n                  </div>\n                  <div class=\"profile-usertitle-job\">\n                    @{{details?.name}}\n                  </div>\n                </div>\n\n                <div class=\"profile-usermenu\">\n                  <ul class=\"nav\">\n                    <li class=\"active\" *ngIf=\"userId === auth.getUserDetails()._id; else overview\">\n                      <a [routerLink]=\"['/overview', auth.getUserDetails()._id]\" style=\"color:#4aa1f3 !important\">\n                        <i class=\"fa fa-home\" style=\"color:#4aa1f3 !important\"></i>\n                        Overview\n                      </a>\n                    </li>\n                    <ng-template #overview>\n                      <li class=\"active\">\n                        <a style=\"color:#4aa1f3 !important\">\n                          <i class=\"fa fa-home\" style=\"color:#4aa1f3 !important\"></i>\n                          Overview\n                        </a>\n                      </li>\n                    </ng-template>\n                    <li *ngIf=\"userId === auth.getUserDetails()._id\">\n                      <a routerLink=\"/setting/profile\" style=\"color:#4aa1f3 !important\">\n                        <i class=\"fa fa-user\" style=\"color:#4aa1f3 !important\"></i>\n                        Profile\n                      </a>\n                    </li>\n                    <li *ngIf=\"userId === auth.getUserDetails()._id\">\n                      <a routerLink=\"/setting/interest\" style=\"color:#4aa1f3 !important\">\n                        <i class=\"fa fa-check\" style=\"color:#4aa1f3 !important\"></i>\n                        Interests\n                      </a>\n                    </li>\n                  </ul>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n\n\n        </div>\n\n\n        <!--MIDDLE-->\n        <div class=\"col-sm-8 col-md-9 mob-50\">\n          <div>\n            <div class=\"user-display\">\n              <h3 class=\"user-display-head\" style=\"color:#4aa1f3 !important\">Favourite Clubs</h3>\n              <hr />\n              <p style=\"margin-bottom:30px;\" *ngFor=\"let favClub of details?.favClubs\">\n                <span class=\"glyphicon glyphicon-check\" style=\"color:#4aa1f3\"> {{favClub.clubName}}</span>\n              </p>\n            </div>\n          </div>\n\n          <div style=\"margin-top:20px;\">\n            <div class=\"user-display\">\n              <h3 class=\"user-display-head\" style=\"color:#4aa1f3 !important\">Favourite Players</h3>\n              <hr />\n              <p style=\"margin-bottom:30px;\" *ngFor=\"let favPlayer of details?.favPlayers\">\n                <span class=\"glyphicon glyphicon-check\" style=\"color:#4aa1f3\"> {{favPlayer.playerName}}</span>\n              </p>\n            </div>\n          </div>\n\n          <div style=\"margin-top:20px;\">\n            <div class=\"user-display\">\n              <h3 class=\"user-display-head\" style=\"color:#4aa1f3 !important\">Favourite National Team</h3>\n              <hr />\n              <p style=\"margin-bottom:30px;\" *ngFor=\"let favTeam of details?.favNationalTeams\">\n                <span class=\"glyphicon glyphicon-check\" style=\"color:#4aa1f3\"> {{favTeam.teamName}}</span>\n              </p>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-overview/user-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserOverviewComponent = /** @class */ (function () {
    function UserOverviewComponent(route, auth, http) {
        this.route = route;
        this.auth = auth;
        this.http = http;
    }
    UserOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.params['id'];
        this.getUserInfo().subscribe(function (details) { _this.details = details; });
    };
    UserOverviewComponent.prototype.getUserInfo = function () {
        return this.http.get('api/member-overview/' + this.userId);
    };
    UserOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-overview',
            template: __webpack_require__("../../../../../src/app/user-overview/user-overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-overview/user-overview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], UserOverviewComponent);
    return UserOverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map