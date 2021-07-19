import wellFormatter from "./wellFormatter";
// // var wellFormatter = require("./wellFormatter.ts");

let wells = ["A1", "A2", "B1", "B2"];

let formattedWells = wellFormatter(wells, "padded");

console.log(formattedWells);

// export default wellFormatter;
