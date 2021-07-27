import wellIDFormatter from "./wellIDFormatter";
import plateLayouts from "./plates";
import type { PlateSizesType } from "./wellTypes";
import util from "util";
// // var wellFormatter = require("./wellFormatter.ts");

let test_plate_sizes = [1, 6, 12, 48, 96, 384];
let test_input_well = ["A1", "C2", "B2"];
let test_input_wells = [
  ["J20"],
  //   ["A1", "A2", "A12", "B1", "B12", "E5", "H11"], //perfect unpadded
  //   ["A1 ", "A2", "A12", " B1", "B12", "E5", "H11"], //trailing whitespace
  //   ["A1", "A2", "A12", "B1", "B12", "E5", "H11", "-"], //null wellid -
  //   ["A1", "A2", "A12", "B1", "B12", "E5", "H11", ""], //emtpy string
  //   ["A1", "A2", "A12", "B1", "B12", "E5", "H11", "M4"], //non-existant well row
  //   ["A1", "A2", "A12", "B1", "B12", "E5", "H11", null], //contains null
  //   ["A1", "A2", "A12", "B1", "B12", "E5", "H11", undefined], //contains undefined
  //   ["A01", "A2", "A12", "B01", "B2", "B12"], //mixed padded and unpadded
  //   ["A1", "A02", "A12", "B1", "B02", "B12"], //mixed padded and unpadded
  //   ["A01", "A02", "A12", "B01", "B12", "E05", "H11"], //perfect padded
  //   ["A01", " A02", "A12", "  B01 ", "B12", "E05", "H11"], //trailing whitespace padded
  //   ["A01", "A02", "A12", "B01", "B12", "E05", "H11", "-"], //null wellid -
  //   ["A01", "A02", "A12", "B01", "B12", "E05", "H11", ""], //emtpy string
  //   ["A01", "A02", "A12", "B01", "B12", "E05", "H11", "M4"], //non-existant well row
  //   ["A01", "A02", "A12", "B01", "B12", "E05", "H11", null], //contains null
  //   ["A01", "A02", "A12", "B01", "B12", "E05", "H11", undefined], //contains undefined
  //   ["A01", "A02", "A012", "B01", "B012", "E05", "H11"], //padding error A012 B012
  //   [1, 2, 12, 24],
  //   [1, 2, 12, 24, 300],
  //   [1, 2, 12, 24, -22],
  //   [1, 2, 12, 24, NaN],
  //   ["1", "2", "12", "24"],
  //   ["1", "2", "12", "24", NaN],
  //   ["1", "2", "12", "24", " 33", "21  "],
  //   ["1", "2", "12", "24", "A3"],
  //   ["1", "2", "12", "24", "A03"],
  //   ["1", "2", "12", "24", "Oogle"],
  //   ["1", "2", "12", "24", null],
  //   ["1", "2", "12", "24", ""],
  //   ["1", "2", "12", "24", undefined],
];

type words = "padded" | "unpadded" | "number" | "col" | "row";

let tos: words[] = ["unpadded", "padded", "col", "row", "number"];
var platenum: PlateSizesType = 6;
let platelayout = plateLayouts[platenum];
// console.dir(platelayout);

test_input_well.forEach((wellset) => {
  console.log("\n");
  console.group(JSON.stringify(wellset));
  tos.forEach((typ) => {
    console.group(typ);
    let formattedWells = wellIDFormatter(wellset, typ, platenum);
    console.log(JSON.stringify(formattedWells));
    console.groupEnd();
  });
  console.log("\n");
  console.groupEnd();
});

// console.log(formattedWells);

// export default wellFormatte
