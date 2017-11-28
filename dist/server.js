/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * this is the anemic class that represents a User object. they are the same fields of the database table
 */
var GithubUserModel = /** @class */ (function () {
    function GithubUserModel() {
    }
    return GithubUserModel;
}());
/* harmony default export */ __webpack_exports__["a"] = (GithubUserModel);
;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_models_GithubUserModel__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_GithubUserService__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chalk__);



var userArgs;
if (process.argv.indexOf('--username')) {
    userArgs = process.argv[process.argv.indexOf('--username') + 1];
}
else {
    console.log(__WEBPACK_IMPORTED_MODULE_2_chalk___default.a.bgKeyword('red')('Invalid Username!'));
    process.exit(0);
}
var userService = new __WEBPACK_IMPORTED_MODULE_1__business_GithubUserService__["a" /* default */]();
var user = new __WEBPACK_IMPORTED_MODULE_0__domain_models_GithubUserModel__["a" /* default */]();
userService.createByUsername(userArgs.trim())
    .then(function (r) { return console.info(r); })
    .catch(function (e) { return console.error("Error: ", e.message); });


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infra_repositories_GithubUserRepository__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_models_GithubUserModel__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_request_promise__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_request_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_request_promise__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * This is the class which has the business logic to filter and manipulate
 * the data to access the database
 */



var GithubUserService = /** @class */ (function () {
    function GithubUserService() {
        var _this = this;
        this.githubUserRepository = new __WEBPACK_IMPORTED_MODULE_0__infra_repositories_GithubUserRepository__["a" /* default */]();
        this.createByUsername = function (username) { return __awaiter(_this, void 0, void 0, function () {
            var userRequested, error_1, user, userRepoResponse, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_request_promise___default()({
                                uri: "https://api.github.com/users/" + username,
                                headers: { 'User-Agent': 'Request-Promise' },
                                json: true
                            })];
                    case 1:
                        userRequested = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        error_1["type"] = "Github error";
                        return [2 /*return*/, Promise.reject(error_1)];
                    case 3:
                        user = new __WEBPACK_IMPORTED_MODULE_1__domain_models_GithubUserModel__["a" /* default */]();
                        user.avatarUrl = userRequested.avatar_url;
                        user.company = userRequested.company;
                        user.location = userRequested.location;
                        user.login = userRequested.login;
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.githubUserRepository.create(user)];
                    case 5:
                        userRepoResponse = _a.sent();
                        return [2 /*return*/, Promise.resolve(userRepoResponse)];
                    case 6:
                        error_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_2)];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.listAll = function () {
            return _this.githubUserRepository.listAll().then(function (res) { return Promise.resolve(res.dataValues); });
        };
    }
    return GithubUserService;
}());
/* harmony default export */ __webpack_exports__["a"] = (GithubUserService);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_config_startup__ = __webpack_require__(4);

var GithubUserRepository = /** @class */ (function () {
    function GithubUserRepository() {
        var _this = this;
        this.create = function (user) {
            return _this.githubUserDataSet.create(user);
        };
        this.listAll = function () {
            return _this.githubUserDataSet.findAll({});
        };
        this.githubUserDataSet = __WEBPACK_IMPORTED_MODULE_0__data_config_startup__["a" /* default */].getInstance().database.models.GithubUser;
    }
    return GithubUserRepository;
}());
/* harmony default export */ __webpack_exports__["a"] = (GithubUserRepository);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_configuration__ = __webpack_require__(8);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Startup = /** @class */ (function () {
    function Startup(config) {
        var _this = this;
        this.config = config;
        this.database = null;
        /**
         * This is a helper function that loads all the models to the database object
         * Then it returns a list of all models objects to be accessed as a Dataset
         * @param sequelize instance of Sequelize
         */
        this.loadModels = function (sequelize) {
            var dir = __WEBPACK_IMPORTED_MODULE_2_path__["resolve"](__dirname + "/../models");
            var models = [];
            __WEBPACK_IMPORTED_MODULE_1_fs__["readdirSync"](dir).forEach(function (file) {
                var modelDir = __WEBPACK_IMPORTED_MODULE_2_path__["join"](dir, file);
                var model = sequelize.import(modelDir);
                models[model.name] = model;
            });
            return models;
        };
        /**
       * this exported method is the core object to manipulate the data using Sequelize
       * @param config The configuration of the database
       */
        this.startup = function (config) { return __awaiter(_this, void 0, void 0, function () {
            var sequelize;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(config.database, config.username, config.password, config.params);
                        this.database = {
                            sequelize: sequelize,
                            Sequelize: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a,
                            models: []
                        };
                        this.database.models = this.loadModels(sequelize);
                        //Syncronizing the database, it is like as an open connection
                        return [4 /*yield*/, sequelize.sync({ logging: false })];
                    case 1:
                        //Syncronizing the database, it is like as an open connection
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.startup(config);
    }
    Startup.getInstance = function () {
        return Startup._instance || (Startup._instance = new Startup(__WEBPACK_IMPORTED_MODULE_3__config_configuration__["a" /* default */]));
    };
    ;
    return Startup;
}());
/* harmony default export */ __webpack_exports__["a"] = (Startup);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src\\infra\\data\\config"))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This file holds all the access configuration for the database
 * and to set the instance of the ORM Sequelize
 */
var databaseConfiguration = {
    database: 'lovelystay_test',
    username: "postgres",
    password: "admin",
    host: 'localhost',
    params: {
        port: 5432,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
};
/* harmony default export */ __webpack_exports__["a"] = (databaseConfiguration);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("request-promise");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ })
/******/ ]);