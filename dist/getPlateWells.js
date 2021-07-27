"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlate = exports.getPlateWells = void 0;
const plates_1 = __importDefault(require("./plates"));
class PlateWells {
    constructor() {
        this.getPlateWells = (plateSize, wellType) => {
            let plate = this.plates[plateSize];
            switch (wellType) {
                case "padded":
                    return plate.padded_well_ids;
                case "unpadded":
                    return plate.well_ids;
                case "number":
                    return plate.well_numbers;
                case "unique_columns":
                    return plate.columns;
                case "unique_rows":
                    return plate.rows;
                case "all_columns":
                    let all_cols = [];
                    plate.rows.forEach((row) => {
                        plate.columns.forEach((col) => {
                            all_cols.push(col);
                        });
                    });
                    return all_cols;
                case "all_rows":
                    let all_rows = [];
                    plate.rows.forEach((row) => {
                        plate.columns.forEach((col) => {
                            all_rows.push(row);
                        });
                    });
                    return all_rows;
                default:
                    return [];
            }
        };
        this.getPlate = (plateSize) => {
            let plate = this.plates[plateSize];
            let all_columns = this.getPlateWells(plateSize, "all_columns");
            let all_rows = this.getPlateWells(plateSize, "all_rows");
            let all_numbers = this.getPlateWells(plateSize, "number");
            let plate_aoo = [];
            all_numbers.forEach((num, idx) => {
                plate_aoo.push({
                    padded: plate.padded_well_ids[idx],
                    unpadded: plate.well_ids[idx],
                    number: plate.well_numbers[idx],
                    row: all_rows[idx],
                    column: all_columns[idx],
                });
            });
            return plate_aoo;
        };
        this.plates = plates_1.default;
    }
}
exports.default = PlateWells;
let plateWellsClass = new PlateWells();
let getPlateWells = plateWellsClass.getPlateWells;
exports.getPlateWells = getPlateWells;
let getPlate = plateWellsClass.getPlate;
exports.getPlate = getPlate;
