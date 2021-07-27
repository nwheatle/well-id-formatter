import {
  PlateSizesType,
  AllWellFormatsType,
  Plate,
  PlateLayouts,
} from "./wellTypes";
import plateLayouts from "./plates";

export default class PlateWells {
  plates: PlateLayouts;

  constructor() {
    this.plates = plateLayouts;
  }

  getPlateWells = (
    plateSize: PlateSizesType,
    wellType: AllWellFormatsType
  ): string[] => {
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
        let all_cols: string[] = [];
        plate.rows.forEach((row) => {
          plate.columns.forEach((col) => {
            all_cols.push(col);
          });
        });
        return all_cols;
      case "all_rows":
        let all_rows: string[] = [];
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

  getPlate = (plateSize: PlateSizesType): Plate => {
    let plate = this.plates[plateSize];
    let all_columns = this.getPlateWells(plateSize, "all_columns");
    let all_rows = this.getPlateWells(plateSize, "all_rows");
    let all_numbers = this.getPlateWells(plateSize, "number");
    let plate_aoo: Plate = [];
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
}
