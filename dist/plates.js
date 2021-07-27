"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wellUnitBasics_1 = require("./wellUnitBasics");
const createWellIDs = (rows, cols) => {
    let nested_well_ids = rows.map((row) => cols.map((col) => `${row}${col}`));
    // @ts-ignore
    let well_ids = nested_well_ids.flat();
    return well_ids;
};
const plt_6 = {
    id: "plt_6",
    well_count: 6,
    rows: wellUnitBasics_1.rows.filter((row) => row <= "B" && row.length === 1),
    columns: wellUnitBasics_1.cols.filter((col) => +col <= 3),
    padded_columns: wellUnitBasics_1.padded_cols.filter((col) => +col <= 3),
    well_numbers: wellUnitBasics_1.well_nums.filter((num) => +num <= 6),
    dims: [2, 3],
    well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "B" && row.length === 1), wellUnitBasics_1.cols.filter((col) => +col <= 3)),
    padded_well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "B" && row.length === 1), wellUnitBasics_1.padded_cols.filter((col) => +col <= 3)),
};
//PCR strip
const plt_8 = {
    id: "plt_8",
    well_count: 8,
    rows: wellUnitBasics_1.rows.filter((row) => row <= "A" && row.length === 1),
    columns: wellUnitBasics_1.cols.filter((col) => +col <= 8),
    padded_columns: wellUnitBasics_1.padded_cols.filter((col) => +col <= 8),
    well_numbers: wellUnitBasics_1.well_nums.filter((num) => +num <= 8),
    dims: [1, 8],
    well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "A" && row.length === 1), wellUnitBasics_1.cols.filter((col) => +col <= 8)),
    padded_well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "A" && row.length === 1), wellUnitBasics_1.padded_cols.filter((col) => +col <= 8)),
};
const plt_12 = {
    id: "plt_12",
    well_count: 12,
    rows: wellUnitBasics_1.rows.filter((row) => row <= "C" && row.length === 1),
    columns: wellUnitBasics_1.cols.filter((col) => +col <= 4),
    padded_columns: wellUnitBasics_1.padded_cols.filter((col) => +col <= 4),
    well_numbers: wellUnitBasics_1.well_nums.filter((num) => +num <= 12),
    dims: [3, 4],
    well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "C" && row.length === 1), wellUnitBasics_1.cols.filter((col) => +col <= 4)),
    padded_well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "C" && row.length === 1), wellUnitBasics_1.padded_cols.filter((col) => +col <= 4)),
};
const plt_24 = {
    id: "plt_24",
    well_count: 24,
    rows: wellUnitBasics_1.rows.filter((row) => row <= "D" && row.length === 1),
    columns: wellUnitBasics_1.cols.filter((col) => +col <= 6),
    padded_columns: wellUnitBasics_1.padded_cols.filter((col) => +col <= 6),
    well_numbers: wellUnitBasics_1.well_nums.filter((num) => +num <= 24),
    dims: [4, 6],
    well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "D" && row.length === 1), wellUnitBasics_1.cols.filter((col) => +col <= 6)),
    padded_well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "D" && row.length === 1), wellUnitBasics_1.padded_cols.filter((col) => +col <= 6)),
};
const plt_48 = {
    id: "plt_48",
    well_count: 48,
    rows: wellUnitBasics_1.rows.filter((row) => row <= "F" && row.length === 1),
    columns: wellUnitBasics_1.cols.filter((col) => +col <= 8),
    padded_columns: wellUnitBasics_1.padded_cols.filter((col) => +col <= 8),
    well_numbers: wellUnitBasics_1.well_nums.filter((num) => +num <= 48),
    dims: [6, 8],
    well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "F" && row.length === 1), wellUnitBasics_1.cols.filter((col) => +col <= 8)),
    padded_well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "F" && row.length === 1), wellUnitBasics_1.padded_cols.filter((col) => +col <= 8)),
};
const plt_96 = {
    id: "plt_96",
    well_count: 96,
    rows: wellUnitBasics_1.rows.filter((row) => row <= "H" && row.length === 1),
    columns: wellUnitBasics_1.cols.filter((col) => +col <= 12),
    padded_columns: wellUnitBasics_1.padded_cols.filter((col) => +col <= 12),
    well_numbers: wellUnitBasics_1.well_nums.filter((num) => +num <= 96),
    dims: [8, 12],
    well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "H" && row.length === 1), wellUnitBasics_1.cols.filter((col) => +col <= 12)),
    padded_well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "H" && row.length === 1), wellUnitBasics_1.padded_cols.filter((col) => +col <= 12)),
};
const plt_384 = {
    id: "plt_384",
    well_count: 384,
    rows: wellUnitBasics_1.rows.filter((row) => row <= "P" && row.length === 1),
    columns: wellUnitBasics_1.cols.filter((col) => +col <= 24),
    padded_columns: wellUnitBasics_1.padded_cols.filter((col) => +col <= 24),
    well_numbers: wellUnitBasics_1.well_nums.filter((num) => +num <= 384),
    dims: [16, 24],
    well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "P" && row.length === 1), wellUnitBasics_1.cols.filter((col) => +col <= 24)),
    padded_well_ids: createWellIDs(wellUnitBasics_1.rows.filter((row) => row <= "P" && row.length === 1), wellUnitBasics_1.padded_cols.filter((col) => +col <= 24)),
};
const plt_1 = {
    id: "plt_1",
    well_count: 1,
    rows: ["A"],
    columns: ["1"],
    padded_columns: ["01"],
    well_numbers: ["1"],
    dims: [1, 1],
    well_ids: ["A1"],
    padded_well_ids: ["A01"],
};
const plateLayouts = {
    1: plt_1,
    6: plt_6,
    8: plt_8,
    12: plt_12,
    24: plt_24,
    48: plt_48,
    96: plt_96,
    384: plt_384,
};
exports.default = plateLayouts;
