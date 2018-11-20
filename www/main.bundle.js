webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".board {\r\n    height: 300px;\r\n    width: 300px;\r\n    position: relative;\r\n    margin: 10px;\r\n    top: 30px;\r\n    left: 30px;\r\n}\r\n.configuration{\r\n    height: 300px;\r\n    width:300px;\r\n    position: relative;\r\n    margin: 10px;\r\n}\r\n.square {\r\n    height: 6.66%;\r\n    width: 6.66%;\r\n    float: left;\r\n    text-align: center;\r\n}\r\n.square-with-border {\r\n    height: 6.66%;\r\n    width: 6.66%;\r\n    float: left;\r\n    border: 1px solid gray;\r\n    text-align: center;\r\n}\r\n.red{\r\n    background-color: #ED1C22;\r\n}\r\n.green{\r\n    background-color: #02A049;\r\n}\r\n.yellow{\r\n    background-color: #FFDE17;\r\n}\r\n.blue{\r\n    background-color: #23A2F1;\r\n}\r\n.white{\r\n    background-color: white;\r\n}\r\n.final{\r\n    background-color: #420570;\r\n}\r\n.winner-home{\r\n    position: absolute;\r\n    font-weight: bold;\r\n}\r\n.winner-home-1{\r\n    top:73%;\r\n    left:18%;\r\n}\r\n.winner-home-2{\r\n    top:12%;\r\n    left:18%;\r\n}\r\n.winner-home-3{\r\n    top:12%;\r\n    left:77%;\r\n}\r\n.winner-home-4{\r\n    top:73%;\r\n    left:77%;\r\n}\r\n.game-over{\r\n    height: 100%;\r\n    width: 100%;\r\n    top:0%;\r\n    left:0%;\r\n    position: absolute;\r\n    opacity: 0.5;\r\n    font-size: 50px;\r\n    padding-left: 32%;\r\n    font-weight: 900;\r\n    color:#5b0080;\r\n}\r\n.disabled {\r\n    cursor: not-allowed;\r\n}\r\n.spinner{\r\n    position: absolute;\r\n    font-weight: bold;\r\n}\r\n.spinner-1{\r\n    background-color: #23A2F1;\r\n    top:93%;\r\n    left:-5%;\r\n}\r\n.spinner-2{\r\n    background-color: #ED1C22;\r\n    top:-5%;\r\n    left:-5%;\r\n}\r\n.spinner-3{\r\n    background-color: #02A049;\r\n    top:-5%;\r\n    left:93%;\r\n}\r\n.spinner-4{\r\n    background-color: #FFDE17;\r\n    top:93%;\r\n    left:93%;\r\n}\r\n/* You can add global styles to this file, and also import other style files */\r\n.icon {\r\n    position: absolute;  \r\n    font-weight: bold;\r\n}\r\n.red-icon{\r\n    color: #920F0A;\r\n}\r\n.green-icon{\r\n    color: #0F6935;\r\n}\r\n.yellow-icon{\r\n    color: #D1C215;\r\n}\r\n.blue-icon{\r\n    color: #2633A3;\r\n}\r\n.move-indicator{\r\n    color: white;\r\n}\r\n.hide{\r\n    display: none;\r\n}\r\n.container {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 22px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 4px;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.container:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.container input:checked ~ .checkmark {\r\n    background-color: #1267ab;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.container input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n/* Style the checkmark/indicator */\r\n.container .checkmark:after {\r\n    left: 9px;\r\n    top: 5px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n.play-btn{\r\n    background-color: #5b0080;\r\n    color:#fff;\r\n    border-radius:0!important;\r\n    width: 100%;\r\n}\r\n.replay-btn{\r\n    background-color: #5b0080;\r\n    color:#fff;\r\n    border-radius:0!important;\r\n    width: 100%;\r\n    top: 115%;\r\n    position: absolute;\r\n    left: 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"configuration\" *ngIf=\"!isConfigured\">\n    <label class=\"container blue\">Blue\n        <input type=\"checkbox\" [(ngModel)]=\"isHome1\">\n        <span class=\"checkmark\"></span>\n      </label>\n  <label class=\"container red\">Red\n    <input type=\"checkbox\" [(ngModel)]=\"isHome2\">\n    <span class=\"checkmark\"></span>\n  </label>\n  <label class=\"container green\">Green\n    <input type=\"checkbox\" [(ngModel)]=\"isHome3\">\n    <span class=\"checkmark\"></span>\n  </label>\n  <label class=\"container yellow\">Yellow\n    <input type=\"checkbox\" [(ngModel)]=\"isHome4\">\n    <span class=\"checkmark\"></span>\n  </label>\n  <button class=\"btn play-btn\" (click)=\"startPlay()\">Play</button>\n</div>\n\n<div class=\"board\" *ngIf=\"isConfigured\">\n  <div *ngFor=\"let item of squares\" class=\"{{item.SquareType}} {{item.SquareColor}}\" [innerHTML]=\"item.Html\" [attr.data-position]=\"item.Position\"></div>\n  <div *ngFor=\"let h of homes\">\n    <i *ngFor=\"let p of h.HomePointers\" (click)=\"clickPointer(p.Index)\" [ngStyle]=\"setPointerPosition(p)\" [attr.data-name]=\"h.Index+'-'+p.Index\"\n      class='fa fa-circle icon {{h.IconColor}} {{h.Index==turn && h.AutoPlay==false && h.PlayState==2?\"\":\"disabled\"}}'></i>\n    <i *ngFor=\"let p of h.HomePointers\" (click)=\"clickPointer(p.Index)\" [ngStyle]=\"setPointerPosition(p)\" [attr.data-name]=\"h.Index+'-'+p.Index\"\n      class='fa fa-cog fa-spin icon move-indicator {{h.IconColor}} {{movablePointers.indexOf(p)>-1?\"\":\"hide\"}}'></i>\n    <span style=\"font-size:30px;\" *ngIf=\"h.WinnerNumber>0\" class=\"winner-home winner-home-{{h.Index}}\">{{h.WinnerNumber}}</span>\n  </div>\n  <div class=\"jumbotron game-over\" *ngIf=\"gameOver\">Game Over</div>\n  <button class=\"btn spinner spinner-1\" [disabled]=\"turn != 1 || homes[0].PlayState == 2\" (click)=\"spinDice()\">{{dice}}</button>\n  <button class=\"btn spinner spinner-2\" [disabled]=\"turn != 2 || homes[1].PlayState == 2\" (click)=\"spinDice()\">{{dice}}</button>\n  <button class=\"btn spinner spinner-3\" [disabled]=\"turn != 3 || homes[2].PlayState == 2\" (click)=\"spinDice()\">{{dice}}</button>\n  <button class=\"btn spinner spinner-4\" [disabled]=\"turn != 4 || homes[3].PlayState == 2\" (click)=\"spinDice()\">{{dice}}</button>\n  <button class=\"btn replay-btn\" (click)=\"replay()\">Replay</button>\n</div>\n<!-- <div>Total Moves - {{totalMoves.home1+totalMoves.home2+totalMoves.home3+totalMoves.home4}}</div>\n<div>Home 1 - {{totalMoves.home1}}, Winner Number - {{homes[0].WinnerNumber}}</div>\n<div>Home 2 - {{totalMoves.home2}}, Winner Number - {{homes[1].WinnerNumber}}</div>\n<div>Home 3 - {{totalMoves.home3}}, Winner Number - {{homes[2].WinnerNumber}}</div>\n<div>Home 4 - {{totalMoves.home4}}, Winner Number - {{homes[3].WinnerNumber}}</div> -->\n<br>\n\n<!-- <button class=\"btn btn-primary\" [disabled]=\"isSpinnerDisabled\" (click)=\"spinDice(false)\">{{dice}}</button> -->\n<!-- <button class=\"btn btn-primary\" (click)=\"clickManual(1)\">1</button>\n<button class=\"btn btn-primary\" (click)=\"clickManual(2)\">2</button>\n<button class=\"btn btn-primary\" (click)=\"clickManual(3)\">3</button>\n<button class=\"btn btn-primary\" (click)=\"clickManual(4)\">4</button>\n<button class=\"btn btn-primary\" (click)=\"clickManual(5)\">5</button>\n<button class=\"btn btn-primary\" (click)=\"clickManual(6)\">6</button> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_square__ = __webpack_require__("./src/app/app.square.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.squares = [];
        this.currentPosition = { Row: 0, Column: 0 };
        this.homes = [];
        this.diceHistory = [0, 0, 0];
        this.dice = 6;
        this.turn = 1;
        this.continuePlay = false;
        this.safePositions = ['14,7', '9-3', '7-2', '3-7', '2-9', '7-13', '9-14', '13-9'];
        this.allPointers = [];
        this.isSpinnerDisabled = false;
        this.delayTimes = { diceSpin: 500, changePosition: 200, autoPlay: 2000, gapBetweenNextAutoPlaySpin: 500 };
        this.gameOver = false;
        this.movablePointers = [];
        this.totalMoves = { home1: 0, home2: 0, home3: 0, home4: 4 };
        this.isHome1 = false;
        this.isHome2 = false;
        this.isHome3 = false;
        this.isHome4 = false;
        this.isConfigured = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var device;
        document.addEventListener("deviceready", function () {
            alert(device.platform);
        }, false);
    };
    AppComponent.prototype.startPlay = function () {
        console.log(this.isHome1, this.isHome2, this.isHome3, this.isHome4);
        this.isConfigured = true;
        this.drawBoard();
    };
    AppComponent.prototype.replay = function () {
        if (confirm("Are you sure you want to replay?")) {
            window.location.reload();
        }
    };
    AppComponent.prototype.drawBoard = function () {
        var _this = this;
        this.createSquare({ rowCount: 1, columns: [{ columnCount: 6, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Red }, { columnCount: 3, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 6, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Green }] });
        this.createSquare({ rowCount: 1, columns: [{ columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Red }, { columnCount: 4, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Red }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 2, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Green }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Green }, { columnCount: 4, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Green }] });
        this.createSquare({ rowCount: 3, columns: [{ columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Red }, { columnCount: 4, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Red }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Green }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Green }, { columnCount: 4, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Green }] });
        this.createSquare({ rowCount: 1, columns: [{ columnCount: 6, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Red }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Green }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 6, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Green }] });
        this.createSquare({ rowCount: 1, columns: [{ columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Red }, { columnCount: 4, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 3, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Final }, { columnCount: 6, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }] });
        this.createSquare({ rowCount: 1, columns: [{ columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 5, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Red }, { columnCount: 3, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Final }, { columnCount: 5, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Yellow }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }] });
        this.createSquare({ rowCount: 1, columns: [{ columnCount: 6, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 3, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Final }, { columnCount: 4, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Yellow }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }] });
        this.createSquare({ rowCount: 1, columns: [{ columnCount: 6, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Blue }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Blue }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 6, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Yellow }] });
        this.createSquare({ rowCount: 3, columns: [{ columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Blue }, { columnCount: 4, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Blue }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Blue }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Yellow }, { columnCount: 4, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Yellow }] });
        this.createSquare({ rowCount: 1, columns: [{ columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Blue }, { columnCount: 4, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Blue }, { columnCount: 2, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Blue }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Yellow }, { columnCount: 4, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 1, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Yellow }] });
        this.createSquare({ rowCount: 1, columns: [{ columnCount: 6, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Blue }, { columnCount: 3, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].SquareWithBorder, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].White }, { columnCount: 6, type: __WEBPACK_IMPORTED_MODULE_1__app_square__["e" /* SquareType */].Square, color: __WEBPACK_IMPORTED_MODULE_1__app_square__["d" /* SquareColor */].Yellow }] });
        this.drawStars(['3-7', '7-13', '3-7', '9-3', '13-9']);
        this.homes.push({
            Index: 1, IconColor: __WEBPACK_IMPORTED_MODULE_1__app_square__["a" /* IconColor */].Blue,
            HomePointers: [{ Index: 1, Position: '11-2', DefaultPosition: '11-2', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 2, Position: '11-5', DefaultPosition: '11-5', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 3, Position: '14-2', DefaultPosition: '14-2', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 4, Position: '14-5', DefaultPosition: '14-5', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }],
            //HomePointers: [{ Index: 1, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 2, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 3, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 4, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }],
            Path: ['14-7', '13-7', '12-7', '11-7', '10-7', '9-6', '9-5', '9-4', '9-3', '9-2', '9-1', '8-1', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '6-7', '5-7', '4-7', '3-7', '2-7', '1-7', '1-8', '1-9', '2-9', '3-9', '4-9', '5-9', '6-9', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '8-15', '9-15', '9-14', '9-13', '9-12', '9-11', '9-10', '10-9', '11-9', '12-9', '13-9', '14-9', '15-9', '15-8', '14-8', '13-8', '12-8', '11-8', '10-8', '9-8'],
            WinnerNumber: 0,
            AutoPlay: !this.isHome1,
            IsPlayer: false,
            PlayState: __WEBPACK_IMPORTED_MODULE_1__app_square__["b" /* PlayState */].ReadyToDice
        });
        this.homes.push({
            Index: 2, IconColor: __WEBPACK_IMPORTED_MODULE_1__app_square__["a" /* IconColor */].Red,
            HomePointers: [{ Index: 1, Position: '2-2', DefaultPosition: '2-2', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 2, Position: '2-5', DefaultPosition: '2-5', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 3, Position: '5-2', DefaultPosition: '5-2', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 4, Position: '5-5', DefaultPosition: '5-5', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }],
            //HomePointers: [{ Index: 1, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 2, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 3, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 4, Position: '14-7', State: PointerState.AtHome, TotalSiblings: 1, InnerIndex: 1 }],
            Path: ['7-2', '7-3', '7-4', '7-5', '7-6', '6-7', '5-7', '4-7', '3-7', '2-7', '1-7', '1-8', '1-9', '2-9', '3-9', '4-9', '5-9', '6-9', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '8-15', '9-15', '9-14', '9-13', '9-12', '9-11', '9-10', '10-9', '11-9', '12-9', '13-9', '14-9', '15-9', '15-8', '15-7', '14-7', '13-7', '12-7', '11-7', '10-7', '9-6', '9-5', '9-4', '9-3', '9-2', '9-1', '8-1', '8-2', '8-3', '8-4', '8-5', '8-6', '8-7'],
            WinnerNumber: 0,
            AutoPlay: !this.isHome2,
            IsPlayer: false,
            PlayState: __WEBPACK_IMPORTED_MODULE_1__app_square__["b" /* PlayState */].ReadyToDice
        });
        this.homes.push({
            Index: 3, IconColor: __WEBPACK_IMPORTED_MODULE_1__app_square__["a" /* IconColor */].Green,
            HomePointers: [{ Index: 1, Position: '2-11', DefaultPosition: '2-11', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 2, Position: '2-14', DefaultPosition: '2-14', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 3, Position: '5-11', DefaultPosition: '5-11', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 4, Position: '5-14', DefaultPosition: '5-14', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }],
            Path: ['2-9', '3-9', '4-9', '5-9', '6-9', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '8-15', '9-15', '9-14', '9-13', '9-12', '9-11', '9-10', '10-9', '11-9', '12-9', '13-9', '14-9', '15-9', '15-8', '15-7', '14-7', '13-7', '12-7', '11-7', '10-7', '9-6', '9-5', '9-4', '9-3', '9-2', '9-1', '8-1', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '6-7', '5-7', '4-7', '3-7', '2-7', '1-7', '1-8', '2-8', '3-8', '4-8', '5-8', '6-8', '7-8'],
            WinnerNumber: 0,
            AutoPlay: !this.isHome3,
            IsPlayer: false,
            PlayState: __WEBPACK_IMPORTED_MODULE_1__app_square__["b" /* PlayState */].ReadyToDice
        });
        this.homes.push({
            Index: 4, IconColor: __WEBPACK_IMPORTED_MODULE_1__app_square__["a" /* IconColor */].Yellow,
            HomePointers: [{ Index: 1, Position: '11-11', DefaultPosition: '11-11', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 2, Position: '11-14', DefaultPosition: '11-14', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 3, Position: '14-11', DefaultPosition: '14-11', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }, { Index: 4, Position: '14-14', DefaultPosition: '14-14', State: __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome, TotalSiblings: 1, InnerIndex: 1 }],
            Path: ['9-14', '9-13', '9-12', '9-11', '9-10', '10-9', '11-9', '12-9', '13-9', '14-9', '15-9', '15-8', '15-7', '14-7', '13-7', '12-7', '11-7', '10-7', '9-6', '9-5', '9-4', '9-3', '9-2', '9-1', '8-1', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '6-7', '5-7', '4-7', '3-7', '2-7', '1-7', '1-8', '1-9', '2-9', '3-9', '4-9', '5-9', '6-9', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '8-15', '8-14', '8-13', '8-12', '8-11', '8-10', '8-9'],
            WinnerNumber: 0,
            AutoPlay: !this.isHome4,
            IsPlayer: false,
            PlayState: __WEBPACK_IMPORTED_MODULE_1__app_square__["b" /* PlayState */].ReadyToDice
        });
        //console.log(this.homes)
        for (var i = 0; i < this.homes.length; i++) {
            for (var j = 0; j < this.homes[i].HomePointers.length; j++) {
                this.allPointers.push(this.homes[i].HomePointers[j]);
            }
        }
        if (this.homes.find(function (m) { return m.Index == _this.turn; }).AutoPlay) {
            this.spinDice(true);
        }
        // this.autoPlayInterval = setInterval(function ($this) {
        //   if (!$this.isSpinnerDisabled) {
        //     let isAutoplay = $this.homes.find(m => m.Index == $this.turn).AutoPlay;
        //     $this.spinDice(isAutoplay);
        //   }
        // }, this.delayTimes.autoPlay, this);
    };
    AppComponent.prototype.createSquare = function (obj) {
        for (var i = 0; i < obj.rowCount; i++) {
            this.currentPosition.Row = this.currentPosition.Row + 1;
            this.currentPosition.Column = 0;
            for (var j = 0; j < obj.columns.length; j++) {
                for (var k = 0; k < obj.columns[j].columnCount; k++) {
                    this.currentPosition.Column = this.currentPosition.Column + 1;
                    this.squares.push({
                        SquareColor: obj.columns[j].color, SquareType: obj.columns[j].type,
                        Html: '&nbsp;', Position: this.currentPosition.Row + '-' + this.currentPosition.Column
                    });
                }
            }
        }
    };
    AppComponent.prototype.drawStars = function (obj) {
        for (var j = 0; j < obj.length; j++) {
            this.getSquareByPosition(obj[j]).Html = "<i class='fa fa-star-o'></i>";
        }
    };
    AppComponent.prototype.getSquareByPosition = function (position) {
        return this.squares.find(function (m) { return m.Position == position; });
    };
    AppComponent.prototype.spinDice = function (isAutoPlay) {
        var _this = this;
        var interval = setInterval(function () {
            var rendomNum = _this.getRandomInt(1, 6, false);
            _this.dice = rendomNum;
        }, this.delayTimes.diceSpin / 10);
        setTimeout(function () {
            _this.isSpinnerDisabled = true;
            clearInterval(interval);
            var rendomNum = _this.getRandomInt(1, 6, true);
            _this.dice = rendomNum;
            _this.diceHistory.splice(0, 1);
            _this.diceHistory.push(_this.dice);
            _this.continuePlay = _this.dice == 6 ? true : false;
            if (_this.turn == 1) {
                _this.totalMoves.home1++;
            }
            else if (_this.turn == 2) {
                _this.totalMoves.home2++;
            }
            else if (_this.turn == 3) {
                _this.totalMoves.home3++;
            }
            else if (_this.turn == 4) {
                _this.totalMoves.home4++;
            }
            _this.changePlayState(__WEBPACK_IMPORTED_MODULE_1__app_square__["b" /* PlayState */].ReadyToMove);
            if (isAutoPlay) {
                _this.movePointers(-1);
            }
            else {
                _this.findMovablePointers(_this.turn - 1);
                if (_this.movablePointers.length == 1) {
                    _this.movePointers(_this.movablePointers[0].Index - 1);
                }
            }
        }, this.delayTimes.diceSpin);
    };
    AppComponent.prototype.changePlayState = function (state) {
        var _this = this;
        var currentHome = this.homes.find(function (m) { return m.Index == _this.turn; });
        currentHome.PlayState = state;
    };
    AppComponent.prototype.clickPointer = function (index) {
        this.movePointers(index - 1);
    };
    AppComponent.prototype.getRandomInt = function (min, max, checkForSix) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (checkForSix && num == 6 && this.diceHistory[1] == 6 && this.diceHistory[2] == 6) {
            max--;
            num = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return num;
    };
    AppComponent.prototype.findMovablePointers = function (homeIndex) {
        var detailList = [];
        for (var i = 0; i < this.homes[homeIndex].HomePointers.length; i++) {
            var expectedIndex = -1;
            if (this.homes[homeIndex].HomePointers[i].State == __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome && this.dice == 6) {
                expectedIndex = 0;
            }
            else if (this.homes[homeIndex].HomePointers[i].State == __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].OnTheWay) {
                var expectedIndex1 = this.homes[homeIndex].Path.indexOf(this.homes[homeIndex].HomePointers[i].Position) + this.dice;
                if (expectedIndex1 <= 56) {
                    expectedIndex = expectedIndex1;
                }
            }
            if (expectedIndex > -1) {
                detailList.push(this.homes[homeIndex].HomePointers[i]);
            }
        }
        this.movablePointers = detailList;
        if (this.movablePointers.length == 0) {
            this.isSpinnerDisabled = false;
            this.changeTurn();
        }
        return detailList;
    };
    AppComponent.prototype.logMovement = function (data) {
        console.log(data);
    };
    AppComponent.prototype.movePointers = function (pointerIndex) {
        var _this = this;
        var homeIndex = this.turn - 1;
        var pointer;
        var attackablePointer;
        var pointerInfo = this.findPointerToMove(homeIndex, pointerIndex);
        pointer = pointerInfo.pointer;
        attackablePointer = pointerInfo.attackablePointer;
        if (pointer) {
            var oldPosition = pointer.Position;
            var newPosition = '';
            if (pointer.State == __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome) {
                newPosition = this.homes[homeIndex].Path[0];
                this.logMovement({ Dice: this.dice, HomeIndex: homeIndex + 1, PointerIndex: pointer.Index, CurrentPosition: pointer.Pointer, NextPosition: newPosition });
                this.movePointer(newPosition, pointer);
                pointer.State = __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].OnTheWay;
                setTimeout(function () {
                    _this.adjustMultiplePointersInOneSquare();
                    _this.changeTurn();
                }, 0);
            }
            else {
                var currentPositionIndex = this.homes[homeIndex].Path.indexOf(oldPosition) + 1;
                var j = 0;
                this.logMovement({ Dice: this.dice, HomeIndex: homeIndex + 1, PointerIndex: pointer.Index, CurrentPosition: oldPosition, NextPosition: this.homes[homeIndex].Path[currentPositionIndex + this.dice - 1] });
                for (var i = currentPositionIndex; i < currentPositionIndex + this.dice; i++) {
                    setTimeout(function ($this, index) {
                        $this.movePointer($this.homes[homeIndex].Path[index], pointer);
                        if (index == 56) {
                            pointer.State = __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].Reached;
                            this.continuePlay = true;
                        }
                    }, j * this.delayTimes.changePosition, this, i);
                    j++;
                }
                setTimeout(function () {
                    if (attackablePointer) {
                        _this.putAttackedPointerToDefaultPosition(attackablePointer);
                    }
                    else {
                        _this.adjustMultiplePointersInOneSquare();
                        _this.changeTurn();
                    }
                }, (j - 1) * this.delayTimes.changePosition);
            }
        }
        else {
            this.logMovement({ Dice: this.dice, HomeIndex: homeIndex + 1 });
            this.changeTurn();
        }
        // if (!pointer || !this.continuePlay) {
        //   this.turn = this.turn == 4 ? 1 : this.turn + 1;
        // }
    };
    AppComponent.prototype.changeTurn = function () {
        var _this = this;
        this.changePlayState(__WEBPACK_IMPORTED_MODULE_1__app_square__["b" /* PlayState */].ReadyToDice);
        this.isSpinnerDisabled = false;
        var winnerHomes = this.homes.filter(function (m) { return m.WinnerNumber > 0; });
        var reachedPointers = this.homes[this.turn - 1].HomePointers.filter(function (m) { return m.State == __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].Reached; }).length;
        if (reachedPointers == 4) {
            this.homes[this.turn - 1].WinnerNumber = winnerHomes.length + 1;
            winnerHomes = this.homes.filter(function (m) { return m.WinnerNumber > 0; });
        }
        var runningHomes = this.homes.filter(function (m) { return m.WinnerNumber == 0; });
        if (winnerHomes.length == 3) {
            runningHomes[0].WinnerNumber = 4;
            clearInterval(this.autoPlayInterval);
            this.gameOver = true;
            this.isSpinnerDisabled = true;
            return;
        }
        else {
            if (runningHomes.length > 0) {
                if (!this.continuePlay) {
                    var arr = runningHomes.map(function (_a) {
                        var Index = _a.Index;
                        return Index;
                    });
                    arr.sort(function (a, b) { return a - b; });
                    var expectedTurn_1 = this.turn == arr[arr.length - 1] ? 1 : this.turn + 1;
                    var arrItem = arr.find(function (m) { return m >= expectedTurn_1; });
                    if (!arrItem) {
                        arrItem = arr[0];
                    }
                    if (arrItem) {
                        this.turn = arrItem;
                    }
                    else {
                        debugger;
                    }
                }
            }
            else {
                clearInterval(this.autoPlayInterval);
                this.gameOver = true;
                return;
            }
        }
        if (this.homes[this.turn - 1].AutoPlay && !this.autoPlayInterval) {
            setTimeout(function () {
                _this.spinDice(true);
            }, this.delayTimes.gapBetweenNextAutoPlaySpin);
        }
    };
    AppComponent.prototype.putAttackedPointerToDefaultPosition = function (attackablePointerInfo) {
        var _this = this;
        var currentPositionIndex = this.homes[attackablePointerInfo.homeIndex - 1].Path.indexOf(attackablePointerInfo.pointer.Position) + 1;
        this.logMovement({ Attack: true, HomeIndex: attackablePointerInfo.homeIndex, PointerIndex: attackablePointerInfo.pointer.Index, CurrentPosition: attackablePointerInfo.pointer.Position, NextPosition: attackablePointerInfo.pointer.DefaultPosition });
        var k = 0;
        for (var i = currentPositionIndex - 2; i >= 0; i--) {
            setTimeout(function ($this, index) {
                $this.movePointer($this.homes[attackablePointerInfo.homeIndex - 1].Path[index], attackablePointerInfo.pointer);
            }, k * this.delayTimes.changePosition, this, i);
            k++;
        }
        setTimeout(function () {
            _this.movePointer(attackablePointerInfo.pointer.DefaultPosition, attackablePointerInfo.pointer);
            attackablePointerInfo.pointer.State = __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome;
            _this.continuePlay = true;
            _this.changeTurn();
        }, k * this.delayTimes.changePosition);
    };
    AppComponent.prototype.movePointer = function (newPosition, pointer) {
        if (newPosition && pointer) {
            pointer.Position = newPosition;
        }
        this.movablePointers = [];
    };
    AppComponent.prototype.findPointerToMove = function (homeIndex, pointerIndex) {
        var foundPointer = { pointer: null, attackablePointer: null };
        if (this.dice == 6) {
            if (pointerIndex > -1) {
                foundPointer = { pointer: this.homes[homeIndex].HomePointers.find(function (m) { return m.State == __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome && m.Index - 1 == pointerIndex; }), attackablePointer: null };
            }
            else {
                foundPointer = { pointer: this.homes[homeIndex].HomePointers.find(function (m) { return m.State == __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].AtHome; }), attackablePointer: null };
            }
        }
        if (!foundPointer.pointer) {
            foundPointer = this.findSafePointer(homeIndex, pointerIndex);
        }
        // if (!foundPointer.pointer) {
        //   foundPointer = { pointer: this.homes[homeIndex].HomePointers.find(m => m.State == PointerState.OnTheWay), attackablePointer: null };
        // }
        return foundPointer;
    };
    AppComponent.prototype.findSafePointer = function (homeIndex, pointerIndex) {
        var foundPointer = { pointer: null, attackablePointer: null };
        var safePointers = [];
        var attackerPointers = [];
        var normalPointers = [];
        var onTheWayPointers = this.homes[homeIndex].HomePointers.filter(function (m) { return m.State == __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].OnTheWay; });
        var attackablePositions = this.getAttackablePointers(homeIndex);
        var _loop_1 = function (i) {
            var currentPosition = onTheWayPointers[i].Position;
            var currentIndex = this_1.homes[homeIndex].Path.indexOf(currentPosition);
            var expectedPosition = this_1.homes[homeIndex].Path[currentIndex + this_1.dice];
            if (expectedPosition) {
                var expectedIndex = this_1.homes[homeIndex].Path.indexOf(expectedPosition);
                var attackablePointer = attackablePositions.find(function (m) { return m.pointer.Position == expectedPosition; });
                if (attackablePointer) {
                    attackerPointers.push({ pointer: onTheWayPointers[i], expectedIndex: expectedIndex, attackablePointer: attackablePointer });
                }
                if (this_1.safePositions.indexOf(expectedPosition) > -1 || expectedIndex > 50) {
                    safePointers.push({ pointer: onTheWayPointers[i], expectedIndex: expectedIndex });
                }
                normalPointers.push({ pointer: onTheWayPointers[i], expectedIndex: expectedIndex });
            }
        };
        var this_1 = this;
        for (var i = 0; i < onTheWayPointers.length; i++) {
            _loop_1(i);
        }
        if (pointerIndex > -1) {
            var pntr = attackerPointers.find(function (m) { return m.pointer.Index - 1 == pointerIndex; });
            if (pntr) {
                foundPointer = { pointer: pntr.pointer, attackablePointer: pntr.attackablePointer };
            }
            else {
                pntr = normalPointers.find(function (m) { return m.pointer.Index - 1 == pointerIndex; });
                if (pntr) {
                    foundPointer = { pointer: pntr.pointer, attackablePointer: pntr.attackablePointer };
                }
            }
        }
        else {
            if (attackerPointers.length > 0) {
                attackerPointers.sort(function (a, b) { return b.expectedIndex - a.expectedIndex; });
                foundPointer = { pointer: attackerPointers[0].pointer, attackablePointer: attackerPointers[0].attackablePointer };
            }
            else if (safePointers.length > 0) {
                safePointers.sort(function (a, b) { return b.expectedIndex - a.expectedIndex; });
                foundPointer = { pointer: safePointers[0].pointer, attackablePointer: null };
            }
            else if (normalPointers.length > 0) {
                normalPointers.sort(function (a, b) { return b.expectedIndex - a.expectedIndex; });
                foundPointer = { pointer: normalPointers[0].pointer, attackablePointer: null };
            }
        }
        return foundPointer;
    };
    AppComponent.prototype.getAttackablePointers = function (homeIndex) {
        var _this = this;
        var otherHomes = this.homes.filter(function (m) { return m.Index != homeIndex + 1; });
        var pointers = [];
        var _loop_2 = function (i) {
            var onTheWayPointers = otherHomes[i].HomePointers.filter(function (m) { return m.State == __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].OnTheWay
                && _this.safePositions.indexOf(m.Position) == -1 && otherHomes[i].Path.indexOf(m.Position) <= 50; });
            var onTheWayPointers1 = otherHomes[i].HomePointers.filter(function (m) { return m.State == __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].OnTheWay; });
            var onTheWayPointers2 = otherHomes[i].HomePointers.filter(function (m) { return m.State == __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].OnTheWay
                && _this.safePositions.indexOf(m.Position) == -1; });
            var onTheWayPointers3 = otherHomes[i].HomePointers.filter(function (m) { return m.State == __WEBPACK_IMPORTED_MODULE_1__app_square__["c" /* PointerState */].OnTheWay
                && _this.safePositions.indexOf(m.Position) == -1 && otherHomes[i].Path.indexOf(m.Position) <= 50; });
            for (var j = 0; j < onTheWayPointers.length; j++) {
                pointers.push({ pointer: onTheWayPointers[j], homeIndex: otherHomes[i].Index });
            }
        };
        for (var i = 0; i < otherHomes.length; i++) {
            _loop_2(i);
        }
        return pointers;
    };
    AppComponent.prototype.setPointerPosition = function (pointerObj) {
        var arr = pointerObj.Position.split('-');
        var top = 0;
        var left = 0;
        var fontSize = 100;
        top = arr[0] == '1' ? 1 : (1 + (6.66 * (parseInt(arr[0]) - 1)));
        left = arr[1] == '1' ? 1 : (1 + (6.66 * (parseInt(arr[1]) - 1)));
        if (pointerObj.TotalSiblings > 1 && pointerObj.TotalSiblings <= 4) {
            fontSize = 75;
            if (pointerObj.InnerIndex == 1) {
                top = top - 1;
                left = left - 1;
            }
            else if (pointerObj.InnerIndex == 2) {
                top = top + 2;
                left = left + 2;
            }
            else if (pointerObj.InnerIndex == 3) {
                top = top + 2;
                left = left - 1;
            }
            else if (pointerObj.InnerIndex == 4) {
                top = top - 1;
                left = left + 2;
            }
        }
        else if (pointerObj.TotalSiblings > 4 && pointerObj.TotalSiblings <= 9) {
            fontSize = 50;
            if (pointerObj.InnerIndex == 1) {
                top = top - 1;
                left = left - 1;
            }
            else if (pointerObj.InnerIndex == 2) {
                top = top - 1;
                left = left + 1;
            }
            else if (pointerObj.InnerIndex == 3) {
                top = top - 1;
                left = left + 3;
            }
            else if (pointerObj.InnerIndex == 4) {
                top = top + 1;
                left = left - 1;
            }
            else if (pointerObj.InnerIndex == 5) {
                top = top + 1;
                left = left + 1;
            }
            else if (pointerObj.InnerIndex == 6) {
                top = top + 1;
                left = left + 3;
            }
            else if (pointerObj.InnerIndex == 7) {
                top = top + 3;
                left = left - 1;
            }
            else if (pointerObj.InnerIndex == 8) {
                top = top + 3;
                left = left + 1;
            }
            else if (pointerObj.InnerIndex == 9) {
                top = top + 3;
                left = left + 3;
            }
            else {
                top = top - 1;
                left = left - 1;
            }
        }
        return { 'top': top + '%', 'left': left + '%', 'font-size': fontSize + '%' };
    };
    AppComponent.prototype.clickManual = function (num) {
        this.dice = num;
        this.continuePlay = this.dice == 6 ? true : false;
        this.diceHistory.splice(0, 1);
        this.diceHistory.push(this.dice);
        this.movePointers(-1);
    };
    AppComponent.prototype.adjustMultiplePointersInOneSquare = function () {
        var result = this.groupBy(this.allPointers, function (item) {
            return [item.Position];
        });
        //result = result.filter(m => m.length > 1);
        for (var i = 0; i < result.length; i++) {
            for (var j = 0; j < result[i].length; j++) {
                result[i][j].TotalSiblings = result[i].length;
                result[i][j].InnerIndex = j + 1;
            }
        }
    };
    AppComponent.prototype.groupBy = function (array, f) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.square.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SquareType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SquareColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PointerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlayState; });
/* unused harmony export Square */
/* unused harmony export Position */
/* unused harmony export Home */
/* unused harmony export HomePointer */
var SquareType;
(function (SquareType) {
    SquareType["Square"] = "square";
    SquareType["SquareWithBorder"] = "square-with-border";
})(SquareType || (SquareType = {}));
var SquareColor;
(function (SquareColor) {
    SquareColor["Red"] = "red";
    SquareColor["Green"] = "green";
    SquareColor["Yellow"] = "yellow";
    SquareColor["Blue"] = "blue";
    SquareColor["White"] = "white";
    SquareColor["Final"] = "final";
})(SquareColor || (SquareColor = {}));
var IconColor;
(function (IconColor) {
    IconColor["Red"] = "red-icon";
    IconColor["Green"] = "green-icon";
    IconColor["Yellow"] = "yellow-icon";
    IconColor["Blue"] = "blue-icon";
})(IconColor || (IconColor = {}));
var PointerState;
(function (PointerState) {
    PointerState[PointerState["AtHome"] = 0] = "AtHome";
    PointerState[PointerState["OnTheWay"] = 1] = "OnTheWay";
    PointerState[PointerState["Reached"] = 2] = "Reached";
})(PointerState || (PointerState = {}));
var PlayState;
(function (PlayState) {
    PlayState[PlayState["ReadyToDice"] = 1] = "ReadyToDice";
    PlayState[PlayState["ReadyToMove"] = 2] = "ReadyToMove";
})(PlayState || (PlayState = {}));
var Square = /** @class */ (function () {
    function Square() {
    }
    return Square;
}());

var Position = /** @class */ (function () {
    function Position() {
    }
    return Position;
}());

var Home = /** @class */ (function () {
    function Home() {
    }
    return Home;
}());

var HomePointer = /** @class */ (function () {
    function HomePointer() {
    }
    return HomePointer;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map