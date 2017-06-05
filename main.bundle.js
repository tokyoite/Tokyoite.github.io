webpackJsonp([2,5],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(174),
        styles: ["body { background-color: #333 }"],
        providers: []
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__features_Calculator_calculator_component__ = __webpack_require__(112);
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
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__features_Calculator_calculator_component__["a" /* RaceCalculatorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild([
                { path: '/', component: __WEBPACK_IMPORTED_MODULE_9__features_Calculator_calculator_component__["a" /* RaceCalculatorComponent */] },
            ]),
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculator_service__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceCalculatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var component = null;
var RaceCalculatorComponent = (function () {
    function RaceCalculatorComponent(service) {
        this.service = service;
        this.title = 'Race-To Calculator';
        this.instruction = 'Enter the players names to calculate the match length.';
        this.p1RaceTo = 0;
        this.p2RaceTo = 0;
        this.p1_text = null;
        this.p2_text = null;
        this.calculateRace_Results = null;
        this.players = [];
        this.RatingResults = [];
        component = this;
    }
    RaceCalculatorComponent.prototype.SearchName = function (Name, index) {
        var _this = this;
        if (Name.length > 0 || Name != null || Name != "") {
            if (typeof Name == "string") {
                this.service.GetFargoRating(Name).then(function (data) {
                    _this.RatingResults[index] = data.value;
                });
            }
        }
    };
    RaceCalculatorComponent.prototype.displayFn = function (player) {
        if (typeof player != 'undefined') {
            component.SelectPlayer(player, 0);
        }
        return player ? player.firstName + ' | ' + Math.round(player.rating) : player;
    };
    RaceCalculatorComponent.prototype.displayFn2 = function (player) {
        if (typeof player != 'undefined') {
            component.SelectPlayer(player, 1);
        }
        return player ? player.firstName + ' | ' + Math.round(player.rating) : player;
    };
    RaceCalculatorComponent.prototype.SelectPlayer = function (p, player) {
        this.players[player] = p;
        this.SetRace();
        setTimeout(function () {
            document.getElementById("p1").blur();
            document.getElementById("p2").blur();
        }, 0);
    };
    RaceCalculatorComponent.prototype.SetRace = function () {
        var _this = this;
        if (this.players[0] && this.players[1]) {
            //this.location.go("/?player1=" + this.players[0].id + "&player2=" + this.players[1].id);
            var rating1 = Math.round(this.players[0].rating), rating2 = Math.round(this.players[1].rating), long = this.service.calculateRace(1.0, rating1, rating2), short = this.service.calculateRace(0.75, rating1, rating2), long_odds = null, short_odds = null;
            //player1
            this.players[0].long = long.raceToOne;
            this.players[0].short = short.raceToOne;
            //player2
            this.players[1].long = long.raceToTwo;
            this.players[1].short = short.raceToTwo;
            //Get Odds
            this.service.GetRaceOdds(rating1, rating2, long.raceToOne, long.raceToTwo).then(function (data) {
                _this.players[0].long_chance = Math.round(data.oneOdds * 100);
                _this.players[1].long_chance = Math.round(data.twoOdds * 100);
            });
            this.service.GetRaceOdds(rating1, rating2, short.raceToOne, short.raceToTwo).then(function (data) {
                _this.players[0].short_chance = Math.round(data.oneOdds * 100);
                _this.players[1].short_chance = Math.round(data.twoOdds * 100);
            });
        }
    };
    return RaceCalculatorComponent;
}());
RaceCalculatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'race-calc',
        template: __webpack_require__(175),
        styles: [],
        providers: [__WEBPACK_IMPORTED_MODULE_1__calculator_service__["a" /* FargoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__calculator_service__["a" /* FargoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calculator_service__["a" /* FargoService */]) === "function" && _a || Object])
], RaceCalculatorComponent);

var _a;
//# sourceMappingURL=calculator.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FargoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FargoService = (function () {
    function FargoService(http) {
        this.http = http;
    }
    FargoService.prototype.GetFargoRating = function (q) {
        return this.http
            .get("https://dashboard-fr.azurewebsites.net/api/indexsearch?q=" + q)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FargoService.prototype.GetRaceOdds = function (p1, p2, raceTo1, raceTo2) {
        return this.http
            .get("https://lms.fargorate.com/api/ratingcalc/odds/" + p1 + "/" + p2 + "/" + raceTo1 + "/" + raceTo2)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FargoService.prototype.rhte = function (raceTo, placeToRound) {
        var fixed = placeToRound.toString().split('.').length < 2 ? 0 : placeToRound.toString().split('.')[1].length, numParts = {
            mvDec: (raceTo / placeToRound).toFixed(this.toString().length).toString().split('.'),
            wholeNum: function () { return parseInt(this.mvDec[0], 10); },
            dec: function () { return this.mvDec.length > 1 ? parseFloat('0.' + this.mvDec[1]) : 0; },
            oddEven: function () { return (this.wholeNum() % 2 === 1) ? 1 : 0; }
        };
        if (numParts.dec() !== 0.5) {
            return (numParts.dec() > 0.5) ? parseFloat(((numParts.wholeNum() + 1) * placeToRound).toFixed(fixed)) : parseFloat((numParts.wholeNum() * placeToRound).toFixed(fixed));
        }
        else {
            if (numParts.oddEven() === 1) {
                return parseFloat(((numParts.wholeNum() + 1) * placeToRound).toFixed(fixed));
            }
            else {
                return parseFloat((numParts.wholeNum() * placeToRound).toFixed(fixed));
            }
        }
    };
    ;
    FargoService.prototype.calculateRace = function (dampFactor, ratingOne, ratingTwo) {
        var p1Rating = parseInt(ratingOne);
        var p2Rating = parseInt(ratingTwo);
        var gp = (0.018 * ((p1Rating + p2Rating) / 2)) - 1.4;
        var delta = p1Rating - p2Rating;
        var p1WinPercent = 1 - (1 / (1 + Math.pow(2, delta / 100)));
        var p2WinPercent = 1 - p1WinPercent;
        var p1AvgPts = p1WinPercent * 14.0 + (p2WinPercent * (7.4 - 0.0062 * p2Rating));
        var p2AvgPts = p2WinPercent * 14.0 + (p1WinPercent * (7.4 - 0.0062 * p1Rating));
        var p1RaceTo = p1AvgPts * gp * dampFactor;
        var p2RaceTo = p2AvgPts * gp * dampFactor;
        var normalizedRace = this.normalizeRace(p1RaceTo, p2RaceTo, dampFactor === 0.75);
        p1RaceTo = normalizedRace.p1RaceTo;
        p2RaceTo = normalizedRace.p2RaceTo;
        return {
            raceToOne: this.rhte(p1RaceTo, 1),
            raceToTwo: this.rhte(p2RaceTo, 1)
        };
    };
    ;
    FargoService.prototype.normalizeRace = function (p1RaceTo, p2RaceTo, isShort) {
        var highClamp = 99.0, lowClamp = isShort ? 24.0 : 28.0;
        var p1RaceIsHigh = p1RaceTo >= p2RaceTo, highRace = Math.max(p1RaceTo, p2RaceTo), lowRace = Math.min(p1RaceTo, p2RaceTo);
        var highRaceClamped = highRace > highClamp ? highClamp : highRace;
        var lowRaceClamped = highRace > highClamp
            ? lowRace - (lowRace * ((highRace - highClamp) / highRace))
            : lowRace;
        highRaceClamped = Math.min(lowRace < lowClamp
            ? highRaceClamped + (highRaceClamped * ((lowClamp - lowRace) / lowRaceClamped))
            : highRaceClamped, highClamp);
        lowRaceClamped = Math.max(lowRaceClamped < lowClamp ? lowClamp : lowRaceClamped, lowClamp);
        return {
            p1RaceTo: p1RaceIsHigh ? highRaceClamped : lowRaceClamped,
            p2RaceTo: p1RaceIsHigh ? lowRaceClamped : highRaceClamped
        };
    };
    ;
    FargoService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return FargoService;
}());
FargoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FargoService);

var _a;
//# sourceMappingURL=calculator.service.js.map

/***/ }),

/***/ 114:
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

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<race-calc></race-calc>"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<div class=\"container text-center\">\r\n    <div class=\"well\">\r\n        <h2 class=\"text-center\">{{title}}</h2>\r\n        <label class=\"lead\">\r\n            {{instruction}}\r\n        </label>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 form-inline\">\r\n                <div class=\"col-sm-5\">\r\n                    <md-input-container style=\"width:100%;\">\r\n                        <input id=\"p1\" [(ngModel)]=\"p1_text\" mdInput placeholder=\"Player 1\" [mdAutocomplete]=\"auto\" (ngModelChange)=\"SearchName(p1_text, 0)\">\r\n                    </md-input-container>\r\n\r\n                    <md-autocomplete #auto=\"mdAutocomplete\" [displayWith]=\"displayFn\">\r\n                        <md-option *ngFor=\"let p of RatingResults[0]\" [value]=\"p\">\r\n                            <div (click)=\"SelectPlayer(p,0)\">{{ p.firstName + ' ' + p.lastName  }} | <b>{{ p.location}}</b></div>\r\n                        </md-option>\r\n                    </md-autocomplete>\r\n                    <table *ngIf=\"players[0] && players[1]\" class=\"table table-responsive table-bordered table-hover\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td><label>Long</label></td>\r\n                                <td>\r\n                                    {{players[0].long}} <b>pts.</b>\r\n                                </td>\r\n                                <td>\r\n                                    {{players[0].long_chance}}%\r\n                                    <md-progress-bar class=\"example-margin\"\r\n                                                     [color]=\"'primary'\"\r\n                                                     [mode]=\"'determinate'\"\r\n                                                     [value]=\"players[0].long_chance\"\r\n                                                     [bufferValue]=\"0\">\r\n                                    </md-progress-bar>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><label>Short</label></td>\r\n                                <td>\r\n                                    {{players[0].short}} <b>pts.</b>\r\n                                </td>\r\n                                <td>\r\n                                    {{players[0].short_chance}}%\r\n                                    <md-progress-bar class=\"example-margin\"\r\n                                                     [color]=\"'primary'\"\r\n                                                     [mode]=\"'determinate'\"\r\n                                                     [value]=\"players[0].short_chance\"\r\n                                                     [bufferValue]=\"0\">\r\n                                    </md-progress-bar>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"lead col-sm-2\">\r\n                    &nbsp;&nbsp;VS&nbsp;&nbsp;\r\n                </div>\r\n                <div class=\"col-sm-5\">\r\n                    <md-input-container style=\"width:100%;\">\r\n                        <input id=\"p2\" [(ngModel)]=\"p2_text\" mdInput placeholder=\"Player 2\" [mdAutocomplete]=\"auto2\" (ngModelChange)=\"SearchName(p2_text, 1)\">\r\n                    </md-input-container>\r\n\r\n                    <md-autocomplete #auto2=\"mdAutocomplete\" [displayWith]=\"displayFn2\" style=\"width:500px;\">\r\n                        <md-option *ngFor=\"let p of RatingResults[1]\" [value]=\"p\">\r\n                            <div (click)=\"SelectPlayer(p,1)\">{{ p.firstName + ' ' + p.lastName  }} | <b>{{ p.rating}}</b></div>\r\n                        </md-option>\r\n                    </md-autocomplete>\r\n                    <!--<label *ngIf=\"players[0] && players[1]\">Long Race: {{service.calculateRace(1.0, players[0].rating, players[1].rating).raceToTwo}} points. </label>\r\n                    <br/>\r\n                    <label *ngIf=\"players[0] && players[1]\">Short Race: {{service.calculateRace(.75, players[0].rating, players[1].rating).raceToTwo}} points. </label>-->\r\n\r\n                    <table *ngIf=\"players[0] && players[1]\" class=\"table table-responsive table-bordered table-hover\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td><label>Long</label></td>\r\n                                <td>\r\n                                    {{players[1].long}} <b>pts.</b>\r\n                                </td>\r\n                                <td>\r\n                                    {{players[1].long_chance}}%\r\n                                    <md-progress-bar class=\"example-margin\"\r\n                                                     [color]=\"'primary'\"\r\n                                                     [mode]=\"'determinate'\"\r\n                                                     [value]=\"players[1].long_chance\"\r\n                                                     [bufferValue]=\"0\">\r\n                                    </md-progress-bar>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><label>Short</label></td>\r\n                                <td>\r\n                                    {{players[1].short}} <b>pts.</b>\r\n                                </td>\r\n                                <td>\r\n                                    {{players[1].short_chance}}%\r\n                                    <md-progress-bar class=\"example-margin\"\r\n                                                     [color]=\"'primary'\"\r\n                                                     [mode]=\"'determinate'\"\r\n                                                     [value]=\"players[1].short_chance\"\r\n                                                     [bufferValue]=\"0\">\r\n                                    </md-progress-bar>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <br />\r\n        <!--<div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <table class=\"table table-responsive table-bordered table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Id</th>\r\n                            <th>ReadableId</th>\r\n                            <th>First</th>\r\n                            <th>Last</th>\r\n                            <th>Location</th>\r\n                            <th>Rating</th>\r\n                            <th>Robustness</th>\r\n                            <th>Provisional Rating</th>\r\n                            <th>Membership #</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let p of results.value\">\r\n                            <td>{{p.id}}</td>\r\n                            <td>{{p.readableId}}</td>\r\n                            <td>{{p.firstName}}</td>\r\n                            <td>{{p.lastName}}</td>\r\n                            <td>{{p.location}}</td>\r\n                            <td>{{p.rating}}</td>\r\n                            <td>{{p.robustness}}</td>\r\n                            <td>{{p.provisionalRating}}</td>\r\n                            <td>{{p.membershipNumber}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>-->\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <img class=\"img-responsive\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA4OTcgMzAxIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4OTcgMzAxIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZGVmcz4KCQk8cmVjdCBpZD0iU1ZHSURfMV8iIHg9Ii04MCIgeT0iLTEyNCIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNTUwIi8+Cgk8L2RlZnM+Cgk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIG92ZXJmbG93PSJ2aXNpYmxlIiBmaWxsPSIjQkJCREJGIi8+Cgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4KCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+Cgk8L2NsaXBQYXRoPgoJPHJlY3QgeD0iLTgwIiB5PSItMTI0IiBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjMjMxRjIwIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI1NTAiLz4KCTxnIGRpc3BsYXk9Im5vbmUiIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiPgoJCTx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMzk0LjE2NDYgMjQ4LjQ5NTEpIiBkaXNwbGF5PSJpbmxpbmUiPjx0c3BhbiB4PSIwIiB5PSIwIiBmaWxsPSIjQkJCREJGIiBmb250LWZhbWlseT0iJ0F2ZW5pci1Cb29rJyIgZm9udC1zaXplPSIzOC4yMDk0IiBsZXR0ZXItc3BhY2luZz0iLTEiPmxlPC90c3Bhbj48dHNwYW4geD0iMjguMiIgeT0iMCIgZmlsbD0iI0JCQkRCRiIgZm9udC1mYW1pbHk9IidBdmVuaXItQm9vayciIGZvbnQtc2l6ZT0iMzguMjA5NCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj5hPC90c3Bhbj48dHNwYW4geD0iNDYuOSIgeT0iMCIgZmlsbD0iI0JCQkRCRiIgZm9udC1mYW1pbHk9IidBdmVuaXItQm9vayciIGZvbnQtc2l6ZT0iMzguMjA5NCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj5nPC90c3Bhbj48dHNwYW4geD0iNjkuMSIgeT0iMCIgZmlsbD0iI0JCQkRCRiIgZm9udC1mYW1pbHk9IidBdmVuaXItQm9vayciIGZvbnQtc2l6ZT0iMzguMjA5NCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj51PC90c3Bhbj48dHNwYW4geD0iODkuMiIgeT0iMCIgZmlsbD0iI0JCQkRCRiIgZm9udC1mYW1pbHk9IidBdmVuaXItQm9vayciIGZvbnQtc2l6ZT0iMzguMjA5NCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj5lPC90c3Bhbj48dHNwYW4geD0iMTA5LjQiIHk9IjAiIGZpbGw9IiNCQkJEQkYiIGZvbnQtZmFtaWx5PSInQXZlbmlyLUJvb2snIiBmb250LXNpemU9IjM4LjIwOTQiIGxldHRlci1zcGFjaW5nPSItMSI+IDwvdHNwYW4+PHRzcGFuIHg9IjExOC44IiB5PSIwIiBmaWxsPSIjQkJCREJGIiBmb250LWZhbWlseT0iJ0F2ZW5pci1Cb29rJyIgZm9udC1zaXplPSIzOC4yMDk0IiBsZXR0ZXItc3BhY2luZz0iLTEiPm1hPC90c3Bhbj48dHNwYW4geD0iMTY5IiB5PSIwIiBmaWxsPSIjQkJCREJGIiBmb250LWZhbWlseT0iJ0F2ZW5pci1Cb29rJyIgZm9udC1zaXplPSIzOC4yMDk0IiBsZXR0ZXItc3BhY2luZz0iLTEiPm5hPC90c3Bhbj48dHNwYW4geD0iMjA3LjgiIHk9IjAiIGZpbGw9IiNCQkJEQkYiIGZvbnQtZmFtaWx5PSInQXZlbmlyLUJvb2snIiBmb250LXNpemU9IjM4LjIwOTQiIGxldHRlci1zcGFjaW5nPSItMSI+ZzwvdHNwYW4+PHRzcGFuIHg9IjIzMCIgeT0iMCIgZmlsbD0iI0JCQkRCRiIgZm9udC1mYW1pbHk9IidBdmVuaXItQm9vayciIGZvbnQtc2l6ZT0iMzguMjA5NCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj5lPC90c3Bhbj48dHNwYW4geD0iMjUwLjEiIHk9IjAiIGZpbGw9IiNCQkJEQkYiIGZvbnQtZmFtaWx5PSInQXZlbmlyLUJvb2snIiBmb250LXNpemU9IjM4LjIwOTQiIGxldHRlci1zcGFjaW5nPSItMSI+bWU8L3RzcGFuPjx0c3BhbiB4PSIzMDEuNyIgeT0iMCIgZmlsbD0iI0JCQkRCRiIgZm9udC1mYW1pbHk9IidBdmVuaXItQm9vayciIGZvbnQtc2l6ZT0iMzguMjA5NCIgbGV0dGVyLXNwYWNpbmc9Ii0xIj5uPC90c3Bhbj48dHNwYW4geD0iMzIxLjgiIHk9IjAiIGZpbGw9IiNCQkJEQkYiIGZvbnQtZmFtaWx5PSInQXZlbmlyLUJvb2snIiBmb250LXNpemU9IjM4LjIwOTQiIGxldHRlci1zcGFjaW5nPSItMSI+dCBzeXN0PC90c3Bhbj48dHNwYW4geD0iNDAyLjEiIHk9IjAiIGZpbGw9IiNCQkJEQkYiIGZvbnQtZmFtaWx5PSInQXZlbmlyLUJvb2snIiBmb250LXNpemU9IjM4LjIwOTQiIGxldHRlci1zcGFjaW5nPSItMSI+ZTwvdHNwYW4+PHRzcGFuIHg9IjQyMi4yIiB5PSIwIiBmaWxsPSIjQkJCREJGIiBmb250LWZhbWlseT0iJ0F2ZW5pci1Cb29rJyIgZm9udC1zaXplPSIzOC4yMDk0Ij5tPC90c3Bhbj48L3RleHQ+Cgk8L2c+Cgk8ZyBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIj4KCQk8ZGVmcz4KCQkJPHBhdGggaWQ9IlNWR0lEXzNfIiBkPSJNNDExLjUsMTc0LjZsMjguMiwyNS4zYzQuNCw0LjMsOS4xLDcuNCwxOC42LDcuNEg4NDZ2LTkuNUg0NTkuNmMtOS4zLDAtMTIuMy00LTE2LTcuNUw0MjAuOCwxNjgKCQkJCUw0MTEuNSwxNzQuNnoiLz4KCQk8L2RlZnM+CgkJPGNsaXBQYXRoIGlkPSJTVkdJRF80XyI+CgkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzNfIiAgb3ZlcmZsb3c9InZpc2libGUiLz4KCQk8L2NsaXBQYXRoPgoJCTxkZWZzPgoJCQk8ZmlsdGVyIGlkPSJBZG9iZV9PcGFjaXR5TWFza0ZpbHRlciIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIzOTEuOSIgeT0iLTQ5LjIiIHdpZHRoPSI0NzMuNyIgaGVpZ2h0PSI0NzMuNyI+CgkJCQk8ZmVDb2xvck1hdHJpeCAgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDEgMCIvPgoJCQk8L2ZpbHRlcj4KCQk8L2RlZnM+CgkJPG1hc2sgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMzkxLjkiIHk9Ii00OS4yIiB3aWR0aD0iNDczLjciIGhlaWdodD0iNDczLjciIGlkPSJTVkdJRF81XyI+CgkJCTxnIGZpbHRlcj0idXJsKCNBZG9iZV9PcGFjaXR5TWFza0ZpbHRlcikiPgoJCQkJCgkJCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF82XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItODAuMDAwNiIgeTE9IjQyNS45OTY5IiB4Mj0iLTc5LjAwMDYiIHkyPSI0MjUuOTk2OSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgyMzMuNTY1OCAyMzMuNTY1OCAyMzMuNTY1OCAtMjMzLjU2NTggLTgwMjk5LjUgMTE4MjU2LjAwNzgpIj4KCQkJCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAwMDAwIi8+CgkJCQkJPHN0b3AgIG9mZnNldD0iNy4xNjgyNzVlLTAzIiBzdHlsZT0ic3RvcC1jb2xvcjojMTIxMjEyIi8+CgkJCQkJPHN0b3AgIG9mZnNldD0iMi44MzAxNTFlLTAyIiBzdHlsZT0ic3RvcC1jb2xvcjojNDQ0NDQ0Ii8+CgkJCQkJPHN0b3AgIG9mZnNldD0iNS4xMTAxNDhlLTAyIiBzdHlsZT0ic3RvcC1jb2xvcjojNzA3MDcwIi8+CgkJCQkJPHN0b3AgIG9mZnNldD0iNy41MDQ1NDRlLTAyIiBzdHlsZT0ic3RvcC1jb2xvcjojOTc5Nzk3Ii8+CgkJCQkJPHN0b3AgIG9mZnNldD0iMC4xMDA0IiBzdHlsZT0ic3RvcC1jb2xvcjojQjdCN0I3Ii8+CgkJCQkJPHN0b3AgIG9mZnNldD0iMC4xMjc3IiBzdHlsZT0ic3RvcC1jb2xvcjojRDFEMUQxIi8+CgkJCQkJPHN0b3AgIG9mZnNldD0iMC4xNTc1IiBzdHlsZT0ic3RvcC1jb2xvcjojRTZFNkU2Ii8+CgkJCQkJPHN0b3AgIG9mZnNldD0iMC4xOTEyIiBzdHlsZT0ic3RvcC1jb2xvcjojRjRGNEY0Ii8+CgkJCQkJPHN0b3AgIG9mZnNldD0iMC4yMzIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkNGQ0ZDIi8+CgkJCQkJPHN0b3AgIG9mZnNldD0iMC4zIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGIi8+CgkJCQkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRiIvPgoJCQkJPC9saW5lYXJHcmFkaWVudD4KCQkJCTxwb2x5Z29uIGNsaXAtcGF0aD0idXJsKCNTVkdJRF80XykiIGZpbGw9InVybCgjU1ZHSURfNl8pIiBwb2ludHM9IjYyOC44LC00OS4yIDg2NS42LDE4Ny43IDYyOC44LDQyNC41IDM5MS45LDE4Ny43IAkJCQkiLz4KCQkJPC9nPgoJCTwvbWFzaz4KCQkKCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF83XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItNzkuOTk5MSIgeTE9IjQyNS45OTc5IiB4Mj0iLTc4Ljk5OTIiIHkyPSI0MjUuOTk3OSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgyMzMuNTY1OCAyMzMuNTY1OCAyMzMuNTY1OCAtMjMzLjU2NTggLTgwMjk5Ljg0MzggMTE4MjU2LjEzMjgpIj4KCQkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0Q5OUY2NiIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIyLjI1NDU0NWUtMDIiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMEExNjQiLz4KCQkJPHN0b3AgIG9mZnNldD0iOC43NzEyODhlLTAyIiBzdHlsZT0ic3RvcC1jb2xvcjojRUVBNjYxIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjAuMTY3MSIgc3R5bGU9InN0b3AtY29sb3I6I0Y2QTk2MCIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjMiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOUFBNUYiLz4KCQkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0Y5QUE1RiIvPgoJCTwvbGluZWFyR3JhZGllbnQ+CgkJPHBvbHlnb24gY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzRfKSIgbWFzaz0idXJsKCNTVkdJRF81XykiIGZpbGw9InVybCgjU1ZHSURfN18pIiBwb2ludHM9IjYyOC44LC00OS4yIDg2NS42LDE4Ny43IDYyOC44LDQyNC41IAoJCQkzOTEuOSwxODcuNyAJCSIvPgoJPC9nPgoJPGcgY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSI+CgkJPGRlZnM+CgkJCTxwYXRoIGlkPSJTVkdJRF84XyIgZD0iTTQ3LjgsMTk3LjJWMjA4aDIyMi42YzE1LjksMCwxOC42LDEwLDE3LDIwLjRoMTEuMmMwLTE0LjgtMS41LTMxLjItMjguMi0zMS4ySDQ3Ljh6Ii8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfOV8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF84XyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+CgkJPC9jbGlwUGF0aD4KCQk8ZGVmcz4KCQkJPGZpbHRlciBpZD0iQWRvYmVfT3BhY2l0eU1hc2tGaWx0ZXJfMV8iIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMzIuMiIgeT0iNzEuOSIgd2lkdGg9IjI4MiIgaGVpZ2h0PSIyODIiPgoJCQkJPGZlQ29sb3JNYXRyaXggIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxIDAiLz4KCQkJPC9maWx0ZXI+CgkJPC9kZWZzPgoJCTxtYXNrIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjMyLjIiIHk9IjcxLjkiIHdpZHRoPSIyODIiIGhlaWdodD0iMjgyIiBpZD0iU1ZHSURfMTBfIj4KCQkJPGcgZmlsdGVyPSJ1cmwoI0Fkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzFfKSI+CgkJCQkKCQkJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzExXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItNzkuOTk3NiIgeTE9IjQyNS45ODk3IiB4Mj0iLTc4Ljk5NzciIHkyPSI0MjUuOTg5NyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxNDAuOTc5NyAxNDAuOTc5NyAxNDAuOTc5NyAtMTQwLjk3OTcgLTQ4Njc1LjEyNSA3MTQ3Ni4yODEyKSI+CgkJCQkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRiIvPgoJCQkJCTxzdG9wICBvZmZzZXQ9IjAuNyIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRiIvPgoJCQkJCTxzdG9wICBvZmZzZXQ9IjAuNzE4MiIgc3R5bGU9InN0b3AtY29sb3I6I0U1RTVFNSIvPgoJCQkJCTxzdG9wICBvZmZzZXQ9IjAuNzU5MSIgc3R5bGU9InN0b3AtY29sb3I6I0FGQUZBRiIvPgoJCQkJCTxzdG9wICBvZmZzZXQ9IjAuODAwNCIgc3R5bGU9InN0b3AtY29sb3I6IzgxODE4MSIvPgoJCQkJCTxzdG9wICBvZmZzZXQ9IjAuODQxNCIgc3R5bGU9InN0b3AtY29sb3I6IzVDNUM1QyIvPgoJCQkJCTxzdG9wICBvZmZzZXQ9IjAuODgyMSIgc3R5bGU9InN0b3AtY29sb3I6IzNGM0YzRiIvPgoJCQkJCTxzdG9wICBvZmZzZXQ9IjAuOTIyMyIgc3R5bGU9InN0b3AtY29sb3I6IzJBMkEyQSIvPgoJCQkJCTxzdG9wICBvZmZzZXQ9IjAuOTYxOSIgc3R5bGU9InN0b3AtY29sb3I6IzFFMUUxRSIvPgoJCQkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQTFBMUEiLz4KCQkJCTwvbGluZWFyR3JhZGllbnQ+CgkJCQk8cG9seWdvbiBjbGlwLXBhdGg9InVybCgjU1ZHSURfOV8pIiBmaWxsPSJ1cmwoI1NWR0lEXzExXykiIHBvaW50cz0iMTczLjIsNzEuOSAzMTQuMiwyMTIuOCAxNzMuMiwzNTMuOCAzMi4yLDIxMi44IAkJCQkiLz4KCQkJPC9nPgoJCTwvbWFzaz4KCQkKCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTgwLjAwMTkiIHkxPSI0MjUuOTg0OSIgeDI9Ii03OS4wMDE5IiB5Mj0iNDI1Ljk4NDkiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMTQwLjk3OTggMTQwLjk3OTggMTQwLjk3OTggLTE0MC45Nzk4IC00ODY3My44OTQ1IDcxNDc2LjI1KSI+CgkJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM3Mjk3Q0UiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC43IiBzdHlsZT0ic3RvcC1jb2xvcjojNzI5N0NFIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM3Mjk3Q0UiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwb2x5Z29uIGNsaXAtcGF0aD0idXJsKCNTVkdJRF85XykiIG1hc2s9InVybCgjU1ZHSURfMTBfKSIgZmlsbD0idXJsKCNTVkdJRF8xMl8pIiBwb2ludHM9IjE3My4yLDcxLjkgMzE0LjIsMjEyLjggMTczLjIsMzUzLjggCgkJCTMyLjIsMjEyLjggCQkiLz4KCTwvZz4KCTxnIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yXykiPgoJCTxkZWZzPgoJCQk8cG9seWdvbiBpZD0iU1ZHSURfMTNfIiBwb2ludHM9IjM2NC44LDEyMC45IDQwMSwxNjUuNiA0MDIuNSwxNTAuMiAzNjcuMSwxMDYuNSAJCQkiLz4KCQk8L2RlZnM+CgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8xNF8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xM18iICBvdmVyZmxvdz0idmlzaWJsZSIvPgoJCTwvY2xpcFBhdGg+CgkJPGRlZnM+CgkJCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzJfIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjM2NC44IiB5PSIxMDYuNSIgd2lkdGg9IjM3LjgiIGhlaWdodD0iNTkiPgoJCQkJPGZlQ29sb3JNYXRyaXggIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxIDAiLz4KCQkJPC9maWx0ZXI+CgkJPC9kZWZzPgoJCTxtYXNrIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjM2NC44IiB5PSIxMDYuNSIgd2lkdGg9IjM3LjgiIGhlaWdodD0iNTkiIGlkPSJTVkdJRF8xNV8iPgoJCQk8ZyBmaWx0ZXI9InVybCgjQWRvYmVfT3BhY2l0eU1hc2tGaWx0ZXJfMl8pIj4KCQkJCQoJCQkJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMTZfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii04MC4wMDU2IiB5MT0iNDI1Ljk5MzkiIHgyPSItNzkuMDA1NiIgeTI9IjQyNS45OTM5IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDM3Ljc1NCAwIDAgLTM3Ljc1NCAzMzg1LjI4NTkgMTYyMTkuMDI4MykiPgoJCQkJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDAiLz4KCQkJCQk8c3RvcCAgb2Zmc2V0PSIwLjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDAiLz4KCQkJCQk8c3RvcCAgb2Zmc2V0PSIwLjE0MjQiIHN0eWxlPSJzdG9wLWNvbG9yOiMwOTA5MDkiLz4KCQkJCQk8c3RvcCAgb2Zmc2V0PSIwLjIxMTciIHN0eWxlPSJzdG9wLWNvbG9yOiMyMTIxMjEiLz4KCQkJCQk8c3RvcCAgb2Zmc2V0PSIwLjI5OTIiIHN0eWxlPSJzdG9wLWNvbG9yOiM0OTQ5NDkiLz4KCQkJCQk8c3RvcCAgb2Zmc2V0PSIwLjQwMTYiIHN0eWxlPSJzdG9wLWNvbG9yOiM4MDgwODAiLz4KCQkJCQk8c3RvcCAgb2Zmc2V0PSIwLjUxNDkiIHN0eWxlPSJzdG9wLWNvbG9yOiNDNkM2QzYiLz4KCQkJCQk8c3RvcCAgb2Zmc2V0PSIwLjYiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4KCQkJCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGIi8+CgkJCQk8L2xpbmVhckdyYWRpZW50PgoJCQkJPHJlY3QgeD0iMzY0LjgiIHk9IjEwNi41IiBjbGlwLXBhdGg9InVybCgjU1ZHSURfMTRfKSIgZmlsbD0idXJsKCNTVkdJRF8xNl8pIiB3aWR0aD0iMzcuOCIgaGVpZ2h0PSI1OSIvPgoJCQk8L2c+CgkJPC9tYXNrPgoJCQoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzE3XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItODAuMDA1NiIgeTE9IjQyNS45OTM5IiB4Mj0iLTc5LjAwNTYiIHkyPSI0MjUuOTkzOSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgzNy43NTQgMCAwIC0zNy43NTQgMzM4NS4yODU5IDE2MjE5LjAyODMpIj4KCQkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRiIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC42IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxyZWN0IHg9IjM2NC44IiB5PSIxMDYuNSIgY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzE0XykiIG1hc2s9InVybCgjU1ZHSURfMTVfKSIgZmlsbD0idXJsKCNTVkdJRF8xN18pIiB3aWR0aD0iMzcuOCIgaGVpZ2h0PSI1OSIvPgoJPC9nPgoJPGcgY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzJfKSI+CgkJPGRlZnM+CgkJCTxyZWN0IGlkPSJTVkdJRF8xOF8iIHg9Ii04MCIgeT0iLTEyNCIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNTUwIi8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMTlfIj4KCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMThfIiAgb3ZlcmZsb3c9InZpc2libGUiLz4KCQk8L2NsaXBQYXRoPgoJCTxwb2x5Z29uIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8xOV8pIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjM1MS45LDIwNC43IDMwMy40LDE3MS4yIDMxMy4xLDE2NS4xIDM1OS45LDE5Ni4xIAkJIi8+CgkJPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzE5XykiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNzcuNywxMzYuMmMwLDYuNC0xLjEsMTIuMy0zLjQsMTcuOGMtMi4yLDUuNC01LjQsMTAuMi05LjQsMTQuMgoJCQljLTQsNC04LjcsNy4xLTE0LjMsOS40Yy01LjUsMi4yLTExLjYsMy40LTE4LjIsMy40Yy02LjUsMC0xMi42LTEuMS0xOC4xLTMuNGMtNS41LTIuMi0xMC4zLTUuNC0xNC4zLTkuNGMtNC00LTcuMS04LjctOS4zLTE0LjIKCQkJYy0yLjItNS40LTMuNC0xMS40LTMuNC0xNy44YzAtNi40LDEuMS0xMi4zLDMuNC0xNy44YzIuMi01LjQsNS40LTEwLjIsOS4zLTE0LjJjNC00LDguNy03LjEsMTQuMy05LjRjNS41LTIuMiwxMS41LTMuNCwxOC4xLTMuNAoJCQljNi43LDAsMTIuNywxLjEsMTguMiwzLjRjNS41LDIuMiwxMC4zLDUuNCwxNC4zLDkuNGM0LDQsNy4xLDguNyw5LjQsMTQuMkMzNzYuNiwxMjMuOSwzNzcuNywxMjkuOCwzNzcuNywxMzYuMiBNMzY0LjYsMTM2LjIKCQkJYzAtNC43LTAuOC05LjEtMi4zLTEzLjNjLTEuNS00LjEtMy43LTcuNy02LjQtMTAuN2MtMi44LTMtNi4xLTUuNC0xMC4xLTcuMmMtMy45LTEuOC04LjQtMi42LTEzLjMtMi42Yy01LDAtOS40LDAuOS0xMy4zLDIuNgoJCQljLTMuOSwxLjgtNy4zLDQuMS0xMCw3LjJjLTIuNywzLTQuOCw2LjYtNi40LDEwLjdjLTEuNSw0LjEtMi4zLDguNS0yLjMsMTMuM3MwLjgsOS4xLDIuMywxMy4zYzEuNSw0LjEsMy42LDcuNyw2LjQsMTAuNwoJCQljMi43LDMsNi4xLDUuNCwxMCw3LjJjMy45LDEuOCw4LjQsMi42LDEzLjMsMi42YzUsMCw5LjQtMC45LDEzLjMtMi42YzMuOS0xLjgsNy4zLTQuMSwxMC4xLTcuMmMyLjgtMyw0LjktNi42LDYuNC0xMC43CgkJCUMzNjMuOCwxNDUuNCwzNjQuNiwxNDEsMzY0LjYsMTM2LjIiLz4KCQk8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMTlfKSIgZmlsbD0iI0ZGRkZGRiIgZD0iTTQ4MC44LDEzNi4yYzAsNi40LTEuMSwxMi4zLTMuNCwxNy44Yy0yLjIsNS40LTUuNCwxMC4yLTkuNCwxNC4yCgkJCWMtNCw0LTguNyw3LjEtMTQuMyw5LjRjLTUuNSwyLjItMTEuNiwzLjQtMTguMiwzLjRjLTYuNSwwLTEyLjYtMS4xLTE4LjEtMy40Yy01LjUtMi4yLTEwLjMtNS40LTE0LjMtOS40Yy00LTQtNy4xLTguNy05LjQtMTQuMgoJCQljLTIuMi01LjQtMy40LTExLjQtMy40LTE3LjhjMC02LjQsMS4xLTEyLjMsMy40LTE3LjhjMi4yLTUuNCw1LjQtMTAuMiw5LjQtMTQuMmM0LTQsOC43LTcuMSwxNC4zLTkuNGM1LjUtMi4yLDExLjUtMy40LDE4LjEtMy40CgkJCWM2LjcsMCwxMi43LDEuMSwxOC4yLDMuNGM1LjUsMi4yLDEwLjMsNS40LDE0LjMsOS40YzQsNCw3LjEsOC43LDkuNCwxNC4yQzQ3OS43LDEyMy45LDQ4MC44LDEyOS44LDQ4MC44LDEzNi4yIE00NjcuNywxMzYuMgoJCQljMC00LjctMC44LTkuMS0yLjMtMTMuM2MtMS41LTQuMS0zLjctNy43LTYuNC0xMC43Yy0yLjgtMy02LjEtNS40LTEwLjEtNy4yYy0zLjktMS44LTguNC0yLjYtMTMuMy0yLjZjLTUsMC05LjQsMC45LTEzLjMsMi42CgkJCWMtMy45LDEuOC03LjMsNC4xLTEwLDcuMmMtMi43LDMtNC44LDYuNi02LjQsMTAuN2MtMS41LDQuMS0yLjMsOC41LTIuMywxMy4zczAuOCw5LjEsMi4zLDEzLjNjMS41LDQuMSwzLjYsNy43LDYuNCwxMC43CgkJCWMyLjcsMyw2LjEsNS40LDEwLDcuMmMzLjksMS44LDguNCwyLjYsMTMuMywyLjZjNSwwLDkuNC0wLjksMTMuMy0yLjZjMy45LTEuOCw3LjMtNC4xLDEwLjEtNy4yYzIuOC0zLDQuOS02LjYsNi40LTEwLjcKCQkJQzQ2NywxNDUuNCw0NjcuNywxNDEsNDY3LjcsMTM2LjIiLz4KCQk8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMTlfKSIgZmlsbD0iI0ZGRkZGRiIgZD0iTTM3Ny43LDIzMi4zYzAsNi40LTEuMSwxMi4zLTMuNCwxNy44Yy0yLjIsNS40LTUuNCwxMC4yLTkuNCwxNC4yCgkJCWMtNCw0LTguNyw3LjEtMTQuMyw5LjRjLTUuNSwyLjItMTEuNiwzLjQtMTguMiwzLjRjLTYuNSwwLTEyLjYtMS4xLTE4LjEtMy40Yy01LjUtMi4yLTEwLjMtNS40LTE0LjMtOS40Yy00LTQtNy4xLTguNy05LjMtMTQuMgoJCQljLTIuMi01LjQtMy40LTExLjQtMy40LTE3LjhjMC02LjQsMS4xLTEyLjMsMy40LTE3LjhjMi4yLTUuNCw1LjQtMTAuMiw5LjMtMTQuMmM0LTQsOC43LTcuMSwxNC4zLTkuNGM1LjUtMi4yLDExLjUtMy40LDE4LjEtMy40CgkJCWM2LjcsMCwxMi43LDEuMSwxOC4yLDMuNGM1LjUsMi4yLDEwLjMsNS40LDE0LjMsOS40YzQsNCw3LjEsOC43LDkuNCwxNC4yQzM3Ni42LDIyMCwzNzcuNywyMjUuOSwzNzcuNywyMzIuMyBNMzY0LjYsMjMyLjMKCQkJYzAtNC43LTAuOC05LjEtMi4zLTEzLjNjLTEuNS00LjEtMy43LTcuNy02LjQtMTAuN2MtMi44LTMtNi4xLTUuNC0xMC4xLTcuMmMtMy45LTEuOC04LjQtMi42LTEzLjMtMi42Yy01LDAtOS40LDAuOS0xMy4zLDIuNgoJCQljLTMuOSwxLjgtNy4zLDQuMS0xMCw3LjJjLTIuNywzLTQuOCw2LjYtNi40LDEwLjdjLTEuNSw0LjEtMi4zLDguNS0yLjMsMTMuM3MwLjgsOS4xLDIuMywxMy4zYzEuNSw0LjEsMy42LDcuNyw2LjQsMTAuNwoJCQljMi43LDMsNi4xLDUuNCwxMCw3LjJjMy45LDEuOCw4LjQsMi42LDEzLjMsMi42YzUsMCw5LjQtMC45LDEzLjMtMi42YzMuOS0xLjgsNy4zLTQuMSwxMC4xLTcuMmMyLjgtMyw0LjktNi42LDYuNC0xMC43CgkJCUMzNjMuOCwyNDEuNSwzNjQuNiwyMzcsMzY0LjYsMjMyLjMiLz4KCQk8cG9seWdvbiBjbGlwLXBhdGg9InVybCgjU1ZHSURfMTlfKSIgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSI2MS4zLDE3OS40IDQ3LjgsMTc5LjQgNDcuOCw0Ni41IDEyOCw0Ni41IDEyOCw1OC45IDYxLjMsNTguOSAKCQkJNjEuMywxMDQuMSAxMjMuMywxMDQuMSAxMjMuMywxMTYuNSA2MS4zLDExNi41IAkJIi8+CgkJPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzE5XykiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xOTQuNywxMjUuNXYtMi4zYzAtMTUuMS03LjUtMjIuNy0yMi41LTIyLjdjLTEwLjMsMC0xOS4yLDMuNC0yNi45LDEwLjMKCQkJbC03LjUtOC44YzguMy04LjUsMjAuNy0xMi44LDM3LjItMTIuOGM0LjMsMCw4LjQsMC42LDEyLjMsMS45YzMuOSwxLjMsNy40LDMuMiwxMC4yLDUuN2MyLjksMi42LDUuMiw1LjgsNi45LDkuNwoJCQljMS44LDMuOSwyLjYsOC41LDIuNiwxMy45djM5LjJjMCwzLjQsMC4yLDYuOSwwLjUsMTAuNmMwLjMsMy43LDAuNyw2LjcsMSw5LjFoLTEyYy0wLjQtMi4xLTAuNy00LjQtMC44LTYuOQoJCQljLTAuMi0yLjUtMC4zLTQuOS0wLjMtNy4zSDE5NWMtMy42LDUuOS03LjksMTAuMS0xMi45LDEyLjdjLTQuOSwyLjYtMTEsMy45LTE4LjEsMy45Yy0zLjksMC03LjYtMC41LTExLjMtMS42CgkJCWMtMy42LTEuMS02LjktMi43LTkuNy00LjljLTIuOC0yLjItNS4xLTQuOS02LjgtOC4xYy0xLjctMy4yLTIuNS02LjktMi41LTExLjJjMC03LjEsMS44LTEyLjcsNS41LTE2LjhjMy43LTQuMSw4LjMtNy4xLDEzLjktOS4xCgkJCWM1LjYtMiwxMS41LTMuMywxNy44LTMuOGM2LjMtMC41LDEyLjEtMC44LDE3LjQtMC44SDE5NC43eiBNMTg4LjMsMTM1LjdjLTMuMSwwLTcsMC4yLTExLjcsMC41Yy00LjcsMC4zLTkuMiwxLjEtMTMuNSwyLjMKCQkJYy00LjMsMS4yLTgsMy0xMS4xLDUuNWMtMy4xLDIuNS00LjYsNS45LTQuNiwxMC4zYzAsMi45LDAuNiw1LjQsMS44LDcuNGMxLjIsMi4xLDIuOCwzLjgsNC44LDUuMWMyLDEuMyw0LjIsMi4zLDYuNywyLjgKCQkJYzIuNCwwLjYsNC45LDAuOCw3LjQsMC44YzQuNSwwLDguNC0wLjgsMTEuNy0yLjNjMy4zLTEuNSw2LjEtMy41LDguNC02LjFjMi4zLTIuNiwzLjktNS42LDUtOWMxLjEtMy40LDEuNi03LjEsMS42LTExdi02LjRIMTg4LjMKCQkJeiIvPgoJCTxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8xOV8pIiBmaWxsPSIjRkZGRkZGIiBkPSJNMjMwLjUsMTE4LjljMC0zLjktMC4xLTcuOC0wLjMtMTEuOGMtMC4yLTQtMC4zLTkuMi0wLjUtMTUuNkgyNDJ2MTYuM2gwLjQKCQkJYzAuOS0yLjQsMi4xLTQuNywzLjgtNi45YzEuNi0yLjIsMy42LTQuMiw1LjktNS45YzIuMy0xLjgsNS0zLjIsOC4xLTQuMmMzLjEtMS4xLDYuNS0xLjYsMTAuNC0xLjZjMy41LDAsNi42LDAuNCw5LjIsMS4xCgkJCWwtMi40LDEyLjJjLTEuNi0wLjYtNC0wLjktNy4xLTAuOWMtNC44LDAtOC44LDAuOS0xMi4yLDIuN2MtMy40LDEuOC02LjIsNC4xLTguNCw2LjljLTIuMywyLjgtMy45LDUuOS01LDkuMQoJCQljLTEuMSwzLjMtMS42LDYuNC0xLjYsOS40djQ5LjZoLTEyLjRWMTE4Ljl6Ii8+CgkJPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzE5XykiIGZpbGw9IiNGRkZGRkYiIGQ9Ik01MjQuNywxNzkuNGgtMTMuNVY0Ni41aDQwLjljMTMuNSwwLDI0LjIsMi45LDMyLDguOAoJCQljNy44LDUuOSwxMS43LDE0LjgsMTEuNywyNi43YzAsOS4zLTIuOSwxNy4xLTguNywyMy40Yy01LjgsNi4zLTE0LjIsMTAtMjUuMywxMWwzOC4zLDYzLjFoLTE2LjVsLTM2LjQtNjEuOGgtMjIuNVYxNzkuNHoKCQkJIE01MjQuNywxMDUuMmgyNGM2LDAsMTEuMS0wLjYsMTUuMy0xLjljNC4yLTEuMiw3LjUtMi45LDEwLTVjMi41LTIuMSw0LjMtNC41LDUuNC03LjNjMS4xLTIuOCwxLjctNS45LDEuNy05LjEKCQkJYzAtMy4xLTAuNi02LjEtMS43LTguOWMtMS4xLTIuOC0yLjktNS4zLTUuNC03LjRjLTIuNS0yLjEtNS45LTMuOC0xMC01Yy00LjItMS4yLTkuMy0xLjgtMTUuMy0xLjhoLTI0VjEwNS4yeiIvPgoJCTxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8xOV8pIiBmaWxsPSIjRkZGRkZGIiBkPSJNNjY4LjgsMTI1LjV2LTIuM2MwLTE1LjEtNy41LTIyLjctMjIuNS0yMi43Yy0xMC4zLDAtMTkuMiwzLjQtMjYuOSwxMC4zCgkJCWwtNy41LTguOGM4LjMtOC41LDIwLjctMTIuOCwzNy4yLTEyLjhjNC4zLDAsOC40LDAuNiwxMi4zLDEuOWMzLjksMS4zLDcuNCwzLjIsMTAuMiw1LjdjMi45LDIuNiw1LjIsNS44LDYuOSw5LjcKCQkJYzEuOCwzLjksMi42LDguNSwyLjYsMTMuOXYzOS4yYzAsMy40LDAuMiw2LjksMC41LDEwLjZjMC4zLDMuNywwLjcsNi43LDEsOS4xaC0xMmMtMC40LTIuMS0wLjctNC40LTAuOC02LjkKCQkJYy0wLjItMi41LTAuMy00LjktMC4zLTcuM2gtMC40Yy0zLjYsNS45LTcuOSwxMC4xLTEyLjksMTIuN2MtNC45LDIuNi0xMSwzLjktMTguMSwzLjljLTMuOSwwLTcuNi0wLjUtMTEuMy0xLjYKCQkJYy0zLjYtMS4xLTYuOS0yLjctOS43LTQuOWMtMi44LTIuMi01LjEtNC45LTYuOC04LjFjLTEuNy0zLjItMi41LTYuOS0yLjUtMTEuMmMwLTcuMSwxLjgtMTIuNyw1LjUtMTYuOGMzLjctNC4xLDguMy03LjEsMTMuOS05LjEKCQkJYzUuNi0yLDExLjUtMy4zLDE3LjgtMy44YzYuMy0wLjUsMTIuMS0wLjgsMTcuNC0wLjhINjY4Ljh6IE02NjIuNCwxMzUuN2MtMy4xLDAtNywwLjItMTEuNywwLjVjLTQuNywwLjMtOS4yLDEuMS0xMy41LDIuMwoJCQljLTQuMywxLjItOCwzLTExLjEsNS41Yy0zLjEsMi41LTQuNiw1LjktNC42LDEwLjNjMCwyLjksMC42LDUuNCwxLjgsNy40YzEuMiwyLjEsMi44LDMuOCw0LjgsNS4xYzIsMS4zLDQuMiwyLjMsNi43LDIuOAoJCQljMi40LDAuNiw0LjksMC44LDcuNCwwLjhjNC41LDAsOC40LTAuOCwxMS43LTIuM2MzLjMtMS41LDYuMS0zLjUsOC40LTYuMWMyLjMtMi42LDMuOS01LjYsNS05YzEuMS0zLjQsMS42LTcuMSwxLjYtMTF2LTYuNEg2NjIuNAoJCQl6Ii8+CgkJPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzE5XykiIGZpbGw9IiNGRkZGRkYiIGQ9Ik03NDkuMSwxMDIuOGgtMjUuM3Y1MS44YzAsMy4zLDAuMyw1LjksMC45LDhjMC42LDIuMSwxLjUsMy43LDIuNiw0LjgKCQkJYzEuMSwxLjEsMi41LDEuOSw0LDIuM2MxLjYsMC40LDMuMywwLjcsNS4yLDAuN2MyLjEsMCw0LjMtMC4zLDYuNi0wLjljMi4zLTAuNiw0LjMtMS40LDYuMi0yLjRsMC42LDExLjUKCQkJYy00LjYsMi4xLTEwLjIsMy4yLTE2LjcsMy4yYy0yLjQsMC00LjktMC4zLTcuNC0wLjljLTIuNi0wLjYtNC45LTEuOC03LTMuNmMtMi4xLTEuOC0zLjktNC4xLTUuMy03LjFjLTEuNC0zLTIuMS02LjktMi4xLTExLjgKCQkJdi01NS40aC0xOC42VjkxLjVoMTguNlY2Ni43aDEyLjR2MjQuOGgyNS4zVjEwMi44eiIvPgoJCTxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8xOV8pIiBmaWxsPSIjRkZGRkZGIiBkPSJNNzcyLjcsMTM4LjljMC40LDQuNCwxLjQsOC41LDMuMiwxMi40YzEuOCwzLjksNC4xLDcuMiw2LjksMTAKCQkJYzIuOSwyLjgsNi4yLDUsMTAsNi43YzMuOCwxLjYsNy44LDIuNCwxMi4yLDIuNGM2LjYsMCwxMi40LTEuNSwxNy4yLTQuNmM0LjgtMy4xLDguNS02LjYsMTEtMTAuNmw5LjYsNy45CgkJCWMtNS4zLDYuNi0xMSwxMS40LTE3LjQsMTQuM2MtNi4zLDIuOS0xMy4xLDQuMy0yMC40LDQuM2MtNi41LDAtMTIuNi0xLjItMTguMS0zLjVjLTUuNi0yLjMtMTAuNC01LjUtMTQuNC05LjcKCQkJYy00LTQuMS03LjItOS05LjUtMTQuNmMtMi4zLTUuNi0zLjUtMTEuOC0zLjUtMTguNGMwLTYuNiwxLjEtMTIuOCwzLjQtMTguNGMyLjMtNS42LDUuNC0xMC41LDkuNC0xNC42YzQtNC4xLDguNy03LjQsMTQuMS05LjcKCQkJYzUuNC0yLjMsMTEuMi0zLjUsMTcuNS0zLjVjNi42LDAsMTIuNiwxLjIsMTcuOCwzLjZjNS4zLDIuNCw5LjcsNS41LDEzLjIsOS41YzMuNiwzLjksNi4zLDguNiw4LjIsMTMuOWMxLjksNS4zLDIuOCwxMSwyLjgsMTcKCQkJdjUuNkg3NzIuN3ogTTgzMi41LDEyOC43YzAtOC40LTIuNS0xNS4yLTcuNS0yMC40Yy01LTUuMi0xMi03LjgtMjEtNy44Yy00LDAtNy45LDAuOC0xMS42LDIuM2MtMy44LDEuNi03LDMuNy05LjksNi4zCgkJCWMtMi44LDIuNi01LjEsNS42LTYuOCw5Yy0xLjcsMy40LTIuNSw2LjktMi41LDEwLjVIODMyLjV6Ii8+Cgk8L2c+CjwvZz4KPHJlY3QgaWQ9Il94M0NfU2xpY2VfeDNFXyIgZmlsbD0ibm9uZSIgd2lkdGg9Ijg5NyIgaGVpZ2h0PSIzMDEiLz4KPC9zdmc+Cg==\" />\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <img class=\"img-responsive\" src=\"https://raw.githubusercontent.com/tokyoite/USAPL/master/src/assets/usapllogotrans_small.png\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 96:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 96;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(114);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[234]);
//# sourceMappingURL=main.bundle.js.map