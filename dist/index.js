"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wellFormatter_1 = __importDefault(require("./wellFormatter"));
console.log(wellFormatter_1.default("A1", "padded"));
module.exports = {
    wellIDFormatter: wellFormatter_1.default,
};
