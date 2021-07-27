"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlate = exports.getPlateWells = exports.wellIDFormatter = void 0;
const wellIDFormatter_1 = __importDefault(require("./wellIDFormatter"));
exports.wellIDFormatter = wellIDFormatter_1.default;
const getPlateWells_1 = require("./getPlateWells");
Object.defineProperty(exports, "getPlateWells", { enumerable: true, get: function () { return getPlateWells_1.getPlateWells; } });
Object.defineProperty(exports, "getPlate", { enumerable: true, get: function () { return getPlateWells_1.getPlate; } });
