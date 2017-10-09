webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_BEVERAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DELETE_BEVERAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIST_BEVERAGES; });
/** Beverage action constants. */
/** Beverage action constants. */ var ADD_BEVERAGE = 'ADD_BEVERAGE';
var DELETE_BEVERAGE = 'DELETE_BEVERAGE';
var LIST_BEVERAGES = 'LIST_BEVERAGES';
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_ENDPOINT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DEFAULT_ENDPOINT = '//tutorial-179815.appspot.com';
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        // Initially set the url to the default endpoint.
        if (!this.getApiUrl()) {
            this.setApiUrl(DEFAULT_ENDPOINT);
        }
    }
    /**
     * Removes the previously stored apiUrl from the local storage and saves the
     * new url in local storage with a key of 'apiUrl'.
     */
    ApiService.prototype.setApiUrl = function (url) {
        // Remove previous url.
        localStorage.removeItem('apiUrl');
        localStorage.setItem('apiUrl', url);
    };
    /** Get the current endpoint url from local storage. */
    ApiService.prototype.getApiUrl = function () {
        return localStorage.getItem('apiUrl');
    };
    /** Lists all the beverages. */
    ApiService.prototype.list = function () {
        return this.http.get(this.getApiUrl() + "/list");
    };
    /** Adds beverage if it does not exist, or updates an existing value. */
    ApiService.prototype.addOrUpdate = function (beverage) {
        var requestUrl = this.getApiUrl() + "/put?name=" + beverage.name + "&value=" + beverage.value;
        return this.http.get(requestUrl);
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, ".app-body {\n  margin: 20px;\n}\n\n.toolbar-fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.endpoint-setter-form {\n  max-width: 500px;\n  width: 100%;\n}\n\n.endpoint-setter-field {\n  width: calc(100% - 105px);\n}\n\n.app-form-btn {\n  margin-left: 10px;\n}\n\n.small-text {\n  font-size: 12px;\n}\n\n.small-space-below {\n  padding-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>{{title}}</span>\n  <span class=\"toolbar-fill-remaining-space\"></span>\n  <app-endpoint-setter-dialog></app-endpoint-setter-dialog>\n</mat-toolbar>\n<div class=\"app-body\">\n  <app-beverage-input></app-beverage-input>\n  <app-inventory-list></app-inventory-list>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(apiService) {
        this.apiService = apiService;
        this.title = 'Beverage Warehouse';
        this.endpoint = this.apiService.getApiUrl();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_endpoint_setter__ = __webpack_require__("../../../../../src/app/config/endpoint_setter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inventory_inventory_module__ = __webpack_require__("../../../../../src/app/inventory/inventory_module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__beverages__ = __webpack_require__("../../../../../src/app/beverages.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_9__inventory_inventory_module__["a" /* InventoryModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_11__beverages__["a" /* beverages */]),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__config_endpoint_setter__["b" /* EndpointSetterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__config_endpoint_setter__["a" /* EndpointDialogComponent */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__config_endpoint_setter__["a" /* EndpointDialogComponent */],
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_8__config_endpoint_setter__["b" /* EndpointSetterComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/beverage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeverageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeverageService = (function () {
    function BeverageService(apiService, store) {
        this.apiService = apiService;
        this.store = store;
        this.beverages =
            this.store.select(function (beverageState) { return beverageState.beverages; });
    }
    BeverageService.prototype.changeEndpoint = function (url) {
        this.apiService.setApiUrl(url);
        this.listBeverages();
    };
    BeverageService.prototype.listBeverages = function () {
        var _this = this;
        this.apiService.list().subscribe(function (response) { return _this.dispatchEvent(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* LIST_BEVERAGES */], response); }, function () { return _this.dispatchEvent(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* LIST_BEVERAGES */]); });
    };
    BeverageService.prototype.updateBeverage = function (beverage) {
        var _this = this;
        this.apiService.addOrUpdate(beverage).subscribe(function () { return _this.dispatchEvent(__WEBPACK_IMPORTED_MODULE_3__actions__["a" /* ADD_BEVERAGE */], [beverage]); }, function () { return _this.dispatchEvent(__WEBPACK_IMPORTED_MODULE_3__actions__["a" /* ADD_BEVERAGE */], [beverage]); });
    };
    BeverageService.prototype.dispatchEvent = function (type, payload) {
        if (payload === void 0) { payload = []; }
        this.store.dispatch({ type: type, payload: payload });
    };
    return BeverageService;
}());
BeverageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _b || Object])
], BeverageService);

var _a, _b;
//# sourceMappingURL=beverage.service.js.map

/***/ }),

/***/ "../../../../../src/app/beverages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = beverages;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var DEFAULT_STATE = {
    beverages: [],
};
function beverages(state, action) {
    if (state === void 0) { state = DEFAULT_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ADD_BEVERAGE */]:
            return updateOrAdd(__assign({}, state), action);
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* LIST_BEVERAGES */]:
            return __assign({}, state, { beverages: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* DELETE_BEVERAGE */]:
            return deleteBeverage(__assign({}, state), action);
        default:
            return state;
    }
}
function updateOrAdd(state, action) {
    var index = getIndex(state, action);
    state.beverages[index] = action.payload[0];
    return state;
}
function deleteBeverage(state, action) {
    var index = getIndex(state, action);
    state.beverages = [].concat(state.beverages.slice(0, index), state.beverages.slice(index + 1));
    return state;
}
function getIndex(state, action) {
    var beverageIndex = state.beverages.findIndex(function (_a) {
        var name = _a.name;
        return name === action.payload[0].name;
    });
    return beverageIndex >= 0 ? beverageIndex : state.beverages.length;
}
//# sourceMappingURL=beverages.js.map

/***/ }),

/***/ "../../../../../src/app/config/endpoint_dialog.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialog()\">Change Endpoint</button>\n"

/***/ }),

/***/ "../../../../../src/app/config/endpoint_setter.html":
/***/ (function(module, exports) {

module.exports = "<h3 md-dialog-title>Set your endpoint url</h3>\n<mat-dialog-content>\n  <div class=\"small-text small-space-below\">\n    Currently this application is using the endpoint at: <strong>{{apiUrl}}</strong>.\n    Add your URL below to point this frontend to your backend.\n  </div>\n  <form class=\"endpoint-setter-form\">\n    <mat-form-field class=\"endpoint-setter-field\">\n      <input matInput placeholder=\"Endpoint URL\" [formControl]=\"urlFormControl\">\n      <mat-hint align=\"start\"><strong>Ex: //tutorial-somenumber.appspot.com</strong></mat-hint>\n      <mat-error *ngIf=\"urlFormControl.hasError('incorrectUrl')\">\n        Url must start with `//` and end with `.com`\n      </mat-error>\n    </mat-form-field>\n  </form>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button [disabled]=\"urlFormControl.invalid\"\n          [mat-dialog-close]=\"urlFormControl.value\">Save</button>\n  <button mat-button mat-dialog-close>Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/config/endpoint_setter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndpointDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EndpointSetterComponent; });
/* unused harmony export endpointUrlValidator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__beverage_service__ = __webpack_require__("../../../../../src/app/beverage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EndpointDialogComponent = (function () {
    function EndpointDialogComponent(apiService, beverageService, dialog) {
        this.apiService = apiService;
        this.beverageService = beverageService;
        this.dialog = dialog;
    }
    EndpointDialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(EndpointSetterComponent, {
            width: '500px',
            data: { apiUrl: this.apiService.getApiUrl() }
        });
        dialogRef.afterClosed().subscribe(function (url) {
            if (url) {
                _this.beverageService.changeEndpoint(url);
            }
        });
    };
    return EndpointDialogComponent;
}());
EndpointDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-endpoint-setter-dialog',
        template: __webpack_require__("../../../../../src/app/config/endpoint_dialog.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__beverage_service__["a" /* BeverageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__beverage_service__["a" /* BeverageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]) === "function" && _c || Object])
], EndpointDialogComponent);

var EndpointSetterComponent = (function () {
    function EndpointSetterComponent(data) {
        this.data = data;
        this.apiUrl = data.apiUrl;
        this.createFormControl();
    }
    EndpointSetterComponent.prototype.createFormControl = function () {
        this.urlFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
            endpointUrlValidator(/^\/{2}.*\.com$/i)
        ]);
    };
    return EndpointSetterComponent;
}());
EndpointSetterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-endpoint-setter',
        template: __webpack_require__("../../../../../src/app/config/endpoint_setter.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], EndpointSetterComponent);

/** Custom validator to check if the inputted url is correct. */
function endpointUrlValidator(urlRe) {
    return function (control) {
        var correctUrl = urlRe.test(control.value);
        return correctUrl ? null : { 'incorrectUrl': { value: control.value } };
    };
}
var _a, _b, _c;
//# sourceMappingURL=endpoint_setter.js.map

/***/ }),

/***/ "../../../../../src/app/inventory/beverage_input.html":
/***/ (function(module, exports) {

module.exports = "<h3>Add or update a beverage</h3>\n<form #formDir=\"ngForm\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"beverageForm\"\n      class=\"example-form\">\n  <mat-form-field>\n    <input matInput type=\"text\" placeholder=\"New beverage\" formControlName=\"name\"\n           autocomplete=\"off\">\n    <mat-error *ngIf=\"beverageForm.get('name').hasError('required')\">\n      Beverage name is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput type=\"number\" placeholder=\"Quantity\" formControlName=\"value\"\n           autocomplete=\"off\">\n    <mat-error *ngIf=\"beverageForm.get('value').hasError('required')\">\n      Quantity is <strong>required</strong>\n    </mat-error>\n    <mat-error *ngIf=\"beverageForm.get('value').hasError('min')\">\n      Quantity must be greater than 0\n    </mat-error>\n  </mat-form-field>\n  <button mat-raised-button color=\"primary\"\n          [disabled]=\"beverageForm.invalid\"\n          class=\"app-form-btn\"\n          type=\"submit\">Add</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/inventory/beverage_input.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeverageInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beverage_service__ = __webpack_require__("../../../../../src/app/beverage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeverageInputComponent = (function () {
    function BeverageInputComponent(fb, beverageService) {
        this.fb = fb;
        this.beverageService = beverageService;
    }
    BeverageInputComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    BeverageInputComponent.prototype.createForm = function () {
        this.beverageForm = this.fb.group({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            value: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].min(0)])
        });
    };
    /** Called by the view when the form is submitted. */
    BeverageInputComponent.prototype.onSubmit = function () {
        this.beverageService.updateBeverage(this.beverageForm.value);
        this.form.resetForm();
    };
    return BeverageInputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('formDir'),
    __metadata("design:type", Object)
], BeverageInputComponent.prototype, "form", void 0);
BeverageInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-beverage-input',
        template: __webpack_require__("../../../../../src/app/inventory/beverage_input.html"),
        styles: [__webpack_require__("../../../../../src/app/inventory/inventory.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__beverage_service__["a" /* BeverageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__beverage_service__["a" /* BeverageService */]) === "function" && _b || Object])
], BeverageInputComponent);

var _a, _b;
//# sourceMappingURL=beverage_input.js.map

/***/ }),

/***/ "../../../../../src/app/inventory/inventory.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, ".example-form {\n  min-width: 150px;\n  max-width: 510px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.inventory {\n  width: 100%;\n  max-width: 1200px;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\n}\n\n.inventory .mat-mini-fab {\n  width: 30px;\n  height: 30px;\n}\n\n.inventory .material-icons {\n  font-size: 18px;\n}\n\n.app-form-btn {\n  margin-left: 10px;\n}\n\n.table-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 48px;\n  padding: 0 24px;\n  border-bottom-color: rgba(0,0,0,.12);\n}\n\n.table-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: rgba(0,0,0,.87);\n  font-size: 14px;\n}\n\n.table-header-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: rgba(0,0,0,.54);\n  font-size: 12px;\n  font-weight: 500;\n  text-align: left;\n}\n\n.inventory-table {\n  width: 100%;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\n}\n\n.message-text {\n  padding: 10px;\n  font-size: 16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inventory/inventory_list.html":
/***/ (function(module, exports) {

module.exports = "<h3>Inventory</h3>\n<div class=\"inventory\">\n  <table class=\"inventory-table\">\n    <thead>\n      <tr class=\"table-row\">\n        <th class=\"table-header-cell\">Beverage</th>\n        <th class=\"table-header-cell\">Quantity</th>\n        <th class=\"table-header-cell\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class=\"table-row\" *ngFor=\"let beverage of (beverages | async)\">\n        <td class=\"table-cell\">{{beverage.name}}</td>\n        <td class=\"table-cell\">{{beverage.value}}</td>\n        <td class=\"table-cell\">\n          <button mat-button (click)=\"increase(beverage)\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button mat-button (click)=\"decrease(beverage)\">\n            <mat-icon>remove</mat-icon>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"message-text\" *ngIf=\"!(beverages | async)?.length\">\n    No beverages found in the warehouse.\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/inventory/inventory_list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beverage_service__ = __webpack_require__("../../../../../src/app/beverage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryListComponent = (function () {
    function InventoryListComponent(beverageService) {
        this.beverageService = beverageService;
        this.beverages = this.beverageService.beverages;
    }
    InventoryListComponent.prototype.ngOnInit = function () {
        this.beverageService.listBeverages();
    };
    InventoryListComponent.prototype.increase = function (beverage) {
        beverage.value = beverage.value + 1;
        this.beverageService.updateBeverage(beverage);
    };
    InventoryListComponent.prototype.decrease = function (beverage) {
        beverage.value = beverage.value > 0 ? beverage.value - 1 : 0;
        this.beverageService.updateBeverage(beverage);
    };
    return InventoryListComponent;
}());
InventoryListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-inventory-list',
        template: __webpack_require__("../../../../../src/app/inventory/inventory_list.html"),
        styles: [__webpack_require__("../../../../../src/app/inventory/inventory.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__beverage_service__["a" /* BeverageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__beverage_service__["a" /* BeverageService */]) === "function" && _a || Object])
], InventoryListComponent);

var _a;
//# sourceMappingURL=inventory_list.js.map

/***/ }),

/***/ "../../../../../src/app/inventory/inventory_module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inventory_list__ = __webpack_require__("../../../../../src/app/inventory/inventory_list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__beverage_input__ = __webpack_require__("../../../../../src/app/inventory/beverage_input.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__beverage_service__ = __webpack_require__("../../../../../src/app/beverage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__beverages__ = __webpack_require__("../../../../../src/app/beverages.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var InventoryModule = (function () {
    function InventoryModule() {
    }
    return InventoryModule;
}());
InventoryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_11__beverages__["a" /* beverages */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_8__inventory_list__["a" /* InventoryListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__beverage_input__["a" /* BeverageInputComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_10__beverage_service__["a" /* BeverageService */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__inventory_list__["a" /* InventoryListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__beverage_input__["a" /* BeverageInputComponent */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_8__inventory_list__["a" /* InventoryListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__beverage_input__["a" /* BeverageInputComponent */],
        ]
    })
], InventoryModule);

//# sourceMappingURL=inventory_module.js.map

/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatTooltipModule */],
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map