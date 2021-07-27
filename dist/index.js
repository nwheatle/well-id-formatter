"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wellIDFormatter_1 = __importDefault(require("./wellIDFormatter"));
const getPlateWells_1 = __importDefault(require("./getPlateWells"));
// let getPlate = plateWellsClass.getPlate;
let plateWellsClass = new getPlateWells_1.default();
let getPlateWells = plateWellsClass.getPlateWells;
let getPlate = plateWellsClass.getPlate;
module.exports = {
    wellIDFormatter: wellIDFormatter_1.default,
    getPlate,
    getPlateWells,
};
exports.default = wellIDFormatter_1.default;
