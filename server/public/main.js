(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main"],
  {
    /***/ "./$$_lazy_route_resource lazy recursive":
      /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          });
        }
        webpackEmptyAsyncContext.keys = function () {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

        /***/
      },

    /***/ "./src/app/angular-login.service.ts":
      /*!******************************************!*\
  !*** ./src/app/angular-login.service.ts ***!
  \******************************************/
      /*! exports provided: AngularLoginService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AngularLoginService",
          function () {
            return AngularLoginService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
          );

        class AngularLoginService {
          constructor(http) {
            this.http = http;
            this.user = [];
            this.uri = "http://192.168.31.189:3000/api/auth";
          }
          addUser(data) {
            return this.http.post(`${this.uri}/signup`, data);
          }
          login(data) {
            return this.http.post(`${this.uri}/login`, data);
          }
          forgotPwd(data) {
            return this.http.post(`${this.uri}/forgotpassword`, data);
          }
          pwdChange(data) {
            return this.http.post(`${this.uri}/passwordchange`, data);
          }
          resentmail(data) {
            return this.http.post(`${this.uri}/resentemail`, { email: data });
          }
        }
        AngularLoginService.ɵfac = function AngularLoginService_Factory(t) {
          return new (t || AngularLoginService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
            )
          );
        };
        AngularLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: AngularLoginService,
          factory: AngularLoginService.ɵfac,
          providedIn: "root",
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AngularLoginService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root",
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[
                    "HttpClient"
                  ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/app-routing.module.ts":
      /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
      /*! exports provided: AppRoutingModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppRoutingModule",
          function () {
            return AppRoutingModule;
          }
        );
        /* harmony import */ var _expired_expired_component__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./expired/expired.component */ "./src/app/expired/expired.component.ts"
          );
        /* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts"
          );
        /* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts"
          );
        /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./header/header.component */ "./src/app/header/header.component.ts"
          );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
          );
        /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./home/home.component */ "./src/app/home/home.component.ts"
          );
        /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./login/login.component */ "./src/app/login/login.component.ts"
          );
        /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./signup/signup.component */ "./src/app/signup/signup.component.ts"
          );
        /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./profile/profile.component */ "./src/app/profile/profile.component.ts"
          );

        const routes = [
          {
            path: "",
            component:
              _login_login_component__WEBPACK_IMPORTED_MODULE_7__[
                "LoginComponent"
              ],
          },
          {
            path: "login",
            component:
              _login_login_component__WEBPACK_IMPORTED_MODULE_7__[
                "LoginComponent"
              ],
          },
          {
            path: "signup",
            component:
              _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__[
                "SignupComponent"
              ],
          },
          {
            path: "",
            component:
              _header_header_component__WEBPACK_IMPORTED_MODULE_3__[
                "HeaderComponent"
              ],
            children: [
              {
                path: "home",
                component:
                  _home_home_component__WEBPACK_IMPORTED_MODULE_6__[
                    "HomeComponent"
                  ],
              },
            ],
          },
          {
            path: "",
            component:
              _header_header_component__WEBPACK_IMPORTED_MODULE_3__[
                "HeaderComponent"
              ],
            children: [
              {
                path: "profile",
                component:
                  _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__[
                    "ProfileComponent"
                  ],
              },
            ],
          },
          {
            path: "forgot",
            component:
              _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__[
                "ForgotPasswordComponent"
              ],
          },
          {
            path: "expired",
            component:
              _expired_expired_component__WEBPACK_IMPORTED_MODULE_0__[
                "ExpiredComponent"
              ],
          },
          {
            path: "passwordchange",
            component:
              _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__[
                "ChangePasswordComponent"
              ],
          },
        ];
        class AppRoutingModule {}
        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__[
          "ɵɵdefineNgModule"
        ]({ type: AppRoutingModule });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__[
          "ɵɵdefineInjector"
        ]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [
            [
              _angular_router__WEBPACK_IMPORTED_MODULE_5__[
                "RouterModule"
              ].forRoot(routes),
              _angular_router__WEBPACK_IMPORTED_MODULE_5__[
                "RouterModule"
              ].forChild(routes),
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
          ],
        });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](
              AppRoutingModule,
              {
                imports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                  _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                ],
                exports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                ],
              }
            );
        })();
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](
            AppRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
                args: [
                  {
                    imports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_5__[
                        "RouterModule"
                      ].forRoot(routes),
                      _angular_router__WEBPACK_IMPORTED_MODULE_5__[
                        "RouterModule"
                      ].forChild(routes),
                    ],
                    exports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_5__[
                        "RouterModule"
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/app.component.ts":
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /*! exports provided: AppComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppComponent",
          function () {
            return AppComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
          );
        /* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/__ivy_ngcc__/index.js"
          );

        class AppComponent {
          constructor(loadingBar, router) {
            this.loadingBar = loadingBar;
            this.router = router;
            this.title = "angularlogin";
            this.router.events.subscribe((event) => {
              this.navigationInterceptor(event);
            });
          }
          navigationInterceptor(event) {
            if (
              event instanceof
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]
            ) {
              this.loadingBar.start();
            }
            if (
              event instanceof
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]
            ) {
              this.loadingBar.complete();
            }
            if (
              event instanceof
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]
            ) {
              this.loadingBar.stop();
            }
            if (
              event instanceof
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]
            ) {
              this.loadingBar.stop();
            }
          }
        }
        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__[
                "SlimLoadingBarService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
            )
          );
        };
        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: AppComponent,
          selectors: [["app-root"]],
          decls: 2,
          vars: 0,
          consts: [["color", "red"]],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                0,
                "ng2-slim-loading-bar",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                1,
                "router-outlet"
              );
            }
          },
          directives: [
            ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__[
              "SlimLoadingBarComponent"
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"],
          ],
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AppComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-root",
                    templateUrl: "./app.component.html",
                    styleUrls: ["./app.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__[
                    "SlimLoadingBarService"
                  ],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/app.module.ts":
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /*! exports provided: AppModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppModule",
          function () {
            return AppModule;
          }
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"
          );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js"
          );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
          );
        /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./app-routing.module */ "./src/app/app-routing.module.ts"
          );
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./app.component */ "./src/app/app.component.ts"
          );
        /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./login/login.component */ "./src/app/login/login.component.ts"
          );
        /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./signup/signup.component */ "./src/app/signup/signup.component.ts"
          );
        /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./home/home.component */ "./src/app/home/home.component.ts"
          );
        /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./profile/profile.component */ "./src/app/profile/profile.component.ts"
          );
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js"
          );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
          );
        /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js"
          );
        /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js"
          );
        /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"
          );
        /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js"
          );
        /* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js"
          );
        /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(
            /*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js"
          );
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(
            /*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
          );
        /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(
            /*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(
            /*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js"
          );
        /* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(
            /*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js"
          );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ =
          __webpack_require__(
            /*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
          );
        /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ =
          __webpack_require__(
            /*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js"
          );
        /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ =
          __webpack_require__(
            /*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js"
          );
        /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ =
          __webpack_require__(
            /*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js"
          );
        /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ =
          __webpack_require__(
            /*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js"
          );
        /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ =
          __webpack_require__(
            /*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js"
          );
        /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ =
          __webpack_require__(
            /*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js"
          );
        /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ =
          __webpack_require__(
            /*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js"
          );
        /* harmony import */ var _angular_login_service__WEBPACK_IMPORTED_MODULE_30__ =
          __webpack_require__(
            /*! ./angular-login.service */ "./src/app/angular-login.service.ts"
          );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ =
          __webpack_require__(
            /*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
          );
        /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_32__ =
          __webpack_require__(
            /*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js"
          );
        /* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_33__ =
          __webpack_require__(
            /*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/__ivy_ngcc__/index.js"
          );
        /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ =
          __webpack_require__(
            /*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js"
          );
        /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__ =
          __webpack_require__(
            /*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js"
          );
        /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_36__ =
          __webpack_require__(
            /*! ./header/header.component */ "./src/app/header/header.component.ts"
          );
        /* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_37__ =
          __webpack_require__(
            /*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts"
          );
        /* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_38__ =
          __webpack_require__(
            /*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts"
          );
        /* harmony import */ var _expired_expired_component__WEBPACK_IMPORTED_MODULE_39__ =
          __webpack_require__(
            /*! ./expired/expired.component */ "./src/app/expired/expired.component.ts"
          );

        class AppModule {}
        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineNgModule"
        ]({
          type: AppModule,
          bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
          ],
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineInjector"
        ]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [
            _angular_login_service__WEBPACK_IMPORTED_MODULE_30__[
              "AngularLoginService"
            ],
          ],
          imports: [
            [
              ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_33__[
                "SlimLoadingBarModule"
              ],
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                "BrowserModule"
              ],
              _app_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                "AppRoutingModule"
              ],
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__[
                "BrowserAnimationsModule"
              ],
              _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__[
                "MatSliderModule"
              ],
              _angular_material_button__WEBPACK_IMPORTED_MODULE_11__[
                "MatButtonModule"
              ],
              _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__[
                "MatMenuModule"
              ],
              _angular_material_select__WEBPACK_IMPORTED_MODULE_13__[
                "MatSelectModule"
              ],
              _angular_material_input__WEBPACK_IMPORTED_MODULE_14__[
                "MatInputModule"
              ],
              _angular_material_table__WEBPACK_IMPORTED_MODULE_15__[
                "MatTableModule"
              ],
              _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__[
                "MatAutocompleteModule"
              ],
              _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__[
                "MatRadioModule"
              ],
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__[
                "MatIconModule"
              ],
              _angular_material_core__WEBPACK_IMPORTED_MODULE_19__[
                "MatNativeDateModule"
              ],
              _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__[
                "MatProgressBarModule"
              ],
              _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__[
                "MatDatepickerModule"
              ],
              _angular_material_card__WEBPACK_IMPORTED_MODULE_22__[
                "MatCardModule"
              ],
              _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__[
                "MatPaginatorModule"
              ],
              _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__[
                "MatSortModule"
              ],
              _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__[
                "MatCheckboxModule"
              ],
              _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__[
                "MatProgressSpinnerModule"
              ],
              _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__[
                "MatSnackBarModule"
              ],
              _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__[
                "MatExpansionModule"
              ],
              _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__[
                "MatTabsModule"
              ],
              _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__[
                "MatTooltipModule"
              ],
              _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__[
                "MatDialogModule"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                "ReactiveFormsModule"
              ],
              _angular_common_http__WEBPACK_IMPORTED_MODULE_31__[
                "HttpClientModule"
              ],
              ngx_toastr__WEBPACK_IMPORTED_MODULE_32__[
                "ToastrModule"
              ].forRoot(),
            ],
          ],
        });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](
              AppModule,
              {
                declarations: [
                  _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                  _login_login_component__WEBPACK_IMPORTED_MODULE_6__[
                    "LoginComponent"
                  ],
                  _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__[
                    "SignupComponent"
                  ],
                  _home_home_component__WEBPACK_IMPORTED_MODULE_8__[
                    "HomeComponent"
                  ],
                  _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__[
                    "ProfileComponent"
                  ],
                  _header_header_component__WEBPACK_IMPORTED_MODULE_36__[
                    "HeaderComponent"
                  ],
                  _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_37__[
                    "ForgotPasswordComponent"
                  ],
                  _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_38__[
                    "ChangePasswordComponent"
                  ],
                  _expired_expired_component__WEBPACK_IMPORTED_MODULE_39__[
                    "ExpiredComponent"
                  ],
                ],
                imports: [
                  ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_33__[
                    "SlimLoadingBarModule"
                  ],
                  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                    "BrowserModule"
                  ],
                  _app_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                    "AppRoutingModule"
                  ],
                  _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__[
                    "BrowserAnimationsModule"
                  ],
                  _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__[
                    "MatSliderModule"
                  ],
                  _angular_material_button__WEBPACK_IMPORTED_MODULE_11__[
                    "MatButtonModule"
                  ],
                  _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__[
                    "MatMenuModule"
                  ],
                  _angular_material_select__WEBPACK_IMPORTED_MODULE_13__[
                    "MatSelectModule"
                  ],
                  _angular_material_input__WEBPACK_IMPORTED_MODULE_14__[
                    "MatInputModule"
                  ],
                  _angular_material_table__WEBPACK_IMPORTED_MODULE_15__[
                    "MatTableModule"
                  ],
                  _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__[
                    "MatAutocompleteModule"
                  ],
                  _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__[
                    "MatRadioModule"
                  ],
                  _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__[
                    "MatIconModule"
                  ],
                  _angular_material_core__WEBPACK_IMPORTED_MODULE_19__[
                    "MatNativeDateModule"
                  ],
                  _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__[
                    "MatProgressBarModule"
                  ],
                  _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__[
                    "MatDatepickerModule"
                  ],
                  _angular_material_card__WEBPACK_IMPORTED_MODULE_22__[
                    "MatCardModule"
                  ],
                  _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__[
                    "MatPaginatorModule"
                  ],
                  _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__[
                    "MatSortModule"
                  ],
                  _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__[
                    "MatCheckboxModule"
                  ],
                  _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__[
                    "MatProgressSpinnerModule"
                  ],
                  _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__[
                    "MatSnackBarModule"
                  ],
                  _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__[
                    "MatExpansionModule"
                  ],
                  _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__[
                    "MatTabsModule"
                  ],
                  _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__[
                    "MatTooltipModule"
                  ],
                  _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__[
                    "MatDialogModule"
                  ],
                  _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                    "ReactiveFormsModule"
                  ],
                  _angular_common_http__WEBPACK_IMPORTED_MODULE_31__[
                    "HttpClientModule"
                  ],
                  ngx_toastr__WEBPACK_IMPORTED_MODULE_32__["ToastrModule"],
                ],
              }
            );
        })();
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            AppModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                args: [
                  {
                    declarations: [
                      _app_component__WEBPACK_IMPORTED_MODULE_5__[
                        "AppComponent"
                      ],
                      _login_login_component__WEBPACK_IMPORTED_MODULE_6__[
                        "LoginComponent"
                      ],
                      _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__[
                        "SignupComponent"
                      ],
                      _home_home_component__WEBPACK_IMPORTED_MODULE_8__[
                        "HomeComponent"
                      ],
                      _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__[
                        "ProfileComponent"
                      ],
                      _header_header_component__WEBPACK_IMPORTED_MODULE_36__[
                        "HeaderComponent"
                      ],
                      _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_37__[
                        "ForgotPasswordComponent"
                      ],
                      _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_38__[
                        "ChangePasswordComponent"
                      ],
                      _expired_expired_component__WEBPACK_IMPORTED_MODULE_39__[
                        "ExpiredComponent"
                      ],
                    ],
                    imports: [
                      ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_33__[
                        "SlimLoadingBarModule"
                      ],
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                        "BrowserModule"
                      ],
                      _app_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                        "AppRoutingModule"
                      ],
                      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__[
                        "BrowserAnimationsModule"
                      ],
                      _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__[
                        "MatSliderModule"
                      ],
                      _angular_material_button__WEBPACK_IMPORTED_MODULE_11__[
                        "MatButtonModule"
                      ],
                      _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__[
                        "MatMenuModule"
                      ],
                      _angular_material_select__WEBPACK_IMPORTED_MODULE_13__[
                        "MatSelectModule"
                      ],
                      _angular_material_input__WEBPACK_IMPORTED_MODULE_14__[
                        "MatInputModule"
                      ],
                      _angular_material_table__WEBPACK_IMPORTED_MODULE_15__[
                        "MatTableModule"
                      ],
                      _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__[
                        "MatAutocompleteModule"
                      ],
                      _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__[
                        "MatRadioModule"
                      ],
                      _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__[
                        "MatIconModule"
                      ],
                      _angular_material_core__WEBPACK_IMPORTED_MODULE_19__[
                        "MatNativeDateModule"
                      ],
                      _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__[
                        "MatProgressBarModule"
                      ],
                      _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__[
                        "MatDatepickerModule"
                      ],
                      _angular_material_card__WEBPACK_IMPORTED_MODULE_22__[
                        "MatCardModule"
                      ],
                      _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__[
                        "MatPaginatorModule"
                      ],
                      _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__[
                        "MatSortModule"
                      ],
                      _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__[
                        "MatCheckboxModule"
                      ],
                      _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__[
                        "MatProgressSpinnerModule"
                      ],
                      _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__[
                        "MatSnackBarModule"
                      ],
                      _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__[
                        "MatExpansionModule"
                      ],
                      _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__[
                        "MatTabsModule"
                      ],
                      _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__[
                        "MatTooltipModule"
                      ],
                      _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__[
                        "MatDialogModule"
                      ],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                        "ReactiveFormsModule"
                      ],
                      _angular_common_http__WEBPACK_IMPORTED_MODULE_31__[
                        "HttpClientModule"
                      ],
                      ngx_toastr__WEBPACK_IMPORTED_MODULE_32__[
                        "ToastrModule"
                      ].forRoot(),
                    ],
                    providers: [
                      _angular_login_service__WEBPACK_IMPORTED_MODULE_30__[
                        "AngularLoginService"
                      ],
                    ],
                    bootstrap: [
                      _app_component__WEBPACK_IMPORTED_MODULE_5__[
                        "AppComponent"
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/change-password/change-password.component.ts":
      /*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
      /*! exports provided: MyErrorStateMatcher, ChangePasswordComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "MyErrorStateMatcher",
          function () {
            return MyErrorStateMatcher;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ChangePasswordComponent",
          function () {
            return ChangePasswordComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
          );
        /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js"
          );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
          );
        /* harmony import */ var _angular_login_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../angular-login.service */ "./src/app/angular-login.service.ts"
          );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
          );
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js"
          );
        /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"
          );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
          );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
          );

        function ChangePasswordComponent_div_16_span_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Please enter password"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function ChangePasswordComponent_div_16_span_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Password length should greater than seven"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function ChangePasswordComponent_div_16_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "h4"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              2,
              ChangePasswordComponent_div_16_span_2_Template,
              2,
              0,
              "span",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              3,
              ChangePasswordComponent_div_16_span_3_Template,
              2,
              0,
              "span",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r0 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r0.changePwdForm.get("password").errors == null
                ? null
                : ctx_r0.changePwdForm.get("password").errors.required
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r0.changePwdForm.get("password").errors == null
                ? null
                : ctx_r0.changePwdForm.get("password").errors.minlength
            );
          }
        }
        function ChangePasswordComponent_div_26_span_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Please enter confirm password"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function ChangePasswordComponent_div_26_span_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Password length should greater than seven"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function ChangePasswordComponent_div_26_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "h4"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              2,
              ChangePasswordComponent_div_26_span_2_Template,
              2,
              0,
              "span",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              3,
              ChangePasswordComponent_div_26_span_3_Template,
              2,
              0,
              "span",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r1 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r1.changePwdForm.get("password2").errors == null
                ? null
                : ctx_r1.changePwdForm.get("password2").errors.required
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r1.changePwdForm.get("password2").errors == null
                ? null
                : ctx_r1.changePwdForm.get("password2").errors.minlength
            );
          }
        }
        const _c0 = function () {
          return ["/"];
        };
        class MyErrorStateMatcher {
          isErrorState(control, form) {
            const isSubmitted = form && form.submitted;
            return !!(
              control &&
              control.invalid &&
              (control.dirty || control.touched || isSubmitted)
            );
          }
        }
        class ChangePasswordComponent {
          constructor(formBuilder, toastr, route, router, service) {
            this.formBuilder = formBuilder;
            this.toastr = toastr;
            this.route = route;
            this.router = router;
            this.service = service;
            this.matcher = new MyErrorStateMatcher();
          }
          pwdChangeForm() {
            this.changePwdForm = this.formBuilder.group({
              password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                  "Validators"
                ].compose([
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "Validators"
                  ].minLength(6),
                ]),
              ],
              password2: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                  "Validators"
                ].compose([
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "Validators"
                  ].minLength(6),
                ]),
              ],
            });
          }
          submit() {
            if (!this.changePwdForm.valid) {
              // this.toastr.error('Please Fill All Fields')
            } else {
              this.service
                .pwdChange(this.changePwdForm.value)
                .subscribe((data) => {
                  if (data.message == "success") {
                    this.toastr.success("Password changes Successfully...");
                    this.router.navigate(["/"]);
                  } else {
                    this.toastr.error("Failed...", data[0].msg);
                  }
                  (err) => {
                    this.toastr.error("Failed...", err);
                  };
                });
            }
          }
          ngOnInit() {
            this.pwdChangeForm();
          }
        }
        ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(
          t
        ) {
          return new (t || ChangePasswordComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_login_service__WEBPACK_IMPORTED_MODULE_4__[
                "AngularLoginService"
              ]
            )
          );
        };
        ChangePasswordComponent.ɵcmp =
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: ChangePasswordComponent,
            selectors: [["app-change-password"]],
            decls: 31,
            vars: 7,
            consts: [
              [1, "resetpassword-form"],
              [1, "text-primary"],
              [3, "formGroup"],
              [
                "appearance",
                "fill",
                1,
                "mat-form-field-fluid",
                "example-full-width",
                "col-lg-4",
              ],
              [2, "color", "red"],
              [
                "type",
                "password",
                "matInput",
                "",
                "placeholder",
                "Enter Password",
                "formControlName",
                "password",
                3,
                "errorStateMatcher",
              ],
              [4, "ngIf"],
              [
                "type",
                "password",
                "matInput",
                "",
                "placeholder",
                "Enter Confirm Password",
                "formControlName",
                "password2",
                3,
                "errorStateMatcher",
              ],
              [
                "mat-raised-button",
                "",
                "color",
                "primary",
                1,
                "btn-space",
                3,
                "click",
              ],
              ["mat-raised-button", "", "color", "primary", 3, "routerLink"],
              ["class", "error-message", 4, "ngIf"],
              [1, "error-message"],
            ],
            template: function ChangePasswordComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  0,
                  "div",
                  0
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  1,
                  "mat-card"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  2,
                  "h1"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  3,
                  "mat-card-title",
                  1
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                  4,
                  "Password Reset"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  5,
                  "br"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  6,
                  "mat-card-content"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  7,
                  "form",
                  2
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  8,
                  "div"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  9,
                  "mat-form-field",
                  3
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  10,
                  "mat-label"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                  11,
                  "Password"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  12,
                  "span",
                  4
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  14,
                  "input",
                  5
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  15,
                  "mat-error"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                  16,
                  ChangePasswordComponent_div_16_Template,
                  4,
                  2,
                  "div",
                  6
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  17,
                  "br"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  18,
                  "br"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  19,
                  "mat-form-field",
                  3
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  20,
                  "mat-label"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                  21,
                  "Confirm Password"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  22,
                  "span",
                  4
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  24,
                  "input",
                  7
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  25,
                  "mat-error"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                  26,
                  ChangePasswordComponent_div_26_Template,
                  4,
                  2,
                  "div",
                  6
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  27,
                  "button",
                  8
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                  "click",
                  function ChangePasswordComponent_Template_button_click_27_listener() {
                    return ctx.submit();
                  }
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                  28,
                  "Change Password"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  29,
                  "button",
                  9
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                  30,
                  "Cancel"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              }
              if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "formGroup",
                  ctx.changePwdForm
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "errorStateMatcher",
                  ctx.matcher
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "ngIf",
                  (!ctx.changePwdForm.get("password").valid &&
                    ctx.changePwdForm.get("password").touched) ||
                    ctx.changePwdForm.get("password").dirty
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "errorStateMatcher",
                  ctx.matcher
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "ngIf",
                  (!ctx.changePwdForm.get("password2").valid &&
                    ctx.changePwdForm.get("password2").touched) ||
                    ctx.changePwdForm.get("password2").dirty
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "routerLink",
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](
                    6,
                    _c0
                  )
                );
              }
            },
            directives: [
              _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"],
              _angular_material_card__WEBPACK_IMPORTED_MODULE_5__[
                "MatCardTitle"
              ],
              _angular_material_card__WEBPACK_IMPORTED_MODULE_5__[
                "MatCardContent"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                "ɵangular_packages_forms_forms_y"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                "NgControlStatusGroup"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"],
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
                "MatFormField"
              ],
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
                "MatLabel"
              ],
              _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"],
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                "DefaultValueAccessor"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"],
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"],
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
                "MatError"
              ],
              _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"],
              _angular_material_button__WEBPACK_IMPORTED_MODULE_9__[
                "MatButton"
              ],
              _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"],
            ],
            styles: [
              ".resetpassword-form[_ngcontent-%COMP%] {\n  margin-top: 15%;\n  margin-right: 15%;\n  margin-bottom: 20%;\n  margin-left: 25%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  max-width: auto;\n  margin: auto;\n}\n\n.button-txt[_ngcontent-%COMP%] {\n  padding-left: 50px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.btn-space[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7QUFLRiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXRwYXNzd29yZC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxubWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbn1cbi5idXR0b24tdHh0IHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5idG4tc3BhY2Uge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbiJdfQ== */",
            ],
          });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ChangePasswordComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-change-password",
                    templateUrl: "./change-password.component.html",
                    styleUrls: ["./change-password.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "FormBuilder"
                  ],
                },
                {
                  type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__[
                    "ToastrService"
                  ],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__[
                    "ActivatedRoute"
                  ],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                },
                {
                  type: _angular_login_service__WEBPACK_IMPORTED_MODULE_4__[
                    "AngularLoginService"
                  ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/expired/expired.component.ts":
      /*!**********************************************!*\
  !*** ./src/app/expired/expired.component.ts ***!
  \**********************************************/
      /*! exports provided: ExpiredComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ExpiredComponent",
          function () {
            return ExpiredComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
          );
        /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js"
          );
        /* harmony import */ var _angular_login_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./../angular-login.service */ "./src/app/angular-login.service.ts"
          );

        function ExpiredComponent_button_3_Template(rf, ctx) {
          if (rf & 1) {
            const _r3 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "button",
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function ExpiredComponent_button_3_Template_button_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r3
                );
                const ctx_r2 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                return ctx_r2.resendForgotEmail();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Resent Email "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        class ExpiredComponent {
          constructor(route, toastr, service) {
            this.route = route;
            this.toastr = toastr;
            this.service = service;
          }
          ngOnInit() {
            this.route.queryParams.subscribe((params) => {
              if (params.email) {
                this.email = params.email;
                this.toastr.info(
                  "Verify Email Link Expired click Resent Email !!"
                );
              }
              if (params.forgotemail) {
                this.forgotemail = params.forgotemail;
                this.toastr.info(
                  "Verify Password Link Expired Resent Email !!"
                );
              }
            });
          }
          resendForgotEmail() {
            this.service.forgotPwd(this.forgotemail).subscribe((data) => {
              if (data.data[0]) {
                this.toastr.success(
                  "Forgot Password Link sent to your mail id..."
                );
              } else {
                this.toastr.error("Failed...", data.err);
              }
              (err) => {
                this.toastr.error("Failed...", err);
              };
            });
          }
          resendVerifyEmail() {
            this.service.resentmail(this.email).subscribe((data) => {
              if (data.data[0]) {
                this.toastr.success(
                  "Verify Email Link sent to your mail id..."
                );
              } else {
                this.toastr.error("Failed...", data.err);
              }
              (err) => {
                this.toastr.error("Failed...", err);
              };
            });
          }
        }
        ExpiredComponent.ɵfac = function ExpiredComponent_Factory(t) {
          return new (t || ExpiredComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_login_service__WEBPACK_IMPORTED_MODULE_3__[
                "AngularLoginService"
              ]
            )
          );
        };
        ExpiredComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: ExpiredComponent,
          selectors: [["app-expired"]],
          decls: 7,
          vars: 2,
          consts: [
            [
              2,
              "margin-left",
              "30%",
              "margin-right",
              "30%",
              "margin-top",
              "15%",
            ],
            [1, "text-justify", "text-primary"],
            [
              "type",
              "button",
              "class",
              "btn btn-primary",
              3,
              "click",
              4,
              "ng-If",
              "ng-IfElse",
            ],
            ["type", "button", 1, "btn", "btn-primary", 3, "click"],
            ["next", ""],
          ],
          template: function ExpiredComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "p",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                2,
                " Your Link has Expired Please Click Resent Email Button "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                3,
                ExpiredComponent_button_3_Template,
                2,
                0,
                "button",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "button",
                3,
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function ExpiredComponent_Template_button_click_4_listener() {
                  return ctx.resendVerifyEmail();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                6,
                " Resent Email "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              const _r1 =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ng-If",
                ctx.forgotemail
              )("ng-IfElse", _r1);
            }
          },
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGlyZWQvZXhwaXJlZC5jb21wb25lbnQuc2NzcyJ9 */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ExpiredComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-expired",
                    templateUrl: "./expired.component.html",
                    styleUrls: ["./expired.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                    "ActivatedRoute"
                  ],
                },
                {
                  type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__[
                    "ToastrService"
                  ],
                },
                {
                  type: _angular_login_service__WEBPACK_IMPORTED_MODULE_3__[
                    "AngularLoginService"
                  ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/forgot-password/forgot-password.component.ts":
      /*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
      /*! exports provided: MyErrorStateMatcher, ForgotPasswordComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "MyErrorStateMatcher",
          function () {
            return MyErrorStateMatcher;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ForgotPasswordComponent",
          function () {
            return ForgotPasswordComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
          );
        /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js"
          );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
          );
        /* harmony import */ var _angular_login_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../angular-login.service */ "./src/app/angular-login.service.ts"
          );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
          );
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js"
          );
        /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"
          );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
          );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
          );

        function ForgotPasswordComponent_div_16_span_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Please enter email"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function ForgotPasswordComponent_div_16_span_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Please enter valid email"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function ForgotPasswordComponent_div_16_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "h4"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              2,
              ForgotPasswordComponent_div_16_span_2_Template,
              2,
              0,
              "span",
              9
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              3,
              ForgotPasswordComponent_div_16_span_3_Template,
              2,
              0,
              "span",
              9
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r0 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r0.forgotForm.get("email").errors == null
                ? null
                : ctx_r0.forgotForm.get("email").errors.required
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r0.forgotForm.get("email").errors == null
                ? null
                : ctx_r0.forgotForm.get("email").errors.pattern
            );
          }
        }
        const _c0 = function () {
          return ["/"];
        };
        class MyErrorStateMatcher {
          isErrorState(control, form) {
            const isSubmitted = form && form.submitted;
            return !!(
              control &&
              control.invalid &&
              (control.dirty || control.touched || isSubmitted)
            );
          }
        }
        class ForgotPasswordComponent {
          constructor(toastr, formBuilder, router, service) {
            this.toastr = toastr;
            this.formBuilder = formBuilder;
            this.router = router;
            this.service = service;
            this.matcher = new MyErrorStateMatcher();
          }
          ngOnInit() {
            this.forgotform();
          }
          forgotform() {
            this.forgotForm = this.formBuilder.group({
              email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                  "Validators"
                ].compose([
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .email,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "Validators"
                  ].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
                ]),
              ],
            });
          }
          submit() {
            if (!this.forgotForm.valid) {
              this.toastr.error("Please Fill All Fields");
            } else {
              this.service
                .forgotPwd(this.forgotForm.value)
                .subscribe((data) => {
                  if (data[1]) {
                    this.toastr.success(
                      "Forgot Password Link sent to your mail id..."
                    );
                  } else {
                    this.toastr.error("Failed...", data.err);
                  }
                  (err) => {
                    this.toastr.error("Failed...", err);
                  };
                });
            }
          }
        }
        ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(
          t
        ) {
          return new (t || ForgotPasswordComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_login_service__WEBPACK_IMPORTED_MODULE_4__[
                "AngularLoginService"
              ]
            )
          );
        };
        ForgotPasswordComponent.ɵcmp =
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: ForgotPasswordComponent,
            selectors: [["app-forgot-password"]],
            decls: 21,
            vars: 5,
            consts: [
              [1, "forgot-form"],
              [1, "text-primary"],
              [3, "formGroup"],
              [
                "appearance",
                "fill",
                1,
                "mat-form-field-fluid",
                "example-full-width",
                "col-lg-4",
              ],
              [2, "color", "red"],
              [
                "type",
                "email",
                "matInput",
                "",
                "placeholder",
                "Enter Email",
                "formControlName",
                "email",
                3,
                "errorStateMatcher",
              ],
              [4, "ngIf"],
              [
                "mat-raised-button",
                "",
                "color",
                "primary",
                1,
                "btn-space",
                3,
                "click",
              ],
              ["mat-raised-button", "", "color", "primary", 3, "routerLink"],
              ["class", "error-message", 4, "ngIf"],
              [1, "error-message"],
            ],
            template: function ForgotPasswordComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  0,
                  "div",
                  0
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  1,
                  "mat-card"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  2,
                  "h1"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  3,
                  "mat-card-title",
                  1
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                  4,
                  "Forgot Password"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  5,
                  "br"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  6,
                  "mat-card-content"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  7,
                  "form",
                  2
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  8,
                  "div"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  9,
                  "mat-form-field",
                  3
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  10,
                  "mat-label"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                  11,
                  "Email"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  12,
                  "span",
                  4
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  14,
                  "input",
                  5
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  15,
                  "mat-error"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                  16,
                  ForgotPasswordComponent_div_16_Template,
                  4,
                  2,
                  "div",
                  6
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  17,
                  "button",
                  7
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                  "click",
                  function ForgotPasswordComponent_Template_button_click_17_listener() {
                    return ctx.submit();
                  }
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                  18,
                  "Submit"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  19,
                  "button",
                  8
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                  20,
                  "Login"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              }
              if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "formGroup",
                  ctx.forgotForm
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "errorStateMatcher",
                  ctx.matcher
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "ngIf",
                  (!ctx.forgotForm.get("email").valid &&
                    ctx.forgotForm.get("email").touched) ||
                    ctx.forgotForm.get("email").dirty
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "routerLink",
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](
                    4,
                    _c0
                  )
                );
              }
            },
            directives: [
              _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"],
              _angular_material_card__WEBPACK_IMPORTED_MODULE_5__[
                "MatCardTitle"
              ],
              _angular_material_card__WEBPACK_IMPORTED_MODULE_5__[
                "MatCardContent"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                "ɵangular_packages_forms_forms_y"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                "NgControlStatusGroup"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"],
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
                "MatFormField"
              ],
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
                "MatLabel"
              ],
              _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"],
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                "DefaultValueAccessor"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"],
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"],
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
                "MatError"
              ],
              _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"],
              _angular_material_button__WEBPACK_IMPORTED_MODULE_9__[
                "MatButton"
              ],
              _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"],
            ],
            styles: [
              ".forgot-form[_ngcontent-%COMP%] {\n  margin-top: 15%;\n  margin-right: 15%;\n  margin-bottom: 20%;\n  margin-left: 25%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  max-width: auto;\n  margin: auto;\n}\n\n.button-txt[_ngcontent-%COMP%] {\n  padding-left: 50px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.btn-space[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7QUFLRiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ290LWZvcm0ge1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xuICBtYXJnaW4tYm90dG9tOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmJ1dHRvbi10eHQge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ0bi1zcGFjZSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuIl19 */",
            ],
          });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ForgotPasswordComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-forgot-password",
                    templateUrl: "./forgot-password.component.html",
                    styleUrls: ["./forgot-password.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__[
                    "ToastrService"
                  ],
                },
                {
                  type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "FormBuilder"
                  ],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                },
                {
                  type: _angular_login_service__WEBPACK_IMPORTED_MODULE_4__[
                    "AngularLoginService"
                  ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/header/header.component.ts":
      /*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
      /*! exports provided: HeaderComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HeaderComponent",
          function () {
            return HeaderComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
          );

        const _c0 = function () {
          return ["/home"];
        };
        const _c1 = function () {
          return ["/profile"];
        };
        const _c2 = function () {
          return ["/"];
        };
        class HeaderComponent {
          constructor() {}
          ngOnInit() {}
        }
        HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
          return new (t || HeaderComponent)();
        };
        HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: HeaderComponent,
          selectors: [["app-header"]],
          decls: 14,
          vars: 6,
          consts: [
            [
              1,
              "nav",
              "justify-content-center",
              2,
              "margin-left",
              "30%",
              "margin-right",
              "30%",
              "margin-top",
              "20px",
            ],
            [1, "nav-item"],
            [1, "nav-link", "active", 3, "routerLink"],
            [1, "nav-link", 3, "routerLink"],
          ],
          template: function HeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "ul",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "li",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "h1"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "a",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "li",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "h1"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "a",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                8,
                "Profile"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "li",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "h1"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "a",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                12,
                "logout"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                13,
                "router-outlet"
              );
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "routerLink",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](
                  3,
                  _c0
                )
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "routerLink",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](
                  4,
                  _c1
                )
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "routerLink",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](
                  5,
                  _c2
                )
              );
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"],
          ],
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            HeaderComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-header",
                    templateUrl: "./header.component.html",
                    styleUrls: ["./header.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/home/home.component.ts":
      /*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
      /*! exports provided: HomeComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HomeComponent",
          function () {
            return HomeComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_login_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./../angular-login.service */ "./src/app/angular-login.service.ts"
          );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
          );

        class HomeComponent {
          constructor(service, router) {
            this.service = service;
            this.router = router;
            this.data = [];
          }
          ngOnInit() {
            if (this.service.user.length > 0) {
              this.data = this.service.user[1];
            } else {
              this.router.navigate(["/"]);
            }
          }
        }
        HomeComponent.ɵfac = function HomeComponent_Factory(t) {
          return new (t || HomeComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_login_service__WEBPACK_IMPORTED_MODULE_1__[
                "AngularLoginService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
            )
          );
        };
        HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: HomeComponent,
          selectors: [["app-home"]],
          decls: 6,
          vars: 1,
          consts: [
            [1, "text-center"],
            [
              2,
              "margin-left",
              "30%",
              "margin-right",
              "30%",
              "margin-top",
              "15%",
            ],
            [1, "text-secondary"],
            [1, "text-primary"],
          ],
          template: function HomeComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "h1",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                3,
                "WELCOME"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "h4",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
                "",
                ctx.data.userName,
                " "
              );
            }
          },
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            HomeComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-home",
                    templateUrl: "./home.component.html",
                    styleUrls: ["./home.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_login_service__WEBPACK_IMPORTED_MODULE_1__[
                    "AngularLoginService"
                  ],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/login/login.component.ts":
      /*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
      /*! exports provided: MyErrorStateMatcher, LoginComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "MyErrorStateMatcher",
          function () {
            return MyErrorStateMatcher;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LoginComponent",
          function () {
            return LoginComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
          );
        /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js"
          );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
          );
        /* harmony import */ var _angular_login_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../angular-login.service */ "./src/app/angular-login.service.ts"
          );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
          );
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js"
          );
        /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"
          );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
          );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
          );

        function LoginComponent_div_16_span_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              12
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Please enter email"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function LoginComponent_div_16_span_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              12
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Please enter valid email"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function LoginComponent_div_16_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "h4"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              2,
              LoginComponent_div_16_span_2_Template,
              2,
              0,
              "span",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              3,
              LoginComponent_div_16_span_3_Template,
              2,
              0,
              "span",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r0 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r0.loginForm.get("email").errors == null
                ? null
                : ctx_r0.loginForm.get("email").errors.required
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r0.loginForm.get("email").errors == null
                ? null
                : ctx_r0.loginForm.get("email").errors.pattern
            );
          }
        }
        function LoginComponent_div_24_span_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              12
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Please enter password"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function LoginComponent_div_24_span_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              12
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Password length should greater than seven"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function LoginComponent_div_24_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "h4"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              2,
              LoginComponent_div_24_span_2_Template,
              2,
              0,
              "span",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              3,
              LoginComponent_div_24_span_3_Template,
              2,
              0,
              "span",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r1 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r1.loginForm.get("password").errors == null
                ? null
                : ctx_r1.loginForm.get("password").errors.required
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r1.loginForm.get("password").errors == null
                ? null
                : ctx_r1.loginForm.get("password").errors.minlength
            );
          }
        }
        const _c0 = function () {
          return ["/signup"];
        };
        const _c1 = function () {
          return ["/forgot"];
        };
        class MyErrorStateMatcher {
          isErrorState(control, form) {
            const isSubmitted = form && form.submitted;
            return !!(
              control &&
              control.invalid &&
              (control.dirty || control.touched || isSubmitted)
            );
          }
        }
        class LoginComponent {
          constructor(formBuilder, toastr, route, router, service) {
            this.formBuilder = formBuilder;
            this.toastr = toastr;
            this.route = route;
            this.router = router;
            this.service = service;
            this.matcher = new MyErrorStateMatcher();
          }
          loginform() {
            this.loginForm = this.formBuilder.group({
              email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                  "Validators"
                ].compose([
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .email,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "Validators"
                  ].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
                ]),
              ],
              password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                  "Validators"
                ].compose([
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "Validators"
                  ].minLength(6),
                ]),
              ],
            });
          }
          submit() {
            if (!this.loginForm.valid) {
              this.toastr.error("Please Fill All Fields");
            } else {
              this.service.login(this.loginForm.value).subscribe((data) => {
                if (data[1]) {
                  this.service.user = [];
                  this.toastr.success("Login Success...");
                  this.service.user = data;
                  this.router.navigate(["/home"]);
                } else if (data.message) {
                  this.toastr.error("Invalid Email/Password...", data.err);
                }
                (err) => {
                  this.toastr.error("Failed...", err);
                };
              });
            }
          }
          ngOnInit() {
            this.loginform();
            this.route.queryParams.subscribe((params) => {
              if (params.msg === "success") {
                this.toastr.success("Email Verified Successfully");
              }
            });
          }
        }
        LoginComponent.ɵfac = function LoginComponent_Factory(t) {
          return new (t || LoginComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_login_service__WEBPACK_IMPORTED_MODULE_4__[
                "AngularLoginService"
              ]
            )
          );
        };
        LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: LoginComponent,
          selectors: [["app-login"]],
          decls: 33,
          vars: 9,
          consts: [
            [1, "login-form"],
            [1, "text-primary"],
            [3, "formGroup"],
            [
              "appearance",
              "fill",
              1,
              "mat-form-field-fluid",
              "example-full-width",
              "col-lg-4",
            ],
            [2, "color", "red"],
            [
              "type",
              "email",
              "matInput",
              "",
              "placeholder",
              "Enter Email",
              "formControlName",
              "email",
              3,
              "errorStateMatcher",
            ],
            [4, "ngIf"],
            [
              "type",
              "password",
              "matInput",
              "",
              "placeholder",
              "Enter Password",
              "formControlName",
              "password",
              3,
              "errorStateMatcher",
            ],
            [
              "mat-raised-button",
              "",
              "color",
              "primary",
              1,
              "btn-space",
              3,
              "click",
            ],
            ["mat-raised-button", "", "color", "primary", 3, "routerLink"],
            [1, "text-right", 3, "routerLink"],
            ["class", "error-message", 4, "ngIf"],
            [1, "error-message"],
          ],
          template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "mat-card"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "h1"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "mat-card-title",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "mat-card-content"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "form",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "mat-form-field",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "mat-label"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "span",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                14,
                "input",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                15,
                "mat-error"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                16,
                LoginComponent_div_16_Template,
                4,
                2,
                "div",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                17,
                "mat-form-field",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                18,
                "mat-label"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                19,
                "Password"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                20,
                "span",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                22,
                "input",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                23,
                "mat-error"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                24,
                LoginComponent_div_24_Template,
                4,
                2,
                "div",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                25,
                "button",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function LoginComponent_Template_button_click_25_listener() {
                  return ctx.submit();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Login");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                27,
                "button",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                28,
                "SignUp"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                29,
                "p",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                30,
                "a",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                31,
                "h3"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                32,
                "ForgotPassword?"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "formGroup",
                ctx.loginForm
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "errorStateMatcher",
                ctx.matcher
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                (!ctx.loginForm.get("email").valid &&
                  ctx.loginForm.get("email").touched) ||
                  ctx.loginForm.get("email").dirty
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "errorStateMatcher",
                ctx.matcher
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                (!ctx.loginForm.get("password").valid &&
                  ctx.loginForm.get("password").touched) ||
                  ctx.loginForm.get("password").dirty
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "routerLink",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](
                  7,
                  _c0
                )
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "routerLink",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](
                  8,
                  _c1
                )
              );
            }
          },
          directives: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__[
              "MatCardContent"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
              "MatFormField"
            ],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
              "MatLabel"
            ],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__[
              "MatError"
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"],
          ],
          styles: [
            ".login-form[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  margin-right: 15%;\n  margin-bottom: 20%;\n  margin-left: 20%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  max-width: auto;\n  margin: auto;\n}\n\n.button-txt[_ngcontent-%COMP%] {\n  padding-left: 50px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.btn-space[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7QUFJRjs7QUFGQTtFQUNFLGlCQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cbm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG59XG4uYnV0dG9uLXR4dCB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLXNwYWNlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5wIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            LoginComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-login",
                    templateUrl: "./login.component.html",
                    styleUrls: ["./login.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "FormBuilder"
                  ],
                },
                {
                  type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__[
                    "ToastrService"
                  ],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__[
                    "ActivatedRoute"
                  ],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                },
                {
                  type: _angular_login_service__WEBPACK_IMPORTED_MODULE_4__[
                    "AngularLoginService"
                  ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/profile/profile.component.ts":
      /*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
      /*! exports provided: ProfileComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ProfileComponent",
          function () {
            return ProfileComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_login_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./../angular-login.service */ "./src/app/angular-login.service.ts"
          );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
          );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
          );
        /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js"
          );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
          );

        class ProfileComponent {
          constructor(service, router) {
            this.service = service;
            this.router = router;
            this.data = [];
          }
          ngOnInit() {
            if (this.service.user.length > 0) {
              this.data = this.service.user[1];
            } else {
              this.router.navigate(["/"]);
            }
          }
        }
        ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
          return new (t || ProfileComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_login_service__WEBPACK_IMPORTED_MODULE_1__[
                "AngularLoginService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
            )
          );
        };
        ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: ProfileComponent,
          selectors: [["app-profile"]],
          decls: 13,
          vars: 5,
          consts: [
            ["dynamicHeight", "", 1, "profile"],
            ["mat-stretch-tabs", ""],
            ["label", "User Name"],
            [1, "btn", "btn-primary"],
            ["label", "Email"],
            ["label", "Mobie Number"],
          ],
          template: function ProfileComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "mat-card",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "mat-tab-group",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "mat-tab",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "span",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
                6,
                "uppercase"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "mat-tab",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "span",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "mat-tab",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "span",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
                " ",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                  6,
                  3,
                  ctx.data.userName
                ),
                ""
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.data.email
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.data.mobile
              );
            }
          },
          directives: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"],
          ],
          pipes: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"],
          ],
          styles: [
            ".profile[_ngcontent-%COMP%] {\n  margin-top: 15%;\n  margin-right: 15%;\n  margin-bottom: 20%;\n  margin-left: 25%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  max-width: auto;\n  margin: auto;\n}\n\n.mat-tab[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLHVCQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZSB7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cbm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG59XG4ubWF0LXRhYiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ProfileComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-profile",
                    templateUrl: "./profile.component.html",
                    styleUrls: ["./profile.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_login_service__WEBPACK_IMPORTED_MODULE_1__[
                    "AngularLoginService"
                  ],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/app/signup/signup.component.ts":
      /*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
      /*! exports provided: MyErrorStateMatcher, SignupComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "MyErrorStateMatcher",
          function () {
            return MyErrorStateMatcher;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SignupComponent",
          function () {
            return SignupComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
          );
        /* harmony import */ var _angular_login_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../angular-login.service */ "./src/app/angular-login.service.ts"
          );
        /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js"
          );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js"
          );
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js"
          );
        /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"
          );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
          );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
          );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
          );

        function SignupComponent_span_17_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              "Please enter User name"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function SignupComponent_div_27_span_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Please enter email"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function SignupComponent_div_27_span_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Please enter valid email"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function SignupComponent_div_27_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "h4"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              2,
              SignupComponent_div_27_span_2_Template,
              2,
              0,
              "span",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "h4"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              4,
              SignupComponent_div_27_span_4_Template,
              2,
              0,
              "span",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r1 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r1.signUpForm.get("email").errors == null
                ? null
                : ctx_r1.signUpForm.get("email").errors.required
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r1.signUpForm.get("email").errors == null
                ? null
                : ctx_r1.signUpForm.get("email").errors.pattern
            );
          }
        }
        function SignupComponent_div_37_span_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Please enter password"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function SignupComponent_div_37_span_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Password length should greater than seven"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function SignupComponent_div_37_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "h4"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              2,
              SignupComponent_div_37_span_2_Template,
              2,
              0,
              "span",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "h4"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              4,
              SignupComponent_div_37_span_4_Template,
              2,
              0,
              "span",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r2 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r2.signUpForm.get("password").errors == null
                ? null
                : ctx_r2.signUpForm.get("password").errors.required
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r2.signUpForm.get("password").errors == null
                ? null
                : ctx_r2.signUpForm.get("password").errors.minlength
            );
          }
        }
        function SignupComponent_div_47_span_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Please enter confirm password"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function SignupComponent_div_47_span_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Password length should greater than seven"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function SignupComponent_div_47_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "h4"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              2,
              SignupComponent_div_47_span_2_Template,
              2,
              0,
              "span",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "h4"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
              4,
              SignupComponent_div_47_span_4_Template,
              2,
              0,
              "span",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r3 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r3.signUpForm.get("password2").errors == null
                ? null
                : ctx_r3.signUpForm.get("password2").errors.required
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngIf",
              ctx_r3.signUpForm.get("password2").errors == null
                ? null
                : ctx_r3.signUpForm.get("password2").errors.minlength
            );
          }
        }
        function SignupComponent_span_58_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "span"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              "Please enter number"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        const _c0 = function () {
          return ["/"];
        };
        class MyErrorStateMatcher {
          isErrorState(control, form) {
            const isSubmitted = form && form.submitted;
            return !!(
              control &&
              control.invalid &&
              (control.dirty || control.touched || isSubmitted)
            );
          }
        }
        class SignupComponent {
          constructor(formBuilder, service, toastr) {
            this.formBuilder = formBuilder;
            this.service = service;
            this.toastr = toastr;
            this.matcher = new MyErrorStateMatcher();
            this.signupForm();
          }
          signupForm() {
            this.signUpForm = this.formBuilder.group({
              userName: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                  "Validators"
                ].compose([
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "Validators"
                  ].minLength(3),
                ]),
              ],
              email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                  "Validators"
                ].compose([
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .email,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "Validators"
                  ].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
                ]),
              ],
              password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                  "Validators"
                ].compose([
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "Validators"
                  ].minLength(6),
                ]),
              ],
              mobile: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                  "Validators"
                ].compose([
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "Validators"
                  ].minLength(10),
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "Validators"
                  ].maxLength(10),
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "Validators"
                  ].pattern("^\\d*$"),
                ]),
              ],
              password2: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                  "Validators"
                ].compose([
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "Validators"
                  ].minLength(6),
                ]),
              ],
            });
          }
          submit() {
            if (!this.signUpForm.valid) {
              this.toastr.error("Please Fill All Fields");
            } else {
              this.service.addUser(this.signUpForm.value).subscribe((res) => {
                if (res.data) {
                  this.signUpForm.reset();
                  this.toastr.success("Verify Mail sent to your mail id...");
                } else {
                  this.toastr.error("Failed...", res.err[0].msg);
                }
              });
              (error) => {
                this.toastr.error("Failed...", error);
              };
            }
          }
          ngOnInit() {}
        }
        SignupComponent.ɵfac = function SignupComponent_Factory(t) {
          return new (t || SignupComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_login_service__WEBPACK_IMPORTED_MODULE_2__[
                "AngularLoginService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
            )
          );
        };
        SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: SignupComponent,
          selectors: [["app-signup"]],
          decls: 63,
          vars: 13,
          consts: [
            [1, "Signup-form"],
            [1, "text-primary"],
            [3, "formGroup"],
            [
              "appearance",
              "fill",
              1,
              "mat-form-field-fluid",
              "example-full-width",
            ],
            [2, "color", "red"],
            [
              "matInput",
              "",
              "placeholder",
              "Enter Name",
              "formControlName",
              "userName",
              3,
              "errorStateMatcher",
            ],
            [4, "ngIf"],
            [
              "appearance",
              "fill",
              1,
              "mat-form-field-fluid",
              "example-full-width",
              "col-lg-4",
            ],
            [
              "type",
              "email",
              "matInput",
              "",
              "placeholder",
              "Enter Email",
              "formControlName",
              "email",
              3,
              "errorStateMatcher",
            ],
            [
              "type",
              "password",
              "matInput",
              "",
              "placeholder",
              "Enter Password",
              "formControlName",
              "password",
              3,
              "errorStateMatcher",
            ],
            [
              "type",
              "password",
              "matInput",
              "",
              "placeholder",
              "Enter Confirm Password",
              "formControlName",
              "password2",
              3,
              "errorStateMatcher",
            ],
            [
              "matInput",
              "",
              "placeholder",
              "Mobile Number",
              "placeholder",
              "Enter a Mobile Number",
              "formControlName",
              "mobile",
              3,
              "errorStateMatcher",
            ],
            [
              "mat-raised-button",
              "",
              "color",
              "primary",
              1,
              "btn-space",
              3,
              "click",
            ],
            ["mat-raised-button", "", "color", "primary", 3, "routerLink"],
            ["class", "error-message", 4, "ngIf"],
            [1, "error-message"],
          ],
          template: function SignupComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "mat-card"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "h1"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "mat-card-title",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SignUp");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "mat-card-content"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "form",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "mat-form-field",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "mat-label"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                11,
                "User Name"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "span",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                14,
                "input",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                15,
                "mat-error"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "h4"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                17,
                SignupComponent_span_17_Template,
                2,
                0,
                "span",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                20,
                "mat-form-field",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                21,
                "mat-label"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                23,
                "span",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                25,
                "input",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                26,
                "mat-error"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                27,
                SignupComponent_div_27_Template,
                5,
                2,
                "div",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                30,
                "mat-form-field",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                31,
                "mat-label"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                32,
                "Password"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                33,
                "span",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "*");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                35,
                "input",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                36,
                "mat-error"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                37,
                SignupComponent_div_37_Template,
                5,
                2,
                "div",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                40,
                "mat-form-field",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                41,
                "mat-label"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                42,
                "Confirm Password"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                43,
                "span",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "*");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                45,
                "input",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                46,
                "mat-error"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                47,
                SignupComponent_div_47_Template,
                5,
                2,
                "div",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                50,
                "mat-form-field",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                51,
                "mat-label"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                52,
                "Mobile Number"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                53,
                "span",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "*");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                55,
                "input",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                56,
                "mat-error"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                57,
                "h4"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                58,
                SignupComponent_span_58_Template,
                2,
                0,
                "span",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                59,
                "button",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function SignupComponent_Template_button_click_59_listener() {
                  return ctx.submit();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                60,
                "Submit"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                61,
                "button",
                13
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Login");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "formGroup",
                ctx.signUpForm
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "errorStateMatcher",
                ctx.matcher
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                !ctx.signUpForm.get("userName").valid &&
                  ctx.signUpForm.get("userName").touched
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "errorStateMatcher",
                ctx.matcher
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                (!ctx.signUpForm.get("email").valid &&
                  ctx.signUpForm.get("email").touched) ||
                  ctx.signUpForm.get("email").dirty
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "errorStateMatcher",
                ctx.matcher
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                (!ctx.signUpForm.get("password").valid &&
                  ctx.signUpForm.get("password").touched) ||
                  ctx.signUpForm.get("password").dirty
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "errorStateMatcher",
                ctx.matcher
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                (!ctx.signUpForm.get("password2").valid &&
                  ctx.signUpForm.get("password2").touched) ||
                  ctx.signUpForm.get("password2").dirty
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "errorStateMatcher",
                ctx.matcher
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                !ctx.signUpForm.get("mobile").valid &&
                  ctx.signUpForm.get("mobile").touched
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "routerLink",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](
                  12,
                  _c0
                )
              );
            }
          },
          directives: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__[
              "MatCardContent"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__[
              "MatFormField"
            ],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__[
              "MatLabel"
            ],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__[
              "MatError"
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"],
          ],
          styles: [
            ".Signup-form[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-right: 15%;\n  margin-bottom: 20%;\n  margin-left: 20%;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  max-width: auto;\n  margin: auto;\n}\n\n.button-txt[_ngcontent-%COMP%] {\n  padding-left: 50px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.btn-space[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7QUFLRiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU2lnbnVwLWZvcm0ge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cbm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG59XG4uYnV0dG9uLXR4dCB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLXNwYWNlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4iXX0= */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            SignupComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-signup",
                    templateUrl: "./signup.component.html",
                    styleUrls: ["./signup.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    "FormBuilder"
                  ],
                },
                {
                  type: _angular_login_service__WEBPACK_IMPORTED_MODULE_2__[
                    "AngularLoginService"
                  ],
                },
                {
                  type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__[
                    "ToastrService"
                  ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "./src/environments/environment.ts":
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /*! exports provided: environment */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "environment",
          function () {
            return environment;
          }
        );
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        const environment = {
          production: false,
        };
        /*
         * For easier debugging in development mode, you can import the following file
         * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
         *
         * This import should be commented out in production mode because it will have a negative impact
         * on performance if an error is thrown.
         */
        // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

        /***/
      },

    /***/ "./src/main.ts":
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./environments/environment */ "./src/environments/environment.ts"
          );
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./app/app.module */ "./src/app/app.module.ts"
          );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"
          );

        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]
            .production
        ) {
          Object(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"]
          )();
        }
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[
          "platformBrowser"
        ]()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]
          )
          .catch((err) => console.error(err));

        /***/
      },

    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/DHANASEKARSELVAM/Documents/mean-new/client/src/main.ts */ "./src/main.ts"
        );

        /***/
      },
  },
  [[0, "runtime", "vendor"]],
]);
//# sourceMappingURL=main.js.map
