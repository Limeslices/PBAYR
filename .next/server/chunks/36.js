exports.id = 36;
exports.ids = [36];
exports.modules = {

/***/ 1544:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "Footer_content__8dWV_",
	"design": "Footer_design__SUs5f",
	"main": "Footer_main__UYsaG",
	"leading": "Footer_leading__uMMOA",
	"trailing": "Footer_trailing__tbR3O",
	"margin": "Footer_margin__v5_vp"
};


/***/ }),

/***/ 725:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "FooterTop_wrapper__sKMVf",
	"big": "FooterTop_big__jPBW_",
	"flex": "FooterTop_flex__qCpP2",
	"btn": "FooterTop_btn__d4RDQ"
};


/***/ }),

/***/ 1380:
/***/ ((module) => {

// Exports
module.exports = {
	"hr": "Hr_hr__UUdgI"
};


/***/ }),

/***/ 3307:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__z4qWC",
	"footer": "Layout_footer__bKkxe"
};


/***/ }),

/***/ 522:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Sidebar_nav__rw18i",
	"nav__link": "Sidebar_nav__link__3Zewv",
	"flex": "Sidebar_flex__8UT0D",
	"closeButton": "Sidebar_closeButton__C_mj5"
};


/***/ }),

/***/ 7169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Layout.jsx
var Layout = __webpack_require__(6770);
// EXTERNAL MODULE: ./styles/FooterTop.module.scss
var FooterTop_module = __webpack_require__(725);
var FooterTop_module_default = /*#__PURE__*/__webpack_require__.n(FooterTop_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/FooterTop.jsx





const FooterTop = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (FooterTop_module_default()).wrapper,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
            footer: true,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (FooterTop_module_default()).flex,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/donate",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (FooterTop_module_default()).btn,
                            children: "Donate Now"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (FooterTop_module_default()).big,
                        children: "Let's Continue the Blessings Together & Be The Change !"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_FooterTop = (FooterTop);

// EXTERNAL MODULE: ./styles/Footer.module.scss
var Footer_module = __webpack_require__(1544);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.jsx






const Footer = ({ noTop  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).margin,
        children: [
            !noTop && /*#__PURE__*/ jsx_runtime_.jsx(components_FooterTop, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default()).main,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (Footer_module_default()).leading,
                                    children: "LOGO"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: (Footer_module_default()).design,
                                    children: [
                                        "Design by",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "http://www.kohlbyrd.com/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Kohl Byrd"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default()).nav,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (Footer_module_default()).leading,
                                    children: "Navigation"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (Footer_module_default()).trailing,
                                    children: "Home"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (Footer_module_default()).trailing,
                                    children: "About Us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (Footer_module_default()).trailing,
                                    children: "Our Work"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (Footer_module_default()).trailing,
                                    children: "Contact Us"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Footer_module_default()).donate,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Footer_module_default()).leading,
                                children: "Donate"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Footer_module_default()).contact,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Footer_module_default()).trailing,
                                children: "Contact"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);


/***/ }),

/***/ 6076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Hr_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1380);
/* harmony import */ var _styles_Hr_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Hr_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Hr = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
        className: (_styles_Hr_module_scss__WEBPACK_IMPORTED_MODULE_2___default().hr)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hr);


/***/ }),

/***/ 6770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3307);
/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Layout = ({ footer , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container)} ${footer ? (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer) : ""}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 8111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(522);
/* harmony import */ var _styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const Sidebar = ({ open , close  })=>{
    if (open) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: (_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: close,
                    className: (_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().closeButton),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "/static/x.svg",
                        layout: "fill"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().flex),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/about",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: close,
                                className: (_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav__link),
                                children: "About Us"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/#upcoming",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: close,
                                className: (_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav__link),
                                children: "Upcoming"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/donate",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: close,
                                className: (_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav__link),
                                children: "Donate"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/#contact",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: close,
                                className: (_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav__link),
                                children: "Contact Us"
                            })
                        })
                    ]
                })
            ]
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ })

};
;