(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"pageTitle\">Tasty Match</h1>\r\n  <app-overlays></app-overlays>\r\n  \r\n  <app-card-board></app-card-board>\r\n  <!--################################################################-->\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card-board/card-board.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card-board/card-board.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gameContainer\">\r\n        <div class=\"gameInfoContainer\">\r\n            <div class=\"gameInfo\">\r\n            Time: <span id=\"timeRemaining\">120</span>\r\n            </div>\r\n        \r\n            <div class=\"gameInfo\">\r\n            Flips: <span id=\"flips\">0</span>\r\n            </div>\r\n        </div>\r\n        <app-card class=\"cardGrid\"></app-card>\r\n</div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card/card.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card/card.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card\" *ngFor=\"let card of cards\">\r\n    <div class=\"cardBack cardFace\">\r\n        <img class=\"cardFrontImage\" src=\"./assets/icons/png/waiter.png\" alt=\"waiter\">\r\n    </div>\r\n    <div class=\"cardFront cardFace\">\r\n        <img class=\"cardValue\" src=\"./assets/icons/png/{{card}}\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/overlays/overlays.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/overlays/overlays.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlays\">\r\n    <div class=\"overlayText visible start\">\r\n        Click to start\r\n      </div>\r\n    \r\n      <div id=\"victoryText\" class=\"overlayText victory \">\r\n        Congratulations! You are done!\r\n        <!-- <table class=\"pure-table\">\r\n          <thead>\r\n              <tr>\r\n                  <th>#</th>\r\n                  <th>Name</th>\r\n                  <th>Score</th>\r\n                  <th>Time</th>\r\n              </tr>\r\n          </thead>\r\n      \r\n          <tbody>\r\n              <tr>\r\n                  <td>1</td>\r\n                  <td>Adric</td>\r\n                  <td>20</td>\r\n                  <td>40</td>\r\n              </tr>\r\n      \r\n              <tr>\r\n                  <td>2</td>\r\n                  <td>Ben</td>\r\n                  <td>22</td>\r\n                  <td>42</td>\r\n              </tr>\r\n      \r\n              <tr>\r\n                  <td>3</td>\r\n                  <td>Kamui</td>\r\n                  <td>29</td>\r\n                  <td>50</td>\r\n              </tr>\r\n          </tbody>\r\n      </table>\r\n      <br>\r\n      <br> -->\r\n        <span class=\"overlayTextSmall\">click on screen to Play Again</span>\r\n        Turns Taken:<span id=\"score\">0</span>\r\n        Time Taken:<span id=\"time\">0</span>\r\n        <!-- <button>Play Again</button> -->\r\n      </div>\r\n    \r\n      <div id=\"gameOverText\" class=\"overlayText over\">\r\n        Sorry! You lost the game\r\n        <span class=\"overlayTextSmall\">click on screen to Play Again</span>\r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'memoryGameRE';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _overlays_overlays_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays/overlays.component */ "./src/app/overlays/overlays.component.ts");
/* harmony import */ var _card_board_card_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-board/card-board.component */ "./src/app/card-board/card-board.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _cards_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cards.service */ "./src/app/cards.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _overlays_overlays_component__WEBPACK_IMPORTED_MODULE_5__["OverlaysComponent"],
                _card_board_card_board_component__WEBPACK_IMPORTED_MODULE_6__["CardBoardComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_cards_service__WEBPACK_IMPORTED_MODULE_8__["CardsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-board/card-board.component.scss":
/*!******************************************************!*\
  !*** ./src/app/card-board/card-board.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gameContainer {\n  display: grid;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1ib2FyZC9DOlxcVXNlcnNcXEFwbGFuXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxUZXN0XFxtZW1vcnlHYW1lUkUvc3JjXFxhcHBcXGNhcmQtYm9hcmRcXGNhcmQtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmQtYm9hcmQvY2FyZC1ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7RUFJQSx1QkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY2FyZC1ib2FyZC9jYXJkLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWVDb250YWluZXJcclxue1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIGF1dG8pO1xyXG4gICAgLy8gZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICAvLyBtYXJnaW46IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIHBlcnNwZWN0aXZlOiA1MDBweDtcclxufSIsIi5nYW1lQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/card-board/card-board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/card-board/card-board.component.ts ***!
  \****************************************************/
/*! exports provided: CardBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBoardComponent", function() { return CardBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardBoardComponent = /** @class */ (function () {
    function CardBoardComponent() {
    }
    CardBoardComponent.prototype.ngOnInit = function () {
    };
    CardBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-board',
            template: __webpack_require__(/*! raw-loader!./card-board.component.html */ "./node_modules/raw-loader/index.js!./src/app/card-board/card-board.component.html"),
            styles: [__webpack_require__(/*! ./card-board.component.scss */ "./src/app/card-board/card-board.component.scss")]
        })
    ], CardBoardComponent);
    return CardBoardComponent;
}());



/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  position: relative;\n  height: 135px;\n  width: 85px;\n}\n\n.card.visible .cardBack {\n  transform: rotateY(180deg);\n}\n\n.card.visible .cardFront {\n  transform: rotateY(0);\n}\n\n.card.matched .cardValue {\n  animation: shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n}\n\n.cardFace {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  backface-visibility: hidden;\n  border-radius: 12px;\n  border-width: 1px;\n  border-style: solid;\n  transition: all 600ms ease-in-out;\n  cursor: pointer;\n}\n\n.cardFace:hover {\n  border-radius: 8px;\n}\n\n.cardFront {\n  transform: rotateY(180deg);\n  background-color: #E76062;\n  border-color: #E76062;\n}\n\n.cardBack {\n  background-color: #ff3f92;\n  border-color: #ff3f92;\n}\n\n.cardFrontImage {\n  transform: translateY(0);\n  transition: transform 200ms ease-in-out;\n  height: 70%;\n  width: 80%;\n}\n\n.cardBack:hover .cardFrontImage {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.cardValue {\n  height: 70%;\n  width: 80%;\n  transform: scale(0.9);\n  transition: all 200ms ease-in-out;\n}\n\n.cardFront:hover .cardValue {\n  transform: scale(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9DOlxcVXNlcnNcXEFwbGFuXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxUZXN0XFxtZW1vcnlHYW1lUkUvc3JjXFxhcHBcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUVJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNiSjs7QURnQkE7RUFFSSwwQkFBQTtBQ2RKOztBRGlCQTtFQUVJLHFCQUFBO0FDZko7O0FEa0JBO0VBRUksNkRBQUE7QUNoQko7O0FEbUJBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ2pCSjs7QURvQkE7RUFFSSxrQkFBQTtBQ2xCSjs7QURxQkE7RUFFSSwwQkFBQTtFQUNBLHlCQWpEVTtFQWtEVixxQkFsRFU7QUMrQmQ7O0FEc0JBO0VBRUkseUJBMURTO0VBMkRULHFCQTNEUztBQ3VDYjs7QUR1QkE7RUFFSSx3QkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNyQko7O0FEd0JBO0VBRUkscUJBQUE7RUFDQSxlQUFBO0FDdEJKOztBRHlCQTtFQUVJLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQ3ZCSjs7QUQwQkE7RUFFSSxtQkFBQTtBQ3hCSiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBGb250c1xyXG4kdGl0bGVGb250OiAnQmFycmllY2l0bycsIGN1cnNpdmU7XHJcbiRtYWluRm9udDogJ1NuaWdsZXQnLCBjdXJzaXZlO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRiZ0NvbG9yMTogIzgwZWVmZjtcclxuJGJnQ29sb3IyOiAjMTdhMmM4O1xyXG4kY2FyZEJDb2xvcjogI2ZmM2Y5MjtcclxuJGNhcmRGQ29sb3IxOiAjRURERDhDO1xyXG4kY2FyZEZDb2xvcjI6ICNGOUJCOTY7XHJcbiRjYXJkRkNvbG9yMzogI0U3NjA2MjtcclxuXHJcbi5jYXJkXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICB3aWR0aDogODVweDtcclxufVxyXG5cclxuLmNhcmQudmlzaWJsZSAuY2FyZEJhY2tcclxue1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5jYXJkLnZpc2libGUgLmNhcmRGcm9udFxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMClcclxufVxyXG5cclxuLmNhcmQubWF0Y2hlZCAuY2FyZFZhbHVlXHJcbntcclxuICAgIGFuaW1hdGlvbjogc2hha2UgMnMgY3ViaWMtYmV6aWVyKC4zNiwuMDcsLjE5LC45NykgYm90aDtcclxufVxyXG5cclxuLmNhcmRGYWNlXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZEZhY2U6aG92ZXJcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZEZyb250XHJcbntcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmRGQ29sb3IzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiRjYXJkRkNvbG9yMztcclxufVxyXG5cclxuLmNhcmRCYWNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkQkNvbG9yO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkY2FyZEJDb2xvcjtcclxufVxyXG5cclxuLmNhcmRGcm9udEltYWdlXHJcbntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmNhcmRCYWNrOmhvdmVyIC5jYXJkRnJvbnRJbWFnZVxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkVmFsdWVcclxue1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jYXJkRnJvbnQ6aG92ZXIgLmNhcmRWYWx1ZVxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59IiwiLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTM1cHg7XG4gIHdpZHRoOiA4NXB4O1xufVxuXG4uY2FyZC52aXNpYmxlIC5jYXJkQmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uY2FyZC52aXNpYmxlIC5jYXJkRnJvbnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XG59XG5cbi5jYXJkLm1hdGNoZWQgLmNhcmRWYWx1ZSB7XG4gIGFuaW1hdGlvbjogc2hha2UgMnMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XG59XG5cbi5jYXJkRmFjZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHRyYW5zaXRpb246IGFsbCA2MDBtcyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZEZhY2U6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5jYXJkRnJvbnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3NjA2MjtcbiAgYm9yZGVyLWNvbG9yOiAjRTc2MDYyO1xufVxuXG4uY2FyZEJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZjkyO1xuICBib3JkZXItY29sb3I6ICNmZjNmOTI7XG59XG5cbi5jYXJkRnJvbnRJbWFnZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xuICBoZWlnaHQ6IDcwJTtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmNhcmRCYWNrOmhvdmVyIC5jYXJkRnJvbnRJbWFnZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZFZhbHVlIHtcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiA4MCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uY2FyZEZyb250OmhvdmVyIC5jYXJkVmFsdWUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards.service */ "./src/app/cards.service.ts");



var CardComponent = /** @class */ (function () {
    function CardComponent(cardService) {
        this.cardService = cardService;
        this.cards = [];
    }
    CardComponent.prototype.ngOnInit = function () {
        console.log('garba');
        this.cards = this.cardService.getCards();
    };
    CardComponent.ctorParameters = function () { return [
        { type: _cards_service__WEBPACK_IMPORTED_MODULE_2__["CardsService"] }
    ]; };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/cards.service.ts":
/*!**********************************!*\
  !*** ./src/app/cards.service.ts ***!
  \**********************************/
/*! exports provided: CardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsService", function() { return CardsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsService = /** @class */ (function () {
    function CardsService() {
        this.cards = ['avocado.png', 'bacon-and-eggs.png', 'breakfast.png', 'burger-and-potatoes.png', 'cheese.png',
            'chef.png', 'coffe-cup.png', 'croisant.png', 'gingerbreadman.png', 'ice-cream.png', 'latte.png',
            'meat.png', 'pizza.png', 'taco.png', 'wine.png', 'avocado.png', 'bacon-and-eggs.png', 'breakfast.png', 'burger-and-potatoes.png', 'cheese.png',
            'chef.png', 'coffe-cup.png', 'croisant.png', 'gingerbreadman.png', 'ice-cream.png', 'latte.png',
            'meat.png', 'pizza.png', 'taco.png', 'wine.png'];
    }
    CardsService.prototype.getCards = function () {
        return this.cards;
    };
    CardsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CardsService);
    return CardsService;
}());



/***/ }),

/***/ "./src/app/overlays/overlays.component.scss":
/*!**************************************************!*\
  !*** ./src/app/overlays/overlays.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlayText {\n  display: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  justify-content: center;\n  align-items: center;\n  z-index: 100;\n  font-family: \"Barriecito\", cursive, Arial, Helvetica, sans-serif;\n  color: #ffffff;\n  -webkit-text-fill-color: #F9BB96;\n  -webkit-text-stroke-width: 3px;\n  cursor: pointer;\n}\n\n.overlayTextSmall {\n  font-size: 0.3em;\n  -webkit-text-stroke-width: 2px;\n  font-family: \"Sniglet\", cursive;\n  cursor: pointer;\n}\n\n.overlayText.start.visible {\n  display: flex;\n  flex-direction: column;\n  animation: overlayPop 500ms forwards;\n}\n\n.overlayText.victory.visible {\n  display: flex;\n  flex-direction: column;\n  animation: overlayPop2 500ms forwards;\n}\n\n.overlayText.over.visible {\n  display: flex;\n  flex-direction: column;\n  animation: overlayPop2 500ms forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcmxheXMvQzpcXFVzZXJzXFxBcGxhblxcT25lRHJpdmVcXERvY3VtZW50c1xcVGVzdFxcbWVtb3J5R2FtZVJFL3NyY1xcYXBwXFxvdmVybGF5c1xcb3ZlcmxheXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL292ZXJsYXlzL292ZXJsYXlzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBRUksYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnRUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FuQlU7RUFvQlYsOEJBQUE7RUFDQSxlQUFBO0FDZko7O0FEa0JBO0VBRUksZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQW5DTztFQW9DUCxlQUFBO0FDaEJKOztBRG9CQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0FDbEJKOztBRHNCQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0FDcEJKOztBRHdCQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0FDdEJKIiwiZmlsZSI6InNyYy9hcHAvb3ZlcmxheXMvb3ZlcmxheXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xyXG4kdGl0bGVGb250OiAnQmFycmllY2l0bycsIGN1cnNpdmU7XHJcbiRtYWluRm9udDogJ1NuaWdsZXQnLCBjdXJzaXZlO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRiZ0NvbG9yMTogIzgwZWVmZjtcclxuJGJnQ29sb3IyOiAjMTdhMmM4O1xyXG4kY2FyZEJDb2xvcjogI2ZmM2Y5MjtcclxuJGNhcmRGQ29sb3IxOiAjRURERDhDO1xyXG4kY2FyZEZDb2xvcjI6ICNGOUJCOTY7XHJcbiRjYXJkRkNvbG9yMzogI0U3NjA2MjtcclxuXHJcbi8vb3ZlcmxheSBXaWRnZXRzXHJcblxyXG4vL2NsaWNrIHRvIHN0YXJ0XHJcbi5vdmVybGF5VGV4dFxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICR0aXRsZUZvbnQsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAkY2FyZEZDb2xvcjI7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vdmVybGF5VGV4dFNtYWxsXHJcbntcclxuICAgIGZvbnQtc2l6ZTogLjNlbTtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkbWFpbkZvbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vIFN0YXJ0IHNjcmVlbiBvZiB0aGUgZ2FtZVxyXG4ub3ZlcmxheVRleHQuc3RhcnQudmlzaWJsZVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFuaW1hdGlvbjogb3ZlcmxheVBvcCA1MDBtcyBmb3J3YXJkcztcclxufVxyXG5cclxuLy8gdmljdG9yeSBzY3JlZW5cclxuLm92ZXJsYXlUZXh0LnZpY3RvcnkudmlzaWJsZVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFuaW1hdGlvbjogb3ZlcmxheVBvcDIgNTAwbXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi8vIGdhbWUgb3ZlciBzY3JlZW5cclxuLm92ZXJsYXlUZXh0Lm92ZXIudmlzaWJsZVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFuaW1hdGlvbjogb3ZlcmxheVBvcDIgNTAwbXMgZm9yd2FyZHM7XHJcbn0iLCIub3ZlcmxheVRleHQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDtcbiAgZm9udC1mYW1pbHk6IFwiQmFycmllY2l0b1wiLCBjdXJzaXZlLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNGOUJCOTY7XG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub3ZlcmxheVRleHRTbWFsbCB7XG4gIGZvbnQtc2l6ZTogMC4zZW07XG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiU25pZ2xldFwiLCBjdXJzaXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vdmVybGF5VGV4dC5zdGFydC52aXNpYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYW5pbWF0aW9uOiBvdmVybGF5UG9wIDUwMG1zIGZvcndhcmRzO1xufVxuXG4ub3ZlcmxheVRleHQudmljdG9yeS52aXNpYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYW5pbWF0aW9uOiBvdmVybGF5UG9wMiA1MDBtcyBmb3J3YXJkcztcbn1cblxuLm92ZXJsYXlUZXh0Lm92ZXIudmlzaWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFuaW1hdGlvbjogb3ZlcmxheVBvcDIgNTAwbXMgZm9yd2FyZHM7XG59Il19 */"

/***/ }),

/***/ "./src/app/overlays/overlays.component.ts":
/*!************************************************!*\
  !*** ./src/app/overlays/overlays.component.ts ***!
  \************************************************/
/*! exports provided: OverlaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlaysComponent", function() { return OverlaysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OverlaysComponent = /** @class */ (function () {
    function OverlaysComponent() {
    }
    OverlaysComponent.prototype.ngOnInit = function () {
    };
    OverlaysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overlays',
            template: __webpack_require__(/*! raw-loader!./overlays.component.html */ "./node_modules/raw-loader/index.js!./src/app/overlays/overlays.component.html"),
            styles: [__webpack_require__(/*! ./overlays.component.scss */ "./src/app/overlays/overlays.component.scss")]
        })
    ], OverlaysComponent);
    return OverlaysComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/**
 * left off trying to out put score after winning game
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });
/************************************************************** */
/**
 * game class / Game object
 **/
var tastyMatch = /** @class */ (function () {
    function tastyMatch(totalTime, cards) {
        // declare properties
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('timeRemaining');
        // change this to this.flip
        this.score = document.getElementById('score');
        this.ticker = document.getElementById('flips');
        this.time = document.getElementById('time');
    }
    tastyMatch.prototype.startGame = function () {
        var _this = this;
        // declare function properties
        this.cardToCheck = null; // selected card to check if it matches with next selected card
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        // set timeout to wait before executing, delay game execution/start
        setTimeout(function () {
            _this.shuffleCards();
            _this.countDown = _this.startCountDown();
            _this.busy = false;
        }, 600);
        this.hideCards();
    };
    /**
     * hideCards function
     * loops through cardsArray and removes classes
     **/
    tastyMatch.prototype.hideCards = function () {
        this.cardsArray.forEach(function (card) {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    };
    /**
     * showCards() function
     * shows all cards if you lost the game
     **/
    tastyMatch.prototype.showCards = function () {
        this.cardsArray.forEach(function (card) {
            card.classList.add('visible');
        });
    };
    /**
     *Shuffle cards using fisher and Yates shuffle algorithm
     */
    tastyMatch.prototype.shuffleCards = function () {
        for (var i = this.cardsArray.length - 1; i > 0; i--) {
            var randIndex = Math.floor(Math.random() * (i + 1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;
        }
    };
    /**
     *can flip card yes or no
     * */
    tastyMatch.prototype.canFlipCard = function (card) {
        // check to see if you can flip card (if all three statements are false then return true)
        return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck);
    };
    /**
     *flipCard function
     **/
    tastyMatch.prototype.flipCard = function (card) {
        if (this.canFlipCard(card)) {
            this.totalClicks++;
            //?? question again
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');
            if (this.cardToCheck) {
                this.checkForCardMatch(card);
            }
            else {
                this.cardToCheck = card;
            }
        }
    };
    /**
     *checkForCardMatch() function
     checks if cards match and confirms that they match or not
     **/
    tastyMatch.prototype.checkForCardMatch = function (card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck)) {
            this.cardMatch(card, this.cardToCheck);
        }
        else {
            this.cardMisMatch(card, this.cardToCheck);
        }
        this.cardToCheck = null;
    };
    /**
     * getCardType() function
     * returns the card type, which is a string based on src e.g ("./assets/icons/png/cheese.png")
     **/
    tastyMatch.prototype.getCardType = function (card) {
        return card.getElementsByClassName('cardValue')[0].src;
    };
    /**
     * cardMatch() function
     * takes matched cards and pushes them to the matchCards array and adds matched class
     **/
    tastyMatch.prototype.cardMatch = function (card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        if (this.matchedCards.length === this.cardsArray.length) {
            this.victory();
        }
    };
    /**
     * cardMisMatch() function
     **/
    tastyMatch.prototype.cardMisMatch = function (card1, card2) {
        var _this = this;
        this.busy = true;
        setTimeout(function () {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            _this.busy = false;
        }, 1000);
    };
    /**
    * startCountdown() function
    * starts the game countdown
    **/
    tastyMatch.prototype.startCountDown = function () {
        var _this = this;
        return setInterval(function () {
            _this.timeRemaining--;
            _this.timer.innerText = _this.timeRemaining;
            if (_this.timeRemaining === 60) {
                document.getElementById('timeRemaining').classList.add('tmr1');
            }
            if (_this.timeRemaining === 30) {
                document.getElementById('timeRemaining').classList.add('tmr2');
            }
            if (_this.timeRemaining === 0) {
                _this.gameOver();
            }
        }, 1000);
    };
    /**
     * victory() function
     * displays victory widget on game completion
     **/
    tastyMatch.prototype.victory = function () {
        this.score.innerText = (this.totalClicks / 2) + ' points';
        this.time.innerText = (120 - this.timeRemaining) + ' sec';
        document.getElementById('victoryText').classList.add('visible');
        clearInterval(this.countDown);
    };
    /**
    * GameOver() function
    **/
    tastyMatch.prototype.gameOver = function () {
        //show gameOver screen/widget
        document.getElementById('timeRemaining').classList.remove('tmr', 'tmr1', 'tmr2');
        // clear countdown
        clearInterval(this.countDown);
        this.showCards();
        document.getElementById('gameOverText').classList.add('visible');
    };
    tastyMatch.ctorParameters = function () { return [
        null,
        null
    ]; };
    return tastyMatch;
}());
/**
 * ready() function
 **/
function ready() {
    // grab overlays by class name and put them in an array
    var overlays = Array.from(document.getElementsByClassName('overlayText')); // put html collection into an array
    // grab cards by class name and put them in an array
    var cards = Array.from(document.getElementsByClassName('card'));
    // declare game instance
    var game = new tastyMatch(200, cards);
    /**
     * loop through overlays and add 'click' eventListeners
     **/
    overlays.forEach(function (overlay) {
        overlay.addEventListener('click', function () {
            overlay.classList.remove('visible');
            // initialize game
            document.getElementById('timeRemaining').classList.add('tmr');
            game.startGame();
        });
    });
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            // flip card
            game.flipCard(card);
        });
    });
}
/**
 * if statement calls the ready() function
 **/
if (document.readyState === 'loading') {
    /**
     * call ready() function when document is finished loading
     * */
    //***** ??question remove arrow function and ask why it gives the error
    document.addEventListener('DOMContentLoaded', function () { return ready(); }); // function ready initializes the whole program
}
else {
    ready();
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Aplan\OneDrive\Documents\Test\memoryGameRE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map