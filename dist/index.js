"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wellIDFormatter_1 = __importDefault(require("./wellIDFormatter"));
console.log(wellIDFormatter_1.default("A1", "padded"));
module.exports = {
    wellIDFormatter: wellIDFormatter_1.default,
};
exports.default = wellIDFormatter_1.default;
