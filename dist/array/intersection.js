"use strict";
exports.__esModule = true;
var isObjectOrFunction_1 = require("../tests/isObjectOrFunction");
function intersection(arr1, arr2) {
    var table = createTableFromArray(arr1);
    var common = [];
    var element;
    for (var j = 0; j < arr2.length; j++) {
        element = arr2[j];
        if (!foundInTable(table, element)) {
            continue;
        }
        common.push(element);
    }
    return common;
}
exports.intersection = intersection;
/////////////////////
function createTableFromArray(arr) {
    var table = {};
    var el;
    for (var i = 0; i < arr.length; i++) {
        el = arr[i];
        if (!isObjectOrFunction_1.isObjectOrFunction(el)) {
            table[String(el)] = el;
        }
        else if (isObjectOrFunction_1.isObjectOrFunction(el)) {
            table[JSON.stringify(el)] = el;
        }
    }
    return table;
}
function foundInTable(table, el) {
    if (!isObjectOrFunction_1.isObjectOrFunction(el)) {
        return !!table[String(el)];
    }
    else {
        return !!table[JSON.stringify(el)];
    }
}
