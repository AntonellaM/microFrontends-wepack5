(window["webpackJsonphome"] = window["webpackJsonphome"] || []).push([["src_ProductCarousel_jsx"],{

/***/ "./src/ProductCard.jsx":
/*!*****************************!*\
  !*** ./src/ProductCard.jsx ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?60ba");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "?bbf6");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.makeStyles)({
  media: {
    height: 140
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  name,
  image,
  price
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {
    title: name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardMedia, {
    className: classes.media,
    image: image,
    title: name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
    variant: "h6"
  }, "$", price)));
});

/***/ }),

/***/ "./src/ProductCarousel.jsx":
/*!*********************************!*\
  !*** ./src/ProductCarousel.jsx ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [used] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?60ba");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "?bbf6");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fruit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fruit */ "./src/fruit.js");
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductCard */ "./src/ProductCard.jsx");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
  container: true
}, _fruit__WEBPACK_IMPORTED_MODULE_2__.default.slice(0, 4).map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
  item: true,
  sm: 3,
  key: product.name
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_3__.default, product)))));

/***/ }),

/***/ "./src/fruit.js":
/*!**********************!*\
  !*** ./src/fruit.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  name: 'Apple',
  image: 'http://localhost:3001/fruit/apple.jpg',
  price: 1
}, {
  name: 'Bananas',
  image: 'http://localhost:3001/fruit/banana.jpg',
  price: 3
}, {
  name: 'Canteloupe',
  image: 'http://localhost:3001/fruit/canteloupe.jpg',
  price: 3
}, {
  name: 'Grapes',
  image: 'http://localhost:3001/fruit/grapes.jpg',
  price: 3
}, {
  name: 'Mango',
  image: 'http://localhost:3001/fruit/mango.jpg',
  price: 2
}, {
  name: 'Orange',
  image: 'http://localhost:3001/fruit/orange.jpg',
  price: 1
}, {
  name: 'Pear',
  image: 'http://localhost:3001/fruit/pear.jpg',
  price: 1
}, {
  name: 'Plum',
  image: 'http://localhost:3001/fruit/plum.jpg',
  price: 1
}, {
  name: 'Strawberries',
  image: 'http://localhost:3001/fruit/strawberry.jpg',
  price: 1
}, {
  name: 'Watermelon',
  image: 'http://localhost:3001/fruit/watermelon.jpg',
  price: 5
}]);

/***/ })

}]);
//# sourceMappingURL=src_ProductCarousel_jsx.js.map