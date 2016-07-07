var KonamiCode =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * KonamiCode.js
	 */

	var DEFAULT_SEQUENCE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

	var KonamiCode = function KonamiCode(callback) {
	    var sequence = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_SEQUENCE : arguments[1];

	    if (!callback) throw new Error('You must provide a callback function to the constructor.');

	    this.callback = callback;
	    this.sequence = sequence;
	    this.sequenceIndex = 0;

	    document.addEventListener('keyup', this.keyHandler.bind(this));
	};

	KonamiCode.prototype.keyHandler = function (e) {
	    if (e.keyCode === this.sequence[this.sequenceIndex]) {
	        this.sequenceIndex++;
	    } else {
	        this.sequenceIndex = 0;
	    }

	    if (this.sequenceIndex === this.sequence.length) {
	        this.callback();
	        this.sequenceIndex = 0;
	    }
	};

	KonamiCode.prototype.destroy = function (e) {
	    document.removeEventListener('keyup', this.keyHandler);
	};

	module.exports = KonamiCode;

/***/ }
/******/ ]);