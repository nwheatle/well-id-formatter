"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromNumberToPadded = exports.fromNumberToNumber = exports.fromNumberToUnpadded = exports.fromNumberToCol = exports.fromNumberToRow = exports.fromNumberToRowCol = exports.fromPaddedToNumber = exports.fromPaddedToCol = exports.fromPaddedToRow = exports.fromPaddedToUnpadded = exports.fromUnpaddedToNumber = exports.fromUnpaddedToCol = exports.fromUnpaddedToRow = exports.fromUnpaddedToUnpadded = exports.fromUnpaddedToPadded = void 0;
const wellUnitBasics_1 = require("./wellUnitBasics");
//from Unpadded
function fromUnpaddedToPadded(wells, platelayout = null) {
    if (platelayout) {
        let nums = fromUnpaddedToNumber(wells, platelayout);
        let num_str = nums.map((d) => (d ? d : ""));
        let rowcols = fromNumberToRowCol(num_str, platelayout);
        let padded = rowcols.map((val) => {
            if (val == null) {
                return null;
            }
            else {
                if (platelayout.rows.includes(val.row) &&
                    platelayout.columns.includes(val.col)) {
                    return +val.col <= 9
                        ? `${val.row}0${val.col}`
                        : `${val.row}${val.col}`;
                }
                else {
                    return null;
                }
            }
        });
        return padded;
    }
    else {
        let rowcols = wells.map((well) => {
            let rowMatch = well.match(wellUnitBasics_1.rowRegex);
            let colMatch = well.match(wellUnitBasics_1.colRegex);
            if (rowMatch && colMatch) {
                return { row: rowMatch[0], col: `${+colMatch[0]}` };
            }
            else {
                return null;
            }
        });
        let padded = rowcols.map((val) => {
            if (val == null) {
                return null;
            }
            else {
                return +val.col === 0 || +val.col >= 10
                    ? `${val.row}${val.col}`
                    : `${val.row}0${val.col}`;
            }
        });
        return padded;
    }
}
exports.fromUnpaddedToPadded = fromUnpaddedToPadded;
function fromUnpaddedToUnpadded(wells, platelayout = null) {
    if (platelayout) {
        let numbers = fromUnpaddedToNumber(wells, platelayout);
        let num_str = numbers.map((d) => (d ? d : ""));
        let unpadded = fromNumberToUnpadded(num_str, platelayout);
        return unpadded;
    }
    else {
        let rowcols = wells.map((well) => {
            let rowMatch = well.match(wellUnitBasics_1.rowRegex);
            let colMatch = well.match(wellUnitBasics_1.colRegex);
            if (rowMatch && colMatch) {
                return { row: rowMatch[0], col: `${+colMatch[0]}` };
            }
            else {
                return null;
            }
        });
        let padded = rowcols.map((val) => {
            if (val == null) {
                return null;
            }
            else {
                return `${val.row}${+val.col}`;
            }
        });
        return padded;
    }
}
exports.fromUnpaddedToUnpadded = fromUnpaddedToUnpadded;
function fromUnpaddedToRow(wells, platelayout = null) {
    return fromPaddedToRow(wells, platelayout);
}
exports.fromUnpaddedToRow = fromUnpaddedToRow;
function fromUnpaddedToCol(wells, platelayout = null) {
    if (platelayout) {
        let numbers = fromUnpaddedToNumber(wells, platelayout);
        let numbers_str = numbers.map((d) => (d ? d : ""));
        let cols = fromNumberToCol(numbers_str, platelayout);
        return cols;
    }
    else {
        let cols = wells.map((well) => {
            let colMatch = well.match(wellUnitBasics_1.colRegex);
            if (colMatch == null) {
                return null;
            }
            else {
                let col = colMatch[0];
                let col_num = +col;
                return `${col_num}`;
            }
        });
        return cols;
    }
}
exports.fromUnpaddedToCol = fromUnpaddedToCol;
function fromUnpaddedToNumber(wells, plate_layout) {
    // console.log(wells);
    return fromPaddedToNumber(wells, plate_layout);
}
exports.fromUnpaddedToNumber = fromUnpaddedToNumber;
//from Padded
function fromPaddedToUnpadded(wells, platelayout = null) {
    if (platelayout) {
        let numbers = fromPaddedToNumber(wells, platelayout);
        let num_strs = numbers.map((d) => (d ? d : ""));
        let unpadded = fromNumberToUnpadded(num_strs, platelayout);
        return unpadded;
    }
    else {
        let rowcols = wells.map((well) => {
            let rowMatch = well.match(wellUnitBasics_1.rowRegex);
            let colMatch = well.match(wellUnitBasics_1.colRegex);
            if (rowMatch && colMatch) {
                return { row: rowMatch[0], col: `${+colMatch[0]}` };
            }
            else {
                return null;
            }
        });
        let unpadded = rowcols.map((val) => {
            if (val) {
                return `${val.row}${val.col}`;
            }
            else {
                return null;
            }
        });
        return unpadded;
    }
}
exports.fromPaddedToUnpadded = fromPaddedToUnpadded;
function fromPaddedToRow(wells, platelayout = null) {
    let rows = wells.map((well) => {
        let rowMatch = well.match(wellUnitBasics_1.rowRegex);
        if (rowMatch) {
            if (platelayout) {
                if (platelayout.rows.includes(rowMatch[0])) {
                    return rowMatch[0];
                }
                else {
                    return null;
                }
            }
            else {
                return rowMatch[0];
            }
        }
        else {
            return null;
        }
    });
    return rows;
}
exports.fromPaddedToRow = fromPaddedToRow;
function fromPaddedToCol(wells, platelayout = null) {
    if (platelayout) {
        let numbers = fromPaddedToNumber(wells, platelayout);
        let num_strs = numbers.map((d) => (d ? d : ""));
        let cols = fromNumberToCol(num_strs, platelayout);
        return cols;
    }
    else {
        let cols = wells.map((well) => {
            let colMatch = well.match(wellUnitBasics_1.colRegex);
            if (colMatch) {
                return `${+colMatch[0]}`;
            }
            else {
                return null;
            }
        });
        return cols;
    }
}
exports.fromPaddedToCol = fromPaddedToCol;
function fromPaddedToNumber(wells, plate_layout) {
    // console.log("plate_layout", plate_layout);
    let number_wells_in_one_row = plate_layout.dims[1];
    let result = wells.map((well) => {
        let row = well.match(wellUnitBasics_1.rowRegex);
        let col = well.match(wellUnitBasics_1.colRegex);
        if (row && col) {
            // console.log("row[0]", row[0]);
            // console.log("plate_layout.rows", plate_layout.rows);
            // console.log(
            //   "plate_layout.rows.indexOf(row[0])",
            //   plate_layout.rows.indexOf(row[0])
            // );
            let number_of_rows = plate_layout.rows.indexOf(row[0]);
            let well_number = number_wells_in_one_row * number_of_rows + +col[0];
            if (number_of_rows >= plate_layout.dims[0] || number_of_rows < 0) {
                return null;
            }
            else if (+col >= plate_layout.dims[1] || +col < 0) {
                return null;
            }
            else if (well_number < 1 || well_number > plate_layout.well_count) {
                return null;
            }
            else {
                return `${well_number}`;
            }
        }
        else {
            return null;
        }
    });
    return result;
}
exports.fromPaddedToNumber = fromPaddedToNumber;
//from Number
function fromNumberToRowCol(wells, plate_layout) {
    let number_wells_in_one_row = plate_layout.dims[1];
    let result = wells.map((num) => {
        if (num == null) {
            return null;
        }
        else {
            let number_of_rows_above_well_row = Math.floor(+num / number_wells_in_one_row);
            let col_number = +num % number_wells_in_one_row;
            let row_index;
            if (col_number === 0) {
                //then the well is in the last column
                row_index = number_of_rows_above_well_row - 1;
            }
            else {
                row_index = number_of_rows_above_well_row;
            }
            let row = plate_layout.rows[row_index];
            let col = `${col_number === 0 ? plate_layout.dims[1] : col_number}`;
            if (plate_layout.rows.includes(row) &&
                plate_layout.columns.includes(col)) {
                return { row, col };
            }
            else {
                return null;
            }
        }
    });
    return result;
}
exports.fromNumberToRowCol = fromNumberToRowCol;
function fromNumberToRow(wells, plate_layout) {
    let rowcols = fromNumberToRowCol(wells, plate_layout);
    let result = rowcols.map((val) => (val ? `${val.row}` : null));
    return result;
}
exports.fromNumberToRow = fromNumberToRow;
function fromNumberToCol(wells, plate_layout) {
    let rowcols = fromNumberToRowCol(wells, plate_layout);
    let result = rowcols.map((val) => {
        if (val == null) {
            return null;
        }
        else if (plate_layout.columns.includes(`${val.col}`)) {
            return `${+val.col}`;
        }
        else {
            return null;
        }
    });
    return result;
}
exports.fromNumberToCol = fromNumberToCol;
function fromNumberToUnpadded(wells, plate_layout) {
    let rowcols = fromNumberToRowCol(wells, plate_layout);
    let result = rowcols.map((val) => (val ? `${val.row}${val.col}` : null));
    return result;
}
exports.fromNumberToUnpadded = fromNumberToUnpadded;
function fromNumberToNumber(wells, plate_layout) {
    if (plate_layout == null) {
        return wells.map((d) => null);
    }
    else {
        let padded = fromNumberToPadded(wells, plate_layout);
        let padded_str = padded.map((d) => (d ? d : ""));
        let numbers = fromPaddedToNumber(padded_str, plate_layout);
        return numbers;
    }
}
exports.fromNumberToNumber = fromNumberToNumber;
function fromNumberToPadded(wells, plate_layout) {
    let rowcols = fromNumberToRowCol(wells, plate_layout);
    let result = rowcols.map((val) => {
        if (val) {
            return +val.col <= 9 ? `${val.row}0${val.col}` : `${val.row}${val.col}`;
        }
        else {
            return null;
        }
    });
    return result;
}
exports.fromNumberToPadded = fromNumberToPadded;
