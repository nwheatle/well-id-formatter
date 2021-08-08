import { colRegex, rowRegex } from "./wellUnitBasics";
import type { PlateLayout, RowCol } from "./wellTypes";

//from Unpadded
export function fromUnpaddedToPadded(
  wells: string[],
  platelayout: PlateLayout | null = null
): (string | null)[] {
  if (platelayout) {
    let nums = fromUnpaddedToNumber(wells, platelayout);
    let num_str = nums.map((d) => (d ? d : ""));
    let rowcols = fromNumberToRowCol(num_str, platelayout);
    let padded = rowcols.map((val) => {
      if (val == null) {
        return null;
      } else {
        if (
          platelayout.rows.includes(val.row) &&
          platelayout.columns.includes(val.col)
        ) {
          return +val.col <= 9
            ? `${val.row}0${val.col}`
            : `${val.row}${val.col}`;
        } else {
          return null;
        }
      }
    });
    return padded;
  } else {
    let rowcols: (RowCol | null)[] = wells.map((well) => {
      let rowMatch: string[] | null = well.match(rowRegex);
      let colMatch: string[] | null = well.match(colRegex);
      if (rowMatch && colMatch) {
        return { row: rowMatch[0], col: `${+colMatch[0]}` };
      } else {
        return null;
      }
    });
    let padded = rowcols.map((val) => {
      if (val == null) {
        return null;
      } else {
        return +val.col === 0 || +val.col >= 10
          ? `${val.row}${val.col}`
          : `${val.row}0${val.col}`;
      }
    });
    return padded;
  }
}

export function fromUnpaddedToUnpadded(
  wells: string[],
  platelayout: PlateLayout | null = null
): (string | null)[] {
  if (platelayout) {
    let numbers = fromUnpaddedToNumber(wells, platelayout);
    let num_str = numbers.map((d) => (d ? d : ""));
    let unpadded = fromNumberToUnpadded(num_str, platelayout);
    return unpadded;
  } else {
    let rowcols: (RowCol | null)[] = wells.map((well) => {
      let rowMatch: string[] | null = well.match(rowRegex);
      let colMatch: string[] | null = well.match(colRegex);
      if (rowMatch && colMatch) {
        return { row: rowMatch[0], col: `${+colMatch[0]}` };
      } else {
        return null;
      }
    });
    let padded = rowcols.map((val) => {
      if (val == null) {
        return null;
      } else {
        return `${val.row}${+val.col}`;
      }
    });
    return padded;
  }
}

export function fromUnpaddedToRow(
  wells: string[],
  platelayout: PlateLayout | null = null
): (string | null)[] {
  return fromPaddedToRow(wells, platelayout);
}

export function fromUnpaddedToCol(
  wells: string[],
  platelayout: PlateLayout | null = null
): (string | null)[] {
  if (platelayout) {
    let numbers = fromUnpaddedToNumber(wells, platelayout);
    let numbers_str: string[] = numbers.map((d) => (d ? d : ""));
    let cols = fromNumberToCol(numbers_str, platelayout);
    return cols;
  } else {
    let cols = wells.map((well) => {
      let colMatch: string[] | null = well.match(colRegex);
      if (colMatch == null) {
        return null;
      } else {
        let col: string = colMatch[0];
        let col_num: number = +col;
        return `${col_num}`;
      }
    });
    return cols;
  }
}

export function fromUnpaddedToNumber(
  wells: string[],
  plate_layout: PlateLayout
): (string | null)[] {
  // console.log(wells);
  return fromPaddedToNumber(wells, plate_layout);
}

//from Padded
export function fromPaddedToUnpadded(
  wells: string[],
  platelayout: PlateLayout | null = null
): (string | null)[] {
  if (platelayout) {
    let numbers = fromPaddedToNumber(wells, platelayout);
    let num_strs = numbers.map((d) => (d ? d : ""));
    let unpadded = fromNumberToUnpadded(num_strs, platelayout);
    return unpadded;
  } else {
    let rowcols: (RowCol | null)[] = wells.map((well) => {
      let rowMatch: string[] | null = well.match(rowRegex);
      let colMatch: string[] | null = well.match(colRegex);
      if (rowMatch && colMatch) {
        return { row: rowMatch[0], col: `${+colMatch[0]}` };
      } else {
        return null;
      }
    });
    let unpadded: (string | null)[] = rowcols.map((val) => {
      if (val) {
        return `${val.row}${val.col}`;
      } else {
        return null;
      }
    });
    return unpadded;
  }
}

export function fromPaddedToRow(
  wells: string[],
  platelayout: PlateLayout | null = null
): (string | null)[] {
  let rows = wells.map((well) => {
    let rowMatch: string[] | null = well.match(rowRegex);
    if (rowMatch) {
      if (platelayout) {
        if (platelayout.rows.includes(rowMatch[0])) {
          return rowMatch[0];
        } else {
          return null;
        }
      } else {
        return rowMatch[0];
      }
    } else {
      return null;
    }
  });
  return rows;
}

export function fromPaddedToCol(
  wells: string[],
  platelayout: PlateLayout | null = null
): (string | null)[] {
  if (platelayout) {
    let numbers = fromPaddedToNumber(wells, platelayout);
    let num_strs = numbers.map((d) => (d ? d : ""));
    let cols = fromNumberToCol(num_strs, platelayout);
    return cols;
  } else {
    let cols = wells.map((well) => {
      let colMatch: string[] | null = well.match(colRegex);
      if (colMatch) {
        return `${+colMatch[0]}`;
      } else {
        return null;
      }
    });
    return cols;
  }
}

export function fromPaddedToNumber(
  wells: string[],
  plate_layout: PlateLayout
): (string | null)[] {
  // console.log("plate_layout", plate_layout);
  let number_wells_in_one_row = plate_layout.dims[1];
  let result = wells.map((well) => {
    let row: string[] | null = well.match(rowRegex);
    let col: string[] | null = well.match(colRegex);
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
      } else if (+col >= plate_layout.dims[1] || +col < 0) {
        return null;
      } else if (well_number < 1 || well_number > plate_layout.well_count) {
        return null;
      } else {
        return `${well_number}`;
      }
    } else {
      return null;
    }
  });
  return result;
}

//from Number
export function fromNumberToRowCol(
  wells: string[],
  plate_layout: PlateLayout
): (RowCol | null)[] {
  let number_wells_in_one_row = plate_layout.dims[1];
  let result = wells.map((num) => {
    if (num == null) {
      return null;
    } else {
      let number_of_rows_above_well_row: number = Math.floor(
        +num / number_wells_in_one_row
      );
      let col_number: number = +num % number_wells_in_one_row;
      let row_index;

      if (col_number === 0) {
        //then the well is in the last column
        row_index = number_of_rows_above_well_row - 1;
      } else {
        row_index = number_of_rows_above_well_row;
      }
      let row: string = plate_layout.rows[row_index];
      let col: string = `${
        col_number === 0 ? plate_layout.dims[1] : col_number
      }`;
      if (
        plate_layout.rows.includes(row) &&
        plate_layout.columns.includes(col)
      ) {
        return { row, col };
      } else {
        return null;
      }
    }
  });
  return result;
}

export function fromNumberToRow(
  wells: string[],
  plate_layout: PlateLayout
): (string | null)[] {
  let rowcols: (RowCol | null)[] = fromNumberToRowCol(wells, plate_layout);
  let result = rowcols.map((val) => (val ? `${val.row}` : null));
  return result;
}

export function fromNumberToCol(
  wells: string[],
  plate_layout: PlateLayout
): (string | null)[] {
  let rowcols: (RowCol | null)[] = fromNumberToRowCol(wells, plate_layout);
  let result = rowcols.map((val) => {
    if (val == null) {
      return null;
    } else if (plate_layout.columns.includes(`${val.col}`)) {
      return `${+val.col}`;
    } else {
      return null;
    }
  });
  return result;
}

export function fromNumberToUnpadded(
  wells: string[],
  plate_layout: PlateLayout
): (string | null)[] {
  let rowcols: (RowCol | null)[] = fromNumberToRowCol(wells, plate_layout);
  let result = rowcols.map((val) => (val ? `${val.row}${val.col}` : null));
  return result;
}

export function fromNumberToNumber(
  wells: string[],
  plate_layout: PlateLayout | null
): (string | null)[] {
  if (plate_layout == null) {
    return wells.map((d) => null);
  } else {
    let padded = fromNumberToPadded(wells, plate_layout);
    let padded_str: string[] = padded.map((d) => (d ? d : ""));
    let numbers = fromPaddedToNumber(padded_str, plate_layout);
    return numbers;
  }
}

export function fromNumberToPadded(
  wells: string[],
  plate_layout: PlateLayout
): (string | null)[] {
  let rowcols: (RowCol | null)[] = fromNumberToRowCol(wells, plate_layout);
  let result = rowcols.map((val) => {
    if (val) {
      return +val.col <= 9 ? `${val.row}0${val.col}` : `${val.row}${val.col}`;
    } else {
      return null;
    }
  });
  return result;
}
