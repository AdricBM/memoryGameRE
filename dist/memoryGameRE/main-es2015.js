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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'memoryGameRE';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _overlays_overlays_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays/overlays.component */ "./src/app/overlays/overlays.component.ts");
/* harmony import */ var _card_board_card_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-board/card-board.component */ "./src/app/card-board/card-board.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _cards_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cards.service */ "./src/app/cards.service.ts");









let AppModule = class AppModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardBoardComponent = class CardBoardComponent {
    constructor() { }
    ngOnInit() {
    }
};
CardBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-board',
        template: __webpack_require__(/*! raw-loader!./card-board.component.html */ "./node_modules/raw-loader/index.js!./src/app/card-board/card-board.component.html"),
        styles: [__webpack_require__(/*! ./card-board.component.scss */ "./src/app/card-board/card-board.component.scss")]
    })
], CardBoardComponent);



/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  position: relative;\n  height: 135px;\n  width: 85px;\n}\n\n.card.visible .cardBack {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.card.visible .cardFront {\n  -webkit-transform: rotateY(0);\n          transform: rotateY(0);\n}\n\n.card.matched .cardValue {\n  -webkit-animation: shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n}\n\n.cardFace {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-radius: 12px;\n  border-width: 1px;\n  border-style: solid;\n  transition: all 600ms ease-in-out;\n  cursor: pointer;\n}\n\n.cardFace:hover {\n  border-radius: 8px;\n}\n\n.cardFront {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  background-color: #E76062;\n  border-color: #E76062;\n}\n\n.cardBack {\n  background-color: #ff3f92;\n  border-color: #ff3f92;\n}\n\n.cardFrontImage {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  height: 70%;\n  width: 80%;\n}\n\n.cardBack:hover .cardFrontImage {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  cursor: pointer;\n}\n\n.cardValue {\n  height: 70%;\n  width: 80%;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n  transition: all 200ms ease-in-out;\n}\n\n.cardFront:hover .cardValue {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9DOlxcVXNlcnNcXEFwbGFuXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxUZXN0XFxtZW1vcnlHYW1lUkUvc3JjXFxhcHBcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUVJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNiSjs7QURnQkE7RUFFSSxrQ0FBQTtVQUFBLDBCQUFBO0FDZEo7O0FEaUJBO0VBRUksNkJBQUE7VUFBQSxxQkFBQTtBQ2ZKOztBRGtCQTtFQUVJLHFFQUFBO1VBQUEsNkRBQUE7QUNoQko7O0FEbUJBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDakJKOztBRG9CQTtFQUVJLGtCQUFBO0FDbEJKOztBRHFCQTtFQUVJLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSx5QkFqRFU7RUFrRFYscUJBbERVO0FDK0JkOztBRHNCQTtFQUVJLHlCQTFEUztFQTJEVCxxQkEzRFM7QUN1Q2I7O0FEdUJBO0VBRUksZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLCtDQUFBO0VBQUEsdUNBQUE7RUFBQSw0RUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDckJKOztBRHdCQTtFQUVJLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxlQUFBO0FDdEJKOztBRHlCQTtFQUVJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGlDQUFBO0FDdkJKOztBRDBCQTtFQUVJLDJCQUFBO1VBQUEsbUJBQUE7QUN4QkoiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gRm9udHNcclxuJHRpdGxlRm9udDogJ0JhcnJpZWNpdG8nLCBjdXJzaXZlO1xyXG4kbWFpbkZvbnQ6ICdTbmlnbGV0JywgY3Vyc2l2ZTtcclxuXHJcbi8vIENvbG9yc1xyXG4kYmdDb2xvcjE6ICM4MGVlZmY7XHJcbiRiZ0NvbG9yMjogIzE3YTJjODtcclxuJGNhcmRCQ29sb3I6ICNmZjNmOTI7XHJcbiRjYXJkRkNvbG9yMTogI0VEREQ4QztcclxuJGNhcmRGQ29sb3IyOiAjRjlCQjk2O1xyXG4kY2FyZEZDb2xvcjM6ICNFNzYwNjI7XHJcblxyXG4uY2FyZFxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEzNXB4O1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbn1cclxuXHJcbi5jYXJkLnZpc2libGUgLmNhcmRCYWNrXHJcbntcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4uY2FyZC52aXNpYmxlIC5jYXJkRnJvbnRcclxue1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDApXHJcbn1cclxuXHJcbi5jYXJkLm1hdGNoZWQgLmNhcmRWYWx1ZVxyXG57XHJcbiAgICBhbmltYXRpb246IHNoYWtlIDJzIGN1YmljLWJlemllciguMzYsLjA3LC4xOSwuOTcpIGJvdGg7XHJcbn1cclxuXHJcbi5jYXJkRmFjZVxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcyBlYXNlLWluLW91dDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmRGYWNlOmhvdmVyXHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmNhcmRGcm9udFxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkRkNvbG9yMztcclxuICAgIGJvcmRlci1jb2xvcjokY2FyZEZDb2xvcjM7XHJcbn1cclxuXHJcbi5jYXJkQmFja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZEJDb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogJGNhcmRCQ29sb3I7XHJcbn1cclxuXHJcbi5jYXJkRnJvbnRJbWFnZVxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5jYXJkQmFjazpob3ZlciAuY2FyZEZyb250SW1hZ2Vcclxue1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZFZhbHVlXHJcbntcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2FyZEZyb250OmhvdmVyIC5jYXJkVmFsdWVcclxue1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufSIsIi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEzNXB4O1xuICB3aWR0aDogODVweDtcbn1cblxuLmNhcmQudmlzaWJsZSAuY2FyZEJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmNhcmQudmlzaWJsZSAuY2FyZEZyb250IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDApO1xufVxuXG4uY2FyZC5tYXRjaGVkIC5jYXJkVmFsdWUge1xuICBhbmltYXRpb246IHNoYWtlIDJzIGN1YmljLWJlemllcigwLjM2LCAwLjA3LCAwLjE5LCAwLjk3KSBib3RoO1xufVxuXG4uY2FyZEZhY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmRGYWNlOmhvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uY2FyZEZyb250IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNzYwNjI7XG4gIGJvcmRlci1jb2xvcjogI0U3NjA2Mjtcbn1cblxuLmNhcmRCYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmM2Y5MjtcbiAgYm9yZGVyLWNvbG9yOiAjZmYzZjkyO1xufVxuXG4uY2FyZEZyb250SW1hZ2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5jYXJkQmFjazpob3ZlciAuY2FyZEZyb250SW1hZ2Uge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmRWYWx1ZSB7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogODAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmNhcmRGcm9udDpob3ZlciAuY2FyZFZhbHVlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards.service */ "./src/app/cards.service.ts");



let CardComponent = class CardComponent {
    constructor(cardService) {
        this.cardService = cardService;
        this.cards = [];
    }
    ngOnInit() {
        console.log('garba');
        this.cards = this.cardService.getCards();
    }
};
CardComponent.ctorParameters = () => [
    { type: _cards_service__WEBPACK_IMPORTED_MODULE_2__["CardsService"] }
];
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/card/card.component.html"),
        styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
    })
], CardComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardsService = class CardsService {
    constructor() {
        this.cards = ['avocado.png', 'bacon-and-eggs.png', 'breakfast.png', 'burger-and-potatoes.png', 'cheese.png',
            'chef.png', 'coffe-cup.png', 'croisant.png', 'gingerbreadman.png', 'ice-cream.png', 'latte.png',
            'meat.png', 'pizza.png', 'taco.png', 'wine.png', 'avocado.png', 'bacon-and-eggs.png', 'breakfast.png', 'burger-and-potatoes.png', 'cheese.png',
            'chef.png', 'coffe-cup.png', 'croisant.png', 'gingerbreadman.png', 'ice-cream.png', 'latte.png',
            'meat.png', 'pizza.png', 'taco.png', 'wine.png'];
    }
    getCards() {
        return this.cards;
    }
};
CardsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CardsService);



/***/ }),

/***/ "./src/app/overlays/overlays.component.scss":
/*!**************************************************!*\
  !*** ./src/app/overlays/overlays.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlayText {\n  display: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  justify-content: center;\n  align-items: center;\n  z-index: 100;\n  font-family: \"Barriecito\", cursive, Arial, Helvetica, sans-serif;\n  color: #ffffff;\n  -webkit-text-fill-color: #F9BB96;\n  -webkit-text-stroke-width: 3px;\n  cursor: pointer;\n}\n\n.overlayTextSmall {\n  font-size: 0.3em;\n  -webkit-text-stroke-width: 2px;\n  font-family: \"Sniglet\", cursive;\n  cursor: pointer;\n}\n\n.overlayText.start.visible {\n  display: flex;\n  flex-direction: column;\n  -webkit-animation: overlayPop 500ms forwards;\n          animation: overlayPop 500ms forwards;\n}\n\n.overlayText.victory.visible {\n  display: flex;\n  flex-direction: column;\n  -webkit-animation: overlayPop2 500ms forwards;\n          animation: overlayPop2 500ms forwards;\n}\n\n.overlayText.over.visible {\n  display: flex;\n  flex-direction: column;\n  -webkit-animation: overlayPop2 500ms forwards;\n          animation: overlayPop2 500ms forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcmxheXMvQzpcXFVzZXJzXFxBcGxhblxcT25lRHJpdmVcXERvY3VtZW50c1xcVGVzdFxcbWVtb3J5R2FtZVJFL3NyY1xcYXBwXFxvdmVybGF5c1xcb3ZlcmxheXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL292ZXJsYXlzL292ZXJsYXlzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBRUksYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnRUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FuQlU7RUFvQlYsOEJBQUE7RUFDQSxlQUFBO0FDZko7O0FEa0JBO0VBRUksZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQW5DTztFQW9DUCxlQUFBO0FDaEJKOztBRG9CQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7QUNsQko7O0FEc0JBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7VUFBQSxxQ0FBQTtBQ3BCSjs7QUR3QkE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2Q0FBQTtVQUFBLHFDQUFBO0FDdEJKIiwiZmlsZSI6InNyYy9hcHAvb3ZlcmxheXMvb3ZlcmxheXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xyXG4kdGl0bGVGb250OiAnQmFycmllY2l0bycsIGN1cnNpdmU7XHJcbiRtYWluRm9udDogJ1NuaWdsZXQnLCBjdXJzaXZlO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRiZ0NvbG9yMTogIzgwZWVmZjtcclxuJGJnQ29sb3IyOiAjMTdhMmM4O1xyXG4kY2FyZEJDb2xvcjogI2ZmM2Y5MjtcclxuJGNhcmRGQ29sb3IxOiAjRURERDhDO1xyXG4kY2FyZEZDb2xvcjI6ICNGOUJCOTY7XHJcbiRjYXJkRkNvbG9yMzogI0U3NjA2MjtcclxuXHJcbi8vb3ZlcmxheSBXaWRnZXRzXHJcblxyXG4vL2NsaWNrIHRvIHN0YXJ0XHJcbi5vdmVybGF5VGV4dFxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICR0aXRsZUZvbnQsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAkY2FyZEZDb2xvcjI7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vdmVybGF5VGV4dFNtYWxsXHJcbntcclxuICAgIGZvbnQtc2l6ZTogLjNlbTtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkbWFpbkZvbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vIFN0YXJ0IHNjcmVlbiBvZiB0aGUgZ2FtZVxyXG4ub3ZlcmxheVRleHQuc3RhcnQudmlzaWJsZVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFuaW1hdGlvbjogb3ZlcmxheVBvcCA1MDBtcyBmb3J3YXJkcztcclxufVxyXG5cclxuLy8gdmljdG9yeSBzY3JlZW5cclxuLm92ZXJsYXlUZXh0LnZpY3RvcnkudmlzaWJsZVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFuaW1hdGlvbjogb3ZlcmxheVBvcDIgNTAwbXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi8vIGdhbWUgb3ZlciBzY3JlZW5cclxuLm92ZXJsYXlUZXh0Lm92ZXIudmlzaWJsZVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFuaW1hdGlvbjogb3ZlcmxheVBvcDIgNTAwbXMgZm9yd2FyZHM7XHJcbn0iLCIub3ZlcmxheVRleHQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDtcbiAgZm9udC1mYW1pbHk6IFwiQmFycmllY2l0b1wiLCBjdXJzaXZlLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNGOUJCOTY7XG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub3ZlcmxheVRleHRTbWFsbCB7XG4gIGZvbnQtc2l6ZTogMC4zZW07XG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiU25pZ2xldFwiLCBjdXJzaXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vdmVybGF5VGV4dC5zdGFydC52aXNpYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYW5pbWF0aW9uOiBvdmVybGF5UG9wIDUwMG1zIGZvcndhcmRzO1xufVxuXG4ub3ZlcmxheVRleHQudmljdG9yeS52aXNpYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYW5pbWF0aW9uOiBvdmVybGF5UG9wMiA1MDBtcyBmb3J3YXJkcztcbn1cblxuLm92ZXJsYXlUZXh0Lm92ZXIudmlzaWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFuaW1hdGlvbjogb3ZlcmxheVBvcDIgNTAwbXMgZm9yd2FyZHM7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OverlaysComponent = class OverlaysComponent {
    constructor() { }
    ngOnInit() {
    }
};
OverlaysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-overlays',
        template: __webpack_require__(/*! raw-loader!./overlays.component.html */ "./node_modules/raw-loader/index.js!./src/app/overlays/overlays.component.html"),
        styles: [__webpack_require__(/*! ./overlays.component.scss */ "./src/app/overlays/overlays.component.scss")]
    })
], OverlaysComponent);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/**
 * left off trying to out put score after winning game
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));
/************************************************************** */
/**
 * game class / Game object
 **/
class tastyMatch {
    constructor(totalTime, cards) {
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
    startGame() {
        // declare function properties
        this.cardToCheck = null; // selected card to check if it matches with next selected card
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        // set timeout to wait before executing, delay game execution/start
        setTimeout(() => {
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 600);
        this.hideCards();
    }
    /**
     * hideCards function
     * loops through cardsArray and removes classes
     **/
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }
    /**
     * showCards() function
     * shows all cards if you lost the game
     **/
    showCards() {
        this.cardsArray.forEach(card => {
            card.classList.add('visible');
        });
    }
    /**
     *Shuffle cards using fisher and Yates shuffle algorithm
     */
    shuffleCards() {
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;
        }
    }
    /**
     *can flip card yes or no
     * */
    canFlipCard(card) {
        // check to see if you can flip card (if all three statements are false then return true)
        return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck);
    }
    /**
     *flipCard function
     **/
    flipCard(card) {
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
    }
    /**
     *checkForCardMatch() function
     checks if cards match and confirms that they match or not
     **/
    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck)) {
            this.cardMatch(card, this.cardToCheck);
        }
        else {
            this.cardMisMatch(card, this.cardToCheck);
        }
        this.cardToCheck = null;
    }
    /**
     * getCardType() function
     * returns the card type, which is a string based on src e.g ("./assets/icons/png/cheese.png")
     **/
    getCardType(card) {
        return card.getElementsByClassName('cardValue')[0].src;
    }
    /**
     * cardMatch() function
     * takes matched cards and pushes them to the matchCards array and adds matched class
     **/
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        if (this.matchedCards.length === this.cardsArray.length) {
            this.victory();
        }
    }
    /**
     * cardMisMatch() function
     **/
    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }
    /**
    * startCountdown() function
    * starts the game countdown
    **/
    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 60) {
                document.getElementById('timeRemaining').classList.add('tmr1');
            }
            if (this.timeRemaining === 30) {
                document.getElementById('timeRemaining').classList.add('tmr2');
            }
            if (this.timeRemaining === 0) {
                this.gameOver();
            }
        }, 1000);
    }
    /**
     * victory() function
     * displays victory widget on game completion
     **/
    victory() {
        this.score.innerText = (this.totalClicks / 2) + ' points';
        this.time.innerText = (120 - this.timeRemaining) + ' sec';
        document.getElementById('victoryText').classList.add('visible');
        clearInterval(this.countDown);
    }
    /**
    * GameOver() function
    **/
    gameOver() {
        //show gameOver screen/widget
        document.getElementById('timeRemaining').classList.remove('tmr', 'tmr1', 'tmr2');
        // clear countdown
        clearInterval(this.countDown);
        this.showCards();
        document.getElementById('gameOverText').classList.add('visible');
    }
}
tastyMatch.ctorParameters = () => [
    null,
    null
];
/**
 * ready() function
 **/
function ready() {
    // grab overlays by class name and put them in an array
    let overlays = Array.from(document.getElementsByClassName('overlayText')); // put html collection into an array
    // grab cards by class name and put them in an array
    let cards = Array.from(document.getElementsByClassName('card'));
    // declare game instance
    let game = new tastyMatch(200, cards);
    /**
     * loop through overlays and add 'click' eventListeners
     **/
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // initialize game
            document.getElementById('timeRemaining').classList.add('tmr');
            game.startGame();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
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
    document.addEventListener('DOMContentLoaded', () => ready()); // function ready initializes the whole program
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
//# sourceMappingURL=main-es2015.js.map