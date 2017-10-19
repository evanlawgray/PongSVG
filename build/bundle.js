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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _Game = __webpack_require__(10);

	var _Game2 = _interopRequireDefault(_Game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// create a game instance
	var game = new _Game2.default('game', 590, 295);

	(function gameLoop() {

		if (game.hasWinner === true) {
			var mainHeader = document.getElementById('main-header');
			mainHeader.innerHTML = 'Winner : ' + game.winner + '!';
			mainHeader.className = 'flashing';
			return;
		}
		game.render();
		requestAnimationFrame(gameLoop);
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./game.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./game.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: 'Silkscreen Web';\n  src: url(" + __webpack_require__(4) + ");\n  src: url(" + __webpack_require__(4) + "?#iefix) format('embedded-opentype'),\n    url(" + __webpack_require__(5) + ") format('woff'),\n    url(" + __webpack_require__(6) + ") format('truetype'),\n    url(" + __webpack_require__(7) + "#silkscreennormal) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: 'Silkscreen Web', monotype;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n  background: url(" + __webpack_require__(8) + ") no-repeat center,\n    linear-gradient(#353535 0%, #353535 100%);\n  background-size: contain;\n}\n\nh1 {\n  color: white;\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  position: relative;\n  bottom: 30px;\n}\n\nh1 > span {\n  color: red;\n}\n\n.game-wrapper {\n  position: absolute;\n  top: 20%;\n  left: 22.5%;\n}\n\n.player {\n  font-size: 1.2rem;\n  color: #FFF;\n  display: inline-block;\n  width: auto;\n  position: absolute;\n  top: 20px;\n}\n\n.player-2 {\n  right: 0;\n}\n\n.instructions {\n  background: white;\n  height: 100%;\n  width: 400px;\n  right: 0;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n}\n\n.instructions-header {\n  font-size: 1.5rem;\n  margin: 20px auto;\n}\n\n.player-controls {\n  height: auto;\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n}\n\n.instructions p {\n  display: inline-block;\n  font-size: 1.3rem;\n  width: 100%;\n  padding: 15px 0;\n  text-align: center;\n}\n\n.p1-controls, .p2-controls {\n  box-sizing: border-box;\n  height: 100%;\n  width: 50%;\n  padding: 15px 10px;\n  border: 1px solid black;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.p1-controls {\n  border-left: 0;\n}\n\n.p2-controls {\n  border-right: 0;\n}\n\nh3 {\n  font-size: 1.2rem;\n  padding: 5px;\n  margin-bottom: 10px;\n  border: 1px solid #353535;\n}\n\n.controls-row {\n  width: 100%;\n  padding: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.controls-row p {\n  padding-left: 20px;\n  font-size: 1.1rem;\n  text-align: left;\n}\n\n.key {\n  height: auto;\n  padding: 25px 10px;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.key-row {\n  width: 100%;\n  padding: 15px;\n}\n\n.key-heading {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.key-heading h3 {\n  border: none;\n  margin: 0 5px;\n}\n\n.key-image-container {\n  height: 35px;\n  width: 30%;\n  position: relative;\n}\n\n.key-image-container img {\n  height: 100%;\n  width: auto;\n}\n\n.key-image-container i {\n  position: absolute;\n  top: 8px;\n  left: 13px;\n}\n\n.key-image-container span {\n  position: absolute;\n  right: -15px;\n  top: 7px;\n  font-size: 1.5rem;\n}\n\n.p1-controls .controls-row:last-child i {\n  left: 13px;\n}\n\n.p2-controls .controls-row:last-child i {\n  left: 16px;\n}\n\n.key-image-container i:not(.arrow-icon) {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\n.key-image-container .arrow-icon {\n  font-size: 1rem;\n  top: 10px;\n  left: 12px;\n}\n\n.key-row p {\n  font-size: 1rem;\n}\n\n .flashing {\n  animation: flash 1s linear infinite;\n }\n\n @keyframes flash {\n  0% {\n    color: black;\n    transform: scale(1);\n  }\n  50% {\n    color: aquamarine;\n    transform: scale(1.2);\n  }\n  75% {\n    color: #72e5be;\n  }\n  100% {\n    color: black;\n    transform: scale(1);\n  }\n }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.eot";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.woff";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.ttf";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.svg";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/images/old-tv-background.png";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(11);

	var _Board = __webpack_require__(12);

	var _Board2 = _interopRequireDefault(_Board);

	var _Paddle = __webpack_require__(13);

	var _Paddle2 = _interopRequireDefault(_Paddle);

	var _Ball = __webpack_require__(14);

	var _Ball2 = _interopRequireDefault(_Ball);

	var _ExtraBall = __webpack_require__(15);

	var _ExtraBall2 = _interopRequireDefault(_ExtraBall);

	var _Fireball = __webpack_require__(16);

	var _Fireball2 = _interopRequireDefault(_Fireball);

	var _LifeOrb = __webpack_require__(17);

	var _LifeOrb2 = _interopRequireDefault(_LifeOrb);

	var _Score = __webpack_require__(18);

	var _Score2 = _interopRequireDefault(_Score);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function () {
		function Game(element, width, height) {
			var _this = this;

			_classCallCheck(this, Game);

			this.element = element;
			this.width = width;
			this.height = height;
			this.spaceBar = _settings.KEYS.spaceBar;
			this.paused = false;
			this.hasWinner = false;
			this.winner = '';

			this.boardGap = _settings.GAMESETTINGS.boardGap;
			this.paddleWidth = _settings.GAMESETTINGS.paddleWidth;
			this.paddleHeight = _settings.GAMESETTINGS.paddleHeight;

			this.balls = [];
			this.fireballs = [];
			this.lifeOrbs = [];

			this.gameElement = document.getElementById(this.element);

			document.addEventListener('keydown', function (event) {
				var randomNum = Math.random();

				switch (event.keyCode) {
					case _this.spaceBar:
						_this.paused = !_this.paused;
						break;
					case _settings.KEYS.player1Fire:
						if (randomNum >= 0.33) {
							_this.makeFireball(_this.paddle1);
						} else {
							_this.makeLifeOrb(_this.paddle1);
						}
						break;
					case _settings.KEYS.player2Fire:
						if (randomNum >= 0.33) {
							_this.makeFireball(_this.paddle2);
						} else {
							_this.makeLifeOrb(_this.paddle2);
						}
						break;
				}
			});

			this.board = new _Board2.default(this.width, this.height);

			this.makePaddle1();

			this.makePaddle2();

			this.makeBall1();

			this.player1Score = new _Score2.default(this.width / 2 - 70, 40, 40);

			this.player2Score = new _Score2.default(this.width / 2 + 40, 40, 40);
		}

		_createClass(Game, [{
			key: 'makeFireball',
			value: function makeFireball(aggressor) {
				var firedBy = aggressor;
				var fireball = new _Fireball2.default(_settings.GAMESETTINGS.ballRadius, this.width, this.height, firedBy);
				this.fireballs.push(fireball);
			}
		}, {
			key: 'makeLifeOrb',
			value: function makeLifeOrb(aggressor) {
				var firedBy = aggressor;
				var lifeOrb = new _LifeOrb2.default(_settings.GAMESETTINGS.ballRadius, this.width, this.height, firedBy);
				this.lifeOrbs.push(lifeOrb);
			}
		}, {
			key: 'makePaddle1',
			value: function makePaddle1() {
				this.paddle1 = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height - this.paddleHeight) / 2, _settings.KEYS.a, _settings.KEYS.z);
			}
		}, {
			key: 'makePaddle2',
			value: function makePaddle2() {
				this.paddle2 = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.width - this.boardGap - this.paddleWidth, (this.height - this.paddleHeight) / 2, _settings.KEYS.up, _settings.KEYS.down);
			}
		}, {
			key: 'makeBall1',
			value: function makeBall1() {
				var ball1 = new _Ball2.default(_settings.GAMESETTINGS.ballRadius, this.width, this.height);
				this.balls.push(ball1);
			}
		}, {
			key: 'makeExtraBall',
			value: function makeExtraBall() {
				var extraBall = new _ExtraBall2.default(_settings.GAMESETTINGS.ballRadius, this.width, this.height);
				this.balls.push(extraBall);
			}
		}, {
			key: 'endGame',
			value: function endGame() {
				if (this.paddle1.score >= 20) {

					this.winner = 'Player 1';
					this.hasWinner = true;
				} else if (this.paddle2.score >= 20) {

					this.winner = 'Player 2';
					this.hasWinner = true;
				}
			}
		}, {
			key: 'render',
			value: function render() {

				if (this.paused) {
					return;
				}

				this.gameElement.innerHTML = '';

				var svg = document.createElementNS(_settings.SVG_NS, 'svg');
				svg.setAttributeNS(null, 'width', this.width);
				svg.setAttributeNS(null, 'height', this.height);
				svg.setAttributeNS(null, 'viewBox', '0 0 ' + this.width + ' ' + this.height);
				this.gameElement.appendChild(svg);

				this.board.render(svg);
				this.paddle1.render(svg);
				this.paddle2.render(svg);
				// this.ball1.render( svg, this.paddle1, this.paddle2 );
				this.player1Score.render(svg, this.paddle1.score);
				this.player2Score.render(svg, this.paddle2.score);

				if (this.balls.length > 0) {
					for (var i = 0; i < this.balls.length; ++i) {
						this.balls[i].render(svg, this.paddle1, this.paddle2);
					}
				}

				if (this.fireballs.length > 0) {
					for (var _i = 0; _i < this.fireballs.length; ++_i) {
						this.fireballs[_i].render(svg, this.paddle1, this.paddle2);
					}
				}

				if (this.lifeOrbs.length > 0) {
					for (var _i2 = 0; _i2 < this.lifeOrbs.length; ++_i2) {
						this.lifeOrbs[_i2].render(svg, this.paddle1, this.paddle2);
					}
				}

				if (this.balls.length <= 1 && (this.paddle1.score >= 5 || this.paddle2.score >= 5)) {
					this.makeExtraBall(svg, this.paddle1, this.paddle2);
				}

				if (this.balls.length <= 2 && (this.paddle1.score >= 10 || this.paddle2.score >= 10)) {
					this.makeExtraBall(svg, this.paddle1, this.paddle2);
				}

				this.endGame();
			}
		}]);

		return Game;
	}();

	exports.default = Game;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var SVG_NS = exports.SVG_NS = 'http://www.w3.org/2000/svg';

	var KEYS = exports.KEYS = {
		a: 65, // player 1 up key
		z: 90, // player 1 down key
		up: 38, // player 2 up key
		down: 40, // player 2 down key
		spaceBar: 32, // Pauses the game
		player1Fire: 83,
		player2Fire: 191
	};

	var GAMESETTINGS = exports.GAMESETTINGS = {
		speed: 10,
		score: 0,
		boardGap: 10,
		paddleWidth: 8,
		paddleHeight: 56,
		ballDirection: 1,
		ballRadius: 8
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Board = function () {
		function Board(width, height) {
			_classCallCheck(this, Board);

			this.width = width;
			this.height = height;
		}

		_createClass(Board, [{
			key: 'render',
			value: function render(svg) {

				var rect = document.createElementNS(_settings.SVG_NS, 'rect');
				rect.setAttributeNS(null, 'width', this.width);
				rect.setAttributeNS(null, 'height', this.height);
				rect.setAttributeNS(null, 'fill', '#353535');
				rect.setAttributeNS(null, 'stroke', 'white');
				rect.setAttributeNS(null, 'stroke-width', 2);

				var dividingLine = document.createElementNS(_settings.SVG_NS, 'line');
				dividingLine.setAttributeNS(null, 'x1', this.width / 2);
				dividingLine.setAttributeNS(null, 'y1', 0);
				dividingLine.setAttributeNS(null, 'x2', this.width / 2);
				dividingLine.setAttributeNS(null, 'y2', this.height);
				dividingLine.setAttributeNS(null, 'stroke', 'white');
				dividingLine.setAttributeNS(null, 'stroke-width', '4');
				dividingLine.setAttributeNS(null, 'stroke-dasharray', '20, 15');

				svg.appendChild(rect);
				svg.appendChild(dividingLine);
			}
		}]);

		return Board;
	}();

	exports.default = Board;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Paddle = function () {
		function Paddle(boardHeight, width, height, x, y, up, down) {
			var _this = this;

			_classCallCheck(this, Paddle);

			this.boardHeight = boardHeight;
			this.width = width;
			this.height = height;
			this.x = x;
			this.y = y;
			this.speed = _settings.GAMESETTINGS.speed;
			this.score = 0;
			this.up = up;
			this.down = down;
			this.paused = false;
			this.keyMap = [];

			document.addEventListener('keydown', function (event) {
				if (_this.paused === false) {
					_this.keyMap[event.keyCode] = event.type === 'keydown';

					if (_this.keyMap[_this.up]) {
						_this.moveUP();
					} else if (_this.keyMap[_this.down]) {
						_this.moveDown();
					}
				}
			});

			document.addEventListener('keyup', function (event) {
				if (_this.paused === false) {
					_this.keyMap[event.keyCode] = event.type === 'keydown';

					if (_this.keyMap[_this.up]) {
						_this.moveUP();
					} else if (_this.keyMap[_this.down]) {
						_this.moveDown();
					}
				}
			});
		}

		_createClass(Paddle, [{
			key: 'moveUP',
			value: function moveUP() {
				this.y = Math.max(this.y - this.speed, this.boardHeight - this.boardHeight);
			}
		}, {
			key: 'moveDown',
			value: function moveDown() {
				this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
			}
		}, {
			key: 'coordinates',
			value: function coordinates(x, y, width, height) {
				var leftX = x;
				var rightX = x + width;
				var topY = y;
				var bottomY = y + height;
				return [leftX, rightX, topY, bottomY];
			}
		}, {
			key: 'render',
			value: function render(svg) {

				var paddle = document.createElementNS(_settings.SVG_NS, 'rect');
				paddle.setAttributeNS(null, 'width', this.width);
				paddle.setAttributeNS(null, 'height', this.height);
				paddle.setAttributeNS(null, 'x', this.x);
				paddle.setAttributeNS(null, 'y', this.y);
				paddle.setAttributeNS(null, 'fill', 'white');

				svg.appendChild(paddle);
			}
		}]);

		return Paddle;
	}();

	exports.default = Paddle;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ball = function () {
	  function Ball(radius, boardWidth, boardHeight) {
	    _classCallCheck(this, Ball);

	    this.radius = radius;
	    this.boardWidth = boardWidth;
	    this.boardHeight = boardHeight;
	    this.direction = 1;
	    this.reset();

	    this.ping = new Audio('../../public/sounds/pong-03.wav');
	  }

	  _createClass(Ball, [{
	    key: 'reset',
	    value: function reset() {
	      this.x = this.boardWidth / 2;
	      this.y = this.boardHeight / 2;

	      this.vy = 0;

	      while (this.vy === 0) {

	        //Generates a number between -5 and 5
	        this.vy = Math.floor(Math.random() * 10 - 5);
	      }

	      this.vx = this.direction * (6 - Math.abs(this.vy));
	    }
	  }, {
	    key: 'scoreGoal',
	    value: function scoreGoal(player) {
	      player.score++;
	      this.reset();
	    }
	  }, {
	    key: 'wallCollision',
	    value: function wallCollision() {
	      var hitLeft = this.x - this.radius <= 0;
	      var hitRight = this.x + this.radius >= this.boardWidth;
	      var hitTop = this.y - this.radius <= 0;
	      var hitBottom = this.y + this.radius >= this.boardHeight;

	      if (hitLeft || hitRight) {
	        this.vx = -this.vx;
	      } else if (hitTop || hitBottom) {
	        this.vy = -this.vy;
	      }
	    }
	  }, {
	    key: 'paddleCollisionCheck',
	    value: function paddleCollisionCheck(player, playerCoordinates) {
	      if (player === 'player2') {

	        var paddle = playerCoordinates;

	        var _paddle = _slicedToArray(paddle, 4),
	            leftX = _paddle[0],
	            rightX = _paddle[1],
	            topY = _paddle[2],
	            bottomY = _paddle[3];

	        if (this.x + this.radius >= leftX && this.x + this.radius <= rightX && this.y + this.radius >= topY && this.y - this.radius <= bottomY) {
	          return true;
	        }
	      } else if (player === 'player1') {

	        var _paddle2 = playerCoordinates;

	        var _paddle3 = _slicedToArray(_paddle2, 4),
	            _leftX = _paddle3[0],
	            _rightX = _paddle3[1],
	            _topY = _paddle3[2],
	            _bottomY = _paddle3[3];

	        if (this.x - this.radius >= _leftX && this.x - this.radius <= _rightX && this.y + this.radius >= _topY && this.y - this.radius <= _bottomY) {
	          return true;
	        }
	      }
	    }
	  }, {
	    key: 'paddleCollision',
	    value: function paddleCollision(player1, player2) {
	      if (this.vx > 0) {

	        if (this.paddleCollisionCheck('player2', player2.coordinates(player2.x, player2.y, player2.width, player2.height)) && player2.height > 30) {
	          this.vx = -this.vx;
	          this.ping.play();
	        }
	      } else {
	        if (this.paddleCollisionCheck('player1', player1.coordinates(player1.x, player1.y, player1.width, player1.height)) && player1.height > 30) {
	          this.vx = -this.vx;
	          this.ping.play();
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render(svg, paddle1, paddle2) {

	      this.wallCollision();
	      this.paddleCollision(paddle1, paddle2);

	      this.x += this.vx;
	      this.y += this.vy;

	      var ball = document.createElementNS(_settings.SVG_NS, 'circle');

	      ball.setAttributeNS(null, 'cx', this.x);
	      ball.setAttributeNS(null, 'cy', this.y);
	      ball.setAttributeNS(null, 'r', this.radius);
	      ball.setAttributeNS(null, 'fill', 'white');

	      svg.appendChild(ball);

	      var rightGoal = this.x + this.radius >= this.boardWidth;
	      var leftGoal = this.x - this.radius <= 0;

	      if (rightGoal) {
	        this.direction = -1;
	        this.scoreGoal(paddle1);
	      } else if (leftGoal) {
	        this.direction = 1;
	        this.scoreGoal(paddle2);
	      }
	    }
	  }]);

	  return Ball;
	}();

	exports.default = Ball;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ExtraBall = function () {
	  function ExtraBall(radius, boardWidth, boardHeight) {
	    _classCallCheck(this, ExtraBall);

	    this.radius = radius;
	    this.boardWidth = boardWidth;
	    this.boardHeight = boardHeight;
	    this.direction = 1;
	    this.reset();

	    this.ping = new Audio('../public/sounds/pong-03.wav');
	  }

	  _createClass(ExtraBall, [{
	    key: 'reset',
	    value: function reset() {
	      this.x = this.boardWidth / 2;
	      this.y = this.boardHeight / 2;

	      this.vy = 0;

	      while (this.vy === 0) {

	        this.vy = Math.floor(Math.random() * 6 - 3);
	      }

	      this.vx = this.direction * (4 - Math.abs(this.vy));
	    }
	  }, {
	    key: 'scoreGoal',
	    value: function scoreGoal(player) {
	      player.score++;
	      this.reset();
	    }
	  }, {
	    key: 'wallCollision',
	    value: function wallCollision() {
	      var hitLeft = this.x - this.radius <= 0;
	      var hitRight = this.x + this.radius >= this.boardWidth;
	      var hitTop = this.y - this.radius <= 0;
	      var hitBottom = this.y + this.radius >= this.boardHeight;

	      if (hitLeft || hitRight) {
	        this.vx = -this.vx;
	      } else if (hitTop || hitBottom) {
	        this.vy = -this.vy;
	      }
	    }
	  }, {
	    key: 'paddleCollision',
	    value: function paddleCollision(player1, player2) {
	      if (this.vx > 0) {

	        var paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);

	        var _paddle = _slicedToArray(paddle, 4),
	            leftX = _paddle[0],
	            rightX = _paddle[1],
	            topY = _paddle[2],
	            bottomY = _paddle[3];

	        if (this.x + this.radius >= leftX && this.x + this.radius <= rightX && this.y + this.radius >= topY && this.y - this.radius <= bottomY) {
	          this.vx = -this.vx;
	          this.ping.play();
	        }
	      } else {

	        var _paddle2 = player1.coordinates(player1.x, player1.y, player1.width, player1.height);

	        var _paddle3 = _slicedToArray(_paddle2, 4),
	            _leftX = _paddle3[0],
	            _rightX = _paddle3[1],
	            _topY = _paddle3[2],
	            _bottomY = _paddle3[3];

	        if (this.x - this.radius <= _rightX && this.x - this.radius >= _leftX && this.y + this.radius >= _topY && this.y - this.radius <= _bottomY) {
	          this.vx = -this.vx;
	          this.ping.play();
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render(svg, paddle1, paddle2) {

	      this.wallCollision();
	      this.paddleCollision(paddle1, paddle2);

	      this.x += this.vx;
	      this.y += this.vy;

	      var ball = document.createElementNS(_settings.SVG_NS, 'circle');

	      ball.setAttributeNS(null, 'cx', this.x);
	      ball.setAttributeNS(null, 'cy', this.y);
	      ball.setAttributeNS(null, 'r', this.radius);
	      ball.setAttributeNS(null, 'fill', 'white');

	      svg.appendChild(ball);

	      var rightGoal = this.x + this.radius >= this.boardWidth;
	      var leftGoal = this.x - this.radius <= 0;

	      if (rightGoal) {
	        this.direction = -1;
	        this.scoreGoal(paddle1);
	      } else if (leftGoal) {
	        this.direction = 1;
	        this.scoreGoal(paddle2);
	      }
	    }
	  }]);

	  return ExtraBall;
	}();

	exports.default = ExtraBall;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Fireball = function () {
	  function Fireball(radius, boardWidth, boardHeight, aggressor) {
	    _classCallCheck(this, Fireball);

	    this.radius = radius;
	    this.boardWidth = boardWidth;
	    this.boardHeight = boardHeight;
	    this.aggressor = aggressor;
	    this.ping = new Audio('../public/sounds/pong-03.wav');
	    this.renderCount = 0;
	    if (aggressor.x < this.boardWidth / 2) {
	      this.direction = 1;
	    } else if (aggressor.x > 1 + this.boardWidth / 2) {
	      this.direction = -1;
	    }
	    this.fire();
	  }

	  _createClass(Fireball, [{
	    key: 'fire',
	    value: function fire() {

	      if (this.aggressor.x < 290) {
	        this.x = this.aggressor.x + (this.aggressor.width + 1);
	      } else {
	        this.x = this.aggressor.x - (this.aggressor.width - 1);
	      }

	      this.y = this.aggressor.y + this.aggressor.height / 2;

	      this.vy = 0;

	      this.vx = this.direction * (6 - Math.abs(this.vy));
	    }
	  }, {
	    key: 'flash',
	    value: function flash(fireball) {
	      if (this.renderCount % 8 === 0 && !this.renderCount % 16 === 0) {
	        fireball.setAttributeNS(null, 'fill', 'yellow');
	      }
	      if (this.renderCount % 16 === 0) {
	        fireball.setAttributeNS(null, 'fill', 'white');
	      }
	    }
	  }, {
	    key: 'leaveBoard',
	    value: function leaveBoard() {
	      this.radius = 0;
	      this.direction = 0;
	      this.x = 290;
	      this.y = -10;
	    }
	  }, {
	    key: 'wallCollision',
	    value: function wallCollision() {
	      var hitLeft = this.x - this.radius <= 0;
	      var hitRight = this.x + this.radius >= this.boardWidth;
	      var hitTop = this.y - this.radius <= 0;
	      var hitBottom = this.y + this.radius >= this.boardHeight;

	      if (hitLeft || hitRight) {
	        this.vx = -this.vx;
	      } else if (hitTop || hitBottom) {
	        this.vy = -this.vy;
	      }
	    }
	  }, {
	    key: 'paddleCollisionCheck',
	    value: function paddleCollisionCheck(player, playerCoordinates) {

	      if (player === 'player2') {

	        var paddle = playerCoordinates;

	        var _paddle = _slicedToArray(paddle, 4),
	            leftX = _paddle[0],
	            rightX = _paddle[1],
	            topY = _paddle[2],
	            bottomY = _paddle[3];

	        if (this.x + this.radius >= leftX && this.x + this.radius <= rightX && this.y + this.radius >= topY && this.y - this.radius <= bottomY) {
	          return true;
	        }
	      } else if (player === 'player1') {

	        var _paddle2 = playerCoordinates;

	        var _paddle3 = _slicedToArray(_paddle2, 4),
	            _leftX = _paddle3[0],
	            _rightX = _paddle3[1],
	            _topY = _paddle3[2],
	            _bottomY = _paddle3[3];

	        if (this.x - this.radius >= _leftX && this.x - this.radius <= _rightX && this.y + this.radius >= _topY && this.y - this.radius <= _bottomY) {
	          return true;
	        }
	      }
	    }
	  }, {
	    key: 'paddleCollision',
	    value: function paddleCollision(player1, player2) {
	      if (this.vx > 0) {

	        if (this.paddleCollisionCheck('player2', player2.coordinates(player2.x, player2.y, player2.width, player2.height)) && player2.height > 30) {
	          player2.height -= 2;
	          this.leaveBoard();
	        }
	      } else {
	        if (this.paddleCollisionCheck('player1', player1.coordinates(player1.x, player1.y, player1.width, player1.height)) && player1.height > 30) {
	          player1.height -= 2;
	          this.leaveBoard();
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render(svg, paddle1, paddle2) {

	      this.renderCount++;

	      this.wallCollision();
	      this.paddleCollision(paddle1, paddle2);

	      this.x += this.vx;
	      this.y += this.vy;

	      var fireball = document.createElementNS(_settings.SVG_NS, 'circle');

	      fireball.setAttributeNS(null, 'cx', this.x);
	      fireball.setAttributeNS(null, 'cy', this.y);
	      fireball.setAttributeNS(null, 'r', this.radius);
	      fireball.setAttributeNS(null, 'fill', 'red');

	      svg.appendChild(fireball);

	      this.flash(fireball);

	      var hitRightWall = this.x + this.radius >= this.boardWidth;
	      var hitLeftWall = this.x - this.radius <= 0;

	      if (hitRightWall) {
	        this.leaveBoard();
	      } else if (hitLeftWall) {
	        this.leaveBoard();
	      }
	    }
	  }]);

	  return Fireball;
	}();

	exports.default = Fireball;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LifeOrb = function () {
	  function LifeOrb(radius, boardWidth, boardHeight, aggressor) {
	    _classCallCheck(this, LifeOrb);

	    this.radius = radius;
	    this.boardWidth = boardWidth;
	    this.boardHeight = boardHeight;
	    this.aggressor = aggressor;

	    if (aggressor.x < 290) {
	      this.direction = 1;
	    } else if (aggressor.x > 291) {
	      this.direction = -1;
	    }

	    this.fire();
	    this.ping = new Audio('../public/sounds/pong-03.wav');
	  }

	  _createClass(LifeOrb, [{
	    key: 'fire',
	    value: function fire() {

	      if (this.aggressor.x < 290) {
	        this.x = this.aggressor.x + (this.aggressor.width + 1);
	      } else {
	        this.x = this.aggressor.x - (this.aggressor.width - 1);
	      }

	      this.y = this.aggressor.y + this.aggressor.height / 2;

	      this.vy = 0;

	      while (this.vy === 0) {

	        //Generates a number between -5 and 5
	        this.vy = Math.floor(Math.random() * 10 - 5);
	      }

	      this.vx = this.direction * (6 - Math.abs(this.vy));
	    }
	  }, {
	    key: 'leaveBoard',
	    value: function leaveBoard() {
	      this.radius = 0;
	      this.direction = 0;
	      this.x = 290;
	      this.y = -10;
	    }
	  }, {
	    key: 'wallCollision',
	    value: function wallCollision() {
	      var hitLeft = this.x - this.radius <= 0;
	      var hitRight = this.x + this.radius >= this.boardWidth;
	      var hitTop = this.y - this.radius <= 0;
	      var hitBottom = this.y + this.radius >= this.boardHeight;

	      if (hitLeft || hitRight) {
	        this.vx = -this.vx;
	      } else if (hitTop || hitBottom) {
	        this.vy = -this.vy;
	      }
	    }
	  }, {
	    key: 'paddleCollisionCheck',
	    value: function paddleCollisionCheck(player, playerCoordinates) {

	      if (player === 'player2') {

	        var paddle = playerCoordinates;

	        var _paddle = _slicedToArray(paddle, 4),
	            leftX = _paddle[0],
	            rightX = _paddle[1],
	            topY = _paddle[2],
	            bottomY = _paddle[3];

	        if (this.x + this.radius >= leftX && this.x + this.radius <= rightX && this.y + this.radius >= topY && this.y - this.radius <= bottomY) {
	          return true;
	        }
	      } else if (player === 'player1') {

	        var _paddle2 = playerCoordinates;

	        var _paddle3 = _slicedToArray(_paddle2, 4),
	            _leftX = _paddle3[0],
	            _rightX = _paddle3[1],
	            _topY = _paddle3[2],
	            _bottomY = _paddle3[3];

	        if (this.x - this.radius >= _leftX && this.x - this.radius <= _rightX && this.y + this.radius >= _topY && this.y - this.radius <= _bottomY) {
	          return true;
	        }
	      }
	    }
	  }, {
	    key: 'paddleCollision',
	    value: function paddleCollision(player1, player2) {
	      if (this.vx > 0) {

	        if (this.paddleCollisionCheck('player2', player2.coordinates(player2.x, player2.y, player2.width, player2.height)) && player2.height < _settings.GAMESETTINGS.paddleHeight) {
	          player2.height += 2;
	          this.leaveBoard();
	        }
	      } else {
	        if (this.paddleCollisionCheck('player1', player1.coordinates(player1.x, player1.y, player1.width, player1.height)) && player1.height < _settings.GAMESETTINGS.paddleHeight) {
	          player1.height += 2;
	          this.leaveBoard();
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render(svg, paddle1, paddle2) {

	      this.wallCollision();
	      this.paddleCollision(paddle1, paddle2);

	      this.x += this.vx;
	      this.y += this.vy;

	      var lifeOrb = document.createElementNS(_settings.SVG_NS, 'circle');

	      lifeOrb.setAttributeNS(null, 'cx', this.x);
	      lifeOrb.setAttributeNS(null, 'cy', this.y);
	      lifeOrb.setAttributeNS(null, 'r', this.radius);
	      lifeOrb.setAttributeNS(null, 'fill', 'none');
	      lifeOrb.setAttributeNS(null, 'stroke', 'aquamarine');

	      svg.appendChild(lifeOrb);

	      var hitRightWall = this.x + this.radius >= this.boardWidth;
	      var hitLeftWall = this.x - this.radius <= 0;

	      if (hitRightWall) {
	        this.leaveBoard();
	      } else if (hitLeftWall) {
	        this.leaveBoard();
	      }
	    }
	  }]);

	  return LifeOrb;
	}();

	exports.default = LifeOrb;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Score = function () {
		function Score(x, y, size) {
			_classCallCheck(this, Score);

			this.x = x;
			this.y = y;
			this.size = size;
		}

		_createClass(Score, [{
			key: 'render',
			value: function render(svg, playerScore) {
				var score = document.createElementNS(_settings.SVG_NS, 'text');

				score.setAttributeNS(null, 'x', this.x);
				score.setAttributeNS(null, 'y', this.y);
				score.setAttributeNS(null, 'fill', 'white');
				score.setAttributeNS(null, 'font-size', '40');
				score.setAttributeNS(null, 'font-family', 'Silkscreen Web');
				score.innerHTML = playerScore;

				svg.appendChild(score);
			}
		}]);

		return Score;
	}();

	exports.default = Score;

/***/ }
/******/ ]);