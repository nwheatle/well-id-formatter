"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wellIDFormatter_1 = __importDefault(require("./wellIDFormatter"));
// let s = wellIDFormatter("A13", "number", 96);
let s = wellIDFormatter_1.default("A09", "number", 6);
console.log(s);
