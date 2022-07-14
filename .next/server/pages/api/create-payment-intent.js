"use strict";
(() => {
var exports = {};
exports.id = 144;
exports.ids = [144];
exports.modules = {

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 1757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// This is your test secret API key.
const stripe = __webpack_require__(8174)("sk_test_51LH8qnEuupSx6N55OawFDZ2jx1R4qzX0kQ9zDdmwGwG8W9VLpVphdxpnJJ7pv9mpwCoYFOHwb9X8stYhPlRzXsuE0060gC23Pq");
async function handler(req, res) {
    const { price  } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: price,
        currency: "usd",
        automatic_payment_methods: {
            enabled: true
        }
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    });
};
;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1757));
module.exports = __webpack_exports__;

})();