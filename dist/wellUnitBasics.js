"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colRegex = exports.rowRegex = exports.padded_only_well_ids = exports.padded_well_ids = exports.well_ids = exports.well_nums = exports.padded_cols = exports.cols = exports.rows = void 0;
// prettier-ignore
exports.rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF"];
exports.cols = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
].map((col) => `${col}`);
exports.padded_cols = exports.cols.map((col) => +col <= 9 ? `0${col}` : `${col}`);
exports.well_nums = new Array(384)
    .fill(1)
    .map((d, i) => `${i + 1}`);
// @ts-ignore
exports.well_ids = exports.rows
    .map((row) => exports.cols.map((col) => `${row}${col}`))
    .flat();
// @ts-ignore
exports.padded_well_ids = exports.rows
    .map((row) => exports.cols.map((col) => (+col <= 9 ? `${row}0${col}` : `${row}${col}`)))
    .flat();
// @ts-ignore
var padded_only_well_id_var = exports.rows
    .map((row) => exports.cols.map((col) => (+col <= 9 ? `${row}0${col}` : null)))
    .flat();
exports.padded_only_well_ids = padded_only_well_id_var.filter((d) => d);
exports.rowRegex = new RegExp("^[A-Za-z]{1,2}");
exports.colRegex = new RegExp("\\d{1,2}$");
