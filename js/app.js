/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@swup/fade-theme/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@swup/fade-theme/lib/index.js ***!
  \****************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_551__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_551__);
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
/******/ 	__nested_webpack_require_551__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_551__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_551__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_551__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_551__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_551__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_551__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_551__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_551__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_551__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_551__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_551__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_551__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_551__(__nested_webpack_require_551__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_4015__) {

"use strict";


var _index = __nested_webpack_require_4015__(1);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _index2.default; // this is here for webpack to expose SwupTheme as window.SwupTheme

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_4391__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _theme = __nested_webpack_require_4391__(2);

var _theme2 = _interopRequireDefault(_theme);

var _index = __nested_webpack_require_4391__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FadeTheme = function (_Theme) {
	_inherits(FadeTheme, _Theme);

	function FadeTheme(options) {
		_classCallCheck(this, FadeTheme);

		var _this = _possibleConstructorReturn(this, (FadeTheme.__proto__ || Object.getPrototypeOf(FadeTheme)).call(this));

		_this.name = 'FadeTheme';


		var defaultOptions = {
			mainElement: '#swup'
		};

		_this.options = _extends({}, defaultOptions, options);
		return _this;
	}

	_createClass(FadeTheme, [{
		key: 'mount',
		value: function mount() {
			this.applyStyles(_index2.default);
			this.addClassName(this.options.mainElement, 'main');
		}
	}]);

	return FadeTheme;
}(_theme2.default);

exports.default = FadeTheme;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function () {
	function Theme() {
		var _this = this;

		_classCallCheck(this, Theme);

		this._addedStyleElements = [];
		this._addedHTMLContent = [];
		this._classNameAddedToElements = [];

		this._addClassNameToElement = function () {
			_this._classNameAddedToElements.forEach(function (item) {
				var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
				elements.forEach(function (element) {
					element.classList.add('swup-transition-' + item.name);
				});
			});
		};

		this.isSwupPlugin = true;
	}

	_createClass(Theme, [{
		key: '_beforeMount',
		value: function _beforeMount() {
			// save original and replace animationSelector option
			this._originalAnimationSelectorOption = String(this.swup.options.animationSelector);
			this.swup.options.animationSelector = '[class*="swup-transition-"]';

			// add classes after each content replace
			this.swup.on('contentReplaced', this._addClassNameToElement);
		}
	}, {
		key: '_afterUnmount',
		value: function _afterUnmount() {
			// reset animationSelector option
			this.swup.options.animationSelector = this._originalAnimationSelectorOption;

			// remove added styles
			this._addedStyleElements.forEach(function (element) {
				element.outerHTML = '';
				element = null;
			});

			// remove added HTML
			this._addedHTMLContent.forEach(function (element) {
				element.outerHTML = '';
				element = null;
			});

			// remove added classnames
			this._classNameAddedToElements.forEach(function (item) {
				var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
				elements.forEach(function (element) {
					element.className.split(' ').forEach(function (classItem) {
						if (new RegExp('^swup-transition-').test(classItem)) {
							element.classList.remove(classItem);
						}
					});
				});
			});

			this.swup.off('contentReplaced', this._addClassNameToElement);
		}
	}, {
		key: 'mount',
		value: function mount() {
			// this is mount method rewritten by class extending
			// and is executed when swup is enabled with theme
		}
	}, {
		key: 'unmount',
		value: function unmount() {
			// this is unmount method rewritten by class extending
			// and is executed when swup with theme is disabled
		}
	}, {
		key: 'applyStyles',
		value: function applyStyles(styles) {
			var head = document.head;
			var style = document.createElement('style');

			style.setAttribute('data-swup-theme', '');
			style.appendChild(document.createTextNode(styles));

			this._addedStyleElements.push(style);
			head.prepend(style);
		}
	}, {
		key: 'applyHTML',
		value: function applyHTML(content) {
			var element = document.createElement('div');
			element.innerHTML = content;
			this._addedHTMLContent.push(element);
			document.body.appendChild(element);
		}
	}, {
		key: 'addClassName',
		value: function addClassName(selector, name) {
			// save so it can be later removed
			this._classNameAddedToElements.push({ selector: selector, name: name });

			// add class the first time
			this._addClassNameToElement();
		}

		// this is here so we can tell if plugin was created by extending this class

	}]);

	return Theme;
}();

exports.default = Theme;

/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_11272__) {

exports = module.exports = __nested_webpack_require_11272__(4)(false);
// Module
exports.push([module.i, ".swup-transition-main {\n    opacity: 1;\n    transition: opacity .4s;\n}\n\nhtml.is-animating .swup-transition-main {\n    opacity: 0;\n}", ""]);



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swup */ "./node_modules/swup/dist/Swup.modern.js");
/* harmony import */ var _swup_preload_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swup/preload-plugin */ "./node_modules/@swup/preload-plugin/dist/index.modern.js");
/* harmony import */ var _swup_fade_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swup/fade-theme */ "./node_modules/@swup/fade-theme/lib/index.js");
/* harmony import */ var _swup_fade_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swup_fade_theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swup_progress_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swup/progress-plugin */ "./node_modules/@swup/progress-plugin/dist/index.modern.js");




var swup = new swup__WEBPACK_IMPORTED_MODULE_0__["default"]({
  plugins: [new _swup_preload_plugin__WEBPACK_IMPORTED_MODULE_1__["default"](), new (_swup_fade_theme__WEBPACK_IMPORTED_MODULE_2___default())(), new _swup_progress_plugin__WEBPACK_IMPORTED_MODULE_3__["default"]({
    className: 'swup-progress-bar',
    transition: 200,
    delay: 300,
    initialValue: 0.25,
    hideImmediately: false
  })]
});

// Navigation toggle
window.addEventListener('load', function () {
  var main_navigation = document.querySelector('#primary-menu');
  document.querySelector('#primary-menu-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    main_navigation.classList.toggle('hidden');
  });
});

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/editor-style.css":
/*!****************************************!*\
  !*** ./resources/css/editor-style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@swup/plugin/dist/index.modern.js":
/*!********************************************************!*\
  !*** ./node_modules/@swup/plugin/dist/index.modern.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
const r=r=>String(r).split(".").concat(["0","0"]).slice(0,3).join(".");class n{constructor(){this.isSwupPlugin=!0,this.requires={},this.swup=void 0,this.version=void 0}mount(){}unmount(){}_beforeMount(){if(!this.name)throw new Error("You must define a name of plugin when creating a class.")}_afterUnmount(){}_checkRequirements(){return"object"!=typeof this.requires||Object.entries(this.requires).forEach(([n,e])=>{if(!function(n,e,t){const i=function(r,n){var e;if("swup"===r)return null!=(e=n.version)?e:"";{var t;const e=n.findPlugin(r);return null!=(t=null==e?void 0:e.version)?t:""}}(n,t);return!!i&&((n,e)=>e.every(e=>{const[,t,i]=e.match(/^([\D]+)?(.*)$/)||[];var s,o;return((r,n)=>{const e={"":r=>0===r,">":r=>r>0,">=":r=>r>=0,"<":r=>r<0,"<=":r=>r<=0};return(e[n]||e[""])(r)})((o=i,s=r(s=n),o=r(o),s.localeCompare(o,void 0,{numeric:!0})),t||">=")}))(i,e)}(n,e=Array.isArray(e)?e:[e],this.swup)){const r=`${n} ${e.join(", ")}`;throw new Error(`Plugin version mismatch: ${this.name} requires ${r}`)}}),!0}}
//# sourceMappingURL=index.modern.js.map


/***/ }),

/***/ "./node_modules/@swup/preload-plugin/dist/index.modern.js":
/*!****************************************************************!*\
  !*** ./node_modules/@swup/preload-plugin/dist/index.modern.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _swup_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swup/plugin */ "./node_modules/@swup/plugin/dist/index.modern.js");
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swup */ "./node_modules/swup/dist/Swup.modern.js");
function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},a.apply(this,arguments)}class i extends _swup_plugin__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(e={}){super(),this.name="PreloadPlugin",this.requires={swup:">=3.0.0"},this.preloadPromises=new Map,this.defaults={throttle:5},this.onContentReplaced=()=>{this.swup.preloadPages()},this.onMouseEnter=e=>{e.target===e.delegateTarget&&this.deviceSupportsHover()&&(this.swup.triggerEvent("hoverLink",e),this.preloadLink(e.delegateTarget))},this.onTouchStart=e=>{this.deviceSupportsHover()||this.preloadLink(e.delegateTarget)},this.preloadPage=e=>{const s=this.swup,{url:o}=swup__WEBPACK_IMPORTED_MODULE_1__.Location.fromUrl(e);return new Promise((e,t)=>{s.cache.exists(o)?e(s.cache.getPage(o)):(0,swup__WEBPACK_IMPORTED_MODULE_1__.fetch)({url:o,headers:s.options.requestHeaders},r=>{if(500===r.status)return s.triggerEvent("serverError"),void t(o);const i=s.getPageData(r);if(!i||!i.blocks.length)return void t(o);const n=a({},i,{url:o});s.cache.cacheUrl(n),s.triggerEvent("pagePreloaded"),e(n)})})},this.preloadPages=()=>{(0,swup__WEBPACK_IMPORTED_MODULE_1__.queryAll)("[data-swup-preload]").forEach(e=>{this.shouldIgnoreVisit(e.href,{el:e})||this.swup.preloadPage(e.href)})},this.options=a({},this.defaults,e)}mount(){const e=this.swup;e.options.cache?(e._handlers.pagePreloaded=[],e._handlers.hoverLink=[],e.preloadPage=this.preloadPage,e.preloadPages=this.preloadPages,this.originalSwupFetchPage=e.fetchPage.bind(e),e.fetchPage=this.fetchPreloadedPage.bind(this),e.delegatedListeners.mouseenter=e.delegateEvent(e.options.linkSelector,"mouseenter",this.onMouseEnter.bind(this),{capture:!0}),e.delegatedListeners.touchstart=e.delegateEvent(e.options.linkSelector,"touchstart",this.onTouchStart.bind(this),{capture:!0}),e.preloadPages(),e.on("contentReplaced",this.onContentReplaced),e.preloadPage((0,swup__WEBPACK_IMPORTED_MODULE_1__.getCurrentUrl)())):console.warn("PreloadPlugin: swup cache needs to be enabled for preloading")}unmount(){const e=this.swup;e.options.cache&&(this.preloadPromises=null,e._handlers.pagePreloaded=null,e._handlers.hoverLink=null,e.preloadPage=null,e.preloadPages=null,this.originalSwupFetchPage&&(e.fetchPage=this.originalSwupFetchPage,this.originalSwupFetchPage=null),e.delegatedListeners.mouseenter.destroy(),e.delegatedListeners.touchstart.destroy(),e.off("contentReplaced",this.onContentReplaced))}shouldIgnoreVisit(e,{el:t}={}){return this.swup.shouldIgnoreVisit(e,{el:t})}deviceSupportsHover(){return window.matchMedia("(hover: hover)").matches}preloadLink(e){const r=this.swup,{url:s}=swup__WEBPACK_IMPORTED_MODULE_1__.Location.fromElement(e);if(this.shouldIgnoreVisit(e.href,{el:e}))return;if(s===(0,swup__WEBPACK_IMPORTED_MODULE_1__.getCurrentUrl)())return;if(r.cache.exists(s))return;if(this.preloadPromises.has(s))return;if(this.preloadPromises.size>=this.options.throttle)return;const a=this.preloadPage(s);a.url=s,a.catch(()=>{}).finally(()=>{this.preloadPromises.delete(s)}),this.preloadPromises.set(s,a)}fetchPreloadedPage(e){const{url:t}=e,r=this.preloadPromises.get(t);return null!=r?r:this.originalSwupFetchPage(e)}}
//# sourceMappingURL=index.modern.js.map


/***/ }),

/***/ "./node_modules/@swup/progress-plugin/dist/index.modern.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@swup/progress-plugin/dist/index.modern.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _swup_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swup/plugin */ "./node_modules/@swup/plugin/dist/index.modern.js");
function s(){return s=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},s.apply(this,arguments)}class e{constructor({className:t="progress-bar",styleAttr:s="data-progressbar-styles",animationDuration:e=300,minValue:i=.1,initialValue:r=.25,trickleValue:n=.03}={}){this.styleElement=null,this.progressElement=null,this.value=0,this.visible=!1,this.hiding=!1,this.trickleInterval=null,this.trickle=()=>{const t=Math.random()*this.trickleValue;this.setValue(this.value+t)},this.className=t,this.styleAttr=s,this.animationDuration=e,this.minValue=i,this.initialValue=r,this.trickleValue=n,this.styleElement=this.createStyleElement(),this.progressElement=this.createProgressElement()}get defaultStyles(){return`\n\t\t.${this.className} {\n\t\t\t\tposition: fixed;\n\t\t\t\tdisplay: block;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\theight: 3px;\n\t\t\t\tbackground-color: black;\n\t\t\t\tz-index: 9999;\n\t\t\t\ttransition:\n\t\t\t\t\twidth ${this.animationDuration}ms ease-out,\n\t\t\t\t\topacity ${this.animationDuration/2}ms ${this.animationDuration/2}ms ease-in;\n\t\t\t\ttransform: translate3d(0, 0, 0);\n\t\t\t}\n\t\t`}show(){this.visible||(this.visible=!0,this.installStyleElement(),this.installProgressElement(),this.startTrickling())}hide(){this.visible&&!this.hiding&&(this.hiding=!0,this.fadeProgressElement(()=>{this.uninstallProgressElement(),this.stopTrickling(),this.visible=!1,this.hiding=!1}))}setValue(t){this.value=Math.min(1,Math.max(this.minValue,t)),this.refresh()}installStyleElement(){document.head.insertBefore(this.styleElement,document.head.firstChild)}installProgressElement(){this.progressElement.style.width="0%",this.progressElement.style.opacity="1",document.documentElement.insertBefore(this.progressElement,document.body),this.progressElement.scrollTop=0,this.setValue(Math.random()*this.initialValue)}fadeProgressElement(t){this.progressElement.style.opacity="0",setTimeout(t,1.5*this.animationDuration)}uninstallProgressElement(){this.progressElement.parentNode&&document.documentElement.removeChild(this.progressElement)}startTrickling(){this.trickleInterval||(this.trickleInterval=window.setInterval(this.trickle,this.animationDuration))}stopTrickling(){window.clearInterval(this.trickleInterval),delete this.trickleInterval}refresh(){requestAnimationFrame(()=>{this.progressElement.style.width=100*this.value+"%"})}createStyleElement(){const t=document.createElement("style");return t.setAttribute(this.styleAttr,""),t.textContent=this.defaultStyles,t}createProgressElement(){const t=document.createElement("div");return t.className=this.className,t}}class i extends _swup_plugin__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(t={}){super(),this.name="SwupProgressPlugin",this.startShowingProgress=()=>{this.progressBar.setValue(0),this.showProgressBarAfterDelay()},this.stopShowingProgress=()=>{this.progressBar.setValue(1),this.options.hideImmediately?this.hideProgressBar():this.finishAnimationAndHideProgressBar()},this.showProgressBar=()=>{this.cancelHideProgressBarTimeout(),this.progressBar.show()},this.showProgressBarAfterDelay=()=>{this.cancelShowProgressBarTimeout(),this.cancelHideProgressBarTimeout(),this.showProgressBarTimeout=window.setTimeout(this.showProgressBar,this.options.delay)},this.hideProgressBar=()=>{this.cancelShowProgressBarTimeout(),this.progressBar.hide()},this.finishAnimationAndHideProgressBar=()=>{this.cancelShowProgressBarTimeout(),this.hideProgressBarTimeout=window.setTimeout(this.hideProgressBar,this.options.transition)},this.cancelShowProgressBarTimeout=()=>{window.clearTimeout(this.showProgressBarTimeout),delete this.showProgressBarTimeout},this.cancelHideProgressBarTimeout=()=>{window.clearTimeout(this.hideProgressBarTimeout),delete this.hideProgressBarTimeout},this.options=s({},{className:"swup-progress-bar",delay:300,transition:void 0,minValue:void 0,initialValue:void 0,hideImmediately:!0},t),this.showProgressBarTimeout=null,this.hideProgressBarTimeout=null,this.progressBar=new e({className:this.options.className,animationDuration:this.options.transition,minValue:this.options.minValue,initialValue:this.options.initialValue})}mount(){this.swup.on("transitionStart",this.startShowingProgress),this.swup.on("contentReplaced",this.stopShowingProgress)}unmount(){this.swup.off("transitionStart",this.startShowingProgress),this.swup.off("contentReplaced",this.stopShowingProgress)}}
//# sourceMappingURL=index.modern.js.map


/***/ }),

/***/ "./node_modules/delegate-it/index.js":
/*!*******************************************!*\
  !*** ./node_modules/delegate-it/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Keeps track of raw listeners added to the base elements to avoid duplication */
const ledger = new WeakMap();
function editLedger(wanted, baseElement, callback, setup) {
    var _a, _b;
    if (!wanted && !ledger.has(baseElement)) {
        return false;
    }
    const elementMap = (_a = ledger.get(baseElement)) !== null && _a !== void 0 ? _a : new WeakMap();
    ledger.set(baseElement, elementMap);
    if (!wanted && !ledger.has(baseElement)) {
        return false;
    }
    const setups = (_b = elementMap.get(callback)) !== null && _b !== void 0 ? _b : new Set();
    elementMap.set(callback, setups);
    const existed = setups.has(setup);
    if (wanted) {
        setups.add(setup);
    }
    else {
        setups.delete(setup);
    }
    return existed && wanted;
}
function isEventTarget(elements) {
    return typeof elements.addEventListener === 'function';
}
function safeClosest(event, selector) {
    let target = event.target;
    if (target instanceof Text) {
        target = target.parentElement;
    }
    if (target instanceof Element && event.currentTarget instanceof Element) {
        // `.closest()` may match ancestors of `currentTarget` but we only need its children
        const closest = target.closest(selector);
        if (closest && event.currentTarget.contains(closest)) {
            return closest;
        }
    }
}
// This type isn't exported as a declaration, so it needs to be duplicated above
function delegate(base, selector, type, callback, options) {
    // Handle Selector-based usage
    if (typeof base === 'string') {
        base = document.querySelectorAll(base);
    }
    // Handle Array-like based usage
    if (!isEventTarget(base)) {
        const subscriptions = Array.prototype.map.call(base, (element) => delegate(element, selector, type, callback, options));
        return {
            destroy() {
                for (const subscription of subscriptions) {
                    subscription.destroy();
                }
            },
        };
    }
    // `document` should never be the base, it's just an easy way to define "global event listeners"
    const baseElement = base instanceof Document ? base.documentElement : base;
    // Handle the regular Element usage
    const capture = Boolean(typeof options === 'object' ? options.capture : options);
    const listenerFn = (event) => {
        const delegateTarget = safeClosest(event, selector);
        if (delegateTarget) {
            event.delegateTarget = delegateTarget;
            callback.call(baseElement, event);
        }
    };
    // Drop unsupported `once` option https://github.com/fregante/delegate-it/pull/28#discussion_r863467939
    if (typeof options === 'object') {
        delete options.once;
    }
    const setup = JSON.stringify({ selector, type, capture });
    const isAlreadyListening = editLedger(true, baseElement, callback, setup);
    const delegateSubscription = {
        destroy() {
            baseElement.removeEventListener(type, listenerFn, options);
            editLedger(false, baseElement, callback, setup);
        },
    };
    if (!isAlreadyListening) {
        baseElement.addEventListener(type, listenerFn, options);
    }
    return delegateSubscription;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delegate);


/***/ }),

/***/ "./node_modules/swup/dist/Swup.modern.js":
/*!***********************************************!*\
  !*** ./node_modules/swup/dist/Swup.modern.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Location": () => (/* binding */ m),
/* harmony export */   "classify": () => (/* binding */ n),
/* harmony export */   "cleanupAnimationClasses": () => (/* binding */ w),
/* harmony export */   "createHistoryRecord": () => (/* binding */ s),
/* harmony export */   "default": () => (/* binding */ j),
/* harmony export */   "delegateEvent": () => (/* binding */ a),
/* harmony export */   "escapeCssIdentifier": () => (/* binding */ h),
/* harmony export */   "fetch": () => (/* binding */ g),
/* harmony export */   "getCurrentUrl": () => (/* binding */ i),
/* harmony export */   "getDataFromHtml": () => (/* binding */ p),
/* harmony export */   "markSwupElements": () => (/* binding */ f),
/* harmony export */   "nextTick": () => (/* binding */ c),
/* harmony export */   "query": () => (/* binding */ l),
/* harmony export */   "queryAll": () => (/* binding */ u),
/* harmony export */   "toMs": () => (/* binding */ d),
/* harmony export */   "updateHistoryRecord": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var delegate_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! delegate-it */ "./node_modules/delegate-it/index.js");
function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},e.apply(this,arguments)}const n=(t,e)=>String(t).toLowerCase().replace(/[\s/_.]+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,"")||e||"",i=({hash:t}={})=>location.pathname+location.search+(t?location.hash:""),s=(t,n={})=>{const s=e({url:t=t||i({hash:!0}),random:Math.random(),source:"swup"},n);history.pushState(s,"",t)},o=(t=null,n={})=>{t=t||i({hash:!0});const s=e({},history.state,{url:t,random:Math.random(),source:"swup"},n);history.replaceState(s,"",t)},r=["base"],a=(e,n,i,s={})=>{let{base:o=document}=s,a=function(t,e){if(null==t)return{};var n,i,s={},o=Object.keys(t);for(i=0;i<o.length;i++)e.indexOf(n=o[i])>=0||(s[n]=t[n]);return s}(s,r);const l=(0,delegate_it__WEBPACK_IMPORTED_MODULE_0__["default"])(o,e,n,i,a);return{destroy:()=>l.destroy()}},l=(t,e=document)=>e.querySelector(t),u=(t,e=document)=>Array.from(e.querySelectorAll(t)),c=t=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{t()})})},h=t=>window.CSS&&window.CSS.escape?CSS.escape(t):t,d=t=>1e3*Number(t.slice(0,-1).replace(",",".")),p=(t,e)=>{var n,i;let s=document.createElement("html");s.innerHTML=t;let o=[];e.forEach(t=>{if(null==l(t,s))return console.warn(`[swup] Container ${t} not found on page.`),null;u(t).length!==u(t,s).length&&console.warn("[swup] Mismatched number of containers found on new page."),u(t).forEach((e,n)=>{u(t,s)[n].setAttribute("data-swup",String(o.length)),o.push(u(t,s)[n].outerHTML)})});const r=(null==(n=l("title",s))?void 0:n.innerText)||"",a=null==(i=l("body",s))?void 0:i.className;return s.innerHTML="",s=null,{title:r,pageClass:a,blocks:o,originalContent:t}},g=(t,n)=>{const i={url:window.location.pathname+window.location.search,method:"GET",data:null,headers:{}},{url:s,method:o,headers:r,data:a}=e({},i,t),l=new XMLHttpRequest;return l.onreadystatechange=function(){4===l.readyState&&n(l)},l.open(o,s,!0),Object.entries(r).forEach(([t,e])=>{l.setRequestHeader(t,e)}),l.send(a),l};class m extends URL{constructor(t,e=document.baseURI){super(t.toString(),e)}get url(){return this.pathname+this.search}static fromElement(t){const e=t.getAttribute("href")||t.getAttribute("xlink:href");return new m(e)}static fromUrl(t){return new m(t)}}const f=(t,e)=>{let n=0;e.forEach(e=>{null==l(e,t)?console.warn(`[swup] Container ${e} not found on page.`):u(e).forEach((i,s)=>{u(e,t)[s].setAttribute("data-swup",String(n)),n++})})},v=t=>/^to-/.test(t)||["is-changing","is-rendering","is-popstate"].includes(t),w=()=>{const t=document.documentElement.className.split(" ").filter(v);document.documentElement.classList.remove(...t)};class E{constructor(t){this.pages={},this.last=null,this.swup=void 0,this.swup=t}getCacheUrl(t){return this.swup.resolveUrl(m.fromUrl(t).url)}cacheUrl(t){t.url=this.getCacheUrl(t.url),t.url in this.pages==0&&(this.pages[t.url]=t),t.responseURL=this.getCacheUrl(t.responseURL),this.last=this.pages[t.url],this.swup.log(`Cache (${Object.keys(this.pages).length})`,this.pages)}getPage(t){return t=this.getCacheUrl(t),this.pages[t]}getCurrentPage(){return this.getPage(i())}exists(t){return(t=this.getCacheUrl(t))in this.pages}empty(){this.pages={},this.last=null,this.swup.log("Cache cleared")}remove(t){delete this.pages[this.getCacheUrl(t)]}}const P=function({event:t,skipTransition:e}={}){if(e)return this.triggerEvent("transitionEnd",t),this.cleanupAnimationClasses(),[Promise.resolve()];c(()=>{this.triggerEvent("animationInStart"),document.documentElement.classList.remove("is-animating")});const n=this.getAnimationPromises("in");return Promise.all(n).then(()=>{this.triggerEvent("animationInDone"),this.triggerEvent("transitionEnd",t),this.cleanupAnimationClasses()}),n},S=t=>t?("#"===t.charAt(0)&&(t=t.substring(1)),t=decodeURIComponent(t),t=h(t),l(`#${t}`)||l(`a[name='${t}']`)):null;let b="transition",k="transitionend",U="animation",y="animationend";function L(t){const e=this.options.animationSelector;if(!1===e)return[Promise.resolve()];const n=u(e,document.body);return n.length?n.map(t=>function(t,e,n=null){const{type:i,timeout:s,propCount:o}=function(t,e=null){const n=window.getComputedStyle(t),i=`${b}Duration`,s=`${U}Delay`,o=`${U}Duration`,r=n[`${b}Delay`].split(", "),a=(n[i]||"").split(", "),l=C(r,a),u=(n[s]||"").split(", "),c=(n[o]||"").split(", "),h=C(u,c);let d="",p=0,g=0;return"transition"===e?l>0&&(d="transition",p=l,g=a.length):"animation"===e?h>0&&(d="animation",p=h,g=c.length):(p=Math.max(l,h),d=p>0?l>h?"transition":"animation":null,g=d?"transition"===d?a.length:c.length:0),{type:d,timeout:p,propCount:g}}(t,n);return i&&s?new Promise(e=>{const n="transition"===i?k:y,r=performance.now();let a=0;const l=()=>{t.removeEventListener(n,u),e()},u=e=>{if(e.target===t){if(!(t=>!!t.elapsedTime)(e))throw new Error("Not a transition or animation event.");(performance.now()-r)/1e3<e.elapsedTime||++a>=o&&l()}};setTimeout(()=>{a<o&&l()},s+1),t.addEventListener(n,u)}):(console.warn(`[swup] No CSS transition duration defined for element of selector ${e}`),Promise.resolve())}(t,e)):(console.warn(`[swup] No animated elements found by selector ${e}`),[Promise.resolve()])}function C(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((e,n)=>d(e)+d(t[n])))}void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(b="WebkitTransition",k="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(U="WebkitAnimation",y="webkitAnimationEnd");const T=function(t){const n=p(t.responseText,this.options.containers);return n?e({},n,{responseURL:t.responseURL||window.location.href}):(console.warn("[swup] Received page is invalid."),null)};function H(t){const n=this.options.requestHeaders,{url:i}=t;return this.cache.exists(i)?(this.triggerEvent("pageRetrievedFromCache"),Promise.resolve(this.cache.getPage(i))):new Promise((s,o)=>{g(e({},t,{headers:n}),t=>{if(500===t.status)return this.triggerEvent("serverError"),void o(i);const n=this.getPageData(t);if(!n||!n.blocks.length)return void o(i);const r=e({},n,{url:i});this.cache.cacheUrl(r),this.triggerEvent("pageLoaded"),s(r)})})}const R=function({event:t,skipTransition:e}={}){const n=t instanceof PopStateEvent;if(e)return this.triggerEvent("animationSkipped"),[Promise.resolve()];this.triggerEvent("animationOutStart"),document.documentElement.classList.add("is-changing","is-leaving","is-animating"),n&&document.documentElement.classList.add("is-popstate");const i=this.getAnimationPromises("out");return Promise.all(i).then(()=>{this.triggerEvent("animationOutDone")}),i};function A(t){const{url:e}=t;this.shouldIgnoreVisit(e)?window.location.href=e:this.performPageLoad(t)}function $(t){const{url:e,event:o,customTransition:r}=null!=t?t:{},a=o instanceof PopStateEvent,l=this.shouldSkipTransition({url:e,event:o});this.triggerEvent("transitionStart",o),this.updateTransition(i(),e,r),null!=r&&document.documentElement.classList.add(`to-${n(r)}`);const u=this.leavePage({event:o,skipTransition:l}),c=this.fetchPage(t);a||s(e+(this.scrollToElement||"")),this.currentPageUrl=i(),Promise.all([c,...u]).then(([t])=>{this.renderPage(t,{event:o,skipTransition:l})}).catch(t=>{void 0!==t&&(this.options.skipPopStateHandling=()=>(window.location=t,!0),history.go(-1))})}const _=function({blocks:t,title:e}){return t.forEach((t,e)=>{document.body.querySelector(`[data-swup="${e}"]`).outerHTML=t}),document.title=e,Promise.resolve()};function O(t,e){const n=this._handlers[t];n?n.push(e):console.warn(`Unsupported event ${t}.`)}function x(t,e){if(t&&e){const n=this._handlers[t];n.includes(e)?this._handlers[t]=n.filter(t=>t!==e):console.warn(`Handler for event '${t}' not found.`)}else t?this._handlers[t]=[]:Object.keys(this._handlers).forEach(t=>{this._handlers[t]=[]})}function q(t,e){this._handlers[t].forEach(t=>{try{t(e)}catch(t){console.error(t)}});const n=new CustomEvent(`swup:${t}`,{detail:t});document.dispatchEvent(n)}const D=function(t){var e;if(null==(e=t)?void 0:e.isSwupPlugin){if(t.swup=this,!t._checkRequirements||t._checkRequirements())return t._beforeMount&&t._beforeMount(),t.mount(),this.plugins.push(t),this.plugins}else console.error("Not a swup plugin instance",t)};function I(t){const e=this.findPlugin(t);if(e)return e.unmount(),e._afterUnmount&&e._afterUnmount(),this.plugins=this.plugins.filter(t=>t!==e),this.plugins;console.error("No such plugin",e)}function M(t){return this.plugins.find(e=>e===t||e.name===t)}const N=function(t,{event:n,skipTransition:s}={}){if(document.documentElement.classList.remove("is-leaving"),!this.isSameResolvedUrl(i(),t.url))return;const{url:r}=m.fromUrl(t.responseURL);this.isSameResolvedUrl(i(),r)||(this.cache.cacheUrl(e({},t,{url:r})),this.currentPageUrl=i(),o(r)),s||document.documentElement.classList.add("is-rendering"),this.triggerEvent("willReplaceContent",n),this.replaceContent(t).then(()=>{this.triggerEvent("contentReplaced",n),this.triggerEvent("pageView",n),this.options.cache||this.cache.empty(),this.enterPage({event:n,skipTransition:s}),this.scrollToElement=null})};function W(t,e,n){this.transition={from:t,to:e,custom:n}}function V({event:t}){return!(!(t instanceof PopStateEvent)||this.options.animateHistoryBrowsing)}class j{constructor(t={}){this.version="3.0.5",this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],openPageInNewTab:[],pageLoaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],serverError:[],transitionStart:[],transitionEnd:[],willReplaceContent:[]},this.scrollToElement=null,this.options=void 0,this.plugins=[],this.transition={},this.cache=void 0,this.currentPageUrl=i(),this.delegatedListeners={},this.boundPopStateHandler=void 0,this.loadPage=A,this.performPageLoad=$,this.leavePage=R,this.renderPage=N,this.replaceContent=_,this.enterPage=P,this.triggerEvent=q,this.delegateEvent=a,this.on=O,this.off=x,this.updateTransition=W,this.shouldSkipTransition=V,this.getAnimationPromises=L,this.getPageData=T,this.fetchPage=H,this.getAnchorElement=S,this.log=()=>{},this.use=D,this.unuse=I,this.findPlugin=M,this.getCurrentUrl=i,this.cleanupAnimationClasses=w,this.defaults={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',cache:!0,containers:["#swup"],ignoreVisit:(t,{el:e}={})=>!(null==e||!e.closest("[data-no-swup]")),linkSelector:"a[href]",plugins:[],resolveUrl:t=>t,requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},skipPopStateHandling:t=>{var e;return"swup"!==(null==(e=t.state)?void 0:e.source)}},this.options=e({},this.defaults,t),this.boundPopStateHandler=this.popStateHandler.bind(this),this.cache=new E(this),this.enable()}enable(){"undefined"!=typeof Promise?(this.delegatedListeners.click=a(this.options.linkSelector,"click",this.linkClickHandler.bind(this)),window.addEventListener("popstate",this.boundPopStateHandler),f(document.documentElement,this.options.containers),this.options.plugins.forEach(t=>this.use(t)),o(),this.triggerEvent("enabled"),document.documentElement.classList.add("swup-enabled"),this.triggerEvent("pageView")):console.warn("Promise is not supported")}destroy(){this.delegatedListeners.click.destroy(),window.removeEventListener("popstate",this.boundPopStateHandler),this.cache.empty(),this.options.plugins.forEach(t=>{this.unuse(t)}),u("[data-swup]").forEach(t=>{t.removeAttribute("data-swup")}),this.off(),this.triggerEvent("disabled"),document.documentElement.classList.remove("swup-enabled")}shouldIgnoreVisit(t,{el:e,event:n}={}){const{origin:i,url:s,hash:o}=m.fromUrl(t);return i!==window.location.origin||!(!e||!this.triggerWillOpenNewWindow(e))||!!this.options.ignoreVisit(s+o,{el:e,event:n})}linkClickHandler(t){const e=t.delegateTarget,{href:n,url:s,hash:o}=m.fromElement(e);if(this.shouldIgnoreVisit(n,{el:e,event:t}))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return void this.triggerEvent("openPageInNewTab",t);if(0!==t.button)return;if(this.triggerEvent("clickLink",t),t.preventDefault(),!s||s===i())return void this.handleLinkToSamePage(s,o,t);if(this.isSameResolvedUrl(s,i()))return;this.scrollToElement=o||null;const r=e.getAttribute("data-swup-transition")||void 0;this.performPageLoad({url:s,customTransition:r})}handleLinkToSamePage(t,e,n){if(e){if(this.triggerEvent("samePageWithHash",n),!S(e))return console.warn(`Element for offset not found (#${e})`);o(t+e)}else this.triggerEvent("samePage",n)}triggerWillOpenNewWindow(t){return!!t.matches('[download], [target="_blank"]')}popStateHandler(t){var e,n;if(this.options.skipPopStateHandling(t))return;if(this.isSameResolvedUrl(i(),this.currentPageUrl))return;const s=null!=(e=null==(n=t.state)?void 0:n.url)?e:location.href;if(this.shouldIgnoreVisit(s,{event:t}))return;const{url:o,hash:r}=m.fromUrl(s);r?this.scrollToElement=r:t.preventDefault(),this.triggerEvent("popState",t),this.options.animateHistoryBrowsing||(document.documentElement.classList.remove("is-animating"),w()),this.performPageLoad({url:o,event:t})}resolveUrl(t){if("function"!=typeof this.options.resolveUrl)return console.warn("[swup] options.resolveUrl expects a callback function."),t;const e=this.options.resolveUrl(t);return e&&"string"==typeof e?e.startsWith("//")||e.startsWith("http")?(console.warn("[swup] options.resolveUrl needs to return a relative url"),t):e:(console.warn("[swup] options.resolveUrl needs to return a url"),t)}isSameResolvedUrl(t,e){return this.resolveUrl(t)===this.resolveUrl(e)}}
//# sourceMappingURL=Swup.modern.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/editor-style": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgoose_theme"] = self["webpackChunkgoose_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/editor-style","css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/editor-style","css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/editor-style","css/app"], () => (__webpack_require__("./resources/css/editor-style.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;