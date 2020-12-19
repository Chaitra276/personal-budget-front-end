(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chaitra mv\Documents\Studies\MS\Fall 2020\NBAD\personal-budget-final\personal-budget\src\main.ts */"zUnb");


/***/ }),

/***/ "6g8o":
/*!************************************!*\
  !*** ./src/app/authguard.guard.ts ***!
  \************************************/
/*! exports provided: AuthguardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function() { return AuthguardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthguardGuard {
    constructor(_dataservice, router) {
        this._dataservice = _dataservice;
        this.router = router;
    }
    canActivate() {
        if (this._dataservice.verifyTokenPresence()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthguardGuard.ɵfac = function AuthguardGuard_Factory(t) { return new (t || AuthguardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthguardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthguardGuard, factory: AuthguardGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthguardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article/article.component */ "DLXL");



class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["pb-about"]], decls: 32, vars: 0, consts: [["nid", "main", 1, "container", "center"], [1, "page-area"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pb-article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Stay on track");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Do you know where you are spending your money? If you really stop to track it down, you would get surprised! Proper budget management depends on real data... and this app will help you with that! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pb-article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " What if your clothing budget ended? You will get an alert. The goal is to never go over the budget. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "pb-article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " People who stick to a financial plan, budgeting every expense, get out of debt faster! Also, they to live happier lives... since they expend without guilt or fear... because they know it is all good and accounted for. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pb-article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " This app is free!!! And you are the only one holding your data! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "pb-article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Stay on track");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Do you know where you are spending your money? If you really stop to track it down, you would get surprised! Proper budget management depends on real data... and this app will help you with that! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "pb-article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " What if your clothing budget ended? You will get an alert. The goal is to never go over the budget. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_article_article_component__WEBPACK_IMPORTED_MODULE_1__["ArticleComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9Rdk":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TableComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.indexOf(user_r1) + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.budget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.maxbudget);
} }
class TableComponent {
    constructor(_dataService) {
        this._dataService = _dataService;
        this.data = [];
    }
    ngOnInit() {
        this._dataService.getData()
            .subscribe((res) => {
            this.data = res;
            console.log(this.data);
        });
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["pb-table"]], decls: 15, vars: 1, consts: [[1, "table", "table-bordered"], [4, "ngFor", "ngForOf"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Budget Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "S.No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Maximum Allotment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableComponent_tr_14_Template, 9, 4, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid grey;\n  border-collapse: collapse;\n  padding: 5px;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #b4c6f0;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #b4c6f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoidGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSxcbnRoLFxudGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbnRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0YzZmMDtcbn1cblxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0YzZmMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DLXL":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = [[["h1"]], [["div"]]];
const _c1 = ["h1", "div"];
class ArticleComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["pb-article"]], ngContentSelectors: _c1, decls: 4, vars: 0, template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-article',
                templateUrl: './article.component.html',
                styleUrls: ['./article.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Mp4b":
/*!**************************************************!*\
  !*** ./src/app/addbudget/addbudget.component.ts ***!
  \**************************************************/
/*! exports provided: AddbudgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbudgetComponent", function() { return AddbudgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class AddbudgetComponent {
    constructor(_dataService, toastr, router, ngZone) {
        this._dataService = _dataService;
        this.toastr = toastr;
        this.router = router;
        this.ngZone = ngZone;
    }
    ngOnInit() {
    }
    expenseAddToast() {
        this.toastr.success('Expense Successfully Added. Check you homepage', 'Success');
    }
    duplicateExpense() {
        this.toastr.error('Expense already exists. Please add a new category', 'Error');
    }
    incompleteDetails() {
        this.toastr.warning('Please enter all the fields', 'Warning');
    }
    randomColorGen() {
        let randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
        return randomColor;
    }
    sendExpense() {
        let record = {};
        record['budget'] = this.budget;
        record['maxbudget'] = this.maxbudget;
        record['title'] = this.title.charAt(0).toUpperCase() + this.title.slice(1);
        record['color'] = this.randomColorGen();
        if (!this.budget || !this.maxbudget || !this.title) {
            this.incompleteDetails();
            return;
        }
        else {
            this._dataService.addBudgetdata(record)
                .subscribe(data => {
                console.log(data);
                this.budget = null;
                this.maxbudget = null;
                this.title = "";
                this.expenseAddToast();
                this.ngZone.run(() => {
                    this.router.navigate(['/homepage']);
                });
            }, err => {
                this.duplicateExpense();
                this.title = "";
            });
        }
    }
    locationreload() {
        location.reload();
    }
}
AddbudgetComponent.ɵfac = function AddbudgetComponent_Factory(t) { return new (t || AddbudgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AddbudgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddbudgetComponent, selectors: [["pb-addbudget"]], decls: 18, vars: 4, consts: [[1, "container"], [1, "row"], [1, "form-group"], ["for", "expense"], ["type", "text", "placeholder", "Enter Expense Name", "ngModel", "", "name", "expense", "id", "expense", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "limit"], ["type", "number", "placeholder", "Enter the max limit", "ngModel", "", "name", "limit", "id", "limit", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "current"], ["type", "number", "placeholder", "Enter Current budget", "ngModel", "", "name", "current", "id", "current", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn-primary", 3, "disabled", "click"]], template: function AddbudgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Expense Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddbudgetComponent_Template_input_ngModelChange_6_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Budget limit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddbudgetComponent_Template_input_ngModelChange_10_listener($event) { return ctx.maxbudget = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Current Budget: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddbudgetComponent_Template_input_ngModelChange_14_listener($event) { return ctx.budget = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddbudgetComponent_Template_button_click_16_listener() { return ctx.sendExpense(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.maxbudget);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.budget);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.title || !ctx.maxbudget || !ctx.budget);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: ["label[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n#expense[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 23px;\n  margin-left: 14px;\n}\n\n#limit[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 23px;\n  margin-left: 35px;\n}\n\n#current[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 23px;\n  margin-left: 10px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #4d5791;\n  color: white;\n  padding: 10px 10px;\n  margin: 0 340px;\n  display: block;\n  border: none;\n  cursor: pointer;\n  width: 20%;\n  opacity: 0.9;\n  text-align: center;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 2;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%] {\n  width: 20%;\n  padding: 15px;\n  margin: 0px 0 22px 0px;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  width: 20%;\n  padding: 15px;\n  margin: 0 0 20px 15px;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\ninput[type=number][_ngcontent-%COMP%]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZGJ1ZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTs7RUFFRSxzQkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBQUdGIiwiZmlsZSI6ImFkZGJ1ZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuI2V4cGVuc2Uge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuXG4jbGltaXQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xufVxuXG4jY3VycmVudCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMjNweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDU3OTE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBtYXJnaW46IDAgMzQwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDIwJTtcbiAgb3BhY2l0eTogMC45O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIG9wYWNpdHk6IDI7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMHB4IDAgMjJweCAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMCAwIDIwcHggMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddbudgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-addbudget',
                templateUrl: './addbudget.component.html',
                styleUrls: ['./addbudget.component.scss']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article/article.component */ "DLXL");
/* harmony import */ var _maxbudgetpie_maxbudgetpie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../maxbudgetpie/maxbudgetpie.component */ "ngu/");
/* harmony import */ var _pie_pie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pie/pie.component */ "icus");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../table/table.component */ "9Rdk");
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bar/bar.component */ "QZ6x");











class HomepageComponent {
    constructor(http, dataService, router) {
        this.http = http;
        this.dataService = dataService;
        this.router = router;
        this.dataSource = {
            datasets: [{
                    data: [],
                    backgroundColor: [
                        '#ffcd56',
                        '#ff6384',
                        '#36a2eb',
                        '#fd6b19',
                        '#808000',
                        '#E74C3C ',
                        '#A569BD ',
                        '#33FFE0'
                    ]
                }],
            labels: []
        };
    }
    ngOnInit() {
        this.dataService.getData().subscribe((data) => {
            for (let i = 0; i < data.length; i++) {
                this.dataSource.datasets[0].data[i] = data[i].budget;
                this.dataSource.labels[i] = data[i].title;
                this.createChart();
            }
        });
    }
    createChart() {
        var ctx = document.getElementById("myChart");
        var myPieChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"](ctx, {
            type: 'pie',
            data: this.dataSource
        });
    }
    AddBudget() {
        this.router.navigate(['/addbudget']);
    }
    callNgOnInit() {
        this.ngOnInit();
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["pb-homepage"]], decls: 47, vars: 0, consts: [["id", "main", 1, "container", "center"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "description", "content", "Follow the personal budget management app!!"], ["property", "og:title", "content", "Everything you need to know with budget management"], ["name", "robots", "content", "noindex, nofollow"], ["rel", "canonical", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://google.com")], [1, "page-area"], ["id", "maxbudgetpie", "width", "400", "height", "400", 2, "width", "350px", "height", "350px"], ["id", "d3chart"], ["id", "pie"], ["id", "barchart"], ["id", "bar"], [1, "container"], [1, "row"], [1, "btn-primary", 3, "click"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Personal Budget Web Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pb-article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Stay on track");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Do you know where you are spending your money? If you really stop to track it down, you would get surprised! Proper budget management depends on real data... and this app will help you with that! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "pb-article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " What if your clothing budget ended? You will get an alert. The goal is to never go over the budget. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "pb-article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "PieChart with Maximum budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "canvas", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "pb-maxbudgetpie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "article", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Donut chart with Current Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "figure", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "pb-pie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "article", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "figure", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "pb-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "article", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Dual Bar Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "figure", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "pb-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Click here to add a new expense!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_button_click_45_listener() { return ctx.AddBudget(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Add New Expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"], _maxbudgetpie_maxbudgetpie_component__WEBPACK_IMPORTED_MODULE_6__["MaxbudgetpieComponent"], _pie_pie_component__WEBPACK_IMPORTED_MODULE_7__["PieComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"], _bar_bar_component__WEBPACK_IMPORTED_MODULE_9__["BarComponent"]], styles: ["#skip[_ngcontent-%COMP%] {\n  background: #4d5791;\n  color: #fff;\n  font-weight: 700;\n  left: 50%;\n  padding: 4px;\n  position: absolute;\n  transform: translateY(-100%);\n}\n\n#skip[_ngcontent-%COMP%]:focus {\n  transform: translateY(0%);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #4d5791;\n  color: white;\n  padding: 10px 10px;\n  display: block;\n  border: none;\n  cursor: pointer;\n  width: 20%;\n  opacity: 0.9;\n  text-align: center;\n  margin-left: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUVGIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NraXAge1xuICBiYWNrZ3JvdW5kOiAjNGQ1NzkxO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGVmdDogNTAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbn1cblxuI3NraXA6Zm9jdXMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNTc5MTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDIwJTtcbiAgb3BhY2l0eTogMC45O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA0MCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "QZ6x":
/*!**************************************!*\
  !*** ./src/app/bar/bar.component.ts ***!
  \**************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");





class BarComponent {
    constructor(http, _dataService) {
        this.http = http;
        this._dataService = _dataService;
        this.chartOptions = {
            responsive: true
        };
        this.labels = [];
        this.chartData = [
            {
                label: 'Current Budget',
                data: []
            },
            {
                label: 'Maximum Budget',
                data: []
            }
        ];
        this.colors = [
            {
                backgroundColor: 'rgb(0, 128, 9)'
            },
            {
                backgroundColor: 'rgba(0, 118, 255, 0.8)'
            }
        ];
    }
    onChartClick(event) {
        console.log(event);
    }
    ngOnInit() {
        this._dataService.getData()
            .subscribe((res) => {
            console.log(res[0]);
            for (let i = 0; i < res.length; i++) {
                this.chartData[0].data[i] = res[i].budget;
                this.chartData[1].data[i] = res[i].maxbudget;
                this.labels[i] = res[i].title;
            }
        });
    }
}
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
BarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarComponent, selectors: [["pb-bar"]], decls: 2, vars: 6, consts: [["width", "1000px", "height", "1000px", "baseChart", "", 3, "chartType", "datasets", "labels", "options", "legend", "colors", "chartClick"]], template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "canvas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartClick", function BarComponent_Template_canvas_chartClick_1_listener($event) { return ctx.onChartClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", "bar")("datasets", ctx.chartData)("labels", ctx.labels)("options", ctx.chartOptions)("legend", true)("colors", ctx.colors);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-bar',
                templateUrl: './bar.component.html',
                styleUrls: ['./bar.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");







class DataService {
    constructor(http, router, toastr) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isOpenModel = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.userRecord = {};
        this.NAMES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
        this.MIN_ITEM = 10;
        this.MAX_ITEM = 20;
        this.MAX_VALUE = 100;
        this.isOpenModel.next(false);
    }
    getData() {
        if (this.DataObservable) {
            return this.DataObservable;
        }
        else {
            const token = localStorage.getItem('jwt');
            const headers = { 'content-type': 'application/json', 'Authorization': `Bearer ${token}` };
            this.DataObservable = this.http.get('https://grokonez-angular-appc.herokuapp.com/budget').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
            return this.DataObservable;
        }
    }
    addBudgetdata(data) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(data);
        console.log(body);
        return this.http.post('https://grokonez-angular-appc.herokuapp.com/budget', body, { 'headers': headers });
    }
    generateRandomValue(start, end) {
        return Math.ceil(Math.random() * (end - start) + start);
    }
    getData1() {
        const nbItems = this.generateRandomValue(this.MIN_ITEM, this.MAX_ITEM);
        console.log(nbItems);
        const samples = [];
        for (let i = 0; i < nbItems; i++) {
            const val = this.generateRandomValue(1, this.MAX_VALUE);
            samples.push({
                name: this.NAMES[i],
                value: val,
                abs: Math.abs(val)
            });
        }
        return samples;
    }
    userSignUp(data) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(data);
        return this.http.post('https://grokonez-angular-appc.herokuapp.com/users', body, { 'headers': headers });
    }
    invaliduser() {
        this.toastr.error("User does not exist. Please proceed to signup page", 'Error');
    }
    loginSuccessful() {
        this.toastr.success('Logged In', 'Success');
    }
    userLogin(data) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(data);
        console.log(body);
        return this.http.post('https://grokonez-angular-appc.herokuapp.com/auth', body, { 'headers': headers }).subscribe((res) => {
            console.log(res);
            this.userRecord['username'] = data.username;
            this.userRecord['password'] = data.password;
            console.log("user record is " + JSON.stringify(this.userRecord));
            localStorage.setItem('accessToken', res.token);
            localStorage.setItem('refreshToken', res.refreshToken);
            localStorage.setItem('exp', res.exp);
            this.isUserLoggedIn.next(true);
            this.router.navigate(['/homepage']);
            this.setTimer(true);
        }, err => {
            this.invaliduser();
        });
    }
    getLoginStatus() {
        return this.isUserLoggedIn;
    }
    setTimer(flag) {
        console.log("Timer set");
        if (flag) {
            this.timerId = setInterval(() => {
                const exp = localStorage.getItem('exp');
                const expdate = new Date(0).setUTCSeconds(Number(exp));
                const TokenNotExpired = expdate.valueOf() > new Date().valueOf();
                const lessThanTwentySecRemaining = expdate.valueOf() - new Date().valueOf() <= 20000;
                console.log(lessThanTwentySecRemaining);
                if (TokenNotExpired && lessThanTwentySecRemaining) {
                    let message = confirm('Your session is going to expire in 20 seconds! click OK to extend the session!');
                    if (message) {
                        let record = {};
                        record['username'] = this.userRecord['username'];
                        record['password'] = this.userRecord['password'];
                        console.log(JSON.stringify(record));
                        this.userLogin(record);
                    }
                    else {
                        message = false;
                    }
                }
                if (new Date().valueOf() >= expdate.valueOf()) {
                    clearInterval(this.timerId);
                    this.logout();
                    console.log('clear interval');
                }
            }, 20000);
        }
        else {
            clearInterval(this.timerId);
        }
    }
    logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        this.isUserLoggedIn.next(false);
        this.router.navigate(['/login']);
    }
    verifyTokenPresence() {
        return !!localStorage.getItem('token');
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S36L":
/*!*****************************************!*\
  !*** ./src/app/notification.service.ts ***!
  \*****************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");



class NotificationService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(message, title) {
        this.toastr.success("message", "title");
    }
    showError(message, title) {
        this.toastr.error(message, title);
    }
    showInfo(message, title) {
        this.toastr.info(message, title);
    }
    showWarning(message, title) {
        this.toastr.warning(message, title);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero/hero.component */ "XWKS");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "YHbe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");







class AppComponent {
    constructor() {
        this.title = 'personal-budget';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["pb-root"]], decls: 7, vars: 0, consts: [["id", "skip", "href", "#main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Skip to content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "pb-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "pb-hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "pb-breadcrumbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "pb-footer");
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return ["/homepage"]; };
function MenuComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Homepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/login"]; };
function MenuComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/logout"]; };
function MenuComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_11_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logoutUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/about"]; };
const _c4 = function () { return ["/contact"]; };
class MenuComponent {
    constructor(_dataService, router) {
        this._dataService = _dataService;
        this.router = router;
        this.isUserLoggedIn = false;
    }
    ngOnInit() {
        this._dataService.getLoginStatus().subscribe(status => this.isUserLoggedIn = status);
    }
    logoutUser() {
        this.isUserLoggedIn = false;
        this.router.navigate(['/login']);
        this._dataService.logout();
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["pb-menu"]], decls: 12, vars: 7, consts: [["role", "navigation"], [4, "ngIf"], ["tabindex", "-1", "title", "Visit the About Page", 3, "routerLink"], ["tabindex", "-1", "title", "Contact us", 3, "routerLink"], ["title", "Visit the HomePage", 3, "routerLink"], ["tabindex", "-1", "title", "Login to Your Account", 3, "routerLink"], ["title", "Logout here", 3, "routerLink", "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuComponent_li_3_Template, 3, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuComponent_li_7_Template, 3, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MenuComponent_li_11_Template, 3, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #4d5791;\n  height: 44px;\n  padding: 0 40px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 20px;\n  line-height: 44px;\n  font-size: 1.4em;\n  text-decoration: none;\n  color: #fff;\n  margin: 0;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #4d5791;\n}\n\n.topnav-right[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBOztFQUVFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ1NzkxO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDAgNDBweDtcbn1cblxubmF2IHVsLFxubmF2IHVsIGxpIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5uYXYgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBmb250LXNpemU6IDEuNGVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG59XG5cbm5hdiB1bCBsaSBhOmhvdmVyICB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzRkNTc5MTtcbn1cblxuLnRvcG5hdi1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "XWKS":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeroComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) { return new (t || HeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["pb-hero"]], decls: 7, vars: 0, consts: [[1, "hero"], ["routerLink", "/", 1, "mulya"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Personal Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A personal-budget management app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n.mulya[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6Imhlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVybyBoMXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuLm11bHlhe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-hero',
                templateUrl: './hero.component.html',
                styleUrls: ['./hero.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "YHbe":
/*!******************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumbs.component.ts ***!
  \******************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = [[["h1"]], [["div"]]];
const _c1 = ["h1", "div"];
class BreadcrumbsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(); };
BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["pb-breadcrumbs"]], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [[1, "breadcrumb"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".breadcrumb[_ngcontent-%COMP%] {\n  background: none;\n  font-size: 1.2em;\n  margin: 0;\n  color: blue;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: darkgray;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: darkgray;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFBRTs7RUFFRSxlQUFBO0FBRUo7QUFBRTs7RUFFRSxlQUFBO0VBQ0EscUJBQUE7QUFFSiIsImZpbGUiOiJicmVhZGNydW1icy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogYmx1ZTtcbiAgYSxcbiAgc3BhbiB7XG4gICAgY29sb3I6IHJnYigxNjksIDE2OSwgMTY5KTtcbiAgfVxuICBhOmhvdmVyLFxuICBzcGFuOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDE2OSwgMTY5LCAxNjkpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-breadcrumbs',
                templateUrl: './breadcrumbs.component.html',
                styleUrls: ['./breadcrumbs.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero/hero.component */ "XWKS");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./article/article.component */ "DLXL");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login-page/login-page.component */ "pT+O");
/* harmony import */ var _p404_p404_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./p404/p404.component */ "kVaF");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "YHbe");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _pie_pie_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pie/pie.component */ "icus");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "k7d8");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _addbudget_addbudget_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./addbudget/addbudget.component */ "Mp4b");
/* harmony import */ var _authguard_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./authguard.guard */ "6g8o");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./table/table.component */ "9Rdk");
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./bar/bar.component */ "QZ6x");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _maxbudgetpie_maxbudgetpie_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./maxbudgetpie/maxbudgetpie.component */ "ngu/");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_data_service__WEBPACK_IMPORTED_MODULE_21__["DataService"], _authguard_guard__WEBPACK_IMPORTED_MODULE_20__["AuthguardGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_26__["ChartsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot({
                timeOut: 3000,
                progressAnimation: 'increasing',
                positionClass: 'toast-top-left',
                preventDuplicates: true
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
        _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
        _article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginPageComponent"],
        _p404_p404_component__WEBPACK_IMPORTED_MODULE_13__["P404Component"],
        _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
        _pie_pie_component__WEBPACK_IMPORTED_MODULE_16__["PieComponent"],
        _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_17__["BarChartComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
        _addbudget_addbudget_component__WEBPACK_IMPORTED_MODULE_19__["AddbudgetComponent"],
        _table_table_component__WEBPACK_IMPORTED_MODULE_24__["TableComponent"],
        _bar_bar_component__WEBPACK_IMPORTED_MODULE_25__["BarComponent"],
        _maxbudgetpie_maxbudgetpie_component__WEBPACK_IMPORTED_MODULE_27__["MaxbudgetpieComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_26__["ChartsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                    _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
                    _article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginPageComponent"],
                    _p404_p404_component__WEBPACK_IMPORTED_MODULE_13__["P404Component"],
                    _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                    _pie_pie_component__WEBPACK_IMPORTED_MODULE_16__["PieComponent"],
                    _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_17__["BarChartComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
                    _addbudget_addbudget_component__WEBPACK_IMPORTED_MODULE_19__["AddbudgetComponent"],
                    _table_table_component__WEBPACK_IMPORTED_MODULE_24__["TableComponent"],
                    _bar_bar_component__WEBPACK_IMPORTED_MODULE_25__["BarComponent"],
                    _maxbudgetpie_maxbudgetpie_component__WEBPACK_IMPORTED_MODULE_27__["MaxbudgetpieComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_26__["ChartsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot({
                        timeOut: 3000,
                        progressAnimation: 'increasing',
                        positionClass: 'toast-top-left',
                        preventDuplicates: true
                    })
                ],
                providers: [_data_service__WEBPACK_IMPORTED_MODULE_21__["DataService"], _authguard_guard__WEBPACK_IMPORTED_MODULE_20__["AuthguardGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["pb-contact"]], decls: 28, vars: 0, consts: [["href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"), "rel", "stylesheet"], [1, "ccheader"], [1, "wrapper"], ["method", "post", "action", "", 1, "ccform"], [1, "ccfield-prepend"], [1, "ccform-addon"], [1, "fa", "fa-user", "fa-2x"], ["type", "text", "placeholder", "Full Name", "required", "", 1, "ccformfield"], [1, "fa", "fa-envelope", "fa-2x"], ["type", "text", "placeholder", "Email", "required", "", 1, "ccformfield"], [1, "fa", "fa-mobile-phone", "fa-2x"], ["type", "text", "placeholder", "Phone", 1, "ccformfield"], [1, "fa", "fa-info", "fa-2x"], ["type", "text", "placeholder", "Subject", "required", "", 1, "ccformfield"], [1, "fa", "fa-comment", "fa-2x"], ["name", "comments", "rows", "8", "placeholder", "Message", "required", "", 1, "ccformfield"], [1, "ccfield-submit"], ["type", "submit", "value", "Submit", 1, "ccbtn"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);\nbody[_ngcontent-%COMP%] {\n  background: #4d5791;\n  color: #fff;\n  font-weight: 400;\n  font-size: 1em;\n  font-family: \"Lato\", Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  padding-bottom: 60px;\n}\n.ccheader[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 2em;\n  text-align: center;\n}\n.ccheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 300;\n  font-size: 2.5em;\n  line-height: 1.3;\n}\n.ccheader[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 2em;\n  text-align: center;\n}\n.ccheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 300;\n  font-size: 2.5em;\n  line-height: 1.3;\n}\n\n.ccform[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 800px;\n}\n.ccfield-prepend[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  width: 100%;\n}\n.ccfield-submit[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  width: 100%;\n  margin-left: 48%;\n}\n.ccform-addon[_ngcontent-%COMP%] {\n  color: #4d5791;\n  float: left;\n  padding: 8px;\n  width: 8%;\n  background: #ffffff;\n  text-align: center;\n}\n.ccformfield[_ngcontent-%COMP%] {\n  color: #000000;\n  background: #ffffff;\n  border: solid;\n  padding: 15.5px;\n  width: 91.9%;\n  display: block;\n  font-family: \"Lato\", Arial, sans-serif;\n  font-size: 14px;\n}\n.ccformfield[_ngcontent-%COMP%] {\n  font-family: \"Lato\", Arial, sans-serif;\n}\n.ccbtn[_ngcontent-%COMP%] {\n  display: block;\n  border: none;\n  background: #4d5791;\n  color: #ffffff;\n  padding: 12px 25px;\n  cursor: pointer;\n  text-decoration: none;\n  font-weight: bold;\n}\n.ccbtn[_ngcontent-%COMP%]:hover {\n  background: #4d5791;\n}\n.credit[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 800px;\n  clear: both;\n  margin: 0 auto;\n  line-height: 25px;\n  padding: 25px 50px;\n}\n.credit[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0d2ed5;\n  font-weight: bold;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUVBQUE7QUFDUjtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUY7QUFDQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUdGO0FBQUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR0Y7QUFBQSxZQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUdGO0FBREE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFJRjtBQUZBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFLRjtBQUhBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFNRjtBQUhBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtBQU1GO0FBSEE7RUFDRSxzQ0FBQTtBQU1GO0FBSkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFPRjtBQUxBO0VBQ0UsbUJBQUE7QUFRRjtBQU5BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFTRjtBQVBBO0VBQ0UsaUJBQUE7QUFVRjtBQVJBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFXRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw3MDApO1xuYm9keSB7XG4gIGJhY2tncm91bmQ6ICM0ZDU3OTE7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cbi5jY2hlYWRlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNjaGVhZGVyIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDIuNWVtO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuLmNjaGVhZGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2NoZWFkZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbi8qIEZvcm0gQ1NTKi9cbi5jY2Zvcm0ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDgwMHB4O1xufVxuLmNjZmllbGQtcHJlcGVuZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNjZmllbGQtc3VibWl0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA0OCU7XG59XG4uY2Nmb3JtLWFkZG9uIHtcbiAgY29sb3I6ICM0ZDU3OTE7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiA4JTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2Nmb3JtZmllbGQge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiBzb2xpZDtcbiAgcGFkZGluZzogMTUuNXB4O1xuICB3aWR0aDogOTEuOSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jY2Zvcm1maWVsZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4uY2NidG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjNGQ1NzkxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTJweCAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2NidG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGQ1NzkxO1xufVxuLmNyZWRpdCB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogODAwcHg7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDI1cHggNTBweDtcbn1cbi5jcmVkaXQgZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jcmVkaXQgYSB7XG4gIGNvbG9yOiAjMGQyZWQ1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["pb-footer"]], decls: 4, vars: 0, consts: [["role", "content-info"], [1, "center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All rights reserved \u00A9 Chaitra MV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "icus":
/*!**************************************!*\
  !*** ./src/app/pie/pie.component.ts ***!
  \**************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PieComponent {
    constructor(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        this.data = [];
        this.margin = 30;
        this.width = 290;
        this.height = 290;
        this.radius = Math.min(this.width, this.height) / 2 - this.margin;
    }
    ngOnInit() {
        this.dataService.getData().subscribe((data) => {
            this.data = data;
            this.createSvg();
            this.createColors();
            this.drawChart();
        });
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('figure#pie')
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .append('g')
            .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
    }
    createColors() {
        this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"]()
            .domain(this.data.map(d => d.budget.toString()))
            .range(['#32a852', '#e2f53d', '#cf2727', '#27cfbb', '#cf27cc', '#0d10a8', '#ff7700', '#916556']);
    }
    drawChart() {
        const pie = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]().value((d) => Number(d.budget));
        this.svg
            .selectAll('pieces')
            .data(pie(this.data))
            .enter()
            .append('path')
            .attr('d', d3__WEBPACK_IMPORTED_MODULE_1__["arc"]()
            .innerRadius(50)
            .outerRadius(this.radius))
            .attr('fill', (d, i) => (this.colors(i)))
            .attr('stroke', '#121926')
            .style('stroke-width', '1px');
        const labelLocation = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]()
            .innerRadius(100)
            .outerRadius(this.radius);
        this.svg
            .selectAll('pieces')
            .data(pie(this.data))
            .enter()
            .append('text')
            .text(d => d.data.title)
            .attr('transform', d => 'translate(' + labelLocation.centroid(d) + ')')
            .style('text-anchor', 'middle')
            .style('font-size', 15);
    }
}
PieComponent.ɵfac = function PieComponent_Factory(t) { return new (t || PieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PieComponent, selectors: [["pb-pie"]], decls: 2, vars: 0, consts: [["id", "pie"]], template: function PieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "figure", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-pie',
                templateUrl: './pie.component.html',
                styleUrls: ['./pie.component.scss']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "k7d8":
/*!**************************************************!*\
  !*** ./src/app/bar-chart/bar-chart.component.ts ***!
  \**************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "VphZ");



class BarChartComponent {
    constructor() {
        this.data = [
            { "Framework": "Eat out", "Stars": "300" },
            { "Framework": "shopping", "Stars": "500" },
            { "Framework": "Gas", "Stars": "90" },
            { "Framework": "Water", "Stars": "1000" },
            { "Framework": "Groceries", "Stars": "750" },
            { "Framework": "Rent", "Stars": "1150" },
            { "Framework": "Wifi", "Stars": "250" }
        ];
        this.margin = 50;
        this.width = 250 - (this.margin * 2);
        this.height = 250 - (this.margin * 2);
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#bar")
            .append("svg")
            .attr("width", this.width + (this.margin * 2))
            .attr("height", this.height + (this.margin * 2))
            .append("g")
            .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
    }
    drawBars(data) {
        // Create the X-axis band scale
        const x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .range([0, this.width])
            .domain(data.map(d => d.Framework))
            .padding(0.4);
        // Draw the X-axis on the DOM
        this.svg.append("g")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");
        // Create the Y-axis band scale
        const y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, 1500])
            .range([this.height, 0]);
        // Draw the Y-axis on the DOM
        this.svg.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y));
        // Create and fill the bars
        this.svg.selectAll("bars")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", d => x(d.Framework))
            .attr("y", d => y(d.Stars))
            .attr("width", x.bandwidth())
            .attr("height", (d) => this.height - y(d.Stars))
            .attr("fill", "#4d5791");
    }
    ngOnInit() {
        this.createSvg();
        this.drawBars(this.data);
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], decls: 2, vars: 0, consts: [["id", "bar"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bar-chart',
                template: `<div id="bar"><svg></svg></div>`,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], null, null); })();


/***/ }),

/***/ "kVaF":
/*!****************************************!*\
  !*** ./src/app/p404/p404.component.ts ***!
  \****************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class P404Component {
    constructor() { }
    ngOnInit() {
    }
}
P404Component.ɵfac = function P404Component_Factory(t) { return new (t || P404Component)(); };
P404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: P404Component, selectors: [["pb-p404"]], decls: 2, vars: 0, template: function P404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "p404 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](P404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-p404',
                templateUrl: './p404.component.html',
                styleUrls: ['./p404.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ngu/":
/*!********************************************************!*\
  !*** ./src/app/maxbudgetpie/maxbudgetpie.component.ts ***!
  \********************************************************/
/*! exports provided: MaxbudgetpieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxbudgetpieComponent", function() { return MaxbudgetpieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "R7Hv");




class MaxbudgetpieComponent {
    constructor(_dataService) {
        this._dataService = _dataService;
        this.dataSource = {
            datasets: [{
                    data: [],
                    backgroundColor: []
                }],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: []
        };
    }
    ngOnInit() {
        this._dataService.getData()
            .subscribe((res) => {
            console.log(res);
            for (let i = 0; i < res.length; i++) {
                this.dataSource.datasets[0].data[i] = res[i].maxbudget;
                this.dataSource.labels[i] = res[i].title;
                this.dataSource.datasets[0].backgroundColor[i] = res[i].color;
                this.createChart();
            }
        });
    }
    createChart() {
        var ctx = document.getElementById("maxbudgetpie");
        var myPieChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"](ctx, {
            type: 'pie',
            data: this.dataSource
        });
    }
}
MaxbudgetpieComponent.ɵfac = function MaxbudgetpieComponent_Factory(t) { return new (t || MaxbudgetpieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
MaxbudgetpieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaxbudgetpieComponent, selectors: [["pb-maxbudgetpie"]], decls: 0, vars: 0, template: function MaxbudgetpieComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXhidWRnZXRwaWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaxbudgetpieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-maxbudgetpie',
                templateUrl: './maxbudgetpie.component.html',
                styleUrls: ['./maxbudgetpie.component.scss']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "pT+O":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class LoginPageComponent {
    constructor(router, _dataService, toastr) {
        this.router = router;
        this._dataService = _dataService;
        this.toastr = toastr;
        this.userData = [];
        this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isUserLoggedIn.next(false);
    }
    ngOnInit() {
    }
    signupFunction() {
        this.router.navigate(['/signup']);
    }
    enterAllDetails() {
        window.alert('Please enter all the details');
        console.log("in");
    }
    loginSuccessful() {
        window.alert('Logged In');
    }
    loginFailure() {
        window.alert('Invalid Credentials. Please enter valid credentials');
    }
    loginFunction() {
        let record = {};
        record['username'] = this.username;
        record['password'] = this.password;
        console.log(JSON.stringify(record));
        if (!this.username || !this.password) {
            this.enterAllDetails();
            console.log("UserName or password is missing");
        }
        else {
            this._dataService.userLogin(record);
        }
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["pb-login-page"]], decls: 21, vars: 2, consts: [["id", "mainbody", 1, "container-fluid"], ["id", "login", 1, "row"], ["id", "contact", "action", "", "method", "post"], ["id", "main"], [1, "row", "col-xs-4"], ["for", "username"], ["type", "text", "name", "username", "id", "username", 3, "ngModel", "ngModelChange"], [1, "row"], ["for", "password"], ["type", "password", "name", "password", "id", "password", 3, "ngModel", "ngModelChange"], [1, "loginbtn", 3, "click"], [1, "registerbtn", 3, "click"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login to view your expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_9_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_14_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_17_listener() { return ctx.loginFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_19_listener() { return ctx.signupFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["#main[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  margin-left: 30%;\n  margin-bottom: 20%;\n}\n\n#login[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  width: -webkit-max-content;\n  width: max-content;\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin-left: 42.5%;\n  color: black;\n  padding: 2px;\n  fill-opacity: initial;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 30px;\n  align-content: center;\n  color: white;\n  background-color: #4d5791;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  margin: 5px;\n  border-radius: 4px;\n  width: 20%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\n#username[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 23px;\n}\n\n#password[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 23px;\n}\n\n.registerbtn[_ngcontent-%COMP%] {\n  background-color: #4d5791;\n  color: white;\n  padding: 16px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 20%;\n  opacity: 0.9;\n  margin: 8px;\n  text-align: center;\n  margin-right: 120px;\n}\n\n.loginbtn[_ngcontent-%COMP%] {\n  background-color: #4d5791;\n  color: white;\n  padding: 16px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 20%;\n  opacity: 0.9;\n  margin: 8px;\n  text-align: center;\n  margin-left: 120px;\n}\n\n.registerbtn[_ngcontent-%COMP%]:hover {\n  opacity: 2;\n}\n\n.loginbtn[_ngcontent-%COMP%]:hover {\n  opacity: 2;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  width: 20%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFGQTs7RUFFRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFGQTs7RUFFRSxzQkFBQTtFQUNBLGFBQUE7QUFLRiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tYm90dG9tOiAyMCU7XG59XG5cbiNsb2dpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogNDIuNSU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMnB4O1xuICBmaWxsLW9wYWNpdHk6IGluaXRpYWw7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNTc5MTtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4jdXNlcm5hbWUge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDIzcHg7XG59XG5cbiNwYXNzd29yZCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMjNweDtcbn1cblxuLnJlZ2lzdGVyYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNTc5MTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMjAlO1xuICBvcGFjaXR5OiAwLjk7XG4gIG1hcmdpbjogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTIwcHg7XG59XG4ubG9naW5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ1NzkxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyMCU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbWFyZ2luOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xufVxuLnJlZ2lzdGVyYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMjtcbn1cbi5sb2dpbmJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IDI7XG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBvdXRsaW5lOiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notification.service */ "S36L");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class SignupComponent {
    constructor(http, router, _dataService, toastr, notifyService) {
        this.http = http;
        this.router = router;
        this._dataService = _dataService;
        this.toastr = toastr;
        this.notifyService = notifyService;
        this.userData = [];
    }
    ngOnInit() {
    }
    duplicateUserName() {
        window.alert('User with this name already exists. Please proceed to login page!!');
    }
    incompleteDetails() {
        window.alert('Please enter all the fields');
    }
    loginFunction() {
        let record = {};
        record['username'] = this.username;
        record['password'] = this.password;
        record['email'] = this.email;
        record['repassword'] = this.repassword;
        console.log(this.userData);
        for (let i = 0; i < this.userData.length; i++) {
            if (this.userData[i].username == this.username) {
                console.log("There exists a user with same username");
                window.alert('User with this name already exists. Please proceed to login page!!');
                return;
            }
        }
        this.registrationProcess();
    }
    registrationProcess() {
        let record = {};
        record['username'] = this.username;
        record['password'] = this.password;
        record['email'] = this.email;
        record['repassword'] = this.repassword;
        console.log(JSON.stringify(record));
        if (!this.username || !this.password || !this.email || !this.repassword) {
            window.alert('Please enter all the fields');
            this.incompleteDetails();
            return;
        }
        else {
            console.log("In else");
            this._dataService.userSignUp(record)
                .subscribe(res => {
                this.username = "";
                this.password = "";
                this.email = "";
                this.router.navigate(['/login']);
            }, err => {
                console.log("Validation failed");
            });
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["pb-signup"]], decls: 20, vars: 4, consts: [["action", "action_page.php"], [1, "container"], ["for", "username"], ["type", "text", "placeholder", "Enter Username", "name", "username", "id", "username", "required", "", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "text", "placeholder", "Enter Email", "name", "email", "id", "email", "required", "", 3, "ngModel", "ngModelChange"], ["for", "psw"], ["type", "password", "placeholder", "Enter Password", "name", "password", "id", "password", "required", "", 3, "ngModel", "ngModelChange"], ["for", "psw-repeat"], ["type", "password", "placeholder", "Re-enter Password", "name", "repassword", "id", "repassword", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "registerbtn", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_5_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_9_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Re-enter Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_17_listener($event) { return ctx.repassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_18_listener() { return ctx.registrationProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.repassword);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n\n\nhr[_ngcontent-%COMP%] {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n\n\n.registerbtn[_ngcontent-%COMP%] {\n  background-color: #4d5791;\n  color: white;\n  padding: 16px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n.registerbtn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n\n\na[_ngcontent-%COMP%] {\n  color: dodgerblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUEsOEJBQUE7O0FBQ0E7RUFDRSxhQUFBO0FBQ0Y7O0FBRUEsNEJBQUE7O0FBQ0E7O0VBRUUsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUEsbUNBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUEsK0NBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUEsbUNBQUE7O0FBQ0E7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBPdmVyd3JpdGUgZGVmYXVsdCBzdHlsZXMgb2YgaHIgKi9cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvcmVnaXN0ZXIgYnV0dG9uICovXG4ucmVnaXN0ZXJidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ1NzkxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5yZWdpc3RlcmJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEFkZCBhIGJsdWUgdGV4dCBjb2xvciB0byBsaW5rcyAqL1xuYSB7XG4gIGNvbG9yOiBkb2RnZXJibHVlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pb-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page/login-page.component */ "pT+O");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _p404_p404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./p404/p404.component */ "kVaF");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _addbudget_addbudget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addbudget/addbudget.component */ "Mp4b");











const routes = [
    {
        path: '',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    },
    {
        path: 'login',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    },
    {
        path: 'homepage',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"],
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
        pathMatch: 'full'
    },
    {
        path: 'addbudget',
        component: _addbudget_addbudget_component__WEBPACK_IMPORTED_MODULE_8__["AddbudgetComponent"]
    },
    {
        path: 'logout',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]
    },
    {
        path: '**',
        component: _p404_p404_component__WEBPACK_IMPORTED_MODULE_5__["P404Component"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map