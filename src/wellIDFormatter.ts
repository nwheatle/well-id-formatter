import {
  rows,
  cols,
  padded_cols,
  well_nums,
  well_ids,
  padded_well_ids,
  colRegex,
  rowRegex,
  padded_only_well_ids,
} from "./wellUnitBasics";

import {
  fromPaddedToNumber,
  fromUnpaddedToNumber,
  fromNumberToPadded,
  fromNumberToUnpadded,
  fromNumberToRow,
  fromNumberToCol,
  fromNumberToNumber,
  fromPaddedToUnpadded,
  fromPaddedToRow,
  fromPaddedToCol,
  fromUnpaddedToPadded,
  fromUnpaddedToUnpadded,
  fromUnpaddedToCol,
  fromUnpaddedToRow,
} from "./fromTypeToType";

import plateLayouts from "./plates";
import type { PlateLayout } from "./wellTypes";

type FromWellIDTypes = "padded" | "unpadded" | "number" | null;
type ToWellIDTypes = FromWellIDTypes | "row" | "col";

type WellIDTypes = FromWellIDTypes | "row" | "col";

// declare global {
//   interface Array<T> {
//     includes<U extends T extends U ? unknown : never>(
//       searchElement: U,
//       fromIndex?: number
//     ): boolean;
//   }
// }
function onlyUnique(value: any, index: number, self: any[]) {
  return self.indexOf(value) === index;
}

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  if (value === null || value === undefined) return false;
  const testDummy: TValue = value;
  return true;
}

function wellFormatter(
  from_: any,
  to: "padded" | "number" | "unpadded" | "row" | "col",
  plateLayoutNumber: 1 | 6 | 12 | 24 | 48 | 96 | 384 | null = null
): (string | null)[] | string | null | void {
  //the user might input a single well, or an array of wells
  //well numbers might be numeric or string string type
  //convert all possibilities into array or strings.
  let fromWells: string[] = [];
  let isSingleWell = false;
  if (typeof from_ === "number" || typeof from_ === "string") {
    fromWells = [`${from_}`];
    isSingleWell = true;
  } else if (typeof from_ === "object" && Array.isArray(from_)) {
    fromWells = from_.map((num: number | string | null | undefined) => {
      if (num == null) {
        return "";
      } else {
        return `${num}`;
      }
    });
  }
  //make uppercase and remove trailing whitespace or new lines
  fromWells = fromWells.map((well) => well.toUpperCase().trim());
  //if translating wells to or from well numbers, the plate layout must be known
  let someWellsAreNotNumbers = fromWells.some((well) => isNaN(+well));
  if (
    plateLayoutNumber == null &&
    (to === "number" || !someWellsAreNotNumbers)
  ) {
    console.warn(
      `Cannot can translate well numbers without a plateLayoutNumber (1, 6, 12, 24, 48, 96 or 384)`
    );
    if (isSingleWell) {
      return null;
    } else {
      let nulls = fromWells.map((d) => null);
      return nulls;
    }
  }

  //determine what is the from-type wells
  let fromtype: FromWellIDTypes = null;

  let fromTypes = fromWells.map((well) => detectFromWellIDType(well));

  fromTypes = fromTypes.filter(onlyUnique);

  let fromTypesNoNulls: FromWellIDTypes[] = fromTypes.filter(notEmpty);
  if (fromTypes.length === 1) {
    let fromSingleType: any = fromTypes[0];
    if (["padded", "number", "unpadded"].includes(fromSingleType)) {
      //if there is only one fromType
      fromtype = fromSingleType;
    } else if (fromTypes[0] == null) {
      //if the only type is null
      //return an array of null
      console.warn("wellFormatter could not detect well types");
      if (isSingleWell) {
        return null;
      } else {
        let fromTypesLength: number = fromTypes.length;
        let nullValues: null[] = new Array(fromTypesLength).fill(null);
        return nullValues;
      }
    }
  } else if (fromTypesNoNulls.length === 1) {
    //there is only one type excluding null value
    fromtype = fromTypesNoNulls[0];
  } else {
    //a combination of padded and unpadded wellids
    if (
      fromTypesNoNulls.includes("padded") &&
      fromTypesNoNulls.includes("unpadded") &&
      fromTypesNoNulls.length === 2
    ) {
      fromtype = "padded";
    } else {
      console.warn(
        `\nwellFormatter could not detect well type of input wells.\nThey are not padded (ex: A01), unpadded (ex: A1) nor well numbers (ex: 1)`
      );
      let nulls = fromWells.map((d) => null);
      return nulls;
    }
  }

  //now that we know what the from well type is, translate to the 'to' well type
  let totype = to;

  // console.log(
  //   "fromwells:",
  //   fromWells.map((well) => well)
  // );
  let formattedWells = translateWellTypes(
    fromWells.map((well) => well),
    fromtype,
    totype,
    plateLayoutNumber
  );

  if (isSingleWell) {
    return formattedWells[0];
  } else {
    return formattedWells;
  }
}

export function translateWellTypes(
  wells: string[],
  fromType: FromWellIDTypes,
  toType: ToWellIDTypes,
  plateLayoutNumber: 1 | 6 | 12 | 24 | 48 | 96 | 384 | null
): (string | null)[] {
  if (!(plateLayoutNumber == null)) {
    //user must provide a platelayout for conversions invovling well number ids.
    let plate_layout: PlateLayout = plateLayouts[plateLayoutNumber];
    // console.log(`${fromType}-${toType}`);
    switch (`${fromType}-${toType}`) {
      case "padded-number":
        return fromPaddedToNumber(wells, plate_layout);
      case "unpadded-number":
        return fromUnpaddedToNumber(wells, plate_layout);
      case "number-padded":
        return fromNumberToPadded(wells, plate_layout);
      case "number-unpadded":
        return fromNumberToUnpadded(wells, plate_layout);
      case "number-row":
        return fromNumberToRow(wells, plate_layout);
      case "number-col":
        return fromNumberToCol(wells, plate_layout);
      case "number-number":
        return fromNumberToNumber(wells, plate_layout);
      case "padded-padded":
        return fromUnpaddedToPadded(wells, plate_layout);
      case "padded-unpadded":
        return fromPaddedToUnpadded(wells, plate_layout);
      case "padded-row":
        return fromPaddedToRow(wells, plate_layout);
      case "padded-col":
        return fromPaddedToCol(wells, plate_layout);
      case "number-number":
        return fromNumberToNumber(wells, plate_layout);
      case "unpadded-padded":
        return fromUnpaddedToPadded(wells, plate_layout);
      case "unpadded-unpadded":
        return fromUnpaddedToUnpadded(wells, plate_layout);
      case "unpadded-col":
        return fromUnpaddedToCol(wells, plate_layout);
      case "unpadded-row":
        return fromUnpaddedToRow(wells, plate_layout);
      case "col-col":
        return wells;
      case "row-row":
        return wells;
      default:
        console.warn(`Cannot convert from ${fromType} to ${toType}`);
        return wells.map((d) => null);
    }
  } else {
    let plateWarning =
      "When converting to or from well numbers, plateLayoutSize parameter is required (1,6,12,24,48,96,or 384)";
    let nullWells: null[] = wells.map((d) => null);
    switch (`${fromType}-${toType}`) {
      case "padded-number":
        console.warn(plateWarning);
        return nullWells;
      case "unpadded-number":
        console.warn(plateWarning);
        return nullWells;
      case "number-padded":
        console.warn(plateWarning);
        return nullWells;
      case "number-unpadded":
        console.warn(plateWarning);
        return nullWells;
      case "number-row":
        console.warn(plateWarning);
        return nullWells;
      case "number-col":
        console.warn(plateWarning);
        return nullWells;
      case "number-number":
        console.warn(plateWarning);
        return nullWells;
      case "padded-padded":
        return fromUnpaddedToPadded(wells);
      case "padded-unpadded":
        return fromPaddedToUnpadded(wells);
      case "padded-row":
        return fromPaddedToRow(wells);
      case "padded-col":
        return fromPaddedToCol(wells);
      case "unpadded-padded":
        return fromUnpaddedToPadded(wells);
      case "unpadded-unpadded":
        return fromUnpaddedToUnpadded(wells);
      case "unpadded-col":
        return fromUnpaddedToCol(wells);
      case "unpadded-row":
        return fromUnpaddedToRow(wells);
      case "col-col":
        return wells;
      case "row-row":
        return wells;
      default:
        console.warn(`Cannot convert from ${fromType} to ${toType}`);
        return nullWells;
    }
  }
}

export function detectWellIDType(
  well: string | null | undefined
): "padded" | "number" | "unpadded" | "row" | "col" | null {
  if (well === "") {
    return null;
  } else if (well == null) {
    return null;
  }
  let upperwell = well.toUpperCase();
  if (rows.includes(upperwell)) {
    return "row";
  } else if (cols.includes(upperwell)) {
    return "col";
  } else if (padded_well_ids.includes(upperwell)) {
    return "padded";
  } else if (well_nums.includes(upperwell)) {
    return "number";
  } else if (well_ids.includes(upperwell)) {
    return "unpadded";
  } else {
    // console.warn(`detectWellType did not recognize well ${well}`);
    return null;
  }
}

export function detectFromWellIDType(
  well: string | null | undefined
): FromWellIDTypes {
  if (well === "") {
    return null;
  } else if (well == null) {
    return null;
  }
  let upperwell = well.toUpperCase();
  if (padded_only_well_ids.includes(upperwell)) {
    return "padded";
  } else if (well_nums.includes(upperwell)) {
    return "number";
  } else if (well_ids.includes(upperwell)) {
    return "unpadded";
  } else {
    // console.warn(`detectWellType did not recognize well ${well}`);
    return null;
  }
}

export default wellFormatter;
