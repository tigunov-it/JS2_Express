/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/styles.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/styles.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nheader {\\n  height: 100px;\\n  background-color: blueviolet;\\n  width: 100%;\\n  display: flex;\\n  position: relative;\\n}\\n\\n.head {\\n  vertical-align: middle;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: 80%;\\n}\\n\\nh1 {\\n  font-size: 50px;\\n  color: white;\\n}\\n\\n.btn-cart {\\n  padding: 5px 10px;\\n}\\n\\n.products {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n}\\n\\n.contact_us {\\n  display: flex;\\n  justify-content: center;\\n  padding-top: 20px;\\n  flex-wrap: wrap;\\n}\\n\\n.form div {\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 5px;\\n}\\n\\n.form button {\\n  display: block;\\n  padding: 5px 10px;\\n  margin-bottom: 5px;\\n  margin: 0 auto;\\n}\\n\\n.product-item {\\n  width: 310px;\\n  max-height: 500px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin: 15px;\\n  border: 1px solid #cccccc;\\n}\\n.product-item:hover {\\n  box-shadow: 12px 13px 22px 6px rgba(34, 60, 80, 0.15);\\n}\\n\\n.product_img {\\n  width: 100%;\\n  height: 200px;\\n}\\n\\n.product_info {\\n  color: blue;\\n  font-size: large;\\n  margin-top: 20px;\\n  border-top: 1px solid #cccccc;\\n}\\n\\n.buy-btn {\\n  width: 309px;\\n  height: 50px;\\n  margin-top: 10px;\\n  color: white;\\n  background-color: darkslateblue;\\n  font-size: 16px;\\n  text-transform: uppercase;\\n}\\n\\n.buy-btn:hover {\\n  background-color: #4095c6;\\n}\\n\\n.buy-btn:focus {\\n  outline: none;\\n}\\n\\n.cart {\\n  width: 30vw;\\n  margin: 10px;\\n  border: 1px solid black;\\n  border-radius: 8px;\\n  background-color: #fff;\\n  padding: 5px;\\n  position: absolute;\\n  top: 65%;\\n  left: 65%;\\n}\\n\\n.cart_item {\\n  border: 1px solid grey;\\n  margin-bottom: 5px;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 5px;\\n}\\n\\n.cart_item button {\\n  align-self: center;\\n  margin-right: 5px;\\n  padding: 2px;\\n}\\n\\n.cartData {\\n  margin-left: 5px;\\n}\\n\\n.cart_img {\\n  width: 100px;\\n  height: 50px;\\n  align-self: center;\\n}\\n\\n#cartPrice {\\n  display: block;\\n  margin-top: 15px;\\n}\\n\\n.red {\\n  border: 2px solid red;\\n}\\n\\n.head_content {\\n  display: flex;\\n}\\n\\n.find_content {\\n  margin-right: 20px;\\n}\\n\\n.find_content input {\\n  width: 100%;\\n  padding: 5px;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js2_express/./src/public/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://js2_express/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/public/css/styles.css":
/*!***********************************!*\
  !*** ./src/public/css/styles.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/css/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://js2_express/./src/public/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js2_express/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/public/index.js":
/*!*****************************!*\
  !*** ./src/public/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/header */ \"./src/public/js/header.js\");\n/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/products */ \"./src/public/js/products.js\");\n/* harmony import */ var _js_products__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_products__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main */ \"./src/public/js/main.js\");\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/styles.css */ \"./src/public/css/styles.css\");\n// import './js/vue'\n\n\n\n\n\n\n//# sourceURL=webpack://js2_express/./src/public/index.js?");

/***/ }),

/***/ "./src/public/js/header.js":
/*!*********************************!*\
  !*** ./src/public/js/header.js ***!
  \*********************************/
/***/ (() => {

eval("Vue.component('header-comp',{\n    props:['cartitems','addproduct'],\n    template: ` <div class=\"head\">\n                    <h1>eShop</h1>\n                    <search></search>\n                    <div class=\"head_content\">\n                        <cart :cartitems = 'cartitems' :addproduct='addproduct'></cart>\n                    </div>\n                </div>\n`\n})\n\nVue.component('search',{\n    data(){\n        return {\n            searchLine:'',\n        }\n    },\n    template: `\n    <div class=\"find_content\">\n        <input type=\"text\" v-model='searchLine'  @input='$parent.$emit(\"filtergoods\", searchLine)' placeholder='Найти товар...'>\n    </div>\n    `\n})\n\nVue.component('cart',{\n    props:['cartitems','addproduct'],\n    data(){\n        return {\n            isVisibleCart: false,\n        }\n    },\n    methods: {\n        calculateCart() {\n            let cartPrice = 0;\n            let cart = this.$parent.$parent.cartGoods[1];\n            cart.forEach(el => cartPrice += el.quantity * el.price)\n            return cartPrice;\n        },\n        deleteItem(id) {\n            let remove = this.$parent.$parent.remove;\n            let cart = this.$parent.$parent.cartGoods[1];\n            let find = cart.find(el => el.id_product === id);\n\n            remove(`/api/cart/${id}`,find);\n        //    const curElement = this.cartitems.find(el => el.id_product == id);\n        //    if (curElement.count == 1) {\n        //        this.cartitems.splice(this.cartitems.indexOf(curElement), 1);\n        //    } else {\n        //         --curElement.count;\n        //    }\n        }\n    },\n    template: `\n    <div class=\"cart_content\">\n        <button class=\"btn-cart\" type=\"button\" @click='isVisibleCart = !isVisibleCart'>Корзина</button>\n        <div class=\"cart\" v-if='isVisibleCart'>\n            <p v-if='!cartitems[1].length'>Пусто</p>\n            <div class='cart_item' v-for=\"item of cartitems[1]\" :key='item.id_product'>\n                <img :src=\"item.img\" alt=\"Some img\" class='cart_img'>\n                <div class='cart_item_info'>\n                    <p class='cart_item_name'>{{item.product_name}}</p>\n                    <p type='number' class='cart_item_count' @input='$parent.$emit(\"addproduct\",item)'>Количество: {{ item.quantity }}</p>\n                    <p class='cart_item_price'>Стоимость: {{item.quantity * item.price}}</p>\n                </div>\n                <button @click='deleteItem(item.id_product)'>Удалить</button>\n            </div>\n            <p v-if='cartitems[1].length'>Итого: {{calculateCart()}}</p>\n        </div>\n    </div>\n    `\n})\n\n\n//# sourceURL=webpack://js2_express/./src/public/js/header.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/***/ (() => {

eval("const app = new Vue(\n    {\n        el: '#app',\n        data: {\n            products: [],\n            api: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/',\n            cartData: '',     \n            showedProducts:[],\n            cartGoods:[],\n        },\n        methods: {\n            fetchProducts(url){\n                return fetch(url)\n                    .then(answer => answer.json())\n                    .catch(error => console.log(error));\n            },\n            filterGoods(searchLine){\n                if (searchLine) {\n                    this.showedProducts = this.products.filter(value => value.product_name.toLowerCase().includes(searchLine.toLowerCase()))\n                } else {\n                    this.showedProducts = this.products;\n                }\n            },\n            postJson(url, data){\n                console.log(url)\n\n                return fetch(url, {\n                    method: 'POST',\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(data)\n                })\n                    .then(result => result.json())\n                    .catch(error => {\n                        console.log(error)\n                    })\n            },\n            putJson(url, data){\n                console.log(url)\n                return fetch(url, {\n                    method: 'PUT',\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(data)\n                })\n                    .then(result => result.json())\n                    .catch(error => {\n                        console.log(error)\n                    })\n            },\n            remove(url, data){\n                return fetch(url, {\n                    method: 'DELETE',\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(data)\n                })\n                    .then(result => {\n                         result.json()\n                         this.fetchProducts('/api/cart')\n                        .then(data => {\n                            console.log(data)\n                            this.cartGoods.push({amount: data.amount, countGoods: data.countGoods});\n                            this.cartGoods[1] = data.contents;\n                        });\n                    })\n                    .catch(error => {\n                        console.log(error)\n                    })\n            },\n            addProduct(item){\n                console.log(this.cartGoods[1])\n\n                let find = this.cartGoods[1].find(el => el.id_product === item.id_product);\n                if(find){\n                    this.putJson(`/api/cart/${find.id_product}`, {quantity: 1})\n                        .then(data => {\n                            if(data.result === 1){\n                                find.quantity++\n                            }\n                        })\n                } else {\n                    const prod = Object.assign({quantity: 1}, item);\n                    this.postJson(`/api/cart`, prod)\n                        .then(data => {\n                            if(data.result === 1){\n                                this.cartGoods[1].push(prod);\n                            }\n                        })\n                }\n            }\n        },\n        mounted() {\n            this.fetchProducts('/api/products')\n                .then(data => {\n                    this.products = [...data];\n                    this.showedProducts = this.products;\n                });\n            this.fetchProducts('/api/cart')\n                .then(data => {\n                    this.cartGoods.push({amount: data.amount, countGoods: data.countGoods});\n                    this.cartGoods.push(data.contents);\n            });\n            \n        },\n    }   \n)\n\n//# sourceURL=webpack://js2_express/./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/js/products.js":
/*!***********************************!*\
  !*** ./src/public/js/products.js ***!
  \***********************************/
/***/ (() => {

eval("Vue.component('products-comp',{\n    props:['showed','addproduct'],\n    template: ` <div class=\"products\">\n                    <div v-for=\"product of showed\" :key='product.id_product' class=\"product-item\">\n                        <img :src=\"product.img\" alt=\"some img\" class='product_img'>\n                        <div class='product_info'>\n                            <div>\n                                <h3 class='product_name'>{{product.product_name}}</h3>\n                                <p class='product_price'>Стоимость: {{product.price}} рублей</p>\n                            </div>\n                            <button class=\"buy-btn\" :id=\"product.id_product\" @click='$emit(\"addproduct\",product)'>Купить</button>\n                        </div>\n                    </div>\n                </div>\n`\n})\n\n//# sourceURL=webpack://js2_express/./src/public/js/products.js?");

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
/******/ 			id: moduleId,
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/public/index.js");
/******/ 	
/******/ })()
;