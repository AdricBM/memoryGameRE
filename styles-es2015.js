(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--13-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n  box-sizing: border-box;\n}\nhtml {\n  min-height: 100vh;\n  min-width: 100vh;\n}\nbody {\n  background: radial-gradient(#80eeff, #17a2c8);\n  margin: 0;\n}\n.pageTitle {\n  font-family: \"Barriecito\", cursive, Arial, Helvetica, sans-serif;\n  color: #ffffff;\n  font-weight: bolder;\n  text-align: center;\n  font-size: 4em;\n  -webkit-text-fill-color: #131313;\n  -webkit-text-stroke-width: 3px;\n  margin-top: 0;\n}\n.cardGrid {\n  display: grid;\n  grid-template-columns: repeat(10, auto);\n  grid-gap: 10px;\n  margin: 10px;\n  justify-content: center;\n  perspective: 500px;\n}\n.gameInfoContainer {\n  display: flex;\n  grid-column: 1/-1;\n  justify-content: space-between;\n}\n.gameInfo {\n  font-family: \"Sniglet\", cursive, Helvetica, sans-serif;\n  color: #1d1d1d;\n  font-size: 2em;\n  font-weight: bold;\n  padding-top: 0;\n}\n.tmr {\n  color: #00ff00;\n  background-color: #202020;\n  border-radius: 50px;\n  opacity: 0.7;\n}\n.tmr1 {\n  color: #ff3300;\n  opacity: 0.8;\n}\n.tmr2 {\n  color: #ff0000;\n  opacity: 0.9;\n}\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n@keyframes shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes overlayPop {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n    font-size: 0;\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.8);\n    font-size: 10em;\n    -webkit-text-stroke-width: 4px;\n  }\n}\n@keyframes overlayPop2 {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n    font-size: 0;\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.8);\n    font-size: 4em;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 600px) {\n  .gameContainer {\n    grid-template-columns: repeat(3, auto);\n  }\n}\n@media (max-width: 500px) {\n  .gameContainer {\n    grid-template-columns: repeat(2, auto);\n  }\n\n  .gameInfoContainer {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXEFwbGFuXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxUZXN0XFxtZW1vcnlHYW1lUkUvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQWNBO0VBRUksc0JBQUE7QUNiSjtBRGdCQTtFQUVJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNkSjtBRGlCQTtFQUVJLDZDQUFBO0VBQ0EsU0FBQTtBQ2ZKO0FEa0JBO0VBRUksZ0VBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ2hCSjtBRG1CQTtFQUVJLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ2pCSjtBRG9CQTtFQUVJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDbEJKO0FEcUJBO0VBRUksc0RBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ25CSjtBRHNCQTtFQUVJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ3BCSjtBRHVCQTtFQUVJLGNBQUE7RUFDQSxZQUFBO0FDckJKO0FEd0JBO0VBRUksY0FBQTtFQUNBLFlBQUE7QUN0Qko7QUQwQkE7RUFFSSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ3hCSjtBRDJCQTtFQUVJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDekJKO0FEK0JBO0VBRUk7SUFDRSxrQ0FBQTtFQzdCSjtFRGdDRTtJQUNFLGlDQUFBO0VDOUJKO0VEaUNFO0lBQ0Usa0NBQUE7RUMvQko7RURrQ0U7SUFDRSxpQ0FBQTtFQ2hDSjtBQUNGO0FEb0NBO0VBRUk7SUFFSSxrQ0FBQTtJQUNBLFlBQUE7RUNwQ047RURzQ0U7SUFFSSxvQ0FBQTtJQUNBLGVBQUE7SUFDQSw4QkFBQTtFQ3JDTjtBQUNGO0FEeUNBO0VBRUk7SUFFSSxrQ0FBQTtJQUNBLFlBQUE7RUN6Q047RUQyQ0U7SUFFSSxvQ0FBQTtJQUNBLGNBQUE7SUFDQSwyQkFBQTtFQzFDTjtBQUNGO0FEZ0RBO0VBRUk7SUFFSSxzQ0FBQTtFQ2hETjtBQUNGO0FEb0RBO0VBRUk7SUFFSSxzQ0FBQTtFQ3BETjs7RURzREU7SUFFSSxzQkFBQTtJQUNBLG1CQUFBO0VDcEROO0FBQ0YiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuLy8gRm9udHNcclxuJHRpdGxlRm9udDogJ0JhcnJpZWNpdG8nLCBjdXJzaXZlO1xyXG4kbWFpbkZvbnQ6ICdTbmlnbGV0JywgY3Vyc2l2ZTtcclxuXHJcbi8vIENvbG9yc1xyXG4kYmdDb2xvcjE6ICM4MGVlZmY7XHJcbiRiZ0NvbG9yMjogIzE3YTJjODtcclxuJGNhcmRCQ29sb3I6ICNmZjNmOTI7XHJcbiRjYXJkRkNvbG9yMTogI0VEREQ4QztcclxuJGNhcmRGQ29sb3IyOiAjRjlCQjk2O1xyXG4kY2FyZEZDb2xvcjM6ICNFNzYwNjI7XHJcblxyXG4qXHJcbntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWxcclxue1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xyXG59XHJcblxyXG5ib2R5XHJcbntcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjODBlZWZmLCAjMTdhMmM4KTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnBhZ2VUaXRsZVxyXG57XHJcbiAgICBmb250LWZhbWlseTogJHRpdGxlRm9udCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICMxMzEzMTM7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uY2FyZEdyaWRcclxue1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBhdXRvKTtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwZXJzcGVjdGl2ZTogNTAwcHg7XHJcbn1cclxuXHJcbi5nYW1lSW5mb0NvbnRhaW5lclxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmdhbWVJbmZvXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAkbWFpbkZvbnQsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMWQxZDFkO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4udG1yXHJcbntcclxuICAgIGNvbG9yOiAjMDBmZjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBvcGFjaXR5OiAuNztcclxufVxyXG5cclxuLnRtcjFcclxue1xyXG4gICAgY29sb3I6ICNmZjMzMDA7XHJcbiAgICBvcGFjaXR5OiAuODtcclxufVxyXG5cclxuLnRtcjJcclxue1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICBvcGFjaXR5OiAuOTtcclxufVxyXG5cclxuLy8gVGFibGVcclxudGFibGUgXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4gIFxyXG50ZCwgdGggXHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4vLyBLZXlGcmFtZXNcclxuXHJcbi8vIHNoYWtlIEtleWZyYW1lXHJcbkBrZXlmcmFtZXMgc2hha2UgXHJcbntcclxuICAgIDEwJSwgOTAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgMjAlLCA4MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAzMCUsIDUwJSwgNzAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcclxuICAgIH1cclxuICBcclxuICAgIDQwJSwgNjAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi8vIE92ZXJsYXlQb3Aga2V5ZnJhbWVcclxuQGtleWZyYW1lcyBvdmVybGF5UG9wXHJcbntcclxuICAgIGZyb21cclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMDtcclxuICAgIH1cclxuICAgIHRvXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMGVtO1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDRweDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gT3ZlcmxheVBvcCBrZXlmcmFtZVxyXG5Aa2V5ZnJhbWVzIG92ZXJsYXlQb3AyXHJcbntcclxuICAgIGZyb21cclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMDtcclxuICAgIH1cclxuICAgIHRvXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNZWRpYSBRdWVyaWVzXHJcblxyXG4vLyBXaWR0aCA2MDBweFxyXG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweClcclxue1xyXG4gICAgLmdhbWVDb250YWluZXJcclxuICAgIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBXaWR0aCA1MDBweFxyXG5AbWVkaWEobWF4LXdpZHRoOiA1MDBweClcclxue1xyXG4gICAgLmdhbWVDb250YWluZXJcclxuICAgIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKVxyXG4gICAgfVxyXG4gICAgLmdhbWVJbmZvQ29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTAwdmg7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzgwZWVmZiwgIzE3YTJjOCk7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBhZ2VUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJhcnJpZWNpdG9cIiwgY3Vyc2l2ZSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0ZW07XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjMTMxMzEzO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAzcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5jYXJkR3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBhdXRvKTtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBlcnNwZWN0aXZlOiA1MDBweDtcbn1cblxuLmdhbWVJbmZvQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmdhbWVJbmZvIHtcbiAgZm9udC1mYW1pbHk6IFwiU25pZ2xldFwiLCBjdXJzaXZlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMWQxZDFkO1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4udG1yIHtcbiAgY29sb3I6ICMwMGZmMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnRtcjEge1xuICBjb2xvcjogI2ZmMzMwMDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4udG1yMiB7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbnRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMTAlLCA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gIH1cbiAgMjAlLCA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcbiAgfVxuICAzMCUsIDUwJSwgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICB9XG4gIDQwJSwgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgb3ZlcmxheVBvcCB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgZm9udC1zaXplOiAwO1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMGVtO1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDRweDtcbiAgfVxufVxuQGtleWZyYW1lcyBvdmVybGF5UG9wMiB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgZm9udC1zaXplOiAwO1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmdhbWVDb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmdhbWVDb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuICB9XG5cbiAgLmdhbWVJbmZvQ29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Aplan\OneDrive\Documents\Test\memoryGameRE\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map