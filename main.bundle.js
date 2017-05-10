webpackJsonp([1,5],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 116;


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(168);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('[data-toggle="offcanvas"]').click(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#navigation").toggleClass("hidden-xs");
            __WEBPACK_IMPORTED_MODULE_1_jquery__("body").toggleClass("overflowhidden");
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(253),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_router__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mangol__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forminput_forminput_module__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_map_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__building_building_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__company_company_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__infrastructure_infrastructure_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__settings_settings_module__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_router__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6_mangol__["a" /* MangolModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_9__map_map_module__["a" /* MapModule */],
            __WEBPACK_IMPORTED_MODULE_10__building_building_module__["a" /* BuildingModule */],
            __WEBPACK_IMPORTED_MODULE_7__forminput_forminput_module__["a" /* FormInputModule */],
            __WEBPACK_IMPORTED_MODULE_11__company_company_module__["a" /* CompanyModule */],
            __WEBPACK_IMPORTED_MODULE_12__infrastructure_infrastructure_module__["a" /* InfrastructureModule */],
            __WEBPACK_IMPORTED_MODULE_13__settings_settings_module__["a" /* SettingsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__app_router__["b" /* appRoutingProviders */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__building__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__infrastructure__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* unused harmony export applicationRouterProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard__["a" /* DashboardComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard__["a" /* DashboardComponent */]
    },
    {
        path: 'map',
        component: __WEBPACK_IMPORTED_MODULE_5__map__["a" /* MapComponent */]
    },
    {
        path: 'building',
        component: __WEBPACK_IMPORTED_MODULE_2__building__["a" /* BuildingComponent */]
    },
    {
        path: 'company',
        component: __WEBPACK_IMPORTED_MODULE_3__company__["a" /* CompanyComponent */]
    },
    {
        path: 'infrastructure',
        component: __WEBPACK_IMPORTED_MODULE_4__infrastructure__["a" /* InfrastructureComponent */]
    }
];
var appRoutingProviders = [];
var applicationRouterProviders = [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* provideRoutes */])(appRoutes)
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__building_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forminput_forminput_module__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__building_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BuildingModule = (function () {
    function BuildingModule() {
    }
    return BuildingModule;
}());
BuildingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__forminput_forminput_module__["a" /* FormInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__building_component__["a" /* BuildingComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__building_service__["a" /* BuildingService */]]
    })
], BuildingModule);

//# sourceMappingURL=building.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__building_component__ = __webpack_require__(80);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__building_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forminput_forminput_module__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__company_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CompanyModule = (function () {
    function CompanyModule() {
    }
    return CompanyModule;
}());
CompanyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__forminput_forminput_module__["a" /* FormInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__company_component__["a" /* CompanyComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__company_service__["a" /* CompanyService */]]
    })
], CompanyModule);

//# sourceMappingURL=company.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__company_component__ = __webpack_require__(82);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__company_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__(84);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormInputComponent = (function () {
    function FormInputComponent() {
        this.type = 'text';
        this.placeHolder = '';
        this.labelText = '';
        this.inputName = '';
    }
    return FormInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], FormInputComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], FormInputComponent.prototype, "placeHolder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], FormInputComponent.prototype, "labelText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], FormInputComponent.prototype, "inputName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]) === "function" && _a || Object)
], FormInputComponent.prototype, "control", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Array)
], FormInputComponent.prototype, "list", void 0);
FormInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "form-input",
        template: "\n     <div class=\"form-group  has-feedback\" [ngClass]=\"{'has-error': !control.valid && control.dirty, 'has-success': control.valid && control.dirty}\">\n            <label class=\"control-label\">{{labelText}}</label>\n            <input *ngIf=\"type != 'textarea' && type != 'select'\" type=\"{{type}}\" class=\"form-control\" id=\"{{inputName}}\" name=\"{{inputName}}\" placeholder=\"{{placeHolder}}\" [formControl]=\"control\"> \n            <textarea *ngIf=\"type == 'textarea'\" class=\"form-control\" id=\"{{inputName}}\" name=\"{{inputName}}\" placeholder=\"{{placeHolder}}\" [formControl]=\"control\"></textarea>\n            <select *ngIf=\"type == 'select'\" class=\"form-control\" id=\"{{inputName}}\" name=\"{{inputName}}\"  [formControl]=\"control\">\n                <option *ngFor=\"let item of list\" value=\"{{item.value}}\">{{item.text}}</option> \n            </select>\n            <span *ngIf=\" control.valid && control.dirty\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"!control.valid && control.dirty\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n        </div>\n    "
    })
], FormInputComponent);

var _a;
//# sourceMappingURL=forminput.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infrastructure_component__ = __webpack_require__(85);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__infrastructure_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forminput_forminput_module__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__infrastructure_component__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfrastructureModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InfrastructureModule = (function () {
    function InfrastructureModule() {
    }
    return InfrastructureModule;
}());
InfrastructureModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__forminput_forminput_module__["a" /* FormInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__infrastructure_component__["a" /* InfrastructureComponent */]]
    })
], InfrastructureModule);

//# sourceMappingURL=infrastructure.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_component__ = __webpack_require__(86);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__map_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_component__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapModule = (function () {
    function MapModule() {
    }
    return MapModule;
}());
MapModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__map_component__["a" /* MapComponent */]]
    })
], MapModule);

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__(259),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_component__ = __webpack_require__(166);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__settings_component__["a" /* SettingsComponent */]]
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 168:
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

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".my-group .form-control {\r\n    width: 50%;\r\n}\r\n\r\n.btn-link,\r\n.btn-link:hover,\r\n.btn-link:focus,\r\n.btn-link:active {\r\n    border-color: transparent;\r\n    padding-top: 0;\r\n    margin-top: 6px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid display-table\">\r\n    <div class=\"row display-table-row\">\r\n        <div class=\"col-md-2 col-sm-1 hidden-xs display-table-cell v-align box\" id=\"navigation\">\r\n            <div class=\"logo\">\r\n                <a hef=\"home.html\">\r\n                    <img src=\"http://www.npc.edu/sites/files/shared/sbdc/google-maps-logo.png\" alt=\"merkery_logo\" class=\"hidden-xs hidden-sm\">\r\n                    <img class=\"img-responsive\" src=\"http://www.npc.edu/sites/files/shared/sbdc/google-maps-logo.png\" alt=\"merkery_logo\" class=\"visible-xs visible-sm circle-logo\">\r\n                </a>\r\n            </div>\r\n            <div class=\"navi\">\r\n                <ul>\r\n                    <li [routerLink]=\"['/dashboard']\" [routerLinkActive]=\"['active']\">\r\n                        <i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>\r\n                        <span class=\"hidden-xs hidden-sm\">Dashboard</span>\r\n                    </li>\r\n                    <li [routerLink]=\"['/map']\" [routerLinkActive]=\"['active']\">\r\n                        <i class=\"fa fa-map-o\" aria-hidden=\"true\"></i>\r\n                        <span class=\"hidden-xs hidden-sm\">Map</span>\r\n                    </li>\r\n                    <li [routerLink]=\"['/building']\" [routerLinkActive]=\"['active']\">\r\n                        <i class=\"fa fa-building-o\" aria-hidden=\"true\"></i>\r\n                        <span class=\"hidden-xs hidden-sm\">Building</span>\r\n                    </li>\r\n                    <li [routerLink]=\"['/company']\" [routerLinkActive]=\"['active']\">\r\n                        <i class=\"fa fa-bookmark-o\" aria-hidden=\"true\"></i>\r\n                        <span class=\"hidden-xs hidden-sm\">Company</span>\r\n                    </li>\r\n                    <li [routerLink]=\"['/infrastructure']\" [routerLinkActive]=\"['active']\">\r\n                        <i class=\"fa fa-road\" aria-hidden=\"true\"></i>\r\n                        <span class=\"hidden-xs hidden-sm\">Infrastructure</span>\r\n                    </li>\r\n                    <li [routerLink]=\"['/users']\" [routerLinkActive]=\"['active']\">\r\n                        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                        <span class=\"hidden-xs hidden-sm\">Users</span>\r\n                    </li>\r\n                    <li [routerLink]=\"['/settings']\" [routerLinkActive]=\"['active']\">\r\n                        <i class=\"fa fa-gears\" aria-hidden=\"true\"></i>\r\n                        <span class=\"hidden-xs hidden-sm\">Setting</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10 col-sm-11 display-table-cell v-align\">\r\n            <!--<button type=\"button\" class=\"slide-toggle\">Slide Toggle</button> -->\r\n            <div class=\"row\">\r\n                <header>\r\n                    <div class=\"col-md-7\">\r\n                        <nav class=\"navbar-default pull-left\">\r\n                            <div class=\"navbar-header\">\r\n                                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"offcanvas\" data-target=\"#side-menu\" aria-expanded=\"false\">\r\n                                        <span class=\"sr-only\">Toggle navigation</span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                        <span class=\"icon-bar\"></span>\r\n                                    </button>\r\n                            </div>\r\n                        </nav>\r\n                        <div class=\"search hidden-xs hidden-sm\">\r\n                            <input type=\"text\" placeholder=\"Search\" id=\"search\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <div class=\"header-rightside\">\r\n                            <ul class=\"list-inline header-top pull-right\">\r\n                                <li class=\"hidden-xs\"><a href=\"#\" class=\"add-project\" data-toggle=\"modal\" data-target=\"#add_project\">Add Project</a></li>\r\n                                <li><a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\r\n                                <li>\r\n                                    <a href=\"#\" class=\"icon-info\">\r\n                                        <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\r\n                                        <span class=\"label label-primary\">3</span>\r\n                                    </a>\r\n                                </li>\r\n                                <li class=\"dropdown\">\r\n                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><img src=\"https://openclipart.org/download/247316/abstract-user-flat-2.svg\" alt=\"user\">\r\n                                        <b class=\"caret\"></b></a>\r\n                                    <ul class=\"dropdown-menu\">\r\n                                        <li>\r\n                                            <div class=\"navbar-content\">\r\n                                                <span>JS Krishna</span>\r\n                                                <p class=\"text-muted small\">\r\n                                                    me@jskrishna.com\r\n                                                </p>\r\n                                                <div class=\"divider\">\r\n                                                </div>\r\n                                                <a href=\"#\" class=\"view btn-sm active\">View Profile</a>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </header>\r\n            </div>\r\n            <div class=\"user-dashboard\">\r\n                <router-outlet></router-outlet>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal -->\r\n<div id=\"add_project\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header login-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\r\n                <h4 class=\"modal-title\">Add Project</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <input type=\"text\" placeholder=\"Project Title\" name=\"name\">\r\n                <input type=\"text\" placeholder=\"Post of Post\" name=\"mail\">\r\n                <input type=\"text\" placeholder=\"Author\" name=\"passsword\">\r\n                <textarea placeholder=\"Desicrption\"></textarea>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"cancel\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"add-project\" data-dismiss=\"modal\">Save</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<h1>Building data</h1>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"sales\">\r\n\r\n            <!-- Nav tabs -->\r\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                <li role=\"presentation\" class=\"active\"><a href=\"#listdata\" aria-controls=\"listdata\" role=\"tab\" data-toggle=\"tab\">List data</a></li>\r\n                <li role=\"presentation\">\r\n                    <a href=\"#formentry\" aria-controls=\"formentry\" role=\"tab\" data-toggle=\"tab\" id=\"tabform\">Form entry/edit</a>\r\n                </li>\r\n            </ul>\r\n\r\n            <!-- Tab panes -->\r\n            <div class=\"tab-content\">\r\n                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"listdata\">\r\n\r\n                    <table class=\"table table-responsive table-stripped\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Building ID</th>\r\n                                <th>Title</th>\r\n                                <th>Year</th>\r\n                                <th>Function</th>\r\n                                <th>City</th>\r\n                                <th>Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of buildings\">\r\n                                <td>{{item.id}}</td>\r\n                                <td>{{item.title}}</td>\r\n                                <td>{{item.year}}</td>\r\n                                <td>{{item.function}}</td>\r\n                                <td>{{item.city}}</td>\r\n                                <td>\r\n                                    <!--<button class=\"btn btn-xs btn-primary\">Edit</button>-->\r\n                                    <button type=\"button\" class=\"btn btn-xs btn-success\" (click)=\"showCompanyInfo(item)\">Info</button>\r\n                                    <button type=\"button\" class=\"btn btn-xs btn-primary\" (click)=\"showBuildingHistory(item.companyhistory)\">Company history</button>\r\n                                    <!--<button class=\"btn btn-xs btn-danger\">Delete</button>-->\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n\r\n                <!--formentry***************************************************************************************-->\r\n                <div role=\"tabpanel\" class=\"tab-pane\" id=\"formentry\">\r\n                    <form [formGroup]=\"formBuilding\" id=\"formBuilding\" (submit)=\"saveBuilding($event)\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-md-4 title-group\">Basic Information</div>\r\n                            <div class=\"col-xs-12 col-md-8 items-input\">\r\n                                <form-input [labelText]=\"'Building ID'\" [inputName]=\"'id'\" [control]=\"formBuilding.controls['id']\" [placeHolder]=\"'Building identication'\"></form-input>\r\n                                <form-input [labelText]=\"'Title'\" [inputName]=\"'title'\" [control]=\"formBuilding.controls['title']\" [placeHolder]=\"'Building title/name'\"></form-input>\r\n                                <form-input [type]=\"'number'\" [labelText]=\"'Built year'\" [inputName]=\"'year'\" [control]=\"formBuilding.controls['year']\" [placeHolder]=\"'Built year'\"></form-input>\r\n                                <form-input [labelText]=\"'Function'\" [inputName]=\"'function'\" [control]=\"formBuilding.controls['function']\" [placeHolder]=\"'Building function'\"></form-input>\r\n                                <form-input [type]=\"'textarea'\" [labelText]=\"'Description'\" [inputName]=\"'description'\" [control]=\"formBuilding.controls['description']\" [placeHolder]=\"''\"></form-input>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-md-4 title-group\">Detail Address</div>\r\n                            <div class=\"col-xs-12 col-md-8 items-input\">\r\n                                <form-input [type]=\"'textarea'\" [labelText]=\"'Address'\" [inputName]=\"'address'\" [control]=\"formBuilding.controls['address']\" [placeHolder]=\"'Address'\"></form-input>\r\n                                <form-input [labelText]=\"'City'\" [inputName]=\"'city'\" [control]=\"formBuilding.controls['city']\" [placeHolder]=\"'City'\"></form-input>\r\n                                <form-input [type]=\"'number'\" [labelText]=\"'Number'\" [inputName]=\"'number'\" [control]=\"formBuilding.controls['number']\" [placeHolder]=\"'Building number'\"></form-input>\r\n                                <form-input [labelText]=\"'Postcode'\" [inputName]=\"'postcode'\" [control]=\"formBuilding.controls['postcode']\" [placeHolder]=\"'Postcode'\"></form-input>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <label>Building Location</label>\r\n                                <button type=\"button\" class=\"btn btn-primary btn-outline btn-xs pull-right\" (click)=\"draw()\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Start drawing\"><i class=\"fa fa-pencil-square-o\"></i></button>\r\n                                <button type=\"button\" class=\"btn btn-warning btn-outline btn-xs pull-right\" (click)=\"modify()\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit building\"><i class=\"fa fa-pencil\"></i></button>\r\n                                <button type=\"button\" class=\"btn btn-success btn-outline btn-xs pull-right\" (click)=\"deactive()\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Finish editing\"><i class=\"fa fa-check-square-o\"></i></button>\r\n                                <button type=\"button\" class=\"btn btn-danger btn-outline btn-xs pull-right\" (click)=\"reset()\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Reset vector\"><i class=\"fa fa-trash-o\"></i></button>\r\n                                <div id=\"map\" style=\"width:100%; height:400px;\"></div>\r\n                                <!--<input type=\"hidden\" name=\"geometry\" id=\"geometry\" />\r\n                                <input type=\"hidden\" name=\"x\" id=\"x\" />\r\n                                <input type=\"hidden\" name=\"y\" id=\"y\" />-->\r\n                                <form-input [type]=\"'hidden'\" [labelText]=\"''\" [inputName]=\"'geometry'\" [control]=\"formBuilding.controls['geometry']\" [placeHolder]=\"''\"></form-input>\r\n                                <form-input [type]=\"'hidden'\" [labelText]=\"''\" [inputName]=\"'x'\" [control]=\"formBuilding.controls['x']\" [placeHolder]=\"''\"></form-input>\r\n                                <form-input [type]=\"'hidden'\" [labelText]=\"''\" [inputName]=\"'y'\" [control]=\"formBuilding.controls['y']\" [placeHolder]=\"''\"></form-input>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"pull-right\">\r\n                            <button class=\"btn btn-default\">Cancel</button>\r\n                            <button class=\"btn btn-primary\">Save</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <!--======================================================================-->\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"modalBuilding\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                <h2 class=\"modal-title\" id=\"myModalLabel\">Building Information</h2>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"modalBuildingHistory\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                <h2 class=\"modal-title\" id=\"myModalLabel\">Building company history</h2>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <table class=\"table table-responsive table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Company ID</th>\r\n                            <th>Name</th>\r\n                            <th>Category</th>\r\n                            <th>Start date</th>\r\n                            <th>End date</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<h1>Company data</h1>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"sales\">\r\n            <!-- Nav tabs -->\r\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                <li role=\"presentation\" class=\"active\"><a href=\"#tablistdata\" aria-controls=\"tablistdata\" role=\"tab\" data-toggle=\"tab\">List data</a></li>\r\n                <li role=\"presentation\"><a href=\"#tabformcompany\" aria-controls=\"tabformcompany\" role=\"tab\" data-toggle=\"tab\">Company form</a></li>\r\n            </ul>\r\n\r\n            <!-- Tab panes -->\r\n            <div class=\"tab-content\">\r\n                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"tablistdata\">\r\n                    <table class=\"table table-responsive table-stripped\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>ID</th>\r\n                                <th>Title</th>\r\n                                <th>Year</th>\r\n                                <th>Category</th>\r\n                                <th>Status</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of companies\">\r\n                                <td>{{item.id}}</td>\r\n                                <td>{{item.title}}</td>\r\n                                <td>{{item.category}}</td>\r\n                                <td>{{item.startyear}}</td>\r\n                                <td>{{item.endyear}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div role=\"tabpanel\" class=\"tab-pane\" id=\"tabformcompany\">\r\n                    <form>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-md-4 title-group\">Basic Information</div>\r\n                            <div class=\"col-xs-12 col-md-8 items-input\">\r\n                                <form-input [labelText]=\"'ID'\" [inputName]=\"'id'\" [control]=\"formCompany.controls['id']\" [placeHolder]=\"'Company identication'\"></form-input>\r\n                                <form-input [labelText]=\"'Name'\" [inputName]=\"'title'\" [control]=\"formCompany.controls['title']\" [placeHolder]=\"'Company name'\"></form-input>\r\n                                <form-input [labelText]=\"'End year'\" [inputName]=\"'startyear'\" [control]=\"formCompany.controls['startyear']\" [placeHolder]=\"'Start year'\"></form-input>\r\n                                <form-input [labelText]=\"'Start year'\" [inputName]=\"'endyear'\" [control]=\"formCompany.controls['endyear']\" [placeHolder]=\"'End year'\"></form-input>\r\n                                <form-input [labelText]=\"'Category'\" [inputName]=\"'category'\" [control]=\"formCompany.controls['category']\" [placeHolder]=\"'Company category'\"></form-input>\r\n                                <form-input [type]=\"'textarea'\" [labelText]=\"'Description'\" [inputName]=\"'description'\" [control]=\"formCompany.controls['description']\" [placeHolder]=\"''\"></form-input>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-md-4 title-group\">Detail Address</div>\r\n                            <div class=\"col-xs-12 col-md-8 items-input\">\r\n                                <form-input [type]=\"'textarea'\" [labelText]=\"'Address'\" [inputName]=\"'address'\" [control]=\"formCompany.controls['address']\" [placeHolder]=\"'Address'\"></form-input>\r\n                                <form-input [labelText]=\"'City'\" [inputName]=\"'city'\" [control]=\"formCompany.controls['city']\" [placeHolder]=\"'City'\"></form-input>\r\n                                <form-input [labelText]=\"'Postcode'\" [inputName]=\"'postcode'\" [control]=\"formCompany.controls['postcode']\" [placeHolder]=\"'Postcode'\"></form-input>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"pull-right\">\r\n                            <button class=\"btn btn-default\">Cancel</button>\r\n                            <button class=\"btn btn-primary\">Save</button>\r\n                        </div>\r\n                    </form>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<h1>Infrastructure data</h1>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"sales\">\r\n\r\n            <!-- Nav tabs -->\r\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                <li role=\"presentation\" class=\"active\"><a href=\"#listdata\" aria-controls=\"listdata\" role=\"tab\" data-toggle=\"tab\">List data</a></li>\r\n                <li role=\"presentation\">\r\n                    <a href=\"#formentry\" aria-controls=\"formentry\" role=\"tab\" data-toggle=\"tab\" id=\"tabform\">Form entry/edit</a>\r\n                </li>\r\n            </ul>\r\n\r\n            <!-- Tab panes -->\r\n            <div class=\"tab-content\">\r\n                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"listdata\">\r\n\r\n                    <table class=\"table table-responsive table-stripped\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Building ID</th>\r\n                                <th>Title</th>\r\n                                <th>Year</th>\r\n                                <th>Function</th>\r\n                                <th>Status</th>\r\n                                <th>Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>2334234</td>\r\n                                <td>Gudang</td>\r\n                                <td>2015</td>\r\n                                <td>Warehouse</td>\r\n                                <td>Active</td>\r\n                                <td>\r\n                                    <button class=\"btn btn-xs btn-primary\">Edit</button>\r\n                                    <button class=\"btn btn-xs btn-success\">Info</button>\r\n                                    <button class=\"btn btn-xs btn-danger\">Delete</button>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>2334234</td>\r\n                                <td>Gudang</td>\r\n                                <td>2015</td>\r\n                                <td>Warehouse</td>\r\n                                <td>Active</td>\r\n                                <td><button class=\"btn btn-xs btn-primary\">Edit</button></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>2334234</td>\r\n                                <td>Gudang</td>\r\n                                <td>2015</td>\r\n                                <td>Warehouse</td>\r\n                                <td>Active</td>\r\n                                <td><button class=\"btn btn-xs btn-primary\">Edit</button></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>2334234</td>\r\n                                <td>Gudang</td>\r\n                                <td>2015</td>\r\n                                <td>Warehouse</td>\r\n                                <td>Active</td>\r\n                                <td><button class=\"btn btn-xs btn-primary\">Edit</button></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n\r\n                <!--formentry***************************************************************************************-->\r\n                <div role=\"tabpanel\" class=\"tab-pane\" id=\"formentry\">\r\n                    <form>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-md-4 title-group\">Basic Information</div>\r\n                            <div class=\"col-xs-12 col-md-8 items-input\">\r\n                                <form-input [labelText]=\"'Infrastructure name'\" [inputName]=\"'name'\" [control]=\"formInfrastructur.controls['name']\" [placeHolder]=\"'Infrastructure name'\"></form-input>\r\n                                <form-input [type]=\"'date'\" [labelText]=\"'Built start date'\" [inputName]=\"'startdate'\" [control]=\"formInfrastructur.controls['startdate']\" [placeHolder]=\"'Start date built'\"></form-input>\r\n                                <form-input [type]=\"'date'\" [labelText]=\"'Built start date'\" [inputName]=\"'enddate'\" [control]=\"formInfrastructur.controls['enddate']\" [placeHolder]=\"'End data built'\"></form-input>\r\n                                <form-input [type]=\"'select'\" [list]=\"objectfunctions\" [labelText]=\"'Function'\" [inputName]=\"'function'\" [control]=\"formInfrastructur.controls['function']\" [placeHolder]=\"'Building function'\"></form-input>\r\n                                <form-input [type]=\"'textarea'\" [labelText]=\"'Description'\" [inputName]=\"'description'\" [control]=\"formInfrastructur.controls['description']\" [placeHolder]=\"''\"></form-input>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <label>Infrastructure Location</label>\r\n                                <button class=\"btn btn-primary btn-outline btn-xs pull-right\" (click)=\"draw('Polygon')\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Start drawing polygon\"><i class=\"fa fa-pencil-square-o\"></i></button>\r\n                                <button class=\"btn btn-primary btn-outline btn-xs pull-right\" (click)=\"draw('LineString')\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Start drawing line path\"><i class=\"fa fa-object-ungroup\"></i></button>\r\n                                <button class=\"btn btn-warning btn-outline btn-xs pull-right\" (click)=\"modify()\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit building\"><i class=\"fa fa-pencil\"></i></button>\r\n                                <button class=\"btn btn-success btn-outline btn-xs pull-right\" (click)=\"deactive()\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Finish editing\"><i class=\"fa fa-check-square-o\"></i></button>\r\n                                <button class=\"btn btn-danger btn-outline btn-xs pull-right\" (click)=\"reset()\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Reset vector\"><i class=\"fa fa-trash-o\"></i></button>\r\n                                <div id=\"map\" style=\"width:100%; height:400px;\"></div>\r\n                                <input type=\"hidden\" name=\"geometry\" id=\"geometry\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"pull-right\">\r\n                            <button class=\"btn btn-default\">Cancel</button>\r\n                            <button class=\"btn btn-primary\">Save</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <!--======================================================================-->\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"row\">\r\n                <div class=\"sales\" style=\"margin-bottom:0px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"input-group my-group\">\r\n                                <input type=\"text\" class=\"form-control\" name=\"snpid\" placeholder=\"Search...\" />\r\n                                <select id=\"lunch\" class=\"selectpicker form-control\" data-live-search=\"true\" title=\"Please select a lunch ...\">\r\n                                    <option>Building</option>\r\n                                    <option>Company</option>\r\n                                    <option>Address</option>\r\n                                    <option>Infrastructure</option>\r\n                                </select>\r\n                                <span class=\"input-group-btn\">\r\n                                    <button class=\"btn btn-primary my-group-button\" type=\"button\">Search</button>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"text-right\">\r\n                                <button class=\"btn btn-md btn-link btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Export to PDF\"><i class=\"fa fa-file-pdf-o\"></i></button>\r\n                                <button class=\"btn btn-md btn-link btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Export to image\"><i class=\"fa fa-file-image-o\"></i></button>\r\n                                <button class=\"btn btn-md btn-link btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Filter\"><i class=\"fa fa-filter\"></i></button>\r\n                                <button class=\"btn btn-md btn-link btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete object\"><i class=\"fa fa-trash-o\"></i></button>\r\n                                <button class=\"btn btn-md btn-link btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Move object\"><i class=\"fa fa-arrows\"></i></button>\r\n                                <button class=\"btn btn-md btn-link btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit object\"><i class=\"fa fa-pencil-square-o\"></i></button>\r\n                                <button class=\"btn btn-md btn-link btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add point\"><i class=\"fa fa-circle-o\"></i></button>\r\n                                <button class=\"btn btn-md btn-link btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Draw line\"><i class=\"fa fa-arrows-h\"></i></button>\r\n                                <button class=\"btn btn-md btn-link btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Draw polygon\"><i class=\"fa fa-object-ungroup\"></i></button>\r\n                                <button class=\"btn btn-md btn-link btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Hand\"><i class=\"fa fa-hand-paper-o\"></i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--<div class=\"sales\">-->\r\n\r\n                <div id=\"map\">\r\n                </div>\r\n                <!--</div>-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  settings works!\r\n</p>\r\n"

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* unused harmony export StaticMap */
/* unused harmony export path */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return apiUrl; });
/* unused harmony export SuccessSaveMessage */
/* unused harmony export SuccessDeleteMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return httpHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return totalRowDataPagination; });
/* unused harmony export httpHeaderFormFile */
/* unused harmony export ResponseModel */
/* unused harmony export handleResponseError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return buildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return companies; });
/* unused harmony export companyMarker */



// import { AuthService } from './app/auth/auth.service';

var StaticMap;
var path = '/prod';
var appID = "d41d8cd98f00b204e9800998ecf8427e";
var apiUrl = "http://localhost/wonderland/api/";
var SuccessSaveMessage = "Data Berhasil disimpan...!";
var SuccessDeleteMessage = "Data Berhasil dihapus...!";
var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
var httpHeader = {
    headers: headers,
    withCredentials: true
};
var totalRowDataPagination = 10;
var httpHeaderFormFile = {
    withCredentials: true
};
var ResponseModel = (function () {
    function ResponseModel() {
    }
    return ResponseModel;
}());

var handleResponseError = function (error) {
    return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json() || ' error');
};
var buildings = [
    {
        pk: 1,
        id: "BLD20030900001",
        title: "Sampoerna house",
        year: "2003",
        function: "Office",
        address: "Jl. Rungkut Industri",
        city: "Surabaya",
        postcode: "61215",
        number: "20",
        description: "Dummies building",
        geometry: "POLYGON((112.75949724473573 -7.332274602655029,112.76022680558778 -7.332274602655029,112.76009805955506 -7.333551334146118,112.75941141404725 -7.33348696112976,112.75949724473573 -7.332274602655029))",
        x: 112.75981910981751,
        y: -7.332912968400573,
        companyhistory: [
            {
                id: "CPY2012010020",
                title: "Nestle Indonesia",
                category: "Sales office",
                startyear: "16 January 2012",
                endyear: "20 May 2014"
            },
            {
                id: "CPY2012100002",
                title: "PT ABC",
                category: "Head office",
                startyear: "16 October 2014",
                endyear: "17 December 2015"
            },
            {
                id: "CPY2012010920",
                title: "Indomobil",
                category: "Sales office",
                startyear: "16 January 2016",
                endyear: "Current"
            }
        ]
    },
    {
        pk: 2,
        id: "BLD20030900001",
        title: "Panasonic",
        year: "2011",
        function: "Factory",
        address: "Jl. Rungkut Industri",
        city: "Surabaya",
        postcode: "61215",
        number: "12",
        description: "Dummies factory",
        geometry: "POLYGON((112.75944360055543 -7.333926843408204,112.76002295770265 -7.333883928063965,112.75993712701417 -7.334634946588135,112.75944360055543 -7.333926843408204))",
        x: 112.75973327912904,
        y: -7.33425943732605,
        companyhistory: [
            {
                id: "CPY2012010020",
                title: "Panasonic Indonesia",
                category: "Sales office",
                startyear: "16 January 2012",
                endyear: "Current"
            }
        ]
    },
    {
        pk: 3,
        id: "BLD20020100001",
        title: "Wisma Sier",
        year: "2002",
        function: "Office",
        address: "Jl. Raya Rungkut Industri",
        city: "Surabaya",
        postcode: "61215",
        number: "12",
        description: "Dummies office",
        geometry: "POLYGON((112.75808908500291 -7.330783294442749,112.75814675249673 -7.330724285844421,112.75825135864831 -7.33074037909851,112.75838010468102 -7.330898629430389,112.75835328259087 -7.331091748479461,112.75826476969338 -7.331172214749908,112.75827549852944 -7.331295596364593,112.75819771446801 -7.331357287171936,112.75796972670175 -7.331341193917846,112.75791071810342 -7.331252681020355,112.75791876473046 -7.331131981614685,112.75793754019357 -7.331102477315521,112.75787584938622 -7.331030057672119,112.75788657822228 -7.330818163159942,112.75797240891076 -7.330764518979644,112.75808908500291 -7.330783294442749))",
        x: 112.75812797703362,
        y: -7.331040786508178,
        companyhistory: [
            {
                id: "CPY2002010020",
                title: "PT. SIER",
                category: "Office",
                startyear: "16 January 2002",
                endyear: "Current"
            }
        ]
    }
];
var companies = [
    {
        id: "CPY2002010020",
        title: "PT. SIER",
        category: "Office",
        startyear: "16 January 2002",
        endyear: "Current",
        x: 112.75812797703362,
        y: -7.331040786508178,
    },
    {
        id: "CPY2012010020",
        title: "Panasonic Indonesia",
        category: "Sales office",
        startyear: "16 January 2012",
        endyear: "Current",
        x: 112.75973327912904,
        y: -7.33425943732605,
    },
    {
        id: "CPY2012010020",
        title: "Nestle Indonesia",
        category: "Sales office",
        startyear: "16 January 2012",
        endyear: "20 May 2014"
    },
    {
        id: "CPY2012100002",
        title: "PT ABC",
        category: "Head office",
        startyear: "16 October 2014",
        endyear: "17 December 2015"
    },
    {
        id: "CPY2012010920",
        title: "Indomobil",
        category: "Sales office",
        startyear: "16 January 2016",
        endyear: "Current",
        x: 112.75981910981751,
        y: -7.332912968400573,
    }
];
var companyMarker = "data:image/png;base64,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";
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(117);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forminput_component__ = __webpack_require__(161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormInputModule = (function () {
    function FormInputModule() {
    }
    return FormInputModule;
}());
FormInputModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__forminput_component__["a" /* FormInputComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__forminput_component__["a" /* FormInputComponent */]
        ]
    })
], FormInputModule);

//# sourceMappingURL=forminput.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__building_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuildingComponent = (function () {
    function BuildingComponent(fb, svcBuilding) {
        this.svcBuilding = svcBuilding;
        this.source = new ol.source.Vector({ wrapX: false });
        this.vector = new ol.layer.Vector();
        this.currentPage = 1;
        this.rows = __WEBPACK_IMPORTED_MODULE_2__globals__["e" /* totalRowDataPagination */];
        this.buildings = __WEBPACK_IMPORTED_MODULE_2__globals__["f" /* buildings */];
        this.formBuilding = fb.group({
            'title': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3)])],
            'id': '',
            'year': '',
            'function': '',
            'status': '',
            'postcode': '',
            'address': '',
            'city': '',
            'number': '',
            'geometry': '',
            'x': '',
            'y': '',
            'description': [null]
        });
    }
    BuildingComponent.prototype.ngOnInit = function () {
        //this.getPage(this.currentPage);
        var detach = $("#modalBuilding").detach();
        $("body").append(detach);
    };
    BuildingComponent.prototype.ngAfterViewInit = function () {
        this.vector.setSource(this.source);
        this.map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            target: 'map',
            controls: ol.control.defaults({
                attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                    collapsible: false
                })
            }),
            view: new ol.View({
                projection: "EPSG:4326",
                center: [112.755946, -7.3310086],
                zoom: 15
            })
        });
        this.map.addLayer(this.vector);
        var map = this.map;
        $("#tabform").on('shown.bs.tab', function () {
            map.updateSize();
        });
        $('[data-toggle="tooltip"]').tooltip({ container: 'body' });
    };
    BuildingComponent.prototype.showCompanyInfo = function (params) {
        var html = "<table class=\"table table-striped table-reponsive\">\n                    <tbody>\n                         <tr>\n                             <td>Building ID</td>\n                             <td>" + params.id + "</td>\n                         </tr> \n                         <tr>\n                             <td>Name</td>\n                             <td>" + params.title + "</td>\n                         </tr> \n                         <tr>\n                             <td>Built Year</td>\n                             <td>" + params.year + "</td>\n                         </tr> \n                         <tr>\n                             <td>Function</td>\n                             <td>" + params.id + "</td>\n                         </tr> \n                         <tr>\n                             <td>Address</td>\n                             <td>" + params.address + "</td>\n                         </tr> \n                         <tr>\n                             <td>Number</td>\n                             <td>" + params.number + "</td>\n                         </tr> \n                         <tr>\n                             <td>City</td>\n                             <td>" + params.city + "</td>\n                         </tr> \n                         <tr>\n                             <td>PostCode</td>\n                             <td>" + params.postcode + "</td>\n                         </tr> \n                         <tr>\n                             <td>Description</td>\n                             <td>" + params.description + "</td>\n                         </tr>       \n                    </tbody>\n                </table>";
        $("#modalBuilding div.modal-body").html("").html(html);
        $("#modalBuilding").modal("show");
    };
    BuildingComponent.prototype.showBuildingHistory = function (params) {
        console.log(params);
        var rows = "";
        params.forEach(function (item) {
            rows += "<tr>\n                  <td>" + item.id + "</td>\n                  <td>" + item.title + "</td>\n                  <td>" + item.category + "</td>\n                  <td>" + item.startyear + "</td>\n                  <td>" + item.endyear + "</td>\n               </tr>\n              ";
        });
        $("#modalBuildingHistory div.modal-body table tbody").html("").html(rows);
        $("#modalBuildingHistory").modal("show");
    };
    BuildingComponent.prototype.getPage = function ($event) {
        var _this = this;
        this.currentPage = $event;
        this.svcBuilding.getData(this.currentPage, this.rows).then(function (response) {
            if (response.status == true) {
                _this.total = response.data.total;
                _this.buildings = response.data;
            }
        });
    };
    BuildingComponent.prototype.saveBuilding = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.formBuilding.valid) {
            var formData = $("#formBuilding").serialize();
            this.svcBuilding.save(formData).then(function (response) {
                if (response.status == true) {
                    //swal("Done!", global.SuccessSaveMessage, "success");
                    alert("Save successfully!");
                    _this.formBuilding.reset();
                    _this.getPage(_this.currentPage);
                }
                else {
                    alert("Failed!");
                    // swal("Failed!", response.message, "error");
                }
            });
        }
    };
    BuildingComponent.prototype.draw = function () {
        this.source.clear();
        var draw = new ol.interaction.Draw({
            source: this.source,
            type: "Polygon"
        });
        this.map.addInteraction(draw);
        var map = this.map;
        draw.on('drawend', function (e) {
            map.removeInteraction(draw);
            var format = new ol.format.WKT();
            var wktgeometry = format.writeFeature(e.feature);
            var extent = e.feature.getGeometry().getExtent();
            var X = extent[0] + (extent[2] - extent[0]) / 2;
            var Y = extent[1] + (extent[3] - extent[1]) / 2;
            $("#geometry").val(wktgeometry);
            $("#x").val(X);
            $("#y").val(Y);
        });
    };
    BuildingComponent.prototype.modify = function () {
        this.selectTool = new ol.interaction.Select({
            wrapX: false,
        });
        this.modifyTool = new ol.interaction.Modify({
            features: this.selectTool.getFeatures()
        });
        this.map.addInteraction(this.selectTool);
        this.map.addInteraction(this.modifyTool);
    };
    BuildingComponent.prototype.deactive = function () {
        this.map.removeInteraction(this.selectTool);
        this.map.removeInteraction(this.modifyTool);
        var format = new ol.format.WKT();
        var wktgeometry = format.writeFeature(this.source.getFeatures[0]);
        $("textarea[name='geometry']").val(wktgeometry);
    };
    BuildingComponent.prototype.reset = function () {
        this.source.clear();
        $("textarea[name='geometry']").val("");
    };
    return BuildingComponent;
}());
BuildingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-building',
        template: __webpack_require__(254),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__building_service__["a" /* BuildingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__building_service__["a" /* BuildingService */]) === "function" && _b || Object])
], BuildingComponent);

var _a, _b;
//# sourceMappingURL=building.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BuildingService = (function () {
    function BuildingService(http) {
        this.http = http;
        this.data = {};
    }
    BuildingService.prototype.resetPropertyObject = function () {
        this.data = {};
        this.data.userid = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* appID */] + "User");
        this.data.token = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* appID */] + "Token");
    };
    BuildingService.prototype.save = function (paramsData) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__globals__["c" /* apiUrl */] + "building/add", paramsData, __WEBPACK_IMPORTED_MODULE_2__globals__["d" /* httpHeader */])
            .toPromise().then(function (response) { return response.json(); });
    };
    BuildingService.prototype.detail = function (id) {
        this.resetPropertyObject();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__globals__["c" /* apiUrl */] + "building/detail/" + id, $.param(this.data), __WEBPACK_IMPORTED_MODULE_2__globals__["d" /* httpHeader */])
            .toPromise().then(function (response) { return response.json(); });
    };
    BuildingService.prototype.getData = function (page, rows, filterstatus) {
        if (page === void 0) { page = 1; }
        if (rows === void 0) { rows = 10; }
        this.resetPropertyObject();
        this.data.page = page;
        this.data.rows = rows;
        this.data.status = filterstatus;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__globals__["c" /* apiUrl */] + "building/get", $.param(this.data), __WEBPACK_IMPORTED_MODULE_2__globals__["d" /* httpHeader */])
            .toPromise().then(function (response) { return response.json(); });
    };
    BuildingService.prototype.getMap = function (minX, maxX, minY, maxY) {
        var data = {
            minX: minX,
            maxX: maxX,
            minY: minY,
            maxY: maxY
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__globals__["c" /* apiUrl */] + "building/getmap", $.param(data), __WEBPACK_IMPORTED_MODULE_2__globals__["d" /* httpHeader */])
            .toPromise().then(function (response) { return response.json(); });
    };
    BuildingService.prototype.update = function (paramsData) {
        this.resetPropertyObject();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__globals__["c" /* apiUrl */] + "building/update", paramsData + "&" + $.param(this.data), __WEBPACK_IMPORTED_MODULE_2__globals__["d" /* httpHeader */])
            .toPromise().then(function (response) { return response.json(); });
    };
    return BuildingService;
}());
BuildingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BuildingService);

var _a;
//# sourceMappingURL=building.service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyComponent = (function () {
    function CompanyComponent(fb, svc) {
        this.svc = svc;
        this.companies = __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* companies */];
        this.formCompany = fb.group({
            'title': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3)])],
            'id': '',
            'startyear': '',
            'endyear': '',
            'category': '',
            'postcode': '',
            'address': '',
            'city': '',
            'number': '',
            'building': '',
            'x': '',
            'y': '',
            'description': [null]
        });
    }
    CompanyComponent.prototype.ngAfterViewInit = function () {
        $('[data-toggle="tooltip"]').tooltip({ container: "body" });
    };
    CompanyComponent.prototype.ngOnInit = function () {
        $(".my-group-button").css("height", "+=1px");
    };
    CompanyComponent.prototype.saveCompany = function (event) {
        event.preventDefault();
        if (this.formCompany.valid) {
            var formData = $("#formCompany").serialize();
            this.svc.save(formData).then(function (response) {
                if (response.status == true) {
                    //swal("Done!", global.SuccessSaveMessage, "success");
                    alert("Save successfully!");
                }
                else {
                    alert("Failed!");
                    // swal("Failed!", response.message, "error");
                }
            });
        }
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-company',
        template: __webpack_require__(255),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */]) === "function" && _b || Object])
], CompanyComponent);

var _a, _b;
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
        this.data = {};
    }
    CompanyService.prototype.resetPropertyObject = function () {
        this.data = {};
        this.data.userid = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* appID */] + "User");
        this.data.token = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__globals__["b" /* appID */] + "Token");
    };
    CompanyService.prototype.save = function (paramsData) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__globals__["c" /* apiUrl */] + "company/add", paramsData, __WEBPACK_IMPORTED_MODULE_2__globals__["d" /* httpHeader */])
            .toPromise().then(function (response) { return response.json(); });
    };
    CompanyService.prototype.detail = function (id) {
        this.resetPropertyObject();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__globals__["c" /* apiUrl */] + "company/detail/" + id, $.param(this.data), __WEBPACK_IMPORTED_MODULE_2__globals__["d" /* httpHeader */])
            .toPromise().then(function (response) { return response.json(); });
    };
    CompanyService.prototype.getData = function (page, rows, filterstatus) {
        if (page === void 0) { page = 1; }
        if (rows === void 0) { rows = 10; }
        this.resetPropertyObject();
        this.data.page = page;
        this.data.rows = rows;
        this.data.status = filterstatus;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__globals__["c" /* apiUrl */] + "company/get", $.param(this.data), __WEBPACK_IMPORTED_MODULE_2__globals__["d" /* httpHeader */])
            .toPromise().then(function (response) { return response.json(); });
    };
    CompanyService.prototype.getMap = function (minX, maxX, minY, maxY) {
        var data = {
            minX: minX,
            maxX: maxX,
            minY: minY,
            maxY: maxY
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__globals__["c" /* apiUrl */] + "company/getmap", $.param(data), __WEBPACK_IMPORTED_MODULE_2__globals__["d" /* httpHeader */])
            .toPromise().then(function (response) { return response.json(); });
    };
    CompanyService.prototype.update = function (paramsData) {
        this.resetPropertyObject();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__globals__["c" /* apiUrl */] + "company/update", paramsData + "&" + $.param(this.data), __WEBPACK_IMPORTED_MODULE_2__globals__["d" /* httpHeader */])
            .toPromise().then(function (response) { return response.json(); });
    };
    return CompanyService;
}());
CompanyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CompanyService);

var _a;
//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(256),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfrastructureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfrastructureComponent = (function () {
    function InfrastructureComponent(fb) {
        this.source = new ol.source.Vector({ wrapX: false });
        this.vector = new ol.layer.Vector();
        this.objectfunctions = [
            {
                'value': 'Pipe gas',
                'text': 'Pipe gas'
            },
            {
                'value': 'Fire department',
                'text': 'Fire department'
            },
            {
                'value': 'Generator',
                'text': 'Generator'
            },
            {
                'value': 'Culvert',
                'text': 'Culvert'
            }
        ];
        this.formInfrastructur = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3)])],
            'startdate': '',
            'enddate': '',
            'status': '',
            'type': '',
            'function': '',
            'description': [null]
        });
    }
    InfrastructureComponent.prototype.ngAfterViewInit = function () {
        this.vector.setSource(this.source);
        this.map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            target: 'map',
            controls: ol.control.defaults({
                attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                    collapsible: false
                })
            }),
            view: new ol.View({
                projection: "EPSG:4326",
                center: [112.755946, -7.3310086],
                zoom: 15
            })
        });
        this.map.addLayer(this.vector);
        var map = this.map;
        $("#tabform").on('shown.bs.tab', function () {
            map.updateSize();
        });
        $('[data-toggle="tooltip"]').tooltip({ container: 'body' });
    };
    InfrastructureComponent.prototype.draw = function (type) {
        this.source.clear();
        var draw = new ol.interaction.Draw({
            source: this.source,
            type: type
        });
        this.map.addInteraction(draw);
        var map = this.map;
        draw.on('drawend', function (e) {
            map.removeInteraction(draw);
            var format = new ol.format.WKT();
            var wktgeometry = format.writeFeature(e.feature);
            var extent = e.feature.getGeometry().getExtent();
            var X = extent[0] + (extent[2] - extent[0]) / 2;
            var Y = extent[1] + (extent[3] - extent[1]) / 2;
            $("#geometry").val(wktgeometry);
            $("#x").val(X);
            $("#y").val(Y);
        });
    };
    InfrastructureComponent.prototype.modify = function () {
        this.selectTool = new ol.interaction.Select({
            wrapX: false,
        });
        this.modifyTool = new ol.interaction.Modify({
            features: this.selectTool.getFeatures()
        });
        this.map.addInteraction(this.selectTool);
        this.map.addInteraction(this.modifyTool);
    };
    InfrastructureComponent.prototype.deactive = function () {
        this.map.removeInteraction(this.selectTool);
        this.map.removeInteraction(this.modifyTool);
        var format = new ol.format.WKT();
        var wktgeometry = format.writeFeature(this.source.getFeatures[0]);
        $("textarea[name='geometry']").val(wktgeometry);
    };
    InfrastructureComponent.prototype.reset = function () {
        this.source.clear();
        $("textarea[name='geometry']").val("");
    };
    InfrastructureComponent.prototype.ngOnInit = function () {
    };
    return InfrastructureComponent;
}());
InfrastructureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-infrastructure',
        template: __webpack_require__(257),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object])
], InfrastructureComponent);

var _a;
//# sourceMappingURL=infrastructure.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = (function () {
    function MapComponent() {
        this.companiesData = __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* companies */];
        this.buildingsData = __WEBPACK_IMPORTED_MODULE_1__globals__["f" /* buildings */];
        this.mapElement = $("#map");
        this.building = new ol.layer.Vector();
        this.buildingSource = new ol.source.Vector({ wrapX: false });
        this.company = new ol.layer.Vector();
        this.companySource = new ol.source.Vector();
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        $('[data-toggle="tooltip"]').tooltip({ container: "body" });
        this.building.setSource(this.buildingSource);
        this.company.setSource(this.companySource);
        this.map = new ol.Map({
            layers: [
                // new ol.layer.Tile({
                //   source: new ol.source.OSM()
                // })
                new ol.layer.Tile({
                    visible: true,
                    preload: Infinity,
                    source: new ol.source.BingMaps({
                        key: 'Av2pM7ttqlXOIGTYQP9TyTI4cz7Il_6Y_Mwls_P8mvXl8wbfB4BYPw8tXGzJA52U',
                        imagerySet: "AerialWithLabels"
                    })
                })
            ],
            target: 'map',
            controls: ol.control.defaults().extend([
                new ol.control.FullScreen(),
                new ol.control.OverviewMap(),
                new ol.control.ScaleLine()
            ]),
            view: new ol.View({
                projection: "EPSG:4326",
                center: [112.7581990555725, -7.332467721704101],
                zoom: 16
            })
        });
        this.map.addLayer(this.building);
        this.map.addLayer(this.company);
        this.loadBuildingLayer();
        this.loadCompanyLayer();
        $("#map").append("<div id='popup-wrapper'></div>");
        this.popupElement = document.getElementById('popup-wrapper');
        this.popup = new ol.Overlay({
            element: this.popupElement,
            offset: [0, -40],
            stopEvent: false
        });
        this.map.addOverlay(this.popup);
        this.eventListener();
    };
    MapComponent.prototype.loadBuildingLayer = function () {
        for (var i = 0; i < this.buildingsData.length; i++) {
            var format = new ol.format.WKT();
            var feature = format.readFeature(this.buildingsData[i].geometry);
            var style = new ol.style.Style({
                fill: new ol.style.Fill({
                    color: "rgba(231, 76, 60,0.5)"
                }),
                stroke: new ol.style.Stroke({
                    color: "rgba(192, 57, 43,1.0)",
                    width: 4
                }),
                text: new ol.style.Text({
                    text: this.buildingsData[i].title,
                    fill: new ol.style.Fill({
                        color: "rgba(236, 240, 241,1.0)",
                    }),
                    stroke: new ol.style.Stroke({
                        color: "rgba(192, 57, 43,1.0)",
                        width: 2
                    })
                })
            });
            feature.setStyle(style);
            this.buildingSource.addFeature(feature);
        }
    };
    MapComponent.prototype.showPopup = function (feature) {
        if (feature) {
            var layername = feature.get("type");
            var content = feature.get("content");
            if (content) {
                var geometry = feature.getGeometry();
                var coord = geometry.getCoordinates();
                coord[1] = (parseFloat(coord[1])).toString();
                this.popup.setPosition(coord);
                $(this.popupElement).popover({
                    'placement': 'top',
                    'html': true,
                    'content': content,
                    'template': '<div class="popover" style=""><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
                }).popover('show');
            }
        }
    };
    MapComponent.prototype.eventListener = function () {
        var base = this;
        this.map.on("pointermove", function (e) {
            var feature = base.map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
                if (layer) {
                    return feature;
                }
            });
            if (feature) {
                if ($(base.popupElement).next('.popover.in').length == 0) {
                    $(base.mapElement).css("cursor", "pointer");
                    base.showPopup(feature);
                }
            }
            else {
                $(base.mapElement).css("cursor", "pointer");
                if ($(base.popupElement).next('.popover.in').length > 0) {
                    $(base.popupElement).popover('destroy');
                }
            }
        });
    };
    MapComponent.prototype.loadCompanyLayer = function () {
        var companyStyle = new ol.style.Style({
            image: new ol.style.Icon(({
                size: [25, 40],
                anchor: [0.5, 40],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: "/assets/blue-pin-hi.png",
                scale: 1,
            })),
        });
        for (var i = 0; i < this.companiesData.length; i++) {
            if (this.companiesData[i].x) {
                console.log(this.companiesData[i].x, this.companiesData[i].y);
                var marker = new ol.Feature({
                    geometry: new ol.geom.Point([this.companiesData[i].x, this.companiesData[i].y])
                });
                marker.setStyle(companyStyle);
                var contentPopup = "<b>" + this.companiesData[i].title + "</b>";
                marker.setProperties({ content: contentPopup });
                this.company.getSource().addFeature(marker);
            }
        }
    };
    return MapComponent;
}());
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-map',
        template: __webpack_require__(258),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [])
], MapComponent);

//# sourceMappingURL=map.component.js.map

/***/ })

},[315]);
//# sourceMappingURL=main.bundle.js.map