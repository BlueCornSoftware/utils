"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomInclusiveWholeNumber_1 = require("./randomInclusiveWholeNumber");
exports.randomExclusiveWholeNumber = function (upperLimit, lowerLimit) {
    if (lowerLimit === void 0) { lowerLimit = 0; }
    return randomInclusiveWholeNumber_1.randomInclusiveWholeNumber(upperLimit - 1, lowerLimit + 1);
};
//# sourceMappingURL=randomExclusiveWholeNumber.js.map